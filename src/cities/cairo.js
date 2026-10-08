// 도시 키트: 카이로 (스테이지 7 · 나일강 방어전)
// 배경: 모래색·베이지 콘크리트 평지붕 중층 아파트(작은 창·나무 덧문·발코니·에어컨), 붉은 벽돌을 채운 콘크리트 뼈대 건물,
//   옛 카이로 석조 가옥(마슈라비야 나무 격자 창), 옥상 물탱크·위성 안테나, 곳곳의 모스크(돔 + 미너렛), 대추야자(야자수)
// 전투 구역 안: 무함마드 알리 모스크, 이집트 박물관, 칸 엘칼릴리 시장, 오벨리스크
// 가장자리: 기자 피라미드 3기 + 스핑크스(서쪽), 카이로 타워(나일강 북쪽 게지라 섬 쪽)
import * as THREE from 'three';
import { makeRng } from '../textures.js';
import { cv, mk, once, pane, grime, bricks } from '../textures_world.js';
import { ashlarMat, sbox, std, adder, canvasTex, uvMul, facadeMat, gold, cornice, columns, fluteMat, shade, pediment } from '../landmarks_world.js';
import { emis } from './common.js';

// =================== 그림(텍스처) ===================
const WALLS = ['#d8c29c', '#cdb28a', '#e2d2b2', '#c4a37c', '#d9b98f'];
// 콘크리트 평지붕 아파트 외벽 (1칸 = 가로 1.6 × 세로 1.2 = 4층 × 4칸): 작은 창, 나무 덧문, 발코니, 에어컨, 먼지 얼룩
function flatTex(v) {
  return once('cai_flat' + v, () => {
    const S = 256, fh = S / 4, cw = S / 4, [c, g] = cv(S, S), [ce, e] = cv(S, S), rnd = makeRng('cai_flat' + v);
    e.fillStyle = '#000'; e.fillRect(0, 0, S, S);
    g.fillStyle = WALLS[v % WALLS.length]; g.fillRect(0, 0, S, S);
    grime(g, S, S, rnd, 1500, 0.06);
    for (let k = 0; k < 14; k++) { const x = rnd() * S, gr = g.createLinearGradient(0, 0, 0, S); gr.addColorStop(0, 'rgba(110,80,40,0.10)'); gr.addColorStop(1, 'rgba(110,80,40,0)'); g.fillStyle = gr; g.fillRect(x, rnd() * S * 0.5, 3 + rnd() * 8, S * rnd()); }
    const shut = ['#6b4a2e', '#4f6b4a', '#3f5f78', '#7a5a3a'][v % 4];
    for (let f = 0; f < 4; f++) {
      g.fillStyle = 'rgba(0,0,0,0.13)'; g.fillRect(0, f * fh + fh - 4, S, 3);
      g.fillStyle = 'rgba(255,255,255,0.18)'; g.fillRect(0, f * fh + fh - 1, S, 2);
      for (let i = 0; i < 4; i++) {
        const x = i * cw + cw * 0.3, w = cw * 0.4, y = f * fh + fh * 0.24, h = fh * 0.48, t = rnd();
        g.fillStyle = 'rgba(0,0,0,0.25)'; g.fillRect(x - 2, y - 2, w + 4, h + 4);
        if (t < 0.32) {
          // 나무 덧문 (가로 살)
          g.fillStyle = shut; g.fillRect(x, y, w, h);
          g.fillStyle = 'rgba(0,0,0,0.3)'; for (let k = y + 3; k < y + h; k += 4) g.fillRect(x, k, w, 1.5);
          g.fillStyle = 'rgba(0,0,0,0.45)'; g.fillRect(x + w / 2 - 1, y, 2, h);
          if (t < 0.12) { g.fillStyle = '#2a2420'; g.fillRect(x + w * 0.5, y, w * 0.5, h); }   // 반쯤 열린 덧문
        } else pane(g, e, x, y, w, h, rnd, { frame: '#efe6d4', lit: 0.18, sky: '#9db3c2' });
        g.fillStyle = '#efe4cc'; g.fillRect(x - 3, y + h, w + 6, 3);   // 창턱
        if (f > 0 && rnd() < 0.3) {
          // 작은 발코니: 콘크리트 판 + 철 난간 + 빨래
          g.fillStyle = '#bfae90'; g.fillRect(x - 8, y + h + 2, w + 16, 4);
          g.strokeStyle = '#2b2b2b'; g.lineWidth = 1.2; g.strokeRect(x - 8, y + h * 0.62, w + 16, h * 0.4);
          for (let k = x - 6; k < x + w + 8; k += 4) { g.beginPath(); g.moveTo(k, y + h * 0.62); g.lineTo(k, y + h + 2); g.stroke(); }
          if (rnd() < 0.5) for (let k = 0; k < 3; k++) { g.fillStyle = ['#c0392b', '#2e86c1', '#f4f4f4', '#f1c40f', '#7d3c98'][Math.floor(rnd() * 5)]; g.fillRect(x - 6 + k * 9, y + h * 0.5, 6, 9); }
        }
        if (rnd() < 0.28) { const ax = rnd() < 0.5 ? x - 13 : x + w + 3; g.fillStyle = '#eceae4'; g.fillRect(ax, y + h * 0.35, 10, 8); g.fillStyle = '#9a9a96'; g.fillRect(ax + 2, y + h * 0.35 + 2, 6, 4); }   // 에어컨
      }
    }
    return { map: mk(c), emissiveMap: mk(ce) };
  });
}
// 붉은 벽돌을 채운 콘크리트 뼈대 (다 짓지 않은 듯한 카이로 외곽 아파트) — 4층 × 4칸
function brickFrameTex(v) {
  return once('cai_brk' + v, () => {
    const S = 256, fh = S / 4, cw = S / 4, [c, g] = cv(S, S), [ce, e] = cv(S, S), rnd = makeRng('cai_brk' + v);
    e.fillStyle = '#000'; e.fillRect(0, 0, S, S);
    bricks(g, S, S, ['#a65a3a', '#b0683f', '#9a5236'][v % 3], rnd);
    grime(g, S, S, rnd, 900, 0.06);
    for (let f = 0; f < 4; f++) for (let i = 0; i < 4; i++) {
      const x = i * cw + cw * 0.32, w = cw * 0.36, y = f * fh + fh * 0.26, h = fh * 0.44;
      if (rnd() < 0.7) pane(g, e, x, y, w, h, rnd, { frame: '#5a4a3a', lit: 0.15, mull: false });
      else { g.fillStyle = '#1e1a18'; g.fillRect(x, y, w, h); }
    }
    // 회색 콘크리트 기둥·보
    g.fillStyle = '#b9b2a6';
    for (let i = 0; i <= 4; i++) g.fillRect(i * cw - 6, 0, 12, S);
    for (let f = 0; f <= 4; f++) g.fillRect(0, f * fh - 7, S, 12);
    g.fillStyle = 'rgba(0,0,0,0.12)'; for (let i = 0; i <= 4; i++) g.fillRect(i * cw + 6, 0, 2, S);
    return { map: mk(c), emissiveMap: mk(ce) };
  });
}
// 옛 카이로 석조 가옥 (3층 × 3칸, 1칸 = 0.4 × 0.35): 마름돌 + 뾰족 아치 창 + 나무 격자창 + 아래층 가게 문
function oldTex(v) {
  return once('cai_old' + v, () => {
    const S = 256, fh = S / 3, cw = S / 3, [c, g] = cv(S, S), [ce, e] = cv(S, S), rnd = makeRng('cai_old' + v);
    e.fillStyle = '#000'; e.fillRect(0, 0, S, S);
    const base = ['#d6be92', '#c9ab7c', '#dcc8a2'][v % 3];
    g.fillStyle = base; g.fillRect(0, 0, S, S);
    g.fillStyle = 'rgba(90,60,30,0.16)'; for (let y = 0; y < S; y += 14) g.fillRect(0, y, S, 1.5);
    for (let y = 0; y < S; y += 14) for (let x = (y / 14) % 2 ? 18 : 0; x < S; x += 36) g.fillRect(x, y, 1.5, 14);
    grime(g, S, S, rnd, 1400, 0.07);
    for (let f = 0; f < 3; f++) for (let i = 0; i < 3; i++) {
      const x = i * cw + cw * 0.28, w = cw * 0.44, y = f * fh + fh * 0.2, h = fh * 0.6;
      if (f === 2) {
        // 아래층: 나무 가게 문 (뾰족 아치)
        g.fillStyle = '#5a3a22'; g.beginPath(); g.moveTo(x, y + h + fh * 0.2); g.lineTo(x, y + h * 0.3); g.quadraticCurveTo(x + w / 2, y - h * 0.15, x + w, y + h * 0.3); g.lineTo(x + w, y + h + fh * 0.2); g.fill();
        g.fillStyle = 'rgba(0,0,0,0.3)'; for (let k = x + 4; k < x + w; k += 6) g.fillRect(k, y + h * 0.3, 1.5, h);
        if (rnd() < 0.5) { g.fillStyle = '#e8b04a'; g.fillRect(x + 3, y + h * 0.55, w - 6, h * 0.4); e.fillStyle = '#7a5418'; e.fillRect(x + 3, y + h * 0.55, w - 6, h * 0.4); }
        continue;
      }
      if (f === 0 && i === 1) {
        // 위층 가운데: 마슈라비야 나무 격자
        g.fillStyle = '#4a2e1a'; g.fillRect(x - 6, y - 4, w + 12, h + 10);
        g.fillStyle = '#8a5a34'; for (let yy = y; yy < y + h + 4; yy += 5) for (let xx = x - 4; xx < x + w + 6; xx += 5) { g.beginPath(); g.arc(xx, yy, 1.6, 0, 7); g.fill(); }
        g.fillStyle = '#3a2414'; g.fillRect(x - 8, y - 8, w + 16, 4); g.fillRect(x - 8, y + h + 6, w + 16, 4);
        continue;
      }
      g.fillStyle = '#efe2c4'; g.beginPath(); g.moveTo(x - 3, y + h + 3); g.lineTo(x - 3, y + h * 0.3); g.quadraticCurveTo(x + w / 2, y - h * 0.25, x + w + 3, y + h * 0.3); g.lineTo(x + w + 3, y + h + 3); g.fill();
      g.fillStyle = rnd() < 0.2 ? '#e8c47a' : '#2f2a26'; g.beginPath(); g.moveTo(x, y + h); g.lineTo(x, y + h * 0.3); g.quadraticCurveTo(x + w / 2, y - h * 0.15, x + w, y + h * 0.3); g.lineTo(x + w, y + h); g.fill();
      g.fillStyle = '#6b4a2e'; for (let k = x + 3; k < x + w; k += 5) g.fillRect(k, y + h * 0.25, 1.5, h * 0.75);   // 나무 창살
    }
    return { map: mk(c), emissiveMap: mk(ce) };
  });
}
// 마슈라비야 (돌출 나무 격자 창 상자)
function mashMat() {
  return once('cai_mashM', () => {
    const t = canvasTex('cai_mash', 128, 128, (g, w, h) => {
      g.fillStyle = '#3e2614'; g.fillRect(0, 0, w, h);
      g.fillStyle = '#9a6a3e'; for (let y = 6; y < h - 4; y += 6) for (let x = 6; x < w - 4; x += 6) { g.beginPath(); g.arc(x, y, 2.1, 0, 7); g.fill(); }
      g.strokeStyle = '#7a4e2a'; g.lineWidth = 1; for (let y = 6; y < h; y += 6) { g.beginPath(); g.moveTo(0, y); g.lineTo(w, y); g.stroke(); }
      g.fillStyle = '#2a180c'; g.fillRect(0, 0, w, 6); g.fillRect(0, h - 6, w, 6); g.fillRect(0, 0, 5, h); g.fillRect(w - 5, 0, 5, h);
    });
    return new THREE.MeshStandardMaterial({ map: t, bumpMap: t, bumpScale: 0.8, roughness: 0.9 });
  });
}
// 맘루크 줄무늬 돌 (아블라크: 크림색·붉은 황토색 번갈아)
function ablaqMat() {
  return once('cai_ablaqM', () => {
    const t = canvasTex('cai_ablaq', 128, 128, (g, w, h) => {
      const rnd = makeRng('cai_ablaq');
      for (let y = 0, r = 0; y < h; y += 16, r++) {
        g.fillStyle = r % 2 ? '#b0623e' : '#e6d6b6'; g.fillRect(0, y, w, 16);
        for (let x = (r % 2) * 14; x < w; x += 28) { g.fillStyle = 'rgba(0,0,0,0.16)'; g.fillRect(x, y, 1.5, 16); }
        g.fillStyle = 'rgba(0,0,0,0.18)'; g.fillRect(0, y + 15, w, 1);
        for (let k = 0; k < 40; k++) { g.fillStyle = `rgba(0,0,0,${rnd() * 0.07})`; g.fillRect(rnd() * w, y + rnd() * 16, 2, 2); }
      }
    });
    return new THREE.MeshStandardMaterial({ map: t, bumpMap: t, bumpScale: 0.4, roughness: 0.88 });
  });
}
// 돔: 세로 갈빗대 + 지그재그 새김 (맘루크 석조 돔) / 납빛 (무함마드 알리)
function domeMat(kind) {
  return once('cai_domeM' + kind, () => {
    const lead = kind === 'lead', base = lead ? 0x7f878e : 0xd9c7a2;
    const t = canvasTex('cai_dome' + kind, 256, 128, (g, w, h) => {
      g.fillStyle = hexs(base); g.fillRect(0, 0, w, h);
      for (let i = 0; i < 32; i++) { const x = i * w / 32; g.fillStyle = 'rgba(0,0,0,0.18)'; g.fillRect(x, 0, 1.5, h); g.fillStyle = 'rgba(255,255,255,0.16)'; g.fillRect(x + 2, 0, 1.5, h); }
      if (!lead) { g.strokeStyle = 'rgba(90,60,30,0.35)'; g.lineWidth = 2; for (let y = 14; y < h * 0.85; y += 14) { g.beginPath(); for (let x = 0; x <= w; x += 8) g.lineTo(x, y + ((x / 8) % 2 ? 5 : 0)); g.stroke(); } }
      else { g.fillStyle = 'rgba(0,0,0,0.1)'; for (let y = 0; y < h; y += 10) g.fillRect(0, y, w, 1); }
    });
    return new THREE.MeshStandardMaterial({ map: t, bumpMap: t, bumpScale: 0.5, roughness: lead ? 0.5 : 0.85, metalness: lead ? 0.35 : 0 });
  });
}
const hexs = (c) => '#' + c.toString(16).padStart(6, '0');
// 평지붕 (얼룩진 콘크리트 + 방수 자국)
function roofTex() {
  return canvasTex('cai_roof', 128, 128, (g, w, h) => {
    const rnd = makeRng('cai_roof');
    g.fillStyle = '#bba98a'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 500; i++) { g.fillStyle = `rgba(${rnd() < 0.5 ? '0,0,0' : '255,250,230'},${rnd() * 0.08})`; g.fillRect(rnd() * w, rnd() * h, 3, 3); }
    for (let i = 0; i < 4; i++) { g.fillStyle = 'rgba(80,60,40,0.12)'; g.beginPath(); g.ellipse(rnd() * w, rnd() * h, 10 + rnd() * 20, 6 + rnd() * 12, rnd() * 3, 0, 7); g.fill(); }
    g.strokeStyle = 'rgba(0,0,0,0.12)'; g.strokeRect(1, 1, w - 2, h - 2);
  });
}
// 야자수 줄기 (마름모 껍질) / 잎 (잎줄)
function palmMats() {
  return once('cai_palmM', () => {
    const bark = canvasTex('cai_bark', 64, 64, (g, w, h) => {
      g.fillStyle = '#7a5e3e'; g.fillRect(0, 0, w, h);
      for (let y = 0; y < h; y += 8) for (let x = (y / 8) % 2 ? 4 : 0; x < w; x += 8) { g.fillStyle = '#5a4128'; g.beginPath(); g.moveTo(x, y + 4); g.lineTo(x + 4, y); g.lineTo(x + 8, y + 4); g.lineTo(x + 4, y + 8); g.fill(); g.fillStyle = '#8f7250'; g.fillRect(x + 3, y + 1, 2, 2); }
    });
    const leaf = canvasTex('cai_leaf', 128, 32, (g, w, h) => {
      g.fillStyle = '#3f6a2a'; g.fillRect(0, 0, w, h);
      g.strokeStyle = '#5f8d3a'; g.lineWidth = 2; for (let x = 0; x < w; x += 5) { g.beginPath(); g.moveTo(x, h / 2); g.lineTo(x + 6, 0); g.moveTo(x, h / 2); g.lineTo(x + 6, h); g.stroke(); }
      g.fillStyle = '#6b5a2a'; g.fillRect(0, h / 2 - 1, w, 2);
    });
    return {
      trunk: new THREE.MeshStandardMaterial({ map: bark, bumpMap: bark, bumpScale: 1, roughness: 1 }),
      frond: new THREE.MeshStandardMaterial({ map: leaf, roughness: 0.9, side: THREE.DoubleSide }),
      dates: new THREE.MeshStandardMaterial({ color: 0xa8641e, roughness: 0.8 })
    };
  });
}
// 야자수 한 그루 조각들: [[재질키, 지오메트리], ...] (배경은 B 로 합치고, 랜드마크는 메시로)
function palmParts(x, y, z, s, rnd) {
  const out = [], h = s * rnd.range(1.7, 2.5), lean = rnd.range(-0.13, 0.13), la = rnd() * 6.283;
  const tr = new THREE.CylinderGeometry(0.045 * s, 0.075 * s, h, 6, 1); uvMul(tr, 1, h / 0.25);
  tr.translate(0, h / 2, 0); tr.rotateZ(lean); tr.rotateY(la); tr.translate(x, y, z); out.push(['trunk', tr]);
  const tx = x - h * Math.sin(lean) * Math.cos(la), ty = y + h * Math.cos(lean), tz = z + h * Math.sin(lean) * Math.sin(la);
  const n = 9;
  for (let k = 0; k < n; k++) {
    const a = k / n * 6.283 + rnd() * 0.4, l1 = 0.36 * s, l2 = 0.48 * s, p1 = rnd.range(0.3, 0.65), p2 = -rnd.range(0.45, 0.95);
    const g1 = new THREE.BoxGeometry(l1, 0.012 * s, 0.17 * s); g1.translate(l1 / 2, 0, 0); g1.rotateZ(p1); g1.rotateY(a); g1.translate(tx, ty, tz);
    const g2 = new THREE.BoxGeometry(l2, 0.012 * s, 0.15 * s); g2.translate(l2 / 2, 0, 0); g2.scale(1, 1, 1); g2.rotateZ(p2); g2.translate(l1 * Math.cos(p1), l1 * Math.sin(p1), 0); g2.rotateY(a); g2.translate(tx, ty, tz);
    out.push(['frond', g1], ['frond', g2]);
  }
  const d = new THREE.SphereGeometry(0.08 * s, 6, 4); d.translate(tx, ty - 0.06 * s, tz); out.push(['dates', d]);
  return out;
}
function palmsInto(G, pts, s0 = 1, seed = 'p') {
  const P = palmMats(), rnd = makeRng('cai_palm' + seed);
  for (const [x, z, s = s0] of pts) for (const [k, g] of palmParts(x, 0.06, z, s, rnd)) { const m = new THREE.Mesh(g, P[k]); m.castShadow = true; G.add(m); }
}

