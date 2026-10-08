// 도시 키트: 리우데자네이루
// 배경: 코파카바나 해변의 흰·파스텔 모더니즘 아파트, 알록달록한 낮은 집, 언덕 위 파벨라(벽돌 상자 + 파란 물탱크), 야자수, 초록 바위산(모후)
// 전투 구역 안: 마라카낭 경기장, 메트로폴리타나 대성당(원뿔 + 스테인드글라스 띠), 라파 아치(흰 2단 수도교 + 노란 전차), 셀라론 계단(타일 계단)
// 가장자리: 코르코바두 산 꼭대기 구세주 그리스도상, 빵산(팡지아수카르) + 케이블카, 파벨라 언덕
// 바닥: 아틀란치카 대로 남쪽에 코파카바나 물결무늬 산책로 + 모래사장, 구역 남쪽 바깥은 해변과 대서양
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { makeRng } from '../textures.js';
import { cv, mk, once, pane, grime, bricks } from '../textures_world.js';
import { ashlarMat, sbox, std, adder, uvMul, trees } from '../landmarks_world.js';
import { emis } from './common.js';

// ---------------- 공용 도우미 ----------------
const PASTEL = ['#f6f3ec', '#f2e2c2', '#d6eaec', '#f3d3c9', '#e2eed2', '#ebe4f0', '#fbfaf6'];
const HOUSE = ['#e8604c', '#f2c14e', '#4fa3c7', '#77c27c', '#e98bb5', '#f39c34', '#6170c4', '#f4efe4'];
const tex = (key, w, h, draw, rep = true) => once('rio' + key, () => { const [c, g] = cv(w, h); draw(g, w, h); const t = mk(c); if (!rep) t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping; return t; });

// 그룹 안에서 같은 재질끼리 합치는 작은 통 (랜드마크용)
function LB() {
  const map = new Map();
  return {
    push(m, g) {
      if (g.index) g = g.toNonIndexed();
      for (const n of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(n)) g.deleteAttribute(n);
      if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
      if (!map.has(m)) map.set(m, []); map.get(m).push(g);
    },
    build(G) { for (const [m, gs] of map) { const o = new THREE.Mesh(mergeGeometries(gs, false), m); o.castShadow = o.receiveShadow = true; G.add(o); } map.clear(); }
  };
}

