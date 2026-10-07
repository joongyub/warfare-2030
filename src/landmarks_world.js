// 뉴욕·파리 랜드마크 (코드로 제작)
// EDGE  = 전투 구역 바깥의 큰 랜드마크 (자유의 여신상, 엠파이어 …). { r: 도시 블록을 비울 반지름, build(L, city) → 그룹 }
// FIELD = 전투 구역 안 랜드마크 (그 자리는 무기 배치 불가). (G, k) → k.w × k.d 안에 맞춤
// 재질은 모두 그림(돌 줄눈·창틀·홈 파인 기둥·지붕 이음줄)을 입혀 단색 덩어리(지점토) 느낌이 나지 않게 함
import * as THREE from 'three';
import { makeRng } from './textures.js';
import { nyTowerHD, haussmannHD, zincRoofHD } from './textures_world.js';
import { glassFacadeHD } from './textures_bldg.js';
import { mansardGeo } from './world_city.js';

const texCache = {};
function canvasTex(key, w, h, draw) {
  if (texCache[key]) return texCache[key];
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8;
  return (texCache[key] = t);
}
const std = (c, o = {}) => new THREE.MeshStandardMaterial(Object.assign({ color: c, roughness: 0.85 }, o));
const adder = (G) => (geo, m, x = 0, y = 0, z = 0) => { const o = new THREE.Mesh(geo, m); o.position.set(x, y, z); o.castShadow = o.receiveShadow = true; G.add(o); return o; };
// 상자 UV를 크기에 맞게 늘려 무늬가 일정한 크기로 반복되게 (su·sv = 무늬 한 칸 크기)
function sbox(w, h, d, su, sv) {
  const g = new THREE.BoxGeometry(w, h, d), uv = g.attributes.uv, n = g.attributes.normal;
  for (let i = 0; i < uv.count; i++) {
    const top = Math.abs(n.getY(i)) > 0.5, side = Math.abs(n.getX(i)) > 0.5 ? d : w;
    uv.setXY(i, uv.getX(i) * side / su, uv.getY(i) * (top ? d : h) / sv);
  }
  return g;
}
const uvMul = (g, su, sv) => { const uv = g.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * su, uv.getY(i) * sv); return g; };
const emisMat = (T, o = {}) => new THREE.MeshStandardMaterial(Object.assign({ map: T.map, emissiveMap: T.emissiveMap, emissive: 0xffffff, emissiveIntensity: 0.35, roughness: 0.75 }, o));
function winTex(key, o) {
  return canvasTex('w' + key, 256, 256, (g, w, h) => {
    const rnd = makeRng(key);
    g.fillStyle = o.wall; g.fillRect(0, 0, w, h);
    const cw = w / o.cols, rh = h / o.rows;
    for (let r = 0; r < o.rows; r++) for (let c = 0; c < o.cols; c++) {
      const x = c * cw + cw * o.mx, y = r * rh + rh * o.my, ww = cw * (1 - 2 * o.mx), hh = rh * (1 - 2 * o.my);
      g.fillStyle = rnd() < (o.lit || 0) ? '#e8d6a0' : o.glass;
      if (o.arch) { g.beginPath(); g.moveTo(x, y + hh); g.lineTo(x, y + ww / 2); g.arc(x + ww / 2, y + ww / 2, ww / 2, Math.PI, 0); g.lineTo(x + ww, y + hh); g.closePath(); g.fill(); }
      else g.fillRect(x, y, ww, hh);
      g.fillStyle = 'rgba(255,255,255,0.1)'; g.fillRect(x, y, ww * 0.35, hh);
    }
    if (o.band) { g.fillStyle = o.band; for (let r = 0; r <= o.rows; r++) g.fillRect(0, r * rh - 2, w, 3); }
  });
}
// 삼각 박공(페디먼트): 폭 w, 높이 h, 두께 d — 앞(+z)을 봄
const hex = (c) => '#' + c.toString(16).padStart(6, '0');
const shade = (c, k) => { const r = Math.min(255, Math.max(0, ((c >> 16) & 255) * k)), g = Math.min(255, Math.max(0, ((c >> 8) & 255) * k)), b = Math.min(255, Math.max(0, (c & 255) * k)); return `rgb(${r | 0},${g | 0},${b | 0})`; };

// ---------- 재질 그림 ----------
// 마름돌 쌓기: 엇갈린 돌 블록 + 줄눈 + 돌마다 미세한 색 차이 + 빗물 얼룩. 한 칸 = 약 0.8 유닛
function ashlarMat(key, base, o = {}) {
  const t = canvasTex('ash' + key, 256, 256, (g, w, h) => {
    const rnd = makeRng('ash' + key), rh = o.rh || 26;
    g.fillStyle = shade(base, 0.82); g.fillRect(0, 0, w, h);
    for (let y = 0, r = 0; y < h; y += rh, r++) {
      let x = r % 2 ? -30 : 0;
      while (x < w) {
        const bw = 48 + rnd() * 34, k = 0.93 + rnd() * 0.12;
        g.fillStyle = shade(base, k); g.fillRect(x + 1.5, y + 1.5, bw - 3, rh - 3);
        g.fillStyle = 'rgba(255,255,255,0.13)'; g.fillRect(x + 1.5, y + 1.5, bw - 3, 2);
        g.fillStyle = 'rgba(0,0,0,0.10)'; g.fillRect(x + 1.5, y + rh - 4, bw - 3, 2.5);
        for (let i = 0; i < 10; i++) { g.fillStyle = `rgba(0,0,0,${rnd() * 0.06})`; g.fillRect(x + rnd() * bw, y + rnd() * rh, 2, 2); }
        x += bw;
      }
    }
    for (let i = 0; i < 9; i++) { const x = rnd() * w, gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, 'rgba(60,50,40,0.10)'); gr.addColorStop(1, 'rgba(60,50,40,0)'); g.fillStyle = gr; g.fillRect(x, 0, 3 + rnd() * 8, h * (0.3 + rnd() * 0.7)); }
  });
  return new THREE.MeshStandardMaterial({ map: t, bumpMap: t, bumpScale: 0.6, roughness: o.rough ?? 0.88 });
}
// 창이 있는 외벽: 돌 벽 + 창(움푹 들어간 그림자, 창틀, 유리 반사, 창살, 창턱, 쐐기돌) + 층 띠 + 기둥 사이 벽기둥
function facadeMat(key, o) {
  const t = canvasTex('fac' + key, 256, 256, (g, w, h) => {
    const rnd = makeRng('fac' + key), cw = w / o.cols, rh = h / o.rows, wall = o.wall;
    g.fillStyle = shade(wall, 1); g.fillRect(0, 0, w, h);
    g.fillStyle = 'rgba(0,0,0,0.06)'; for (let y = 0; y < h; y += 12) g.fillRect(0, y, w, 1);
    for (let i = 0; i < 400; i++) { g.fillStyle = `rgba(0,0,0,${rnd() * 0.05})`; g.fillRect(rnd() * w, rnd() * h, 2, 2); }
    if (o.pilaster) for (let c = 0; c <= o.cols; c++) { const x = c * cw; g.fillStyle = shade(wall, 1.06); g.fillRect(x - 5, 0, 10, h); g.fillStyle = 'rgba(0,0,0,0.16)'; g.fillRect(x + 5, 0, 2, h); }
    for (let r = 0; r < o.rows; r++) for (let c = 0; c < o.cols; c++) {
      const ww = cw * (o.ww || 0.5), hh = rh * (o.wh || 0.62), x = c * cw + (cw - ww) / 2, y = r * rh + rh * (o.wy || 0.16);
      const lit = rnd() < (o.lit || 0);
      const path = () => {
        g.beginPath();
        if (o.win === 'arch') { g.moveTo(x, y + hh); g.lineTo(x, y + ww / 2); g.arc(x + ww / 2, y + ww / 2, ww / 2, Math.PI, 0); g.lineTo(x + ww, y + hh); }
        else if (o.win === 'gothic') { g.moveTo(x, y + hh); g.lineTo(x, y + ww * 0.6); g.quadraticCurveTo(x, y, x + ww / 2, y - ww * 0.15); g.quadraticCurveTo(x + ww, y, x + ww, y + ww * 0.6); g.lineTo(x + ww, y + hh); }
        else g.rect(x, y, ww, hh);
        g.closePath();
      };
      g.save(); g.translate(-3, -3); g.fillStyle = shade(wall, 1.12); path(); g.fill(); g.restore();   // 틀 빛
      g.fillStyle = 'rgba(0,0,0,0.35)'; g.save(); g.translate(2, 2); path(); g.fill(); g.restore();      // 움푹한 그림자
      const gr = g.createLinearGradient(x, y, x, y + hh);
      if (lit) { gr.addColorStop(0, '#f3dda0'); gr.addColorStop(1, '#b88f50'); }
      else { gr.addColorStop(0, o.glassTop || '#8fa7ba'); gr.addColorStop(0.55, o.glass || '#4a5866'); gr.addColorStop(1, '#262d35'); }
      g.fillStyle = gr; path(); g.fill();
      g.save(); path(); g.clip();
      g.fillStyle = 'rgba(255,255,255,0.16)'; g.beginPath(); g.moveTo(x, y); g.lineTo(x + ww * 0.6, y); g.lineTo(x, y + hh * 0.5); g.fill();
      g.fillStyle = o.frame || shade(wall, 1.15);
      g.fillRect(x + ww / 2 - 1, y - ww, 2, hh + ww); for (let k = 1; k < 3; k++) g.fillRect(x, y + hh * k / 3, ww, 1.5);
      g.restore();
      g.fillStyle = shade(wall, 1.1); g.fillRect(x - 4, y + hh, ww + 8, 4); g.fillStyle = 'rgba(0,0,0,0.25)'; g.fillRect(x - 4, y + hh + 4, ww + 8, 2);   // 창턱
      if (o.key && o.win !== 'gothic') { g.fillStyle = shade(wall, 1.12); g.fillRect(x + ww / 2 - 5, y - (o.win === 'arch' ? 4 : 9), 10, 9); }       // 쐐기돌
      if (o.balcony && r % 2 === 0) { g.strokeStyle = '#2a2c2e'; g.lineWidth = 1.4; g.strokeRect(x - 3, y + hh * 0.7, ww + 6, hh * 0.3); for (let k = x; k < x + ww; k += 5) { g.beginPath(); g.moveTo(k, y + hh * 0.7); g.lineTo(k, y + hh); g.stroke(); } }
    }
    if (o.band !== false) for (let r = 0; r <= o.rows; r++) { const y = r * rh; g.fillStyle = shade(wall, 1.1); g.fillRect(0, y - 3, w, 4); g.fillStyle = 'rgba(0,0,0,0.22)'; g.fillRect(0, y + 1, w, 2); }
  });
  const m = new THREE.MeshStandardMaterial({ map: t, bumpMap: t, bumpScale: 0.5, roughness: 0.82 });
  if (o.lit) { m.emissiveMap = t; m.emissive = new THREE.Color(0x221a0c); }
  return m;
}
// 홈 파인 돌기둥 (세로 줄무늬)
function fluteMat(base) {
  const t = canvasTex('flute' + base, 128, 32, (g, w, h) => {
    for (let i = 0; i < 16; i++) { const gr = g.createLinearGradient(i * 8, 0, i * 8 + 8, 0); gr.addColorStop(0, shade(base, 0.78)); gr.addColorStop(0.5, shade(base, 1.08)); gr.addColorStop(1, shade(base, 0.9)); g.fillStyle = gr; g.fillRect(i * 8, 0, 8, h); }
  });
  return new THREE.MeshStandardMaterial({ map: t, bumpMap: t, bumpScale: 0.8, roughness: 0.7 });
}
// 지붕: lead(납판·세로 이음줄) / copper(초록 녹청 + 갈빗대 + 흐른 자국)
function roofMat(kind) {
  const t = canvasTex('roof' + kind, 128, 128, (g, w, h) => {
    const rnd = makeRng('roof' + kind);
    const base = kind === 'copper' ? 0x5f9c88 : 0x5d646b;
    g.fillStyle = hex(base); g.fillRect(0, 0, w, h);
    for (let x = 0; x < w; x += 8) { g.fillStyle = shade(base, 0.9 + rnd() * 0.2); g.fillRect(x, 0, 7, h); g.fillStyle = shade(base, kind === 'copper' ? 0.7 : 0.6); g.fillRect(x + 7, 0, 1, h); g.fillStyle = 'rgba(255,255,255,0.18)'; g.fillRect(x, 0, 1, h); }
    for (let i = 0; i < 30; i++) { g.fillStyle = kind === 'copper' ? 'rgba(120,200,170,0.18)' : 'rgba(0,0,0,0.08)'; g.fillRect(rnd() * w, rnd() * h, 2 + rnd() * 3, 10 + rnd() * 30); }
  });
  return new THREE.MeshStandardMaterial({ map: t, bumpMap: t, bumpScale: 0.5, roughness: kind === 'copper' ? 0.5 : 0.6, metalness: 0.35, side: THREE.DoubleSide });
}
const gold = () => std(0xd8aa45, { metalness: 0.9, roughness: 0.28, emissive: 0x2a1c00 });
const bronze = () => std(0x4f6a58, { metalness: 0.6, roughness: 0.45 });

