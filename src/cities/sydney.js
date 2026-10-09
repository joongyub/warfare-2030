// 도시 키트: 시드니
// 배경: 바랑가루·CBD 유리 고층(서·북서), 사암 빅토리아풍 중저층, 패딩턴 테라스 하우스(철 레이스 발코니, 남·동), 노스쇼어 붉은 벽돌 집 + 유칼립투스
//   자카란다(보라)·모턴베이 무화과·유칼립투스, 왕립 식물원(동쪽 항구 옆), 초록·크림 하버 페리
// 전투 구역 안: 시드니 타워 아이(금빛 포탑 + 케이블), 퀸 빅토리아 빌딩(구리 돔), 타운홀(시계탑), 세인트 메리 대성당(쌍둥이 첨탑)
// 가장자리: 오페라하우스(흰 타일 돛 지붕 + 화강암 기단), 하버브리지(강철 아치 + 화강암 탑 4개), 루나파크(웃는 얼굴 + 관람차), 크라운 시드니
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { makeRng } from '../textures.js';
import { cv, mk, once, pane, grime, bricks } from '../textures_world.js';
import { ashlarMat, sbox, std, adder, uvMul, trees, facadeMat, roofMat, fluteMat, columns, cornice } from '../landmarks_world.js';
import { mansardGeo } from '../world_city.js';
import { emis, towerTex } from './common.js';

// ---------------- 공용 도우미 ----------------
const SAND = ['#d9b98a', '#cfa877', '#e2c79d', '#c99f6c', '#dcc0a0'];
const TER = ['#efe6d2', '#d9c7a3', '#b8c9b0', '#c98b6a', '#a9bcc8', '#e8d2b8', '#f3efe6', '#9c5a44'];
const tex = (key, w, h, draw, rep = true) => once('syd' + key, () => { const [c, g] = cv(w, h); draw(g, w, h); const t = mk(c); if (!rep) t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping; return t; });
const V = (x, y, z) => new THREE.Vector3(x, y, z);
// 유리 고층 외벽 4가지 (배경·크라운 옆 타워 공용)
const GL = [['#3e5a70', '#a8c8e0'], ['#4f6b78', '#c2d8e2'], ['#2f4a5c', '#8fb6d0'], ['#6e8088', '#d6e2e6']];
const glassMat = (i) => emis(towerTex('syd' + i, { wall: GL[i][0], cols: 8, rows: 12, ww: 0.86, wh: 0.78, frame: '#a9bcc8', lit: 0.12, sky: GL[i][1], mull: false, stripe: i === 3 }), { roughness: 0.3, metalness: 0.35 });

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
// 두 점 사이 각재 (트러스·케이블)
function beam(Bk, m, a, b, t, t2 = t) {
  const g = new THREE.BoxGeometry(t, t2, a.distanceTo(b) + t * 0.5); g.lookAt(b.clone().sub(a)); g.translate((a.x + b.x) / 2, (a.y + b.y) / 2, (a.z + b.z) / 2); Bk.push(m, g);
}
// 박공 지붕 (용마루가 x 방향): 폭 w, 깊이 d, 높이 h
function gableGeo(w, d, h) {
  const s = new THREE.Shape(); s.moveTo(-d / 2, 0); s.lineTo(d / 2, 0); s.lineTo(0, h); s.closePath();
  const g = new THREE.ExtrudeGeometry(s, { depth: w, bevelEnabled: false }); g.translate(0, 0, -w / 2); g.rotateY(Math.PI / 2);
  return g;
}

