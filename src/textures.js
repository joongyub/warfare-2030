// 코드로 그리는 바닥·도로·건물 벽 무늬 (나중에 실제 텍스처 이미지로 교체 가능)
import * as THREE from 'three';

// 같은 씨앗이면 항상 같은 결과가 나오는 난수 (지도가 매번 똑같이 생성되도록)
export function makeRng(seed) {
  let h = 1779033703 ^ String(seed).length;
  for (let i = 0; i < String(seed).length; i++) { h = Math.imul(h ^ String(seed).charCodeAt(i), 3432918353); h = (h << 13) | (h >>> 19); }
  let a = h >>> 0;
  const r = () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  r.range = (a, b) => a + (b - a) * r();
  r.int = (a, b) => Math.floor(r.range(a, b + 1));
  r.pick = (arr) => arr[Math.floor(r() * arr.length)];
  return r;
}

const cache = {};
function canvasTex(key, size, draw) {
  if (cache[key]) return cache[key];
  const c = document.createElement('canvas');
  c.width = c.height = size;
  draw(c.getContext('2d'), size);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  cache[key] = t;
  return t;
}

function speckle(g, s, colors, n, rnd, min = 1, max = 4) {
  for (let i = 0; i < n; i++) {
    g.fillStyle = colors[Math.floor(rnd() * colors.length)];
    const w = min + rnd() * (max - min);
    g.fillRect(rnd() * s, rnd() * s, w, w * (0.6 + rnd() * 0.8));
  }
}

export function sandTex(v) {
  return canvasTex('sand' + v, 128, (g, s) => {
    const rnd = makeRng('sand' + v);
    g.fillStyle = ['#c9a56c', '#c19d63', '#cfad76'][v % 3];
    g.fillRect(0, 0, s, s);
    speckle(g, s, ['#b08d58', '#d6b886', '#b9965f', '#a88653'], 300, rnd);
    g.strokeStyle = 'rgba(120,96,60,0.25)'; g.lineWidth = 1;
    for (let i = 0; i < 3; i++) { g.beginPath(); let x = rnd() * s, y = rnd() * s; g.moveTo(x, y); for (let k = 0; k < 4; k++) { x += rnd() * 30 - 15; y += rnd() * 30 - 15; g.lineTo(x, y); } g.stroke(); }
  });
}

export function beachTex() {
  return canvasTex('beach', 128, (g, s) => {
    const rnd = makeRng('beach');
    g.fillStyle = '#e0c995'; g.fillRect(0, 0, s, s);
    speckle(g, s, ['#f1e4bf', '#d9c695', '#efe0b8'], 300, rnd, 1, 3);
  });
}

// 도로: mask 비트 북1 동2 남4 서8 (연결된 쪽)
export function roadTex(mask) {
  return canvasTex('road' + mask, 128, (g, s) => {
    const rnd = makeRng('road' + mask);
    g.fillStyle = '#4a4b4e'; g.fillRect(0, 0, s, s);
    speckle(g, s, ['#55565a', '#3f4043', '#5d5e61', '#46474a'], 500, rnd, 1, 3);
    // 연결 안 된 쪽은 연석(보도)
    g.fillStyle = '#b9b1a0';
    const c = 14;
    if (!(mask & 1)) g.fillRect(0, 0, s, c);
    if (!(mask & 4)) g.fillRect(0, s - c, s, c);
    if (!(mask & 8)) g.fillRect(0, 0, c, s);
    if (!(mask & 2)) g.fillRect(s - c, 0, c, s);
    g.fillStyle = '#8f887a';
    if (!(mask & 1)) g.fillRect(0, c - 3, s, 3);
    if (!(mask & 4)) g.fillRect(0, s - c, s, 3);
    if (!(mask & 8)) g.fillRect(c - 3, 0, 3, s);
    if (!(mask & 2)) g.fillRect(s - c, 0, 3, s);
    // 중앙 점선
    g.strokeStyle = '#e3c75f'; g.lineWidth = 4; g.setLineDash([12, 10]);
    const m = s / 2;
    const to = [[m, 0, 1], [s, m, 2], [m, s, 4], [0, m, 8]];
    for (const [x, y, b] of to) if (mask & b) { g.beginPath(); g.moveTo(m, m); g.lineTo(x, y); g.stroke(); }
    g.setLineDash([]);
    // 포탄 자국
    if (rnd() < 0.35) { g.fillStyle = 'rgba(25,25,25,0.6)'; g.beginPath(); g.arc(20 + rnd() * 88, 20 + rnd() * 88, 5 + rnd() * 6, 0, 7); g.fill(); }
  });
}

