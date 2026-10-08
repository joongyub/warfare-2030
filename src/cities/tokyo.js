// 도시 키트: 도쿄 (신주쿠·시부야 빽빽한 중고층 빌딩 + 세로 네온 간판 + 기와지붕 주택가)
// 배경: 콘크리트·유리 중고층 빌딩(세로 간판·가로 간판), 가부키초식 간판 빌딩, 2~3층 기와지붕 주택 골목, 강 건너 초고층
// 전투 구역 안: 시부야 109·대형 전광판(스크램블 교차로 옆), 도쿄역(붉은 벽돌·돔), 센소지 가미나리몬·오층탑, 가부키자
// 가장자리: 도쿄 타워(빨강·흰 격자), 도쿄 스카이트리(흰 격자), 도쿄도청(쌍둥이 탑), 후지산(멀리 북서쪽 눈 덮인 원뿔)
import * as THREE from 'three';
import { makeRng } from '../textures.js';
import { cv, mk, once, pane, grime, bricks } from '../textures_world.js';
import { ashlarMat, sbox, std, adder, canvasTex, uvMul, emisMat, roofMat, trees, lamps, shade } from '../landmarks_world.js';
import { emis } from './common.js';

// ================= 그림(텍스처) =================
const NEON = ['#ff3b5c', '#ffcc1a', '#21d4fd', '#ff7a1a', '#4dff8a', '#ff5ad1', '#ffffff', '#2f7bff'];
const SIGN_BG = ['#c8102e', '#1d2b6b', '#f4f1e8', '#111317', '#e85a10', '#0f6b4f', '#f6c400', '#6a1b9a'];
// 한자·가타카나처럼 보이는 글자 (획 몇 개를 칸 안에 그림)
function glyph(g, x, y, s, rnd, col) {
  g.strokeStyle = col; g.lineWidth = Math.max(1.4, s * 0.13); g.lineCap = 'square';
  const P = (a, b) => [x + a * s, y + b * s];
  const seg = (a, b, c, d) => { const [x0, y0] = P(a, b), [x1, y1] = P(c, d); g.beginPath(); g.moveTo(x0, y0); g.lineTo(x1, y1); g.stroke(); };
  const kind = rnd();
  if (kind < 0.35) {          // 가타카나풍: 짧은 획 2~3개
    seg(0.15, 0.2, 0.85, 0.2); seg(0.75, 0.2, 0.35, 0.9);
    if (rnd() < 0.6) seg(0.3, 0.45, 0.7, 0.6);
  } else {                    // 한자풍: 가로·세로 획 + 상자
    const n = 2 + Math.floor(rnd() * 3);
    for (let i = 0; i < n; i++) { const yy = 0.15 + i * 0.7 / Math.max(1, n - 1); seg(0.12 + rnd() * 0.15, yy, 0.88 - rnd() * 0.15, yy); }
    seg(0.5, 0.08, 0.5, 0.92);
    if (rnd() < 0.5) { g.strokeRect(...P(0.2, 0.3), s * 0.6, s * 0.4); }
    if (rnd() < 0.5) { seg(0.5, 0.55, 0.15, 0.9); seg(0.5, 0.55, 0.85, 0.9); }
  }
}
// 세로 간판 (다테칸반): 색 바탕 + 글자 3~5개 세로로. emissive 에도 칠함
function vSign(g, e, x, y, w, h, rnd) {
  const bg = SIGN_BG[Math.floor(rnd() * SIGN_BG.length)], fg = bg === '#f4f1e8' || bg === '#f6c400' ? '#14161a' : NEON[Math.floor(rnd() * 3) * 2 % NEON.length];
  g.fillStyle = '#2a2c30'; g.fillRect(x - 1.5, y - 1.5, w + 3, h + 3);
  g.fillStyle = bg; g.fillRect(x, y, w, h);
  g.fillStyle = 'rgba(255,255,255,0.15)'; g.fillRect(x, y, w * 0.18, h);
  const n = Math.max(2, Math.floor(h / (w * 1.05))), s = Math.min(w * 0.78, h / n * 0.82);
  for (let i = 0; i < n; i++) glyph(g, x + (w - s) / 2, y + i * h / n + (h / n - s) / 2, s, rnd, fg);
  if (e) { e.fillStyle = bg; e.globalAlpha = 0.85; e.fillRect(x, y, w, h); e.globalAlpha = 1; for (let i = 0; i < n; i++) glyph(e, x + (w - s) / 2, y + i * h / n + (h / n - s) / 2, s, makeRng(i + bg), fg); }
}
// 가로 간판: 색 바탕 + 글자 줄
function hSign(g, e, x, y, w, h, rnd) {
  const bg = SIGN_BG[Math.floor(rnd() * SIGN_BG.length)], fg = bg === '#f4f1e8' || bg === '#f6c400' ? '#14161a' : '#ffffff';
  g.fillStyle = bg; g.fillRect(x, y, w, h);
  g.fillStyle = 'rgba(0,0,0,0.25)'; g.fillRect(x, y + h - 2, w, 2);
  const s = h * 0.72, n = Math.max(1, Math.floor((w - 4) / (s * 1.1)));
  for (let i = 0; i < n; i++) glyph(g, x + 3 + i * s * 1.1, y + (h - s) / 2, s, rnd, fg);
  if (e) { e.fillStyle = bg; e.globalAlpha = 0.7; e.fillRect(x, y, w, h); e.globalAlpha = 1; }
}
const WALL = ['#c9c6bf', '#b5b0a6', '#dcd8cf', '#9ea4a9', '#cdbfad', '#e6e2da', '#a89c8c', '#bfc6cb'];
// 중층 잡거 빌딩 (1칸 = 가로 2 × 세로 2.4 = 8층): 콘크리트 + 가로 띠창 + 옆 세로 간판 + 층별 가로 간판
function midTex(v) {
  return once('tkmid' + v, () => {
    const S = 256, [c, g] = cv(S, S), [ce, e] = cv(S, S), rnd = makeRng('tkmid' + v);
    e.fillStyle = '#000'; e.fillRect(0, 0, S, S);
    g.fillStyle = WALL[v % WALL.length]; g.fillRect(0, 0, S, S);
    grime(g, S, S, rnd, 900, 0.06);
    const rows = 8, rh = S / rows, tile = v % 3 === 0;
    if (tile) { g.fillStyle = 'rgba(0,0,0,0.07)'; for (let y = 0; y < S; y += 6) g.fillRect(0, y, S, 1); for (let x = 0; x < S; x += 12) g.fillRect(x, 0, 1, S); }   // 타일 외벽
    const signX = v % 2 ? S * 0.82 : 4, signW = S * 0.14;
    for (let r = 0; r < rows; r++) {
      const y = r * rh + rh * 0.2;
      if (v % 4 === 1) pane(g, e, 8, y, S - 16, rh * 0.5, rnd, { frame: '#4a4f55', mull: false, lit: 0.25, sky: '#8fb0c4' });   // 띠창
      else for (let k = 0; k < 5; k++) { const x = 10 + k * (S - 20) / 5; pane(g, e, x + 4, y, (S - 20) / 5 - 10, rh * 0.55, rnd, { frame: '#e8e6e0', lit: 0.22 }); }
      g.fillStyle = 'rgba(0,0,0,0.16)'; g.fillRect(0, r * rh + rh - 3, S, 3);
      if (rnd() < 0.35 && r > 0) hSign(g, e, S * 0.25 + rnd() * S * 0.2, r * rh + rh * 0.78, S * 0.4, rh * 0.2, rnd);   // 층 사이 가로 간판
      // 에어컨 실외기
      if (rnd() < 0.4) { g.fillStyle = '#e3e3df'; g.fillRect(rnd() * S * 0.7 + 20, r * rh + rh * 0.62, 16, 10); g.fillStyle = '#9a9a96'; g.fillRect(0, 0, 0, 0); }
    }
    if (v % 4 !== 3) vSign(g, e, signX, S * 0.04, signW, S * 0.9, rnd);
    return { map: mk(c), emissiveMap: mk(ce) };
  });
}
// 간판 빌딩 (가부키초·센터가이): 앞면 전체가 크고 작은 간판판 (1칸 = 1.6 × 1.6)
function neonTex(v) {
  return once('tkneon' + v, () => {
    const S = 256, [c, g] = cv(S, S), [ce, e] = cv(S, S), rnd = makeRng('tkneon' + v);
    e.fillStyle = '#000'; e.fillRect(0, 0, S, S);
    g.fillStyle = '#2b2d33'; g.fillRect(0, 0, S, S);
    grime(g, S, S, rnd, 400, 0.08);
    // 위쪽 층: 창 + 간판 칸
    const rows = 6, rh = S / rows;
    for (let r = 0; r < rows; r++) {
      let x = 2;
      while (x < S - 8) {
        const w = Math.min(S - 2 - x, 30 + rnd() * 70);
        if (rnd() < 0.62) hSign(g, e, x, r * rh + 3, w - 4, rh - 8, rnd);
        else pane(g, e, x + 2, r * rh + 6, w - 8, rh - 14, rnd, { frame: '#55585e', lit: 0.5, mull: false });
        x += w;
      }
    }
    vSign(g, e, S * 0.42, 6, S * 0.14, S - 12, rnd);
    return { map: mk(c), emissiveMap: mk(ce) };
  });
}
// 2~3층 주택 (1칸 = 가로 1.2 × 세로 0.6 = 2층): 회반죽·사이딩 벽, 작은 창, 베란다 난간, 1층 미닫이문
function houseTex(v) {
  return once('tkhouse' + v, () => {
    const S = 256, [c, g] = cv(S, S / 2), [ce, e] = cv(S, S / 2), H = S / 2, rnd = makeRng('tkhouse' + v);
    e.fillStyle = '#000'; e.fillRect(0, 0, S, H);
    const wall = ['#e8e1d2', '#d6cfc0', '#c9c2b4', '#ece8de', '#b9ad98'][v % 5];
    g.fillStyle = wall; g.fillRect(0, 0, S, H);
    if (v % 2) { g.fillStyle = 'rgba(0,0,0,0.07)'; for (let y = 0; y < H; y += 5) g.fillRect(0, y, S, 1); }   // 사이딩
    grime(g, S, H, rnd, 300, 0.05);
    const fh = H / 2;
    for (let i = 0; i < 3; i++) {
      const x = 14 + i * S / 3;
      pane(g, e, x, fh * 0.22, S / 3 - 34, fh * 0.5, rnd, { frame: '#d8d8d4', lit: 0.25 });
      if (i === 1) { g.strokeStyle = '#5a5d62'; g.lineWidth = 2; g.strokeRect(x - 6, fh * 0.5, S / 3 - 22, fh * 0.42); for (let k = x - 6; k < x + S / 3 - 28; k += 6) { g.beginPath(); g.moveTo(k, fh * 0.5); g.lineTo(k, fh * 0.92); g.stroke(); } }
    }
    g.fillStyle = 'rgba(0,0,0,0.18)'; g.fillRect(0, fh - 3, S, 3);
    // 1층: 나무 미닫이 + 작은 창
    g.fillStyle = '#6b4a2e'; g.fillRect(S * 0.1, fh + fh * 0.25, S * 0.22, fh * 0.75);
    g.fillStyle = '#e9dfc4'; for (let k = 0; k < 4; k++) for (let j = 0; j < 3; j++) g.fillRect(S * 0.1 + 4 + k * S * 0.052, fh + fh * 0.3 + j * fh * 0.22, S * 0.045, fh * 0.18);
    pane(g, e, S * 0.5, fh * 1.3, S * 0.3, fh * 0.4, rnd, { frame: '#d8d8d4', lit: 0.3 });
    return { map: mk(c), emissiveMap: mk(ce) };
  });
}
// 기와 (회색 일본 기와: 가로 줄 + 세로 골)
function tileRoofTex(kind = 0) {
  return canvasTex('tktile' + kind, 128, 128, (g, w, h) => {
    const rnd = makeRng('tktile' + kind), base = [0x5c6066, 0x3e4247, 0x6f655a, 0x4f6a80, 0x7a4a3a][kind];
    g.fillStyle = shade(base, 1); g.fillRect(0, 0, w, h);
    for (let x = 0; x < w; x += 8) { const gr = g.createLinearGradient(x, 0, x + 8, 0); gr.addColorStop(0, shade(base, 0.7)); gr.addColorStop(0.5, shade(base, 1.18)); gr.addColorStop(1, shade(base, 0.8)); g.fillStyle = gr; g.fillRect(x, 0, 8, h); }
    for (let y = 0; y < h; y += 16) { g.fillStyle = 'rgba(0,0,0,0.35)'; g.fillRect(0, y, w, 2); g.fillStyle = 'rgba(255,255,255,0.12)'; g.fillRect(0, y + 2, w, 1); }
    for (let i = 0; i < 40; i++) { g.fillStyle = `rgba(0,0,0,${rnd() * 0.12})`; g.fillRect(rnd() * w, rnd() * h, 6, 3); }
  });
}
const tileMat = (kind = 0) => new THREE.MeshStandardMaterial({ map: tileRoofTex(kind), bumpMap: tileRoofTex(kind), bumpScale: 0.6, roughness: 0.75, metalness: 0.15, side: THREE.DoubleSide });
// 도로변 상가 (가로 1 × 세로 1.5 = 5층): 1층 가게(노렌·초롱) + 위층 창과 간판 + 세로 간판
function shopTex(v) {
  return once('tkshop' + v, () => {
    const W = 256, H = 384, fh = H / 5, [c, g] = cv(W, H), [ce, e] = cv(W, H), rnd = makeRng('tkshop' + v);
    e.fillStyle = '#000'; e.fillRect(0, 0, W, H);
    g.fillStyle = WALL[(v + 3) % WALL.length]; g.fillRect(0, 0, W, H); grime(g, W, H, rnd, 700, 0.06);
    for (let f = 0; f < 4; f++) {
      for (let i = 0; i < 2; i++) pane(g, e, 20 + i * 100, f * fh + fh * 0.2, 80, fh * 0.55, rnd, { frame: '#e6e4de', lit: 0.3 });
      if (rnd() < 0.5) hSign(g, e, 18, f * fh + fh * 0.8, 180, fh * 0.17, rnd);
      g.fillStyle = 'rgba(0,0,0,0.15)'; g.fillRect(0, f * fh + fh - 2, W, 2);
    }
    vSign(g, e, W * 0.8, fh * 0.15, W * 0.15, fh * 3.7, rnd);
    // 1층 가게
    const gy = 4 * fh;
    g.fillStyle = '#26282c'; g.fillRect(0, gy, W, fh);
    hSign(g, e, 0, gy + 2, W, fh * 0.26, rnd);
    const sg = g.createLinearGradient(0, gy + fh * 0.3, 0, H); sg.addColorStop(0, '#fbe9bc'); sg.addColorStop(1, '#b98f58');
    g.fillStyle = sg; g.fillRect(10, gy + fh * 0.3, W * 0.66, fh * 0.7);
    e.fillStyle = '#8a6a3a'; e.fillRect(10, gy + fh * 0.3, W * 0.66, fh * 0.7);
    // 노렌 (천 가림막)
    const nc = ['#1d2b6b', '#7a1a1a', '#2b2b2b', '#f1ece0'][v % 4];
    for (let k = 0; k < 4; k++) { g.fillStyle = nc; g.fillRect(14 + k * W * 0.165, gy + fh * 0.3, W * 0.155, fh * 0.32); }
    glyph(g, 14 + W * 0.2, gy + fh * 0.33, fh * 0.24, rnd, nc === '#f1ece0' ? '#222' : '#fff');
    // 붉은 초롱 2개
    if (v % 2 === 0) for (const lx of [W * 0.72, W * 0.94]) { g.fillStyle = '#e8322a'; g.beginPath(); g.ellipse(lx, gy + fh * 0.55, 9, 13, 0, 0, 7); g.fill(); e.fillStyle = '#c02a20'; e.beginPath(); e.ellipse(lx, gy + fh * 0.55, 9, 13, 0, 0, 7); e.fill(); }
    else { g.fillStyle = '#3a3d42'; g.fillRect(W * 0.72, gy + fh * 0.3, W * 0.24, fh * 0.7); g.fillStyle = 'rgba(200,220,235,0.45)'; g.fillRect(W * 0.74, gy + fh * 0.35, W * 0.2, fh * 0.6); }
    return { map: mk(c), emissiveMap: mk(ce) };
  });
}
// 옥상 광고판 그림 (가로로 긴 판)
function billTex(v) {
  return once('tkbill' + v, () => {
    const W = 256, H = 96, [c, g] = cv(W, H), [ce, e] = cv(W, H), rnd = makeRng('tkbill' + v);
    const a = NEON[v % NEON.length], b = SIGN_BG[(v * 3 + 1) % SIGN_BG.length];
    const gr = g.createLinearGradient(0, 0, W, H); gr.addColorStop(0, b); gr.addColorStop(1, shade(parseInt(b.slice(1), 16), 0.6)); g.fillStyle = gr; g.fillRect(0, 0, W, H);
    g.fillStyle = a; g.beginPath(); g.arc(W * 0.18, H / 2, H * 0.32, 0, 7); g.fill();
    for (let i = 0; i < 5; i++) glyph(g, W * 0.36 + i * 30, H * 0.28, 26, rnd, '#ffffff');
    g.strokeStyle = '#d8d8d8'; g.lineWidth = 4; g.strokeRect(2, 2, W - 4, H - 4);
    e.drawImage(c, 0, 0); e.globalCompositeOperation = 'multiply'; e.fillStyle = '#9a9a9a'; e.fillRect(0, 0, W, H);
    return { map: mk(c), emissiveMap: mk(ce) };
  });
}