// ---------------- 텍스처 ----------------
// 사암 빅토리아풍 상가: 아치 창 3층 + 층 띠 + 1층 차양
function sandHD(v) {
  return once('sydsand' + v, () => {
    const W = 256, H = 256, [c, g] = cv(W, H), [ce, e] = cv(W, H), rnd = makeRng('sydsand' + v);
    e.fillStyle = '#000'; e.fillRect(0, 0, W, H);
    g.fillStyle = SAND[v % SAND.length]; g.fillRect(0, 0, W, H); grime(g, W, H, rnd, 900, 0.06);
    g.fillStyle = 'rgba(0,0,0,0.07)'; for (let y = 0; y < H; y += 10) g.fillRect(0, y, W, 1);
    const rows = 3, cols = 4, rh = H / rows, cw = W / cols;
    for (let r = 0; r < rows; r++) for (let k = 0; k < cols; k++) {
      const ww = cw * 0.46, wh = rh * 0.5, x = k * cw + (cw - ww) / 2, y = r * rh + rh * 0.3;
      g.fillStyle = 'rgba(255,244,222,0.45)'; g.beginPath(); g.arc(x + ww / 2, y, ww / 2 + 5, Math.PI, 0); g.fill();
      g.fillStyle = '#4d5862'; g.beginPath(); g.arc(x + ww / 2, y, ww / 2, Math.PI, 0); g.fill();
      pane(g, e, x, y, ww, wh, rnd, { frame: '#efe2c8', lit: 0.18, sky: '#8fa6b4' });
    }
    for (let r = 0; r <= rows; r++) { g.fillStyle = 'rgba(255,246,228,0.5)'; g.fillRect(0, r * rh - 3, W, 4); g.fillStyle = 'rgba(0,0,0,0.2)'; g.fillRect(0, r * rh + 1, W, 2); }
    if (v % 2) { g.fillStyle = ['#2e5d4a', '#7a2d2a', '#1f3f6a'][v % 3]; g.fillRect(0, H - rh * 0.72, W, 9); g.fillStyle = 'rgba(0,0,0,0.3)'; g.fillRect(0, H - rh * 0.72 + 9, W, 3); }
    return { map: mk(c), emissiveMap: mk(ce) };
  });
}
// 패딩턴 테라스 하우스 한 채 앞면: 2층 철 레이스 베란다 + 1층 문·창 + 앞 울타리
function terraceHD(v) {
  return once('sydter' + v, () => {
    const W = 128, H = 128, [c, g] = cv(W, H), [ce, e] = cv(W, H), rnd = makeRng('sydter' + v);
    e.fillStyle = '#000'; e.fillRect(0, 0, W, H);
    if (v === 7) bricks(g, W, H, TER[7], rnd); else { g.fillStyle = TER[v % TER.length]; g.fillRect(0, 0, W, H); }
    grime(g, W, H, rnd, 300, 0.05);
    g.fillStyle = 'rgba(255,255,255,0.5)'; g.fillRect(0, 0, W, 6); g.fillStyle = 'rgba(0,0,0,0.18)'; g.fillRect(0, 6, W, 2);   // 난간벽 띠
    g.fillStyle = 'rgba(0,0,0,0.22)'; g.fillRect(4, 10, W - 8, 52);                                                           // 베란다 그늘
    pane(g, e, 18, 18, 30, 40, rnd, { frame: '#f4f1ea', lit: 0.25, sky: '#7d97a8' }); pane(g, e, 70, 18, 22, 40, rnd, { frame: '#f4f1ea', lit: 0.2, sky: '#7d97a8' });
    const lace = rnd() < 0.7 ? '#f6f4ee' : '#1e2124';
    g.strokeStyle = lace; g.lineWidth = 1.4;
    for (let x = 4; x < W - 4; x += 8) { g.beginPath(); g.arc(x + 4, 12, 4, 0, Math.PI); g.stroke(); g.beginPath(); g.arc(x + 4, 52, 3, 0, 7); g.stroke(); }
    g.fillStyle = lace; g.fillRect(4, 10, W - 8, 2); g.fillRect(4, 46, W - 8, 2); g.fillRect(4, 59, W - 8, 2); g.fillRect(3, 10, 3, 52); g.fillRect(W - 6, 10, 3, 52);
    for (let x = 6; x < W - 6; x += 4) g.fillRect(x, 48, 1, 11);
    g.fillStyle = '#5f666c'; g.fillRect(0, 62, W, 5);                                                                          // 베란다 지붕
    g.fillStyle = ['#2f5d3f', '#7a2a24', '#1f3c66', '#2b2b2b'][v % 4]; g.fillRect(14, 74, 24, 46);                            // 현관문
    g.fillStyle = 'rgba(255,240,200,0.5)'; g.beginPath(); g.arc(26, 74, 12, Math.PI, 0); g.fill();
    pane(g, e, 58, 76, 46, 34, rnd, { frame: '#f4f1ea', lit: 0.3, sky: '#7d97a8' });
    g.strokeStyle = '#1e2124'; g.lineWidth = 1.2; g.strokeRect(0, 114, W, 12); for (let x = 2; x < W; x += 5) { g.beginPath(); g.moveTo(x, 114); g.lineTo(x, 126); g.stroke(); }
    return { map: mk(c), emissiveMap: mk(ce) };
  });
}
// 노스쇼어 붉은 벽돌 페더레이션 주택
function brickHD(v) {
  return once('sydbrick' + v, () => {
    const W = 128, H = 128, [c, g] = cv(W, H), [ce, e] = cv(W, H), rnd = makeRng('sydbrick' + v);
    e.fillStyle = '#000'; e.fillRect(0, 0, W, H);
    bricks(g, W, H, ['#9a4632', '#a85a3c', '#8a3e2e'][v % 3], rnd);
    for (const x of [16, 76]) { g.fillStyle = '#f2ede2'; g.fillRect(x - 4, 30, 44, 60); pane(g, e, x, 34, 36, 52, rnd, { frame: '#f2ede2', lit: 0.25, sky: '#7d97a8' }); }
    g.fillStyle = 'rgba(0,0,0,0.25)'; g.fillRect(0, H - 6, W, 6);
    return { map: mk(c), emissiveMap: mk(ce) };
  });
}
// 골함석 지붕
const corrTex = (col) => tex('corr' + col, 64, 64, (g, w, h) => { g.fillStyle = col; g.fillRect(0, 0, w, h); for (let x = 0; x < w; x += 4) { g.fillStyle = 'rgba(255,255,255,0.18)'; g.fillRect(x, 0, 1.5, h); g.fillStyle = 'rgba(0,0,0,0.22)'; g.fillRect(x + 2.5, 0, 1.5, h); } });
// 테라코타 기와
const tileTex = () => tex('tile', 64, 64, (g, w, h) => { g.fillStyle = '#a5472c'; g.fillRect(0, 0, w, h); for (let y = 0; y < h; y += 8) { g.fillStyle = 'rgba(0,0,0,0.28)'; g.fillRect(0, y + 6, w, 2); for (let x = (y / 8) % 2 ? 4 : 0; x < w; x += 8) { g.fillStyle = 'rgba(255,200,160,0.18)'; g.fillRect(x, y, 3, 6); } } });
// 오페라하우스 돛: 흰·크림 타일 + 갈빗대 줄 + V 무늬
const sailTex = () => tex('sail', 256, 256, (g, w, h) => {
  const rnd = makeRng('sydsail'); g.fillStyle = '#f3efe4'; g.fillRect(0, 0, w, h);
  for (let y = 0; y < h; y += 8) for (let x = (y / 8) % 2 ? -4 : 0; x < w; x += 8) { g.fillStyle = rnd() < 0.55 ? '#f8f6ef' : '#e4dccb'; g.fillRect(x + 0.6, y + 0.6, 6.8, 6.8); }
  for (let y = 0; y < h; y += 32) for (let x = 0; x < w; x += 32) { g.strokeStyle = 'rgba(200,190,168,0.7)'; g.lineWidth = 1.6; g.beginPath(); g.moveTo(x, y); g.lineTo(x + 16, y + 16); g.lineTo(x + 32, y); g.stroke(); }
  g.fillStyle = 'rgba(140,130,110,0.5)'; for (let x = 0; x < w; x += 32) g.fillRect(x, 0, 2, h);
});
// 시드니 타워 포탑: 금빛 세로 살 + 유리 띠
const goldTex = () => tex('gold', 128, 64, (g, w, h) => { const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#f2cf6a'); gr.addColorStop(1, '#b8892e'); g.fillStyle = gr; g.fillRect(0, 0, w, h); for (let x = 0; x < w; x += 6) { g.fillStyle = 'rgba(90,60,10,0.45)'; g.fillRect(x, 0, 2, h); } });
// 크라운 시드니 유리: 흰 세로 핀 + 층 줄
const crownTex = () => tex('crown', 128, 128, (g, w, h) => {
  const gr = g.createLinearGradient(0, 0, w, 0); gr.addColorStop(0, '#b9d4e2'); gr.addColorStop(0.5, '#e4f0f4'); gr.addColorStop(1, '#a6c4d6'); g.fillStyle = gr; g.fillRect(0, 0, w, h);
  g.fillStyle = 'rgba(255,255,255,0.85)'; for (let x = 0; x < w; x += 8) g.fillRect(x, 0, 2, h);
  g.fillStyle = 'rgba(60,90,110,0.35)'; for (let y = 0; y < h; y += 16) g.fillRect(0, y, w, 2);
});
// 루나파크 웃는 얼굴 (햇살 머리 장식 + 큰 입 = 입구)
const faceTex = () => tex('lunaface', 256, 256, (g, w, h) => {
  const cx = 128, cy = 128, C = ['#e8392f', '#f6c21c', '#2f7fd0', '#f6c21c'];
  for (let i = 0; i < 32; i++) { const a0 = i / 32 * Math.PI * 2, a1 = a0 + Math.PI / 16; g.fillStyle = C[i % 4]; g.beginPath(); g.moveTo(cx, cy); g.arc(cx, cy, 128, a0, a1); g.fill(); }
  g.fillStyle = '#f3d08e'; g.beginPath(); g.arc(cx, cy + 10, 92, 0, 7); g.fill();
  g.strokeStyle = '#5a3a1a'; g.lineWidth = 6; for (const s of [-1, 1]) { g.beginPath(); g.arc(cx + s * 34, cy - 30, 22, Math.PI * 1.15, Math.PI * 1.85); g.stroke(); }
  for (const s of [-1, 1]) { g.fillStyle = '#fff'; g.beginPath(); g.ellipse(cx + s * 34, cy - 8, 16, 20, 0, 0, 7); g.fill(); g.fillStyle = '#2a6fc0'; g.beginPath(); g.arc(cx + s * 34, cy - 4, 10, 0, 7); g.fill(); g.fillStyle = '#111'; g.beginPath(); g.arc(cx + s * 34, cy - 4, 5, 0, 7); g.fill(); }
  g.fillStyle = '#e0a070'; g.beginPath(); g.moveTo(cx, cy); g.lineTo(cx - 9, cy + 24); g.lineTo(cx + 9, cy + 24); g.fill();
  g.fillStyle = '#d0202a'; g.beginPath(); g.moveTo(cx - 64, cy + 34); g.quadraticCurveTo(cx, cy + 24, cx + 64, cy + 34); g.quadraticCurveTo(cx, cy + 112, cx - 64, cy + 34); g.fill();
  g.fillStyle = '#2a0c0c'; g.beginPath(); g.moveTo(cx - 50, cy + 42); g.quadraticCurveTo(cx, cy + 36, cx + 50, cy + 42); g.quadraticCurveTo(cx, cy + 96, cx - 50, cy + 42); g.fill();
  g.fillStyle = '#fbfaf4'; for (let i = -4; i < 4; i++) g.fillRect(cx + i * 12 + 1, cy + 40, 10, 12);
}, false);
const flagTex = () => tex('flag', 96, 48, (g, w, h) => {
  g.fillStyle = '#1b2f86'; g.fillRect(0, 0, w, h);
  g.fillStyle = '#fff'; g.fillRect(0, 9, 48, 6); g.fillRect(21, 0, 6, 24); g.fillStyle = '#d0202a'; g.fillRect(0, 10.5, 48, 3); g.fillRect(22.5, 0, 3, 24);
  g.fillStyle = '#fff'; for (const [x, y, r] of [[24, 36, 5], [72, 10, 3], [62, 24, 3], [84, 22, 3], [72, 40, 3]]) { g.beginPath(); g.arc(x, y, r, 0, 7); g.fill(); }
}, false);

// ---------------- 배경 조각 ----------------
function makeM(mat) {
  return {
    sand: [0, 1, 2, 3, 4].map((v) => emis(sandHD(v), { roughness: 0.85, emissiveIntensity: 0.3 })),
    ter: [0, 1, 2, 3, 4, 5, 6, 7].map((v) => emis(terraceHD(v), { emissiveIntensity: 0.25 })),
    brick: [0, 1, 2].map((v) => emis(brickHD(v), { emissiveIntensity: 0.25, roughness: 0.9 })),
    glass: [0, 1, 2, 3].map(glassMat),
    apt: [0, 1].map((i) => emis(towerTex('sydapt' + i, { wall: i ? '#ece6da' : '#d8d2c6', cols: 4, rows: 8, frame: '#f6f3ec', lit: 0.15, band: '#f4f1ea' }), { roughness: 0.8 })),
    corr: [new THREE.MeshStandardMaterial({ map: corrTex('#8c9196'), roughness: 0.6, metalness: 0.3 }), new THREE.MeshStandardMaterial({ map: corrTex('#9a4a36'), roughness: 0.7, metalness: 0.2 })],
    tile: new THREE.MeshStandardMaterial({ map: tileTex(), roughness: 0.85 }),
    roof: mat(0x5c5f63, { roughness: 0.95 }), rim: mat(0xe9e1d0, { roughness: 0.85 }), rimDark: mat(0x3a3f44, { roughness: 0.6 }), mech: mat(0xa9adb0),
    plot: mat(0xc7bfae, { roughness: 1 }), lawn: mat(0x5f9446, { roughness: 1 }), path: mat(0xd6cbb2, { roughness: 1 }),
    bark: mat(0x6a5440, { roughness: 1 }), gumBark: mat(0xddd6c6, { roughness: 0.9 }),
    jac: [mat(0x9b7fd8, { flatShading: true, roughness: 0.9 }), mat(0x8467c6, { flatShading: true, roughness: 0.9 })],
    fig: mat(0x355f2c, { flatShading: true, roughness: 1 }), gum: mat(0x7e9a6c, { flatShading: true, roughness: 1 })
  };
}
const ico = (r) => new THREE.IcosahedronGeometry(r, 0);
// 자카란다: 가는 줄기 + 보라 꽃 구름
function jacaranda(B, M, rnd, x, z, s) {
  const t = new THREE.CylinderGeometry(0.035 * s, 0.05 * s, 0.6 * s, 5); t.translate(x, 0.3 * s, z); B.push(M.bark, t);
  for (let k = 0; k < 2; k++) { const g = ico(0.36 * s); g.scale(1.25, 0.7, 1.15); g.translate(x + rnd.range(-0.18, 0.18) * s, (0.7 + k * 0.14) * s, z + rnd.range(-0.18, 0.18) * s); B.push(M.jac[k], g); }
}
// 모턴베이 무화과: 굵은 줄기 + 넓고 납작한 짙은 초록 수관
function fig(B, M, rnd, x, z, s) {
  const t = new THREE.CylinderGeometry(0.07 * s, 0.11 * s, 0.5 * s, 6); t.translate(x, 0.25 * s, z); B.push(M.bark, t);
  const g = ico(0.62 * s); g.scale(1.3, 0.62, 1.2); g.rotateY(rnd() * 3); g.translate(x, 0.78 * s, z); B.push(M.fig, g);
}
// 유칼립투스: 키 큰 흰 줄기 + 성긴 회녹색 잎 덩이
function gum(B, M, rnd, x, z, s, y0 = 0) {
  const t = new THREE.CylinderGeometry(0.025 * s, 0.045 * s, 1.1 * s, 5); t.rotateZ(rnd.range(-0.12, 0.12)); t.translate(x, y0 + 0.55 * s, z); B.push(M.gumBark, t);
  for (let k = 0; k < 3; k++) { const g = ico(0.22 * s); g.scale(1.2, 0.8, 1.2); g.translate(x + rnd.range(-0.25, 0.25) * s, y0 + (0.85 + k * 0.17) * s, z + rnd.range(-0.25, 0.25) * s); B.push(M.gum, g); }
}

// ---------------- 배경 도시 ----------------
function build(C, H) {
  const { free, B, rnd, boxWalls, roofKit, mat } = H, S = C.S, b = S.bounds, R = S.river, M = makeM(mat);
  const T = (C.cityTrees = C.cityTrees || []);
  const zN = R ? R.z - R.w / 2 : -53, zS = R ? R.z + R.w / 2 : -39;
  const put = (m, g) => B.push(m, g);
  // 유리 고층 (바랑가루·CBD): 가끔 위가 들여 쌓인 왕관
  const tower = (x, z, w, d, h) => {
    const m = M.glass[rnd.int(0, 3)];
    boxWalls(B, x, 0, z, w, h, d, 0, m, M.roof, 1.6, 1.6);
    roofKit(B, x, z, w, d, h, 0, M.rimDark, { t: 0.08, rh: 0.18, house: [w * 0.45, 0.4, d * 0.45], houseM: M.mech });
    if (h > 7 && rnd() < 0.45) { const w2 = w * 0.62, d2 = d * 0.62, h2 = rnd.range(1.2, 2.6); boxWalls(B, x, h, z, w2, h2, d2, 0, m, M.roof, 1.6, 1.6); roofKit(B, x, z, w2, d2, h + h2, 0, M.rimDark, { t: 0.06, rh: 0.14 }); }
  };
  // 사암 빅토리아풍 건물 (3~6층)
  const sandBlk = (x, z, w, d, fl, ry = 0) => {
    const h = fl * 0.33;
    boxWalls(B, x, 0, z, w, h, d, ry, M.sand[rnd.int(0, 4)], M.roof, 1.4, 1.0);
    roofKit(B, x, z, w + 0.08, d + 0.08, h, ry, M.rim, { t: 0.1, rh: 0.12, house: rnd() < 0.3 ? [0.6, 0.3, 0.6] : null, houseM: M.rim });
  };
  // 테라스 하우스 한 줄: n채, 각 폭 1.35, 2층 + 박공 골함석 지붕 + 베란다 지붕판. sz = 앞면 방향(+1 남 / -1 북)
  const terraceRow = (x0, z, n, sz) => {
    const w = 1.35, d = 2.3, h = 0.66, ry = sz > 0 ? 0 : Math.PI, rm = M.corr[rnd() < 0.6 ? 0 : 1];
    for (let k = 0; k < n; k++) {
      const x = x0 + (k + 0.5) * w;
      boxWalls(B, x, 0, z, w - 0.04, h, d, ry, M.ter[rnd.int(0, 7)], null, w, h);
      const g = gableGeo(d, w - 0.02, 0.3); g.rotateY(Math.PI / 2); uvMul(g, 2, 2); g.translate(x, h, z); put(rm, g);
      const p = new THREE.BoxGeometry(w - 0.04, 0.12, 0.08); p.translate(x, h + 0.06, z + sz * d / 2); put(M.rim, p);
    }
    const v = new THREE.BoxGeometry(n * w - 0.1, 0.03, 0.26); v.translate(x0 + n * w / 2, h * 0.5, z + sz * (d / 2 + 0.12)); put(M.corr[0], v);
  };
  // 노스쇼어 벽돌 집 + 기와 사각뿔 지붕
  const house = (x, z, s) => {
    const w = 1.5 * s, d = 1.6 * s, h = 0.5 * s;
    boxWalls(B, x, 0, z, w, h, d, 0, M.brick[rnd.int(0, 2)], null, w, h);
    const g = new THREE.ConeGeometry(Math.SQRT1_2, 1, 4, 1); g.rotateY(Math.PI / 4); g.scale(w * 1.12, 0.45 * s, d * 1.12); uvMul(g, 3, 2); g.translate(x, h + 0.225 * s, z); put(M.tile, g);
  };
  const lawn = (cx, cz, s = 7.2) => { const g = new THREE.PlaneGeometry(s, s); g.rotateX(-Math.PI / 2); g.translate(cx, 0.01, cz); put(M.lawn, g); };

  for (let bx = -153; bx < 153; bx += 9) for (let bz = -117; bz < 90; bz += 9) {
    const cx = bx + 4.5, cz = bz + 4.5, dist = Math.hypot(cx, cz * 1.1);
    if (dist > 155 || !free(cx, cz, 4)) continue;
    const pg = new THREE.PlaneGeometry(7.4, 7.4); pg.rotateX(-Math.PI / 2); pg.translate(cx, 0.006, cz); put(M.plot, pg);
    const front = cz > b.z1 - 6 && cz < b.z1 + 34 && cx > b.x0 - 30 && cx < b.x1 + 30;
    const side = !front && cz > b.z0 - 4 && cz < b.z1 && (cx < b.x0 || cx > b.x1) && Math.min(Math.abs(cx - b.x0), Math.abs(cx - b.x1)) < 16;
    const north = cz < zN;
    const cbd = !north && !front && cx < b.x0 - 3 && cz < 8;                      // 서쪽 CBD·바랑가루
    const nsyd = north && cx > -40 && cx < 16 && cz > zN - 30;                     // 노스 시드니 업무지구
    const garden = !north && cx > b.x1 + 3 && cz < -10;                            // 왕립 식물원·도메인
    const r = rnd();
    if (garden || (!north && !cbd && r < 0.08)) {
      // 공원: 잔디 + 무화과·자카란다 + 산책길
      lawn(cx, cz);
      const pa = new THREE.PlaneGeometry(7.2, 0.6); pa.rotateX(-Math.PI / 2); pa.rotateY(rnd() < 0.5 ? 0.6 : -0.6); pa.translate(cx, 0.014, cz); put(M.path, pa);
      for (let k = 0; k < 4; k++) fig(B, M, rnd, cx + rnd.range(-2.8, 2.8), cz + rnd.range(-2.8, 2.8), rnd.range(0.9, 1.3));
      for (let k = 0; k < 3; k++) jacaranda(B, M, rnd, cx + rnd.range(-3, 3), cz + rnd.range(-3, 3), rnd.range(0.9, 1.2));
      for (let k = 0; k < 5; k++) T.push([cx + rnd.range(-3.2, 3.2), cz + rnd.range(-3.2, 3.2), rnd.range(0.9, 1.3)]);
      continue;
    }
    if (cbd) {
      // 유리 고층 2~4동 (옆은 낮게)
      const n = rnd.int(2, 4), hMax = side ? 5 : dist < 80 ? 15 : 11;
      for (let k = 0; k < n; k++) {
        const w = rnd.range(2.2, 3.4), d = rnd.range(2.2, 3.4), ox = cx + (k % 2 ? 1.7 : -1.7) + rnd.range(-0.3, 0.3), oz = cz + (k > 1 ? 1.7 : -1.7) * (n > 2 ? 1 : 0) + rnd.range(-0.3, 0.3);
        tower(ox, oz, w, d, rnd.range(side ? 2.5 : 5, hMax));
      }
      continue;
    }
    if (north) {
      if (nsyd && r < 0.7) {
        // 노스 시드니: 중층 유리·흰 아파트
        for (let k = 0; k < 2; k++) { const w = rnd.range(2.6, 3.4), x = cx + (k ? 1.8 : -1.8); if (rnd() < 0.5) tower(x, cz + rnd.range(-1.5, 1.5), w, rnd.range(2.4, 3.2), rnd.range(3, 8)); else { const h = rnd.int(8, 16) * 0.3; boxWalls(B, x, 0, cz, w, h, 2.6, 0, M.apt[rnd.int(0, 1)], M.roof, 1.6, 2.4); roofKit(B, x, cz, w, 2.6, h, 0, M.rim, { t: 0.06, rh: 0.1 }); } }
      } else if (r < 0.3) {
        // 유칼립투스 숲 (부시랜드)
        lawn(cx, cz);
        for (let k = 0; k < 9; k++) gum(B, M, rnd, cx + rnd.range(-3.3, 3.3), cz + rnd.range(-3.3, 3.3), rnd.range(0.9, 1.4));
      } else {
        // 붉은 벽돌 집 2×2 + 마당 나무
        for (const sx of [-1, 1]) for (const sz of [-1, 1]) house(cx + sx * 1.8 + rnd.range(-0.2, 0.2), cz + sz * 1.9, rnd.range(0.95, 1.15));
        for (let k = 0; k < 3; k++) gum(B, M, rnd, cx + rnd.range(-3.2, 3.2), cz + rnd.range(-0.5, 0.5), rnd.range(0.8, 1.2));
        if (rnd() < 0.4) jacaranda(B, M, rnd, cx + rnd.range(-3, 3), cz + rnd.range(-3, 3), 1);
      }
      continue;
    }
    if (front || cx > b.x1 || cz > b.z1 || (cz > 8 && r < 0.75)) {
      // 패딩턴·서리힐스 테라스 하우스 두 줄 (가로수 자카란다)
      if (!front && r > 0.85) { sandBlk(cx - 1.8, cz, 3.4, 6.6, rnd.int(3, 4)); sandBlk(cx + 1.8, cz, 3.4, 6.6, rnd.int(2, 4)); }
      else for (const sz of [-1, 1]) terraceRow(cx - 3.375, cz + sz * 2.2, 5, sz);
      for (let k = 0; k < 2; k++) jacaranda(B, M, rnd, cx + (rnd() < 0.5 ? -3.9 : 3.9), cz + rnd.range(-3.4, 3.4), rnd.range(0.8, 1.1));
      continue;
    }
    if (dist < 110 || side) {
      // 사암 중저층 블록 (옆은 낮게)
      const fl = side ? rnd.int(3, 4) : rnd.int(3, 6);
      sandBlk(cx, cz - 2.2, 6.8, 2.6, fl); sandBlk(cx, cz + 2.2, 6.8, 2.6, fl + rnd.int(-1, 1), Math.PI);
      if (rnd() < 0.5) fig(B, M, rnd, cx + rnd.range(-2, 2), cz, 0.8);
    } else {
      // 먼 곳: 흰 아파트 판상
      const h = rnd.int(8, 18) * 0.3;
      boxWalls(B, cx, 0, cz, rnd.range(4.5, 6.5), h, 2.6, 0, M.apt[rnd.int(0, 1)], M.roof, 1.6, 2.4);
      roofKit(B, cx, cz, 5, 2.6, h, 0, M.rim, { t: 0.06, rh: 0.1 });
    }
  }
  if (R) {
    // 남쪽 기슭(더 록스·월시 베이): 사암 창고 줄 / 북쪽 기슭(키리빌리): 집 + 유칼립투스
    for (let x = -150; x < 150; x += 5) { const z = zS + 5.2; if (free(x, z, 2.4)) sandBlk(x, z, 4.6, 2.6, rnd.int(2, 4), Math.PI); }
    for (let x = -150; x < 150; x += 4) {
      const z = zN - 4.6; if (!free(x, z, 2)) continue;
      if (rnd() < 0.6) house(x, z, rnd.range(0.9, 1.1)); else gum(B, M, rnd, x, z, rnd.range(0.9, 1.3));
      gum(B, M, rnd, x + 2, zN - 3.2, rnd.range(0.8, 1.1));
    }
    // 초록·크림 하버 페리 (항구 북쪽 물길 — 오페라하우스 기단을 피함)
    const hullM = std(0x1f6b3a, { roughness: 0.6 }), deckM = std(0xf2e8c8, { roughness: 0.6 }), trimM = std(0xe8b83a), winM = std(0x2a3540, { roughness: 0.2, metalness: 0.4 });
    for (let i = 0; i < 3; i++) {
      const f = new THREE.Group(), add = adder(f);
      add(new THREE.BoxGeometry(2.0, 0.28, 0.75), hullM, 0, -0.04, 0);
      add(new THREE.BoxGeometry(1.6, 0.3, 0.66), deckM, 0, 0.25, 0); add(new THREE.BoxGeometry(1.62, 0.1, 0.68), winM, 0, 0.27, 0);
      add(new THREE.BoxGeometry(1.0, 0.24, 0.56), deckM, 0, 0.52, 0); add(new THREE.BoxGeometry(1.1, 0.04, 0.62), trimM, 0, 0.66, 0);
      add(new THREE.CylinderGeometry(0.07, 0.07, 0.22, 8), trimM, 0.2, 0.78, 0);
      const z = R.z - 3.4 - (i % 2) * 1.6, dir = i % 2 ? -1 : 1;
      f.position.set(-90 + i * 70, 0.05, z); f.rotation.y = dir > 0 ? 0 : Math.PI; C.group.add(f);
      C.anim.push((dt, t) => { f.position.x += dir * 1.1 * dt; if (f.position.x > 130) f.position.x = -130; if (f.position.x < -130) f.position.x = 130; f.rotation.z = Math.sin(t * 1.1 + i) * 0.02; });
    }
  }
}

// =================== 전투 구역 안 랜드마크 ===================
// 시드니 타워 아이: 상가 기단 + 가는 금빛 기둥 + 쌍곡면 케이블 그물 + 금빛 포탑 + 첨탑
function sydtower(G, k) {
  const add = adder(G), Bk = LB(), Y = 0.06;
  const au = new THREE.MeshStandardMaterial({ map: goldTex(), metalness: 0.75, roughness: 0.3, emissive: 0x3a2808 }), shaftM = std(0xd2bd88, { metalness: 0.6, roughness: 0.35 });
  const cableM = std(0x7d8186, { metalness: 0.6, roughness: 0.4 }), glassM = std(0x2a3846, { roughness: 0.15, metalness: 0.5, emissive: 0x1a2a3a });
  const bw = Math.min(k.w, k.d) - 0.2;
  Bk.push(emis(towerTex('sydwf', { wall: '#7d8a94', cols: 6, rows: 3, ww: 0.86, wh: 0.7, frame: '#cfd6da', lit: 0.3, sky: '#9fbccc', mull: false })), sbox(bw, 0.75, bw, 1.6, 0.75).translate(0, Y + 0.375, 0));
  Bk.push(std(0xb8b2a6), new THREE.BoxGeometry(bw + 0.08, 0.06, bw + 0.08).translate(0, Y + 0.78, 0));
  const y0 = Y + 0.8, yT = 7.7;
  Bk.push(shaftM, new THREE.CylinderGeometry(0.15, 0.2, yT - y0, 12).translate(0, (y0 + yT) / 2, 0));
  for (let i = 0; i < 16; i++) { const a = i / 16 * Math.PI * 2; beam(Bk, cableM, V(Math.cos(a) * bw * 0.4, y0, Math.sin(a) * bw * 0.4), V(Math.cos(a + 1.1) * 0.3, yT - 0.1, Math.sin(a + 1.1) * 0.3), 0.025); }
  Bk.push(cableM, new THREE.TorusGeometry(bw * 0.4, 0.04, 4, 24).rotateX(Math.PI / 2).translate(0, y0 + 0.02, 0));
  // 포탑: 깔때기 → 금빛 2층 → 유리 띠 → 지붕
  Bk.push(au, new THREE.CylinderGeometry(0.95, 0.25, 0.6, 24).translate(0, yT + 0.3, 0));
  Bk.push(au, new THREE.CylinderGeometry(1.05, 1.0, 0.45, 24).translate(0, yT + 0.82, 0));
  Bk.push(glassM, new THREE.CylinderGeometry(1.02, 1.05, 0.26, 24).translate(0, yT + 1.17, 0));
  Bk.push(au, new THREE.CylinderGeometry(0.98, 1.02, 0.3, 24).translate(0, yT + 1.45, 0));
  Bk.push(au, new THREE.CylinderGeometry(0.35, 0.98, 0.2, 24).translate(0, yT + 1.7, 0));
  Bk.push(shaftM, new THREE.CylinderGeometry(0.035, 0.08, 1.0, 8).translate(0, yT + 2.3, 0));
  Bk.build(G);
  const lamp = add(new THREE.SphereGeometry(0.06, 8, 6), new THREE.MeshBasicMaterial({ color: 0xff3a2e }), 0, yT + 2.85, 0); lamp.castShadow = false;
  trees(G, [[-k.w / 2 + 0.2, k.d / 2 - 0.2], [k.w / 2 - 0.2, k.d / 2 - 0.2]], 1.1);
}
// 퀸 빅토리아 빌딩: 긴 로마네스크 사암 건물 + 유리 볼트 지붕 + 가운데 큰 구리 돔 + 작은 돔들
function qvb(G, k) {
  const add = adder(G), Y = 0.06, W = Math.min(k.w - 0.2, 7), D = Math.min(k.d - 0.5, 2.6), H = 1.45;
  const fac = facadeMat('sydqvb', { wall: 0xd7b682, cols: 4, rows: 3, ww: 0.42, wh: 0.6, win: 'arch', key: true, pilaster: true, lit: 0.15 });
  const trim = std(0xe8d4ad, { roughness: 0.75 }), cu = roofMat('copper'), cuD = std(0x5f9c88, { roughness: 0.5, metalness: 0.3 }), glassM = std(0x9fc6d6, { roughness: 0.15, metalness: 0.4, emissive: 0x16303c });
  add(sbox(W, H, D, 1.6, 1.6), fac, 0, Y + H / 2, 0);
  cornice(add, trim, W, D, Y + H, 0, 0, 0.1);
  add(new THREE.BoxGeometry(W - 0.2, 0.03, 0.3), std(0x2e5d4a), 0, Y + 0.48, D / 2 + 0.15);   // 거리 차양
  const rf = gableGeo(W - 0.1, D, 0.3); uvMul(rf, 2, 1); add(rf, cu, 0, Y + H + 0.04, 0);
  const vault = new THREE.CylinderGeometry(0.42, 0.42, W - 1.4, 16, 1, false, 0, Math.PI); vault.rotateZ(Math.PI / 2);
  add(vault, glassM, 0, Y + H + 0.3, 0);
  // 가운데 큰 돔 (북 + 돔 + 랜턴)
  const yd = Y + H + 0.12;
  add(new THREE.CylinderGeometry(0.62, 0.66, 0.38, 20), fac, 0, yd + 0.19, 0);
  add(new THREE.CylinderGeometry(0.7, 0.7, 0.06, 20), trim, 0, yd + 0.4, 0);
  add(new THREE.SphereGeometry(0.62, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), cu, 0, yd + 0.42, 0).scale.y = 1.12;
  add(new THREE.CylinderGeometry(0.1, 0.12, 0.14, 8), trim, 0, yd + 1.16, 0);
  add(new THREE.ConeGeometry(0.11, 0.16, 8), cuD, 0, yd + 1.31, 0);
  // 모서리 탑 4개 + 중간 돔 2개
  for (const [x, z, r, hb] of [[W / 2 - 0.3, D / 2 - 0.3, 0.22, 0.28], [-W / 2 + 0.3, D / 2 - 0.3, 0.22, 0.28], [W / 2 - 0.3, -D / 2 + 0.3, 0.22, 0.28], [-W / 2 + 0.3, -D / 2 + 0.3, 0.22, 0.28], [W * 0.27, 0, 0.28, 0.66], [-W * 0.27, 0, 0.28, 0.66]]) {
    add(new THREE.CylinderGeometry(r * 0.9, r, hb, 12), fac, x, Y + H + hb / 2, z);
    add(new THREE.SphereGeometry(r, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2), cu, x, Y + H + hb, z).scale.y = 1.3;
    add(new THREE.ConeGeometry(0.04, 0.16, 6), cuD, x, Y + H + hb + 0.08 + r * 1.3, z);
  }
  trees(G, [[-W / 2 + 0.3, k.d / 2 - 0.1], [W / 2 - 0.3, k.d / 2 - 0.1]], 0.9);
}
// 시드니 타운홀: 사암 제2제정 양식 + 맨사드 지붕 + 앞 가운데 시계탑 + 기둥 현관
function townhall(G, k) {
  const add = adder(G), Y = 0.06, W = Math.min(k.w - 0.4, 4.2), D = Math.min(k.d - 1.2, 2.0), H = 1.4, zb = -k.d / 2 + 0.05 + D / 2;
  const fac = facadeMat('sydth', { wall: 0xd9bb8c, cols: 3, rows: 2, ww: 0.4, wh: 0.6, win: 'arch', key: true, pilaster: true, lit: 0.15 });
  const trim = std(0xeedbb4, { roughness: 0.75 }), slate = roofMat('lead'), au = std(0xd8aa45, { metalness: 0.85, roughness: 0.3 });
  add(sbox(W, H, D, 1.4, 1.4), fac, 0, Y + H / 2, zb);
  cornice(add, trim, W, D, Y + H, 0, zb, 0.1);
  add(mansardGeo(0, Y + H + 0.04, zb, W - 0.1, D - 0.1, 0.4, 0), slate);
  for (const s of [-1, 1]) { add(sbox(0.9, H + 0.3, 0.9, 1.4, 1.4), fac, s * (W / 2 - 0.45), Y + (H + 0.3) / 2, zb + D / 2 - 0.45); add(mansardGeo(s * (W / 2 - 0.45), Y + H + 0.3, zb + D / 2 - 0.45, 0.95, 0.95, 0.45, 0, 0.3), slate); }
  // 시계탑
  const tz = zb + D / 2 + 0.1, cl = tex('clock', 64, 64, (g, w, h) => { g.fillStyle = '#d9bb8c'; g.fillRect(0, 0, w, h); g.fillStyle = '#f6f1e2'; g.beginPath(); g.arc(32, 32, 26, 0, 7); g.fill(); g.strokeStyle = '#2a2a2a'; g.lineWidth = 2; g.stroke(); for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2; g.fillStyle = '#2a2a2a'; g.fillRect(32 + Math.cos(a) * 21 - 1.5, 32 + Math.sin(a) * 21 - 1.5, 3, 3); } g.lineWidth = 3; g.beginPath(); g.moveTo(32, 32); g.lineTo(32, 14); g.moveTo(32, 32); g.lineTo(44, 36); g.stroke(); }, false);
  add(sbox(0.9, 2.3, 0.9, 1.4, 1.4), fac, 0, Y + 1.15, tz);
  add(new THREE.BoxGeometry(0.98, 0.62, 0.98), [0, 1, 2, 3, 4, 5].map((i) => (i === 2 || i === 3 ? trim : new THREE.MeshStandardMaterial({ map: cl, roughness: 0.7 }))), 0, Y + 2.62, tz);
  cornice(add, trim, 0.98, 0.98, Y + 2.93, 0, tz, 0.08);
  add(mansardGeo(0, Y + 2.95, tz, 0.9, 0.9, 0.4, 0, 0.25), slate);
  add(new THREE.CylinderGeometry(0.08, 0.12, 0.2, 8), au, 0, Y + 3.45, tz);
  add(new THREE.CylinderGeometry(0.012, 0.012, 0.5, 4), std(0xdddddd), 0, Y + 3.8, tz);
  // 기둥 현관 + 계단
  columns(add, fluteMat(0xe2c8a0), trim, 4, -0.8, 0.8, tz + 0.62, Y + 0.12, 0.85, 0.06);
  add(new THREE.BoxGeometry(1.9, 0.12, 0.3), trim, 0, Y + 1.03, tz + 0.62);
  for (let i = 0; i < 3; i++) add(new THREE.BoxGeometry(2.0 - i * 0.1, 0.04, 0.5 - i * 0.12), ashlarMat('sydthstep', 0xb8a88c), 0, Y + 0.02 + i * 0.04, tz + 0.66 - i * 0.04);
}
// 세인트 메리 대성당: 고딕 사암 신랑 + 십자 익랑 + 가운데 사각 탑 + 서쪽 쌍둥이 첨탑 + 장미창
function stmarys(G, k) {
  const add = adder(G), Y = 0.06, L = Math.min(k.w - 0.4, 4.8), D2 = Math.min(k.d / 2 - 0.15, 1.45);
  const fac = facadeMat('sydsm', { wall: 0xcfae7f, cols: 2, rows: 1, ww: 0.32, wh: 0.66, wy: 0.18, win: 'gothic', band: false, glass: '#3a3550', lit: 0.1 });
  const stone = ashlarMat('sydsmst', 0xcdad80), slate = roofMat('lead'), x0 = -L / 2, xc = L * 0.18;
  // 신랑 + 옆 복도
  add(sbox(L - 0.8, 1.5, 1.2, 1.0, 1.5), fac, x0 + 0.8 + (L - 0.8) / 2, Y + 0.75, 0);
  const nr = gableGeo(L - 0.8, 1.3, 0.75); uvMul(nr, 3, 1); add(nr, slate, x0 + 0.8 + (L - 0.8) / 2, Y + 1.5, 0);
  for (const s of [-1, 1]) { add(sbox(L - 1.2, 0.85, 0.42, 1.0, 0.85), fac, x0 + 1.0 + (L - 1.2) / 2, Y + 0.425, s * 0.8); const ar = new THREE.BoxGeometry(L - 1.2, 0.05, 0.5); ar.rotateX(s * 0.4); add(ar, slate, x0 + 1.0 + (L - 1.2) / 2, Y + 0.95, s * 0.82); }
  // 익랑 (남북)
  add(sbox(0.95, 1.5, D2 * 2, 1.0, 1.5), fac, xc, Y + 0.75, 0);
  const tr = gableGeo(D2 * 2, 1.0, 0.7); tr.rotateY(Math.PI / 2); uvMul(tr, 2, 1); add(tr, slate, xc, Y + 1.5, 0);
  // 가운데 사각 탑 + 작은 뾰족탑 4개
  add(sbox(0.95, 1.4, 0.95, 0.95, 1.4), fac, xc, Y + 1.5 + 0.7, 0);
  for (const [sx, sz] of [[1, 1], [-1, 1], [1, -1], [-1, -1]]) add(new THREE.ConeGeometry(0.08, 0.42, 6), stone, xc + sx * 0.42, Y + 2.9 + 0.21, sz * 0.42);
  // 서쪽 쌍둥이 탑 + 팔각 첨탑
  for (const s of [-1, 1]) {
    const tz = s * 0.52;
    add(sbox(0.72, 2.9, 0.72, 0.72, 1.45), fac, x0 + 0.42, Y + 1.45, tz);
    add(new THREE.BoxGeometry(0.8, 0.08, 0.8), stone, x0 + 0.42, Y + 2.94, tz);
    add(new THREE.ConeGeometry(0.36, 1.55, 8), stone, x0 + 0.42, Y + 2.98 + 0.78, tz);
    for (const [sx, sz] of [[1, 1], [-1, 1], [1, -1], [-1, -1]]) add(new THREE.ConeGeometry(0.06, 0.36, 6), stone, x0 + 0.42 + sx * 0.32, Y + 3.16, tz + sz * 0.32);
    add(new THREE.BoxGeometry(0.03, 0.18, 0.03), std(0xd8c8a0), x0 + 0.42, Y + 4.62, tz);
  }
  // 정면 박공 + 장미창 + 정문
  add(sbox(0.3, 1.9, 0.62, 0.62, 1.9), stone, x0 + 0.2, Y + 0.95, 0);
  const rose = tex('rose', 64, 64, (g, w, h) => { g.fillStyle = '#cfae7f'; g.fillRect(0, 0, w, h); const C = ['#c0303a', '#2a4fa0', '#e8b040', '#3a8a5a']; for (let i = 0; i < 12; i++) { g.fillStyle = C[i % 4]; g.beginPath(); g.moveTo(32, 32); g.arc(32, 32, 28, i / 12 * 6.283, (i + 1) / 12 * 6.283); g.fill(); } g.strokeStyle = '#5a4630'; g.lineWidth = 2; g.beginPath(); g.arc(32, 32, 28, 0, 7); g.stroke(); g.beginPath(); g.arc(32, 32, 10, 0, 7); g.stroke(); }, false);
  add(new THREE.CircleGeometry(0.24, 20).rotateY(-Math.PI / 2), new THREE.MeshStandardMaterial({ map: rose, emissiveMap: rose, emissive: 0x332222 }), x0 + 0.04, Y + 1.35, 0);
  add(new THREE.BoxGeometry(0.04, 0.6, 0.32), std(0x4a3424), x0 + 0.04, Y + 0.3, 0);
  trees(G, [[x0 - 0.1, D2], [x0 - 0.1, -D2], [L / 2, D2], [L / 2, -D2]], 1.1);
}

// =================== 가장자리 큰 랜드마크 ===================
// 오페라하우스 돛 한 장: 앞(+z)이 뾰족 아치로 열리고 뒤(-z)로 가며 낮아져 바닥에 닿는 껍질
function shellGeo(W, H, L, ov, nu = 16, ns = 12) {
  const c = 0.55, Rr = 1 + c, pm = Math.acos(c / Rr), Hn = Math.sqrt(Rr * Rr - c * c), P = [], U = [], I = [];
  for (let i = 0; i <= ns; i++) {
    const s = i / ns, ws = W * (1 - 0.35 * s), hs = H * Math.pow(Math.cos(s * Math.PI / 2), 0.75);
    for (let j = 0; j <= nu; j++) {
      const t = j / nu * 2 - 1, ph = (1 - Math.abs(t)) * pm, ax = (Rr * Math.cos(ph) - c) * Math.sign(t), ay = Rr * Math.sin(ph) / Hn;
      P.push(ax * ws, ay * hs, -s * L + ov * (1 - s) * ay * ay); U.push(j / nu * 3, s * 2.5);
    }
  }
  for (let i = 0; i < ns; i++) for (let j = 0; j < nu; j++) { const a = i * (nu + 1) + j; I.push(a, a + 1, a + nu + 1, a + 1, a + nu + 2, a + nu + 1); }
  const g = new THREE.BufferGeometry(); g.setIndex(I); g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(U, 2)); g.computeVertexNormals();
  return g;
}
// 돛 앞 아치를 메우는 유리벽 (부채꼴, 살짝 안으로 들임)
function glassFan(W, H, ov, nu = 16) {
  const c = 0.55, Rr = 1 + c, pm = Math.acos(c / Rr), Hn = Math.sqrt(Rr * Rr - c * c), P = [], pt = [];
  for (let j = 0; j <= nu; j++) { const t = j / nu * 2 - 1, ph = (1 - Math.abs(t)) * pm, ay = Rr * Math.sin(ph) / Hn; pt.push([(Rr * Math.cos(ph) - c) * Math.sign(t) * W * 0.97, ay * H * 0.97, ov * ay * ay - 0.08]); }
  for (let j = 0; j < nu; j++) P.push(0, 0, -0.4, ...pt[j], ...pt[j + 1]);
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); g.computeVertexNormals();
  return g;
}
// 시드니 오페라하우스: 붉은 화강암 기단(항구 쪽으로 뻗음) + 두 공연장의 겹친 흰 돛 + 북쪽 로비 돛 + 베넬롱 식당 돛 + 기념 계단
// 돛은 동서로 늘어서 남쪽(카메라)에서 옆모습이 보임. 기단 북쪽 끝은 유람선 물길(z ≈ -44)을 피함
function opera(L) {
  const G = new THREE.Group(), Bk = LB(), Y = 1.0;
  const sailM = new THREE.MeshStandardMaterial({ map: sailTex(), roughness: 0.32, metalness: 0.05, side: THREE.DoubleSide, emissive: 0x2e2c28 });
  const glassM = new THREE.MeshStandardMaterial({ color: 0x3b3a36, roughness: 0.12, metalness: 0.6, emissive: 0x2a1c0c, side: THREE.DoubleSide });   // 짙은 청동빛 유리
  const gran = ashlarMat('sydpodium', 0xb8907a, { rh: 20 }), step = ashlarMat('sydstep', 0xc9ab92, { rh: 12 }), paveM = std(0xc4a690, { roughness: 0.95 });
  const z0 = -3.3, z1 = 4.4, xw = -7.4, xe = 7.4, T = Y + 0.2;
  Bk.push(gran, sbox(xe - xw, T + 0.4, z1 - z0, 1.2, 0.6).translate((xw + xe) / 2, (T - 0.4) / 2, (z0 + z1) / 2));
  Bk.push(gran, sbox(2.4, T + 0.4, z1 - z0 - 1.6, 1.2, 0.6).translate(xe + 1.1, (T - 0.4) / 2, (z0 + z1) / 2));   // 동쪽 끝 연장
  Bk.push(paveM, new THREE.PlaneGeometry(xe - xw, z1 - z0).rotateX(-Math.PI / 2).translate((xw + xe) / 2, T + 0.005, (z0 + z1) / 2));
  for (let i = 0; i < 7; i++) Bk.push(step, sbox(0.45, T - i * 0.16, z1 - z0 - 0.6, 1, 0.5).translate(xw - 0.22 - i * 0.45, (T - i * 0.16) / 2, (z0 + z1) / 2));   // 서쪽 기념 계단
  // 돛: [x 앞, z, W, H, L, 돌출, 방향(-1 = 서쪽으로 열림)]
  const S = [];
  for (const [zc, k, dx] of [[-0.95, 1, 0], [2.35, 0.84, 0.7]]) {
    S.push([-5.0 + dx, zc, 1.3 * k, 3.2 * k, 2.4 * k, 0.6 * k, -1], [-3.2 + dx, zc, 1.5 * k, 4.6 * k, 3.4 * k, 0.9 * k, -1], [-0.9 + dx, zc, 1.65 * k, 5.8 * k, 4.0 * k, 1.1 * k, -1]);
    S.push([5.6 + dx * 0.5, zc, 1.5 * k, 3.9 * k, 3.4 * k, 0.8 * k, 1]);
  }
  S.push([-7.0, 3.6, 0.7, 1.7, 1.2, 0.35, -1], [-5.0, 3.6, 0.62, 1.3, 0.9, 0.3, 1]);   // 베넬롱 식당
  for (const [x, z, W, H, Ls, ov, dir] of S) {
    const ry = dir < 0 ? -Math.PI / 2 : Math.PI / 2;
    Bk.push(sailM, shellGeo(W, H, Ls, ov).rotateY(ry).translate(x, Y + 0.2, z));
    Bk.push(glassM, glassFan(W, H, ov).rotateY(ry).translate(x, Y + 0.2, z));
  }
  Bk.build(G);
  G.traverse((o) => { if (o.isMesh && o.material === glassM) o.castShadow = false; });
  return G;
}
// 하버브리지: 남북으로 항구를 건너는 회색 강철 관통 아치(위·아래 현 + 트러스) + 아래 매달린 상판 + 양 끝 화강암 탑 4개 + 꼭대기 국기
function harbourbridge() {
  const G = new THREE.Group(), Bk = LB(), add = adder(G);
  const steel = std(0x7f878e, { metalness: 0.55, roughness: 0.5 }), steelD = std(0x5f666c, { metalness: 0.5, roughness: 0.55 }), road = std(0x4a4d52, { roughness: 0.95 });
  const gran = ashlarMat('sydpylon', 0xcbbd9e, { rh: 22 });
  const Sp = 7.8, Yt = 9.2, YtE = 4.3, Yb = 8.0, Y0 = 0.4, DY = 2.4, RX = 1.05, N = 24;
  const yT = (z) => Yt - (Yt - YtE) * (z / Sp) ** 2, yB = (z) => Yb - (Yb - Y0) * (z / Sp) ** 2;
  for (let i = 0; i <= N; i++) {
    const za = -Sp + i / N * 2 * Sp, zb = -Sp + (i + 1) / N * 2 * Sp;
    for (const s of [-1, 1]) {
      const x = s * RX;
      if (i < N) {
        beam(Bk, steel, V(x, yT(za), za), V(x, yT(zb), zb), 0.2, 0.26);
        beam(Bk, steel, V(x, yB(za), za), V(x, yB(zb), zb), 0.22, 0.3);
        beam(Bk, steelD, i % 2 ? V(x, yB(za), za) : V(x, yT(za), za), i % 2 ? V(x, yT(zb), zb) : V(x, yB(zb), zb), 0.09);
      }
      if (i > 0 && i < N) {
        Bk.push(steelD, new THREE.BoxGeometry(0.1, yT(za) - yB(za), 0.1).translate(x, (yT(za) + yB(za)) / 2, za));
        const yb = yB(za);
        if (yb > DY + 0.25) Bk.push(steelD, new THREE.BoxGeometry(0.05, yb - DY, 0.05).translate(x, (yb + DY) / 2, za));   // 행어
        else if (yb < DY - 0.2) Bk.push(steelD, new THREE.BoxGeometry(0.12, DY - yb, 0.12).translate(x, (yb + DY) / 2, za));
      }
    }
    // 두 아치 사이 가로 버팀
    if (i > 0 && i < N && yB(za) > DY + 1.2) { beam(Bk, steelD, V(-RX, yT(za), za), V(RX, yT(za), za), 0.08); if (i < N - 1) beam(Bk, steelD, V(-RX, yT(za), za), V(RX, yT(zb), zb), 0.05); }
  }
  // 상판 (아치 사이를 지나 양쪽 접근 고가로 이어짐) + 경사로
  const DL = 11, xD = 1.75;
  Bk.push(steelD, new THREE.BoxGeometry(xD * 2, 0.34, DL * 2).translate(0, DY - 0.17, 0));
  Bk.push(road, new THREE.PlaneGeometry(xD * 2 - 0.5, DL * 2).rotateX(-Math.PI / 2).translate(0, DY + 0.006, 0));
  for (const s of [-1, 1]) Bk.push(steel, new THREE.BoxGeometry(0.06, 0.16, DL * 2).translate(s * xD, DY + 0.08, 0));
  for (const s of [-1, 1]) {
    const ramp = new THREE.BoxGeometry(xD * 2, 0.3, 2.8); ramp.rotateX(s * 0.62); ramp.translate(0, DY / 2 + 0.1, s * (DL + 1.0)); Bk.push(gran, ramp);
    for (const zz of [9.6]) for (const sx of [-1, 1]) Bk.push(gran, sbox(0.5, DY - 0.34, 0.5, 0.6, 0.6).translate(sx * 1.1, (DY - 0.34) / 2, s * zz));
    Bk.push(gran, sbox(2.4, 0.9, 1.0, 0.8, 0.6).translate(0, 0.25, s * Sp));            // 아치 받침
    // 화강암 탑 2개 (상판 양옆)
    for (const sx of [-1, 1]) {
      const px = sx * 2.25, pz = s * (Sp + 0.7);
      Bk.push(gran, sbox(1.0, 6.4, 1.7, 0.8, 0.6).translate(px, 2.9, pz));
      Bk.push(gran, sbox(0.86, 0.5, 1.5, 0.8, 0.6).translate(px, 6.35, pz));
      Bk.push(gran, sbox(0.6, 0.4, 1.1, 0.8, 0.6).translate(px, 6.8, pz));
      Bk.push(steelD, new THREE.BoxGeometry(1.02, 0.7, 0.5).translate(px, DY + 0.5, pz));   // 아치형 통로 그늘
    }
  }
  Bk.build(G);
  // 꼭대기 깃대 + 국기 2개
  for (const z of [-0.5, 0.5]) {
    add(new THREE.CylinderGeometry(0.02, 0.02, 0.9, 5), std(0xeeeeee), 0, Yt + 0.55, z);
    add(new THREE.PlaneGeometry(0.6, 0.3), new THREE.MeshStandardMaterial({ map: flagTex(), side: THREE.DoubleSide }), 0.31, Yt + 0.84, z).rotation.y = 0;
    add(new THREE.BoxGeometry(2.1, 0.06, 0.06), steelD, 0, Yt + 0.12, z);
  }
  return G;
}
// 루나파크: 웃는 얼굴 정문 + 양옆 노랑·빨강 줄무늬 탑 + 도는 관람차 + 회전목마 + 코니아일랜드 건물
function lunapark(L, city) {
  const G = new THREE.Group(), add = adder(G), Bk = LB(), Y = 0.06;
  Bk.push(std(0xcdbba0, { roughness: 1 }), new THREE.BoxGeometry(13, 0.06, 9).translate(0, 0.03, 0));
  const fz = 3.6, stripe = tex('lunastripe', 16, 128, (g, w, h) => { for (let i = 0; i < 8; i++) { g.fillStyle = i % 2 ? '#f6c21c' : '#e8392f'; g.fillRect(0, i * 16, w, 16); } });
  const strM = new THREE.MeshStandardMaterial({ map: stripe, roughness: 0.6 }), white = std(0xf6f2ea), red = std(0xd8352c), yel = std(0xf2c230), blue = std(0x2f7fd0);
  // 정문 벽 + 얼굴
  Bk.push(white, sbox(5.4, 2.0, 0.5, 1, 1).translate(0, Y + 1.0, fz - 0.4));
  Bk.push(red, new THREE.CylinderGeometry(2.1, 2.1, 0.3, 32).rotateX(Math.PI / 2).translate(0, Y + 2.4, fz - 0.25));
  add(new THREE.CircleGeometry(2.0, 40), new THREE.MeshStandardMaterial({ map: faceTex(), roughness: 0.6, emissive: 0x2a1a08 }), 0, Y + 2.4, fz - 0.07);
  for (const s of [-1, 1]) {
    Bk.push(strM, uvMul(new THREE.CylinderGeometry(0.34, 0.4, 5.0, 12), 2, 1).translate(s * 3.1, Y + 2.5, fz - 0.3));
    Bk.push(white, new THREE.CylinderGeometry(0.5, 0.5, 0.15, 12).translate(s * 3.1, Y + 5.05, fz - 0.3));
    Bk.push(yel, new THREE.SphereGeometry(0.34, 12, 8).translate(s * 3.1, Y + 5.4, fz - 0.3));
    Bk.push(red, new THREE.ConeGeometry(0.12, 0.6, 8).translate(s * 3.1, Y + 5.95, fz - 0.3));
  }
  // 회전목마 + 코니아일랜드
  Bk.push(white, new THREE.CylinderGeometry(1.0, 1.0, 0.7, 16).translate(3.6, Y + 0.35, -0.8));
  Bk.push(strM, uvMul(new THREE.ConeGeometry(1.2, 0.7, 16), 4, 1).translate(3.6, Y + 1.05, -0.8));
  Bk.push(emis(towerTex('sydconey', { wall: '#f0d48a', cols: 5, rows: 2, frame: '#e8392f', lit: 0.4 })), sbox(3.2, 1.1, 1.8, 1.2, 1.1).translate(0.8, Y + 0.55, -2.8));
  Bk.push(blue, new THREE.BoxGeometry(3.3, 0.14, 1.9).translate(0.8, Y + 1.17, -2.8));
  Bk.build(G);
  // 관람차 (돌아감)
  const wx = -3.8, wz = -1.0, wy = Y + 3.0, Rw = 2.5, wheel = new THREE.Group(), Wb = LB();
  wheel.position.set(wx, wy, wz); G.add(wheel);
  const frame = std(0xe8e4dc, { metalness: 0.4, roughness: 0.5 });
  for (const s of [-0.18, 0.18]) Wb.push(frame, new THREE.TorusGeometry(Rw, 0.05, 6, 40).translate(0, 0, s));
  for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2; beam(Wb, frame, V(0, 0, 0), V(Math.cos(a) * Rw, Math.sin(a) * Rw, 0), 0.04); Wb.push([red, yel, blue][i % 3], new THREE.BoxGeometry(0.3, 0.3, 0.42).translate(Math.cos(a) * Rw, Math.sin(a) * Rw - 0.2, 0)); }
  Wb.build(wheel);
  for (const sz of [-0.5, 0.5]) for (const sx of [-1, 1]) beam(Bk, frame, V(wx + sx * 1.3, 0, wz + sz), V(wx, wy, wz + sz * 0.5), 0.1);
  Bk.build(G);
  (city.anim || []).push((dt) => { wheel.rotation.z += dt * 0.12; });
  const T = (city.cityTrees = city.cityTrees || []);
  for (let i = 0; i < 10; i++) T.push([L.x - 6 + i * 1.3, L.z - 4.3, 1.1]);
  return G;
}
// 크라운 시드니: 세 꽃잎이 꼬이며 오르는 흰 유리 조각 탑 + 옆 바랑가루 인터내셔널 타워 3동
function crown(L, city) {
  const G = new THREE.Group(), Bk = LB(), ny = 32, ns = 48, Ht = 30, P = [], U = [], I = [];
  const Rf = (y) => 2.1 + 0.45 * Math.sin(Math.PI * Math.min(1, y / 24)) - 0.7 * Math.max(0, (y - 20) / 10) ** 2;
  for (let i = 0; i <= ny; i++) {
    const y = 0.6 + i / ny * Ht, r = Rf(y - 0.6);
    for (let j = 0; j <= ns; j++) { const a = j / ns * Math.PI * 2, rr = r * (1 + 0.17 * Math.cos(3 * (a - (y / Ht) * 0.9))); P.push(Math.cos(a) * rr, y, Math.sin(a) * rr); U.push(j / ns * 8, y / 2); }
  }
  P.push(0, 0.6 + Ht + 0.3, 0); U.push(0, 0);
  for (let i = 0; i < ny; i++) for (let j = 0; j < ns; j++) { const a = i * (ns + 1) + j; I.push(a, a + ns + 1, a + 1, a + 1, a + ns + 1, a + ns + 2); }
  const top = (ny + 1) * (ns + 1); for (let j = 0; j < ns; j++) { const a = ny * (ns + 1) + j; I.push(a, top, a + 1); }
  const g = new THREE.BufferGeometry(); g.setIndex(I); g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(U, 2)); g.computeVertexNormals();
  Bk.push(new THREE.MeshStandardMaterial({ map: crownTex(), roughness: 0.2, metalness: 0.35, emissive: 0x1a2630 }), g);
  Bk.push(ashlarMat('sydcrownb', 0xd8ccb4), sbox(7, 0.6, 7, 1.2, 0.6).translate(0, 0.3, 0));
  const gl = [0, 2, 1].map(glassMat), rim = std(0x3a3f44);
  for (const [x, z, h, w, i] of [[-4.6, -2.8, 17, 2.6, 0], [-1.2, -5.4, 14, 2.4, 1], [-5.4, 2.0, 12, 2.4, 2]]) {   // 남쪽 카메라에서 크라운을 가리지 않게 서·북쪽
    Bk.push(gl[i], sbox(w, h, w * 0.8, 1.6, 1.6).translate(x, h / 2, z));
    Bk.push(rim, new THREE.BoxGeometry(w + 0.1, 0.3, w * 0.8 + 0.1).translate(x, h + 0.15, z));
  }
  Bk.build(G);
  const T = (city.cityTrees = city.cityTrees || []);
  for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2 + 0.3; T.push([L.x + Math.cos(a) * 4.2, L.z + Math.sin(a) * 4.2, 0.9]); }
  return G;
}

export default {
  build,
  field: { sydtower, qvb, townhall, stmarys },
  edge: { opera: { r: 12, build: opera }, harbourbridge: { r: 14, build: harbourbridge }, lunapark: { r: 8, build: lunapark }, crown: { r: 8, build: crown } },
  gate: { wall: 0xc9a774, cap: 0xe6d4b0 }, water: 0x2f7fb0, riverWall: 0xc4a77a, riverWalk: 0xcfc4b0, riverTrees: false,
  bridges: []
};