// ---------------- 텍스처 ----------------
// 모더니즘 아파트: 층마다 흰 발코니 띠 + 움푹한 유리창 + 나무 덧창
function modTex(v) {
  return once('riomod' + v, () => {
    const W = 256, H = 256, [c, g] = cv(W, H), [ce, e] = cv(W, H), rnd = makeRng('riomod' + v);
    e.fillStyle = '#000'; e.fillRect(0, 0, W, H);
    g.fillStyle = PASTEL[v % PASTEL.length]; g.fillRect(0, 0, W, H); grime(g, W, H, rnd, 700, 0.04);
    const rows = 8, cols = 4, rh = H / rows, cw = W / cols;
    for (let r = 0; r < rows; r++) {
      const y = r * rh;
      g.fillStyle = 'rgba(0,0,0,0.2)'; g.fillRect(0, y, W, rh * 0.74);   // 발코니 안쪽 그늘
      for (let k = 0; k < cols; k++) {
        pane(g, e, k * cw + cw * 0.1, y + rh * 0.12, cw * 0.8, rh * 0.56, rnd, { frame: '#ece9e2', lit: 0.12, sky: '#9fc3d8' });
        if (rnd() < 0.35) { g.fillStyle = rnd.pick(['#8a5a3a', '#3f6f8a', '#6c8a4a', '#c46a3a', '#d9d2c2']); const sx = k * cw + cw * (rnd() < 0.5 ? 0.1 : 0.5); g.fillRect(sx, y + rh * 0.12, cw * 0.4, rh * 0.56); g.fillStyle = 'rgba(0,0,0,0.25)'; for (let q = 0; q < 6; q++) g.fillRect(sx, y + rh * 0.12 + q * rh * 0.093, cw * 0.4, 1); }
      }
      g.fillStyle = '#fdfcf8'; g.fillRect(0, y + rh * 0.72, W, rh * 0.28);               // 발코니 난간 판
      g.fillStyle = 'rgba(0,0,0,0.22)'; g.fillRect(0, y + rh * 0.72, W, 2);
      g.fillStyle = 'rgba(80,120,140,0.35)'; g.fillRect(0, y + rh * 0.66, W, 3);          // 유리 난간 윗선
      for (let k = 0; k <= cols; k++) { g.fillStyle = 'rgba(0,0,0,0.12)'; g.fillRect(k * cw - 1, y, 2, rh); }
    }
    return { map: mk(c), emissiveMap: mk(ce) };
  });
}
// 알록달록 2층 식민지풍 집: 흰 테두리 + 덧창 달린 키 큰 창 + 아치 문
function houseTex(v) {
  return once('riohouse' + v, () => {
    const W = 128, H = 128, [c, g] = cv(W, H), [ce, e] = cv(W, H), rnd = makeRng('riohouse' + v);
    e.fillStyle = '#000'; e.fillRect(0, 0, W, H);
    g.fillStyle = HOUSE[v % HOUSE.length]; g.fillRect(0, 0, W, H); grime(g, W, H, rnd, 300, 0.06);
    g.fillStyle = '#f7f4ec'; g.fillRect(0, 0, W, 9); g.fillRect(0, 62, W, 5); g.fillRect(0, 0, 5, H); g.fillRect(W - 5, 0, 5, H);
    g.fillStyle = 'rgba(0,0,0,0.2)'; g.fillRect(0, 9, W, 2); g.fillRect(0, 67, W, 2);
    g.fillStyle = 'rgba(0,0,0,0.25)'; g.fillRect(0, H - 8, W, 8);
    const sh = rnd.pick(['#2f6b4f', '#2a5d8f', '#f4f1ea', '#8a4a2a']);
    for (let i = 0; i < 3; i++) {
      const x = 12 + i * 38, y = 18;
      g.fillStyle = '#f7f4ec'; g.fillRect(x - 3, y - 3, 26, 40);
      pane(g, e, x, y, 20, 34, rnd, { frame: '#f7f4ec', lit: 0.2, sky: '#7d97a8' });
      g.fillStyle = sh; g.fillRect(x - 9, y, 6, 34); g.fillRect(x + 23, y, 6, 34);
      g.fillStyle = 'rgba(0,0,0,0.25)'; for (let q = 0; q < 8; q++) { g.fillRect(x - 9, y + q * 4.3, 6, 1); g.fillRect(x + 23, y + q * 4.3, 6, 1); }
      g.strokeStyle = '#222'; g.lineWidth = 1.2; g.strokeRect(x - 2, y + 26, 24, 8); for (let q = x; q < x + 22; q += 4) { g.beginPath(); g.moveTo(q, y + 26); g.lineTo(q, y + 34); g.stroke(); }
      if (i === 1) { g.fillStyle = '#f7f4ec'; g.beginPath(); g.moveTo(x - 3, H - 8); g.lineTo(x - 3, 86); g.arc(x + 10, 86, 13, Math.PI, 0); g.lineTo(x + 23, H - 8); g.fill(); g.fillStyle = '#5a3a24'; g.beginPath(); g.moveTo(x, H - 8); g.lineTo(x, 87); g.arc(x + 10, 87, 10, Math.PI, 0); g.lineTo(x + 20, H - 8); g.fill(); }
      else { g.fillStyle = '#f7f4ec'; g.fillRect(x - 3, 78, 26, 36); pane(g, e, x, 81, 20, 30, rnd, { frame: '#f7f4ec', lit: 0.25, sky: '#7d97a8' }); g.fillStyle = sh; g.fillRect(x - 9, 81, 6, 30); g.fillRect(x + 23, 81, 6, 30); }
    }
    return { map: mk(c), emissiveMap: mk(ce) };
  });
}
// 파벨라 상자집: 맨 벽돌 또는 칠한 벽 + 작은 창 (2층)
function favTex(v) {
  return once('riofav' + v, () => {
    const W = 128, H = 128, [c, g] = cv(W, H), [ce, e] = cv(W, H), rnd = makeRng('riofav' + v);
    e.fillStyle = '#000'; e.fillRect(0, 0, W, H);
    if (v < 3) bricks(g, W, H, ['#b5643a', '#a8573a', '#c07a4c'][v], rnd);
    else { g.fillStyle = HOUSE[(v * 3) % HOUSE.length]; g.fillRect(0, 0, W, H); for (let i = 0; i < 6; i++) { g.fillStyle = 'rgba(160,90,60,0.5)'; g.fillRect(rnd() * W, rnd() * H, 10 + rnd() * 30, 6 + rnd() * 16); } }
    grime(g, W, H, rnd, 400, 0.08);
    g.fillStyle = 'rgba(120,120,115,0.85)'; g.fillRect(0, 60, W, 6); g.fillRect(0, 0, W, 4);
    for (let f = 0; f < 2; f++) for (let i = 0; i < 2; i++) {
      if (rnd() < 0.2) continue;
      const x = 14 + i * 58 + rnd() * 16, y = 12 + f * 64 + rnd() * 6, w = 20 + rnd() * 10, h = 22 + rnd() * 8;
      g.fillStyle = rnd() < 0.4 ? '#3c6fa8' : '#d9d4c8'; g.fillRect(x - 2, y - 2, w + 4, h + 4);
      pane(g, e, x, y, w, h, rnd, { lit: 0.3, sky: '#6d7f8c', mull: false });
      if (rnd() < 0.5) { g.strokeStyle = '#2a2a2a'; g.lineWidth = 1.5; for (let q = x + 4; q < x + w; q += 5) { g.beginPath(); g.moveTo(q, y); g.lineTo(q, y + h); g.stroke(); } }
    }
    if (rnd() < 0.5) { g.fillStyle = '#5a3a28'; g.fillRect(50, 96, 18, 32); }
    return { map: mk(c), emissiveMap: mk(ce) };
  });
}
// 테라코타 기와
const tileTex = () => tex('tile', 128, 128, (g, w, h) => {
  const rnd = makeRng('riotile');
  g.fillStyle = '#9c4126'; g.fillRect(0, 0, w, h);
  for (let y = 0; y < h; y += 12) for (let x = (y / 12) % 2 ? -8 : 0; x < w; x += 16) {
    const gr = g.createLinearGradient(x, 0, x + 16, 0); const k = 0.85 + rnd() * 0.3;
    gr.addColorStop(0, `rgb(${120 * k | 0},${50 * k | 0},${30 * k | 0})`); gr.addColorStop(0.5, `rgb(${205 * k | 0},${98 * k | 0},${58 * k | 0})`); gr.addColorStop(1, `rgb(${130 * k | 0},${55 * k | 0},${32 * k | 0})`);
    g.fillStyle = gr; g.fillRect(x + 1, y, 14, 11); g.fillStyle = 'rgba(0,0,0,0.3)'; g.fillRect(x, y + 10, 16, 2);
  }
});
// 산 표면: 위쪽 화강암(세로 빗물 줄) + 아래 열대림. top = 바위가 차지하는 위쪽 비율, cap = 맨 위 초록 띠 비율
function hillTex(key, top, cap = 0) {
  return tex('hill' + key, 256, 256, (g, w, h) => {
    const rnd = makeRng('riohill' + key);
    g.fillStyle = '#3f6e34'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 1600; i++) { g.fillStyle = `rgba(${rnd() < 0.5 ? '30,60,25' : '120,160,80'},${rnd() * 0.45})`; const s = 3 + rnd() * 7; g.beginPath(); g.arc(rnd() * w, rnd() * h, s, 0, 7); g.fill(); }
    const y0 = cap * h, y1 = top * h;
    for (let x = 0; x < w; x += 2) {
      const a = y0 + Math.sin(x * 0.11) * 4 + rnd() * 4, b = y1 + Math.sin(x * 0.07 + 1) * 10 + rnd() * 10;
      const k = 0.8 + rnd() * 0.3;
      g.fillStyle = `rgb(${128 * k | 0},${124 * k | 0},${118 * k | 0})`; g.fillRect(x, a, 2, b - a);
    }
    for (let i = 0; i < 140; i++) { const x = rnd() * w, y = y0 + rnd() * (y1 - y0); g.fillStyle = `rgba(${rnd() < 0.6 ? '40,36,34' : '220,214,204'},${0.1 + rnd() * 0.2})`; g.fillRect(x, y, 1 + rnd() * 2, 10 + rnd() * 40); }
    for (let i = 0; i < 60; i++) { g.fillStyle = 'rgba(70,110,50,0.7)'; g.beginPath(); g.arc(rnd() * w, y0 + rnd() * (y1 - y0), 2 + rnd() * 5, 0, 7); g.fill(); }
  });
}
const hillMat = (key, top, cap) => new THREE.MeshStandardMaterial({ map: hillTex(key, top, cap), bumpMap: hillTex(key, top, cap), bumpScale: 1.2, roughness: 0.95 });
// 야자 잎 (가운데 잎맥 + 빗살 잎)
const frondTex = () => tex('frond', 64, 128, (g, w, h) => {
  g.clearRect(0, 0, w, h);
  g.strokeStyle = '#6b8a3a'; g.lineWidth = 3; g.beginPath(); g.moveTo(w / 2, h); g.lineTo(w / 2, 2); g.stroke();
  for (let y = 6; y < h - 4; y += 4) {
    const L = (w / 2 - 2) * Math.sin(Math.PI * (1 - y / h)) * 0.95 + 4;
    g.strokeStyle = y % 8 ? '#3f7a2c' : '#4e8d36'; g.lineWidth = 2.4;
    g.beginPath(); g.moveTo(w / 2, y + 6); g.lineTo(w / 2 - L, y); g.moveTo(w / 2, y + 6); g.lineTo(w / 2 + L, y); g.stroke();
  }
}, false);
const trunkTex = () => tex('trunk', 32, 64, (g, w, h) => { g.fillStyle = '#8a7258'; g.fillRect(0, 0, w, h); for (let y = 0; y < h; y += 5) { g.fillStyle = 'rgba(40,28,18,0.45)'; g.fillRect(0, y, w, 2); g.fillStyle = 'rgba(255,240,220,0.15)'; g.fillRect(0, y + 2, w, 1); } });
// 코파카바나 물결무늬 포석 (흑백 물결)
const waveTex = () => tex('wave', 256, 128, (g, w, h) => {
  g.fillStyle = '#f4f1ea'; g.fillRect(0, 0, w, h);
  g.fillStyle = '#26262a';
  for (const y0 of [0, 64]) { g.beginPath(); g.moveTo(0, y0 + 16); for (let x = 0; x <= w; x += 4) g.lineTo(x, y0 + 16 + Math.sin(x / w * Math.PI * 4) * 14); for (let x = w; x >= 0; x -= 4) g.lineTo(x, y0 + 46 + Math.sin(x / w * Math.PI * 4) * 14); g.closePath(); g.fill(); }
  const rnd = makeRng('riowave'); for (let i = 0; i < 2200; i++) { g.fillStyle = `rgba(${rnd() < 0.5 ? '0,0,0' : '255,255,255'},0.12)`; g.fillRect(rnd() * w, rnd() * h, 3, 3); }
  g.fillStyle = 'rgba(0,0,0,0.08)'; for (let x = 0; x < w; x += 6) g.fillRect(x, 0, 1, h); for (let y = 0; y < h; y += 6) g.fillRect(0, y, w, 1);
});
const sandTex = () => tex('sand', 256, 256, (g, w, h) => {
  const rnd = makeRng('riosand'); g.fillStyle = '#ead7ad'; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 5000; i++) { g.fillStyle = `rgba(${rnd() < 0.5 ? '160,130,80' : '255,250,235'},${rnd() * 0.3})`; g.fillRect(rnd() * w, rnd() * h, 2, 2); }
  for (let i = 0; i < 40; i++) { g.strokeStyle = 'rgba(180,150,100,0.18)'; g.lineWidth = 2; g.beginPath(); const y = rnd() * h; g.moveTo(0, y); g.bezierCurveTo(w * 0.3, y + 8, w * 0.6, y - 8, w, y); g.stroke(); }
});
const seaTex = () => tex('sea', 256, 256, (g, w, h) => {
  const rnd = makeRng('riosea'); const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#2f8fb0'); gr.addColorStop(1, '#2a7aa2'); g.fillStyle = gr; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 260; i++) { g.strokeStyle = `rgba(255,255,255,${0.08 + rnd() * 0.18})`; g.lineWidth = 1.5; const x = rnd() * w, y = rnd() * h, l = 10 + rnd() * 30; g.beginPath(); g.moveTo(x, y); g.quadraticCurveTo(x + l / 2, y - 3, x + l, y); g.stroke(); }
});
// 셀라론 계단 타일 모자이크 (빨강·노랑·초록·파랑 + 흰 줄눈)
const mosaicTex = () => tex('mosaic', 128, 128, (g, w, h) => {
  const rnd = makeRng('riomosaic'); g.fillStyle = '#e9e4da'; g.fillRect(0, 0, w, h);
  const C = ['#d7263d', '#d7263d', '#f6c90e', '#2a9d4b', '#1f5fbf', '#f4f1ea', '#e86a1c', '#d7263d'];
  for (let y = 0; y < h; y += 8) for (let x = 0; x < w; x += 8) { g.fillStyle = rnd.pick(C); g.fillRect(x + 1, y + 1, 6.5, 6.5); if (rnd() < 0.08) { g.fillStyle = '#1f5fbf'; g.beginPath(); g.arc(x + 4, y + 4, 2, 0, 7); g.fill(); } }
});