// ---------- 조립 도우미 ----------
// 삼각 박공(페디먼트): 폭 w, 높이 h, 두께 d — 앞(+z)을 봄
function pediment(w, h, d) {
  const s = new THREE.Shape(); s.moveTo(-w / 2, 0); s.lineTo(w / 2, 0); s.lineTo(0, h); s.closePath();
  const g = new THREE.ExtrudeGeometry(s, { depth: d, bevelEnabled: false }); g.translate(0, 0, -d / 2);
  return uvMul(g, 1.2, 1.2);
}
// 처마 돌림띠: 두 단으로 튀어나온 띠 (그림자가 생겨 윤곽이 또렷해짐)
function cornice(add, m, w, d, y, x = 0, z = 0, t = 0.08) {
  add(new THREE.BoxGeometry(w + 0.08, t, d + 0.08), m, x, y + t / 2, z);
  add(new THREE.BoxGeometry(w + 0.16, t * 0.6, d + 0.16), m, x, y + t + t * 0.3, z);
}
// 고전 기둥: 받침 + 홈 파인 몸통 + 머리
function columns(add, m, cap, n, x0, x1, z, y, h, r = 0.06) {
  for (let i = 0; i < n; i++) {
    const x = x0 + (x1 - x0) * (n > 1 ? i / (n - 1) : 0.5);
    add(new THREE.BoxGeometry(r * 2.6, r * 0.8, r * 2.6), cap, x, y + r * 0.4, z);
    add(uvMul(new THREE.CylinderGeometry(r * 0.9, r, h - r * 1.8, 12), 2, 1), m, x, y + h / 2, z);
    add(new THREE.BoxGeometry(r * 2.8, r, r * 2.8), cap, x, y + h - r * 0.5, z);
  }
}
// 작은 가로수 (인스턴스 1번 그리기)
function trees(G, pts, s = 1) {
  const n = pts.length; if (!n) return;
  const crown = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.17 * s, 1), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1 }), n);
  const trunk = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.022 * s, 0.03 * s, 0.22 * s, 5), new THREE.MeshStandardMaterial({ color: 0x5a4632, roughness: 1 }), n);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), c = new THREE.Color(), rnd = makeRng('wtrees' + n);
  pts.forEach(([x, z], i) => {
    const k = 0.8 + rnd() * 0.5;
    m.compose(new THREE.Vector3(x, 0.06 + 0.28 * s * k, z), q, new THREE.Vector3(k, k * 1.1, k)); crown.setMatrixAt(i, m);
    m.compose(new THREE.Vector3(x, 0.06 + 0.11 * s, z), q, new THREE.Vector3(1, 1, 1)); trunk.setMatrixAt(i, m);
    crown.setColorAt(i, c.setHSL(0.24 + rnd() * 0.06, 0.4 + rnd() * 0.15, 0.22 + rnd() * 0.08));
  });
  crown.castShadow = trunk.castShadow = true;
  G.add(crown, trunk);
}
// 가로등 (검은 철 기둥 + 등)
function lamps(add, pts) {
  const iron = std(0x24272a, { metalness: 0.5, roughness: 0.5 }), glow = new THREE.MeshStandardMaterial({ color: 0xfff2c8, emissive: 0xffd890, emissiveIntensity: 0.6 });
  for (const [x, z] of pts) { add(new THREE.CylinderGeometry(0.015, 0.025, 0.55, 6), iron, x, 0.06 + 0.275, z); add(new THREE.SphereGeometry(0.04, 8, 6), glow, x, 0.06 + 0.58, z).castShadow = false; }
}
function flagTex(kind) {
  return canvasTex('flag' + kind, 128, 80, (g, w, h) => {
    if (kind === 'fr') { ['#1f3d8f', '#f4f4f4', '#d0312d'].forEach((c, i) => { g.fillStyle = c; g.fillRect(i * w / 3, 0, w / 3 + 1, h); }); return; }
    for (let i = 0; i < 13; i++) { g.fillStyle = i % 2 ? '#f4f4f4' : '#b8262e'; g.fillRect(0, i * h / 13, w, h / 13 + 1); }
    g.fillStyle = '#2b3a78'; g.fillRect(0, 0, w * 0.42, h * 7 / 13);
    g.fillStyle = '#fff'; for (let y = 0; y < 5; y++) for (let x = 0; x < 6; x++) g.fillRect(4 + x * 8.5, 4 + y * 8, 2, 2);
  });
}
// 부조(조각 판): 돌 바탕에 사람 무리 실루엣을 옅게 새김
function reliefMat(key, base) {
  const t = canvasTex('relief' + key, 128, 128, (g, w, h) => {
    const rnd = makeRng('relief' + key);
    g.fillStyle = shade(base, 0.95); g.fillRect(0, 0, w, h);
    g.strokeStyle = shade(base, 1.15); g.lineWidth = 4; g.strokeRect(3, 3, w - 6, h - 6);
    for (let i = 0; i < 7; i++) {
      const x = 14 + i * 16 + rnd() * 4, y = 40 + rnd() * 20;
      g.fillStyle = 'rgba(0,0,0,0.22)'; g.beginPath(); g.arc(x + 2, y + 2, 6, 0, 7); g.fill(); g.fillRect(x - 4, y + 6, 12, 40 + rnd() * 20);
      g.fillStyle = shade(base, 1.12); g.beginPath(); g.arc(x, y, 6, 0, 7); g.fill(); g.fillRect(x - 6, y + 5, 12, 40 + rnd() * 20);
    }
  });
  return new THREE.MeshStandardMaterial({ map: t, bumpMap: t, bumpScale: 1.2, roughness: 0.85 });
}

