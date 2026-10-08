// 도시 키트: 베이징 (스테이지 9)
// 배경: 전투 구역 가까이는 회색 벽돌 후퉁 사합원(굽은 회색 기와지붕) · 가끔 붉은 성문 누각 · 버드나무,
//   멀어질수록 콘크리트 아파트 판상동 → 동쪽(CBD)과 강 건너는 유리 초고층
// 랜드마크(안): 천안문, 천단 기년전, 고루, 후퉁 사합원 / (밖): 만리장성(북서 산), CCTV 본사, 중국존, 냐오차오(국가체육장)
import * as THREE from 'three';
import { makeRng } from '../textures.js';
import { emis, towerTex } from './common.js';
import { ashlarMat, sbox, std, adder, canvasTex, uvMul, trees, shade, hex } from '../landmarks_world.js';

// ---------- 그림(텍스처) ----------
// 기와: 세로로 줄지은 둥근 기와(가운데 밝고 가장자리 어두움) + 기와 이음 가로줄. u 방향 = 기와 줄
function tileTex(kind) {
  const base = { grey: 0x5d6064, yellow: 0xd7a531, blue: 0x2f5a9e, green: 0x3f7a55 }[kind];
  return canvasTex('bjtile' + kind, 128, 128, (g, w, h) => {
    const rnd = makeRng('bjtile' + kind);
    g.fillStyle = shade(base, 0.6); g.fillRect(0, 0, w, h);
    for (let x = 0; x < w; x += 8) {
      const k = 0.92 + rnd() * 0.14, gr = g.createLinearGradient(x, 0, x + 8, 0);
      gr.addColorStop(0, shade(base, 0.62 * k)); gr.addColorStop(0.45, shade(base, 1.18 * k)); gr.addColorStop(1, shade(base, 0.7 * k));
      g.fillStyle = gr; g.fillRect(x + 0.5, 0, 7, h);
    }
    for (let y = 0; y < h; y += 16) { g.fillStyle = 'rgba(0,0,0,0.22)'; g.fillRect(0, y, w, 1.5); g.fillStyle = 'rgba(255,255,255,0.10)'; g.fillRect(0, y + 2, w, 1); }
    for (let i = 0; i < 40; i++) { g.fillStyle = kind === 'grey' ? `rgba(30,30,30,${rnd() * 0.12})` : `rgba(255,255,255,${rnd() * 0.12})`; g.fillRect(rnd() * w, rnd() * h, 3, 6 + rnd() * 14); }
  });
}
const tileMats = {};
function tileMat(kind) {
  return tileMats[kind] || (tileMats[kind] = new THREE.MeshStandardMaterial({ map: tileTex(kind), bumpMap: tileTex(kind), bumpScale: 0.6, roughness: kind === 'grey' ? 0.85 : 0.45, metalness: kind === 'grey' ? 0 : 0.15, side: THREE.DoubleSide }));
}
// 붉은 회벽 (궁궐 담·성문): 주홍 칠 + 얼룩 + 아래 회색 굽도리
function redWallMat(key = '') {
  const t = canvasTex('bjred' + key, 256, 128, (g, w, h) => {
    const rnd = makeRng('bjred' + key);
    g.fillStyle = '#9e2f25'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 900; i++) { g.fillStyle = `rgba(${rnd() < 0.5 ? '60,10,5' : '200,90,70'},${rnd() * 0.08})`; g.fillRect(rnd() * w, rnd() * h, 3, 3); }
    for (let i = 0; i < 10; i++) { const x = rnd() * w, gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, 'rgba(50,20,10,0.14)'); gr.addColorStop(1, 'rgba(50,20,10,0)'); g.fillStyle = gr; g.fillRect(x, 0, 3 + rnd() * 9, h * rnd()); }
  });
  return new THREE.MeshStandardMaterial({ map: t, bumpMap: t, bumpScale: 0.3, roughness: 0.9 });
}
// 단청 띠 (처마 밑 두공): 청록 바탕 + 금색 테 + 반복 무늬
function bandMat() {
  const t = canvasTex('bjband', 256, 32, (g, w, h) => {
    g.fillStyle = '#1f5d6e'; g.fillRect(0, 0, w, h);
    for (let x = 0; x < w; x += 32) {
      g.fillStyle = '#3f8f6a'; g.fillRect(x + 2, 6, 28, h - 12);
      g.fillStyle = '#e8c35a'; g.beginPath(); g.ellipse(x + 16, h / 2, 9, 7, 0, 0, Math.PI * 2); g.fill();
      g.fillStyle = '#1b3f8a'; g.beginPath(); g.ellipse(x + 16, h / 2, 5, 4, 0, 0, Math.PI * 2); g.fill();
      g.fillStyle = '#f2efe6'; g.fillRect(x + 1, 6, 1.5, h - 12);
    }
    g.fillStyle = '#d8aa45'; g.fillRect(0, 0, w, 3); g.fillRect(0, h - 3, w, 3);
  });
  return new THREE.MeshStandardMaterial({ map: t, roughness: 0.7 });
}
// 붉은 문살 (전각 앞면): 기둥 사이 격자 창
function latticeMat() {
  const t = canvasTex('bjlattice', 256, 128, (g, w, h) => {
    g.fillStyle = '#8c2a20'; g.fillRect(0, 0, w, h);
    for (let x = 0; x < w; x += 64) {
      g.fillStyle = '#5a1712'; g.fillRect(x + 6, 10, 52, h - 20);
      g.strokeStyle = '#c0483a'; g.lineWidth = 2;
      for (let k = 0; k < 7; k++) { g.beginPath(); g.moveTo(x + 6 + k * 8.6, 10); g.lineTo(x + 6 + k * 8.6, h - 10); g.stroke(); }
      for (let k = 0; k < 12; k++) { g.beginPath(); g.moveTo(x + 6, 10 + k * 9.8); g.lineTo(x + 58, 10 + k * 9.8); g.stroke(); }
      g.fillStyle = '#d8aa45'; g.fillRect(x + 4, 8, 56, 2); g.fillRect(x + 4, h - 10, 56, 2);
    }
  });
  return new THREE.MeshStandardMaterial({ map: t, roughness: 0.75 });
}
// 후퉁 회색 벽돌 벽 (한 장 = 가로 1.2 × 세로 0.6): 벽돌 + 붉은 문살 창(종이 창호), v=0/1 은 붉은 대문
function hutongTex(v) {
  return canvasTex('bjhut' + v, 256, 128, (g, w, h) => {
    const rnd = makeRng('bjhut' + v);
    g.fillStyle = ['#8d8f91', '#7f8285', '#9a9b9b', '#878a8e'][v % 4]; g.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 6) for (let x = (y / 6) % 2 ? -7 : 0; x < w; x += 14) { g.fillStyle = `rgba(${rnd() < 0.5 ? '0,0,0' : '255,255,255'},${0.03 + rnd() * 0.07})`; g.fillRect(x, y, 13, 5); }
    g.fillStyle = 'rgba(30,30,32,0.25)'; for (let y = 5; y < h; y += 6) g.fillRect(0, y, w, 1);
    g.fillStyle = 'rgba(40,40,40,0.25)'; g.fillRect(0, h - 14, w, 14);   // 아랫단 굽도리
    const win = (x, y, ww, hh) => {
      g.fillStyle = '#7a2219'; g.fillRect(x - 4, y - 4, ww + 8, hh + 8);
      g.fillStyle = '#e9dcc0'; g.fillRect(x, y, ww, hh);
      g.strokeStyle = '#8f2c22'; g.lineWidth = 2;
      for (let k = 1; k < 5; k++) { g.beginPath(); g.moveTo(x + ww * k / 5, y); g.lineTo(x + ww * k / 5, y + hh); g.stroke(); }
      for (let k = 1; k < 4; k++) { g.beginPath(); g.moveTo(x, y + hh * k / 4); g.lineTo(x + ww, y + hh * k / 4); g.stroke(); }
    };
    if (v % 2 === 0) { win(36, 34, 70, 48); win(150, 34, 70, 48); }
    else {
      win(26, 34, 60, 48);
      g.fillStyle = '#5f1610'; g.fillRect(140, 22, 76, h - 22);          // 붉은 대문
      g.fillStyle = '#a3291e'; g.fillRect(144, 26, 33, h - 26); g.fillRect(179, 26, 33, h - 26);
      g.fillStyle = '#d8aa45'; for (const x of [168, 188]) { g.beginPath(); g.arc(x, 80, 3, 0, Math.PI * 2); g.fill(); }
      g.fillStyle = '#3a3c3e'; g.fillRect(132, 14, 92, 8);
    }
  });
}
// 버드나무 잎 (늘어진 가지 세로 줄)
function willowTex() {
  return canvasTex('bjwillow', 64, 128, (g, w, h) => {
    const rnd = makeRng('bjwillow');
    g.fillStyle = '#6f9a3c'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 70; i++) { const x = rnd() * w; g.strokeStyle = rnd() < 0.5 ? 'rgba(160,200,90,0.6)' : 'rgba(40,80,30,0.5)'; g.lineWidth = 1 + rnd() * 1.5; g.beginPath(); g.moveTo(x, 0); g.quadraticCurveTo(x + rnd() * 6 - 3, h * 0.5, x + rnd() * 4 - 2, h * (0.6 + rnd() * 0.4)); g.stroke(); }
  });
}
// 흰 대리석 난간 (세로 기둥 + 위 띠)
function balusMat() {
  const t = canvasTex('bjbalus', 128, 32, (g, w, h) => {
    g.fillStyle = '#e9e6de'; g.fillRect(0, 0, w, h);
    g.fillStyle = 'rgba(0,0,0,0.18)'; for (let x = 0; x < w; x += 16) { g.fillRect(x + 6, 8, 6, h - 12); }
    g.fillStyle = '#f7f5ef'; g.fillRect(0, 0, w, 5); for (let x = 0; x < w; x += 16) g.fillRect(x, 0, 4, h);
    g.fillStyle = 'rgba(0,0,0,0.2)'; g.fillRect(0, h - 3, w, 3);
  });
  return new THREE.MeshStandardMaterial({ map: t, roughness: 0.6 });
}