export function slotTex() {
  return canvasTex('slot', 128, (g, s) => {
    g.clearRect(0, 0, s, s);
    g.fillStyle = 'rgba(40,210,225,0.5)'; g.fillRect(6, 6, s - 12, s - 12);
    g.strokeStyle = 'rgba(225,255,255,1)'; g.lineWidth = 8; g.setLineDash([16, 10]);
    g.strokeRect(8, 8, s - 16, s - 16);
  });
}

export function facadeTex(v) {
  return canvasTex('facade' + v, 128, (g, s) => {
    const rnd = makeRng('facade' + v);
    const base = ['#cdbb94', '#c2ad85', '#d6c6a2', '#b59e76', '#c9b48e'][v % 5];
    g.fillStyle = base; g.fillRect(0, 0, s, s);
    speckle(g, s, ['rgba(0,0,0,0.05)', 'rgba(255,255,255,0.08)'], 200, rnd, 2, 6);
    // 창문 (층마다)
    for (let y = 10; y < s - 10; y += 32) {
      for (let x = 10; x < s - 10; x += 30) {
        const broken = rnd() < 0.18;
        g.fillStyle = broken ? '#1a1a1a' : (rnd() < 0.5 ? '#3c4d58' : '#2f3c45');
        g.fillRect(x, y, 16, 18);
        g.fillStyle = 'rgba(0,0,0,0.25)'; g.fillRect(x, y + 18, 16, 3);
      }
    }
    // 그을음
    if (rnd() < 0.4) { const grd = g.createRadialGradient(64, 40, 4, 64, 40, 50); grd.addColorStop(0, 'rgba(20,20,20,0.5)'); grd.addColorStop(1, 'rgba(20,20,20,0)'); g.fillStyle = grd; g.fillRect(0, 0, s, s); }
  });
}

export function roofTex(v) {
  return canvasTex('roof' + v, 64, (g, s) => {
    const rnd = makeRng('roof' + v);
    g.fillStyle = ['#b09d78', '#a4916d', '#b8a682'][v % 3]; g.fillRect(0, 0, s, s);
    speckle(g, s, ['#a69673', '#cdbf9f', '#9d8e6c'], 120, rnd, 1, 3);
    g.strokeStyle = '#8f8163'; g.lineWidth = 4; g.strokeRect(2, 2, s - 4, s - 4);
  });
}

export function rockTex() {
  const t = canvasTex('rock', 256, (g, s) => {
    const rnd = makeRng('rock');
    const grd = g.createLinearGradient(0, 0, 0, s);
    grd.addColorStop(0, '#8b7a5e'); grd.addColorStop(0.15, '#6f6250'); grd.addColorStop(1, '#4b443b');
    g.fillStyle = grd; g.fillRect(0, 0, s, s);
    for (let y = 20; y < s; y += 18 + rnd() * 16) {           // 지층 무늬
      g.strokeStyle = `rgba(30,25,20,${0.2 + rnd() * 0.25})`; g.lineWidth = 2 + rnd() * 3;
      g.beginPath(); g.moveTo(0, y); for (let x = 0; x <= s; x += 16) g.lineTo(x, y + rnd() * 8 - 4); g.stroke();
    }
    for (let i = 0; i < 40; i++) { g.fillStyle = `rgba(${rnd() < 0.5 ? '255,240,210' : '20,15,10'},0.12)`; g.fillRect(rnd() * s, rnd() * s, 10 + rnd() * 30, 3 + rnd() * 6); }
    g.fillStyle = '#9a8a68'; g.fillRect(0, 0, s, 10);         // 윗면 흙
  });
  t.wrapS = THREE.RepeatWrapping;
  return t;
}