// ---------------- 배경 조각 ----------------
function makeM(mat) {
  return {
    mod: [0, 1, 2, 3, 4, 5, 6].map((v) => emis(modTex(v), { roughness: 0.75 })),
    house: [0, 1, 2, 3, 4, 5, 6, 7].map((v) => emis(houseTex(v), { emissiveIntensity: 0.25 })),
    fav: [0, 1, 2, 3, 4, 5].map((v) => emis(favTex(v), { emissiveIntensity: 0.3, roughness: 0.95 })),
    tile: new THREE.MeshStandardMaterial({ map: tileTex(), bumpMap: tileTex(), bumpScale: 0.8, roughness: 0.85 }),
    roof: mat(0x9c9890, { roughness: 0.95 }), rim: mat(0xf4f2ec, { roughness: 0.8 }), slab: mat(0x8f8b84, { roughness: 1 }),
    tank: mat(0x2f6fc0, { roughness: 0.5 }), plot: mat(0xc9bfa9, { roughness: 1 }), lawn: mat(0x5e9a46, { roughness: 1 }),
    trunk: new THREE.MeshStandardMaterial({ map: trunkTex(), roughness: 1 }),
    frond: new THREE.MeshStandardMaterial({ map: frondTex(), alphaTest: 0.45, side: THREE.DoubleSide, roughness: 0.9 }),
    morro: hillMat('morro', 0.35, 0.05)
  };
}
// 야자수: 살짝 휜 줄기 3마디 + 처진 잎 8장
function palm(B, M, rnd, x, z, h, s = 1, y0 = 0) {
  const ang = rnd() * Math.PI * 2, lean = rnd.range(0.05, 0.3), up = new THREE.Vector3(0, 1, 0);
  let px = x, py = y0, pz = z;
  for (let i = 0; i < 3; i++) {
    const len = h / 3, t = (i + 1) / 3, dir = new THREE.Vector3(Math.cos(ang) * lean * t, 1, Math.sin(ang) * lean * t).normalize();
    const g = new THREE.CylinderGeometry(0.045 * s * (1 - i * 0.15), 0.06 * s * (1 - i * 0.15), len, 6);
    uvMul(g, 1, len * 2); g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(up, dir));
    g.translate(px + dir.x * len / 2, py + dir.y * len / 2, pz + dir.z * len / 2); B.push(M.trunk, g);
    px += dir.x * len; py += dir.y * len; pz += dir.z * len;
  }
  const a0 = rnd() * 6;
  for (let k = 0; k < 8; k++) {
    const g = new THREE.PlaneGeometry(0.34 * s, 1.0 * s); g.translate(0, 0.5 * s, 0);
    g.rotateX(1.35 + (k % 2) * 0.4 + rnd() * 0.2); g.rotateY(a0 + k / 8 * Math.PI * 2); g.translate(px, py, pz); B.push(M.frond, g);
  }
}
// 사각뿔 기와 지붕
function hipTile(B, M, x, y, z, w, d, h, ry = 0) {
  const g = new THREE.ConeGeometry(Math.SQRT1_2, 1, 4, 1); g.rotateY(Math.PI / 4); g.scale(w * 1.08, h, d * 1.08); uvMul(g, 3, 2);
  g.rotateY(ry); g.translate(x, y + h / 2, z); B.push(M.tile, g);
}
// 모더니즘 판상 아파트 (해변 쪽 정면 + 옥상 물탱크·기계실)
function slab(B, H, M, rnd, x, z, w, d, h, ry = 0) {
  const m = M.mod[rnd.int(0, M.mod.length - 1)];
  H.boxWalls(B, x, 0, z, w, h, d, ry, m, M.roof, 2.0, 2.4);
  H.roofKit(B, x, z, w, d, h, ry, M.rim, { t: 0.08, rh: 0.14, house: [w * 0.25, 0.35, d * 0.5], hx: w * 0.2, houseM: M.rim, mech: [[-w * 0.25, 0, 0.4, 0.3, 0.4]], mechM: M.tank });
  // 1층 필로티 그림자 띠
  const g = new THREE.BoxGeometry(w + 0.04, 0.25, d + 0.04); g.rotateY(ry); g.translate(x, 0.125, z); B.push(M.slab, g);
}
// 파벨라 상자집 무리: 둥근 언덕 표면(hy(x,z)) 위에 층층이
function favelaCluster(B, H, M, rnd, cx, cz, rx, rz, n, hy) {
  for (let i = 0; i < n; i++) {
    const a = rnd() * Math.PI * 2, r = Math.sqrt(rnd()) * 0.92, x = cx + Math.cos(a) * r * rx, z = cz + Math.sin(a) * r * rz;
    const w = rnd.range(0.6, 1.1), d = rnd.range(0.6, 1.0), fl = rnd() < 0.55 ? 2 : 1, h = fl * 0.3, y = hy(x, z) - 0.15, ry = rnd.range(-0.25, 0.25);
    H.boxWalls(B, x, y, z, w, h + 0.15, d, ry, M.fav[rnd.int(0, M.fav.length - 1)], M.roof, 1.0, 0.6);
    if (rnd() < 0.45) { const t = new THREE.CylinderGeometry(0.1, 0.1, 0.14, 8); t.translate(x + rnd.range(-0.2, 0.2), y + h + 0.22, z + rnd.range(-0.2, 0.2)); B.push(M.tank, t); }
    if (rnd() < 0.25) { const l = new THREE.BoxGeometry(w * 0.6, 0.3, d * 0.6); l.rotateY(ry); l.translate(x, y + h + 0.3, z); B.push(M.fav[rnd.int(0, M.fav.length - 1)], l); }
  }
}
// 둥근 산 지오메트리: f(ρ) = 높이 비율 (ρ: 0 꼭대기 → 1 밑단). uv.v = 높이 비율
function mountGeo(rx, rz, h, f, seed, wob = 0.08) {
  const g = new THREE.SphereGeometry(1, 48, 28, 0, Math.PI * 2, 0, Math.PI / 2), P = g.attributes.position, uv = g.attributes.uv;
  for (let i = 0; i < P.count; i++) {
    const x = P.getX(i), z = P.getZ(i), rho = Math.min(1, Math.hypot(x, z)), a = Math.atan2(z, x);
    const n = 1 + wob * Math.sin(3 * a + seed) + wob * 0.6 * Math.sin(7 * a + seed * 2), y = f(rho);
    P.setXYZ(i, Math.cos(a) * rho * rx * n, h * y, Math.sin(a) * rho * rz * n);
    uv.setXY(i, uv.getX(i) * 4, y);
  }
  g.computeVertexNormals();
  return g;
}
const domeF = (p) => Math.pow(Math.max(0, 1 - p * p), 0.75);