// ---------- 지붕 ----------
// 중국식 굽은 지붕: 용마루에서 가파르게 내려와 처마 쪽이 평평해지고 모서리가 살짝 들림. hip = 우진각(네 면), 아니면 맞배(두 면)
// 로컬: 바닥 중심 (0,0,0), 용마루 = x 방향
function roofGeo(w, d, rh, o = {}) {
  const ov = o.ov ?? 0.12, W = w + 2 * ov, D = d + 2 * ov, hip = !!o.hip, tile = o.tile ?? 0.9, lift = o.lift ?? (hip ? 0.22 : 0.08), p = o.p ?? 1.7;
  const g = new THREE.PlaneGeometry(W, D, o.sx ?? (hip ? 16 : 2), o.sz ?? (hip ? 10 : 6)); g.rotateX(-Math.PI / 2);
  const pos = g.attributes.position, uv = g.attributes.uv, hw = W / 2, hd = D / 2, ridge = hip ? Math.max(0, hw - hd) : hw;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);
    let s = Math.abs(z) / hd; if (hip) s = Math.max(s, (Math.abs(x) - ridge) / hd);
    s = Math.min(1, Math.max(0, s));
    const u = Math.abs(x) / hw, v = Math.abs(z) / hd;
    pos.setY(i, rh * Math.pow(1 - s, p) + rh * lift * (hip ? Math.pow(u * v, 5) * 1.6 : Math.pow(u, 10) * v * v));
    uv.setXY(i, x / tile, z / tile);
  }
  g.computeVertexNormals();
  return g;
}
// 맞배지붕 박공 끝 막이 (양 끝 삼각 굽은 판)
function gableCap(w, d, rh, p = 1.7) {
  const P = [], n = 6, hd = d / 2;
  for (const sx of [-1, 1]) for (let i = 0; i < n; i++) {
    const z0 = -hd + d * i / n, z1 = -hd + d * (i + 1) / n, y = (z) => rh * Math.pow(Math.abs(z) / hd < 1 ? 1 - Math.abs(z) / hd : 0, p);
    P.push(sx * w / 2, 0, z0, sx * w / 2, y(z0) * 0.96, z0, sx * w / 2, y(z1) * 0.96, z1, sx * w / 2, 0, z0, sx * w / 2, y(z1) * 0.96, z1, sx * w / 2, 0, z1);
  }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3));
  const U = []; for (let i = 0; i < P.length; i += 3) U.push(P[i + 2] / 1.2, P[i + 1] / 0.6); g.setAttribute('uv', new THREE.Float32BufferAttribute(U, 2));
  g.computeVertexNormals();
  return g;
}
const place = (g, x, y, z, ry = 0) => { if (ry) g.rotateY(ry); g.translate(x, y, z); return g; };

