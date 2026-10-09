// 도시 키트: 부산
// 배경: 흰 판상형 고층 아파트(동 번호), 간판이 빽빽한 중층 상가, 서·남쪽 산비탈 산복도로 작은 집(초록 방수 옥상 + 파란 물탱크)
//   북쪽 수영만 건너 해운대 유리 고층·아파트 스카이라인, 바다 위 고깃배
// 전투 구역 안: 부산타워(용두산공원 언덕 + 연꽃 전망대), 감천문화마을(계단식 파스텔 집), 자갈치시장(갈매기 날개 지붕),
//   부산역(곡면 지붕 유리 역사), 영화의전당(LED 빅루프 + 더블콘)
// 가장자리: 광안대교(2층 현수교 + 색 조명), 해운대 엘시티(유리 초고층 3동), 마린시티(물결 평면 초고층), 부산항 신항(갠트리 크레인 + 컨테이너)
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { makeRng, aptGableTex } from '../textures.js';
import { aptFacadeHD } from '../textures_bldg.js';
import { cv, mk, once, pane, grime } from '../textures_world.js';
import { sbox, std, adder, uvMul, trees } from '../landmarks_world.js';
import { emis, towerTex } from './common.js';

// ---------------- 공용 도우미 ----------------
const PAS = [0xf2a7a0, 0xf6d36b, 0x8fd0c4, 0x9ec3ea, 0xc9a6e0, 0xf4b77a, 0xb8e08f, 0xf3f0e6];   // 감천·산복도로 집 색
const tex = (key, w, h, draw, rep = true) => once('bus' + key, () => { const [c, g] = cv(w, h); draw(g, w, h); const t = mk(c); if (!rep) t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping; return t; });
const V = (x, y, z) => new THREE.Vector3(x, y, z);
const GL = [['#3d5a74', '#a9c9e2'], ['#4c6878', '#c4dae6'], ['#2e4a60', '#90b8d4'], ['#5f7884', '#d2e2ea']];
const glassMat = (i) => emis(towerTex('bus' + i, { wall: GL[i][0], cols: 8, rows: 12, ww: 0.86, wh: 0.78, frame: '#a9bcc8', lit: 0.14, sky: GL[i][1], mull: false, stripe: i === 3 }), { roughness: 0.3, metalness: 0.35 });
const basic = (c) => new THREE.MeshBasicMaterial({ color: c });

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
// 물결 곡면 (위를 보는 판, y = f(x, z))
function surf(W, D, nx, nz, f) {
  const g = new THREE.PlaneGeometry(W, D, nx, nz); g.rotateX(-Math.PI / 2);
  const p = g.attributes.position; for (let i = 0; i < p.count; i++) p.setY(i, f(p.getX(i), p.getZ(i)));
  g.computeVertexNormals(); return g;
}
// 단면이 높이에 따라 변하는 탑 (rf(각, y) = 반지름) + 꼭대기 뚜껑
function loft(Ht, ny, ns, rf) {
  const P = [], U = [], I = [];
  for (let i = 0; i <= ny; i++) { const y = i / ny * Ht; for (let j = 0; j <= ns; j++) { const a = j / ns * Math.PI * 2, r = rf(a, y); P.push(Math.cos(a) * r, y, Math.sin(a) * r); U.push(j / ns * 8, y / 1.2); } }
  P.push(0, Ht, 0); U.push(0, 0);
  for (let i = 0; i < ny; i++) for (let j = 0; j < ns; j++) { const a = i * (ns + 1) + j; I.push(a, a + ns + 1, a + 1, a + 1, a + ns + 1, a + ns + 2); }
  const top = (ny + 1) * (ns + 1); for (let j = 0; j < ns; j++) { const a = ny * (ns + 1) + j; I.push(a, top, a + 1); }
  const g = new THREE.BufferGeometry(); g.setIndex(I); g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(U, 2)); g.computeVertexNormals();
  return g;
}
// 작은 나무 (언덕·공원용, 통에 합침)
function tree(Bk, trunkM, leafM, x, y, z, s) {
  Bk.push(trunkM, new THREE.CylinderGeometry(0.03 * s, 0.045 * s, 0.3 * s, 5).translate(x, y + 0.15 * s, z));
  Bk.push(leafM, new THREE.IcosahedronGeometry(0.22 * s, 0).scale(1, 1.15, 1).translate(x, y + 0.4 * s, z));
}