// ---------------- 배경 도시 ----------------
function build(C, H) {
  const { free, B, rnd, mat } = H, S = C.S, b = S.bounds, R = S.river, M = makeM(mat);
  const trees = (C.cityTrees = C.cityTrees || []);
  // 배경 모후(바위 언덕) 자리
  const HILLS = [[-28, -78, 15, 12, 11], [36, -84, 18, 14, 14], [100, -64, 14, 12, 12], [-104, -60, 16, 12, 12], [104, 6, 13, 11, 10], [-112, 12, 14, 12, 11], [-60, 44, 12, 10, 7], [74, 50, 12, 10, 7]];
  for (const [x, z, rx, rz, h] of HILLS) {
    const g = mountGeo(rx, rz, h, domeF, x * 0.1, 0.07); g.translate(x, -0.2, z); B.push(M.morro, g);
    for (let i = 0; i < 70; i++) { const a = rnd() * Math.PI * 2, r = rnd.range(0.45, 0.95); trees.push([x + Math.cos(a) * r * rx, z + Math.sin(a) * r * rz, rnd.range(1, 1.5), h * domeF(r) - 0.35]); }
    // 언덕 아랫자락 파벨라 (카메라 쪽 남쪽 사면)
    const fx = x + rx * 0.35, fz = z + rz * 0.45;
    favelaCluster(B, H, M, rnd, fx, fz, rx * 0.4, rz * 0.3, 70, (px, pz) => { const p = Math.min(1, Math.hypot((px - x) / rx, (pz - z) / rz)); return h * domeF(p) - 0.2; });
  }
  const onHill = (x, z, r) => HILLS.some(([hx, hz, rx, rz]) => Math.hypot((x - hx) / (rx + r), (z - hz) / (rz + r)) < 1);
  const beach0 = b.z1 + 1.2, sea0 = b.z1 + 10;
  for (let bx = -150; bx < 150; bx += 9) for (let bz = -90; bz < 90; bz += 9) {
    const cx = bx + 4.5, cz = bz + 4.5, dist = Math.hypot(cx, cz);
    if (dist > 150 || !free(cx, cz, 4) || onHill(cx, cz, 3)) continue;
    if (cz + 4 > beach0) continue;                       // 해변·바다
    const pg = new THREE.PlaneGeometry(7.6, 7.6); pg.rotateX(-Math.PI / 2); pg.translate(cx, 0.006, cz); B.push(M.plot, pg);
    const side = cz > b.z0 - 4 && (cx < b.x0 || cx > b.x1) && Math.min(Math.abs(cx - b.x0), Math.abs(cx - b.x1)) < 16;
    const beachRow = cz > b.z1 - 14;                       // 아틀란치카 대로 해변 아파트 줄
    const north = R && cz < R.z;                           // 만 건너편 (니테로이)
    const r = rnd();
    if (beachRow || (!side && r < 0.42)) {
      // 모더니즘 판상 아파트 1~2동 (해변 줄은 바다를 봄)
      const n = beachRow ? 1 : rnd.int(1, 2), hm = side ? 0.6 : 1;
      for (let k = 0; k < n; k++) {
        const w = rnd.range(5.4, 7), d = rnd.range(2.2, 2.8), h = rnd.int(10, beachRow ? 18 : dist < 70 ? 26 : 36) * 0.3 * hm;
        slab(B, H, M, rnd, cx, cz + (n > 1 ? (k ? 1.9 : -1.9) : 0), w, d, h, 0);
      }
      if (beachRow) for (let k = 0; k < 4; k++) palm(B, M, rnd, cx - 3 + k * 2, cz + 3.7, rnd.range(1.4, 1.9));
    } else if (r < 0.78 || side) {
      // 알록달록 낮은 집 줄 (기와 지붕) + 야자수
      for (const sz of [-1, 1]) for (let k = 0; k < 4; k++) {
        const w = 1.62, x = cx - 2.7 + k * 1.8, z = cz + sz * 2.3, fl = rnd() < 0.3 ? 3 : 2, h = fl * 0.3;
        H.boxWalls(B, x, 0, z, w, h, 2.1, sz > 0 ? 0 : Math.PI, M.house[rnd.int(0, M.house.length - 1)], null, 1.6, 0.6);
        hipTile(B, M, x, h, z, w, 2.1, 0.32);
      }
      for (let k = 0; k < 2; k++) palm(B, M, rnd, cx + rnd.range(-3, 3), cz + rnd.range(-0.6, 0.6), rnd.range(1.3, 1.8));
    } else if (r < 0.88 && !north) {
      // 작은 광장 공원 (잔디 + 야자수)
      const g = new THREE.PlaneGeometry(7, 7); g.rotateX(-Math.PI / 2); g.translate(cx, 0.012, cz); B.push(M.lawn, g);
      for (let k = 0; k < 7; k++) palm(B, M, rnd, cx + rnd.range(-3, 3), cz + rnd.range(-3, 3), rnd.range(1.4, 2.1));
      for (let k = 0; k < 4; k++) trees.push([cx + rnd.range(-3, 3), cz + rnd.range(-3, 3), rnd.range(0.9, 1.3)]);
    } else {
      // 평지 파벨라 (빽빽한 상자집)
      favelaCluster(B, H, M, rnd, cx, cz, 3.6, 3.6, 22, () => 0.15);
    }
    if (rnd() < 0.5) trees.push([cx + (rnd() < 0.5 ? -4 : 4), cz + rnd.range(-3.5, 3.5), rnd.range(0.8, 1.1)]);
  }
  // 만 건너편 니테로이 강변 아파트 줄
  if (R) for (let x = -150; x < 150; x += 6.5) {
    const z = R.z - R.w / 2 - 4.5;
    if (!free(x, z, 3) || onHill(x, z, 1)) continue;
    slab(B, H, M, rnd, x, z, rnd.range(4.4, 5.6), 2.4, rnd.int(12, 30) * 0.3, 0);
  }
  // 만 이쪽 강변(남쪽 둑) 야자수
  if (R) for (let x = -140; x < 140; x += 4) if (free(x, R.z + R.w / 2 + 3.6, 0.5) || Math.abs(x) < 46) palm(B, M, rnd, x + rnd.range(-1, 1), R.z + R.w / 2 + 1.7, rnd.range(1.2, 1.7));

  // ---- 남쪽 바깥: 코파카바나 해변 + 대서양 ----
  const sand = new THREE.MeshStandardMaterial({ map: sandTex(), roughness: 1 }); sand.map.repeat.set(1, 1);
  const sg = new THREE.PlaneGeometry(420, sea0 - beach0 + 0.6); uvMul(sg, 420 / 8, (sea0 - beach0) / 8); sg.rotateX(-Math.PI / 2); sg.translate(0, 0.004, (beach0 + sea0) / 2 - 0.3); B.push(sand, sg);
  const st = seaTex().clone(); st.needsUpdate = true; st.repeat.set(40, 12);
  const sea = new THREE.Mesh(new THREE.PlaneGeometry(420, 120), new THREE.MeshStandardMaterial({ map: st, roughness: 0.2, metalness: 0.25 }));
  sea.rotation.x = -Math.PI / 2; sea.position.set(0, 0.002, sea0 + 60); sea.receiveShadow = true; C.group.add(sea);
  const foam = new THREE.Mesh(new THREE.PlaneGeometry(420, 0.7), new THREE.MeshStandardMaterial({ color: 0xf4f8fa, transparent: true, opacity: 0.8, roughness: 0.6 }));
  foam.rotation.x = -Math.PI / 2; foam.position.set(0, 0.006, sea0 + 0.2); C.group.add(foam);
  C.anim.push((dt, t) => { st.offset.x += dt * 0.006; st.offset.y -= dt * 0.01; foam.position.z = sea0 + 0.2 + Math.sin(t * 0.8) * 0.35; foam.material.opacity = 0.6 + Math.sin(t * 0.8) * 0.25; });
  // 파라솔 (알록달록 우산 + 흰 기둥)
  const umb = [0xe8604c, 0xf2c14e, 0x2f8fd0, 0x3fae5a, 0xf4f1ea].map((c) => mat(c, { roughness: 0.7 })), pole = mat(0xf4f4f0);
  for (let x = -130; x < 130; x += rnd.range(1.6, 3.4)) {
    const z = rnd.range(beach0 + 2.5, sea0 - 1.8), c = new THREE.ConeGeometry(0.42, 0.2, 10); c.translate(x, 0.62, z); B.push(umb[rnd.int(0, 4)], c);
    const p = new THREE.CylinderGeometry(0.015, 0.015, 0.6, 4); p.translate(x, 0.3, z); B.push(pole, p);
  }
  for (let x = -140; x < 140; x += rnd.range(2.5, 5)) palm(B, M, rnd, x, beach0 + rnd.range(0.4, 1.4), rnd.range(1.3, 1.9));

  // ---- 전투 구역 안 바닥: 아틀란치카 대로 남쪽 물결무늬 산책로 + 모래사장 ----
  const route = C.steps && C.steps[0].opts[0].samples;
  if (route) {
    const col = new Map();
    for (const s of route) { if (s.p.z < 11) continue; const k = Math.round(s.p.x * 2); if (!col.has(k) || col.get(k) < s.p.z) col.set(k, s.p.z); }
    const keys = [...col.keys()].sort((a, c) => a - c), zAt = (x) => { const k = Math.round(x * 2); if (col.has(k)) return col.get(k); return col.get(k < keys[0] ? keys[0] : keys[keys.length - 1]); };
    const P = [], U = [], P2 = [], U2 = [], y = 0.011;
    const quad = (Pa, Ua, x0, x1, za0, zb0, za1, zb1, u0, u1, v0, v1) => {
      Pa.push(x0, y, za0, x1, y, zb1, x1, y, za1, x0, y, za0, x0, y, zb0, x1, y, zb1);
      Ua.push(u0, v0, u1, v1, u1, v0, u0, v0, u0, v1, u1, v1);
    };
    for (let x = b.x0 + 0.2; x < b.x1 - 0.2; x += 0.5) {
      const x1 = Math.min(x + 0.5, b.x1 - 0.2), z0 = zAt(x), z1 = zAt(x1);
      const a0 = Math.min(z0 + 1.42, b.z1 - 0.2), a1 = Math.min(z1 + 1.42, b.z1 - 0.2), c0 = Math.min(z0 + 3.1, b.z1 - 0.2), c1 = Math.min(z1 + 3.1, b.z1 - 0.2);
      quad(P, U, x, x1, a0, c0, a1, c1, x / 3.4, x1 / 3.4, 0, 1);
      if (c0 < b.z1 - 0.3) quad(P2, U2, x, x1, c0, b.z1 - 0.2, c1, b.z1 - 0.2, x / 6, x1 / 6, c0 / 6, (b.z1 - 0.2) / 6);
    }
    const mk2 = (Pa, Ua) => { const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(Pa, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(Ua, 2)); g.computeVertexNormals(); return g; };
    const wm = new THREE.MeshStandardMaterial({ map: waveTex(), roughness: 0.8, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 });
    const sm = new THREE.MeshStandardMaterial({ map: sandTex(), roughness: 1, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 });
    for (const [g, m] of [[mk2(P, U), wm], [mk2(P2, U2), sm]]) { const o = new THREE.Mesh(g, m); o.receiveShadow = true; C.group.add(o); }
  }
}