// =================== 배경 도시 ===================
function build(C, H) {
  const { free, B, rnd, boxWalls, roofKit, mat } = H, S = C.S, b = S.bounds, R = S.river;
  const P = palmMats();
  const roofT = roofTex();
  const M = {
    flat: [0, 1, 2, 3, 4].map((v) => emis(flatTex(v), { emissiveIntensity: 0.3, roughness: 0.9 })),
    brick: [0, 1, 2].map((v) => emis(brickFrameTex(v), { emissiveIntensity: 0.3, roughness: 0.9 })),
    old: [0, 1, 2].map((v) => emis(oldTex(v), { emissiveIntensity: 0.3, roughness: 0.92 })),
    mash: mashMat(), ablaq: ablaqMat(), dome: domeMat('stone'), lead: domeMat('lead'),
    roof: new THREE.MeshStandardMaterial({ map: roofT, roughness: 0.95 }),
    rim: mat(0xe2d3b4, { roughness: 0.9 }), stone: mat(0xd8c49c, { roughness: 0.9 }),
    tankB: mat(0x2a2b2d, { roughness: 0.6 }), tankW: mat(0xe8e6e0, { roughness: 0.6 }), tankBl: mat(0x2f6fa8, { roughness: 0.6 }),
    dish: mat(0xdedcd6, { roughness: 0.45, metalness: 0.3, side: THREE.DoubleSide }), metal: mat(0x55585c, { metalness: 0.5, roughness: 0.5 }),
    goldM: mat(0xd8aa45, { metalness: 0.8, roughness: 0.3 }), awn: [0xc0392b, 0x2e86c1, 0x27ae60, 0xe1a32a].map((c) => mat(c, { roughness: 0.8, side: THREE.DoubleSide }))
  };
  const plotM = mat(0xcbb48c, { roughness: 1 });
  const palm = (x, z, s) => { for (const [k, g] of palmParts(x, 0, z, s, rnd)) B.push(P[k], g); };
  // 강변 가로수(buildRiver 가 넣은 둥근 나무) → 야자수로 바꿈
  const riverT = C.cityTrees || []; C.cityTrees = [];
  for (const [x, z] of riverT) if (rnd() < 0.75) palm(x + rnd.range(-0.6, 0.6), z, rnd.range(0.8, 1.05));
  // 옥상: 물탱크 + 위성 안테나 + 계단실
  const rooftop = (x, z, w, d, h) => {
    if (rnd() < 0.6) { const hw = Math.min(0.8, w * 0.3), hd = Math.min(0.7, d * 0.3), g = sbox(hw, 0.3, hd, 1.6, 1.2); g.translate(x + rnd.range(-w * 0.2, w * 0.2), h + 0.15, z + rnd.range(-d * 0.2, d * 0.2)); B.push(M.flat[rnd.int(0, 4)], g); }
    const nt = rnd.int(1, 3);
    for (let k = 0; k < nt; k++) {
      const tm = [M.tankB, M.tankB, M.tankW, M.tankBl][rnd.int(0, 3)], g = new THREE.CylinderGeometry(0.12, 0.12, 0.24, 8);
      g.translate(x + rnd.range(-w * 0.35, w * 0.35), h + 0.2, z + rnd.range(-d * 0.35, d * 0.35)); B.push(tm, g);
    }
    const nd = rnd.int(1, 4);
    for (let k = 0; k < nd; k++) {
      const dx = x + rnd.range(-w * 0.4, w * 0.4), dz = z + rnd.range(-d * 0.4, d * 0.4);
      const g = new THREE.SphereGeometry(0.16, 10, 4, 0, Math.PI * 2, 0, 0.75); g.scale(1, 0.45, 1); g.rotateX(Math.PI * 0.62); g.rotateY(rnd.range(-0.6, 0.6)); g.translate(dx, h + 0.2, dz); B.push(M.dish, g);
      const p = new THREE.CylinderGeometry(0.015, 0.015, 0.16, 4); p.translate(dx, h + 0.08, dz); B.push(M.metal, p);
    }
  };
  // 아파트 한 동
  const flat = (x, z, w, d, h, brick) => {
    boxWalls(B, x, 0, z, w, h, d, 0, brick ? M.brick[rnd.int(0, 2)] : M.flat[rnd.int(0, 4)], M.roof, 1.6, 1.2);
    roofKit(B, x, z, w, d, h, 0, brick ? M.metal : M.rim, { t: 0.06, rh: 0.12 });
    if (brick && rnd() < 0.6) for (const sx of [-1, 1]) for (const sz of [-1, 1]) { const r = new THREE.CylinderGeometry(0.02, 0.02, 0.35, 4); r.translate(x + sx * w * 0.48, h + 0.18, z + sz * d * 0.48); B.push(M.metal, r); }   // 철근
    rooftop(x, z, w, d, h + (brick ? 0 : 0.12));
  };
  // 옛 카이로 가옥: 석조 + 돌출 마슈라비야 창
  const oldHouse = (x, z, w, d, h, face) => {
    boxWalls(B, x, 0, z, w, h, d, 0, M.old[rnd.int(0, 2)], M.roof, 1.2, 1.05);
    roofKit(B, x, z, w, d, h, 0, M.rim, { t: 0.05, rh: 0.1 });
    if (h > 0.7) for (const s of face) {
      const n = Math.max(1, Math.round(w / 1.3));
      for (let k = 0; k < n; k++) {
        if (rnd() < 0.3) continue;
        const bx = x - w / 2 + (k + 0.5) * w / n, g = sbox(0.42, 0.34, 0.16, 0.42, 0.34); g.translate(bx, h - 0.32, z + s * (d / 2 + 0.08)); B.push(M.mash, g);
        const cap = new THREE.BoxGeometry(0.5, 0.04, 0.22); cap.translate(bx, h - 0.13, z + s * (d / 2 + 0.09)); B.push(M.stone, cap);
      }
    }
    if (rnd() < 0.35) rooftop(x, z, w, d, h + 0.1);
  };
  // 동네 모스크: 줄무늬 돌 본당 + 드럼 위 돔 + 맘루크 미너렛
  const mosque = (cx, cz, sc) => {
    const w = 5.4 * sc, hh = 1.1 * sc;
    boxWalls(B, cx, 0, cz, w, hh, w, 0, M.ablaq, M.roof, 1.2, 1.2);
    roofKit(B, cx, cz, w, w, hh, 0, M.stone, { t: 0.12, rh: 0.14 });
    const r = 1.35 * sc, dr = new THREE.CylinderGeometry(r * 0.98, r * 1.02, 0.45 * sc, 20); uvMul(dr, 6, 0.5); dr.translate(cx + 0.6 * sc, hh + 0.22 * sc, cz); B.push(M.ablaq, dr);
    const dm = new THREE.SphereGeometry(r, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2); dm.scale(1, 1.15, 1); dm.translate(cx + 0.6 * sc, hh + 0.45 * sc, cz); B.push(rnd() < 0.3 ? M.lead : M.dome, dm);
    const fi = new THREE.CylinderGeometry(0.02, 0.04, 0.5 * sc, 5); fi.translate(cx + 0.6 * sc, hh + 0.45 * sc + r * 1.15 + 0.2, cz); B.push(M.goldM, fi);
    const mx = cx - w / 2 + 0.45 * sc, mz = cz + (rnd() < 0.5 ? -1 : 1) * (w / 2 - 0.45 * sc);
    minaret(mx, mz, sc * rnd.range(0.95, 1.25));
    if (rnd() < 0.35) minaret(cx - w / 2 + 0.45 * sc, cz - (mz - cz), sc);
  };
  const minaret = (x, z, s) => {
    const parts = [
      [new THREE.BoxGeometry(0.6 * s, 2.0 * s, 0.6 * s), M.ablaq, 1.0 * s],
      [new THREE.CylinderGeometry(0.22 * s, 0.25 * s, 1.5 * s, 8), M.stone, 2.75 * s],
      [new THREE.CylinderGeometry(0.34 * s, 0.3 * s, 0.08 * s, 8), M.rim, 3.5 * s],
      [new THREE.CylinderGeometry(0.16 * s, 0.18 * s, 0.9 * s, 8), M.stone, 3.95 * s],
      [new THREE.CylinderGeometry(0.26 * s, 0.24 * s, 0.07 * s, 8), M.rim, 4.4 * s],
      [new THREE.SphereGeometry(0.17 * s, 10, 8), M.dome, 4.6 * s],
      [new THREE.ConeGeometry(0.03 * s, 0.35 * s, 5), M.goldM, 4.9 * s]
    ];
    for (const [g, m, y] of parts) { if (m === M.ablaq) uvMul(g, 0.6, 2); g.translate(x, y, z); B.push(m, g); }
  };

  for (let bx = -150; bx < 150; bx += 9) for (let bz = -90; bz < 90; bz += 9) {
    const cx = bx + 4.5, cz = bz + 4.5, dist = Math.hypot(cx, cz);
    if (dist > 150 || !free(cx, cz, 4)) continue;
    const pg = new THREE.PlaneGeometry(7.6, 7.6); pg.rotateX(-Math.PI / 2); pg.translate(cx, 0.006, cz); B.push(plotM, pg);
    const front = cz > b.z1 - 6 && cz < b.z1 + 34 && cx > b.x0 - 30 && cx < b.x1 + 30;
    const side = !front && cz > b.z0 - 4 && cz < b.z1 && (cx < b.x0 || cx > b.x1) && Math.min(Math.abs(cx - b.x0), Math.abs(cx - b.x1)) < 16;
    const across = R && cz < R.z;
    const r = rnd();
    if (front) {
      // 카메라 쪽: 낮은 옛 가옥 줄 + 야자수
      for (const sz of [-1, 1]) {
        const n = rnd.int(2, 3);
        for (let k = 0; k < n; k++) { const w = 7.2 / n - 0.15; oldHouse(cx - 3.6 + (k + 0.5) * 7.2 / n, cz + sz * 1.9, w, 3, rnd.range(0.55, 0.95), [sz]); }
      }
      if (rnd() < 0.6) for (let k = 0; k < 3; k++) palm(cx - 3 + k * 3 + rnd.range(-0.4, 0.4), cz + (rnd() < 0.5 ? -4.1 : 4.1), rnd.range(0.75, 0.95));
      continue;
    }
    if (!across && r < 0.09) { mosque(cx, cz, side ? 0.8 : 1); for (let k = 0; k < 2; k++) palm(cx + (k ? 3.3 : -3.3), cz + 3.4, rnd.range(0.85, 1.05)); continue; }
    if (!across && dist < 80 && r < 0.42) {
      // 옛 카이로 골목 블록: 가옥 줄 (가운데 좁은 골목) + 작은 돔
      const hm = side ? 0.75 : 1;
      for (const sz of [-1, 1]) {
        const n = rnd.int(2, 4);
        for (let k = 0; k < n; k++) { const w = 7.2 / n - 0.12; oldHouse(cx - 3.6 + (k + 0.5) * 7.2 / n, cz + sz * 2.0, w, 3.0, rnd.range(0.9, 1.6) * hm, [sz]); }
      }
      if (rnd() < 0.3) { const dx = cx + rnd.range(-2, 2), dh = 1.8 * hm, dm = new THREE.SphereGeometry(0.7, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2); dm.translate(dx, dh, cz + 2); B.push(M.dome, dm); const dr = new THREE.CylinderGeometry(0.7, 0.72, dh, 14); uvMul(dr, 4, 1); dr.translate(dx, dh / 2, cz + 2); B.push(M.ablaq, dr); }
    } else {
      // 콘크리트·벽돌 중층 아파트 2~3동 (강 건너는 나일 코르니슈 고층 호텔·사무실)
      const n = across ? rnd.int(1, 2) : rnd.int(2, 3), hm = side ? 0.65 : 1;
      for (let k = 0; k < n; k++) {
        const w = 7.2 / n - 0.25, x = cx - 3.6 + (k + 0.5) * 7.2 / n, d = rnd.range(4.6, 6.8);
        const h = across ? rnd.range(3, rnd() < 0.3 ? 11 : 6) : rnd.int(6, 15) * 0.3 * hm;
        flat(x, cz + rnd.range(-0.4, 0.4), w, d, h, !across && rnd() < 0.3);
      }
    }
    if (rnd() < 0.45) { const n = rnd.int(2, 3); for (let k = 0; k < n; k++) palm(cx + rnd.range(-3.4, 3.4), cz + (rnd() < 0.5 ? -4.2 : 4.2), rnd.range(0.8, 1.05)); }
  }
  // 나일강 건너 강변 (코르니슈: 호텔·아파트 줄 + 야자수)
  if (R) for (let x = -150; x < 150; x += 5.5) {
    const z = R.z - R.w / 2 - 4.2;
    if (!free(x, z, 2.6)) continue;
    flat(x, z, rnd.range(3.6, 5), 3.6, rnd.range(2.4, rnd() < 0.25 ? 9 : 5), false);
  }
}