// ---------------- 텍스처 ----------------
// 한국 상가 건물: 층마다 띠 창 + 색색 가로 간판(한글) + 옆 세로 간판. 간판은 밤에 빛남
const WORDS = ['치킨', '노래방', '약국', '카페', 'PC방', '병원', '학원', '식당', '부동산', '편의점', '돼지국밥', '밀면', '횟집', '안경', '은행', '치과'];
function signHD(v) {
  return once('bussign' + v, () => {
    const W = 256, H = 256, [c, g] = cv(W, H), [ce, e] = cv(W, H), rnd = makeRng('bussign' + v);
    e.fillStyle = '#000'; e.fillRect(0, 0, W, H);
    g.fillStyle = ['#d9d4c8', '#c6cacf', '#e6dccb', '#b7b1a6'][v % 4]; g.fillRect(0, 0, W, H); grime(g, W, H, rnd, 700, 0.05);
    const rows = 4, rh = H / rows, SC = ['#d8262c', '#1f5fb8', '#f2b705', '#1c8a4c', '#e86a1c', '#7a2fa0', '#111a2a'];
    for (let r = 0; r < rows; r++) {
      pane(g, e, 10, r * rh + 26, W - 44, 30, rnd, { frame: '#e4e4e0', lit: 0.3, mull: false });
      g.fillStyle = 'rgba(0,0,0,0.25)'; for (let x = 10; x < W - 34; x += 26) g.fillRect(x, r * rh + 26, 2, 30);
      if (rnd() < 0.75) {
        const sw = 70 + rnd() * 80, sx = 8 + rnd() * (W - 40 - sw), col = SC[Math.floor(rnd() * SC.length)];
        g.fillStyle = col; g.fillRect(sx, r * rh + 4, sw, 19); e.fillStyle = col; e.fillRect(sx, r * rh + 4, sw, 19);
        g.fillStyle = '#fff'; g.font = 'bold 15px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
        const wd = WORDS[Math.floor(rnd() * WORDS.length)]; g.fillText(wd, sx + sw / 2, r * rh + 14); e.fillStyle = '#fff'; e.font = g.font; e.textAlign = 'center'; e.textBaseline = 'middle'; e.fillText(wd, sx + sw / 2, r * rh + 14);
      }
    }
    const vc = SC[v % SC.length]; g.fillStyle = vc; g.fillRect(W - 26, 6, 20, H - 12); e.fillStyle = vc; e.fillRect(W - 26, 6, 20, H - 12);   // 세로 간판
    g.fillStyle = '#fff'; g.font = 'bold 15px sans-serif'; g.textAlign = 'center';
    const wv = WORDS[(v * 5) % WORDS.length]; for (let i = 0; i < wv.length; i++) g.fillText(wv[i], W - 16, 34 + i * 22);
    return { map: mk(c), emissiveMap: mk(ce) };
  });
}
// 작은 집 한 면 (흰 바탕 → 재질 색으로 물듦): 창 두 개 + 문
const houseTex = () => tex('house', 64, 64, (g, w, h) => {
  g.fillStyle = '#fff'; g.fillRect(0, 0, w, h); g.fillStyle = 'rgba(0,0,0,0.08)'; g.fillRect(0, h - 6, w, 6);
  for (const x of [8, 38]) { g.fillStyle = '#f8f8f8'; g.fillRect(x - 2, 12, 22, 20); g.fillStyle = '#4a5866'; g.fillRect(x, 14, 18, 16); g.fillStyle = 'rgba(255,255,255,0.3)'; g.fillRect(x, 14, 18, 3); }
  g.fillStyle = '#5a4a3a'; g.fillRect(24, 40, 14, 22);
});
// 컨테이너 골판 (재질 색으로 물듦)
const contTex = () => tex('cont', 64, 32, (g, w, h) => { g.fillStyle = '#fff'; g.fillRect(0, 0, w, h); for (let x = 0; x < w; x += 4) { g.fillStyle = 'rgba(0,0,0,0.22)'; g.fillRect(x, 0, 1.5, h); } g.fillStyle = 'rgba(0,0,0,0.3)'; g.fillRect(0, 0, w, 2); g.fillRect(0, h - 2, w, 2); });
// 영화의전당 빅루프 아래 LED: 검은 바탕에 색 점이 물결치는 그림
const ledTex = () => tex('led', 256, 128, (g, w, h) => {
  g.fillStyle = '#05060a'; g.fillRect(0, 0, w, h);
  for (let y = 2; y < h; y += 5) for (let x = 2; x < w; x += 5) { const hu = (x / w * 300 + Math.sin(y / 14 + x / 30) * 60 + 200) % 360, l = 45 + 20 * Math.sin(x / 19 - y / 11); g.fillStyle = `hsl(${hu},90%,${l}%)`; g.fillRect(x, y, 3, 3); }
}, false);
// 글자 간판
const signTex = (txt, sub, bg, fg = '#fff') => tex('sg' + txt, 256, 64, (g, w, h) => {
  g.fillStyle = bg; g.fillRect(0, 0, w, h); g.fillStyle = fg; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.font = 'bold 34px sans-serif'; g.fillText(txt, w / 2, sub ? 24 : h / 2); if (sub) { g.font = 'bold 13px sans-serif'; g.fillText(sub, w / 2, 52); }
}, false);
// 마린시티 유리: 층마다 흰 슬래브 줄
const floorTex = (v) => tex('floor' + v, 64, 64, (g, w, h) => {
  const gr = g.createLinearGradient(0, 0, w, 0); gr.addColorStop(0, ['#6f8fa8', '#8aa2b2', '#5d7c94'][v]); gr.addColorStop(0.5, '#c4d6e2'); gr.addColorStop(1, ['#5a7890', '#7890a2', '#4c6a82'][v]); g.fillStyle = gr; g.fillRect(0, 0, w, h);
  g.fillStyle = 'rgba(245,247,248,0.9)'; for (let y = 0; y < h; y += 16) g.fillRect(0, y, w, 3);
  g.fillStyle = 'rgba(40,60,80,0.25)'; for (let x = 0; x < w; x += 8) g.fillRect(x, 0, 1, h);
});

// ---------------- 배경 도시 ----------------
function makeM(mat) {
  return {
    apt: [0, 1, 2].map((v) => emis(aptFacadeHD(v), { roughness: 0.78 })),
    gable: [101, 102, 103, 104, 105, 106, 107, 108, 109, 110].map((n, i) => new THREE.MeshStandardMaterial({ map: aptGableTex(n, i % 3), roughness: 0.8 })),
    sign: [0, 1, 2, 3].map((v) => emis(signHD(v), { emissiveIntensity: 0.45 })),
    glass: [0, 1, 2, 3].map(glassMat),
    house: PAS.map((c) => new THREE.MeshStandardMaterial({ map: houseTex(), color: c, roughness: 0.9 })),
    hroof: [0x5f9e6e, 0x4e9a72, 0x6a9fbe, 0x8c8f93, 0xb8574a].map((c) => mat(c, { roughness: 0.9 })),   // 초록 방수 옥상이 많음
    tank: mat(0x3f86c9, { roughness: 0.5 }), wall: mat(0xa8a49a, { roughness: 1 }),
    roof: mat(0x6a6d70, { roughness: 0.95 }), rim: mat(0xdedbd3, { roughness: 0.85 }), rimDark: mat(0x3a3f44, { roughness: 0.6 }), mech: mat(0xa9adb0),
    plot: mat(0xc4c2bc, { roughness: 1 }), lawn: mat(0x5e9447, { roughness: 1 })
  };
}