// =================== 전투 구역 안 랜드마크 ===================
// 마라카낭: 타원 그릇 경기장 (비스듬한 기둥 외벽 + 알록달록 관중석 + 흰 지붕 고리 + 잔디 경기장)
function maracana(G, k) {
  const add = adder(G), S = new THREE.Group(), sx = Math.min(k.w / 2 - 0.1, 3.1) / 2.15, addS = adder(S);
  S.scale.set(sx, 1, Math.min(1, (k.d / 2 - 0.05) / 2.15)); G.add(S);
  const wallT = tex('marawall', 256, 64, (g, w, h) => {
    g.fillStyle = '#d9d6cf'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#4c5258'; for (let x = 0; x < w; x += 16) g.fillRect(x + 3, 10, 10, h - 22);
    g.fillStyle = '#eceae4'; for (let x = 0; x < w; x += 16) { g.beginPath(); g.moveTo(x, h); g.lineTo(x + 4, h); g.lineTo(x + 7, 0); g.lineTo(x + 3, 0); g.fill(); }
    g.fillStyle = 'rgba(0,0,0,0.25)'; g.fillRect(0, h - 10, w, 2); g.fillRect(0, 8, w, 2);
  });
  wallT.repeat.set(5, 1);
  const seatT = tex('maraseat', 64, 128, (g, w, h) => {
    const C = ['#f2c43a', '#2f6fc0', '#e9e6df', '#2e9c56', '#2f6fc0'];
    for (let y = 0; y < h; y += 4) { g.fillStyle = C[Math.floor(y / 26) % C.length]; g.fillRect(0, y, w, 3); g.fillStyle = 'rgba(0,0,0,0.35)'; g.fillRect(0, y + 3, w, 1); }
    for (let x = 0; x < w; x += 16) { g.fillStyle = '#6e6a64'; g.fillRect(x, 0, 2, h); }
  });
  seatT.repeat.set(8, 1);
  addS(new THREE.CylinderGeometry(2.0, 2.05, 1.05, 48, 1, true), new THREE.MeshStandardMaterial({ map: wallT, bumpMap: wallT, bumpScale: 0.5, roughness: 0.75, side: THREE.DoubleSide }), 0, 0.06 + 0.525, 0);
  addS(new THREE.CylinderGeometry(1.98, 1.28, 0.95, 48, 1, true), new THREE.MeshStandardMaterial({ map: seatT, roughness: 0.8, side: THREE.DoubleSide }), 0, 0.06 + 0.58, 0);
  // 흰 지붕 고리 (안쪽으로 살짝 기운 판 + 바깥 테)
  const roofM = std(0xf7f7f4, { roughness: 0.45, side: THREE.DoubleSide });
  addS(new THREE.CylinderGeometry(1.52, 2.14, 0.16, 48, 1, true), roofM, 0, 0.06 + 1.17, 0);
  const ring = new THREE.RingGeometry(1.52, 2.14, 48); ring.rotateX(-Math.PI / 2); addS(ring, roofM, 0, 0.06 + 1.255, 0);
  addS(new THREE.TorusGeometry(2.13, 0.04, 6, 48).rotateX(Math.PI / 2), std(0xc9ccd0, { metalness: 0.5 }), 0, 0.06 + 1.23, 0);
  const floor = new THREE.CircleGeometry(1.3, 40); floor.rotateX(-Math.PI / 2); addS(floor, std(0x4f8f3c, { roughness: 1 }), 0, 0.1, 0);
  const pitchT = tex('marapitch', 256, 160, (g, w, h) => {
    for (let x = 0; x < w; x += 20) { g.fillStyle = (x / 20) % 2 ? '#4f9a3e' : '#5aa848'; g.fillRect(x, 0, 20, h); }
    g.strokeStyle = '#f4f4f0'; g.lineWidth = 3; g.strokeRect(6, 6, w - 12, h - 12); g.beginPath(); g.moveTo(w / 2, 6); g.lineTo(w / 2, h - 6); g.stroke();
    g.beginPath(); g.arc(w / 2, h / 2, 22, 0, 7); g.stroke(); g.strokeRect(6, h / 2 - 34, 36, 68); g.strokeRect(w - 42, h / 2 - 34, 36, 68);
  }, false);
  add(new THREE.PlaneGeometry(2.5, 1.5).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ map: pitchT, roughness: 0.95 }), 0, 0.105, 0).castShadow = false;
  // 앞 광장 진입 램프 + 야자수
  trees(G, [[-k.w * 0.46, k.d * 0.42], [k.w * 0.46, k.d * 0.42], [-k.w * 0.46, -k.d * 0.42], [k.w * 0.46, -k.d * 0.42]], 1.2);
}
// 메트로폴리타나 대성당: 콘크리트 격자 원뿔대 + 네 줄 스테인드글라스 + 꼭대기 유리 십자 + 옆 종탑
function cathedral(G, k) {
  const add = adder(G), R0 = Math.min(k.w, k.d) * 0.36, R1 = R0 * 0.55, Hc = 3.5;
  const t = tex('cathcone', 256, 256, (g, w, h) => {
    g.fillStyle = '#a49e94'; g.fillRect(0, 0, w, h);
    const rnd = makeRng('riocath');
    for (let y = 0; y < h; y += 12) for (let x = 0; x < w; x += 12) {
      g.fillStyle = 'rgba(0,0,0,0.38)'; g.fillRect(x + 2, y + 2, 8, 8); g.fillStyle = `rgba(255,255,255,${0.08 + rnd() * 0.06})`; g.fillRect(x, y, 12, 2); g.fillRect(x, y, 2, 12);
    }
    const S = [['#f6d04a', '#e8763a'], ['#3a8fd8', '#2e5fb0'], ['#e04848', '#f2a03a'], ['#46b05a', '#2c8bb8']];
    for (let i = 0; i < 4; i++) {
      const x = i * 64 + 22, gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, S[i][0]); gr.addColorStop(1, S[i][1]);
      g.fillStyle = '#3a3632'; g.fillRect(x - 2, 0, 24, h); g.fillStyle = gr; g.fillRect(x, 0, 20, h);
      g.fillStyle = 'rgba(0,0,0,0.35)'; for (let y = 0; y < h; y += 10) g.fillRect(x, y, 20, 1.5); g.fillRect(x + 9, 0, 1.5, h);
    }
  });
  const coneM = new THREE.MeshStandardMaterial({ map: t, bumpMap: t, bumpScale: 0.6, emissiveMap: t, emissive: 0x2a2620, roughness: 0.85 });
  add(new THREE.CylinderGeometry(R1, R0, Hc, 48, 1, true), coneM, -0.3, 0.06 + Hc / 2, 0.2);
  add(new THREE.CircleGeometry(R1, 32).rotateX(-Math.PI / 2), std(0x8e8a84), -0.3, 0.06 + Hc, 0.2);
  const gl = std(0x9fd0f0, { metalness: 0.4, roughness: 0.15, emissive: 0x16324a });
  add(new THREE.BoxGeometry(R1 * 1.9, 0.08, 0.22), gl, -0.3, 0.06 + Hc + 0.04, 0.2); add(new THREE.BoxGeometry(0.22, 0.08, R1 * 1.9), gl, -0.3, 0.06 + Hc + 0.04, 0.2);
  add(new THREE.BoxGeometry(0.04, 0.42, 0.04), std(0xe8e4da), -0.3, 0.06 + Hc + 0.29, 0.2); add(new THREE.BoxGeometry(0.22, 0.04, 0.04), std(0xe8e4da), -0.3, 0.06 + Hc + 0.36, 0.2);
  add(new THREE.CylinderGeometry(R0 + 0.12, R0 + 0.16, 0.12, 48), ashlarMat('riocathbase', 0x9a958c), -0.3, 0.12, 0.2);
  // 종탑: 두 장 콘크리트 판 + 종 + 십자
  const tx = k.w / 2 - 0.35, tz = -k.d / 2 + 0.35, conc = ashlarMat('riocampan', 0xb0aaa0, { rh: 16 });
  for (const s of [-1, 1]) add(sbox(0.08, 2.6, 0.42, 0.6, 0.6), conc, tx + s * 0.13, 0.06 + 1.3, tz);
  for (let i = 0; i < 3; i++) add(new THREE.CylinderGeometry(0.05, 0.08, 0.12, 8), std(0xb08a3a, { metalness: 0.7, roughness: 0.35 }), tx, 0.06 + 1.6 + i * 0.32, tz);
  add(new THREE.BoxGeometry(0.035, 0.36, 0.035), std(0xe8e4da), tx, 0.06 + 2.78, tz); add(new THREE.BoxGeometry(0.2, 0.035, 0.035), std(0xe8e4da), tx, 0.06 + 2.84, tz);
}
// 라파 아치: 흰 2단 아치 수도교 + 위를 지나는 노란 산타테레자 전차
function lapa(G, k) {
  const add = adder(G), W = Math.min(k.w - 0.3, 7), th = 0.5;
  const tier = (w, h, n, spring, y, m) => {
    // 아치 다리 사이를 한 윤곽선으로 그림 (바닥에 닿는 구멍 대신)
    const s = new THREE.Shape(), bay = w / n, ow = bay * 0.62;
    s.moveTo(-w / 2, 0);
    for (let i = 0; i < n; i++) {
      const cx = -w / 2 + bay * (i + 0.5);
      s.lineTo(cx - ow / 2, 0); s.lineTo(cx - ow / 2, spring); s.absarc(cx, spring, ow / 2, Math.PI, 0, true); s.lineTo(cx + ow / 2, 0);
    }
    s.lineTo(w / 2, 0); s.lineTo(w / 2, h); s.lineTo(-w / 2, h); s.closePath();
    const g = new THREE.ExtrudeGeometry(s, { depth: th, bevelEnabled: false, curveSegments: 10 }); g.translate(0, 0, -th / 2); uvMul(g, 0.9, 0.9);
    add(g, m, 0, y, 0);
  };
  const white = ashlarMat('riolapa', 0xf3efe6, { rh: 30 }), trim = std(0xe9e4d8);
  tier(W, 1.25, 8, 0.72, 0.06, white);
  add(new THREE.BoxGeometry(W + 0.1, 0.08, th + 0.1), trim, 0, 0.06 + 1.29, 0);
  tier(W, 0.85, 16, 0.5, 0.06 + 1.33, white);
  add(new THREE.BoxGeometry(W + 0.12, 0.08, th + 0.14), trim, 0, 0.06 + 2.22, 0);
  // 레일 + 노란 전차 (bonde)
  for (const s of [-1, 1]) add(new THREE.BoxGeometry(W, 0.03, 0.03), std(0x5a5a5e, { metalness: 0.6 }), 0, 0.06 + 2.28, s * 0.1);
  const bt = tex('bonde', 128, 48, (g, w, h) => {
    g.fillStyle = '#f2c230'; g.fillRect(0, 0, w, h); g.fillStyle = '#2f6b3a'; g.fillRect(0, h - 10, w, 10);
    for (let x = 6; x < w - 6; x += 15) { g.fillStyle = '#fbe9a8'; g.fillRect(x, 6, 10, 20); g.fillStyle = '#3a2a1a'; g.fillRect(x + 1, 8, 8, 16); }
    g.fillStyle = '#2f6b3a'; g.font = 'bold 9px sans-serif'; g.fillText('BONDE 12', 40, h - 2);
  }, false);
  const bonde = add(new THREE.BoxGeometry(1.1, 0.32, 0.36), [std(0xf2c230), std(0xf2c230), std(0x6b6b6b), std(0x333333), new THREE.MeshStandardMaterial({ map: bt }), new THREE.MeshStandardMaterial({ map: bt })], W * 0.18, 0.06 + 2.47, 0);
  add(new THREE.BoxGeometry(1.14, 0.04, 0.4), std(0x6b6b6b), bonde.position.x, 0.06 + 2.65, 0);
  add(new THREE.BoxGeometry(0.02, 0.25, 0.02), std(0x222222), bonde.position.x, 0.06 + 2.79, 0).rotation.z = 0.5;
  trees(G, [[-W / 2 - 0.1, 0.8], [W / 2 + 0.1, -0.8]], 1.2);
}
// 셀라론 계단: 빨강·노랑·초록·파랑 타일 계단 + 모자이크 옆벽 + 양옆 알록달록 집
function selaron(G, k) {
  const add = adder(G), mos = new THREE.MeshStandardMaterial({ map: mosaicTex(), roughness: 0.5 }), tread = std(0xb8452e, { roughness: 0.7 });
  const n = 10, sw = 1.3, sd = (k.d - 0.4) / n, rise = 0.13, z0 = k.d / 2 - 0.2;
  for (let i = 0; i < n; i++) {
    const h = rise * (i + 1), z = z0 - sd * (i + 0.5);
    const g = new THREE.BoxGeometry(sw, h, sd); uvMul(g, 1, 1);
    add(g, [mos, mos, tread, tread, mos, mos], 0, 0.06 + h / 2, z);
  }
  for (const s of [-1, 1]) {
    add(sbox(0.14, rise * n + 0.3, k.d - 0.4, 0.6, 0.6), mos, s * (sw / 2 + 0.07), 0.06 + (rise * n + 0.3) / 2, z0 - (k.d - 0.4) / 2);
    // 양옆 집 2채씩
    for (let j = 0; j < 2; j++) {
      const hw = (k.w - sw - 0.4) / 2 - 0.05, x = s * (sw / 2 + 0.2 + hw / 2), z = z0 - (k.d - 0.4) * (0.25 + j * 0.5), h = 0.6 + rise * n * (0.3 + j * 0.6);
      const m = emis(houseTex(j * 3 + (s > 0 ? 1 : 4)), { emissiveIntensity: 0.25 });
      add(sbox(hw, h, (k.d - 0.4) / 2 - 0.06, 1.6, 0.6), m, x, 0.06 + h / 2, z);
      const r = new THREE.ConeGeometry(Math.SQRT1_2, 1, 4, 1); r.rotateY(Math.PI / 4); r.scale(hw * 1.1, 0.3, ((k.d - 0.4) / 2) * 1.05); uvMul(r, 2, 1);
      add(r, new THREE.MeshStandardMaterial({ map: tileTex(), roughness: 0.85 }), x, 0.06 + h + 0.15, z);
    }
  }
  // 꼭대기 브라질 국기 깃발
  const flag = tex('brflag', 96, 64, (g, w, h) => { g.fillStyle = '#1f9a45'; g.fillRect(0, 0, w, h); g.fillStyle = '#f7d117'; g.beginPath(); g.moveTo(w / 2, 6); g.lineTo(w - 8, h / 2); g.lineTo(w / 2, h - 6); g.lineTo(8, h / 2); g.fill(); g.fillStyle = '#21409a'; g.beginPath(); g.arc(w / 2, h / 2, 15, 0, 7); g.fill(); g.strokeStyle = '#fff'; g.lineWidth = 2.5; g.beginPath(); g.arc(w / 2 - 4, h / 2 + 22, 30, -2.0, -1.0); g.stroke(); }, false);
  add(new THREE.CylinderGeometry(0.02, 0.02, 1.0, 5), std(0xdddddd), 0, 0.06 + rise * n + 0.5, -k.d / 2 + 0.25);
  add(new THREE.PlaneGeometry(0.48, 0.32), new THREE.MeshStandardMaterial({ map: flag, side: THREE.DoubleSide }), 0.25, 0.06 + rise * n + 0.82, -k.d / 2 + 0.25);
}