// =================== 뉴욕: 전투 구역 안 ===================
function billboardTex() {
  return canvasTex('timesq', 256, 512, (g, w, h) => {
    const rnd = makeRng('timesq');
    g.fillStyle = '#16181c'; g.fillRect(0, 0, w, h);
    const words = ['NEWS', 'LIVE', 'SALE', 'SHOW', '2030', 'MUSICAL', 'TOUR', 'CINEMA', 'SODA', 'PHONE', 'JEANS', 'TV'];
    const cols = ['#e63946', '#f1c40f', '#2ecc71', '#3498db', '#ff6bd6', '#ff8c1a', '#ffffff', '#00d1d1'];
    let y = 4;
    while (y < h - 10) {
      const ph = 40 + rnd() * 70;
      let x = 4;
      while (x < w - 10) {
        const pw = Math.min(w - 4 - x, 60 + rnd() * 140), c = cols[Math.floor(rnd() * cols.length)];
        const gr = g.createLinearGradient(x, y, x + pw, y + ph); gr.addColorStop(0, c); gr.addColorStop(1, cols[Math.floor(rnd() * cols.length)]);
        g.fillStyle = gr; g.fillRect(x, y, pw - 4, ph - 4);
        g.fillStyle = 'rgba(0,0,0,0.18)'; for (let k = y; k < y + ph - 4; k += 3) g.fillRect(x, k, pw - 4, 1);   // LED 줄
        g.fillStyle = rnd() < 0.5 ? '#111' : '#fff'; g.font = `bold ${Math.floor(ph * 0.42)}px "Arial Black",sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle';
        g.fillText(words[Math.floor(rnd() * words.length)], x + pw / 2 - 2, y + ph / 2, pw - 12);
        x += pw;
      }
      y += ph;
    }
  });
}
// 타임스스퀘어: 전광판으로 덮인 원 타임스스퀘어 탑 + 양옆 빌딩 + 빨간 계단 + 노란 택시
function timesq(G, k) {
  const add = adder(G), W = k.w, D = k.d, T = billboardTex();
  const bb = new THREE.MeshStandardMaterial({ map: T, emissiveMap: T, emissive: 0xffffff, emissiveIntensity: 0.95, roughness: 0.35 });
  const stone = emisMat(nyTowerHD(1)), trim = ashlarMat('nyt', 0x9a958c);
  add(sbox(1.0, 3.6, 1.0, 1.0, 1.8), bb, 0, 0.06 + 1.8, -D * 0.1);
  add(sbox(0.8, 0.5, 0.8, 1, 1), stone, 0, 0.06 + 3.85, -D * 0.1);
  add(new THREE.CylinderGeometry(0.02, 0.03, 0.6, 6), std(0xcccccc), 0, 0.06 + 4.4, -D * 0.1);
  for (const s of [-1, 1]) {
    const x = s * W * 0.32, h0 = s < 0 ? 1.4 : 1.7, h1 = s < 0 ? 1.4 : 1.9;
    add(sbox(W * 0.32, h0, D * 0.82, W * 0.32, 1.4), bb, x, 0.06 + h0 / 2, -D * 0.04);
    add(sbox(W * 0.28, h1, D * 0.72, 2, 2.4), stone, x, 0.06 + h0 + h1 / 2, -D * 0.08);
    cornice(add, trim, W * 0.28, D * 0.72, 0.06 + h0 + h1, x, -D * 0.08, 0.06);
  }
  const red = std(0xc8262e, { emissive: 0x500808, roughness: 0.4 });
  for (let i = 0; i < 5; i++) add(new THREE.BoxGeometry(0.85, 0.06, 0.15), red, 0, 0.09 + i * 0.06, D * 0.32 - i * 0.13);
  const taxi = std(0xf2c230, { roughness: 0.45, metalness: 0.2 }), glass = std(0x2a3540, { roughness: 0.2 });
  for (const [x, z, r] of [[-0.85, D * 0.42, 0], [0.9, D * 0.36, 0.1], [0.3, D * 0.46, 0]]) {
    add(new THREE.BoxGeometry(0.34, 0.1, 0.16), taxi, x, 0.13, z).rotation.y = r;
    add(new THREE.BoxGeometry(0.18, 0.07, 0.14), glass, x - 0.02, 0.21, z).rotation.y = r;
  }
  lamps(add, [[-W * 0.45, D * 0.45], [W * 0.45, D * 0.45]]);
}
// 플랫아이언: 뒤가 넓고 앞이 뾰족한 다리미 모양, 테라코타 장식 창, 맨 위 큰 처마
function flatiron(G, k) {
  const add = adder(G), W = k.w, D = k.d, h = 3.6;
  const fac = facadeMat('flat', { wall: 0xd8c9a8, cols: 3, rows: 3, ww: 0.42, wh: 0.6, key: true, glass: '#45525e', lit: 0.12 });
  fac.map = fac.map.clone(); fac.map.needsUpdate = true; fac.map.repeat.set(1 / 0.6, 1 / 0.5); fac.bumpMap = fac.map;
  const base = ashlarMat('flatb', 0xb8ab90), trim = std(0xcfc0a0);
  const s = new THREE.Shape();
  s.moveTo(-W * 0.46, D * 0.44); s.lineTo(W * 0.46, D * 0.44); s.lineTo(0.14, -D * 0.44); s.quadraticCurveTo(0, -D * 0.47, -0.14, -D * 0.44); s.closePath();
  const ext = (dep, sc, y, m) => { const g = new THREE.ExtrudeGeometry(s, { depth: dep, bevelEnabled: false, curveSegments: 6 }); g.rotateX(-Math.PI / 2); g.scale(sc, 1, sc); add(g, m, 0, y, 0); };
  ext(0.5, 1.0, 0.06, base);
  ext(h - 0.5, 0.97, 0.56, fac);
  for (const [y, sc] of [[1.6, 1.0], [2.6, 1.0]]) ext(0.04, sc, 0.06 + y, trim);
  ext(0.1, 1.04, 0.06 + h, trim); ext(0.06, 1.07, 0.16 + h, trim);
  ext(0.3, 0.9, 0.22 + h, fac);
}
// 그랜드 센트럴: 큰 아치 창 3개 + 짝기둥 + 시계와 조각상, 뒤로 메트라이프 빌딩
function grandcentral(G, k) {
  const add = adder(G), W = k.w, D = k.d;
  const stone = ashlarMat('gct', 0xd4c9b0), front = facadeMat('gctf', { wall: 0xd4c9b0, cols: 3, rows: 1, ww: 0.6, wh: 0.78, wy: 0.12, win: 'arch', glass: '#3b4652', key: true, band: false });
  const hall = new THREE.Mesh(sbox(W * 0.86, 1.3, D * 0.42, 0.8, 0.8), [stone, stone, stone, stone, front, stone]);
  front.map.repeat.set(1 / (W * 0.86), 1 / 1.3);
  hall.position.set(0, 0.06 + 0.65, D * 0.22); hall.castShadow = hall.receiveShadow = true; G.add(hall);
  const fl = fluteMat(0xdcd2bd), cap = std(0xe2d9c4);
  for (const x of [-0.42, 0.42].flatMap((c) => [c * W - 0.12, c * W + 0.12])) columns(add, fl, cap, 1, x, x, D * 0.44, 0.06, 1.05, 0.05);
  for (const x of [-W * 0.14, W * 0.14]) columns(add, fl, cap, 1, x, x, D * 0.44, 0.06, 1.05, 0.05);
  cornice(add, cap, W * 0.88, D * 0.44, 0.06 + 1.3, 0, D * 0.22);
  add(sbox(1.1, 0.42, 0.3, 0.8, 0.8), stone, 0, 0.06 + 1.62, D * 0.4);
  const clock = canvasTex('gclock', 64, 64, (g) => { g.fillStyle = '#f3e7b8'; g.beginPath(); g.arc(32, 32, 30, 0, 7); g.fill(); g.strokeStyle = '#7a5a20'; g.lineWidth = 3; g.stroke(); g.strokeStyle = '#222'; g.lineWidth = 3; g.beginPath(); g.moveTo(32, 32); g.lineTo(32, 12); g.moveTo(32, 32); g.lineTo(44, 40); g.stroke(); });
  add(new THREE.CircleGeometry(0.16, 24), new THREE.MeshStandardMaterial({ map: clock, emissiveMap: clock, emissive: 0x806030 }), 0, 0.06 + 1.6, D * 0.4 + 0.152);
  const br = bronze();
  for (const x of [-0.3, 0, 0.3]) { add(new THREE.CylinderGeometry(0.05, 0.08, 0.36, 8), br, x, 0.06 + 2.01, D * 0.4); add(new THREE.SphereGeometry(0.05, 8, 6), br, x, 0.06 + 2.23, D * 0.4); }
  const tower = emisMat(nyTowerHD(3));
  add(sbox(W * 0.62, 4.4, D * 0.36, 2, 2.4), tower, 0, 0.06 + 2.2, -D * 0.24);
  cornice(add, std(0x6c7178, { metalness: 0.3 }), W * 0.62, D * 0.36, 0.06 + 4.4, 0, -D * 0.24, 0.07);
  add(new THREE.BoxGeometry(W * 0.3, 0.3, D * 0.18), std(0x7a8088, { metalness: 0.4 }), 0, 0.06 + 4.7, -D * 0.24);
  lamps(add, [[-W * 0.46, D * 0.46], [W * 0.46, D * 0.46]]);
}
// 뉴욕증권거래소: 대리석 신전 정면, 홈 파인 기둥 6개, 박공 조각, 기둥 뒤 큰 성조기
function nyse(G, k) {
  const add = adder(G), W = k.w, D = k.d, marble = ashlarMat('nyse', 0xe6e0d2, { rough: 0.6 });
  const fac = facadeMat('nysef', { wall: 0xe2dccd, cols: 3, rows: 2, ww: 0.42, wh: 0.6, key: true });
  add(sbox(W * 0.86, 1.75, D * 0.58, W * 0.86 / 3, 1.75 / 2), fac, 0, 0.06 + 0.875, -D * 0.14);
  for (let i = 0; i < 3; i++) add(sbox(W * 0.88 - i * 0.12, 0.07, D * 0.36 - i * 0.07, 0.8, 0.8), marble, 0, 0.06 + 0.035 + i * 0.07, D * 0.28 + i * 0.035);
  const cap = std(0xeee8da);
  columns(add, fluteMat(0xe8e2d4), cap, 6, -W * 0.33, W * 0.33, D * 0.3, 0.27, 1.25, 0.085);
  add(sbox(W * 0.8, 0.22, D * 0.3, 0.8, 0.8), marble, 0, 0.27 + 1.25 + 0.11, D * 0.25);
  add(pediment(W * 0.84, 0.5, D * 0.3), reliefMat('nyse', 0xe6e0d2), 0, 0.27 + 1.47, D * 0.25);
  cornice(add, cap, W * 0.86, D * 0.6, 0.06 + 1.75, 0, -D * 0.14, 0.06);
  const f = new THREE.Mesh(new THREE.PlaneGeometry(W * 0.62, 0.86), new THREE.MeshStandardMaterial({ map: flagTex('us'), side: THREE.DoubleSide, roughness: 0.8 }));
  f.position.set(0, 0.27 + 0.72, D * 0.16); G.add(f);
}
// 록펠러 센터: 계단식 30 록펠러 플라자 + 앞마당 스케이트장 + 황금 프로메테우스상 + 깃발 줄
function rockefeller(G, k) {
  const add = adder(G), W = k.w, D = k.d, m = emisMat(nyTowerHD(0)), trim = ashlarMat('rock', 0xb7ad9c);
  let y = 0.06;
  for (const [w, h] of [[W * 0.74, 1.6], [W * 0.56, 2.6], [W * 0.42, 1.4], [W * 0.3, 0.8]]) { add(sbox(w, h, D * 0.4, 2, 2.4), m, 0, y + h / 2, -D * 0.22); cornice(add, trim, w, D * 0.4, y + h, 0, -D * 0.22, 0.05); y += h + 0.08; }
  add(sbox(W * 0.52, 0.05, D * 0.3, 1, 1), trim, 0, 0.085, D * 0.25);
  add(new THREE.BoxGeometry(W * 0.44, 0.02, D * 0.24), std(0xe4eef5, { roughness: 0.15, metalness: 0.1 }), 0, 0.12, D * 0.25);
  add(new THREE.SphereGeometry(0.14, 12, 8), gold(), 0, 0.32, D * 0.12);
  add(new THREE.BoxGeometry(0.5, 0.18, 0.12), trim, 0, 0.15, D * 0.12);
  const cols = [0xc8262e, 0x2a4f9a, 0xf2c230, 0x2e8b57, 0xffffff];
  for (let i = 0; i < 9; i++) {
    const x = -W * 0.44 + i * W * 0.11;
    add(new THREE.CylinderGeometry(0.01, 0.012, 0.8, 4), std(0xcfd2d4, { metalness: 0.6 }), x, 0.46, D * 0.45);
    add(new THREE.PlaneGeometry(0.15, 0.09), new THREE.MeshStandardMaterial({ color: cols[i % cols.length], side: THREE.DoubleSide }), x + 0.075, 0.8, D * 0.45);
  }
}
// 매디슨 스퀘어 가든: 둥근 경기장 (세로 갈빗대 외벽 + 지붕 링) + 앞 광장
function msg(G, k) {
  const add = adder(G), W = k.w, D = k.d, r = Math.min(W, D) * 0.42;
  const t = canvasTex('msg', 256, 64, (g, w, h) => { g.fillStyle = '#c9c4ba'; g.fillRect(0, 0, w, h); for (let x = 0; x < w; x += 16) { g.fillStyle = '#3d4650'; g.fillRect(x + 4, 6, 8, h - 12); g.fillStyle = 'rgba(255,255,255,0.3)'; g.fillRect(x + 1, 0, 2, h); } });
  const wall = new THREE.MeshStandardMaterial({ map: t, bumpMap: t, bumpScale: 0.6, roughness: 0.6 }); t.repeat.set(4, 1);
  add(new THREE.CylinderGeometry(r, r * 1.04, 1.0, 40), wall, 0, 0.06 + 0.5, -D * 0.04);
  add(new THREE.CylinderGeometry(r * 1.06, r * 1.06, 0.1, 40), std(0x8e959c, { metalness: 0.5 }), 0, 0.06 + 1.05, -D * 0.04);
  add(new THREE.CylinderGeometry(r * 0.75, r * 1.0, 0.25, 40), std(0xb7bcc0, { metalness: 0.3, roughness: 0.4 }), 0, 0.06 + 1.22, -D * 0.04);
  const sign = canvasTex('msgsign', 256, 48, (g, w, h) => { g.fillStyle = '#10151c'; g.fillRect(0, 0, w, h); g.fillStyle = '#ff4757'; g.font = 'bold 30px "Arial Black",sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('THE GARDEN', w / 2, h / 2 + 1); });
  add(new THREE.PlaneGeometry(W * 0.5, 0.2), new THREE.MeshStandardMaterial({ map: sign, emissiveMap: sign, emissive: 0xffffff, emissiveIntensity: 0.9 }), 0, 0.06 + 0.55, -D * 0.04 + r * 1.03 + 0.02);
  trees(G, [[-W * 0.45, D * 0.42], [W * 0.45, D * 0.42], [-W * 0.45, -D * 0.42], [W * 0.45, -D * 0.42]], 1);
}

// =================== 파리: 전투 구역 안 ===================
const STONE_PA = 0xe0d3b6;
// 개선문: 큰 아치가 뚫린 몸체 + 옆 작은 아치 + 네 기둥 부조 + 돌림띠 + 아틱 + 아치 안 삼색기
function arc(G, k) {
  const add = adder(G), stone = ashlarMat('arc', STONE_PA), trim = std(0xd3c5a6, { roughness: 0.8 }), dark = std(0x221f1b);
  const W = Math.min(k.w * 0.85, 2.5), Dp = Math.min(k.d * 0.55, 1.5), H = 2.2, ow = 0.5, oh = 1.15;
  const s = new THREE.Shape();
  s.moveTo(-W / 2, 0); s.lineTo(-ow, 0); s.lineTo(-ow, oh); s.absarc(0, oh, ow, Math.PI, 0, true); s.lineTo(ow, 0); s.lineTo(W / 2, 0); s.lineTo(W / 2, H); s.lineTo(-W / 2, H); s.closePath();
  const g = new THREE.ExtrudeGeometry(s, { depth: Dp, bevelEnabled: false, curveSegments: 16 }); g.translate(0, 0, -Dp / 2); uvMul(g, 1.3, 1.3);
  add(g, stone, 0, 0.06, 0);
  // 아치 안쪽 천장 (격자 장식)
  const vault = new THREE.CylinderGeometry(ow, ow, Dp - 0.02, 16, 1, true, -Math.PI / 2, Math.PI); vault.rotateX(Math.PI / 2);
  add(vault, std(0xb9ad92, { side: THREE.BackSide }), 0, 0.06 + oh, 0);
  // 돌림띠·아틱·꼭대기 난간
  for (const y of [0.32, oh + ow + 0.06]) add(new THREE.BoxGeometry(W + 0.05, 0.06, Dp + 0.05), trim, 0, 0.06 + y, 0);
  cornice(add, trim, W, Dp, 0.06 + H, 0, 0, 0.08);
  add(sbox(W, 0.34, Dp, 0.8, 0.8), stone, 0, 0.06 + H + 0.2 + 0.17, 0);
  add(new THREE.BoxGeometry(W + 0.1, 0.06, Dp + 0.1), trim, 0, 0.06 + H + 0.56, 0);
  // 앞뒤 네 기둥 부조 + 아치 위 둥근 장식(방패)
  const rel = reliefMat('arc', STONE_PA);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const p = add(new THREE.BoxGeometry(W / 2 - ow - 0.18, 0.72, 0.04), rel, sx * (ow + (W / 2 - ow) / 2), 0.06 + 0.78, sz * (Dp / 2 + 0.02));
    if (sz < 0) p.rotation.y = Math.PI;
    add(new THREE.CylinderGeometry(0.1, 0.1, 0.03, 16).rotateX(Math.PI / 2), trim, sx * 0.62, 0.06 + oh + ow + 0.28, sz * (Dp / 2 + 0.015));
  }
  // 옆면 작은 아치 (실제로 뚫린 듯 어둡게 + 테두리)
  for (const sx of [-1, 1]) {
    const sa = new THREE.Shape(); sa.moveTo(-0.22, 0); sa.lineTo(-0.22, 0.55); sa.absarc(0, 0.55, 0.22, Math.PI, 0, true); sa.lineTo(0.22, 0); sa.closePath();
    const sg = new THREE.ShapeGeometry(sa, 10); const m = add(sg, dark, sx * (W / 2 + 0.006), 0.06 + 0.12, 0); m.rotation.y = sx * Math.PI / 2;
  }
  if (!k.noFlag) {
  const f = new THREE.Mesh(new THREE.PlaneGeometry(0.62, 0.9), new THREE.MeshStandardMaterial({ map: flagTex('fr'), side: THREE.DoubleSide }));
    f.position.set(0, 0.06 + 0.95, 0); G.add(f);
  }
  // 둘레 바닥 장식(별 모양 포석 대신 동그란 화강암 띠)
  add(new THREE.RingGeometry(1.25, 1.42, 40).rotateX(-Math.PI / 2), std(0x9b958a), 0, 0.065, 0);
}
// 루브르: ㄷ자 궁전(오스만 석조 + 아연 망사르드 지붕) + 유리 피라미드(금속 격자) + 작은 피라미드 + 분수
function louvre(G, k) {
  const add = adder(G), W = k.w, D = k.d;
  const wing = facadeMat('louvre', { wall: 0xe0d3b6, cols: 4, rows: 2, ww: 0.42, wh: 0.66, win: 'arch', key: true, pilaster: true, lit: 0.08 });
  const zinc = new THREE.MeshStandardMaterial({ map: zincRoofHD(), roughness: 0.55, metalness: 0.35 });
  const trim = std(0xd2c4a4);
  const wings = [[0, -D * 0.38, W * 0.96, D * 0.22, 0], [-W * 0.4, 0.05, D * 0.62, W * 0.16, Math.PI / 2], [W * 0.4, 0.05, D * 0.62, W * 0.16, -Math.PI / 2]];
  for (const [x, z, len, dep, ry] of wings) {
    const g = sbox(len, 1.0, dep, 0.9, 0.9); g.rotateY(ry); add(g, wing, x, 0.06 + 0.5, z);
    const c = new THREE.BoxGeometry(len + 0.08, 0.06, dep + 0.08); c.rotateY(ry); add(c, trim, x, 0.06 + 1.03, z);
    add(mansardGeo(0, 0, 0, len, dep, 0.38, ry), zinc, x, 0.06 + 1.06, z);
  }
  // 가운데 파빌리온 (높은 지붕)
  add(sbox(1.0, 1.25, D * 0.26, 0.9, 0.9), wing, 0, 0.06 + 0.625, -D * 0.38);
  add(mansardGeo(0, 0, 0, 1.0, D * 0.26, 0.6, 0, 0.3), zinc, 0, 0.06 + 1.28, -D * 0.38);
  const pg = canvasTex('pyr', 128, 128, (g, w, h) => {
    g.fillStyle = '#7fa8c2'; g.fillRect(0, 0, w, h);
    const gr = g.createLinearGradient(0, 0, w, h); gr.addColorStop(0, 'rgba(255,255,255,0.35)'); gr.addColorStop(0.5, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, w, h);
    g.strokeStyle = '#3a4650'; g.lineWidth = 2; for (let i = -w; i < w * 2; i += 12) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i + h, h); g.moveTo(i, 0); g.lineTo(i - h, h); g.stroke(); }
  });
  const glass = new THREE.MeshStandardMaterial({ map: pg, metalness: 0.5, roughness: 0.12, transparent: true, opacity: 0.9 });
  const py = new THREE.ConeGeometry(0.95, 1.05, 4, 1); py.rotateY(Math.PI / 4); uvMul(py, 3, 3);
  add(py, glass, 0, 0.06 + 0.525, D * 0.12);
  for (const [x, z] of [[-0.95, D * 0.3], [0.95, D * 0.3], [0, D * 0.44]]) { const p = new THREE.ConeGeometry(0.2, 0.22, 4, 1); p.rotateY(Math.PI / 4); add(p, glass, x, 0.06 + 0.11, z); }
  const water = std(0x3f7392, { roughness: 0.05, metalness: 0.3 }), rim = std(0x9a948a);
  for (const sx of [-1, 1]) { add(new THREE.BoxGeometry(0.76, 0.05, 0.54), rim, sx * 1.08, 0.085, D * 0.08); add(new THREE.BoxGeometry(0.68, 0.03, 0.46), water, sx * 1.08, 0.105, D * 0.08); }
}
// 노트르담: 서쪽 정면(두 사각 탑 + 장미창 + 세 문 + 왕의 회랑) + 본당·익랑 납 지붕 + 날개 버팀벽 + 첨탑
function notredame(G, k) {
  const add = adder(G), W = k.w, D = k.d;
  const stone = ashlarMat('nd', 0xd0c5ab), lead = roofMat('lead'), dark = std(0x221f1c), trim = std(0xc4b899);
  const goth = facadeMat('ndw', { wall: 0xd0c5ab, cols: 2, rows: 1, ww: 0.36, wh: 0.7, wy: 0.2, win: 'gothic', glass: '#2f3f63', glassTop: '#5d6f96', band: false });
  const nw = W * 0.4, nz0 = -D * 0.45, nz1 = D * 0.18, nh = 1.25;
  add(sbox(nw, nh, nz1 - nz0, 0.5, nh), goth, 0, 0.06 + nh / 2, (nz0 + nz1) / 2);
  add(pediment(nw + 0.08, 0.75, nz1 - nz0), lead, 0, 0.06 + nh, (nz0 + nz1) / 2);
  add(sbox(W * 0.86, nh, 0.7, 0.5, nh), goth, 0, 0.06 + nh / 2, -D * 0.12);
  const tr = pediment(0.78, 0.75, W * 0.86); tr.rotateY(Math.PI / 2); add(tr, lead, 0, 0.06 + nh, -D * 0.12);
  // 첨탑 (8각 + 가는 뿔)
  add(new THREE.CylinderGeometry(0.1, 0.14, 0.45, 8), lead, 0, 0.06 + nh + 0.95, -D * 0.12);
  add(new THREE.ConeGeometry(0.11, 1.6, 8), lead, 0, 0.06 + nh + 1.95, -D * 0.12);
  // 날개 버팀벽
  for (const sx of [-1, 1]) for (let i = 0; i < 5; i++) {
    const z = nz0 + 0.3 + i * (nz1 - nz0 - 0.5) / 4;
    add(sbox(0.12, 0.95, 0.14, 0.5, 0.5), stone, sx * (nw / 2 + 0.36), 0.06 + 0.475, z);
    add(new THREE.ConeGeometry(0.06, 0.2, 4), stone, sx * (nw / 2 + 0.36), 0.06 + 1.05, z);
    const fl = add(new THREE.BoxGeometry(0.05, 0.52, 0.07), stone, sx * (nw / 2 + 0.18), 0.06 + 1.02, z); fl.rotation.z = sx * 0.95;
  }
  // 서쪽 정면
  const fz = nz1 + 0.35, fh = 2.2, fw = W * 0.64;
  const front = facadeMat('ndf', { wall: 0xd3c8ae, cols: 4, rows: 3, ww: 0.36, wh: 0.62, win: 'gothic', glass: '#2d2a28', glassTop: '#3e3a36', band: true });
  add(sbox(fw, fh, 0.7, fw / 4, fh / 3), front, 0, 0.06 + fh / 2, fz);
  for (const sx of [-1, 1]) {
    add(sbox(fw * 0.36, 1.05, 0.66, fw * 0.18, 1.05), facadeMat('ndt', { wall: 0xd3c8ae, cols: 2, rows: 1, ww: 0.3, wh: 0.78, win: 'gothic', glass: '#1e1c1a', glassTop: '#2e2a26', band: false }), sx * fw * 0.32, 0.06 + fh + 0.525, fz);
    cornice(add, trim, fw * 0.36, 0.66, 0.06 + fh + 1.05, sx * fw * 0.32, fz, 0.05);
    for (const cx of [-1, 1]) for (const cz of [-1, 1]) add(new THREE.ConeGeometry(0.03, 0.14, 4), stone, sx * fw * 0.32 + cx * fw * 0.16, 0.06 + fh + 1.2, fz + cz * 0.3);
  }
  const rose = canvasTex('rose', 128, 128, (g, w) => {
    g.fillStyle = '#d3c8ae'; g.fillRect(0, 0, w, w);
    const c = w / 2; g.fillStyle = '#26365e'; g.beginPath(); g.arc(c, c, c * 0.92, 0, 7); g.fill();
    const cols = ['#b8352a', '#2f63ad', '#e0b84a', '#3b8f6a'];
    for (let i = 0; i < 24; i++) { g.fillStyle = cols[i % 4]; g.beginPath(); g.moveTo(c, c); g.arc(c, c, c * 0.85, i / 24 * 6.283, (i + 0.5) / 24 * 6.283); g.fill(); }
    g.strokeStyle = '#d3c8ae'; g.lineWidth = 3; g.beginPath(); g.arc(c, c, c * 0.4, 0, 7); g.stroke(); g.beginPath(); g.arc(c, c, c * 0.92, 0, 7); g.stroke();
  });
  add(new THREE.CircleGeometry(0.34, 28), new THREE.MeshStandardMaterial({ map: rose, emissiveMap: rose, emissive: 0x555555 }), 0, 0.06 + 1.45, fz + 0.352);
  add(new THREE.TorusGeometry(0.35, 0.03, 6, 28), trim, 0, 0.06 + 1.45, fz + 0.36);
  for (const x of [-fw * 0.3, 0, fw * 0.3]) {
    const s = new THREE.Shape(); s.moveTo(-0.15, 0); s.lineTo(-0.15, 0.36); s.quadraticCurveTo(-0.15, 0.6, 0, 0.66); s.quadraticCurveTo(0.15, 0.6, 0.15, 0.36); s.lineTo(0.15, 0); s.closePath();
    add(new THREE.ShapeGeometry(s, 8), dark, x, 0.06, fz + 0.352);
  }
  add(new THREE.BoxGeometry(fw * 0.92, 0.12, 0.06), trim, 0, 0.06 + 1.0, fz + 0.37);
  trees(G, [[-W * 0.46, D * 0.1], [W * 0.46, D * 0.1], [-W * 0.46, -D * 0.3], [W * 0.46, -D * 0.3]], 1);
}
// 오페라 가르니에: 아치 1층 + 짝기둥 2층 로지아 + 초록 구리 돔 + 금빛 조각상 + 뒤 무대동 박공
function opera(G, k) {
  const add = adder(G), W = k.w, D = k.d;
  const stone = ashlarMat('op', 0xdacbb0), green = roofMat('copper'), gd = gold(), trim = std(0xcdbd9c);
  const facade = facadeMat('opf', { wall: 0xdacbb0, cols: 7, rows: 2, ww: 0.5, wh: 0.66, win: 'arch', key: true, pilaster: true, glass: '#2f2b28', glassTop: '#4a4238' });
  add(sbox(W * 0.86, 1.3, D * 0.46, W * 0.86 / 7, 0.65), facade, 0, 0.06 + 0.65, D * 0.18);
  const cap = std(0xe6dcc6);
  for (let i = 0; i < 7; i++) { const x = -W * 0.37 + i * W * 0.74 / 6; columns(add, fluteMat(0xe2d6bd), cap, 2, x - 0.05, x + 0.05, D * 0.42, 0.68, 0.58, 0.035); }
  cornice(add, trim, W * 0.88, D * 0.48, 0.06 + 1.3, 0, D * 0.18);
  add(sbox(W * 0.86, 0.22, D * 0.46, 0.8, 0.8), stone, 0, 0.06 + 1.5, D * 0.18);
  for (const sx of [-1, 1]) {
    add(sbox(0.5, 0.36, 0.5, 0.8, 0.8), stone, sx * W * 0.36, 0.06 + 1.78, D * 0.3);
    add(new THREE.CylinderGeometry(0.06, 0.1, 0.32, 8), gd, sx * W * 0.36, 0.06 + 2.12, D * 0.3);
    add(new THREE.SphereGeometry(0.07, 8, 6), gd, sx * W * 0.36, 0.06 + 2.32, D * 0.3);
    add(new THREE.BoxGeometry(0.22, 0.05, 0.08), gd, sx * W * 0.36, 0.06 + 2.26, D * 0.3);
  }
  // 돔: 원통 받침 + 갈빗대 무늬 돔 + 금빛 꼭대기
  add(new THREE.CylinderGeometry(0.78, 0.8, 0.36, 28), stone, 0, 0.06 + 1.6, -D * 0.06);
  const dome = add(uvMul(new THREE.SphereGeometry(0.76, 28, 12, 0, Math.PI * 2, 0, Math.PI / 2), 6, 1), green, 0, 0.06 + 1.78, -D * 0.06); dome.scale.y = 0.6;
  add(new THREE.CylinderGeometry(0.08, 0.1, 0.18, 10), gd, 0, 0.06 + 2.3, -D * 0.06);
  add(new THREE.ConeGeometry(0.07, 0.2, 10), gd, 0, 0.06 + 2.48, -D * 0.06);
  // 무대동 + 박공 + 아폴론상
  add(sbox(W * 0.6, 2.0, D * 0.36, 0.8, 0.8), stone, 0, 0.06 + 1.0, -D * 0.3);
  add(pediment(W * 0.64, 0.56, D * 0.38), green, 0, 0.06 + 2.0, -D * 0.3);
  add(new THREE.CylinderGeometry(0.04, 0.07, 0.36, 6), gd, 0, 0.06 + 2.75, -D * 0.12);
  lamps(add, [[-W * 0.46, D * 0.47], [W * 0.46, D * 0.47], [-W * 0.2, D * 0.48], [W * 0.2, D * 0.48]]);
}
// 팡테옹: 6주 주랑 + 부조 박공 + 십자 본체 + 기둥 고리 드럼 + 납빛 돔 + 랜턴
function pantheon(G, k) {
  const add = adder(G), W = k.w, D = k.d;
  const stone = ashlarMat('pan', 0xdfd3ba), cap = std(0xe8e0cc), lead = roofMat('lead'), fl = fluteMat(0xe4dbc6);
  add(sbox(W * 0.62, 1.2, D * 0.62, 0.8, 0.8), stone, 0, 0.06 + 0.6, -D * 0.05);
  add(sbox(W * 0.9, 1.0, D * 0.3, 0.8, 0.8), stone, 0, 0.06 + 0.5, -D * 0.05);
  cornice(add, cap, W * 0.62, D * 0.62, 0.06 + 1.2, 0, -D * 0.05, 0.06);
  cornice(add, cap, W * 0.9, D * 0.3, 0.06 + 1.0, 0, -D * 0.05, 0.05);
  for (let i = 0; i < 3; i++) add(sbox(W * 0.7 - i * 0.08, 0.06, D * 0.22 - i * 0.05, 0.8, 0.8), stone, 0, 0.06 + 0.03 + i * 0.06, D * 0.36 + i * 0.025);
  columns(add, fl, cap, 6, -W * 0.28, W * 0.28, D * 0.38, 0.24, 0.92, 0.07);
  add(sbox(W * 0.66, 0.16, D * 0.22, 0.8, 0.8), stone, 0, 0.24 + 1.0, D * 0.33);
  add(pediment(W * 0.68, 0.42, D * 0.22), reliefMat('pan', 0xdfd3ba), 0, 0.24 + 1.08, D * 0.33);
  const cy = 0.06 + 1.2, cz = -D * 0.05;
  add(new THREE.CylinderGeometry(0.64, 0.68, 0.3, 28), stone, 0, cy + 0.15, cz);
  add(new THREE.CylinderGeometry(0.55, 0.55, 0.9, 28), facadeMat('pand', { wall: 0xdfd3ba, cols: 8, rows: 1, ww: 0.4, wh: 0.6, win: 'arch', band: false }), 0, cy + 0.75, cz);
  for (let i = 0; i < 16; i++) { const a = i / 16 * Math.PI * 2; add(new THREE.CylinderGeometry(0.028, 0.03, 0.8, 8), fl, Math.cos(a) * 0.64, cy + 0.7, cz + Math.sin(a) * 0.64); }
  add(new THREE.CylinderGeometry(0.71, 0.71, 0.07, 28), cap, 0, cy + 1.13, cz);
  add(new THREE.CylinderGeometry(0.5, 0.55, 0.16, 28), stone, 0, cy + 1.24, cz);
  const dome = add(uvMul(new THREE.SphereGeometry(0.5, 28, 12, 0, Math.PI * 2, 0, Math.PI / 2), 6, 1), lead, 0, cy + 1.3, cz); dome.scale.y = 1.2;
  add(new THREE.CylinderGeometry(0.1, 0.12, 0.3, 10), stone, 0, cy + 2.0, cz);
  add(new THREE.ConeGeometry(0.11, 0.24, 10), lead, 0, cy + 2.27, cz);
  trees(G, [[-W * 0.45, D * 0.45], [W * 0.45, D * 0.45], [-W * 0.45, -D * 0.42], [W * 0.45, -D * 0.42]], 1);
}
// 물랭루주: 빨간 극장 정면 + 전구 간판 + 지붕 위 빨간 풍차(날개 4장)
function moulinrouge(G, k) {
  const add = adder(G), W = k.w, D = k.d, red = std(0xb3222b, { roughness: 0.5, emissive: 0x300000 });
  const sign = canvasTex('moulin', 256, 64, (g, w, h) => { g.fillStyle = '#3b0b10'; g.fillRect(0, 0, w, h); g.fillStyle = '#ffd9a8'; g.font = 'bold 34px Georgia,serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('MOULIN ROUGE', w / 2, h / 2 + 2); for (let x = 6; x < w; x += 12) { g.fillStyle = '#ffd36a'; g.beginPath(); g.arc(x, 5, 2.4, 0, 7); g.arc(x, h - 5, 2.4, 0, 7); g.fill(); } });
  const facade = facadeMat('mr', { wall: 0xa8202a, cols: 6, rows: 2, ww: 0.5, wh: 0.6, win: 'arch', lit: 0.6, glass: '#5a3020', band: true });
  add(sbox(W * 0.86, 1.0, D * 0.5, W * 0.86 / 6, 0.5), facade, W * 0.05, 0.06 + 0.5, -D * 0.05);
  cornice(add, std(0x7a1a20), W * 0.86, D * 0.5, 0.06 + 1.0, W * 0.05, -D * 0.05, 0.05);
  add(new THREE.PlaneGeometry(W * 0.6, 0.22), new THREE.MeshStandardMaterial({ map: sign, emissiveMap: sign, emissive: 0xffffff, emissiveIntensity: 0.9 }), W * 0.12, 0.06 + 0.82, D * 0.2 + 0.01);
  const mx = -W * 0.3, mz = D * 0.05;
  const mill = canvasTex('mill', 64, 64, (g, w, h) => { g.fillStyle = '#b3222b'; g.fillRect(0, 0, w, h); g.fillStyle = 'rgba(0,0,0,0.25)'; for (let y = 0; y < h; y += 8) g.fillRect(0, y, w, 2); g.fillStyle = '#ffd36a'; g.fillRect(26, 20, 12, 16); });
  add(new THREE.CylinderGeometry(0.28, 0.36, 1.1, 10), new THREE.MeshStandardMaterial({ map: mill, roughness: 0.6, emissive: 0x200000 }), mx, 0.06 + 1.0 + 0.55, mz);
  add(new THREE.ConeGeometry(0.34, 0.4, 10), std(0x6e161c), mx, 0.06 + 2.3, mz);
  const blade = std(0xd8343c, { emissive: 0x501010 }), lat = std(0xf0e0c0);
  for (let i = 0; i < 4; i++) {
    const b = add(new THREE.BoxGeometry(0.16, 1.15, 0.03), blade, mx, 0.06 + 1.9, mz + 0.38);
    b.geometry.translate(0, 0.6, 0); b.rotation.z = i * Math.PI / 2 + 0.4;
    const l = add(new THREE.BoxGeometry(0.02, 1.1, 0.035), lat, mx, 0.06 + 1.9, mz + 0.39);
    l.geometry.translate(0, 0.6, 0); l.rotation.z = i * Math.PI / 2 + 0.4;
  }
  add(new THREE.SphereGeometry(0.06, 8, 6), std(0xffd36a, { emissive: 0x806020 }), mx, 0.06 + 1.9, mz + 0.4);
}
// 에펠탑 (전투 구역 안, 줄여서): 아래 큰 모형을 크기만 맞춤 + 샹드마르스 잔디
function eiffelField(G, k) {
  const add = adder(G), T = eiffel();
  T.scale.setScalar(Math.min(k.w, k.d) / 15.5);
  G.add(T);
  const lawn = std(0x6f9e4c, { roughness: 1 });
  for (const sx of [-1, 1]) add(new THREE.BoxGeometry(k.w * 0.3, 0.02, k.d * 0.3), lawn, sx * k.w * 0.3, 0.07, k.d * 0.3);
  trees(G, [[-k.w * 0.46, -k.d * 0.46], [k.w * 0.46, -k.d * 0.46], [-k.w * 0.46, k.d * 0.46], [k.w * 0.46, k.d * 0.46], [-k.w * 0.46, 0], [k.w * 0.46, 0]], 1.1);
}

export { ashlarMat, sbox };
export const FIELD = { timesq, flatiron, grandcentral, nyse, rockefeller, msg, arc, louvre, notredame, opera, pantheon, moulinrouge, eiffel: eiffelField };

// =================== 가장자리 큰 랜드마크 ===================
// 자유의 여신상: 별 모양 요새 섬 + 화강암 받침대 + 횃불을 든 청록 구리 여신상
function liberty() {
  const G = new THREE.Group(), add = adder(G);
  const copper = std(0x78b3a2, { roughness: 0.55, metalness: 0.25 }), gran = std(0xb7ae9c), grass = std(0x5f8a45, { roughness: 1 });
  add(new THREE.CylinderGeometry(7.4, 7.4, 0.06, 40), std(0x2f5f7c, { roughness: 0.1, metalness: 0.35 }), 0, 0.05).castShadow = false;   // 뉴욕항 물
  add(new THREE.CylinderGeometry(5.6, 5.9, 0.3, 32), ashlarMat('libwall', 0x9a958a), 0, 0.12);
  add(new THREE.CylinderGeometry(5.2, 5.6, 0.5, 32), grass, 0, 0.1);
  const star = new THREE.Shape();
  for (let i = 0; i < 22; i++) { const a = i / 22 * Math.PI * 2, r = i % 2 ? 2.2 : 3.2; i ? star.lineTo(Math.cos(a) * r, Math.sin(a) * r) : star.moveTo(Math.cos(a) * r, Math.sin(a) * r); }
  const sg = new THREE.ExtrudeGeometry(star, { depth: 0.7, bevelEnabled: false }); sg.rotateX(-Math.PI / 2); add(sg, gran, 0, 0.35);
  add(new THREE.BoxGeometry(2.0, 0.6, 2.0), gran, 0, 1.35);
  add(new THREE.BoxGeometry(1.5, 2.6, 1.5), gran, 0, 2.95);
  add(new THREE.BoxGeometry(1.7, 0.2, 1.7), gran, 0, 4.3);
  const y0 = 4.4;
  add(new THREE.CylinderGeometry(0.42, 0.72, 2.7, 14), copper, 0, y0 + 1.35);     // 옷자락
  add(new THREE.SphereGeometry(0.5, 14, 8), copper, 0, y0 + 2.7).scale.set(1, 0.6, 0.85);
  add(new THREE.CylinderGeometry(0.13, 0.17, 0.3, 10), copper, 0, y0 + 3.0);
  add(new THREE.SphereGeometry(0.28, 14, 10), copper, 0, y0 + 3.3);
  for (let i = 0; i < 7; i++) { const a = (i / 6 - 0.5) * 2.2, sp = add(new THREE.ConeGeometry(0.05, 0.42, 5), copper, Math.sin(a) * 0.3, y0 + 3.55, Math.cos(a) * 0.12 + 0.05); sp.rotation.z = -Math.sin(a) * 0.9; sp.rotation.x = 0.5; }
  const arm = add(new THREE.CylinderGeometry(0.1, 0.12, 1.5, 8), copper, 0.42, y0 + 3.55, 0); arm.rotation.z = -0.32;
  add(new THREE.CylinderGeometry(0.13, 0.08, 0.3, 8), std(0xd8b04a, { metalness: 0.8, roughness: 0.3 }), 0.66, y0 + 4.35, 0);
  add(new THREE.ConeGeometry(0.12, 0.34, 8), new THREE.MeshStandardMaterial({ color: 0xffc04a, emissive: 0xff9a20, emissiveIntensity: 1.2 }), 0.66, y0 + 4.65, 0);
  const tab = add(new THREE.BoxGeometry(0.34, 0.5, 0.1), copper, -0.45, y0 + 2.2, 0.2); tab.rotation.z = 0.25;
  return G;
}
function empire() {
  const G = new THREE.Group(), add = adder(G), m = emisMat(nyTowerHD(0), { roughness: 0.7 });
  let y = 0;
  for (const [w, h] of [[6.4, 3], [4.8, 12.5], [3.9, 3.5], [3.0, 1.6], [2.2, 1.2], [1.5, 1.2]]) { add(sbox(w, h, w, 2, 2.4), m, 0, y + h / 2, 0); add(new THREE.BoxGeometry(w + 0.12, 0.14, w + 0.12), std(0x8c8a84), 0, y + h, 0); y += h; }
  add(new THREE.CylinderGeometry(0.45, 0.65, 2.6, 8), std(0xbfc4c9, { metalness: 0.6, roughness: 0.3 }), 0, y + 1.3, 0);
  add(new THREE.CylinderGeometry(0.06, 0.1, 3.2, 6), std(0xdddddd), 0, y + 2.6 + 1.6, 0);
  const beacon = add(new THREE.SphereGeometry(0.14, 8, 6), new THREE.MeshBasicMaterial({ color: 0xff3a2e }), 0, y + 5.9, 0);
  beacon.castShadow = false;
  return G;
}
function chrysler() {
  const G = new THREE.Group(), add = adder(G), m = emisMat(nyTowerHD(2), { roughness: 0.7 });
  add(sbox(4.2, 3, 4.2, 2, 2.4), m, 0, 1.5, 0);
  add(sbox(3.2, 15, 3.2, 2, 2.4), m, 0, 3 + 7.5, 0);
  // 은빛 왕관: 점점 작아지는 아치 단 + 삼각 창 + 바늘 첨탑
  const crown = canvasTex('chrysler', 128, 128, (g, w, h) => {
    g.fillStyle = '#c9ced4'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 4; i++) { g.fillStyle = '#2a3038'; g.beginPath(); g.moveTo(i * 32 + 6, h); g.lineTo(i * 32 + 16, h * 0.25); g.lineTo(i * 32 + 26, h); g.fill(); }
    g.strokeStyle = '#f2f2f2'; g.lineWidth = 3; g.beginPath(); for (let i = 0; i < 4; i++) g.arc(i * 32 + 16, h, 15, Math.PI, 0); g.stroke();
  });
  const cm = new THREE.MeshStandardMaterial({ map: crown, metalness: 0.75, roughness: 0.25 });
  let y = 18;
  for (let i = 0; i < 6; i++) {
    const r0 = 1.55 - i * 0.24, r1 = r0 - 0.16, h = 0.85;
    const g = new THREE.CylinderGeometry(r1, r0, h, 16, 1, true); uvMul(g, 4, 1);
    add(g, cm, 0, y + h / 2, 0); y += h;
  }
  add(new THREE.ConeGeometry(0.2, 3.2, 8), std(0xe8ecef, { metalness: 0.9, roughness: 0.2 }), 0, y + 1.6, 0);
  return G;
}
function wtc() {
  const G = new THREE.Group(), add = adder(G);
  const T = glassFacadeHD(2), gm = new THREE.MeshStandardMaterial({ map: T.map, emissiveMap: T.emissiveMap, emissive: 0xffffff, emissiveIntensity: 0.35, roughness: 0.1, metalness: 0.6 });
  add(sbox(4.8, 3, 4.8, 2, 2), std(0xbfc6cc, { metalness: 0.5, roughness: 0.3 }), 0, 1.5, 0);
  // 아래는 정사각형, 위로 갈수록 45도 돌아간 작은 정사각형 → 삼각형 8면
  const H = 26, rb = 3.4, rt = 2.0, P = [], U = [];
  const B = (i) => { const a = Math.PI / 4 + i * Math.PI / 2; return [Math.cos(a) * rb, 0, Math.sin(a) * rb]; };
  const Tp = (i) => { const a = i * Math.PI / 2; return [Math.cos(a) * rt, H, Math.sin(a) * rt]; };
  for (let i = 0; i < 4; i++) {
    const b0 = B(i), b1 = B(i + 1), t1 = Tp(i + 1), t0 = Tp(i);
    P.push(...b0, ...t1, ...b1); U.push(0, 0, 1.2, H / 2, 2.4, 0);
    P.push(...t0, ...t1, ...b0); U.push(-1.2, H / 2, 1.2, H / 2, 0, 0);
  }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(U, 2)); g.computeVertexNormals();
  add(g, gm, 0, 3, 0);
  add(new THREE.BoxGeometry(rt * 1.42, 0.5, rt * 1.42), std(0xd4d9dd, { metalness: 0.5 }), 0, 3 + H + 0.25, 0).rotation.y = Math.PI / 4;
  add(new THREE.CylinderGeometry(0.08, 0.16, 7, 8), std(0xf0f0f0), 0, 3 + H + 3.9, 0);
  return G;
}
// 에펠탑: 그물(격자) 무늬 철골. 다리 4개 + 아치 + 1·2층 전망대 + 위로 가늘어지는 탑
function latticeTex() {
  return canvasTex('lattice', 128, 128, (g, w, h) => {
    g.clearRect(0, 0, w, h);
    g.strokeStyle = '#7a5f45'; g.lineCap = 'square';
    g.lineWidth = 9; g.strokeRect(4, 0, w - 8, h);
    g.lineWidth = 5; g.beginPath(); g.moveTo(4, 0); g.lineTo(w - 4, h); g.moveTo(w - 4, 0); g.lineTo(4, h); g.stroke();
    g.lineWidth = 4; g.beginPath(); g.moveTo(0, h / 2); g.lineTo(w, h / 2); g.stroke();
  });
}
function eiffel() {
  const G = new THREE.Group(), add = adder(G);
  const lat = new THREE.MeshStandardMaterial({ map: latticeTex(), alphaTest: 0.4, side: THREE.DoubleSide, roughness: 0.8, color: 0xc0a080 });
  const solid = std(0x6d5640, { roughness: 0.8 });
  const leg = (from, to, t) => {
    const a = new THREE.Vector3(...from), b = new THREE.Vector3(...to), len = a.distanceTo(b);
    const g = uvMul(new THREE.BoxGeometry(t, len, t), 1, len / 1.6);
    const m = add(g, lat, (a.x + b.x) / 2, (a.y + b.y) / 2, (a.z + b.z) / 2);
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), b.clone().sub(a).normalize());
    const core = add(new THREE.BoxGeometry(t * 0.45, len, t * 0.45), solid, m.position.x, m.position.y, m.position.z); core.quaternion.copy(m.quaternion);
  };
  for (const [sx, sz] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) {
    leg([sx * 6.6, 0, sz * 6.6], [sx * 3.9, 6, sz * 3.9], 1.7);
    leg([sx * 3.9, 6, sz * 3.9], [sx * 2.1, 12.6, sz * 2.1], 1.2);
  }
  // 다리 사이 아치
  for (let i = 0; i < 4; i++) {
    const t = new THREE.TorusGeometry(4.6, 0.18, 6, 28, Math.PI);
    const m = add(t, solid, 0, 0.6, 0); m.rotation.y = i * Math.PI / 2;
    m.position.set(Math.sin(i * Math.PI / 2) * 5.4, 0.6, Math.cos(i * Math.PI / 2) * 5.4);
  }
  // 1층·2층 전망대
  add(uvMul(new THREE.BoxGeometry(9.6, 0.8, 9.6), 6, 0.5), lat, 0, 6.1, 0);
  add(new THREE.BoxGeometry(8.6, 0.25, 8.6), solid, 0, 6.1, 0);
  add(uvMul(new THREE.BoxGeometry(5.4, 0.6, 5.4), 3, 0.4), lat, 0, 12.7, 0);
  add(new THREE.BoxGeometry(4.8, 0.2, 4.8), solid, 0, 12.7, 0);
  // 위쪽 탑: 4면 사각뿔대 (격자) + 가운데 심
  const up = new THREE.CylinderGeometry(0.75, 2.8, 11, 4, 1, true); up.rotateY(Math.PI / 4); uvMul(up, 4, 7);
  add(up, lat, 0, 13 + 5.5, 0);
  add(new THREE.CylinderGeometry(0.35, 1.3, 11, 4).rotateY(Math.PI / 4), solid, 0, 13 + 5.5, 0);
  add(new THREE.BoxGeometry(1.2, 0.9, 1.2), solid, 0, 24.4, 0);
  add(new THREE.CylinderGeometry(0.08, 0.14, 2.6, 6), solid, 0, 26.1, 0);
  return G;
}
function sacrecoeur(L, city) {
  const G = new THREE.Group(), add = adder(G), white = std(0xf3efe6, { roughness: 0.7 });
  const g = new THREE.SphereGeometry(1, 28, 12, 0, Math.PI * 2, 0, Math.PI / 2);
  const hill = add(g, std(0x557a3a, { roughness: 1 })); hill.scale.set(15, 7, 11); hill.position.y = -0.2;
  const rnd = makeRng('montmartre');
  for (let i = 0; i < 160; i++) {
    const a = rnd() * Math.PI * 2, r = 0.3 + Math.sqrt(rnd()) * 0.65, x = Math.cos(a) * r * 15, z = Math.sin(a) * r * 11, y = 7 * Math.sqrt(Math.max(0, 1 - r * r)) - 0.3;
    (city.cityTrees = city.cityTrees || []).push([L.x + x, L.z + z, rnd.range(0.9, 1.3), y]);
  }
  const y0 = 6.6;
  add(new THREE.BoxGeometry(5, 2.2, 3.2), white, 0, y0 + 1.1, 0);
  add(new THREE.BoxGeometry(3.2, 1.6, 0.8), white, 0, y0 + 0.8, 1.9);
  for (const x of [-0.9, 0, 0.9]) add(new THREE.PlaneGeometry(0.55, 1.0), std(0x2c2822), x, y0 + 0.5, 2.31);
  // 큰 돔 (드럼 + 길쭉한 돔 + 랜턴) + 작은 돔 4개 + 뒤 종탑
  add(new THREE.CylinderGeometry(1.15, 1.2, 1.5, 24), white, 0, y0 + 2.2 + 0.75, 0);
  add(new THREE.SphereGeometry(1.15, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), white, 0, y0 + 3.7, 0).scale.y = 1.5;
  add(new THREE.CylinderGeometry(0.22, 0.26, 0.7, 10), white, 0, y0 + 5.7, 0);
  add(new THREE.ConeGeometry(0.24, 0.5, 10), white, 0, y0 + 6.3, 0);
  for (const [x, z] of [[-1.9, 1], [1.9, 1], [-1.9, -1], [1.9, -1]]) {
    add(new THREE.CylinderGeometry(0.45, 0.45, 0.6, 14), white, x, y0 + 2.5, z);
    add(new THREE.SphereGeometry(0.45, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), white, x, y0 + 2.8, z).scale.y = 1.5;
  }
  add(new THREE.BoxGeometry(1, 4.6, 1), white, 0, y0 + 2.3, -2.3);
  add(new THREE.SphereGeometry(0.5, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), white, 0, y0 + 4.6, -2.3).scale.y = 1.4;
  return G;
}
function montparnasse() {
  const G = new THREE.Group(), add = adder(G);
  const t = canvasTex('mtp', 128, 128, (g, w, h) => {
    g.fillStyle = '#2a2622'; g.fillRect(0, 0, w, h);
    const rnd = makeRng('mtp');
    for (let y = 0; y < h; y += 8) { g.fillStyle = '#4a4540'; g.fillRect(0, y, w, 5); for (let x = 0; x < w; x += 8) if (rnd() < 0.12) { g.fillStyle = '#c9a866'; g.fillRect(x, y, 6, 5); } }
  });
  const m = new THREE.MeshStandardMaterial({ map: t, emissiveMap: t, emissive: 0x555555, roughness: 0.25, metalness: 0.5 });
  add(sbox(6, 2, 4, 2, 2), std(0x3a3632), 0, 1, 0);
  const s = new THREE.Shape(); s.moveTo(-2.4, -1.2); s.lineTo(2.4, -1.2); s.absarc(2.4, 0, 1.2, -Math.PI / 2, Math.PI / 2); s.lineTo(-2.4, 1.2); s.absarc(-2.4, 0, 1.2, Math.PI / 2, Math.PI * 1.5);
  const g = new THREE.ExtrudeGeometry(s, { depth: 19, bevelEnabled: false, curveSegments: 10 }); g.rotateX(-Math.PI / 2);
  uvMul(g, 0.4, 0.5);
  add(g, m, 0, 2, 0);
  add(new THREE.BoxGeometry(3, 0.8, 1.6), std(0x55504a), 0, 21.4, 0);
  return G;
}
function defense(L, city) {
  const G = new THREE.Group(), add = adder(G);
  const marble = new THREE.MeshStandardMaterial({ map: winTex('arche', { wall: '#eef0f0', glass: '#c9d2d6', cols: 8, rows: 8, mx: 0.08, my: 0.08 }), roughness: 0.4 });
  // 그랑드 아르슈: 속이 뚫린 거대한 흰 정육면체
  const S = 8, t = 1.2, d = 6.5;
  add(sbox(t, S, d, 1, 1), marble, -S / 2 + t / 2, S / 2, 0);
  add(sbox(t, S, d, 1, 1), marble, S / 2 - t / 2, S / 2, 0);
  add(sbox(S, t, d, 1, 1), marble, 0, S - t / 2, 0);
  add(sbox(S, 0.5, d, 1, 1), marble, 0, 0.25, 0);
  add(new THREE.PlaneGeometry(S - 2 * t, 0.6), std(0xf6f6f6, { transparent: true, opacity: 0.6, side: THREE.DoubleSide }), 0, S * 0.45, 0).rotation.x = -Math.PI / 2;
  // 주변 유리 빌딩 숲 (업무 지구)
  const rnd = makeRng('defense');
  for (let i = 0; i < 8; i++) {
    const a = i / 8 * Math.PI * 2 + 0.3, r = 10 + rnd() * 4, h = 10 + rnd() * 14, w = 2.6 + rnd() * 1.6;
    const T = glassFacadeHD(i % 4), m = new THREE.MeshStandardMaterial({ map: T.map, emissiveMap: T.emissiveMap, emissive: 0xffffff, emissiveIntensity: 0.35, roughness: 0.12, metalness: 0.55 });
    add(sbox(w, h, w, 2, 2), m, Math.cos(a) * r, h / 2, Math.sin(a) * r);
  }
  return G;
}


// 센트럴파크: 잔디(깎은 줄무늬 + 산책로) + 저수지 호수 + 돌담 + 숲(도시 나무로 그림)
function centralpark(L, city) {
  const G = new THREE.Group(), add = adder(G), W = 34, D = 13;
  const t = canvasTex('cpark', 512, 256, (g, w, h) => {
    const rnd = makeRng('cpark');
    g.fillStyle = '#5f8f45'; g.fillRect(0, 0, w, h);
    for (let x = 0; x < w; x += 16) { g.fillStyle = (x / 16) % 2 ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)'; g.fillRect(x, 0, 16, h); }
    for (let i = 0; i < 900; i++) { g.fillStyle = `rgba(${rnd() < 0.5 ? '40,70,30' : '140,170,90'},${rnd() * 0.25})`; g.fillRect(rnd() * w, rnd() * h, 3, 3); }
    g.strokeStyle = '#cdbf9c'; g.lineWidth = 5; g.lineCap = 'round';
    for (let i = 0; i < 6; i++) { g.beginPath(); g.moveTo(rnd() * w, 0); g.bezierCurveTo(rnd() * w, h * 0.3, rnd() * w, h * 0.7, rnd() * w, h); g.stroke(); }
    g.beginPath(); g.moveTo(0, h * 0.75); g.bezierCurveTo(w * 0.3, h * 0.6, w * 0.6, h * 0.9, w, h * 0.72); g.stroke();
    g.fillStyle = '#c9ae6a'; g.beginPath(); g.ellipse(w * 0.8, h * 0.4, 40, 26, 0, 0, 7); g.fill();   // 야구장 흙
  });
  add(new THREE.BoxGeometry(W, 0.06, D), new THREE.MeshStandardMaterial({ map: t, roughness: 1 }), 0, 0.03, 0).castShadow = false;
  const wall = ashlarMat('cpwall', 0x9c968a);
  for (const [x, z, w, d] of [[0, D / 2, W, 0.25], [0, -D / 2, W, 0.25], [W / 2, 0, 0.25, D], [-W / 2, 0, 0.25, D]]) add(sbox(w, 0.3, d, 0.8, 0.4), wall, x, 0.15, z);
  const water = std(0x3d6f8c, { roughness: 0.08, metalness: 0.35 });
  const lake = add(new THREE.CylinderGeometry(1, 1, 0.05, 40), water, 2, 0.07, -0.8); lake.scale.set(6, 1, 3.2); lake.castShadow = false;
  const rim = add(new THREE.CylinderGeometry(1, 1, 0.04, 40), std(0x8f8a7e), 2, 0.055, -0.8); rim.scale.set(6.3, 1, 3.5);
  const pond = add(new THREE.CylinderGeometry(1, 1, 0.05, 30), water, -11, 0.07, 2.4); pond.scale.set(2.6, 1, 1.6); pond.castShadow = false;
  // 보우 브리지 (흰 아치 다리)
  const br = add(new THREE.TorusGeometry(0.9, 0.08, 6, 16, Math.PI), std(0xe8e4da), -11, 0.06, 2.4); br.rotation.y = Math.PI / 2;
  const rnd = makeRng('cptrees');
  for (let i = 0; i < 200; i++) {
    const x = (rnd() - 0.5) * (W - 1.2), z = (rnd() - 0.5) * (D - 1.2);
    if (((x - 2) / 6.8) ** 2 + ((z + 0.8) / 4) ** 2 < 1 || ((x + 11) / 3.2) ** 2 + ((z - 2.4) / 2.2) ** 2 < 1) continue;
    if (x > 9 && x < 15 && z > -2 && z < 2.5) continue;
    (city.cityTrees = city.cityTrees || []).push([L.x + x, L.z + z, 0.9 + rnd() * 0.5, 0.06]);
  }
  return G;
}
// 트로카데로: 샤요궁 두 굽은 날개(센강·에펠탑 쪽으로 열림) + 가운데 테라스 + 계단식 분수 + 정원
function trocadero(L, city) {
  const G = new THREE.Group(), add = adder(G);
  const fac = facadeMat('chaillot', { wall: 0xe6dcc4, cols: 6, rows: 2, ww: 0.42, wh: 0.7, key: false, pilaster: true });
  const stone = ashlarMat('chaillot', 0xe6dcc4), trim = std(0xece4d0);
  const R = 7.5, cz = -1.5;
  for (const s of [-1, 1]) {
    const pav = add(sbox(3.2, 2.6, 2.2, 1.2, 1.3), fac, s * 3.4, 1.3, -3.6);
    cornice(add, trim, 3.2, 2.2, 2.6, s * 3.4, -3.6, 0.1);
    for (let i = 0; i < 7; i++) {
      const a = (s > 0 ? 0.55 : Math.PI - 0.55) + s * (-i * 0.2), a2 = a - s * 0.2, x = Math.cos((a + a2) / 2) * R, z = Math.sin((a + a2) / 2) * R * 0.75 + cz;
      const len = R * 0.2 * 1.02, seg = add(sbox(len, 1.6, 1.4, 1.2, 0.8), fac, x, 0.8, z);
      seg.rotation.y = -Math.atan2(Math.cos((a + a2) / 2) * 0.75, -Math.sin((a + a2) / 2));
      add(new THREE.BoxGeometry(len + 0.1, 0.1, 1.5), trim, x, 1.65, z).rotation.y = seg.rotation.y;
    }
  }
  // 가운데 테라스 + 계단
  add(sbox(4.2, 0.9, 3, 0.8, 0.8), stone, 0, 0.45, -3.6);
  for (let i = 0; i < 4; i++) add(sbox(4 - i * 0.2, 0.2, 0.7, 0.8, 0.8), stone, 0, 0.8 - i * 0.2, -1.8 + i * 0.7);
  // 바르샤바 분수: 긴 물 수조 + 물줄기 + 정원
  const water = std(0x4f86a8, { roughness: 0.05, metalness: 0.3 }), rim = std(0xbcb4a2), jet = new THREE.MeshStandardMaterial({ color: 0xeaf6ff, transparent: true, opacity: 0.7, emissive: 0x335566 });
  add(new THREE.BoxGeometry(3.4, 0.12, 5), rim, 0, 0.06, 3);
  add(new THREE.BoxGeometry(3.1, 0.06, 4.7), water, 0, 0.12, 3).castShadow = false;
  for (let i = 0; i < 6; i++) for (const sx of [-1, 0, 1]) add(new THREE.ConeGeometry(0.08, 0.6 + (sx ? 0 : 0.4), 6), jet, sx * 1.1, 0.15 + (sx ? 0.3 : 0.5), 1.0 + i * 0.75).castShadow = false;
  const lawn = std(0x6c9a4a, { roughness: 1 });
  for (const s of [-1, 1]) add(new THREE.BoxGeometry(3, 0.04, 5.4), lawn, s * 3.6, 0.04, 3);
  trees(G, [[-5.6, 1], [-5.6, 3], [-5.6, 5], [5.6, 1], [5.6, 3], [5.6, 5], [-2, 5.8], [2, 5.8]], 3);
  return G;
}

export const EDGE = {
  liberty: { r: 7, build: liberty }, empire: { r: 6, build: empire }, chrysler: { r: 5, build: chrysler }, wtc: { r: 6, build: wtc },
  eiffel: { r: 10, build: eiffel }, sacrecoeur: { r: 15, build: sacrecoeur }, montparnasse: { r: 6, build: montparnasse }, defense: { r: 16, build: defense },
  centralpark: { r: 18.5, build: centralpark }, trocadero: { r: 9, build: trocadero }
};