function build(C, H) {
  const { free, B, rnd, boxWalls, roofKit, mat } = H, S = C.S, b = S.bounds, R = S.river, M = makeM(mat);
  const T = (C.cityTrees = C.cityTrees || []);
  const zN = R ? R.z - R.w / 2 : -49;
  const put = (m, g) => B.push(m, g);
  let gi = 0;
  // 판상형 아파트 (동 번호 박공)
  const apt = (x, z, w, fl, rot = 0, num = true) => {
    const h = fl * 0.28, d = 1.25;
    boxWalls(B, x, 0, z, w, h, d, rot, M.apt[rnd.int(0, 2)], M.roof, 1.6, 1.12, num ? M.gable[gi++ % M.gable.length] : null);
    roofKit(B, x, z, w, d, h, rot, M.rim, { t: 0.06, rh: 0.12, house: [0.9, 0.42, d * 0.6], hx: w * 0.2, houseM: M.rim });
  };
  // 유리 고층 (해운대·서면)
  const tower = (x, z, w, d, h) => {
    const m = M.glass[rnd.int(0, 3)];
    boxWalls(B, x, 0, z, w, h, d, 0, m, M.roof, 1.6, 1.6);
    roofKit(B, x, z, w, d, h, 0, M.rimDark, { t: 0.08, rh: 0.2, house: [w * 0.45, 0.45, d * 0.45], houseM: M.mech });
  };
  // 간판 상가 (층 0.3)
  const shop = (x, z, w, d, fl, ry = 0) => {
    const h = fl * 0.3;
    boxWalls(B, x, 0, z, w, h, d, ry, M.sign[rnd.int(0, 3)], M.roof, 1.6, 1.2);
    roofKit(B, x, z, w, d, h, ry, M.rim, { t: 0.05, rh: 0.08, house: rnd() < 0.4 ? [0.5, 0.25, 0.4] : null, hx: w * 0.25 });
    if (rnd() < 0.5) put(M.tank, new THREE.CylinderGeometry(0.14, 0.14, 0.22, 8).translate(x - w * 0.2, h + 0.11, z));
  };
  // 산복도로 마을: 돌 축대 위 작은 집 4×4 (초록·파랑 옥상 + 물탱크)
  const village = (cx, cz, y0, low) => {
    if (y0 > 0.02) { boxWalls(B, cx, 0, cz, 7.4, y0, 7.4, 0, M.wall, null, 1, 1); put(M.plot, new THREE.PlaneGeometry(7.4, 7.4).rotateX(-Math.PI / 2).translate(cx, y0 + 0.004, cz)); }
    for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) {
      if (rnd() < 0.12) continue;
      const w = rnd.range(1.1, 1.6), d = rnd.range(1.1, 1.5), h = rnd.int(1, low ? 2 : 3) * 0.3, x = cx - 2.7 + i * 1.8 + rnd.range(-0.1, 0.1), z = cz - 2.7 + j * 1.8 + rnd.range(-0.1, 0.1);
      boxWalls(B, x, y0, z, w, h, d, 0, M.house[rnd.int(0, PAS.length - 1)], M.hroof[rnd.int(0, 4)], 0.8, 0.6);
      roofKit(B, x, z, w, d, y0 + h, 0, M.rim, { t: 0.04, rh: 0.06 });
      if (rnd() < 0.45) put(M.tank, new THREE.CylinderGeometry(0.1, 0.1, 0.16, 8).translate(x + w * 0.25, y0 + h + 0.08, z - d * 0.2));
    }
  };
  for (let bx = -153; bx < 153; bx += 9) for (let bz = -117; bz < 90; bz += 9) {
    const cx = bx + 4.5, cz = bz + 4.5, dist = Math.hypot(cx, cz * 1.1);
    if (dist > 155 || !free(cx, cz, 4)) continue;
    put(M.plot, new THREE.PlaneGeometry(7.4, 7.4).rotateX(-Math.PI / 2).translate(cx, 0.006, cz));
    const front = cz > b.z1 - 6 && cz < b.z1 + 34 && cx > b.x0 - 30 && cx < b.x1 + 30;
    const side = !front && cz > b.z0 - 4 && cz < b.z1 && (cx < b.x0 || cx > b.x1) && Math.min(Math.abs(cx - b.x0), Math.abs(cx - b.x1)) < 16;
    const north = cz < zN, r = rnd();
    if (north) {
      // 해운대 스카이라인: 유리 초고층 + 고층 아파트 (바다에서 멀수록 조금 낮게)
      const near = cz > zN - 30, east = cx > 10;
      if (r < (east ? 0.6 : 0.35)) { const n = rnd.int(1, 3); for (let k = 0; k < n; k++) tower(cx + rnd.range(-1.8, 1.8), cz + rnd.range(-1.8, 1.8), rnd.range(2.2, 3.2), rnd.range(2.2, 3.2), rnd.range(near ? 9 : 6, east && near ? 24 : 15)); }
      else if (r < 0.9) { const fl = rnd.int(near ? 25 : 15, near ? 40 : 28); apt(cx, cz - 1.8, rnd.range(5.2, 6.4), fl, 0, dist < 90); apt(cx, cz + 1.8, rnd.range(5.2, 6.4), fl - rnd.int(0, 6), 0, false); }
      else { put(M.lawn, new THREE.PlaneGeometry(7, 7).rotateX(-Math.PI / 2).translate(cx, 0.01, cz)); for (let k = 0; k < 6; k++) T.push([cx + rnd.range(-3, 3), cz + rnd.range(-3, 3), rnd.range(0.9, 1.3)]); }
      continue;
    }
    const hill = (cx < b.x0 - 2 && cz > b.z0 - 4) || (cz > b.z1 && cx < 10);   // 서쪽·남서쪽 산비탈
    if (hill || (front && r < 0.6)) {
      // 산복도로 마을: 전투 구역에서 멀수록 축대가 높아져 비탈처럼 보임
      const far = Math.max(0, Math.max(b.x0 - cx, cz - b.z1) - 4);
      village(cx, cz, front ? Math.min(0.3, far * 0.015) : Math.min(1.6, far * 0.03), front || side);
      if (rnd() < 0.4) T.push([cx + (rnd() < 0.5 ? -3.8 : 3.8), cz + rnd.range(-3.4, 3.4), rnd.range(0.8, 1.1)]);
      continue;
    }
    if (front) {
      // 카메라 쪽: 낮은 간판 상가 두 줄
      for (const s of [-1, 1]) for (let k = 0; k < 2; k++) shop(cx - 1.8 + k * 3.6, cz + s * 2.1, 3.3, 2.6, rnd.int(1, 2), s > 0 ? 0 : Math.PI);
      continue;
    }
    const hMax = side ? 0.5 : 1;
    if (r < 0.5) {
      // 아파트 단지 (흰 판상형, 동 번호)
      const fl = Math.max(6, Math.round(rnd.int(14, 30) * hMax)), rot = rnd() < 0.85 ? 0 : Math.PI / 2;
      for (let k = 0; k < 2; k++) apt(cx + (rot ? (k ? 1.7 : -1.7) : 0), cz + (rot ? 0 : (k ? 1.8 : -1.8)), rnd.range(5.2, 6.4), fl - k * rnd.int(0, 4), rot, dist < 70);
    } else if (r < 0.85) {
      // 간판 중층 상가 + 가끔 유리 오피스
      if (!side && rnd() < 0.3) tower(cx, cz, rnd.range(2.6, 3.6), rnd.range(2.6, 3.6), rnd.range(5, dist < 70 ? 11 : 15));
      else for (let k = 0; k < 4; k++) shop(cx + (k % 2 ? 1.8 : -1.8), cz + (k > 1 ? 1.8 : -1.8), 3.3, 3.2, Math.max(2, Math.round(rnd.int(3, 8) * hMax)));
    } else {
      put(M.lawn, new THREE.PlaneGeometry(7, 7).rotateX(-Math.PI / 2).translate(cx, 0.01, cz));
      for (let k = 0; k < 6; k++) T.push([cx + rnd.range(-3, 3), cz + rnd.range(-3, 3), rnd.range(0.8, 1.2)]);
    }
  }
  if (R) {
    // 해운대 해변 앞 고층 줄 (바다 건너 스카이라인)
    for (let x = -150; x < 150; x += 7) { const z = zN - 4.6; if (!free(x, z, 1.5)) continue; if (rnd() < 0.5) apt(x, z, 6, rnd.int(28, 45), 0, Math.abs(x) < 60); else tower(x, z - 0.6, rnd.range(2.4, 3.2), 2.4, rnd.range(10, 20)); }
    // 바다 위 고깃배 (파란 배 + 흰 조타실) — 광안대교 상판을 피해 남·북 물길로 오감
    const hullM = std(0x2a64b4, { roughness: 0.6 }), whiteM = std(0xf2f2ee, { roughness: 0.6 }), redM = std(0xc8352c);
    for (let i = 0; i < 4; i++) {
      const f = new THREE.Group(), add = adder(f);
      add(new THREE.BoxGeometry(1.5, 0.26, 0.55), hullM, 0, 0, 0); add(new THREE.BoxGeometry(1.52, 0.06, 0.57), redM, 0, -0.1, 0);
      add(new THREE.BoxGeometry(0.5, 0.36, 0.42), whiteM, -0.25, 0.3, 0); add(new THREE.CylinderGeometry(0.02, 0.02, 0.7, 4), whiteM, 0.1, 0.5, 0);
      const z = R.z + (i % 2 ? -5.5 : 5.5), dir = i % 2 ? -1 : 1;
      f.position.set(-50 + i * 26, 0.08, z); f.rotation.y = dir > 0 ? 0 : Math.PI; C.group.add(f);
      C.anim.push((dt, t) => { f.position.x += dir * 0.9 * dt; if (f.position.x > 50) f.position.x = -54; if (f.position.x < -54) f.position.x = 50; f.rotation.z = Math.sin(t * 1.3 + i) * 0.03; });
    }
  }
}