// 전각 한 채 (로컬 그룹용): 붉은 기둥 + 문살 몸체 + 단청 띠 + 굽은 지붕 (겹처마 가능)
function hall(add, M, x, y, z, w, d, h, roofKind, o = {}) {
  const ncol = o.cols ?? Math.max(4, Math.round(w / 0.5) + 1);
  add(sbox(w * 0.92, h, d * 0.8, 0.9, h), M.lattice, x, y + h / 2, z);
  for (let i = 0; i < ncol; i++) for (const s of [-1, 1]) add(new THREE.CylinderGeometry(0.045 * (o.cr || 1), 0.05 * (o.cr || 1), h, 8), M.pillar, x - w / 2 + 0.06 + (w - 0.12) * i / (ncol - 1), y + h / 2, z + s * (d / 2 - 0.05));
  add(new THREE.BoxGeometry(w + 0.04, 0.1, d + 0.04), M.band, x, y + h + 0.05, z);
  const rh = o.rh ?? d * 0.42, m = tileMat(roofKind);
  let top = y + h + 0.1;
  if (o.double) {
    add(roofGeo(w + 0.3, d + 0.3, rh * 0.45, { hip: true, ov: 0.2, p: 1.4 }), m, x, top, z);
    const w2 = w * 0.8, d2 = d * 0.74, h2 = o.h2 ?? h * 0.45;
    add(sbox(w2, h2, d2, 0.9, h2), M.lattice, x, top + rh * 0.2 + h2 / 2, z);
    add(new THREE.BoxGeometry(w2 + 0.04, 0.08, d2 + 0.04), M.band, x, top + rh * 0.2 + h2 + 0.04, z);
    top += rh * 0.2 + h2 + 0.08;
    add(roofGeo(w2 + 0.2, d2 + 0.2, rh, { hip: true, ov: 0.22 }), m, x, top, z);
  } else add(roofGeo(w, d, rh, { hip: o.hip !== false, ov: 0.2 }), m, x, top, z);
  const rl = o.hip !== false ? Math.max(0.1, (o.double ? w * 0.8 - d * 0.74 : w - d)) : w + 0.3;
  add(new THREE.BoxGeometry(rl + 0.1, 0.07, 0.07), m, x, top + rh + 0.02, z);
  for (const s of [-1, 1]) add(new THREE.BoxGeometry(0.06, 0.16, 0.1), m, x + s * (rl / 2 + 0.05), top + rh + 0.07, z);   // 치미
  return top + rh;
}
const palaceMats = () => ({ lattice: latticeMat(), pillar: std(0x9b2a20, { roughness: 0.6 }), band: bandMat(), red: redWallMat(), marble: ashlarMat('bjmarble', 0xe6e2d8, { rh: 20 }), balus: balusMat(), dark: std(0x1c1614, { roughness: 1 }), gold: std(0xd8aa45, { metalness: 0.8, roughness: 0.3 }) });
// 흰 대리석 난간 한 바퀴 (w×d 사각 테두리)
function railing(add, M, w, d, y, x = 0, z = 0, h = 0.14) {
  add(uvMul(new THREE.BoxGeometry(w, h, 0.05), w / 0.5, 1), M.balus, x, y + h / 2, z + d / 2);
  add(uvMul(new THREE.BoxGeometry(w, h, 0.05), w / 0.5, 1), M.balus, x, y + h / 2, z - d / 2);
  for (const s of [-1, 1]) add(uvMul(new THREE.BoxGeometry(0.05, h, d), d / 0.5, 1), M.balus, x + s * w / 2, y + h / 2, z);
}

// ---------- 사합원 (배경·필드 공용) ----------
// put(material, geometry): 배경은 B.push, 필드는 메시 추가. 남쪽(+z)에 대문, 북쪽 본채, 동서 곁채, 남쪽 문간채
function siheyuan(put, M, cx, cz, W, D, h, rnd, o = {}) {
  const rh = h * 0.62, ov = 0.09;
  const house = (x, z, w, d, ry, v) => {
    put(M.hut[v], place(sbox(w, h, d, 1.2 * h / 0.55, 0.6 * h / 0.55), x, h / 2, z, ry));
    put(M.tile, place(roofGeo(w, d, rh, { ov, tile: 0.5 }), x, h, z, ry));
    put(M.hut[2], place(gableCap(w, d, rh), x, h, z, ry));
    put(M.ridge, place(new THREE.BoxGeometry(w + 2 * ov, 0.06, 0.07), x, h + rh, z, ry));
  };
  const nd = D * 0.28, wd = W * 0.22, sd = D * 0.2;
  house(cx, cz - D / 2 + nd / 2, W * 0.86, nd, 0, 0);                                   // 북쪽 본채
  house(cx - W / 2 + wd / 2, cz + D * 0.04, D * 0.38, wd, Math.PI / 2, 2);            // 서쪽 곁채
  house(cx + W / 2 - wd / 2, cz + D * 0.04, D * 0.38, wd, Math.PI / 2, 2);            // 동쪽 곁채
  house(cx - W * 0.1, cz + D / 2 - sd / 2, W * 0.7, sd, 0, 1);                         // 남쪽 문간채 (대문 그림)
  // 대문 모퉁이 담 + 안뜰 바닥
  put(M.hut[3], place(sbox(W * 0.18, h * 0.8, 0.12, 1.2, 0.6), cx + W * 0.4, h * 0.4, cz + D / 2 - 0.06));
  put(M.court, place(new THREE.PlaneGeometry(W * 0.5, D * 0.4).rotateX(-Math.PI / 2), cx, 0.012, cz + D * 0.03));
  if (o.tree !== false && rnd() < 0.6) (o.trees || []).push([cx + rnd.range(-0.3, 0.3), cz + rnd.range(-0.2, 0.3)]);
}