// =================== 전투 구역 안 랜드마크 ===================
// 무함마드 알리 모스크 (살라딘 성채): 설화석고 본당 + 큰 납빛 중앙 돔 + 반 돔 4개 + 작은 모서리 돔 + 아케이드 안뜰 + 연필 미너렛 2개
function alimosque(G, k) {
  const add = adder(G), W = k.w, D = k.d;
  const alab = ashlarMat('cai_alab', 0xe9e1cf), plinth = ashlarMat('cai_cit', 0xc8b088), lead = domeMat('lead'), gd = gold(), trim = std(0xf2ece0);
  const hallF = facadeMat('cai_alif', { wall: 0xe9e1cf, cols: 4, rows: 2, ww: 0.42, wh: 0.66, win: 'arch', glass: '#2c3440', glassTop: '#55657a', key: true });
  // 성채 축대
  add(sbox(W, 0.3, D, 0.8, 0.8), plinth, 0, 0.06 + 0.15, 0);
  const y0 = 0.36, hx = W * 0.17, hs = 3.0, hh = 1.55;
  add(sbox(hs, hh, hs, hs / 4, hh / 2), hallF, hx, y0 + hh / 2, 0);
  cornice(add, trim, hs, hs, y0 + hh, hx, 0, 0.06);
  // 중앙 드럼 + 반 돔 4개 + 중앙 돔
  const yd = y0 + hh + 0.12;
  add(uvMul(new THREE.CylinderGeometry(0.95, 1.0, 0.55, 24), 6, 0.6), hallF, hx, yd + 0.27, 0);
  for (let i = 0; i < 4; i++) {
    const a = i * Math.PI / 2, hd = add(uvMul(new THREE.SphereGeometry(0.62, 16, 8, 0, Math.PI, 0, Math.PI / 2), 3, 1), lead, hx + Math.cos(a) * 0.95, yd, Math.sin(a) * 0.95);
    hd.rotation.y = -a + Math.PI / 2;   // 반구가 바깥을 보도록
  }
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    add(new THREE.CylinderGeometry(0.28, 0.3, 0.2, 12), alab, hx + sx * 1.15, yd + 0.1, sz * 1.15);
    add(uvMul(new THREE.SphereGeometry(0.29, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2), 2, 1), lead, hx + sx * 1.15, yd + 0.2, sz * 1.15);
    add(new THREE.ConeGeometry(0.03, 0.18, 5), gd, hx + sx * 1.15, yd + 0.55, sz * 1.15);
  }
  const dm = add(uvMul(new THREE.SphereGeometry(1.08, 28, 12, 0, Math.PI * 2, 0, Math.PI / 2), 4, 1), lead, hx, yd + 0.55, 0); dm.scale.y = 0.95;
  add(new THREE.CylinderGeometry(0.06, 0.1, 0.3, 8), gd, hx, yd + 0.55 + 1.05, 0);
  add(new THREE.TorusGeometry(0.1, 0.022, 6, 14, Math.PI * 1.4), gd, hx, yd + 0.55 + 1.32, 0).rotation.z = -0.9;   // 초승달
  // 안뜰 (서쪽): 낮은 아케이드 + 작은 돔 줄 + 가운데 세정 분수
  const cw = W * 0.4, cx = -W / 2 + cw / 2 + 0.05, arc = facadeMat('cai_arc', { wall: 0xe9e1cf, cols: 4, rows: 1, ww: 0.6, wh: 0.72, win: 'arch', glass: '#3a3530', glassTop: '#5a5048', band: false });
  for (const [x, z, w, d] of [[cx, -D * 0.43, cw, 0.4], [cx, D * 0.43, cw, 0.4], [-W / 2 + 0.25, 0, 0.4, D * 0.86]]) {
    add(sbox(w, 0.62, d, 0.5, 0.62), arc, x, y0 + 0.31, z);
    const n = Math.round(Math.max(w, d) / 0.5);
    for (let i = 0; i < n; i++) { const t = (i + 0.5) / n - 0.5; add(new THREE.SphereGeometry(0.17, 10, 5, 0, Math.PI * 2, 0, Math.PI / 2), lead, x + (w > d ? t * w : 0), y0 + 0.62, z + (w > d ? 0 : t * d)); }
  }
  add(new THREE.CylinderGeometry(0.32, 0.32, 0.3, 8), alab, cx + 0.2, y0 + 0.15, 0);
  add(new THREE.SphereGeometry(0.33, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2), lead, cx + 0.2, y0 + 0.5, 0);
  for (let i = 0; i < 8; i++) { const a = i / 8 * 6.283; add(new THREE.CylinderGeometry(0.025, 0.025, 0.22, 5), trim, cx + 0.2 + Math.cos(a) * 0.3, y0 + 0.41, Math.sin(a) * 0.3); }
  // 시계탑 (안뜰 서쪽 가운데)
  add(sbox(0.38, 0.9, 0.38, 0.4, 0.4), alab, -W / 2 + 0.3, y0 + 0.45, 0);
  add(new THREE.ConeGeometry(0.28, 0.4, 4).rotateY(Math.PI / 4), lead, -W / 2 + 0.3, y0 + 1.1, 0);
  // 연필 미너렛 2개 (본당과 안뜰 사이 모서리)
  for (const sz of [-1, 1]) {
    const mx = hx - hs / 2 - 0.12, mz = sz * (hs / 2 + 0.02);
    add(sbox(0.36, 0.7, 0.36, 0.4, 0.4), alab, mx, y0 + 0.35, mz);
    add(uvMul(new THREE.CylinderGeometry(0.11, 0.13, 4.3, 12), 1, 6), fluteMat(0xe9e1cf), mx, y0 + 0.7 + 2.15, mz);
    for (const by of [2.9, 4.0]) { add(new THREE.CylinderGeometry(0.2, 0.13, 0.12, 12), trim, mx, y0 + 0.7 + by, mz); add(new THREE.CylinderGeometry(0.2, 0.2, 0.08, 12, 1, true), std(0xd8cfbc, { side: THREE.DoubleSide }), mx, y0 + 0.7 + by + 0.1, mz); }
    add(new THREE.ConeGeometry(0.13, 0.9, 12), lead, mx, y0 + 0.7 + 4.3 + 0.45, mz);
    add(new THREE.CylinderGeometry(0.012, 0.02, 0.3, 5), gd, mx, y0 + 0.7 + 4.3 + 1.05, mz);
  }
}
// 이집트 박물관: 연어색(살몬 핑크) 신고전주의 정면 + 가운데 큰 아치 현관 + 기둥 + 뒤 돔 + 정원 연못·야자수
function egmuseum(G, k) {
  const add = adder(G), W = k.w, D = k.d, pink = 0xd98c74;
  const fac = facadeMat('cai_mus', { wall: pink, cols: 8, rows: 2, ww: 0.44, wh: 0.62, win: 'arch', key: true, pilaster: true, glass: '#3a3634', glassTop: '#6a5c56' });
  const stone = ashlarMat('cai_mus', pink), trim = std(0xf0d2c0), base = ashlarMat('cai_musb', 0xc9b9a2);
  const bw = W * 0.9, bd = D * 0.55, bz = -D * 0.16, bh = 1.3;
  add(sbox(bw, 0.18, bd + 0.1, 0.8, 0.8), base, 0, 0.06 + 0.09, bz);
  add(sbox(bw, bh, bd, bw / 8, bh / 2), fac, 0, 0.24 + bh / 2, bz);
  cornice(add, trim, bw, bd, 0.24 + bh, 0, bz, 0.07);
  add(sbox(bw * 0.98, 0.16, bd * 0.98, 0.8, 0.8), stone, 0, 0.24 + bh + 0.22, bz);
  // 양 끝 돌출부
  for (const sx of [-1, 1]) { add(sbox(0.8, bh + 0.2, bd + 0.2, 0.4, 0.75), fac, sx * (bw / 2 - 0.4), 0.24 + (bh + 0.2) / 2, bz); cornice(add, trim, 0.8, bd + 0.2, 0.24 + bh + 0.2, sx * (bw / 2 - 0.4), bz, 0.06); }
  // 가운데 현관: 높은 덩어리 + 큰 아치 + 양옆 짝기둥 + 위 박공
  const pz = bz + bd / 2 + 0.22, ph = bh + 0.55;
  add(sbox(1.5, ph, 0.5, 0.8, 0.8), stone, 0, 0.24 + ph / 2, pz - 0.05);
  const archS = new THREE.Shape(); archS.moveTo(-0.32, 0); archS.lineTo(-0.32, 0.7); archS.absarc(0, 0.7, 0.32, Math.PI, 0, true); archS.lineTo(0.32, 0); archS.closePath();
  add(new THREE.ShapeGeometry(archS, 10), std(0x2e2826), 0, 0.24, pz + 0.205);
  const archT = new THREE.Shape(); archT.absarc(0, 0, 0.42, 0, Math.PI, false); archT.lineTo(-0.32, 0); archT.absarc(0, 0, 0.32, Math.PI, 0, true); archT.closePath();
  add(new THREE.ShapeGeometry(archT, 12), trim, 0, 0.24 + 0.7, pz + 0.21);
  columns(add, fluteMat(0xf0d6c6), trim, 2, -0.6, -0.42, pz + 0.3, 0.24, 1.25, 0.05);
  columns(add, fluteMat(0xf0d6c6), trim, 2, 0.42, 0.6, pz + 0.3, 0.24, 1.25, 0.05);
  add(new THREE.BoxGeometry(1.6, 0.12, 0.55), trim, 0, 0.24 + ph, pz - 0.05);
  add(pediment(1.4, 0.32, 0.4), stone, 0, 0.24 + ph + 0.06, pz - 0.05);
  // 현관 위 이름판
  const sign = canvasTex('cai_musign', 256, 32, (g, w, h) => { g.fillStyle = '#e8c8b4'; g.fillRect(0, 0, w, h); g.fillStyle = '#5a3a2e'; g.font = 'bold 18px Georgia,serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('MUSÉE ÉGYPTIEN', w / 2, h / 2 + 1); });
  add(new THREE.PlaneGeometry(1.1, 0.14), new THREE.MeshStandardMaterial({ map: sign }), 0, 0.24 + ph - 0.22, pz + 0.21);
  // 뒤 돔
  add(new THREE.CylinderGeometry(0.55, 0.58, 0.3, 20), stone, 0, 0.24 + bh + 0.45, bz - 0.15);
  add(uvMul(new THREE.SphereGeometry(0.55, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), 4, 1), domeMat('stone'), 0, 0.24 + bh + 0.6, bz - 0.15);
  // 앞 정원: 잔디 + 파피루스 연못 + 스핑크스 석상 둘 + 야자수
  const lawn = std(0x7a9a4a, { roughness: 1 }), water = std(0x3f8a8a, { roughness: 0.1, metalness: 0.3 });
  for (const sx of [-1, 1]) add(new THREE.BoxGeometry(W * 0.3, 0.03, D * 0.2), lawn, sx * W * 0.28, 0.075, D * 0.36);
  add(new THREE.BoxGeometry(0.9, 0.06, 0.45), std(0xd0c2aa), 0, 0.09, D * 0.38);
  add(new THREE.BoxGeometry(0.8, 0.04, 0.36), water, 0, 0.11, D * 0.38).castShadow = false;
  const pap = std(0x4f7a2a, { roughness: 1 });
  for (let i = 0; i < 6; i++) add(new THREE.ConeGeometry(0.04, 0.22, 5), pap, -0.3 + i * 0.12, 0.2, D * 0.38 + (i % 2 ? 0.08 : -0.08));
  const sand = std(0xc8a670);
  for (const sx of [-1, 1]) { add(new THREE.BoxGeometry(0.34, 0.14, 0.14), sand, sx * 1.0, 0.13, D * 0.36); add(new THREE.BoxGeometry(0.12, 0.14, 0.12), sand, sx * 1.0 + sx * -0.14, 0.26, D * 0.36); }
  palmsInto(G, [[-W * 0.45, D * 0.4, 0.85], [W * 0.45, D * 0.4, 0.85], [-W * 0.2, D * 0.44, 0.7], [W * 0.2, D * 0.44, 0.7]], 0.8, 'mus');
}
// 칸 엘칼릴리 시장: 남북으로 긴 좁은 골목 + 양옆 가게(색색 차양·물건) + 마슈라비야 위층 + 등불 + 북쪽 줄무늬 돌문
function goodsTex(v) {
  return canvasTex('cai_goods' + v, 128, 64, (g, w, h) => {
    const rnd = makeRng('cai_goods' + v);
    g.fillStyle = '#2a1e16'; g.fillRect(0, 0, w, h);
    const pal = [['#c0392b', '#e67e22', '#f1c40f', '#8e44ad'], ['#d4a017', '#b87333', '#e8d5a0', '#7f8c8d'], ['#2e86c1', '#16a085', '#c0392b', '#f4d03f']][v % 3];
    for (let i = 0; i < 40; i++) {
      g.fillStyle = pal[Math.floor(rnd() * 4)];
      const x = rnd() * w, y = rnd() * h * 0.9;
      if (v % 3 === 1) { g.beginPath(); g.arc(x, y, 3 + rnd() * 4, 0, 7); g.fill(); g.fillStyle = 'rgba(255,240,180,0.6)'; g.fillRect(x - 1, y - 1, 2, 2); }   // 구리 등·그릇
      else g.fillRect(x, y, 6 + rnd() * 10, 4 + rnd() * 10);                                                                            // 카펫·천·향신료 상자
    }
    g.fillStyle = 'rgba(0,0,0,0.3)'; g.fillRect(0, h - 6, w, 6);
  });
}
function awningTex(v) {
  return canvasTex('cai_awn' + v, 64, 64, (g, w, h) => {
    const [a, b] = [['#c0392b', '#f4ecd8'], ['#1f6fb2', '#f4ecd8'], ['#1e8449', '#f4d03f'], ['#d35400', '#f9e79f'], ['#7d3c98', '#f4ecd8']][v % 5];
    for (let x = 0; x < w; x += 8) { g.fillStyle = (x / 8) % 2 ? a : b; g.fillRect(x, 0, 8, h); }
    g.fillStyle = 'rgba(0,0,0,0.15)'; g.fillRect(0, h - 8, w, 8);
    for (let x = 0; x < w; x += 8) { g.fillStyle = (x / 8) % 2 ? a : b; g.beginPath(); g.moveTo(x, h - 8); g.lineTo(x + 8, h - 8); g.lineTo(x + 4, h); g.fill(); }
  });
}
function khan(G, k) {
  const add = adder(G), W = k.w, D = k.d;
  const lane = 0.8, sw = (W - lane) / 2, n = 5, sl = (D - 0.9) / n;
  const pave = canvasTex('cai_pave', 64, 64, (g, w, h) => { g.fillStyle = '#a8957a'; g.fillRect(0, 0, w, h); g.strokeStyle = 'rgba(60,45,30,0.4)'; for (let y = 0; y < h; y += 8) { g.beginPath(); g.moveTo(0, y); g.lineTo(w, y); g.stroke(); for (let x = (y / 8) % 2 ? 6 : 0; x < w; x += 12) { g.beginPath(); g.moveTo(x, y); g.lineTo(x, y + 8); g.stroke(); } } });
  add(uvMul(new THREE.PlaneGeometry(lane, D), 1, D / 0.8).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ map: pave, roughness: 1 }), 0, 0.065, 0).castShadow = false;
  const oldM = [0, 1, 2].map((v) => emis(oldTex(v), { emissiveIntensity: 0.3, roughness: 0.92 })), mash = mashMat(), roofM = std(0xbba98a);
  const glow = [0xffc04a, 0xff7a3a, 0x7ad0ff, 0xff5a8a].map((c) => new THREE.MeshStandardMaterial({ color: c, emissive: c, emissiveIntensity: 0.9 }));
  const spice = [0xc0392b, 0xe67e22, 0xf1c40f, 0x8b4513, 0x27ae60].map((c) => std(c, { roughness: 1 }));
  const rnd = makeRng('cai_khan');
  for (const sx of [-1, 1]) for (let i = 0; i < n; i++) {
    const z = -D / 2 + 0.9 + (i + 0.5) * sl, x = sx * (lane / 2 + sw / 2), h = 0.75 + (i % 2) * 0.35 + rnd() * 0.2;
    // 가게 집 (아래 가게 + 위층)
    const box = add(sbox(sw, h, sl - 0.06, 0.4, 0.35), oldM[(i + (sx > 0 ? 1 : 0)) % 3], x, 0.06 + h / 2, z);
    add(new THREE.BoxGeometry(sw + 0.04, 0.05, sl), roofM, x, 0.06 + h + 0.02, z);
    // 길 쪽 진열 (물건 그림판)
    const gm = new THREE.MeshStandardMaterial({ map: goodsTex(i + (sx > 0 ? 2 : 0)), emissiveMap: goodsTex(i + (sx > 0 ? 2 : 0)), emissive: 0x332211, roughness: 0.9 });
    const gp = add(new THREE.PlaneGeometry(sl - 0.15, 0.4), gm, x - sx * (sw / 2 + 0.005), 0.06 + 0.22, z); gp.rotation.y = -sx * Math.PI / 2;
    // 차양 (길 쪽으로 기울어진 줄무늬 천)
    const aw = add(new THREE.BoxGeometry(0.36, 0.015, sl - 0.1), new THREE.MeshStandardMaterial({ map: awningTex(i * 2 + (sx > 0 ? 1 : 0)), roughness: 0.85 }), x - sx * (sw / 2 + 0.16), 0.06 + 0.5, z);
    aw.rotation.z = sx * 0.45;
    // 향신료 더미
    if (rnd() < 0.7) for (let j = 0; j < 3; j++) add(new THREE.ConeGeometry(0.06, 0.08, 8), spice[Math.floor(rnd() * 5)], x - sx * (sw / 2 + 0.12), 0.1, z - 0.2 + j * 0.2);
    // 위층 마슈라비야
    if (h > 0.9) add(sbox(0.12, 0.26, sl * 0.5, 0.2, 0.26), mash, x - sx * (sw / 2 + 0.06), 0.06 + h - 0.2, z);
    // 등불
    add(new THREE.SphereGeometry(0.045, 8, 6), glow[Math.floor(rnd() * 4)], x - sx * (sw / 2 + 0.3), 0.06 + 0.66, z + sl * 0.3).castShadow = false;
    box.castShadow = true;
  }
  // 골목 위 가로 천막 줄
  for (let i = 0; i < 4; i++) add(new THREE.BoxGeometry(lane + 0.1, 0.01, 0.35), new THREE.MeshStandardMaterial({ map: awningTex(i + 2), roughness: 0.85, side: THREE.DoubleSide }), 0, 0.06 + 1.0, -D / 2 + 1.6 + i * 1.7);
  // 북쪽 끝: 줄무늬 돌 문 (밥 알구리)
  const ab = ablaqMat(), gz = -D / 2 + 0.35;
  for (const sx of [-1, 1]) add(sbox(sw, 1.5, 0.6, 0.6, 0.6), ab, sx * (lane / 2 + sw / 2), 0.06 + 0.75, gz);
  add(sbox(lane, 0.4, 0.6, 0.6, 0.6), ab, 0, 0.06 + 1.3, gz);
  const ar = new THREE.Shape(); ar.moveTo(-lane / 2, 0); ar.lineTo(lane / 2, 0); ar.lineTo(lane / 2, 0.1); ar.quadraticCurveTo(0, 0.35, -lane / 2, 0.1); ar.closePath();
  add(new THREE.ExtrudeGeometry(ar, { depth: 0.6, bevelEnabled: false }).translate(0, 0, -0.3), ab, 0, 0.06 + 1.0, gz);
  add(new THREE.BoxGeometry(W + 0.1, 0.08, 0.7), std(0xe6d6b6), 0, 0.06 + 1.54, gz);
  for (let i = 0; i < 7; i++) add(new THREE.ConeGeometry(0.06, 0.12, 4), std(0xe6d6b6), -W / 2 + 0.2 + i * (W - 0.4) / 6, 0.06 + 1.64, gz);   // 톱니 장식
  // 남쪽 끝 작은 미너렛 (알후세인 모스크 쪽)
  const mz = D / 2 - 0.3;
  add(sbox(0.3, 0.9, 0.3, 0.3, 0.3), ab, W / 2 - 0.25, 0.06 + 0.45, mz);
  add(new THREE.CylinderGeometry(0.1, 0.12, 0.8, 8), std(0xe0cfa8), W / 2 - 0.25, 0.06 + 1.3, mz);
  add(new THREE.CylinderGeometry(0.17, 0.15, 0.05, 8), std(0xf0e6d0), W / 2 - 0.25, 0.06 + 1.72, mz);
  add(new THREE.SphereGeometry(0.1, 10, 8), domeMat('stone'), W / 2 - 0.25, 0.06 + 1.85, mz);
  add(new THREE.ConeGeometry(0.02, 0.2, 5), gold(), W / 2 - 0.25, 0.06 + 2.0, mz);
}
// 오벨리스크: 붉은 화강암 사각 기둥 + 상형문자 + 금빛 피라미디온
function hieroTex() {
  return canvasTex('cai_hiero', 256, 512, (g, w, h) => {
    const rnd = makeRng('cai_hiero');
    g.fillStyle = '#9a5a48'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 2500; i++) { g.fillStyle = `rgba(${rnd() < 0.5 ? '40,20,15' : '220,180,160'},${rnd() * 0.18})`; g.fillRect(rnd() * w, rnd() * h, 2, 2); }
    const cw = w / 4;
    for (let c = 0; c < 4; c++) {
      const x0 = c * cw;
      g.fillStyle = 'rgba(0,0,0,0.2)'; g.fillRect(x0 + cw * 0.2, 0, 2, h); g.fillRect(x0 + cw * 0.8, 0, 2, h);
      g.strokeStyle = 'rgba(45,22,16,0.75)'; g.fillStyle = 'rgba(45,22,16,0.75)'; g.lineWidth = 2.2;
      // 카르투슈(왕 이름 고리)
      g.strokeRect(x0 + cw * 0.3, 30, cw * 0.4, 70); g.beginPath(); g.moveTo(x0 + cw * 0.3, 104); g.lineTo(x0 + cw * 0.7, 104); g.stroke();
      for (let y = 112; y < h - 10; y += 22) {
        const cx = x0 + cw / 2, t = Math.floor(rnd() * 7);
        g.beginPath();
        if (t === 0) { g.arc(cx, y + 5, 4, 0, 7); g.moveTo(cx, y + 9); g.lineTo(cx, y + 18); g.moveTo(cx - 5, y + 12); g.lineTo(cx + 5, y + 12); g.stroke(); }   // 앙크
        else if (t === 1) { g.ellipse(cx, y + 9, 8, 4, 0, 0, 7); g.stroke(); g.beginPath(); g.arc(cx, y + 9, 2, 0, 7); g.fill(); }                               // 눈
        else if (t === 2) { g.moveTo(cx - 7, y + 16); g.lineTo(cx - 2, y + 8); g.lineTo(cx + 4, y + 4); g.lineTo(cx + 7, y + 7); g.lineTo(cx + 2, y + 10); g.lineTo(cx + 3, y + 16); g.stroke(); }   // 새
        else if (t === 3) { for (let k = 0; k < 3; k++) { g.moveTo(cx - 8, y + 6 + k * 5); for (let q = 0; q < 4; q++) g.lineTo(cx - 6 + q * 4, y + 4 + k * 5 + (q % 2) * 3); } g.stroke(); }   // 물결
        else if (t === 4) { g.fillRect(cx - 7, y + 8, 14, 6); }                                                                                                   // 받침
        else if (t === 5) { g.moveTo(cx, y + 2); g.lineTo(cx, y + 18); g.moveTo(cx, y + 4); g.quadraticCurveTo(cx + 6, y + 4, cx + 3, y + 9); g.stroke(); }       // 갈대
        else { g.arc(cx, y + 9, 6, 0, 7); g.stroke(); g.beginPath(); g.arc(cx, y + 9, 1.5, 0, 7); g.fill(); }                                                    // 태양
      }
    }
  });
}
function obelisk(G, k) {
  const add = adder(G), W = k.w;
  const gran = ashlarMat('cai_gran', 0x8a8378), red = new THREE.MeshStandardMaterial({ map: hieroTex(), bumpMap: hieroTex(), bumpScale: 1.2, roughness: 0.6 });
  for (let i = 0; i < 3; i++) add(sbox(W * 0.9 - i * 0.3, 0.12, W * 0.9 - i * 0.3, 0.6, 0.6), gran, 0, 0.06 + 0.06 + i * 0.12, 0);
  add(sbox(0.75, 0.55, 0.75, 0.6, 0.6), gran, 0, 0.42 + 0.275, 0);
  const sh = new THREE.CylinderGeometry(0.2, 0.3, 4.0, 4, 1); sh.rotateY(Math.PI / 4);
  add(sh, red, 0, 0.97 + 2.0, 0);
  const py = new THREE.ConeGeometry(0.2, 0.34, 4); py.rotateY(Math.PI / 4);
  add(py, gold(), 0, 0.97 + 4.0 + 0.17, 0);
  palmsInto(G, [[-W * 0.42, W * 0.42, 0.6], [W * 0.42, -W * 0.42, 0.6]], 0.6, 'obl');
}