// ================= 기하 도우미 =================
// 맞배지붕(박공): 바닥 w×d, 용마루가 w 방향. 로컬 → ry 회전 → (x, y, z)
function gableGeo(x, y, z, w, d, rh, ry, over = 0.1) {
  const W = w / 2 + over, D = d / 2 + over, P = [], U = [];
  const sl = Math.hypot(D, rh);
  const tri = (a, b, c, ua, ub, uc) => { P.push(...a, ...b, ...c); U.push(...ua, ...ub, ...uc); };
  // 앞 경사 (+z) / 뒤 경사 (-z)
  for (const s of [1, -1]) {
    const a = [-W, 0, s * D], b = [W, 0, s * D], t1 = [W, rh, 0], t0 = [-W, rh, 0];
    if (s > 0) { tri(a, b, t1, [0, 0], [w * 2, 0], [w * 2, sl * 2]); tri(a, t1, t0, [0, 0], [w * 2, sl * 2], [0, sl * 2]); }
    else { tri(b, a, t0, [0, 0], [w * 2, 0], [w * 2, sl * 2]); tri(b, t0, t1, [0, 0], [w * 2, sl * 2], [0, sl * 2]); }
  }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(U, 2)); g.computeVertexNormals();
  g.applyMatrix4(new THREE.Matrix4().makeRotationY(ry)); g.translate(x, y, z);
  return g;
}
// 박공 벽 삼각형 (양 끝)
function gableEnds(x, y, z, w, d, rh, ry) {
  const P = [], W = w / 2, D = d / 2;
  for (const s of [1, -1]) P.push(s * W, 0, s * D, s * W, 0, -s * D, s * W, rh, 0);
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(new Array(P.length / 3 * 2).fill(0.5), 2)); g.computeVertexNormals();
  g.applyMatrix4(new THREE.Matrix4().makeRotationY(ry)); g.translate(x, y, z);
  return g;
}
// 일본식 우진각 지붕 (처마가 넓게 나옴): 바닥 w×d, 높이 h. 기와 무늬는 가로 줄
function jRoofGeo(w, d, h, ridge = null) {
  const r = ridge ?? Math.max(0.02, (w - d) / 2), x = w / 2, z = d / 2;
  const v = [
    -x, 0, z, x, 0, z, r, h, 0, -x, 0, z, r, h, 0, -r, h, 0,
    x, 0, -z, -x, 0, -z, -r, h, 0, x, 0, -z, -r, h, 0, r, h, 0,
    x, 0, z, x, 0, -z, r, h, 0,
    -x, 0, -z, -x, 0, z, -r, h, 0
  ];
  const uv = [];
  for (let i = 0; i < v.length; i += 3) uv.push((v[i] + v[i + 2]) * 2.2, v[i + 1] * 5);
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(v, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.computeVertexNormals();
  return g;
}
// 처마 끝이 살짝 들린 지붕 한 단: 얇은 처마판 + 우진각 + 용마루
function jRoof(add, m, trim, w, d, h, y, x = 0, z = 0, ridge) {
  add(new THREE.BoxGeometry(w, 0.05, d), trim, x, y + 0.025, z);
  add(jRoofGeo(w, d, h, ridge), m, x, y + 0.05, z);
  const rl = ridge ?? Math.max(0.02, (w - d) / 2);
  if (rl > 0.05) add(new THREE.BoxGeometry(rl * 2 + 0.1, 0.07, 0.08), trim, x, y + 0.05 + h, z);
}

// ================= 배경 도시 =================
function buildTokyo(C, H) {
  const { free, B, rnd, boxWalls, roofKit, mat } = H, S = C.S, b = S.bounds, R = S.river;
  const M = {
    mid: [0, 1, 2, 3, 4, 5, 6, 7].map((v) => emis(midTex(v), { emissiveIntensity: 0.45 })),
    neon: [0, 1, 2, 3].map((v) => emis(neonTex(v), { emissiveIntensity: 0.7, roughness: 0.6 })),
    house: [0, 1, 2, 3, 4].map((v) => emis(houseTex(v), { emissiveIntensity: 0.3, side: THREE.DoubleSide })),
    bill: [0, 1, 2, 3, 4, 5].map((v) => emis(billTex(v), { emissiveIntensity: 0.8, side: THREE.DoubleSide })),
    glass: C.M.glass, tile: [tileMat(0), tileMat(1), tileMat(2), tileMat(3), tileMat(4)],
    roof: mat(0x6a6d70, { roughness: 0.95 }), rim: mat(0xd6d3cc, { roughness: 0.9 }), rimDark: C.M.rimDark, mech: C.M.mech,
    gableW: mat(0xe2dccd), green: mat(0x5f8a45, { roughness: 1 }), gravel: mat(0xcfc8b8, { roughness: 1 }), torii: mat(0xd8452e, { roughness: 0.6 }),
    pole: mat(0x6a6a66), wire: mat(0x26282a)
  };
  const plotM = mat(0xb4b4b2), alleyM = mat(0x8e9092, { roughness: 0.95 });
  // 옥상 광고판 (기둥 2개 + 판)
  const billboard = (x, y, z, w) => {
    const h = w * 0.38, m = M.bill[rnd.int(0, 5)];
    const p = new THREE.PlaneGeometry(w, h); p.translate(x, y + 0.35 + h / 2, z); B.push(m, p);
    for (const s of [-1, 1]) { const g = new THREE.BoxGeometry(0.06, 0.4, 0.06); g.translate(x + s * w * 0.35, y + 0.2, z - 0.05); B.push(M.pole, g); }
  };
  // 빌딩 한 동 (텍스처 + 옥상 구조물 + 가끔 광고판)
  const bldg = (x, z, w, d, h, m, tu, tv, sign) => {
    boxWalls(B, x, 0, z, w, h, d, 0, m, M.roof, tu, tv);
    roofKit(B, x, z, w, d, h, 0, M.rimDark, { t: 0.06, rh: 0.12, house: h > 2 ? [w * 0.35, 0.35, d * 0.35] : null, hx: w * 0.15, houseM: M.mech, mech: [[-w * 0.25, d * 0.2, 0.3, 0.22, 0.3]], mechM: M.mech });
    if (sign && rnd() < 0.45) billboard(x, h, z + d * 0.25, Math.min(w * 0.9, 2.6));
  };
  // 기와지붕 주택 한 채
  const house = (x, z, w, d, floors, ry) => {
    const h = floors * 0.3;
    boxWalls(B, x, 0, z, w, h, d, ry, M.house[rnd.int(0, 4)], null, 1.2, 0.6);
    const rh = rnd.range(0.18, 0.28), t = rnd();
    B.push(M.tile[t < 0.45 ? 0 : t < 0.65 ? 1 : t < 0.8 ? 3 : t < 0.92 ? 2 : 4], gableGeo(x, h, z, w, d, rh, ry, 0.1));
    B.push(M.gableW, gableEnds(x, h, z, w, d, rh, ry));
  };
  for (let bx = -150; bx < 150; bx += 9) for (let bz = -90; bz < 90; bz += 9) {
    const cx = bx + 4.5, cz = bz + 4.5, dist = Math.hypot(cx, cz);
    if (dist > 150 || !free(cx, cz, 4)) continue;
    const pg = new THREE.PlaneGeometry(7.6, 7.6); pg.rotateX(-Math.PI / 2); pg.translate(cx, 0.006, cz); B.push(plotM, pg);
    const front = cz > b.z1 - 6 && cz < b.z1 + 34 && cx > b.x0 - 30 && cx < b.x1 + 30;
    const side = !front && cz > b.z0 - 4 && cz < b.z1 && (cx < b.x0 || cx > b.x1) && Math.min(Math.abs(cx - b.x0), Math.abs(cx - b.x1)) < 16;
    const across = R && cz < R.z;
    const r = rnd();
    if (front || (!across && r < 0.22 && dist < 90)) {
      // 주택가 골목: 2~3층 기와지붕 집이 좁은 골목을 사이에 두고 다닥다닥
      const al = new THREE.PlaneGeometry(7.4, 0.7); al.rotateX(-Math.PI / 2); al.translate(cx, 0.009, cz); B.push(alleyM, al);
      for (const sz of [-1, 1]) for (let k = 0; k < 4; k++) {
        const x = cx - 2.7 + k * 1.8, z = cz + sz * 2.0;
        if (rnd() < 0.18) {
          // 작은 맨션 (4~5층 평지붕, 옥상 물탱크)
          const h = rnd.int(4, 5) * 0.3 * (front ? 0.8 : 1);
          boxWalls(B, x, 0, z, 1.7, h, 2.6, 0, M.mid[rnd.int(0, 7)], M.roof, 1, 1.2);
          roofKit(B, x, z, 1.7, 2.6, h, 0, M.rim, { t: 0.04, rh: 0.08, house: [0.4, 0.2, 0.4], houseM: M.mech });
        } else house(x + rnd.range(-0.1, 0.1), z + rnd.range(-0.15, 0.15), rnd.range(1.4, 1.7), rnd.range(2.0, 2.6), front ? rnd.int(2, 3) : rnd.int(2, 3), sz > 0 ? 0 : Math.PI);
      }
      // 전봇대 (도쿄 골목의 상징)
      for (let k = 0; k < 2; k++) { const px = cx - 3 + k * 6, p = new THREE.CylinderGeometry(0.035, 0.045, 1.6, 6); p.translate(px, 0.8, cz + 0.42); B.push(M.pole, p); const cr = new THREE.BoxGeometry(0.4, 0.03, 0.03); cr.translate(px, 1.45, cz + 0.42); B.push(M.pole, cr); }
      const wi = new THREE.BoxGeometry(6, 0.012, 0.012); wi.translate(cx, 1.42, cz + 0.42); B.push(M.wire, wi);
      if (rnd() < 0.4) for (let k = 0; k < 3; k++) (C.cityTrees = C.cityTrees || []).push([cx + rnd.range(-3.3, 3.3), cz + (rnd() < 0.5 ? -3.7 : 3.7), rnd.range(0.55, 0.75)]);
    } else if (!across && r < 0.27 && dist < 110) {
      // 작은 신사: 자갈 마당 + 붉은 도리이 + 본전 + 숲
      const gp = new THREE.PlaneGeometry(7, 7); gp.rotateX(-Math.PI / 2); gp.translate(cx, 0.01, cz); B.push(M.gravel, gp);
      for (const s of [-1, 1]) { const p = new THREE.CylinderGeometry(0.08, 0.09, 1.3, 8); p.translate(cx + s * 0.6, 0.65, cz + 2.4); B.push(M.torii, p); }
      const kb = new THREE.BoxGeometry(1.7, 0.1, 0.14); kb.translate(cx, 1.3, cz + 2.4); B.push(M.torii, kb);
      const nk = new THREE.BoxGeometry(1.4, 0.07, 0.1); nk.translate(cx, 1.1, cz + 2.4); B.push(M.torii, nk);
      boxWalls(B, cx, 0, cz - 0.5, 2, 0.6, 1.6, 0, M.house[0], null, 1.2, 0.6);
      B.push(M.tile[1], gableGeo(cx, 0.6, cz - 0.5, 2, 1.6, 0.6, 0, 0.3)); B.push(M.gableW, gableEnds(cx, 0.6, cz - 0.5, 2, 1.6, 0.6, 0));
      for (let k = 0; k < 9; k++) (C.cityTrees = C.cityTrees || []).push([cx + (k % 2 ? -1 : 1) * rnd.range(2.2, 3.4), cz + rnd.range(-3.4, 3.4), rnd.range(0.9, 1.3)]);
    } else if (!across && (side || (r < 0.75 && dist < 80))) {
      // 잡거 빌딩 줄: 좁고 키 큰 빌딩 3~5채 (세로 간판·간판 빌딩)
      const n = rnd.int(3, 5), hm = side ? 0.65 : 1;
      for (let k = 0; k < n; k++) {
        const w = 7.2 / n - 0.12, x = cx - 3.6 + (k + 0.5) * 7.2 / n, d = rnd.range(4.5, 7), h = rnd.range(2, 6.5) * hm;
        const neon = rnd() < 0.3;
        bldg(x, cz + rnd.range(-0.3, 0.3), w, d, h, neon ? M.neon[rnd.int(0, 3)] : M.mid[rnd.int(0, 7)], neon ? 1.6 : 2, neon ? 1.6 : 2.4, true);
      }
    } else {
      // 고층 오피스 (유리·콘크리트), 강 건너는 더 높게 (신주쿠 부도심 느낌)
      const n = rnd.int(1, 2), tall = across ? rnd.range(10, 24) : rnd.range(6, 15);
      for (let k = 0; k < n; k++) {
        const w = rnd.range(3, 4.6), d = rnd.range(3, 4.6), h = tall * rnd.range(0.75, 1);
        const x = cx + (n > 1 ? (k ? 1.8 : -1.8) : rnd.range(-1, 1)), z = cz + rnd.range(-1, 1);
        const m = rnd() < 0.5 ? M.glass[rnd.int(0, 3)] : M.mid[rnd.int(0, 7)];
        bldg(x, z, w, d, h, m, 2, m === M.glass[0] || M.glass.includes(m) ? 2 : 2.4, false);
        if (h > 12 && rnd() < 0.5) { const hp = new THREE.CylinderGeometry(w * 0.3, w * 0.3, 0.05, 16); hp.translate(x, h + 0.1, z); B.push(M.rim, hp); }   // 헬리포트
      }
    }
  }
  // 강 건너 강변: 중고층 빌딩 줄
  if (R) for (let x = -150; x < 150; x += 5.5) {
    const z = R.z - R.w / 2 - 4.2;
    if (!free(x, z, 2.6)) continue;
    const h = rnd.range(3, 11), w = rnd.range(3.4, 5);
    bldg(x, z, w, 3.6, h, rnd() < 0.4 ? M.glass[rnd.int(0, 3)] : M.mid[rnd.int(0, 7)], 2, 2.4, h < 7);
  }
  // 시부야 스크램블 교차로: 도겐자카가 메이지도리를 X자로 가로지르는 곳에 흰 횡단보도 줄무늬 (사방 + 대각선 2줄)
  const X0 = 30, Z0 = 9, zebra = new THREE.MeshStandardMaterial({ color: 0xd2d3d0, roughness: 0.8, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 });
  const stripe = (cx, cz, ang, len) => {
    for (let i = -3; i <= 3; i++) {
      const g = new THREE.PlaneGeometry(0.16, 0.7); g.rotateX(-Math.PI / 2); g.translate(i * 0.3, 0, 0); g.rotateY(ang); g.translate(cx, 0.062, cz); B.push(zebra, g);
    }
    void len;
  };
  stripe(X0, Z0 - 1.6, 0, 1); stripe(X0, Z0 + 1.6, 0, 1);              // 메이지도리를 건너는 줄 (남·북)
  stripe(X0 - 1.6, Z0, Math.PI / 2, 1); stripe(X0 + 1.6, Z0, Math.PI / 2, 1);
  for (const s of [-1, 1]) for (let i = -4; i <= 4; i++) {              // X자 대각선 줄
    const g = new THREE.PlaneGeometry(0.16, 0.6); g.rotateX(-Math.PI / 2); g.translate(i * 0.32, 0, 0); g.rotateY(s * Math.PI / 4); g.translate(X0, 0.064, Z0); B.push(zebra, g);
  }
}

// ================= 전투 구역 안 랜드마크 =================
// 대형 전광판 그림 (시부야 큐프론트)
function screenTex(key) {
  return canvasTex('tkscreen' + key, 256, 160, (g, w, h) => {
    const rnd = makeRng('tkscreen' + key);
    const gr = g.createLinearGradient(0, 0, w, h); gr.addColorStop(0, '#ff3b8d'); gr.addColorStop(0.5, '#6a3bff'); gr.addColorStop(1, '#21d4fd'); g.fillStyle = gr; g.fillRect(0, 0, w, h);
    g.fillStyle = 'rgba(255,255,255,0.85)'; g.beginPath(); g.arc(w * 0.28, h * 0.5, h * 0.3, 0, 7); g.fill();
    g.fillStyle = '#ffcc1a'; g.beginPath(); g.arc(w * 0.28, h * 0.5, h * 0.2, 0, 7); g.fill();
    for (let i = 0; i < 4; i++) glyph(g, w * 0.52 + i * 28, h * 0.22, 24, rnd, '#ffffff');
    g.fillStyle = '#ffffff'; g.font = 'bold 30px "Arial Black",sans-serif'; g.textAlign = 'center'; g.fillText('2030', w * 0.72, h * 0.82);
    g.fillStyle = 'rgba(0,0,0,0.16)'; for (let y = 0; y < h; y += 3) g.fillRect(0, y, w, 1);
  });
}
// 시부야 109: 은색 원통 탑 (세로 금속 갈빗대 + 꼭대기 '109' 간판) + 옆 날개 + 앞 큐프론트 대형 전광판 빌딩
function shibuya109(G, k) {
  const add = adder(G), W = k.w, D = k.d;
  const rib = canvasTex('tk109rib', 256, 64, (g, w, h) => {
    g.fillStyle = '#c9ced3'; g.fillRect(0, 0, w, h);
    for (let x = 0; x < w; x += 16) { const gr = g.createLinearGradient(x, 0, x + 16, 0); gr.addColorStop(0, '#8e959c'); gr.addColorStop(0.5, '#eef1f3'); gr.addColorStop(1, '#a3aab0'); g.fillStyle = gr; g.fillRect(x, 0, 12, h); g.fillStyle = '#4a525a'; g.fillRect(x + 12, 0, 4, h); }
    g.fillStyle = 'rgba(0,0,0,0.25)'; for (let y = 0; y < h; y += 16) g.fillRect(0, y, w, 1);
  });
  rib.repeat.set(3, 3);
  const ribM = new THREE.MeshStandardMaterial({ map: rib, bumpMap: rib, bumpScale: 0.5, metalness: 0.6, roughness: 0.35 });
  const r = 0.72, cx = W * 0.18, cz = -D * 0.18, h = 4.0;
  add(new THREE.CylinderGeometry(r, r, h, 28), ribM, cx, 0.06 + h / 2, cz);
  // 꼭대기 '109' 간판 띠 (원통을 두름)
  const s109 = canvasTex('tk109sign', 512, 64, (g, w, h2) => { g.fillStyle = '#16181c'; g.fillRect(0, 0, w, h2); g.fillStyle = '#ffffff'; g.font = 'bold 50px "Arial Black",sans-serif'; g.textBaseline = 'middle'; g.textAlign = 'center'; for (let i = 0; i < 3; i++) g.fillText('109', w * (i + 0.5) / 3, h2 / 2 + 2); g.fillStyle = '#ff3b5c'; g.fillRect(0, h2 - 6, w, 6); });
  add(new THREE.CylinderGeometry(r + 0.03, r + 0.03, 0.45, 28, 1, true), new THREE.MeshStandardMaterial({ map: s109, emissiveMap: s109, emissive: 0xffffff, emissiveIntensity: 0.9 }), cx, 0.06 + h - 0.35, cz);
  add(new THREE.CylinderGeometry(r * 0.95, r, 0.08, 28), std(0x8e959c, { metalness: 0.6 }), cx, 0.06 + h + 0.04, cz);
  add(new THREE.CylinderGeometry(0.03, 0.03, 0.7, 6), std(0xcfd2d4), cx, 0.06 + h + 0.4, cz);
  // 원통 아래쪽 패션 광고 현수막
  const ad = canvasTex('tk109ad', 128, 256, (g, w, h2) => { const gr = g.createLinearGradient(0, 0, 0, h2); gr.addColorStop(0, '#ffd1e6'); gr.addColorStop(1, '#ff5ad1'); g.fillStyle = gr; g.fillRect(0, 0, w, h2); g.fillStyle = '#2a2030'; g.beginPath(); g.ellipse(w / 2, h2 * 0.35, 26, 34, 0, 0, 7); g.fill(); g.fillRect(w / 2 - 34, h2 * 0.5, 68, h2 * 0.4); g.fillStyle = '#fff'; g.font = 'bold 26px sans-serif'; g.textAlign = 'center'; g.fillText('SALE', w / 2, h2 * 0.96); });
  add(new THREE.PlaneGeometry(0.9, 1.8), new THREE.MeshStandardMaterial({ map: ad, emissiveMap: ad, emissive: 0xffffff, emissiveIntensity: 0.6 }), cx, 0.06 + 2.0, cz + r + 0.02);
  // 뒤로 붙은 날개 건물 (쐐기 모양)
  const wing = emisMat(midTex(5));
  add(sbox(W * 0.42, 2.4, D * 0.5, 2, 2.4), wing, -W * 0.16, 0.06 + 1.2, -D * 0.22);
  add(new THREE.BoxGeometry(W * 0.44, 0.08, D * 0.52), std(0x777b80), -W * 0.16, 0.06 + 2.44, -D * 0.22);
  // 큐프론트: 앞쪽 유리 빌딩 + 전면 대형 전광판 (남쪽 = 카메라 쪽)
  const glassT = canvasTex('tkqfg', 128, 128, (g, w, h2) => { g.fillStyle = '#2c3f52'; g.fillRect(0, 0, w, h2); g.fillStyle = 'rgba(160,200,230,0.35)'; for (let x = 0; x < w; x += 16) g.fillRect(x, 0, 1, h2); for (let y = 0; y < h2; y += 16) g.fillRect(0, y, w, 1); });
  const glass = new THREE.MeshStandardMaterial({ map: glassT, metalness: 0.5, roughness: 0.15 });
  add(sbox(W * 0.62, 2.0, D * 0.36, 1, 1), glass, -W * 0.12, 0.06 + 1.0, D * 0.27);
  const scr = new THREE.MeshStandardMaterial({ map: screenTex('q'), emissiveMap: screenTex('q'), emissive: 0xffffff, emissiveIntensity: 1.0, roughness: 0.3 });
  add(new THREE.PlaneGeometry(W * 0.56, 1.1), scr, -W * 0.12, 0.06 + 1.35, D * 0.27 + D * 0.18 + 0.02);
  add(new THREE.BoxGeometry(W * 0.6, 0.06, 0.1), std(0x222428), -W * 0.12, 0.06 + 1.93, D * 0.45 + 0.03);
  // 옆면 작은 전광판 2개 (동쪽 = 교차로 쪽)
  const scr2 = new THREE.MeshStandardMaterial({ map: screenTex('b'), emissiveMap: screenTex('b'), emissive: 0xffffff, emissiveIntensity: 0.9 });
  const p2 = add(new THREE.PlaneGeometry(D * 0.32, 0.8), scr2, -W * 0.12 + W * 0.31 + 0.02, 0.06 + 1.3, D * 0.27); p2.rotation.y = Math.PI / 2;
  // 하치코 동상 자리 (작은 나무 + 받침)
  add(new THREE.BoxGeometry(0.22, 0.2, 0.22), ashlarMat('tkhachi', 0x8d8a84), W * 0.36, 0.16, D * 0.38);
  add(new THREE.BoxGeometry(0.16, 0.12, 0.08), std(0x4f5a50, { metalness: 0.5 }), W * 0.36, 0.32, D * 0.38);
  trees(G, [[W * 0.42, D * 0.1], [W * 0.42, -D * 0.42]], 1);
}
// 도쿄역 마루노우치 역사: 붉은 벽돌 + 흰 돌 띠 3층, 양 끝 팔각 돔, 가운데 지붕
function brickFacade() {
  return canvasTex('tkstation', 256, 128, (g, w, h) => {
    const rnd = makeRng('tkst');
    bricks(g, w, h, '#a8452f', rnd);
    g.fillStyle = '#ece6d8';
    for (const y of [0, h * 0.34, h * 0.67]) g.fillRect(0, y, w, 5);   // 흰 돌 띠
    const cols = 8, cw = w / cols;
    for (let r = 0; r < 3; r++) for (let c = 0; c < cols; c++) {
      const x = c * cw + cw * 0.3, y = r * h / 3 + h * 0.08, ww = cw * 0.4, hh = h / 3 * 0.62;
      g.fillStyle = '#ece6d8'; g.fillRect(x - 3, y - 3, ww + 6, hh + 6);
      const gr = g.createLinearGradient(x, y, x, y + hh); gr.addColorStop(0, '#9bb3c4'); gr.addColorStop(1, '#2c3640'); g.fillStyle = gr; g.fillRect(x, y, ww, hh);
      g.fillStyle = '#ece6d8'; g.fillRect(x + ww / 2 - 1, y, 2, hh); g.fillRect(x, y + hh * 0.45, ww, 2);
      if (r === 0) { g.beginPath(); g.arc(x + ww / 2, y - 3, ww / 2 + 3, Math.PI, 0); g.fill(); }
    }
    for (let c = 0; c <= cols; c++) { g.fillStyle = 'rgba(236,230,216,0.55)'; g.fillRect(c * cw - 2, 0, 4, h); }
  });
}
function tokyostation(G, k) {
  const add = adder(G), W = k.w, D = k.d;
  const t = brickFacade(); const fac = new THREE.MeshStandardMaterial({ map: t, bumpMap: t, bumpScale: 0.4, roughness: 0.85 });
  t.repeat.set(1, 1);
  const slate = roofMat('lead'), trim = std(0xece6d8, { roughness: 0.8 }), dome = std(0x4c5052, { metalness: 0.4, roughness: 0.45 });
  const bw = W * 0.92, bh = 1.3, bd = D * 0.5;
  const body = add(sbox(bw, bh, bd, bw / 3, bh), fac, 0, 0.06 + bh / 2, 0);
  void body;
  add(new THREE.BoxGeometry(bw + 0.08, 0.06, bd + 0.08), trim, 0, 0.06 + bh + 0.03, 0);
  // 맞배·모임지붕 (슬레이트)
  add(jRoofGeo(bw, bd, 0.35), slate, 0, 0.06 + bh + 0.06, 0);
  // 가운데 현관 돌출부 + 작은 박공
  add(sbox(1.2, bh + 0.25, bd + 0.3, 0.6, 0.6), fac, 0, 0.06 + (bh + 0.25) / 2, 0.15);
  add(jRoofGeo(1.25, bd + 0.35, 0.4, 0.02), slate, 0, 0.06 + bh + 0.28, 0.15);
  // 양 끝 팔각 돔 (남·북 돔)
  for (const s of [-1, 1]) {
    const x = s * (bw / 2 - 0.55);
    add(sbox(1.15, bh + 0.35, bd + 0.35, 0.6, 0.7), fac, x, 0.06 + (bh + 0.35) / 2, 0.08);
    add(new THREE.CylinderGeometry(0.5, 0.52, 0.35, 8), fac, x, 0.06 + bh + 0.35 + 0.17, 0.08);
    add(new THREE.CylinderGeometry(0.55, 0.55, 0.05, 8), trim, x, 0.06 + bh + 0.7, 0.08);
    const dm = add(new THREE.SphereGeometry(0.52, 8, 8, 0, Math.PI * 2, 0, Math.PI / 2), dome, x, 0.06 + bh + 0.72, 0.08); dm.scale.y = 1.25;
    add(new THREE.CylinderGeometry(0.06, 0.08, 0.2, 8), trim, x, 0.06 + bh + 1.4, 0.08);
    add(new THREE.ConeGeometry(0.05, 0.25, 8), dome, x, 0.06 + bh + 1.62, 0.08);
  }
  // 중간 작은 돔 탑 2개
  for (const s of [-1, 1]) { const x = s * bw * 0.22; add(new THREE.BoxGeometry(0.4, 0.3, 0.4), trim, x, 0.06 + bh + 0.3, -bd * 0.1); add(new THREE.ConeGeometry(0.3, 0.45, 4).rotateY(Math.PI / 4), slate, x, 0.06 + bh + 0.67, -bd * 0.1); }
  // 앞 광장 (흰 포장 + 가로수 + 가로등)
  add(new THREE.BoxGeometry(W * 0.96, 0.02, D * 0.3), std(0xe8e4da), 0, 0.07, D * 0.36);
  trees(G, [[-W * 0.4, D * 0.42], [-W * 0.2, D * 0.42], [W * 0.2, D * 0.42], [W * 0.4, D * 0.42]], 1.1);
  lamps(add, [[-W * 0.08, D * 0.42], [W * 0.08, D * 0.42]]);
}
// 센소지: 앞(남)에 가미나리몬(붉은 문 + 큰 붉은 초롱), 뒤에 본당, 서쪽에 오층탑
function sensoji(G, k) {
  const add = adder(G), W = k.w, D = k.d;
  const red = std(0xc0322a, { roughness: 0.6 }), dark = std(0x2b2422), tile = tileMat(1), trim = std(0x3a3532, { roughness: 0.8 }), white = std(0xeee8dc);
  const gold = std(0xd8aa45, { metalness: 0.9, roughness: 0.3 });
  const stone = ashlarMat('tksenso', 0xb8b2a6);
  add(sbox(W * 0.96, 0.08, D * 0.96, 0.8, 0.8), stone, 0, 0.1, 0);
  // 가미나리몬 (남쪽 = +z)
  const gz = D * 0.36, gw = 1.7;
  for (const sx of [-1, 1]) for (const sz of [-0.2, 0.2]) add(new THREE.CylinderGeometry(0.05, 0.05, 0.85, 8), red, sx * gw * 0.42, 0.14 + 0.42, gz + sz);
  for (const sx of [-1, 1]) add(sbox(0.42, 0.75, 0.32, 0.5, 0.5), red, sx * gw * 0.42, 0.14 + 0.37, gz);   // 풍신·뇌신 칸
  add(new THREE.BoxGeometry(gw, 0.12, 0.6), red, 0, 0.14 + 0.88, gz);
  jRoof(add, tile, trim, gw + 0.5, 1.0, 0.38, 0.14 + 0.94, 0, gz, (gw + 0.5 - 1.0) / 2 + 0.05);
  // 큰 붉은 초롱 (가운데)
  const lantern = canvasTex('tkchochin', 128, 128, (g, w, h) => {
    g.fillStyle = '#c4231c'; g.fillRect(0, 0, w, h);
    g.fillStyle = 'rgba(0,0,0,0.25)'; for (let y = 0; y < h; y += 10) g.fillRect(0, y, w, 2);
    const r = makeRng('chochin'); glyph(g, 36, 30, 56, r, '#181414');
  });
  add(new THREE.SphereGeometry(0.25, 16, 12), new THREE.MeshStandardMaterial({ map: lantern, emissiveMap: lantern, emissive: 0x401010, roughness: 0.8 }), 0, 0.14 + 0.5, gz).scale.set(1, 1.35, 1);
  add(new THREE.CylinderGeometry(0.17, 0.17, 0.06, 16), dark, 0, 0.14 + 0.86, gz);
  add(new THREE.CylinderGeometry(0.17, 0.17, 0.06, 16), dark, 0, 0.14 + 0.15, gz);
  // 나카미세 길 (참배 길: 돌 포장 + 양쪽 작은 가게 줄)
  add(new THREE.BoxGeometry(0.7, 0.02, D * 0.3), std(0xd8d2c4), 0, 0.15, D * 0.1);
  const shopM = emisMat(shopTex(2), { emissiveIntensity: 0.4 });
  for (const sx of [-1, 1]) { add(sbox(0.4, 0.32, D * 0.26, 0.6, 1.5), shopM, sx * 0.6, 0.14 + 0.16, D * 0.1); add(new THREE.BoxGeometry(0.5, 0.04, D * 0.28), tile, sx * 0.6, 0.14 + 0.34, D * 0.1); }
  // 본당 (북쪽 = -z): 붉은 기둥 몸체 + 크고 가파른 지붕
  const hz = -D * 0.22;
  add(sbox(2.2, 0.75, 1.3, 0.5, 0.5), red, 0.3, 0.14 + 0.37, hz);
  add(new THREE.BoxGeometry(2.0, 0.5, 0.02), white, 0.3, 0.14 + 0.45, hz + 0.66);
  for (let i = 0; i < 6; i++) add(new THREE.CylinderGeometry(0.04, 0.04, 0.75, 6), red, 0.3 - 1.0 + i * 0.4, 0.14 + 0.37, hz + 0.72);
  add(new THREE.BoxGeometry(2.4, 0.08, 1.5), red, 0.3, 0.14 + 0.78, hz);
  jRoof(add, tile, trim, 3.0, 2.0, 0.95, 0.14 + 0.82, 0.3, hz);
  add(new THREE.BoxGeometry(0.06, 0.12, 0.06), gold, 0.3 - 0.5, 0.14 + 1.85, hz); add(new THREE.BoxGeometry(0.06, 0.12, 0.06), gold, 0.3 + 0.5, 0.14 + 1.85, hz);
  // 오층탑 (서쪽 뒤): 층마다 붉은 몸체 + 넓은 처마 지붕, 위로 갈수록 작게, 꼭대기 청동 상륜(구륜)
  const px = -W * 0.36, pz = -D * 0.26;
  add(sbox(0.95, 0.12, 0.95, 0.6, 0.6), stone, px, 0.14 + 0.06, pz);
  let y = 0.26;
  for (let i = 0; i < 5; i++) {
    const s = 0.62 - i * 0.06, rw = 1.25 - i * 0.1, bh = 0.42;
    add(sbox(s, bh, s, 0.5, 0.5), red, px, 0.14 + y + bh / 2, pz);
    add(new THREE.BoxGeometry(s * 0.7, bh * 0.5, s + 0.02), white, px, 0.14 + y + bh * 0.55, pz);
    jRoof(add, tile, trim, rw, rw, 0.22, 0.14 + y + bh, px, pz, 0.02);
    y += bh + 0.27;
  }
  add(new THREE.CylinderGeometry(0.03, 0.04, 1.2, 8), gold, px, 0.14 + y + 0.6, pz);
  for (let i = 0; i < 9; i++) add(new THREE.TorusGeometry(0.07, 0.015, 6, 12).rotateX(Math.PI / 2), gold, px, 0.14 + y + 0.25 + i * 0.09, pz);
  add(new THREE.SphereGeometry(0.06, 8, 6), gold, px, 0.14 + y + 1.25, pz);
  // 향로 + 벚나무
  add(new THREE.CylinderGeometry(0.12, 0.16, 0.2, 10), std(0x3d3a35, { metalness: 0.5 }), 0.3, 0.24, D * -0.02);
  trees(G, [[W * 0.42, D * 0.38], [W * 0.42, -D * 0.4], [-W * 0.44, D * 0.38]], 1.1);
}
// 가부키자: 흰 벽 + 붉은 난간, 정면 둥근 박공(가라하후) 지붕, 큰 채색 깃발, 뒤로 유리 타워
function kabukiza(G, k) {
  const add = adder(G), W = k.w, D = k.d;
  const plaster = ashlarMat('tkkabuki', 0xe9e3d6, { rh: 18, rough: 0.9 }), red = std(0xb8312a, { roughness: 0.6 }), tile = tileMat(1), trim = std(0x2f2c2a);
  // 뒤쪽 유리 오피스 타워 (가부키자 타워)
  const tw = emisMat(midTex(1), { emissiveIntensity: 0.4 });
  add(sbox(W * 0.5, 4.2, D * 0.3, 2, 2.4), tw, W * 0.05, 0.06 + 2.1, -D * 0.32);
  add(new THREE.BoxGeometry(W * 0.52, 0.12, D * 0.32), std(0x6a6d70), W * 0.05, 0.06 + 4.26, -D * 0.32);
  // 극장 본체
  add(sbox(W * 0.9, 1.0, D * 0.55, 0.8, 0.8), plaster, 0, 0.06 + 0.5, D * 0.08);
  add(new THREE.BoxGeometry(W * 0.92, 0.07, D * 0.57), red, 0, 0.06 + 1.0, D * 0.08);
  jRoof(add, tile, trim, W * 0.98, D * 0.66, 0.5, 0.06 + 1.05, 0, D * 0.08);
  // 양옆 망루 지붕
  for (const s of [-1, 1]) { add(sbox(0.8, 0.4, 0.8, 0.8, 0.8), plaster, s * W * 0.36, 0.06 + 1.5, D * 0.12); jRoof(add, tile, trim, 1.1, 1.1, 0.35, 0.06 + 1.7, s * W * 0.36, D * 0.12, 0.02); }
  // 정면 가라하후 (반원통 둥근 박공)
  const kh = new THREE.CylinderGeometry(0.42, 0.42, 1.6, 16, 1, false, -Math.PI / 2, Math.PI); kh.rotateZ(Math.PI / 2); kh.rotateX(Math.PI / 2); kh.rotateY(Math.PI / 2);
  const khm = add(kh, tile, 0, 0.06 + 1.05, D * 0.38); khm.scale.set(1, 0.7, 0.5);
  add(new THREE.BoxGeometry(1.7, 0.06, 0.12), trim, 0, 0.06 + 1.05, D * 0.42);
  // 현관 붉은 기둥 + 흰 등롱 줄
  for (const s of [-1, 1]) add(new THREE.CylinderGeometry(0.05, 0.05, 1.0, 8), red, s * 0.7, 0.06 + 0.5, D * 0.4);
  const lampM = std(0xf6eedc, { emissive: 0x5a4a20, roughness: 0.6 });
  for (let i = 0; i < 7; i++) add(new THREE.CylinderGeometry(0.06, 0.06, 0.12, 10), lampM, -W * 0.38 + i * W * 0.127, 0.06 + 0.88, D * 0.37);
  // 색색 깃발 (노보리)
  const cols = [0xc8102e, 0x1d2b6b, 0xe8b818, 0x0f6b4f, 0xffffff, 0x6a1b9a];
  for (let i = 0; i < 6; i++) {
    const x = -W * 0.42 + i * W * 0.168;
    add(new THREE.CylinderGeometry(0.012, 0.012, 1.0, 4), trim, x, 0.06 + 0.5, D * 0.47);
    add(new THREE.PlaneGeometry(0.14, 0.6), std(cols[i], { side: THREE.DoubleSide, emissive: cols[i], emissiveIntensity: 0.15 }), x + 0.08, 0.06 + 0.68, D * 0.47);
  }
}

// ================= 가장자리 큰 랜드마크 =================
function latticeTex(key, col) {
  return canvasTex('tklat' + key, 128, 128, (g, w, h) => {
    g.clearRect(0, 0, w, h);
    g.strokeStyle = col; g.lineCap = 'square';
    g.lineWidth = 10; g.strokeRect(5, 0, w - 10, h);
    g.lineWidth = 5; g.beginPath(); g.moveTo(5, 0); g.lineTo(w - 5, h / 2); g.lineTo(5, h); g.moveTo(w - 5, 0); g.lineTo(5, h / 2); g.lineTo(w - 5, h); g.stroke();
    g.lineWidth = 4; g.beginPath(); g.moveTo(0, h / 2); g.lineTo(w, h / 2); g.stroke();
  });
}
// 도쿄 타워: 국제 주황(빨강)·흰 띠 격자 철탑. 다리 4개 → 대전망대 → 특별전망대 → 안테나
function tokyotower() {
  const G = new THREE.Group(), add = adder(G);
  const latO = new THREE.MeshStandardMaterial({ map: latticeTex('o', '#ff5a1f'), alphaTest: 0.4, side: THREE.DoubleSide, roughness: 0.6 });
  const latW = new THREE.MeshStandardMaterial({ map: latticeTex('w', '#f4f4f0'), alphaTest: 0.4, side: THREE.DoubleSide, roughness: 0.6 });
  const solidO = std(0xe8501c, { roughness: 0.6 }), solidW = std(0xf0f0ec);
  // 아래 받침 건물 (풋타운)
  const base = emisMat(midTex(2));
  add(sbox(7, 1.2, 5, 2, 2.4), base, 0, 0.6, 1.5);
  // 몸통: 띠 7개, 위로 갈수록 좁아짐 (사각뿔대, 띠마다 색 교대)
  const H = 18, bands = [[0, 6.5], [6.5, 9.5], [9.5, 11.5], [11.5, 13.5], [13.5, 15.5], [15.5, 17], [17, 18]];
  const wAt = (y) => 3.4 * Math.pow(1 - y / (H + 4), 1.6) + 0.25;
  bands.forEach(([y0, y1], i) => {
    const g = new THREE.CylinderGeometry(wAt(y1), wAt(y0), y1 - y0, 4, 1, true); g.rotateY(Math.PI / 4); uvMul(g, 4, Math.max(1, (y1 - y0) / 1.2));
    add(g, i % 2 ? latW : latO, 0, y0 + (y1 - y0) / 2, 0);
    const core = new THREE.CylinderGeometry(wAt(y1) * 0.35, wAt(y0) * 0.35, y1 - y0, 4); core.rotateY(Math.PI / 4);
    add(core, i % 2 ? solidW : solidO, 0, y0 + (y1 - y0) / 2, 0);
  });
  // 다리 사이 아치 (아래 0~4.5)
  for (let i = 0; i < 4; i++) { const t = add(new THREE.TorusGeometry(1.9, 0.12, 6, 18, Math.PI), solidO, 0, 0, 0); t.rotation.y = i * Math.PI / 2; t.position.set(Math.sin(i * Math.PI / 2) * 2.4, 0.3, Math.cos(i * Math.PI / 2) * 2.4); t.scale.y = 1.6; }
  // 대전망대 (y 7) + 특별전망대 (y 12.5)
  const glassM = std(0x7aa4c0, { metalness: 0.5, roughness: 0.2, emissive: 0x1a2a38 });
  add(new THREE.CylinderGeometry(1.75, 1.75, 0.9, 8), glassM, 0, 7.2, 0);
  add(new THREE.CylinderGeometry(1.85, 1.85, 0.12, 8), solidW, 0, 7.7, 0);
  add(new THREE.CylinderGeometry(1.8, 1.8, 0.12, 8), solidW, 0, 6.75, 0);
  add(new THREE.CylinderGeometry(0.85, 0.85, 0.45, 8), glassM, 0, 13.2, 0);
  add(new THREE.CylinderGeometry(0.9, 0.9, 0.08, 8), solidW, 0, 13.45, 0);
  // 안테나
  for (let i = 0; i < 6; i++) add(new THREE.CylinderGeometry(0.1 - i * 0.012, 0.13 - i * 0.012, 0.9, 6), i % 2 ? solidW : solidO, 0, H + 0.45 + i * 0.9, 0);
  add(new THREE.SphereGeometry(0.12, 8, 6), new THREE.MeshBasicMaterial({ color: 0xff3a2e }), 0, H + 5.5, 0).castShadow = false;
  return G;
}
// 도쿄 스카이트리: 흰(연한 하늘빛) 격자, 아래는 삼각형 → 위로 둥글게, 원반 전망대 2개 + 긴 안테나
function skytree() {
  const G = new THREE.Group(), add = adder(G);
  const lat = new THREE.MeshStandardMaterial({ map: latticeTex('s', '#e8f0f6'), alphaTest: 0.4, side: THREE.DoubleSide, roughness: 0.5 });
  const core = std(0xc9d5de, { roughness: 0.5 }), glassM = std(0x86a8c0, { metalness: 0.5, roughness: 0.2, emissive: 0x18283a });
  const H = 30;
  const rAt = (y) => 2.8 * Math.pow(1 - y / (H + 6), 1.1) + 0.35;
  for (let i = 0; i < 10; i++) {
    const y0 = i * H / 10, y1 = (i + 1) * H / 10, seg = i < 3 ? 3 : 12;
    const g = new THREE.CylinderGeometry(rAt(y1), rAt(y0), y1 - y0, seg, 1, true); uvMul(g, seg > 3 ? 6 : 3, 2.5);
    add(g, lat, 0, (y0 + y1) / 2, 0);
    add(new THREE.CylinderGeometry(rAt(y1) * 0.45, rAt(y0) * 0.45, y1 - y0, 10), core, 0, (y0 + y1) / 2, 0);
  }
  // 천망데크 (y 17) + 천망회랑 (y 23)
  add(new THREE.CylinderGeometry(2.1, 1.7, 1.3, 20), glassM, 0, 17.6, 0);
  add(new THREE.CylinderGeometry(2.2, 2.2, 0.15, 20), core, 0, 18.3, 0);
  add(new THREE.CylinderGeometry(1.4, 1.2, 0.9, 20), glassM, 0, 23.4, 0);
  add(new THREE.CylinderGeometry(1.45, 1.45, 0.12, 20), core, 0, 23.9, 0);
  add(new THREE.CylinderGeometry(0.22, 0.4, 7, 8), core, 0, H + 3.5, 0);
  add(new THREE.SphereGeometry(0.14, 8, 6), new THREE.MeshBasicMaterial({ color: 0xff3a2e }), 0, H + 7.1, 0).castShadow = false;
  // 아래 소라마치 상가
  add(sbox(9, 1.6, 4, 2, 2.4), emisMat(midTex(6)), 0, 0.8, 4.5);
  return G;
}
// 도쿄도청 제1본청사: 화강암 격자 외벽, 아래 하나의 몸통 → 위에서 두 탑으로 갈라짐 (꼭대기 45° 돌린 작은 탑)
function tocho() {
  const G = new THREE.Group(), add = adder(G);
  const t = canvasTex('tktocho', 256, 256, (g, w, h) => {
    const rnd = makeRng('tocho');
    g.fillStyle = '#b8b6b0'; g.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 16) for (let x = 0; x < w; x += 16) { g.fillStyle = rnd() < 0.2 ? '#d8c890' : '#3c4650'; g.fillRect(x + 4, y + 4, 9, 9); g.fillStyle = 'rgba(255,255,255,0.15)'; g.fillRect(x + 4, y + 4, 3, 9); }
    g.fillStyle = '#8f8d88'; for (let y = 0; y < h; y += 64) g.fillRect(0, y, w, 4); for (let x = 0; x < w; x += 64) g.fillRect(x, 0, 5, h);
  });
  const m = new THREE.MeshStandardMaterial({ map: t, bumpMap: t, bumpScale: 0.3, roughness: 0.6, emissiveMap: t, emissive: 0x1a1810 });
  add(sbox(8.6, 8, 3.6, 2.2, 2.2), m, 0, 4, 0);
  for (const s of [-1, 1]) {
    add(sbox(3.2, 4.5, 3.2, 2.2, 2.2), m, s * 2.6, 8 + 2.25, 0);
    const top = add(sbox(2.3, 2.6, 2.3, 2.2, 2.2), m, s * 2.6, 12.5 + 1.3, 0); top.rotation.y = Math.PI / 4;
    add(new THREE.BoxGeometry(1.4, 0.2, 1.4), std(0x6f7276, { metalness: 0.4 }), s * 2.6, 15.2, 0).rotation.y = Math.PI / 4;
    add(new THREE.CylinderGeometry(0.03, 0.04, 1.2, 6), std(0xdddddd), s * 2.6, 15.9, 0);
  }
  add(sbox(4, 0.4, 3.7, 2.2, 2.2), m, 0, 8.2, 0);
  // 옆 낮은 의사당 동
  add(sbox(6, 2.6, 4, 2.2, 2.2), m, 0, 1.3, 5.2);
  return G;
}
// 후지산: 멀리 북서쪽의 큰 원뿔 화산 (오목한 비탈 + 들쭉날쭉한 눈 덮인 꼭대기 + 평평한 분화구)
function fuji() {
  const G = new THREE.Group(), add = adder(G);
  const prof = [];
  for (let i = 0; i <= 20; i++) { const t = i / 20, r = 62 * (1 - t) ** 1.7 + 4.5; prof.push(new THREE.Vector2(r, t * 40)); }
  prof.push(new THREE.Vector2(0.1, 39.4));
  const g = new THREE.LatheGeometry(prof, 64);
  // 정점 색: 아래는 푸르스름한 숲 색, 위는 눈 (경계는 골짜기마다 들쭉날쭉)
  const pos = g.attributes.position, col = [], c = new THREE.Color(), rnd = makeRng('fuji');
  const jag = Array.from({ length: 65 }, () => rnd());
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i), a = Math.atan2(z, x), k = Math.floor(((a + Math.PI) / (Math.PI * 2)) * 64);
    const line = 22 + jag[k] * 7 + Math.sin(a * 9) * 2.5;
    if (y > line) c.setRGB(0.95, 0.96, 0.99); else if (y > line - 3) c.setRGB(0.62, 0.66, 0.74); else c.setRGB(0.36 + y * 0.004, 0.43 + y * 0.004, 0.52 + y * 0.003);
    col.push(c.r, c.g, c.b);
  }
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.computeVertexNormals();
  const mtn = add(g, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95 }), 0, -0.5, 0);
  mtn.castShadow = false;
  return G;
}

const shopVariants = [0, 1, 2, 3, 4, 5];
export default {
  build(C, H) { buildTokyo(C, H); },
  field: { shibuya109, tokyostation, sensoji, kabukiza },
  edge: {
    tokyotower: { r: 6.5, build: tokyotower },
    skytree: { r: 8, build: skytree },
    tocho: { r: 7.5, build: tocho },
    fuji: { r: 62, build: fuji }
  },
  gate: { wall: 0x8c8d8f, cap: 0xb4b5b6 }, water: 0x7f9fb3, riverWall: 0x9a9c9e, riverWalk: 0x84878a, riverTrees: true,
  // 다리: 레인보우 브리지풍 흰 현수교 + 파란 트러스(기요스바시풍) + 붉은 아치(가치도키풍)
  bridges: [[-20, 'suspension', 0xf0f0ec], [16, 'truss', 0x3a7fc0], [48, 'arch', 0xc8463a]],
  shop: shopTex, shopVariants, shopTV: 1.5
};