// =================== 가장자리 큰 랜드마크 ===================
// 코르코바두: 숲 덮인 넓은 산자락 위로 치솟은 화강암 봉우리 + 꼭대기 구세주 그리스도상 (두 팔 벌림, 남쪽을 봄)
function corcovado(L, city) {
  const G = new THREE.Group(), add = adder(G), H = 17, rx = 14, rz = 11;
  const f = (p) => 0.5 * Math.pow(1 - p, 2) + 0.5 * Math.pow(Math.max(0, 1 - p / 0.32), 0.55);
  add(mountGeo(rx, rz, H, f, 1.3, 0.09), hillMat('corc', 0.62, 0), 0, -0.3, 0);
  const rnd = makeRng('riocorc'), T = (city.cityTrees = city.cityTrees || []);
  for (let i = 0; i < 320; i++) { const a = rnd() * Math.PI * 2, p = rnd.range(0.36, 0.95); T.push([L.x + Math.cos(a) * p * rx, L.z + Math.sin(a) * p * rz, rnd.range(1.2, 1.9), H * f(p) - 0.6]); }
  // 꼭대기 전망대 + 동상
  const top = H - 0.3, stone = std(0xe3e0d8, { roughness: 0.6 });
  const robeT = tex('christ', 64, 128, (g, w, h) => { g.fillStyle = '#e6e3dc'; g.fillRect(0, 0, w, h); for (let x = 0; x < w; x += 6) { const gr = g.createLinearGradient(x, 0, x + 6, 0); gr.addColorStop(0, 'rgba(0,0,0,0.12)'); gr.addColorStop(0.5, 'rgba(255,255,255,0.1)'); gr.addColorStop(1, 'rgba(0,0,0,0.05)'); g.fillStyle = gr; g.fillRect(x, 0, 6, h); } const rnd2 = makeRng('christ'); for (let i = 0; i < 200; i++) { g.fillStyle = `rgba(90,90,80,${rnd2() * 0.1})`; g.fillRect(rnd2() * w, rnd2() * h, 2, 3); } });
  const robe = new THREE.MeshStandardMaterial({ map: robeT, bumpMap: robeT, bumpScale: 0.8, roughness: 0.55, emissive: 0x222222 });
  add(new THREE.CylinderGeometry(1.4, 1.7, 0.5, 16), ashlarMat('riocorctop', 0xbdb7aa), 0, top + 0.25, 0);
  add(sbox(0.9, 1.2, 0.9, 0.6, 0.6), ashlarMat('riopedestal', 0xd7d2c6), 0, top + 0.5 + 0.6, 0);
  const y0 = top + 1.7, S = new THREE.Group(); S.position.set(0, y0, 0); G.add(S); const addS = adder(S);
  addS(new THREE.CylinderGeometry(0.28, 0.46, 2.4, 14), robe, 0, 1.2, 0);              // 옷자락
  addS(new THREE.CylinderGeometry(0.34, 0.3, 0.7, 14), robe, 0, 2.65, 0);              // 가슴
  addS(new THREE.BoxGeometry(3.6, 0.3, 0.3), robe, 0, 2.82, 0);                         // 두 팔
  for (const s of [-1, 1]) { addS(new THREE.BoxGeometry(0.3, 0.42, 0.24), robe, s * 1.55, 2.62, 0); addS(new THREE.BoxGeometry(0.14, 0.2, 0.16), stone, s * 1.86, 2.8, 0); }   // 늘어진 소매 + 손
  addS(new THREE.CylinderGeometry(0.09, 0.11, 0.16, 10), stone, 0, 3.06, 0);
  addS(new THREE.SphereGeometry(0.2, 14, 10), stone, 0, 3.3, 0).scale.set(0.9, 1.15, 0.95);
  // 산을 오르는 톱니 열차 길 (지그재그 흰 줄)
  return G;
}
// 빵산(팡지아수카르): 길쭉하게 솟은 화강암 돔 + 옆 우르카 언덕 + 케이블카 줄 2구간 + 움직이는 곤돌라
function sugarloaf(L, city) {
  const G = new THREE.Group(), add = adder(G), H = 15.5;
  const loafF = (p) => Math.pow(Math.max(0, 1 - Math.pow(p, 2.6)), 0.55);
  const g1 = mountGeo(5.6, 5.2, H, loafF, 2.1, 0.05); add(g1, hillMat('loaf', 0.82, 0.07), 0, -0.2, 0);
  const urcaF = (p) => Math.pow(Math.max(0, 1 - p * p), 0.7), uH = 6.5;
  add(mountGeo(7, 6, uH, urcaF, 0.4, 0.08), hillMat('urca', 0.45, 0.12), -11, -0.2, 2);
  const rnd = makeRng('rioloaf'), T = (city.cityTrees = city.cityTrees || []);
  for (let i = 0; i < 90; i++) { const a = rnd() * Math.PI * 2, p = rnd.range(0.2, 0.92); T.push([L.x - 11 + Math.cos(a) * p * 7, L.z + 2 + Math.sin(a) * p * 6, rnd.range(1, 1.4), uH * urcaF(p) - 0.5]); }
  for (let i = 0; i < 30; i++) { const a = rnd() * Math.PI * 2, p = rnd.range(0, 0.3); T.push([L.x + Math.cos(a) * p * 5.6, L.z + Math.sin(a) * p * 5.2, rnd.range(0.8, 1.1), H * loafF(p) - 0.5]); }
  for (let i = 0; i < 40; i++) { const a = rnd() * Math.PI * 2, p = rnd.range(0.92, 1.1); T.push([L.x + Math.cos(a) * p * 5.6, L.z + Math.sin(a) * p * 5.2, rnd.range(1, 1.4), 0]); }
  // 정류장 3곳 (흰 건물) + 케이블 줄
  const stM = emis(modTex(6), { emissiveIntensity: 0.2 }), cableM = std(0x2a2c30);
  const P = [new THREE.Vector3(-22, 0.9, 6), new THREE.Vector3(-11, uH + 0.3, 2), new THREE.Vector3(0, H + 0.2, 0)];
  for (const p of P) add(sbox(1.6, 0.9, 1.2, 2, 2.4), stM, p.x, p.y - 0.75 + 0.45, p.z);
  const cab = [];
  for (let i = 0; i < 2; i++) {
    const a = P[i], c = P[i + 1], mid = a.clone().add(c).multiplyScalar(0.5), len = a.distanceTo(c);
    for (const s of [-0.18, 0.18]) { const g = new THREE.BoxGeometry(0.04, 0.04, len); g.lookAt(c.clone().sub(a)); const m = add(g, cableM, mid.x + s, mid.y, mid.z); m.castShadow = false; }
    const gm = new THREE.Group(); G.add(gm);
    const box = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.45, 0.45), std(0xe9eef2, { metalness: 0.3, roughness: 0.3, emissive: 0x1a2a36 })); box.position.y = -0.45; gm.add(box);
    const hang = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.3, 0.03), cableM); hang.position.y = -0.15; gm.add(hang);
    cab.push([gm, a, c, i * 0.4]);
  }
  (city.anim || []).push((dt, t) => { for (const [gm, a, c, ph] of cab) { const u = 0.5 + 0.45 * Math.sin(t * 0.15 + ph * 6); gm.position.copy(a).lerp(c, u); } });
  return G;
}
// 파벨라 언덕: 초록 언덕 사면을 빽빽하게 덮은 알록달록 상자집 + 파란 물탱크, 꼭대기만 숲
function favela(L, city) {
  const G = new THREE.Group(), rx = 11, rz = 9, h = 6.5, Bk = LB(), M = makeM((c, o) => std(c, o)), rnd = makeRng('riofavela');
  const hf = (x, z) => h * domeF(Math.min(1, Math.hypot(x / rx, z / rz)));
  Bk.push(hillMat('fav', 0.1, 0), mountGeo(rx, rz, h, domeF, 0.7, 0.06));
  const Hh = {
    boxWalls: (B, x, y, z, w, hh, d, ry, m, roofM) => { const g = sbox(w, hh, d, 1, 0.6); g.rotateY(ry); g.translate(x, y + hh / 2, z); B.push(m, g); },
  };
  for (let i = 0; i < 380; i++) {
    const a = rnd() * Math.PI * 2, r = Math.sqrt(rnd()) * 0.92;
    if (r < 0.3) continue;
    const x = Math.cos(a) * r * rx, z = Math.sin(a) * r * rz, w = rnd.range(0.6, 1.1), d = rnd.range(0.6, 1.0), hh = (rnd() < 0.5 ? 2 : 1) * 0.3 + 0.2, y = hf(x, z) - 0.2, ry = rnd.range(-0.3, 0.3);
    Hh.boxWalls(Bk, x, y, z, w, hh, d, ry, M.fav[rnd.int(0, 5)]);
    const top = new THREE.PlaneGeometry(w, d); top.rotateX(-Math.PI / 2); top.rotateY(ry); top.translate(x, y + hh + 0.002, z); Bk.push(M.slab, top);
    if (rnd() < 0.45) { const t = new THREE.CylinderGeometry(0.1, 0.1, 0.14, 8); t.translate(x, y + hh + 0.07, z); Bk.push(M.tank, t); }
  }
  Bk.build(G);
  const T = (city.cityTrees = city.cityTrees || []);
  for (let i = 0; i < 40; i++) { const a = rnd() * Math.PI * 2, r = rnd() * 0.3; T.push([L.x + Math.cos(a) * r * rx, L.z + Math.sin(a) * r * rz, rnd.range(1, 1.4), hf(Math.cos(a) * r * rx, Math.sin(a) * r * rz) - 0.4]); }
  return G;
}

export default {
  build,
  field: { maracana, rio_cathedral: cathedral, lapa, selaron },
  edge: { corcovado: { r: 15, build: corcovado }, sugarloaf: { r: 17, build: sugarloaf }, favela: { r: 11, build: favela } },
  gate: { wall: 0x9c9286, cap: 0xd8d0c0 }, water: 0x3e93b8, riverWall: 0xc9bc9c, riverWalk: 0xe0cfa6, riverTrees: false,
  bridges: [[-24, 'arch', 0xf2f2ee], [14, 'plain', null], [52, 'truss', 0x3a6fb5]]
};