// =================== 가장자리 큰 랜드마크 ===================
function stoneCourses(key, base, rows) {
  return canvasTex(key, 256, 256, (g, w, h) => {
    const rnd = makeRng(key), rh = h / rows;
    g.fillStyle = shade(base, 0.8); g.fillRect(0, 0, w, h);
    for (let r = 0; r < rows; r++) {
      let x = (r % 2) * -12;
      while (x < w) {
        const bw = 18 + rnd() * 22, k = 0.85 + rnd() * 0.22;
        g.fillStyle = shade(base, k); g.fillRect(x + 1, r * rh + 1, bw - 2, rh - 2);
        g.fillStyle = 'rgba(255,245,220,0.25)'; g.fillRect(x + 1, r * rh + 1, bw - 2, 2);   // 계단 윗면 빛
        g.fillStyle = 'rgba(0,0,0,0.22)'; g.fillRect(x + 1, r * rh + rh - 3, bw - 2, 2);    // 계단 그림자
        if (rnd() < 0.08) { g.fillStyle = 'rgba(60,40,20,0.3)'; g.fillRect(x + 3, r * rh + 3, bw * 0.5, rh * 0.5); }   // 깨진 돌
        x += bw;
      }
    }
  });
}
// 기자 피라미드 3기 (쿠푸·카프레·멘카우레) + 왕비 피라미드 + 스핑크스(동쪽 = 전투 구역을 봄) + 사막 고원
function pyramids(L, city) {
  const G = new THREE.Group(), add = adder(G);
  const sandT = canvasTex('cai_sand', 256, 256, (g, w, h) => {
    const rnd = makeRng('cai_sand'); g.fillStyle = '#d8b878'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 3000; i++) { g.fillStyle = `rgba(${rnd() < 0.5 ? '150,110,60' : '250,230,190'},${rnd() * 0.25})`; g.fillRect(rnd() * w, rnd() * h, 2, 2); }
    g.strokeStyle = 'rgba(160,120,70,0.25)'; g.lineWidth = 2; for (let i = 0; i < 12; i++) { g.beginPath(); const y = rnd() * h; g.moveTo(0, y); g.bezierCurveTo(w * 0.3, y + 10, w * 0.6, y - 10, w, y); g.stroke(); }
  });
  sandT.repeat.set(10, 10);
  const sand = new THREE.MeshStandardMaterial({ map: sandT, roughness: 1 });
  add(new THREE.CircleGeometry(19.5, 48).rotateX(-Math.PI / 2), sand, 0, 0.012, 0).castShadow = false;
  const rnd = makeRng('cai_dune');
  for (let i = 0; i < 10; i++) { const a = rnd() * 6.283, r = 12 + rnd() * 6, d = add(new THREE.SphereGeometry(1, 14, 6, 0, Math.PI * 2, 0, Math.PI / 2), sand, Math.cos(a) * r, 0, Math.sin(a) * r); d.scale.set(3 + rnd() * 3, 0.5 + rnd() * 0.6, 2 + rnd() * 2); d.castShadow = false; }
  const pyr = (x, z, base, h, col, key, cap) => {
    const t = stoneCourses('cai_pyr' + key, col, 16); t.repeat.set(6, Math.round(h / 1.2));
    const m = new THREE.MeshStandardMaterial({ map: t, bumpMap: t, bumpScale: 1.2, roughness: 0.95 });
    const g = new THREE.ConeGeometry(base / Math.SQRT2, h, 4, 1); g.rotateY(Math.PI / 4);
    add(g, m, x, h / 2, z);
    if (cap) {   // 카프레: 꼭대기에 남은 매끈한 외장석
      const c = new THREE.ConeGeometry(base / Math.SQRT2 * 0.2, h * 0.2, 4, 1); c.rotateY(Math.PI / 4); c.scale(1.02, 1.0, 1.02);
      add(c, std(0xe2cfa4, { roughness: 0.8 }), x, h * 0.9 + 0.01, z);
    }
  };
  pyr(4, 4, 15, 9.6, 0xc9a66a, 'k', false);      // 쿠푸 (대피라미드, 전투 구역에 가장 가까움)
  pyr(-8, -7, 13.6, 9.4, 0xc49f62, 'f', true);  // 카프레 (높은 곳에 있어 더 커 보임)
  pyr(-15, -15.5, 7, 4.6, 0xbf9a60, 'm', false); // 멘카우레
  for (let i = 0; i < 3; i++) pyr(13.5, -2 + i * 3, 2.4, 1.6, 0xc49f62, 'q', false);   // 왕비 피라미드
  // 스핑크스 (동쪽을 봄)
  const sph = ashlarMat('cai_sph', 0xc9a066, { rh: 18 }), face = std(0xcfa972, { roughness: 0.9 }), S = new THREE.Group(); S.position.set(14, 0, 10); G.add(S);
  const sa = adder(S);
  sa(sbox(3.4, 1.0, 1.25, 0.6, 0.6), sph, -0.5, 0.5, 0);
  const hip = sa(new THREE.SphereGeometry(0.7, 14, 8), sph, -2.1, 0.55, 0); hip.scale.set(1, 0.8, 0.9);
  for (const s of [-1, 1]) sa(sbox(1.6, 0.32, 0.36, 0.6, 0.6), sph, 1.7, 0.16, s * 0.38);
  sa(sbox(0.75, 0.9, 0.9, 0.5, 0.5), sph, 0.85, 1.2, 0);                       // 가슴
  sa(sbox(0.55, 0.6, 0.55, 0.5, 0.5), face, 1.05, 1.85, 0);                    // 얼굴
  const nem = new THREE.Shape(); nem.moveTo(-0.5, 0); nem.lineTo(0.5, 0); nem.lineTo(0.3, 0.75); nem.lineTo(-0.3, 0.75); nem.closePath();
  const ng = new THREE.ExtrudeGeometry(nem, { depth: 0.55, bevelEnabled: false }); ng.translate(0, 0, -0.275); ng.rotateY(Math.PI / 2);
  sa(ng, sph, 0.75, 1.3, 0);                                                    // 네메스 두건
  sa(new THREE.BoxGeometry(0.06, 0.08, 0.12), std(0x6a4a2a), 1.34, 1.8, 0);    // 코 자리
  for (const s of [-1, 1]) sa(new THREE.BoxGeometry(0.05, 0.05, 0.1), std(0x3a2a1a), 1.33, 1.95, s * 0.13);
  // 사막 야자수 무리 (스핑크스 옆 오아시스)
  palmsInto(G, [[19, 15, 1], [20.5, 13.5, 0.9], [18, 17.5, 1.1], [21, 7, 0.9], [17, 4, 0.8]], 1, 'giza');
  return G;
}
// 카이로 타워: 연꽃 줄기를 본뜬 격자무늬 원통 탑 + 위로 벌어지는 연꽃 머리 + 전망대 + 안테나, 게지라 섬 정원
function cairotower(L, city) {
  const G = new THREE.Group(), add = adder(G);
  const lat = canvasTex('cai_lattice', 128, 128, (g, w, h) => {
    g.fillStyle = '#3a4048'; g.fillRect(0, 0, w, h);
    g.strokeStyle = '#ece4d4'; g.lineWidth = 7;
    for (let k = -w; k < w * 2; k += 32) { g.beginPath(); g.moveTo(k, 0); g.lineTo(k + h, h); g.stroke(); g.beginPath(); g.moveTo(k, h); g.lineTo(k + h, 0); g.stroke(); }
    g.strokeStyle = 'rgba(0,0,0,0.25)'; g.lineWidth = 1.5;
    for (let k = -w; k < w * 2; k += 32) { g.beginPath(); g.moveTo(k + 4, 0); g.lineTo(k + h + 4, h); g.stroke(); }
  });
  lat.repeat.set(5, 22);
  const shaftM = new THREE.MeshStandardMaterial({ map: lat, bumpMap: lat, bumpScale: 1, roughness: 0.75 });
  const conc = std(0xe6dfd0), glassB = canvasTex('cai_deck', 128, 32, (g, w, h) => { g.fillStyle = '#d8d0c0'; g.fillRect(0, 0, w, h); for (let x = 0; x < w; x += 8) { g.fillStyle = '#2f4458'; g.fillRect(x + 1, 6, 6, h - 12); g.fillStyle = 'rgba(255,255,255,0.25)'; g.fillRect(x + 1, 6, 2, h - 12); } });
  glassB.repeat.set(4, 1);
  const deckM = new THREE.MeshStandardMaterial({ map: glassB, emissiveMap: glassB, emissive: 0x222222, roughness: 0.4 });
  // 섬 정원
  add(new THREE.CircleGeometry(7, 32).rotateX(-Math.PI / 2), std(0x6f9a4a, { roughness: 1 }), 0, 0.012, 0).castShadow = false;
  add(new THREE.CircleGeometry(2.4, 24).rotateX(-Math.PI / 2), std(0xd8ccb0), 0, 0.02, 0).castShadow = false;
  // 받침 건물
  add(sbox(3, 0.8, 3, 1, 0.8), facadeMat('cai_twb', { wall: 0xe6dfd0, cols: 3, rows: 1, ww: 0.6, wh: 0.6, glass: '#2f4458' }), 0, 0.4, 0);
  add(new THREE.CylinderGeometry(1.0, 1.15, 0.6, 20), conc, 0, 1.1, 0);
  // 줄기 (격자)
  const H0 = 1.4, HS = 15.5;
  add(uvMul(new THREE.CylinderGeometry(0.72, 0.85, HS, 24, 1, true), 1, 1), shaftM, 0, H0 + HS / 2, 0);
  add(new THREE.CylinderGeometry(0.6, 0.7, HS, 12), std(0x2a2e34), 0, H0 + HS / 2, 0);
  // 연꽃 머리: 벌어지는 꽃받침 + 꽃잎 + 전망대 + 위 식당 + 안테나
  const yT = H0 + HS;
  add(new THREE.CylinderGeometry(1.25, 0.72, 1.3, 24, 1, true), shaftM, 0, yT + 0.65, 0);
  for (let i = 0; i < 12; i++) {
    const a = i / 12 * 6.283, p = add(new THREE.BoxGeometry(0.42, 1.25, 0.06), conc, Math.cos(a) * 1.0, yT + 0.65, Math.sin(a) * 1.0);
    p.rotation.y = -a + Math.PI / 2; p.rotateX(-0.36);
  }
  add(uvMul(new THREE.CylinderGeometry(1.32, 1.28, 0.9, 28), 1, 1), deckM, 0, yT + 1.75, 0);
  add(new THREE.CylinderGeometry(1.45, 1.4, 0.12, 28), conc, 0, yT + 2.26, 0);
  add(new THREE.CylinderGeometry(1.0, 1.25, 0.6, 24), deckM, 0, yT + 2.62, 0);
  add(new THREE.CylinderGeometry(0.5, 1.0, 0.4, 20), conc, 0, yT + 3.12, 0);
  add(new THREE.CylinderGeometry(0.08, 0.16, 3.0, 8), std(0xd0d4d8, { metalness: 0.5 }), 0, yT + 4.8, 0);
  const beacon = add(new THREE.SphereGeometry(0.12, 8, 6), new THREE.MeshBasicMaterial({ color: 0xff3a2e }), 0, yT + 6.35, 0); beacon.castShadow = false;
  palmsInto(G, [[-4.5, 2, 1], [4.6, 1.5, 1], [-3.5, -4, 1], [3.8, -4.2, 1], [0, 5.2, 1.1], [-5.6, -1.5, 0.9], [5.8, -1.5, 0.9], [-2, 5.5, 0.9], [2.4, 5.4, 1]], 1, 'twr');
  return G;
}

export default {
  build,
  field: { alimosque, egmuseum, khan, obelisk },
  edge: { pyramids: { r: 20, build: pyramids }, cairotower: { r: 7.5, build: cairotower } },
  gate: { wall: 0xc8a878, cap: 0xe2cfa6 },
  water: 0x4f9c98, riverWall: 0xc2a77e, riverWalk: 0xd8c49c, riverTrees: true,
  bridges: [[-24, 'arch', 0x4f6f68], [4, 'plain', null], [50, 'truss', 0x6a7d8c]]
};