// 버드나무 (배경 합치기용): 줄기 + 늘어진 원뿔 잎 + 둥근 꼭대기
function willow(B, M, x, z, s) {
  B.push(M.trunk, new THREE.CylinderGeometry(0.05 * s, 0.08 * s, 0.9 * s, 5).translate(x, 0.45 * s, z));
  B.push(M.willow, new THREE.CylinderGeometry(0.5 * s, 0.68 * s, 0.85 * s, 10, 1, true).translate(x, 0.88 * s, z));   // 늘어진 가지 치마
  B.push(M.willow, new THREE.SphereGeometry(0.56 * s, 10, 7).scale(1, 0.62, 1).translate(x, 1.32 * s, z));
}

// ---------- 배경 도시 ----------
function build(C, H) {
  const { free, B, rnd, boxWalls, roofKit, mat } = H, S = C.S, b = S.bounds, R = S.river;
  const M = {
    hut: [0, 1, 2, 3].map((v) => new THREE.MeshStandardMaterial({ map: hutongTex(v), bumpMap: hutongTex(v), bumpScale: 0.3, roughness: 0.92 })),
    tile: tileMat('grey'), ridge: mat(0x3e4144, { roughness: 0.9 }), court: mat(0xb9b4aa, { roughness: 1 }),
    red: redWallMat('bg'), yellow: tileMat('yellow'),
    slab: [0, 1, 2].map((v) => emis(towerTex('bjslab' + v, { wall: ['#d6cdbd', '#c4bfb6', '#cdb9a2'][v], cols: 6, rows: 8, ww: 0.5, wh: 0.5, frame: '#efeadf', lit: 0.16, panel: true }))),
    glass: [0, 1, 2, 3].map((v) => emis(towerTex('bjglass' + v, { wall: ['#3d556b', '#566a78', '#2f4a5e', '#6f7f8a'][v], cols: 4, rows: 10, stripe: true, wh: 0.72, lit: 0.1, sky: '#a9c0d2', frame: '#2a3138' }), { roughness: 0.25, metalness: 0.45 })),
    roof: mat(0x5a5c60, { roughness: 0.95 }), rim: mat(0xb6b2aa), mech: mat(0x7d8084),
    trunk: mat(0x5a4632, { roughness: 1 }), willow: new THREE.MeshStandardMaterial({ map: willowTex(), color: 0xd8ffb0, roughness: 1, side: THREE.DoubleSide })
  };
  const plotM = mat(0xaeaba4), treesAt = [];
  const gateTower = (cx, cz) => {
    // 성문 누각 (덕승문 같은 것): 회색 벽돌 축대 + 붉은 누각 + 회색 겹지붕
    B.push(M.hut[2], sbox(6, 1.6, 3.2, 1.2, 0.6).translate(cx, 0.8, cz));
    B.push(M.red, sbox(4.4, 1.1, 2.2, 2, 1).translate(cx, 2.15, cz));
    B.push(M.tile, roofGeo(5, 2.8, 0.45, { hip: true, ov: 0.25 }).translate(cx, 2.7, cz));
    B.push(M.red, sbox(3.4, 0.6, 1.6, 2, 1).translate(cx, 3.2, cz));
    B.push(M.tile, roofGeo(4, 2.2, 0.8, { hip: true, ov: 0.25 }).translate(cx, 3.5, cz));
  };
  for (let bx = -150; bx < 150; bx += 9) for (let bz = -90; bz < 90; bz += 9) {
    const cx = bx + 4.5, cz = bz + 4.5, dist = Math.hypot(cx, cz);
    if (dist > 150 || !free(cx, cz, 4)) continue;
    const pg = new THREE.PlaneGeometry(7.6, 7.6); pg.rotateX(-Math.PI / 2); pg.translate(cx, 0.006, cz); B.push(plotM, pg);
    const front = cz > b.z1 - 6 && cz < b.z1 + 34 && cx > b.x0 - 30 && cx < b.x1 + 30;
    const out = Math.max(Math.abs(cx) - b.x1, Math.abs(cz) - b.z1, 0);   // 전투 구역 밖으로 떨어진 거리
    const across = R && cz < R.z, cbd = cx > 58 && !across;
    const r = rnd();
    if (!across && !cbd && (front || out < 18 || (out < 40 && r < 0.45))) {
      if (!front && r < 0.035) { gateTower(cx, cz); continue; }
      // 후퉁: 사합원 2×2 + 블록 둘레 골목 버드나무
      for (const ox of [-1.85, 1.85]) for (const oz of [-1.85, 1.85]) siheyuan((m, g) => B.push(m, g), M, cx + ox, cz + oz, 3.5, 3.5, front ? 0.42 : 0.5, rnd, { trees: treesAt });
      if (rnd() < 0.35) willow(B, M, cx + (rnd() < 0.5 ? -4.1 : 4.1), cz + rnd.range(-3, 3), rnd.range(1.1, 1.4));
    } else if (!across && !cbd && out < 70) {
      // 콘크리트 아파트 판상동 (6~14층)
      const n = rnd.int(1, 2);
      for (let k = 0; k < n; k++) {
        const w = 7, d = 2.2, h = rnd.int(6, 14) * 0.32, z = cz + (n > 1 ? (k ? 1.9 : -1.9) : 0);
        boxWalls(B, cx, 0, z, w, h, d, 0, M.slab[rnd.int(0, 2)], M.roof, 1.6, 1.4);
        roofKit(B, cx, z, w, d, h, 0, M.rim, { t: 0.08, rh: 0.14, house: [0.8, 0.4, 0.8], houseM: M.mech });
      }
      for (let k = 0; k < 3; k++) treesAt.push([cx - 3 + k * 3, cz + 3.9]);
    } else {
      // 유리·콘크리트 초고층 (동쪽 CBD 와 강 건너는 더 높게)
      const n = rnd.int(1, 2), tall = cbd ? rnd.range(14, 28) : across ? rnd.range(10, 22) : rnd.range(7, 15);
      for (let k = 0; k < n; k++) {
        const w = rnd.range(3, 4.4), d = rnd.range(3, 4.4), h = tall * rnd.range(0.7, 1);
        const x = cx + (n > 1 ? (k ? 1.8 : -1.8) : rnd.range(-1, 1)), z = cz + rnd.range(-1, 1);
        const m = rnd() < 0.6 ? M.glass[rnd.int(0, 3)] : M.slab[rnd.int(0, 2)];
        boxWalls(B, x, 0, z, w, h * 0.7, d, 0, m, M.roof, 2, 2.4);
        boxWalls(B, x, h * 0.7, z, w * 0.82, h * 0.3, d * 0.82, 0, m, M.roof, 2, 2.4);   // 위 단은 살짝 좁게
        roofKit(B, x, z, w * 0.82, d * 0.82, h, 0, M.rim, { t: 0.08, rh: 0.15, house: [w * 0.4, 0.5, d * 0.4], houseM: M.mech });
      }
    }
  }
  // 강가 버드나무 줄 + 건너편 강변 건물 줄 (사합원 · 붉은 담 누각 섞어서)
  if (R) {
    for (let x = -140; x < 140; x += 4.6) for (const zz of [R.z + R.w / 2 + 1.7, R.z - R.w / 2 - 1.7]) if (free(x, zz + Math.sign(zz - R.z) * 3, 0.5) || Math.abs(x) < 60) willow(B, M, x + rnd.range(-0.4, 0.4), zz, rnd.range(1.1, 1.35));
    for (let x = -150; x < 150; x += 4) {
      const z = R.z - R.w / 2 - 5.2;
      if (!free(x, z, 2)) continue;
      if (rnd() < 0.3) { B.push(M.red, sbox(3.8, 0.9, 2.4, 2, 1).translate(x, 0.45, z)); B.push(M.yellow, roofGeo(3.8, 2.4, 0.5, { hip: true, ov: 0.2 }).translate(x, 0.9, z)); }
      else siheyuan((m, g) => B.push(m, g), M, x, z, 3.8, 3.4, 0.5, rnd, { trees: treesAt });
    }
  }
  for (const [x, z] of treesAt) (C.cityTrees = C.cityTrees || []).push([x, z, rnd.range(0.7, 0.95)]);
}