// =================== 전투 구역 안 랜드마크 ===================
// 부산타워: 용두산공원 초록 언덕 + 흰 원통 기둥(세로 살·고리) + 연꽃잎 전망대 + 안테나
function busantower(G, k) {
  const add = adder(G), Bk = LB(), Y = 0.06, rH = Math.min(k.w, k.d) / 2 - 0.1, hh = 0.95;
  const hillM = std(0x4f8a3c, { roughness: 1 }), white = std(0xeef0f0, { roughness: 0.45, metalness: 0.2 }), grey = std(0xa9b0b6, { metalness: 0.5, roughness: 0.4 });
  const petal = std(0xf6e8ec, { roughness: 0.4, emissive: 0x3a2028 }), glassM = std(0x24323e, { roughness: 0.1, metalness: 0.6, emissive: 0x2a3a4a }), stone = std(0xc9c3b6);
  Bk.push(hillM, new THREE.SphereGeometry(1, 24, 10, 0, Math.PI * 2, 0, Math.PI / 2).scale(rH, hh, rH).translate(0, Y, 0));
  Bk.push(stone, new THREE.CylinderGeometry(0.75, 0.8, 0.12, 20).translate(0, Y + hh - 0.02, 0));                     // 꼭대기 광장
  Bk.push(stone, new THREE.BoxGeometry(0.5, 0.06, rH).rotateX(-0.48).translate(0, Y + hh * 0.5, rH * 0.55));          // 에스컬레이터 길
  const y0 = Y + hh + 0.04, yD = 7.0;
  Bk.push(white, new THREE.CylinderGeometry(0.34, 0.42, 0.5, 16).translate(0, y0 + 0.25, 0));
  Bk.push(white, new THREE.CylinderGeometry(0.15, 0.21, yD - y0, 16).translate(0, (y0 + yD) / 2, 0));
  for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2; beam(Bk, grey, V(Math.cos(a) * 0.22, y0 + 0.5, Math.sin(a) * 0.22), V(Math.cos(a) * 0.17, yD, Math.sin(a) * 0.17), 0.035); }
  for (let y = y0 + 1.2; y < yD; y += 0.9) Bk.push(grey, new THREE.TorusGeometry(0.2, 0.025, 4, 16).rotateX(Math.PI / 2).translate(0, y, 0));
  // 연꽃 전망대: 받침 잔 + 유리 띠 + 꽃잎 12장 + 지붕
  Bk.push(white, new THREE.LatheGeometry([[0.16, 0], [0.4, 0.2], [0.68, 0.42], [0.78, 0.55]].map(([x, y]) => new THREE.Vector2(x, y)), 20).translate(0, yD, 0));
  Bk.push(glassM, new THREE.CylinderGeometry(0.76, 0.78, 0.32, 20).translate(0, yD + 0.71, 0));
  Bk.push(white, new THREE.CylinderGeometry(0.5, 0.78, 0.18, 20).translate(0, yD + 0.96, 0));
  for (let i = 0; i < 12; i++) {
    const a = i / 12 * Math.PI * 2 + (i % 2) * 0.1, rr = i % 2 ? 0.66 : 0.6;
    const g = new THREE.SphereGeometry(0.3, 10, 8).scale(0.45, 1.25, 0.18).rotateX(0.42).rotateY(-a + Math.PI / 2);
    Bk.push(petal, g.translate(Math.cos(a) * rr, yD + 0.7 + (i % 2) * 0.1, Math.sin(a) * rr));
  }
  Bk.push(grey, new THREE.CylinderGeometry(0.04, 0.08, 1.1, 8).translate(0, yD + 1.6, 0));
  // 언덕 숲
  const bark = std(0x5a4632), leaf = std(0x2f6a2c, { flatShading: true, roughness: 1 }), rnd = makeRng('bustw');
  for (let i = 0; i < 16; i++) { const a = i / 16 * Math.PI * 2 + rnd() * 0.3, rr = rH * rnd.range(0.55, 0.85); if (Math.abs(a - Math.PI / 2) < 0.35) continue; const y = Y + hh * Math.sqrt(Math.max(0, 1 - (rr / rH) ** 2)) - 0.05; tree(Bk, bark, leaf, Math.cos(a) * rr, y, Math.sin(a) * rr, rnd.range(0.9, 1.2)); }
  Bk.build(G);
  add(new THREE.SphereGeometry(0.06, 8, 6), basic(0xff3a2e), 0, yD + 2.2, 0).castShadow = false;
}
// 감천문화마을: 남(앞)에서 북으로 오르는 축대 4단 + 빽빽한 파스텔 상자 집 + 색 지붕 + 계단길
function gamcheon(G, k) {
  const Bk = LB(), Y = 0.06, rnd = makeRng('busgc'), W = k.w - 0.2, n = 4, dz = (k.d - 0.2) / n;
  const wallM = std(0xb3ada0, { roughness: 1 }), stair = std(0xd8d2c4), hm = PAS.map((c) => new THREE.MeshStandardMaterial({ map: houseTex(), color: c, roughness: 0.85 }));
  const rf = [0x4f7fae, 0x2f9a8c, 0xe07a4a, 0x5f9e6e, 0xd8b04a, 0x8a6abf].map((c) => std(c, { roughness: 0.8 }));
  for (let i = 0; i < n; i++) {
    const zc = k.d / 2 - 0.1 - (i + 0.5) * dz, yb = Y + i * 0.38;
    if (i) Bk.push(wallM, new THREE.BoxGeometry(W, i * 0.38, dz).translate(0, Y + i * 0.19, zc));
    for (let x = -W / 2 + 0.05; x < W / 2 - 0.3;) {
      const w = Math.min(rnd.range(0.4, 0.7), W / 2 - x), h = rnd.range(0.28, 0.62), d = dz * rnd.range(0.7, 0.88), xc = x + w / 2;
      if (Math.abs(xc - 0.6) < 0.22) { x += 0.4; continue; }   // 계단길 자리
      Bk.push(hm[rnd.int(0, hm.length - 1)], uvMul(new THREE.BoxGeometry(w - 0.03, h, d), 1, 0.8).translate(xc, yb + h / 2, zc + rnd.range(-0.05, 0.05)));
      Bk.push(rf[rnd.int(0, rf.length - 1)], new THREE.BoxGeometry(w + 0.02, 0.05, d + 0.04).translate(xc, yb + h + 0.025, zc));
      if (rnd() < 0.3) Bk.push(rf[0], new THREE.CylinderGeometry(0.05, 0.05, 0.08, 6).translate(xc, yb + h + 0.09, zc));
      x += w;
    }
    Bk.push(stair, new THREE.BoxGeometry(0.36, 0.05, dz).translate(0.6, yb + 0.025, zc));
    if (i < n - 1) Bk.push(stair, new THREE.BoxGeometry(0.36, 0.06, 0.5).rotateX(0.65).translate(0.6, yb + 0.19, zc - dz / 2));
  }
  Bk.build(G);
  trees(G, [[-W / 2 + 0.15, k.d / 2 - 0.25], [W / 2 - 0.15, k.d / 2 - 0.25]], 0.9);
}
// 자갈치시장: 유리 1층 + 바다 쪽으로 치솟는 흰 갈매기 날개 지붕 + 앞 노점 파라솔·고무 대야
function jagalchi(G, k) {
  const add = adder(G), Bk = LB(), Y = 0.06, W = k.w - 0.5, D = k.d - 1.1, zc = -0.35, Hb = 1.15;
  const glassM = emis(towerTex('busjag', { wall: '#46606f', cols: 10, rows: 2, ww: 0.9, wh: 0.8, frame: '#dfe6ea', lit: 0.35, sky: '#a8c6d8', mull: false }), { roughness: 0.25, metalness: 0.4 });
  const roofM = std(0xf6f7f4, { roughness: 0.35, side: THREE.DoubleSide }), finM = std(0x9fbccc, { roughness: 0.15, metalness: 0.4, side: THREE.DoubleSide, emissive: 0x1a2e3a });
  Bk.push(glassM, sbox(W, Hb, D, 1.6, Hb).translate(0, Y + Hb / 2, zc));
  const yr = (x, z) => Y + Hb + 0.05 + 1.15 * Math.pow(Math.abs(Math.sin((x / (W + 0.4) + 0.5) * Math.PI * 3)), 0.75) * (0.45 + 0.55 * (0.5 - z / (D + 0.6)));
  Bk.push(roofM, surf(W + 0.4, D + 0.6, 48, 6, (x, z) => yr(x, z)).translate(0, 0, zc));
  // 지붕 앞·뒤 끝을 막는 유리 (물결 윤곽)
  for (const s of [-1, 1]) {
    const sh = new THREE.Shape(), zz = s * (D / 2);
    sh.moveTo(-W / 2, Y + Hb); for (let i = 0; i <= 36; i++) { const x = -W / 2 + i / 36 * W; sh.lineTo(x, yr(x, zz) - 0.02); } sh.lineTo(W / 2, Y + Hb); sh.closePath();
    Bk.push(finM, new THREE.ShapeGeometry(sh).translate(0, 0, zc + zz));
  }
  Bk.push(std(0x7c8a92), new THREE.BoxGeometry(W + 0.1, 0.08, D + 0.1).translate(0, Y + Hb, zc));
  // 노점: 파라솔 + 대야
  const um = [0xd8262c, 0x1f5fb8, 0xf2b705, 0x1c8a4c].map((c) => std(c, { roughness: 0.7 })), pole = std(0xdddddd), tub = std(0xc8352c, { roughness: 0.6 }), tub2 = std(0x2a6fc0, { roughness: 0.6 });
  const zf = k.d / 2 - 0.4;
  for (let i = 0; i < 8; i++) {
    const x = -W / 2 + 0.5 + i * (W - 1) / 7;
    Bk.push(pole, new THREE.CylinderGeometry(0.015, 0.015, 0.5, 4).translate(x, Y + 0.25, zf));
    Bk.push(um[i % 4], new THREE.ConeGeometry(0.34, 0.14, 8).translate(x, Y + 0.55, zf));
    for (const dx of [-0.15, 0.15]) Bk.push(i % 2 ? tub : tub2, new THREE.CylinderGeometry(0.09, 0.07, 0.07, 10).translate(x + dx, Y + 0.035, zf + 0.12));
  }
  Bk.build(G);
  add(new THREE.PlaneGeometry(2.4, 0.6), new THREE.MeshStandardMaterial({ map: signTex('자갈치시장', 'JAGALCHI MARKET', '#1f4f8a'), emissive: 0xffffff, emissiveMap: signTex('자갈치시장', 'JAGALCHI MARKET', '#1f4f8a'), emissiveIntensity: 0.4 }), 0, Y + Hb - 0.4, zc + D / 2 + 0.02);
}
// 부산역: 긴 유리 역사 + 얕은 곡면 지붕(처마 길게) + 앞 캐노피 기둥 + "부산역" 간판 + 광장 나무
function busanstation(G, k) {
  const add = adder(G), Bk = LB(), Y = 0.06, W = k.w - 0.5, D = 2.3, zc = -0.55, H = 1.6;
  const glassM = emis(towerTex('busstn', { wall: '#3c5668', cols: 12, rows: 3, ww: 0.92, wh: 0.85, frame: '#c9d4da', lit: 0.4, sky: '#b4d0e0', mull: false }), { roughness: 0.2, metalness: 0.45 });
  const roofM = std(0xd5d9dc, { metalness: 0.5, roughness: 0.35, side: THREE.DoubleSide }), steel = std(0x9aa3aa, { metalness: 0.5, roughness: 0.4 }), pave = std(0xbdb8ae, { roughness: 0.95 });
  Bk.push(glassM, sbox(W, H, D, 1.6, H).translate(0, Y + H / 2, zc));
  Bk.push(steel, new THREE.BoxGeometry(W + 0.05, 0.08, D + 0.05).translate(0, Y + H, zc));
  // 곡면 지붕 (원기둥 조각, 축 = x)
  const c = D + 1.2, s = 0.5, Rr = (c * c / 4 + s * s) / (2 * s), th = 2 * Math.asin(c / 2 / Rr);
  const g = new THREE.CylinderGeometry(Rr, Rr, W + 0.5, 32, 1, true, Math.PI / 2 - th / 2, th); g.rotateZ(Math.PI / 2);
  Bk.push(roofM, g.translate(0, Y + H + 0.08 + s - Rr, zc + 0.3));
  for (let i = 0; i <= 8; i++) { const x = -W / 2 + i * W / 8; Bk.push(steel, new THREE.CylinderGeometry(0.035, 0.035, H + 0.1, 6).translate(x, Y + (H + 0.1) / 2, zc + D / 2 + 0.6)); }
  Bk.push(pave, new THREE.BoxGeometry(W, 0.03, 1.3).translate(0, Y + 0.015, zc + D / 2 + 0.65));
  Bk.build(G);
  const st = signTex('부산역', 'BUSAN STATION  KTX', '#0b2f6b');
  add(new THREE.PlaneGeometry(2.0, 0.5), new THREE.MeshStandardMaterial({ map: st, emissive: 0xffffff, emissiveMap: st, emissiveIntensity: 0.5 }), 0, Y + H - 0.32, zc + D / 2 + 0.02);
  trees(G, [-3.3, -2.2, 2.2, 3.3].map((x) => [x, k.d / 2 - 0.2]), 1.0);
}
// 영화의전당: LED 빅루프(물결 판, 아래는 빛나는 LED) + 서쪽 유리 극장 + 동쪽 모래시계 모양 더블콘
function bifc(G, k) {
  const Bk = LB(), Y = 0.06, W = k.w - 0.2, D = k.d - 0.2, yR = Y + 2.9;
  const topM = std(0xc9ced2, { metalness: 0.6, roughness: 0.35 }), lt = ledTex();
  const ledM = new THREE.MeshStandardMaterial({ map: lt, emissiveMap: lt, emissive: 0xffffff, emissiveIntensity: 1.0, roughness: 0.5, side: THREE.BackSide });
  const glassM = emis(towerTex('busbifc', { wall: '#2f4656', cols: 6, rows: 3, ww: 0.9, wh: 0.8, frame: '#9fb0ba', lit: 0.5, sky: '#9fc0d4', mull: false }), { roughness: 0.2, metalness: 0.5 });
  const steel = std(0x8d969c, { metalness: 0.6, roughness: 0.35 }), cone = std(0x6f8aa0, { metalness: 0.6, roughness: 0.2, emissive: 0x1a2a38 });
  const f = (x, z) => yR + 0.22 * Math.sin(x * 1.2 + 0.6) * Math.cos(z * 0.9) + 0.12 * x / W;
  Bk.push(topM, surf(W, D, 30, 16, f));
  Bk.push(ledM, surf(W, D, 30, 16, (x, z) => f(x, z) - 0.1));
  Bk.push(glassM, sbox(2.6, 1.9, 2.6, 1.6, 1.9).translate(-1.5, Y + 0.95, -0.2));
  Bk.push(steel, new THREE.BoxGeometry(2.7, 0.08, 2.7).translate(-1.5, Y + 1.92, -0.2));
  Bk.push(cone, new THREE.LatheGeometry([[0.75, 0], [0.45, 0.6], [0.28, 1.3], [0.45, 2.1], [0.9, 2.95]].map(([x, y]) => new THREE.Vector2(x, y)), 24).translate(1.6, Y, 0.1));
  for (const [x, z] of [[-2.6, 1.6], [-0.3, 1.6], [2.6, -1.6], [-2.6, -1.6]]) Bk.push(steel, new THREE.CylinderGeometry(0.05, 0.05, f(x, z) - Y, 6).translate(x, (f(x, z) + Y) / 2 - 0.05, z));
  for (let i = 0; i < 3; i++) Bk.push(std(0xd6d0c4), new THREE.BoxGeometry(2.0 - i * 0.3, 0.06, 0.5).translate(0.2, Y + 0.03 + i * 0.06, 1.6 - i * 0.12));   // 야외극장 계단
  Bk.push(std(0xb3262c), new THREE.BoxGeometry(0.5, 0.012, 1.4).translate(0.2, Y + 0.01, 1.2));   // 레드카펫
  Bk.build(G);
}