export function waterTex() {
  const t = canvasTex('water', 128, (g, s) => {
    const rnd = makeRng('water');
    g.fillStyle = '#2f7fa3'; g.fillRect(0, 0, s, s);
    for (let i = 0; i < 70; i++) { g.strokeStyle = `rgba(200,240,255,${0.15 + rnd() * 0.25})`; g.lineWidth = 2; const x = rnd() * s, y = rnd() * s; g.beginPath(); g.moveTo(x, y); g.quadraticCurveTo(x + 6, y - 3, x + 12, y); g.stroke(); }
  });
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

// ---------- v4 (도시 풍경) ----------
export function grassTex() {
  const t = canvasTex('grass', 256, (g, s) => {
    const rnd = makeRng('grass');
    g.fillStyle = '#6f9a45'; g.fillRect(0, 0, s, s);
    speckle(g, s, ['#7fab50', '#628c3c', '#86b257', '#5a8236', '#93bd62'], 1600, rnd, 1, 4);
    for (let i = 0; i < 14; i++) { g.fillStyle = `rgba(${rnd() < 0.5 ? '255,255,200' : '30,60,20'},0.06)`; g.beginPath(); g.arc(rnd() * s, rnd() * s, 20 + rnd() * 40, 0, 7); g.fill(); }
  });
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

export function cityGroundTex() {
  const t = canvasTex('cityground', 256, (g, s) => {
    const rnd = makeRng('cg');
    g.fillStyle = '#8d9096'; g.fillRect(0, 0, s, s);
    speckle(g, s, ['#979aa0', '#83868c', '#a0a3a8'], 900, rnd, 1, 3);
  });
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

export function sidewalkTex() {
  const t = canvasTex('sidewalk', 128, (g, s) => {
    const rnd = makeRng('sw');
    g.fillStyle = '#b8b4aa'; g.fillRect(0, 0, s, s);
    g.strokeStyle = 'rgba(90,85,75,0.35)'; g.lineWidth = 2;
    for (let i = 0; i <= s; i += 32) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i, s); g.stroke(); g.beginPath(); g.moveTo(0, i); g.lineTo(s, i); g.stroke(); }
    speckle(g, s, ['#c6c2b8', '#aaa69c'], 200, rnd, 1, 3);
  });
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

// 도로 띠: u = 폭 방향, v = 길이 방향(반복)
export function roadStripTex() {
  const t = canvasTex('roadstrip', 128, (g, s) => {
    const rnd = makeRng('rs');
    g.fillStyle = '#55585d'; g.fillRect(0, 0, s, s);
    speckle(g, s, ['#5f6267', '#4c4f53', '#686b70'], 700, rnd, 1, 3);
    g.fillStyle = '#e8e6df'; g.fillRect(6, 0, 4, s); g.fillRect(s - 10, 0, 4, s);
    g.fillStyle = '#e6c34f'; g.fillRect(s / 2 - 5, 0, 3, s); g.fillRect(s / 2 + 2, 0, 3, s);
  });
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

export function ghostRoadTex() {
  const t = canvasTex('ghostroad', 128, (g, s) => {
    g.clearRect(0, 0, s, s);
    g.fillStyle = 'rgba(60,210,230,0.28)'; g.fillRect(8, 0, s - 16, s);
    g.fillStyle = 'rgba(200,255,255,0.95)';
    g.fillRect(4, 0, 8, s * 0.55); g.fillRect(s - 12, 0, 8, s * 0.55);
  });
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

// 한국식 아파트 벽 (흰 벽, 층마다 발코니 띠)
export function aptFacadeTex(v) {
  return canvasTex('apt' + v, 128, (g, s) => {
    const rnd = makeRng('apt' + v);
    g.fillStyle = ['#f1efe9', '#e9e6dd', '#f4f2ee'][v % 3]; g.fillRect(0, 0, s, s);
    for (let y = 0; y < s; y += 16) {
      g.fillStyle = '#c9ccd0'; g.fillRect(0, y + 11, s, 3);
      for (let x = 4; x < s; x += 21) { g.fillStyle = rnd() < 0.15 ? '#8fa9bd' : '#6f8ba1'; g.fillRect(x, y + 3, 15, 8); }
    }
    g.fillStyle = ['#7aa3c9', '#d27a5a', '#7ab48a'][v % 3]; g.fillRect(0, 0, s, 3); // 지붕 쪽 색띠
  });
}
export function aptGableTex(num, v) {
  return canvasTex('gable' + num + v, 128, (g, s) => {
    g.fillStyle = ['#f1efe9', '#e9e6dd', '#f4f2ee'][v % 3]; g.fillRect(0, 0, s, s);
    g.fillStyle = ['#2f5f8f', '#a8492f', '#2f7a4f'][v % 3];
    g.font = 'bold 44px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText(String(num), s / 2, s * 0.22);
    g.fillRect(s * 0.15, s * 0.38, s * 0.7, 4);
  });
}
export function glassTex(v) {
  return canvasTex('glass' + v, 128, (g, s) => {
    const rnd = makeRng('glass' + v);
    const base = ['#5d7f9e', '#4f6f8c', '#7896ad', '#6b8a8f'][v % 4];
    g.fillStyle = base; g.fillRect(0, 0, s, s);
    for (let y = 0; y < s; y += 10) for (let x = 0; x < s; x += 10) { g.fillStyle = `rgba(255,255,255,${0.04 + rnd() * 0.16})`; g.fillRect(x + 1, y + 1, 8, 8); }
    g.fillStyle = 'rgba(20,30,40,0.35)'; for (let y = 0; y < s; y += 10) g.fillRect(0, y, s, 1);
  });
}
export function goldGlassTex() {
  return canvasTex('goldglass', 128, (g, s) => {
    const rnd = makeRng('gold');
    g.fillStyle = '#c99a3a'; g.fillRect(0, 0, s, s);
    for (let y = 0; y < s; y += 8) for (let x = 0; x < s; x += 8) { g.fillStyle = `rgba(255,240,180,${0.1 + rnd() * 0.3})`; g.fillRect(x + 1, y + 1, 6, 6); }
  });
}
// 우드랜드 위장 무늬
export function camoTex() {
  const t = canvasTex('camo', 128, (g, s) => {
    const rnd = makeRng('camo');
    g.fillStyle = '#5f6b3c'; g.fillRect(0, 0, s, s);
    for (const c of ['#4a3a26', '#2b2a22', '#7a7a48']) for (let i = 0; i < 9; i++) {
      g.fillStyle = c; g.beginPath(); let x = rnd() * s, y = rnd() * s; g.moveTo(x, y);
      for (let k = 0; k < 7; k++) g.lineTo(x + Math.cos(k) * (8 + rnd() * 16), y + Math.sin(k) * (6 + rnd() * 12));
      g.fill();
    }
  });
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}
export function fieldTex() {
  return canvasTex('field', 128, (g, s) => {
    for (let i = 0; i < 8; i++) { g.fillStyle = i % 2 ? '#4f9a46' : '#58a64e'; g.fillRect(i * 16, 0, 16, s); }
    g.strokeStyle = '#f2f2f2'; g.lineWidth = 2; g.strokeRect(4, 4, s - 8, s - 8);
    g.beginPath(); g.moveTo(s / 2, 4); g.lineTo(s / 2, s - 4); g.stroke();
    g.beginPath(); g.arc(s / 2, s / 2, 14, 0, 7); g.stroke();
  });
}

// ---------- 도시 테마별 전투 구역 바닥 (나무·건물 없이 깨끗한 배치 공간) ----------
// 서울: 한강공원 잔디 (깎은 줄무늬)
export function lawnStripeTex() {
  const t = canvasTex('lawnstripe', 256, (g, s) => {
    const rnd = makeRng('lawn');
    for (let i = 0; i < 4; i++) { g.fillStyle = i % 2 ? '#86b552' : '#7aaa48'; g.fillRect(0, i * s / 4, s, s / 4); }
    speckle(g, s, ['#8fbd5c', '#6f9c40', '#93c264', '#7da84b'], 1400, rnd, 1, 3);
  });
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}
// 사막 도시용(가자 등): 다진 흙
export function dirtTex() {
  const t = canvasTex('dirt', 256, (g, s) => {
    const rnd = makeRng('dirt');
    g.fillStyle = '#c9b48a'; g.fillRect(0, 0, s, s);
    speckle(g, s, ['#bda57a', '#d4c19a', '#b39b70', '#cdb990'], 1600, rnd, 1, 4);
  });
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}
// 눈 덮인 도시용(모스크바·키이우 겨울)
export function snowTex() {
  const t = canvasTex('snow', 256, (g, s) => {
    const rnd = makeRng('snow');
    g.fillStyle = '#e9eef2'; g.fillRect(0, 0, s, s);
    speckle(g, s, ['#dfe6ec', '#f4f7f9', '#d5dde4'], 1200, rnd, 1, 4);
  });
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}