// ---------- 전투 구역 안 랜드마크 ----------
// 천안문: 붉은 성벽 축대(아치 문 5개) + 흰 난간 + 붉은 기둥 누각 + 노란 겹처마 지붕, 앞에 금수교와 화표
function bjtiananmen(G, k) {
  const add = adder(G), M = palaceMats(), W = k.w, D = k.d, y0 = 0.06;
  const zb = -D * 0.12, pw = W * 0.96, pd = D * 0.62, ph = 1.15;
  add(sbox(pw, ph, pd, 2, 1), M.red, 0, y0 + ph / 2, zb);
  add(new THREE.BoxGeometry(pw + 0.06, 0.2, pd + 0.06), M.marble, 0, y0 + 0.1, zb);
  add(new THREE.BoxGeometry(pw + 0.08, 0.06, pd + 0.08), std(0x5d6064), 0, y0 + ph + 0.03, zb);
  // 아치 문 5개 (가운데가 가장 큼)
  for (const [x, s] of [[0, 1.25], [-0.75, 1], [0.75, 1], [-1.5, 0.85], [1.5, 0.85]]) {
    const sh = new THREE.Shape(), w = 0.26 * s, h = 0.48 * s;
    sh.moveTo(-w, 0); sh.lineTo(-w, h); sh.absarc(0, h, w, Math.PI, 0, true); sh.lineTo(w, 0); sh.closePath();
    add(new THREE.ShapeGeometry(sh, 8), M.dark, x * W / 5.6, y0 + 0.2, zb + pd / 2 + 0.005);
  }
  railing(add, M, pw - 0.1, pd - 0.1, y0 + ph + 0.06, 0, zb);
  const top = hall(add, M, 0, y0 + ph + 0.06, zb, W * 0.7, pd * 0.62, 0.55, 'yellow', { double: true, rh: 0.62, h2: 0.24, cols: 10 });
  // 처마 아래 편액 (짙은 남색 판 + 금 테두리)
  const pl = canvasTex('bjplaque', 128, 48, (g, w, h) => { g.fillStyle = '#d8aa45'; g.fillRect(0, 0, w, h); g.fillStyle = '#1d2f5c'; g.fillRect(5, 5, w - 10, h - 10); g.fillStyle = '#e8c35a'; g.font = 'bold 26px serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('天安门', w / 2, h / 2 + 1); });
  add(new THREE.PlaneGeometry(0.5, 0.19), new THREE.MeshStandardMaterial({ map: pl, roughness: 0.5 }), 0, top - 0.95, zb + pd * 0.62 * 0.37 + 0.12);
  // 금수하 + 흰 다리 5개 + 화표 2개
  const zq = D / 2 - 0.42;
  add(new THREE.BoxGeometry(W * 0.94, 0.03, 0.34), std(0x4f7d78, { roughness: 0.1, metalness: 0.3 }), 0, y0 + 0.015, zq).castShadow = false;
  for (const x of [-1.2, -0.6, 0, 0.6, 1.2]) add(new THREE.BoxGeometry(0.3, 0.06, 0.46), M.marble, x * W / 5.6, y0 + 0.05, zq);
  for (const s of [-1, 1]) {
    add(new THREE.CylinderGeometry(0.06, 0.07, 1.0, 8), M.marble, s * W * 0.42, y0 + 0.5, zq + 0.02);
    add(new THREE.BoxGeometry(0.28, 0.04, 0.08), M.marble, s * W * 0.42, y0 + 0.82, zq + 0.02);
    add(new THREE.CylinderGeometry(0.1, 0.1, 0.06, 10), M.marble, s * W * 0.42, y0 + 1.02, zq + 0.02);
  }
}
// 천단 기년전: 흰 대리석 원형 3단 기단 + 붉은 원통 전각 + 파란 유리기와 3겹 원뿔 지붕 + 금 꼭지
function lathe(R, rh, p = 1.8, n = 32) {
  // 처마 쪽이 평평하고 꼭대기로 갈수록 가파름: 높이 = rh·(1 - r/R)^p
  const P = []; for (let i = 0; i <= 12; i++) { const r = R * (1 - i / 12); P.push(new THREE.Vector2(Math.max(0.001, r), rh * Math.pow(1 - r / R, p))); }
  return uvMul(new THREE.LatheGeometry(P, n), 6, 1);
}
function bjtemplehall(G, k) {
  const add = adder(G), M = palaceMats(), y0 = 0.06, R0 = Math.min(k.w, k.d) / 2 - 0.05;
  let y = y0;
  for (let i = 0; i < 3; i++) {
    const r = R0 - i * 0.42, h = 0.2;
    add(uvMul(new THREE.CylinderGeometry(r, r + 0.04, h, 40), 12, 0.4), M.marble, 0, y + h / 2, 0);
    add(uvMul(new THREE.CylinderGeometry(r - 0.02, r - 0.02, 0.12, 40, 1, true), r * 10, 1), M.balus, 0, y + h + 0.06, 0);
    y += h;
  }
  for (const s of [-1, 1]) add(new THREE.BoxGeometry(0.42, 0.04, 1.3), M.marble, 0, y0 + 0.3, s * (R0 - 0.5)).rotation.x = s * 0.35;   // 남북 계단
  const blue = tileMat('blue'), drum = (r, h) => { add(uvMul(new THREE.CylinderGeometry(r, r, h, 28), 4, 1), M.lattice, 0, y + h / 2, 0); add(uvMul(new THREE.CylinderGeometry(r + 0.03, r + 0.03, 0.09, 28), 6, 1), M.band, 0, y + h + 0.045, 0); y += h + 0.09; };
  const roof = (R, rh) => { add(lathe(R, rh), blue, 0, y, 0); y += rh * 0.3; };
  for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2; add(new THREE.CylinderGeometry(0.035, 0.04, 0.6, 6), M.pillar, Math.cos(a) * 1.08, y + 0.3, Math.sin(a) * 1.08); }
  drum(1.0, 0.6); roof(1.42, 0.42);
  drum(0.82, 0.3); roof(1.16, 0.38);
  drum(0.62, 0.28); roof(0.9, 0.62);
  y += 0.25;
  add(new THREE.SphereGeometry(0.1, 12, 8), M.gold, 0, y + 0.05, 0);
  add(new THREE.ConeGeometry(0.05, 0.22, 8), M.gold, 0, y + 0.22, 0);
  trees(G, [[-k.w * 0.44, k.d * 0.44], [k.w * 0.44, k.d * 0.44], [-k.w * 0.44, -k.d * 0.44], [k.w * 0.44, -k.d * 0.44]], 1.1);
}
// 고루: 붉은 회벽 높은 축대(아치 통로) + 2층 누각 + 회색 기와 겹지붕 (초록 테)
function bjdrum(G, k) {
  const add = adder(G), M = palaceMats(), W = k.w, D = k.d, y0 = 0.06, ph = 1.35;
  add(sbox(W * 0.9, 0.25, D * 0.84, 1, 1), ashlarMat('bjdrumb', 0x8a8780), 0, y0 + 0.125, 0);
  add(sbox(W * 0.86, ph - 0.25, D * 0.8, 2, 1), M.red, 0, y0 + 0.25 + (ph - 0.25) / 2, 0);
  for (const s of [-1, 1]) {
    const sh = new THREE.Shape(); sh.moveTo(-0.28, 0); sh.lineTo(-0.28, 0.55); sh.absarc(0, 0.55, 0.28, Math.PI, 0, true); sh.lineTo(0.28, 0); sh.closePath();
    const m = add(new THREE.ShapeGeometry(sh, 8), M.dark, 0, y0, s * (D * 0.4 + 0.006)); if (s < 0) m.rotation.y = Math.PI;
  }
  add(new THREE.BoxGeometry(W * 0.9, 0.06, D * 0.84), std(0x5d6064), 0, y0 + ph + 0.03, 0);
  const top = hall(add, M, 0, y0 + ph + 0.06, 0, W * 0.66, D * 0.56, 0.6, 'grey', { double: true, rh: 0.6, h2: 0.3, cols: 6 });
  // 초록 유리기와 테두리 (지붕 처마 끝)
  add(new THREE.BoxGeometry(W * 0.66 + 0.7, 0.05, 0.06), tileMat('green'), 0, y0 + ph + 0.78, D * 0.28 + 0.33);
  add(new THREE.BoxGeometry(W * 0.66 + 0.7, 0.05, 0.06), tileMat('green'), 0, y0 + ph + 0.78, -D * 0.28 - 0.33);
  return top;
}
// 후퉁 사합원: 회색 벽돌 집 4채 + 붉은 대문 + 안뜰 나무 + 붉은 등롱
function bjhutong(G, k) {
  const add = adder(G), rnd = makeRng('bjhutfield'), tr = [];
  const M = { hut: [0, 1, 2, 3].map((v) => new THREE.MeshStandardMaterial({ map: hutongTex(v), bumpMap: hutongTex(v), bumpScale: 0.3, roughness: 0.92 })), tile: tileMat('grey'), ridge: std(0x3e4144), court: std(0xb9b4aa, { roughness: 1 }) };
  siheyuan((m, g) => add(g, m), M, 0, 0, k.w * 0.94, k.d * 0.94, 0.85, rnd, { trees: tr, tree: true });
  // 골목 쪽 둘레 담
  add(sbox(0.1, 0.55, k.d * 0.5, 1.2, 0.6), M.hut[3], -k.w * 0.47, 0.06 + 0.275, 0);
  trees(G, [[0, k.d * 0.05], [k.w * 0.15, -k.d * 0.02]], 1.6);
  const lan = new THREE.MeshStandardMaterial({ color: 0xd8261c, emissive: 0x9a1208, emissiveIntensity: 0.8, roughness: 0.5 });
  for (const x of [-0.52, -0.02]) add(new THREE.SphereGeometry(0.08, 10, 8), lan, x - k.w * 0.1 + 0.27, 0.72, k.d * 0.47 + 0.1).scale.y = 1.2;
}

// ---------- 전투 구역 밖 큰 랜드마크 ----------
// 만리장성: 북서쪽 초록 산등성이를 넘어 구불구불 이어지는 성벽 + 망루
function greatwall(L, city) {
  const G = new THREE.Group(), add = adder(G), rnd = makeRng('bjgw');
  const zr = (x) => 6 * Math.sin(x * 0.11) + 2 * Math.sin(x * 0.31 + 1);
  const hgt = (x, z) => {
    const fall = Math.max(0, 1 - (Math.abs(x) / 40) ** 4) * Math.max(0, 1 - (Math.abs(z) / 20) ** 2);
    const ridge = Math.exp(-(((z - zr(x)) / 8) ** 2)) * (7 + 4 * Math.cos(x * 0.16) + 2 * Math.sin(x * 0.41));
    return Math.max(0, ridge * fall + 1.2 * Math.exp(-(((z + 10) / 6) ** 2)) * fall * (1 + Math.sin(x * 0.2)));
  };
  const g = new THREE.PlaneGeometry(84, 42, 70, 36); g.rotateX(-Math.PI / 2);
  const pos = g.attributes.position, col = [];
  for (let i = 0; i < pos.count; i++) { const h = hgt(pos.getX(i), pos.getZ(i)); pos.setY(i, h - 0.15); const c = new THREE.Color().setHSL(0.24 + rnd() * 0.04, 0.35, 0.26 + h * 0.012 + rnd() * 0.03); col.push(c.r, c.g, c.b); }
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3)); g.computeVertexNormals();
  add(g, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, flatShading: true }));
  for (let i = 0; i < 420; i++) {
    const x = rnd.range(-38, 38), z = rnd.range(-19, 19);
    if (Math.abs(z - zr(x)) < 1.6 || hgt(x, z) < 0.3) continue;
    (city.cityTrees = city.cityTrees || []).push([L.x + x, L.z + z, rnd.range(0.8, 1.2), hgt(x, z) - 0.2]);
  }
  const stone = ashlarMat('bjgw', 0xa8977c, { rh: 18 }), walk = std(0x8a7f6c, { roughness: 1 });
  const cren = canvasTex('bjcren', 128, 32, (c, w, h) => { c.clearRect(0, 0, w, h); c.fillStyle = '#9c8c72'; c.fillRect(0, h * 0.45, w, h * 0.55); for (let x = 0; x < w; x += 32) c.fillRect(x, 0, 20, h); c.fillStyle = 'rgba(0,0,0,0.2)'; for (let x = 0; x < w; x += 32) c.fillRect(x + 8, h * 0.55, 4, 6); });
  const crenM = new THREE.MeshStandardMaterial({ map: cren, alphaTest: 0.5, side: THREE.DoubleSide, roughness: 0.95 });
  const towerT = canvasTex('bjgwt', 128, 128, (c, w, h) => { c.fillStyle = '#a5957a'; c.fillRect(0, 0, w, h); const r2 = makeRng('bjgwt'); for (let y = 0; y < h; y += 8) for (let x = (y / 8) % 2 ? -8 : 0; x < w; x += 16) { c.fillStyle = `rgba(0,0,0,${r2() * 0.1})`; c.fillRect(x, y, 15, 7); } c.fillStyle = '#2a2420'; for (const x of [22, 56, 90]) { c.fillRect(x, 54, 16, 26); c.beginPath(); c.arc(x + 8, 54, 8, Math.PI, 0); c.fill(); } for (let x = 0; x < w; x += 24) c.clearRect(x + 14, 0, 10, 10); });
  const towerM = new THREE.MeshStandardMaterial({ map: towerT, alphaTest: 0.5, roughness: 0.95 });
  const P = []; for (let x = -38; x <= 38; x += 1.6) P.push(new THREE.Vector3(x, hgt(x, zr(x)), zr(x)));
  for (let i = 0; i < P.length - 1; i++) {
    const a = P[i], c = P[i + 1], len = a.distanceTo(c) + 0.1, mid = a.clone().add(c).multiplyScalar(0.5);
    const seg = new THREE.Group(); seg.position.copy(mid); seg.lookAt(c); G.add(seg);
    const sa = adder(seg);
    sa(sbox(0.9, 1.1, len, 0.8, 0.8), stone, 0, 0.0, 0);
    sa(new THREE.BoxGeometry(0.8, 0.02, len), walk, 0, 0.56, 0);
    for (const s of [-1, 1]) sa(uvMul(new THREE.PlaneGeometry(len, 0.3), len / 1.2, 1), crenM, s * 0.44, 0.7, 0).rotation.y = Math.PI / 2;
    if (i % 6 === 3) { sa(new THREE.BoxGeometry(1.5, 1.5, 1.5), towerM, 0, 0.8, 0); sa(new THREE.BoxGeometry(1.3, 0.05, 1.3), walk, 0, 1.5, 0); }
  }
  return G;
}
// CCTV 본사: 기운 두 탑이 위아래 ㄱ자 다리로 이어진 고리 모양 ("큰 바지")
function cctv() {
  const G = new THREE.Group(), add = adder(G);
  const t = canvasTex('bjcctv', 256, 256, (g, w, h) => {
    const rnd = makeRng('bjcctv');
    g.fillStyle = '#4b535b'; g.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 8) { g.fillStyle = `rgba(${rnd() < 0.15 ? '220,190,130' : '150,175,195'},${0.25 + rnd() * 0.2})`; g.fillRect(0, y + 1, w, 5); }
    g.strokeStyle = 'rgba(225,228,230,0.85)'; g.lineWidth = 2;
    for (let i = -8; i < 16; i++) { const step = 18 + (i % 3) * 10; g.beginPath(); g.moveTo(i * step, 0); g.lineTo(i * step + h, h); g.stroke(); g.beginPath(); g.moveTo(i * step + h, 0); g.lineTo(i * step, h); g.stroke(); }
  });
  const m = new THREE.MeshStandardMaterial({ map: t, emissiveMap: t, emissive: 0x333333, roughness: 0.3, metalness: 0.5 });
  const box = (w, h, d, x, y, z, rz = 0, rx = 0) => { const o = add(sbox(w, h, d, 3, 3), m, x, y, z); o.rotation.z = rz; o.rotation.x = rx; return o; };
  box(3.2, 15.5, 3.2, -2.8, 7.5, 1.8, -0.07);            // 탑 1 (동쪽으로 기움)
  box(3.2, 15.5, 3.2, 2.8, 7.5, -1.8, 0.07, 0.04);       // 탑 2
  box(8.6, 2.6, 3.2, 0.3, 14.6, 1.8);                    // 위 다리 (동서)
  box(3.2, 2.6, 7.0, 2.4, 14.6, 0);                      // 위 다리 (남북) → 허공에 뜬 모서리
  box(3.4, 2.4, 7.0, -3.2, 1.2, 0);                      // 아래 받침 (남북)
  box(9.6, 2.4, 3.4, 0, 1.2, -1.8);                      // 아래 받침 (동서)
  add(new THREE.BoxGeometry(14, 0.1, 11), std(0x9a9890), 0, 0.05, 0);
  return G;
}
// 중국존: 허리가 잘록한 술잔(尊) 모양 초고층 — 아래·위가 넓고 가운데가 좁음
function chinazun() {
  const G = new THREE.Group(), add = adder(G), H = 30;
  const t = canvasTex('bjzun', 128, 256, (g, w, h) => {
    const rnd = makeRng('bjzun'); g.fillStyle = '#7c8e9c'; g.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 6) { g.fillStyle = `rgba(${rnd() < 0.12 ? '240,215,160' : '190,210,225'},0.45)`; g.fillRect(0, y + 1, w, 4); }
    g.fillStyle = 'rgba(230,236,240,0.9)'; for (let x = 0; x < w; x += 8) g.fillRect(x, 0, 1.5, h);
  });
  const m = new THREE.MeshStandardMaterial({ map: t, emissiveMap: t, emissive: 0x3a3a3a, roughness: 0.2, metalness: 0.55 });
  const g = new THREE.CylinderGeometry(1, 1, H, 16, 24); g.rotateY(Math.PI / 16);
  const pos = g.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const s = pos.getY(i) / H + 0.5, r = 3.1 - 1.15 * Math.sin(Math.PI * Math.min(1, s * 1.05)) ** 1.3 - 0.25 * s, x = pos.getX(i), z = pos.getZ(i);
    const sq = 1 / Math.max(0.78, Math.pow(Math.abs(x) ** 4 + Math.abs(z) ** 4, 0.25)) * 0.9;   // 둥근 네모
    pos.setX(i, x * r * Math.min(1.15, sq)); pos.setZ(i, z * r * Math.min(1.15, sq));
  }
  g.computeVertexNormals(); uvMul(g, 6, 14);
  add(g, m, 0, H / 2, 0);
  add(new THREE.CylinderGeometry(2.3, 2.5, 0.5, 16), std(0xc9ced4, { metalness: 0.6, roughness: 0.3 }), 0, H + 0.25, 0);
  add(new THREE.BoxGeometry(9, 2, 7), emis(towerTex('bjpod', { wall: '#5e6f7c', cols: 6, rows: 2, stripe: true, wh: 0.7, lit: 0.2 }), { roughness: 0.3 }), 0, 1, 2);
  return G;
}
// 냐오차오(국가체육장): 타원 그릇 + 엇갈린 철골 격자 + 안쪽 붉은 벽 + 초록 경기장
function birdsnest() {
  const G = new THREE.Group(), add = adder(G), rx = 6.4, rz = 5.0;
  const steel = std(0xb5b8ba, { metalness: 0.65, roughness: 0.4 }), red = std(0xa8382c, { roughness: 0.7 });
  const bowl = new THREE.CylinderGeometry(1, 1.08, 2.6, 40, 1, true); bowl.scale(rx - 0.5, 1, rz - 0.5);
  add(bowl, new THREE.MeshStandardMaterial({ color: 0xa8382c, roughness: 0.7, side: THREE.DoubleSide }), 0, 1.3, 0);
  const pitch = new THREE.CircleGeometry(1, 32); pitch.rotateX(-Math.PI / 2); pitch.scale(rx * 0.55, 1, rz * 0.55);
  add(pitch, std(0x4f8a3e, { roughness: 1 }), 0, 0.3, 0);
  const tiers = new THREE.CylinderGeometry(1, 0.6, 1.6, 40, 1, true); tiers.scale(rx - 0.6, 1, rz - 0.6);
  add(tiers, new THREE.MeshStandardMaterial({ color: 0xc9473a, roughness: 0.8, side: THREE.DoubleSide }), 0, 1.0, 0);
  const top = (a) => 3.2 + 0.45 * Math.cos(2 * a);   // 말안장 모양 윗선
  const pt = (a, y, k = 1) => new THREE.Vector3(Math.cos(a) * rx * k, y, Math.sin(a) * rz * k);
  const strut = (p, q, r = 0.07) => {
    const len = p.distanceTo(q), o = add(new THREE.BoxGeometry(r * 2, r * 2, len), steel, (p.x + q.x) / 2, (p.y + q.y) / 2, (p.z + q.z) / 2);
    o.lookAt(q.x, q.y, q.z);
  };
  const N = 44;
  for (let i = 0; i < N; i++) for (const s of [-1, 1]) {
    const a0 = i / N * Math.PI * 2, a1 = a0 + s * 0.55;
    strut(pt(a0, 0, 1.06), pt(a1, top(a1), 0.98), 0.08);
    strut(pt(a1, top(a1), 0.98), pt(a1 + s * 0.4, top(a1 + s * 0.4) + 0.05, 0.72), 0.06);   // 지붕 위 안쪽으로
  }
  for (let i = 0; i < N; i++) { const a = i / N * Math.PI * 2, b = (i + 1) / N * Math.PI * 2; strut(pt(a, top(a), 0.98), pt(b, top(b), 0.98), 0.06); }
  const plaza = new THREE.CircleGeometry(1, 40); plaza.rotateX(-Math.PI / 2); plaza.scale(rx + 2.4, 1, rz + 2.4);
  add(plaza, std(0xc9c6bf, { roughness: 1 }), 0, 0.02, 0).castShadow = false;
  return G;
}

export default {
  build,
  field: { bjtiananmen, bjtemplehall, bjdrum, bjhutong },
  edge: { bjwall: { r: 30, build: greatwall }, bjcctv: { r: 8, build: cctv }, bjzun: { r: 6, build: chinazun }, bjnest: { r: 10, build: birdsnest } },
  gate: { wall: 0x9a3a2e, cap: 0x5e6266 }, water: 0x7fa597, riverWall: 0x9a9a94, riverWalk: 0x8b8a84,
  bridges: [[-30, 'stone', 0xe6e2d8], [8, 'arch', 0xc8463a], [44, 'plain', null]]
};