// =================== 가장자리 큰 랜드마크 ===================
// 광안대교: 수영만 위 동서로 놓인 2층 현수교 (흰 주탑 2개 + 주 케이블 + 행어 + 2층 상판 트러스) + 바뀌는 색 조명
function gwangan(L, city) {
  const G = new THREE.Group(), Bk = LB();
  const white = std(0xe4e6e6, { roughness: 0.5, metalness: 0.2 }), deckM = std(0xbfc3c6, { roughness: 0.7 }), road = std(0x4a4d52, { roughness: 0.95 }), pier = std(0xaaa79f, { roughness: 0.95 });
  const cable = std(0xd0d4d8, { metalness: 0.5, roughness: 0.4 }), pad = std(0xa3a49e, { roughness: 1 });
  const ledM = basic(0xff3fb0), led = [0x31d0ff, 0xffc63a, 0x7dff6a, 0xff5a3a].map(basic);
  const X0 = -60, X1 = 53, XT = 16, XA = 44, D1 = 1.05, D2 = 1.85, ZC = 1.25, YT = 8.6;
  // 상판 2층 + 도로 + 층 사이 트러스
  for (const y of [D1, D2]) { Bk.push(deckM, new THREE.BoxGeometry(X1 - X0, 0.2, 2.4).translate((X0 + X1) / 2, y, 0)); Bk.push(road, new THREE.PlaneGeometry(X1 - X0, 2.0).rotateX(-Math.PI / 2).translate((X0 + X1) / 2, y + 0.105, 0)); }
  for (let x = X0; x < X1 - 0.1; x += 2) for (const s of [-1, 1]) { beam(Bk, deckM, V(x, D1, s * 1.15), V(x + 2, D2, s * 1.15), 0.06); Bk.push(deckM, new THREE.BoxGeometry(0.06, D2 - D1, 0.06).translate(x, (D1 + D2) / 2, s * 1.15)); }
  for (let x = X0, i = 0; x < X1 - 0.1; x += 4, i++) for (const s of [-1, 1]) Bk.push(led[i % 4], new THREE.BoxGeometry(3.6, 0.05, 0.05).translate(x + 2, D2 + 0.12, s * 1.22));
  // 교각 (접근 구간) + 주탑 기초
  for (let x = X0 + 3; x < X1; x += 6) if (Math.abs(Math.abs(x) - XT) > 3) Bk.push(pier, new THREE.BoxGeometry(0.5, D1 + 0.4, 1.6).translate(x, (D1 - 0.4) / 2, 0));
  // 주탑: 다리 둘 + 가로보 3개 + 꼭대기 조명
  for (const s of [-1, 1]) {
    const x = s * XT;
    Bk.push(pier, new THREE.BoxGeometry(2.2, 0.6, 3.6).translate(x, 0.1, 0));
    for (const z of [-1.45, 1.45]) Bk.push(white, new THREE.BoxGeometry(0.5, YT, 0.5).translate(x, YT / 2, z));
    for (const y of [D1 - 0.35, 5.2, YT - 0.25]) Bk.push(white, new THREE.BoxGeometry(0.42, 0.45, 3.4).translate(x, y, 0));
    Bk.push(ledM, new THREE.BoxGeometry(0.52, 0.12, 3.42).translate(x, YT + 0.02, 0));
  }
  // 주 케이블 (가운데 경간 + 양 옆 경간) + 행어 + 케이블 조명 구슬
  const cy = (x) => { const a = Math.abs(x); return a <= XT ? 2.3 + (YT - 0.1 - 2.3) * (x / XT) ** 2 : YT - 0.1 - (YT - 0.1 - 2.4) * (a - XT) / (XA - XT) - 1.2 * Math.sin(Math.PI * (a - XT) / (XA - XT)); };
  for (const z of [-ZC, ZC]) {
    for (let x = -XA; x < XA - 0.01; x += 1) beam(Bk, cable, V(x, cy(x), z), V(x + 1, cy(x + 1), z), 0.07);
    for (let x = -XA + 2; x < XA - 1; x += 2) { if (Math.abs(Math.abs(x) - XT) < 0.5) continue; const y = cy(x); if (y > D2 + 0.25) Bk.push(cable, new THREE.BoxGeometry(0.025, y - D2, 0.025).translate(x, (y + D2) / 2, z)); Bk.push(ledM, new THREE.BoxGeometry(0.1, 0.1, 0.1).translate(x, y, z)); }
    for (const s of [-1, 1]) Bk.push(pier, new THREE.BoxGeometry(1.6, 1.4, 1.2).translate(s * XA, 1.6, z * 0.6));   // 케이블 고정대
  }
  // 양 끝: 서쪽 접속 매립지 / 동쪽은 엘시티 매립지에 닿음
  Bk.push(pad, new THREE.BoxGeometry(10, 0.7, 11).translate(X0 - 4, 0, -3.5));
  Bk.push(pier, new THREE.BoxGeometry(2.4, D2 + 0.2, 2.6).translate(X0 - 0.5, (D2 + 0.2) / 2, 0));
  Bk.build(G);
  (city.anim || []).push((dt, t) => ledM.color.setHSL((t * 0.04) % 1, 0.85, 0.6));
  G.traverse((o) => { if (o.isMesh && (o.material === ledM || led.includes(o.material))) o.castShadow = false; });
  return G;
}
// 해운대 엘시티: 매립지 위 해변 + 유리 기단 + 팔각 초고층 3동 (흰 세로 핀 + 경사진 왕관 + 항공등)
function lct(L, city) {
  const G = new THREE.Group(), Bk = LB(), add = adder(G);
  const pad = std(0xb8b6ae, { roughness: 1 }), sand = std(0xe6d3a8, { roughness: 1 }), fin = std(0xf2f4f4, { roughness: 0.4, metalness: 0.3 }), crownM = std(0xcfe0ea, { metalness: 0.6, roughness: 0.2, emissive: 0x24384a });
  const gm = [glassMat(0), glassMat(2), glassMat(1)];
  Bk.push(pad, new THREE.BoxGeometry(18, 0.7, 19).translate(0, 0, 0));
  Bk.push(sand, new THREE.PlaneGeometry(17.6, 3.6).rotateX(-Math.PI / 2).translate(0, 0.36, 7.5));
  Bk.push(gm[1], sbox(13, 1.2, 4.6, 1.6, 1.2).translate(0, 0.35 + 0.6, -2.5));
  for (const [x, z, h, i] of [[-5, -2.2, 27, 0], [0, -3.4, 33, 2], [5, -2.2, 27, 1]]) {
    const r = 1.65, g = new THREE.CylinderGeometry(r, r, h, 8); uvMul(g, 8, h / 3.6); Bk.push(gm[i % 3], g.rotateY(Math.PI / 8).scale(1, 1, 0.82).translate(x, 0.35 + h / 2, z));
    for (let j = 0; j < 4; j++) { const a = j / 4 * Math.PI * 2 + Math.PI / 4; Bk.push(fin, new THREE.BoxGeometry(0.12, h + 0.6, 0.12).translate(x + Math.cos(a) * r * 0.97, 0.35 + (h + 0.6) / 2, z + Math.sin(a) * r * 0.8)); }
    const cg = new THREE.CylinderGeometry(r * 0.55, r * 0.98, 2.2, 8); cg.rotateY(Math.PI / 8); cg.scale(1, 1, 0.82); Bk.push(crownM, cg.rotateX(0.12).translate(x, 0.35 + h + 1.1, z));
    if (i === 2) Bk.push(fin, new THREE.CylinderGeometry(0.05, 0.12, 3.2, 6).translate(x, 0.35 + h + 3.6, z));
    add(new THREE.SphereGeometry(0.12, 8, 6), basic(0xff2a1e), x, 0.35 + h + (i === 2 ? 5.3 : 2.3), z).castShadow = false;
  }
  // 해변 파라솔 몇 개
  const um = [0xd8262c, 0x1f5fb8, 0xf2b705].map((c) => std(c)), pole = std(0xeeeeee);
  for (let i = 0; i < 9; i++) { const x = -7 + i * 1.75, z = 7.8 + (i % 2) * 0.6; Bk.push(pole, new THREE.CylinderGeometry(0.02, 0.02, 0.5, 4).translate(x, 0.6, z)); Bk.push(um[i % 3], new THREE.ConeGeometry(0.4, 0.16, 8).translate(x, 0.88, z)); }
  Bk.build(G);
  const T = (city.cityTrees = city.cityTrees || []);
  for (let i = 0; i < 8; i++) T.push([L.x - 7 + i * 2, L.z + 4.8, 0.9, 0.35]);
  return G;
}
// 마린시티: 물결치는 평면이 비틀리며 오르는 유리 초고층 3동(위브 더 제니스) + 돛 모양 1동
function marinecity(L) {
  const G = new THREE.Group(), Bk = LB();
  const fm = [0, 1, 2].map((v) => new THREE.MeshStandardMaterial({ map: floorTex(v), roughness: 0.25, metalness: 0.35, emissive: 0x141e28 })), base = std(0x9aa0a4);
  Bk.push(base, new THREE.BoxGeometry(16, 0.5, 9).translate(0, 0.25, -0.5));
  for (const [x, z, h, r0, lob, tw, v] of [[-4.2, 1.2, 23, 1.7, 4, 0.9, 0], [0.4, -2.4, 26, 1.8, 4, -0.8, 1], [4.6, 1.4, 20, 1.6, 4, 0.7, 2]]) {
    Bk.push(fm[v], loft(h, 24, 40, (a, y) => r0 * (1 + 0.14 * Math.cos(lob * (a + tw * y / h))) * (1 - 0.18 * (y / h) ** 3)).translate(x, 0.5, z));
    Bk.push(base, new THREE.CylinderGeometry(r0 * 0.5, r0 * 0.7, 0.7, 12).translate(x, 0.5 + h + 0.3, z));
  }
  // 돛 모양 고층 (한쪽이 둥글게 부푼 평면)
  Bk.push(fm[2], loft(17, 12, 32, (a) => 1.3 * (1 + 0.35 * Math.max(0, Math.cos(a)) - 0.25 * Math.max(0, -Math.cos(a)))).scale(1, 1, 0.7).translate(-6.4, 0.5, -3.2));
  Bk.build(G);
  return G;
}
// 부산항 신항: 부두 + 물길 + 컨테이너선 + 빨강·흰 갠트리 크레인 4기(붐이 바다 쪽 서쪽) + 색색 컨테이너 더미
function portcranes() {
  const G = new THREE.Group(), Bk = LB(), rnd = makeRng('buscrane');
  const quay = std(0xa8a69f, { roughness: 1 }), edge = std(0xe8c33a), sea = std(0x2c6f9e, { roughness: 0.2, metalness: 0.2 }), red = std(0xc8352c, { roughness: 0.5 }), white = std(0xeeeeea, { roughness: 0.5 });
  const hull = std(0x23324a, { roughness: 0.6 }), hullR = std(0x8a2a24), bridgeM = std(0xf4f4f0), ct = contTex();
  const cm = [0xc8352c, 0x2a5fb0, 0x2e8b57, 0xe0782a, 0x8c9196, 0xf0f0ea, 0x1f8a8a, 0x6b3fa0].map((c) => new THREE.MeshStandardMaterial({ map: ct, color: c, roughness: 0.75 }));
  Bk.push(quay, new THREE.BoxGeometry(16.5, 0.14, 20).translate(2.75, 0.07, 0));
  Bk.push(sea, new THREE.PlaneGeometry(5.5, 20).rotateX(-Math.PI / 2).translate(-8.25, 0.02, 0));
  Bk.push(edge, new THREE.BoxGeometry(0.12, 0.16, 20).translate(-5.5, 0.08, 0));
  // 컨테이너선
  Bk.push(hull, new THREE.BoxGeometry(3.0, 0.9, 16).translate(-8.4, 0.35, 0)); Bk.push(hullR, new THREE.BoxGeometry(3.02, 0.25, 16.02).translate(-8.4, 0.05, 0));
  Bk.push(hull, new THREE.ConeGeometry(1.5, 2, 4, 1).rotateX(Math.PI / 2).rotateZ(Math.PI / 4).scale(1, 0.42, 1).translate(-8.4, 0.5, 9));
  Bk.push(bridgeM, new THREE.BoxGeometry(2.6, 1.4, 1.2).translate(-8.4, 1.5, -7));
  for (let z = -5.6; z < 7.5; z += 0.7) for (let x = -9.6; x < -7.2; x += 0.6) { const n = rnd.int(1, 4); for (let j = 0; j < n; j++) Bk.push(cm[rnd.int(0, 7)], new THREE.BoxGeometry(0.56, 0.42, 0.66).translate(x + 0.3, 0.8 + 0.21 + j * 0.42, z + 0.35)); }
  // 크레인
  for (const zc of [-7, -2.4, 2.2, 6.8]) {
    for (const x of [-5.2, -2.2]) for (const z of [-1.1, 1.1]) { Bk.push(red, new THREE.BoxGeometry(0.22, 6.2, 0.22).translate(x, 3.1, zc + z)); Bk.push(white, new THREE.BoxGeometry(0.24, 0.5, 0.24).translate(x, 2.2, zc + z)); }
    for (const z of [-1.1, 1.1]) { Bk.push(red, new THREE.BoxGeometry(3.3, 0.24, 0.24).translate(-3.7, 0.5, zc + z)); Bk.push(red, new THREE.BoxGeometry(3.3, 0.3, 0.3).translate(-3.7, 6.0, zc + z)); }
    for (const x of [-5.2, -2.2]) Bk.push(red, new THREE.BoxGeometry(0.26, 0.3, 2.5).translate(x, 6.0, zc));
    for (const z of [-0.6, 0.6]) Bk.push(white, new THREE.BoxGeometry(15, 0.36, 0.22).translate(-5.5, 6.45, zc + z));   // 붐 + 뒤 거더
    for (const z of [-0.6, 0.6]) { beam(Bk, red, V(-5.2, 6.4, zc + z * 1.8), V(-3.9, 9.6, zc + z), 0.18); beam(Bk, red, V(-2.2, 6.4, zc + z * 1.8), V(-3.9, 9.6, zc + z), 0.18); beam(Bk, white, V(-3.9, 9.6, zc + z), V(-12.6, 6.6, zc + z), 0.06); beam(Bk, white, V(-3.9, 9.6, zc + z), V(1.6, 6.6, zc + z), 0.06); }
    Bk.push(red, new THREE.BoxGeometry(0.3, 0.3, 1.5).translate(-3.9, 9.6, zc));
    Bk.push(white, new THREE.BoxGeometry(1.6, 1.0, 1.6).translate(-0.6, 7.1, zc)); Bk.push(red, new THREE.BoxGeometry(1.62, 0.12, 1.62).translate(-0.6, 7.6, zc));
    Bk.push(white, new THREE.BoxGeometry(0.7, 0.4, 0.9).translate(-9 + rnd.range(-1.5, 1.5), 6.05, zc));   // 트롤리·운전실
  }
  // 컨테이너 야적장
  for (let x = 0.5; x < 9.4; x += 1.85) for (let z = -9.2; z < 9; z += 0.76) { if (rnd() < 0.12) continue; const n = rnd.int(1, 4); for (let j = 0; j < n; j++) Bk.push(cm[rnd.int(0, 7)], uvMul(new THREE.BoxGeometry(1.7, 0.5, 0.66), 2, 1).translate(x + 0.85, 0.14 + 0.25 + j * 0.5, z + 0.33)); }
  Bk.build(G);
  return G;
}

export default {
  build,
  field: { busantower, gamcheon, jagalchi, busanstation, bifc },
  edge: { gwangan: { r: 6, build: gwangan }, lct: { r: 11, build: lct }, marinecity: { r: 10, build: marinecity }, portcranes: { r: 15, build: portcranes } },
  gate: { wall: 0x9a9a94, cap: 0xc8c8c0 }, water: 0x2c6f9e, riverWall: 0x8f9498, riverWalk: 0xb9b6ae, riverTrees: false,
  bridges: []
};
