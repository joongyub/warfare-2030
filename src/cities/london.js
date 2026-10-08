// 도시 키트: 런던 (스테이지 5)
// 배경: 조지안·빅토리안 벽돌 연립주택(누런 런던 벽돌·흰 내리닫이 창·굴뚝 항아리·슬레이트 박공지붕), 포틀랜드석 맨션 블록,
//   광장 정원, 강 건너 북동쪽 시티 오브 런던의 유리 빌딩 숲(거킨·워키토키)
// 전투 구역 안: 트래펄가 광장(넬슨 기념탑), 버킹엄 궁전, 세인트 폴 대성당, 피커딜리 서커스
// 가장자리: 국회의사당 + 빅벤, 타워 브리지, 런던 아이, 더 샤드
import * as THREE from 'three';
import { makeRng } from '../textures.js';
import { cv, mk, once, pane, grime, bricks, signBoard } from '../textures_world.js';
import { ashlarMat, sbox, std, adder, canvasTex, uvMul, facadeMat, fluteMat, roofMat, gold, bronze, pediment, cornice, columns, trees, lamps, shade, reliefMat } from '../landmarks_world.js';
import { emis } from './common.js';

const STOCK = ['#b39a6e', '#a68a5f', '#9b5444', '#ece5d4'];   // 누런 런던 벽돌 2 · 붉은 벽돌 · 흰 치장회반죽(스투코)
const DOORS = ['#1b1d20', '#233a66', '#6e1f26', '#1f4a34', '#2b2b2b'];
const PORTLAND = 0xe2dccb;

// ---------- 그림 도우미 ----------
// 흰 내리닫이 창 (6+6 창살)
function sash(g, e, x, y, w, h, rnd, lit = 0.14, frame = '#f2efe6') {
  const on = rnd() < lit;
  g.fillStyle = 'rgba(0,0,0,0.35)'; g.fillRect(x - 1, y - 1, w + 4, h + 4);
  g.fillStyle = frame; g.fillRect(x - 3, y - 3, w + 6, h + 6);
  const gr = g.createLinearGradient(x, y, x, y + h);
  if (on) { gr.addColorStop(0, '#f3dda2'); gr.addColorStop(1, '#b98f52'); } else { gr.addColorStop(0, '#93a8b8'); gr.addColorStop(0.5, '#4b5a68'); gr.addColorStop(1, '#262d35'); }
  g.fillStyle = gr; g.fillRect(x, y, w, h);
  g.fillStyle = 'rgba(255,255,255,0.15)'; g.beginPath(); g.moveTo(x, y); g.lineTo(x + w * 0.55, y); g.lineTo(x, y + h * 0.5); g.fill();
  g.fillStyle = frame;
  for (let k = 1; k < 3; k++) g.fillRect(x + w * k / 3 - 0.75, y, 1.5, h);
  for (const t of [0.25, 0.75]) g.fillRect(x, y + h * t - 0.75, w, 1.5);
  g.fillRect(x, y + h / 2 - 1.5, w, 3);
  if (on && e) { e.fillStyle = '#a07a38'; e.fillRect(x, y, w, h); }
}
// 가로 줄눈 스투코
function stucco(g, x, y, w, h, base, deep) {
  g.fillStyle = base; g.fillRect(x, y, w, h);
  g.fillStyle = deep ? 'rgba(80,70,55,0.28)' : 'rgba(80,70,55,0.12)';
  for (let yy = y + 7; yy < y + h; yy += 8) g.fillRect(x, yy, w, deep ? 2 : 1);
}

// 조지안 연립주택 외벽: 가로 집 2채 × 4층 (1층 = 현관 + 창, 2층 = 높은 창)
function terraceTex(v) {
  return once('lonter' + v, () => {
    const W = 256, H = 256, fh = 64, [c, g] = cv(W, H), [ce, e] = cv(W, H), rnd = makeRng('lonter' + v);
    e.fillStyle = '#000'; e.fillRect(0, 0, W, H);
    const white = v === 3;
    if (white) stucco(g, 0, 0, W, H, STOCK[3], false); else bricks(g, W, H, STOCK[v], rnd);
    grime(g, W, H, rnd, 700, 0.05);
    // 1층 흰 스투코 띠 (벽돌집도 1층은 흰 줄눈)
    stucco(g, 0, 3 * fh, W, fh, '#e9e3d3', true);
    g.fillStyle = 'rgba(0,0,0,0.2)'; g.fillRect(0, 3 * fh, W, 3);
    for (let hs = 0; hs < 2; hs++) {
      const x0 = hs * 128;
      g.fillStyle = 'rgba(0,0,0,0.12)'; g.fillRect(x0, 0, 2, 3 * fh);      // 집 경계
      // 위층 창 2개씩 (2층이 가장 높음)
      for (let f = 0; f < 3; f++) {
        const wh = [30, 38, 48][f], y = f * fh + (fh - wh) / 2 + 2;
        for (const wx of [24, 74]) {
          if (!white) { g.fillStyle = 'rgba(120,60,40,0.55)'; g.fillRect(x0 + wx - 3, y - 9, 36, 6); }   // 벽돌 아치 인방
          sash(g, e, x0 + wx, y, 30, wh, rnd);
          if (f === 2 && (white || v === 2)) { g.strokeStyle = '#1c1d1f'; g.lineWidth = 1.5; g.strokeRect(x0 + wx - 4, y + wh - 12, 38, 12); for (let k = x0 + wx - 4; k < x0 + wx + 34; k += 4) { g.beginPath(); g.moveTo(k, y + wh - 12); g.lineTo(k, y + wh); g.stroke(); } }
        }
      }
      // 1층: 창 + 현관문(부채꼴 채광창, 기둥 테두리)
      const gy = 3 * fh;
      sash(g, e, x0 + 20, gy + 14, 34, 38, rnd);
      const dx = x0 + 78, dw = 26, dy = gy + 18;
      g.fillStyle = '#f4f0e6'; g.fillRect(dx - 6, dy - 16, dw + 12, fh - (dy - 16 - gy));
      g.fillStyle = '#7f8a92'; g.beginPath(); g.arc(dx + dw / 2, dy, dw / 2, Math.PI, 0); g.fill();
      g.strokeStyle = '#f4f0e6'; g.lineWidth = 1.2; for (let k = 0; k < 5; k++) { const a = Math.PI + k * Math.PI / 4; g.beginPath(); g.moveTo(dx + dw / 2, dy); g.lineTo(dx + dw / 2 + Math.cos(a) * dw / 2, dy + Math.sin(a) * dw / 2); g.stroke(); }
      g.fillStyle = DOORS[Math.floor(rnd() * DOORS.length)]; g.fillRect(dx, dy, dw, fh - (dy - gy));
      g.fillStyle = 'rgba(255,255,255,0.12)'; g.fillRect(dx + 3, dy + 4, dw / 2 - 5, 16); g.fillRect(dx + dw / 2 + 2, dy + 4, dw / 2 - 5, 16);
      g.fillStyle = '#d8b04a'; g.fillRect(dx + dw - 6, dy + 22, 3, 3);
      // 검은 철 난간
      g.fillStyle = '#16171a'; g.fillRect(x0, H - 14, 70, 2); for (let k = x0 + 2; k < x0 + 70; k += 4) g.fillRect(k, H - 14, 1.2, 14);
    }
    // 처마 돌림띠 + 난간벽 위 덮개돌
    g.fillStyle = '#ece6d6'; g.fillRect(0, 0, W, 5); g.fillStyle = 'rgba(0,0,0,0.25)'; g.fillRect(0, 5, W, 2);
    g.fillStyle = '#e6e0d0'; g.fillRect(0, fh * 2.98, W, 3);
    return { map: mk(c), emissiveMap: mk(ce) };
  });
}
// 포틀랜드석 맨션·사무 블록: 4칸 × 5층, 1층은 깊은 줄눈, 맨 위 처마
function portlandTex(v) {
  return once('lonpor' + v, () => {
    const W = 256, H = 256, fh = H / 5, [c, g] = cv(W, H), [ce, e] = cv(W, H), rnd = makeRng('lonpor' + v);
    e.fillStyle = '#000'; e.fillRect(0, 0, W, H);
    const base = ['#e2dccb', '#d9d1bd', '#c9b79a'][v % 3];
    stucco(g, 0, 0, W, H, base, false);
    for (let y = 0; y < H; y += 8) for (let x = (y / 8) % 2 ? 18 : 0; x < W; x += 36) { g.fillStyle = 'rgba(90,80,60,0.12)'; g.fillRect(x, y, 1, 8); }
    grime(g, W, H, rnd, 900, 0.06);
    stucco(g, 0, 4 * fh, W, fh, shade(parseInt(base.slice(1), 16), 0.96), true);
    for (let f = 0; f < 5; f++) for (let i = 0; i < 4; i++) {
      const w = 26, h = f === 4 ? 34 : f === 1 ? 36 : 30, x = i * 64 + 19, y = f * fh + (fh - h) / 2 + 2;
      if (f === 4) { g.fillStyle = '#2e3236'; g.beginPath(); g.moveTo(x, y + h); g.lineTo(x, y + 10); g.arc(x + w / 2, y + 10, w / 2, Math.PI, 0); g.lineTo(x + w, y + h); g.fill(); pane(g, e, x + 3, y + 6, w - 6, h - 6, rnd, { frame: '#e8e2d2', lit: 0.3, mull: false }); continue; }
      if (f === 1) { g.fillStyle = 'rgba(120,105,80,0.45)'; g.beginPath(); g.moveTo(x - 5, y - 4); g.lineTo(x + w / 2, y - 12); g.lineTo(x + w + 5, y - 4); g.fill(); }
      sash(g, e, x, y, w, h, rnd, 0.16, '#efeae0');
    }
    g.fillStyle = shade(parseInt(base.slice(1), 16), 1.06); g.fillRect(0, 0, W, 6); g.fillStyle = 'rgba(0,0,0,0.25)'; g.fillRect(0, 6, W, 3);
    return { map: mk(c), emissiveMap: mk(ce) };
  });
}
// 길가 상가 (가로 1 × 세로 1.5 = 5층): 1층 가게(간판·진열창), 위층 벽돌 + 내리닫이 창
const SHOP_WORDS = ['PUB', 'TEA ROOM', 'BOOKS', 'FISH & CHIPS', 'CHEMIST', 'BAKERY', 'TAILOR', 'NEWS', 'BANK', 'GIN BAR', 'THEATRE', 'CAFE', 'HATTER', 'BUTCHER'];
const SHOP_COL = [['#1f3d2e', '#e8d48a'], ['#5a1820', '#f1e3b8'], ['#14233f', '#f4f0e6'], ['#111111', '#d8b04a'], ['#7a1c1c', '#ffffff'], ['#2a4f45', '#f1e7c8']];
function shopTex(v) {
  return once('lonshop' + v, () => {
    const W = 256, H = 384, fh = H / 5, [c, g] = cv(W, H), [ce, e] = cv(W, H), rnd = makeRng('lonshop' + v);
    e.fillStyle = '#000'; e.fillRect(0, 0, W, H);
    if (v % 3 === 2) stucco(g, 0, 0, W, H, '#ebe4d2', false); else bricks(g, W, H, STOCK[v % 3 === 0 ? 0 : 2], rnd);
    grime(g, W, H, rnd, 800, 0.05);
    for (let f = 0; f < 4; f++) for (let i = 0; i < 3; i++) {
      const h = f === 3 ? 44 : 36, y = f * fh + (fh - h) / 2 + 2;
      sash(g, e, 26 + i * 76, y, 34, h, rnd, 0.18);
    }
    g.fillStyle = '#ece6d6'; g.fillRect(0, 0, W, 5);
    const gy = 4 * fh, [bg, fg] = SHOP_COL[v % SHOP_COL.length];
    g.fillStyle = bg; g.fillRect(0, gy, W, fh);
    signBoard(g, e, 6, gy + 4, W - 12, fh * 0.26, SHOP_WORDS[(v * 5 + 3) % SHOP_WORDS.length], bg, fg, 'Georgia,"Times New Roman",serif');
    g.fillStyle = '#d8b04a'; g.fillRect(6, gy + 4 + fh * 0.26, W - 12, 2);
    const sg = g.createLinearGradient(0, gy + fh * 0.36, 0, H); sg.addColorStop(0, '#f6dfa8'); sg.addColorStop(1, '#9c7444');
    for (let i = 0; i < 3; i++) {
      const x = 14 + i * 80, w = i === 1 ? 44 : 64;
      g.fillStyle = sg; g.fillRect(x, gy + fh * 0.36, w, fh * 0.6); e.fillStyle = '#705426'; e.fillRect(x, gy + fh * 0.36, w, fh * 0.6);
      g.fillStyle = bg; for (let k = 1; k < 3; k++) g.fillRect(x + w * k / 3, gy + fh * 0.36, 2, fh * 0.6);
      g.fillRect(x, gy + fh * 0.6, w, 2);
    }
    return { map: mk(c), emissiveMap: mk(ce) };
  });
}
// 슬레이트 지붕 (줄줄이 겹친 회청색 판)
function slateTex() {
  return canvasTex('lonslate', 128, 128, (g, w, h) => {
    const rnd = makeRng('lonslate');
    g.fillStyle = '#4c535a'; g.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 8) for (let x = (y / 8) % 2 ? -6 : 0; x < w; x += 12) {
      g.fillStyle = shade(0x4f575f, 0.85 + rnd() * 0.3); g.fillRect(x + 1, y + 1, 11, 7);
      g.fillStyle = 'rgba(0,0,0,0.35)'; g.fillRect(x, y + 7, 12, 1);
    }
  });
}
// 유리 커튼월 (시티 빌딩·샤드)
function glassTex(key, tint) {
  return once('longl' + key, () => {
    const W = 128, H = 256, [c, g] = cv(W, H), [ce, e] = cv(W, H), rnd = makeRng('longl' + key);
    e.fillStyle = '#000'; e.fillRect(0, 0, W, H);
    const gr = g.createLinearGradient(0, 0, W, H); gr.addColorStop(0, tint[0]); gr.addColorStop(1, tint[1]); g.fillStyle = gr; g.fillRect(0, 0, W, H);
    for (let y = 0; y < H; y += 8) {
      g.fillStyle = 'rgba(30,40,50,0.35)'; g.fillRect(0, y, W, 1.5);
      for (let x = 0; x < W; x += 8) if (rnd() < 0.08) { g.fillStyle = 'rgba(255,230,170,0.6)'; g.fillRect(x + 1, y + 2, 6, 5); e.fillStyle = '#8a6a30'; e.fillRect(x + 1, y + 2, 6, 5); }
    }
    g.fillStyle = 'rgba(220,235,245,0.25)'; for (let x = 0; x < W; x += 16) g.fillRect(x, 0, 1, H);
    return { map: mk(c), emissiveMap: mk(ce) };
  });
}
function unionJack() {
  return canvasTex('lonflag', 120, 60, (g, w, h) => {
    g.fillStyle = '#1f3c88'; g.fillRect(0, 0, w, h);
    g.strokeStyle = '#fff'; g.lineWidth = 12; g.beginPath(); g.moveTo(0, 0); g.lineTo(w, h); g.moveTo(w, 0); g.lineTo(0, h); g.stroke();
    g.strokeStyle = '#c8202e'; g.lineWidth = 4; g.beginPath(); g.moveTo(0, 0); g.lineTo(w, h); g.moveTo(w, 0); g.lineTo(0, h); g.stroke();
    g.fillStyle = '#fff'; g.fillRect(w / 2 - 10, 0, 20, h); g.fillRect(0, h / 2 - 10, w, 20);
    g.fillStyle = '#c8202e'; g.fillRect(w / 2 - 6, 0, 12, h); g.fillRect(0, h / 2 - 6, w, 12);
  });
}
function royalStandard() {
  return canvasTex('lonroyal', 120, 60, (g, w, h) => {

    for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) { g.fillStyle = (i + j) % 2 ? '#2a4fb0' : '#c8202e'; if (i === 1 && j === 0) g.fillStyle = '#d8b04a'; g.fillRect(i * w / 2, j * h / 2, w / 2, h / 2); }
    g.fillStyle = '#d8b04a'; for (let k = 0; k < 3; k++) g.fillRect(8, 6 + k * 8, 30, 4);
    g.fillStyle = '#d8b04a'; for (let k = 0; k < 3; k++) g.fillRect(w / 2 + 8 + k * 0, h / 2 + 6 + k * 8, 30, 4);

  });
}

// ---------- 기하 도우미 ----------
// 박공지붕 (용마루가 로컬 x 방향, 폭 w, 깊이 d, 높이 rh) → ry 회전, (x,y,z) 이동
function gableGeo(x, y, z, w, d, rh, ry, uvs = 1) {
  const W = w / 2, D = d / 2, P = [], U = [], sl = Math.hypot(D, rh);
  const tri = (a, b, c2, ua, ub, uc) => { P.push(...a, ...b, ...c2); U.push(...ua, ...ub, ...uc); };
  // 앞 경사면 (+z), 뒤 경사면 (-z)
  tri([-W, 0, D], [W, 0, D], [W, rh, 0], [0, 0], [w / uvs, 0], [w / uvs, sl / uvs]); tri([-W, 0, D], [W, rh, 0], [-W, rh, 0], [0, 0], [w / uvs, sl / uvs], [0, sl / uvs]);
  tri([W, 0, -D], [-W, 0, -D], [-W, rh, 0], [0, 0], [w / uvs, 0], [w / uvs, sl / uvs]); tri([W, 0, -D], [-W, rh, 0], [W, rh, 0], [0, 0], [w / uvs, sl / uvs], [0, sl / uvs]);
  // 박공 끝 (삼각형)
  tri([W, 0, D], [W, 0, -D], [W, rh, 0], [0, 0], [0.2, 0], [0.1, 0.1]); tri([-W, 0, -D], [-W, 0, D], [-W, rh, 0], [0, 0], [0.2, 0], [0.1, 0.1]);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(U, 2));
  g.computeVertexNormals();
  g.applyMatrix4(new THREE.Matrix4().makeRotationY(ry)); g.translate(x, y, z);
  return g;
}

// ---------- 배경 도시 ----------
function build(C, H) {
  const { free, B, rnd, boxWalls, roofKit, mat } = H, S = C.S, b = S.bounds, R = S.river;
  const M = {
    ter: [0, 1, 2, 3].map((v) => emis(terraceTex(v), { emissiveIntensity: 0.3, roughness: 0.85 })),
    por: [0, 1, 2].map((v) => emis(portlandTex(v), { emissiveIntensity: 0.3, roughness: 0.8 })),
    glass: [['#9fb6c6', '#4f6676'], ['#b9c8d0', '#6c8090'], ['#7f9db0', '#34495a']].map((t, i) => emis(glassTex(i, t), { emissiveIntensity: 0.35, roughness: 0.15, metalness: 0.55 })),
    slate: new THREE.MeshStandardMaterial({ map: slateTex(), roughness: 0.75, metalness: 0.1 }),
    flat: mat(0x5d6166, { roughness: 0.95 }), rim: mat(0xe8e2d2, { roughness: 0.9 }), chim: mat(0xa98b62, { roughness: 0.95 }), pot: mat(0xb0603e, { roughness: 0.9 }),
    lawn: mat(0x5f8c45, { roughness: 1 }), path: mat(0xc9bc9a, { roughness: 1 }), rail: mat(0x1c1d20, { metalness: 0.4, roughness: 0.5 }), mech: C.M.mech, dark: C.M.rimDark
  };
  M.slate.map = M.slate.map.clone(); M.slate.map.needsUpdate = true; M.slate.map.repeat.set(1.2, 1.2);
  const plotM = mat(0xb8b1a3);
  // 연립주택 한 줄: 길이 len, 깊이 dep, 층수 fl, 앞(ry) 쪽이 길. 박공지붕 + 집 경계마다 굴뚝(항아리 3개)
  const terrace = (x, z, len, dep, fl, ry, m, pots) => {
    const h = fl * 0.33;
    boxWalls(B, x, 0, z, len, h, dep, ry, m, null, 2.7, h);
    roofKit(B, x, z, len, dep, h, ry, M.rim, { t: 0.05, rh: 0.07 });
    B.push(M.slate, gableGeo(x, h + 0.02, z, len, dep * 0.96, 0.42, ry));
    const n = Math.round(len / 1.35);
    for (let k = 0; k <= n; k++) {
      const off = -len / 2 + k * len / n, cx = x + Math.cos(ry) * off, cz = z - Math.sin(ry) * off;
      const st = new THREE.BoxGeometry(0.14, 0.32, 0.5); st.rotateY(ry); st.translate(cx, h + 0.36, cz); B.push(M.chim, st);
      if (pots) for (let p = -1; p <= 1; p++) { const pg = new THREE.CylinderGeometry(0.035, 0.04, 0.1, 5); pg.translate(cx + Math.sin(ry) * p * 0.14, h + 0.57, cz + Math.cos(ry) * p * 0.14); B.push(M.pot, pg); }
    }
  };
  const mansion = (x, z, w, d, h, m) => {
    boxWalls(B, x, 0, z, w, h, d, 0, m, M.flat, 2.6, h / Math.max(1, Math.round(h / 1.6)));
    roofKit(B, x, z, w, d, h, 0, M.rim, { t: 0.1, rh: 0.14 });
    if (rnd() < 0.6) B.push(M.slate, gableGeo(x, h + 0.14, z, w - 0.4, d - 0.4, 0.5, 0));
    else roofKit(B, x, z, w, d, h, 0, M.rim, { house: [w * 0.4, 0.35, d * 0.4], houseM: M.mech });
  };
  const city = (cx, cz) => cx > 20 && cz < (R ? R.z - 8 : -50) && cx < 110;   // 강 건너 북동쪽 = 시티 오브 런던
  for (let bx = -150; bx < 150; bx += 9) for (let bz = -90; bz < 90; bz += 9) {
    const cx = bx + 4.5, cz = bz + 4.5, dist = Math.hypot(cx, cz);
    if (dist > 150 || !free(cx, cz, 4)) continue;
    const pg = new THREE.PlaneGeometry(7.4, 7.4); pg.rotateX(-Math.PI / 2); pg.translate(cx, 0.006, cz); B.push(plotM, pg);
    const front = cz > b.z1 - 6 && cz < b.z1 + 34 && cx > b.x0 - 30 && cx < b.x1 + 30;
    const side = !front && cz > b.z0 - 4 && cz < b.z1 && (cx < b.x0 || cx > b.x1) && Math.min(Math.abs(cx - b.x0), Math.abs(cx - b.x1)) < 16;
    const r = rnd(), near = dist < 80;
    if (city(cx, cz)) {
      // 시티: 유리·석조 고층 1~2동
      const n = rnd.int(1, 2);
      for (let k = 0; k < n; k++) {
        const w = rnd.range(3, 4.6), d = rnd.range(3, 4.6), h = rnd.range(6, 15), x = cx + (n > 1 ? (k ? 1.8 : -1.8) : rnd.range(-1, 1)), z = cz + rnd.range(-1, 1);
        boxWalls(B, x, 0, z, w, h, d, 0, rnd() < 0.75 ? M.glass[rnd.int(0, 2)] : M.por[rnd.int(0, 2)], M.flat, 2, 3);
        roofKit(B, x, z, w, d, h, 0, M.dark, { t: 0.08, rh: 0.2, house: [w * 0.5, 0.5, d * 0.45], houseM: M.mech });
      }
      continue;
    }
    if (!front && r < 0.1) {
      // 광장 정원: 잔디 + 십자 산책로 + 검은 철책 + 플라타너스
      const g1 = new THREE.PlaneGeometry(7, 7); g1.rotateX(-Math.PI / 2); g1.translate(cx, 0.01, cz); B.push(M.lawn, g1);
      for (const [w, d] of [[7, 0.5], [0.5, 7]]) { const g2 = new THREE.PlaneGeometry(w, d); g2.rotateX(-Math.PI / 2); g2.translate(cx, 0.014, cz); B.push(M.path, g2); }
      for (const [w, d, ox, oz] of [[7, 0.04, 0, 3.5], [7, 0.04, 0, -3.5], [0.04, 7, 3.5, 0], [0.04, 7, -3.5, 0]]) { const rg = new THREE.BoxGeometry(w, 0.16, d); rg.translate(cx + ox, 0.08, cz + oz); B.push(M.rail, rg); }
      for (let k = 0; k < 9; k++) (C.cityTrees = C.cityTrees || []).push([cx + rnd.range(-3, 3), cz + rnd.range(-3, 3), rnd.range(0.9, 1.3)]);
      continue;
    }
    if (!front && !side && r < 0.38) {
      // 포틀랜드석 맨션 블록 1~2동
      const n = rnd.int(1, 2);
      for (let k = 0; k < n; k++) {
        const w = 7 / n - 0.2, x = cx - 3.5 + (k + 0.5) * 7 / n, d = rnd.range(5.4, 6.8), h = rnd.range(2.2, near ? 3.6 : 5);
        mansion(x, cz, w, d, h, M.por[rnd.int(0, 2)]);
      }
      continue;
    }
    // 연립주택: 블록 앞뒤 두 줄 (가운데 뒤뜰) + 양 끝 짧은 줄
    const v = rnd() < 0.22 ? 3 : rnd.int(0, 2), fl = front ? 3 : rnd.int(3, 4) + (side ? 0 : rnd() < 0.2 ? 1 : 0);
    for (const sz of [-1, 1]) {
      const n = rnd.int(1, 3);
      for (let k = 0; k < n; k++) {
        const len = 7.2 / n, x = cx - 3.6 + (k + 0.5) * len, vv = rnd() < 0.3 ? rnd.int(0, 3) : v;
        terrace(x, cz + sz * 2.35, len - 0.04, rnd.range(2.2, 2.6), Math.max(2, fl + (front ? 0 : rnd.int(-1, 1))), sz > 0 ? 0 : Math.PI, M.ter[vv], near);
      }
    }
    if (rnd() < 0.5) for (const sx of [-1, 1]) terrace(cx + sx * 2.95, cz, 2.2, 1.3, fl - 1, sx > 0 ? Math.PI / 2 : -Math.PI / 2, M.ter[v], false);
    if (rnd() < 0.6) for (let k = 0; k < 4; k++) (C.cityTrees = C.cityTrees || []).push([cx - 3 + k * 2, cz + 4.2, rnd.range(0.65, 0.85)]);
  }
  // 강 건너 강둑: 포틀랜드석 건물 줄 (빅토리아 제방 맞은편)
  if (R) for (let x = -150; x < 150; x += 5.2) {
    const z = R.z - R.w / 2 - 4.4;
    if (!free(x, z, 2.6)) continue;
    if (city(x + 6, z - 10)) { boxWalls(B, x, 0, z, 4.6, rnd.range(6, 12), 3.6, 0, M.glass[rnd.int(0, 2)], M.flat, 2, 3); continue; }
    mansion(x, z, 4.8, 3.6, rnd.range(2.2, 3.4), M.por[rnd.int(0, 2)]);
  }
  // 시티의 명물 빌딩: 거킨(달걀 모양 다이아그리드), 워키토키(위가 넓은 빌딩)
  const gk = [62, -78], wt = [46, -86];
  if (free(gk[0], gk[1], 3)) {
    const prof = []; for (let i = 0; i <= 16; i++) { const t = i / 16; prof.push(new THREE.Vector2(Math.max(0.05, 2.1 * Math.sin(Math.PI * (0.18 + 0.78 * t)) * (1 - t * 0.25)), t * 17)); }
    const T = canvasTex('longherkin', 128, 256, (g, w, h) => {
      g.fillStyle = '#5d7a8c'; g.fillRect(0, 0, w, h);
      for (let k = -h; k < w + h; k += 16) { g.strokeStyle = 'rgba(230,240,245,0.55)'; g.lineWidth = 2; g.beginPath(); g.moveTo(k, 0); g.lineTo(k + h * 0.5, h); g.stroke(); g.beginPath(); g.moveTo(k, 0); g.lineTo(k - h * 0.5, h); g.stroke(); }
      for (let k = 0; k < w; k += 32) { g.fillStyle = 'rgba(25,40,55,0.45)'; g.beginPath(); g.moveTo(k, h); g.lineTo(k + 10, h); g.lineTo(k + 10 + h * 0.4, 0); g.lineTo(k + h * 0.4, 0); g.fill(); }
    });
    T.repeat.set(4, 1);
    const lg = new THREE.LatheGeometry(prof, 24); lg.translate(gk[0], 0, gk[1]);
    B.push(new THREE.MeshStandardMaterial({ map: T, roughness: 0.25, metalness: 0.45 }), lg);
  }
  if (free(wt[0], wt[1], 3)) {
    const g = new THREE.BoxGeometry(4, 15, 3.2, 1, 8, 1), p = g.attributes.position;
    for (let i = 0; i < p.count; i++) { const t = (p.getY(i) + 7.5) / 15; p.setZ(i, p.getZ(i) * (0.75 + 0.55 * t * t)); if (t > 0.99 && p.getZ(i) > 0) p.setY(i, 7.5 - 0.8); }
    g.computeVertexNormals(); uvMul(g, 2, 5); g.translate(wt[0], 7.5, wt[1]); B.push(M.glass[0], g);
  }
}

// =================== 전투 구역 안 ===================
// 트래펄가 광장: 넬슨 기념탑(화강암 홈 기둥 + 청동 주두 + 넬슨상) + 받침 네 귀퉁이 사자 4마리 + 분수 2개
function nelson(G, k) {
  const add = adder(G), W = k.w, D = k.d;
  const pave = ashlarMat('lonpave', 0xc8c0b0, { rh: 20 }), gran = ashlarMat('longran', 0xb9b2a6), br = bronze(), stone = std(0xd8d1c2);
  add(sbox(W * 0.96, 0.06, D * 0.96, 0.8, 0.8), pave, 0, 0.09, 0);
  add(sbox(1.5, 0.16, 1.5, 0.8, 0.8), gran, 0, 0.2, 0);
  add(sbox(1.1, 0.7, 1.1, 0.8, 0.8), gran, 0, 0.63, 0);
  const rel = reliefMat('lonnel', 0x5d6b52);
  for (const [x, z, ry] of [[0, 0.556, 0], [0, -0.556, Math.PI], [0.556, 0, Math.PI / 2], [-0.556, 0, -Math.PI / 2]]) { const p = add(new THREE.PlaneGeometry(0.7, 0.4), rel, x, 0.6, z); p.rotation.y = ry; }
  add(new THREE.BoxGeometry(0.9, 0.14, 0.9), stone, 0, 1.05, 0);
  add(new THREE.CylinderGeometry(0.26, 0.3, 0.3, 16), gran, 0, 1.27, 0);
  add(uvMul(new THREE.CylinderGeometry(0.15, 0.18, 3.1, 16), 3, 2), fluteMat(0xc9c1b1), 0, 1.42 + 1.55, 0);
  add(new THREE.CylinderGeometry(0.26, 0.16, 0.24, 12), br, 0, 4.1, 0);
  add(new THREE.BoxGeometry(0.4, 0.06, 0.4), br, 0, 4.25, 0);
  add(new THREE.CylinderGeometry(0.11, 0.1, 0.12, 10), stone, 0, 4.34, 0);
  add(new THREE.CylinderGeometry(0.06, 0.08, 0.36, 8), stone, 0, 4.58, 0);   // 넬슨
  add(new THREE.SphereGeometry(0.05, 8, 6), stone, 0, 4.81, 0);
  add(new THREE.BoxGeometry(0.15, 0.04, 0.06), stone, 0, 4.86, 0);
  // 사자 (엎드린 청동 사자, 바깥을 봄)
  for (const [sx, sz] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) {
    const L = new THREE.Group(); L.position.set(sx * 0.95, 0.06, sz * 0.95); L.rotation.y = Math.atan2(sx, sz); G.add(L);
    const a = adder(L);
    a(sbox(0.34, 0.2, 0.6, 0.8, 0.8), gran, 0, 0.1, 0);
    a(new THREE.BoxGeometry(0.2, 0.13, 0.42), br, 0, 0.27, -0.03);
    a(new THREE.SphereGeometry(0.1, 10, 8), br, 0, 0.36, 0.18).scale.set(1, 1.05, 0.9);
    a(new THREE.BoxGeometry(0.06, 0.05, 0.18), br, -0.06, 0.23, 0.26); a(new THREE.BoxGeometry(0.06, 0.05, 0.18), br, 0.06, 0.23, 0.26);
  }
  // 분수 (둥근 수반 + 물 + 물줄기)
  const water = new THREE.MeshStandardMaterial({ color: 0x7fb1c6, roughness: 0.1, metalness: 0.3 }), jet = new THREE.MeshStandardMaterial({ color: 0xdff2ff, transparent: true, opacity: 0.55, roughness: 0.1 });
  for (const [x, z] of [[-W * 0.33, D * 0.3], [W * 0.33, D * 0.3]]) {
    add(new THREE.CylinderGeometry(0.42, 0.44, 0.14, 20), stone, x, 0.13, z);
    add(new THREE.CylinderGeometry(0.37, 0.37, 0.02, 20), water, x, 0.2, z);
    add(new THREE.CylinderGeometry(0.06, 0.1, 0.22, 10), stone, x, 0.31, z);
    add(new THREE.ConeGeometry(0.1, 0.4, 10, 1, true), jet, x, 0.6, z);
  }
  lamps(add, [[-W * 0.45, -D * 0.45], [W * 0.45, -D * 0.45], [-W * 0.45, D * 0.45], [W * 0.45, D * 0.45]]);
}
// 버킹엄 궁전: 포틀랜드석 긴 정면(벽기둥) + 가운데 기둥 현관·박공 + 발코니 + 왕실기 + 앞마당 철책 + 빅토리아 기념비(황금 천사)
function buckingham(G, k) {
  const add = adder(G), W = k.w, D = k.d;
  const fac = facadeMat('lonbuck', { wall: 0xe4dfd2, cols: 3, rows: 3, ww: 0.42, wh: 0.58, key: true, pilaster: true, glass: '#47525c', lit: 0.12 });
  const stone = ashlarMat('lonbucks', 0xe0dace), cap = std(0xebe6da), gravel = std(0xd8c8a0, { roughness: 1 });
  const bw = W * 0.94, bh = 1.35, bd = D * 0.46, bz = -D * 0.22;
  const body = new THREE.Mesh(sbox(bw, bh, bd, bw / 9, bh / 3), fac); body.position.set(0, 0.06 + bh / 2, bz); body.castShadow = body.receiveShadow = true; G.add(body);
  for (const s of [-1, 1]) add(sbox(0.9, bh + 0.08, bd + 0.24, 0.9 / 3 * 1.2, (bh + 0.08) / 3), fac, s * (bw / 2 - 0.45), 0.06 + (bh + 0.08) / 2, bz + 0.05);   // 양 끝 돌출 날개
  cornice(add, cap, bw, bd, 0.06 + bh, 0, bz, 0.06);
  for (let i = 0; i < 28; i++) add(new THREE.BoxGeometry(0.05, 0.12, 0.05), cap, -bw / 2 + 0.12 + i * (bw - 0.24) / 27, 0.06 + bh + 0.2, bz + bd / 2 + 0.04);   // 난간 동자
  add(new THREE.BoxGeometry(bw, 0.03, 0.05), cap, 0, 0.06 + bh + 0.27, bz + bd / 2 + 0.04);
  // 가운데 현관: 기둥 6개 + 박공 + 붉은 천 발코니
  const pz = bz + bd / 2 + 0.16;
  add(sbox(2.4, bh - 0.1, 0.3, 0.8, 0.8), stone, 0, 0.06 + (bh - 0.1) / 2, pz - 0.08);
  columns(add, fluteMat(0xe6e0d4), cap, 6, -1.0, 1.0, pz + 0.1, 0.36, bh - 0.4, 0.05);
  add(sbox(2.4, 0.3, 0.2, 0.8, 0.8), stone, 0, 0.06 + bh - 0.01, pz + 0.05);
  add(pediment(2.5, 0.38, 0.22), reliefMat('lonbuck', 0xe4dfd2), 0, 0.06 + bh + 0.14, pz + 0.05);
  add(new THREE.BoxGeometry(1.3, 0.04, 0.2), cap, 0, 0.42, pz + 0.24);
  add(new THREE.BoxGeometry(1.1, 0.1, 0.02), std(0xa31d24, { roughness: 0.8 }), 0, 0.37, pz + 0.34);
  add(new THREE.CylinderGeometry(0.012, 0.016, 0.9, 6), std(0xdddddd, { metalness: 0.6 }), 0, 0.06 + bh + 0.7, bz);
  const f = add(new THREE.PlaneGeometry(0.42, 0.22), new THREE.MeshStandardMaterial({ map: royalStandard(), side: THREE.DoubleSide, roughness: 0.8 }), 0.22, 0.06 + bh + 1.0, bz); f.castShadow = false;
  // 앞마당 자갈 + 금빛 꼭지 검은 철책 + 정문
  add(new THREE.BoxGeometry(bw, 0.015, D * 0.5), gravel, 0, 0.068, D * 0.24);
  const iron = std(0x1b1c1f, { metalness: 0.5, roughness: 0.45 }), gl = gold();
  add(new THREE.BoxGeometry(bw, 0.03, 0.03), iron, 0, 0.3, D * 0.36);
  for (let i = 0; i <= 40; i++) { const x = -bw / 2 + i * bw / 40; add(new THREE.BoxGeometry(0.018, 0.3, 0.018), iron, x, 0.21, D * 0.36); if (i % 4 === 0) add(new THREE.SphereGeometry(0.022, 6, 4), gl, x, 0.38, D * 0.36); }
  for (const s of [-1, 1]) add(new THREE.BoxGeometry(0.1, 0.42, 0.1), stone, s * 0.35, 0.27, D * 0.36);
  // 근위병 초소 2개 + 붉은 제복 근위병
  const red = std(0xb3202a), black = std(0x141414, { roughness: 0.9 });
  for (const x of [-1.6, 1.6]) {
    add(new THREE.BoxGeometry(0.16, 0.3, 0.16), std(0x2b2f3a), x, 0.21, D * 0.24);
    add(new THREE.ConeGeometry(0.13, 0.08, 4).rotateY(Math.PI / 4), std(0x2b2f3a), x, 0.4, D * 0.24);
    add(new THREE.CylinderGeometry(0.035, 0.04, 0.14, 8), red, x + 0.18, 0.16, D * 0.27);
    add(new THREE.CylinderGeometry(0.035, 0.03, 0.09, 8), black, x + 0.18, 0.27, D * 0.27);
  }
  // 빅토리아 기념비: 흰 대리석 단 + 황금 날개 승리의 여신
  const marble = std(0xf2efe8, { roughness: 0.5 });
  add(new THREE.CylinderGeometry(0.5, 0.56, 0.08, 20), marble, 0, 0.1, D * 0.43);
  add(new THREE.CylinderGeometry(0.24, 0.3, 0.38, 8), marble, 0, 0.33, D * 0.43);
  add(new THREE.CylinderGeometry(0.1, 0.16, 0.24, 8), marble, 0, 0.64, D * 0.43);
  add(new THREE.CylinderGeometry(0.04, 0.06, 0.18, 8), gl, 0, 0.85, D * 0.43);
  for (const s of [-1, 1]) { const wg = add(new THREE.BoxGeometry(0.16, 0.08, 0.01), gl, s * 0.08, 0.92, D * 0.43); wg.rotation.z = s * 0.6; }
  trees(G, [[-W * 0.47, D * 0.43], [W * 0.47, D * 0.43]], 1.1);
}
// 세인트 폴 대성당: 포틀랜드석 2층 본당(동서) + 십자 날개 + 서쪽 쌍탑 + 기둥 둘린 드럼 위 납 돔 + 랜턴·황금 공·십자가
function stpauls(G, k) {
  const add = adder(G), W = k.w, D = k.d;
  const fac = facadeMat('lonstp', { wall: 0xe3ddce, cols: 2, rows: 2, ww: 0.4, wh: 0.62, win: 'arch', pilaster: true, glass: '#3f4852', lit: 0.1 });
  const stone = ashlarMat('lonstps', 0xdfd8c8), cap = std(0xe9e4d8), lead = roofMat('lead'), gl = gold(), fl = fluteMat(0xe2dccd);
  const nl = W * 0.78, nh = 1.75, nd = D * 0.36, nx = W * 0.04;
  add(sbox(nl, nh, nd, 1.0, nh / 2), fac, nx, 0.06 + nh / 2, 0);
  cornice(add, cap, nl, nd, 0.06 + nh, nx, 0, 0.05);
  add(gableGeo(nx, 0.06 + nh + 0.08, 0, nl - 0.1, nd * 0.9, 0.3, 0), lead);
  // 십자 날개 + 반원 현관
  const tx = W * 0.1;
  add(sbox(1.3, nh, D * 0.86, 0.65, nh / 2), fac, tx, 0.06 + nh / 2, 0);
  cornice(add, cap, 1.3, D * 0.86, 0.06 + nh, tx, 0, 0.05);
  add(gableGeo(tx, 0.06 + nh + 0.08, 0, D * 0.82, 1.2, 0.3, Math.PI / 2), lead);
  const port = add(new THREE.CylinderGeometry(0.42, 0.42, 0.9, 16, 1, false, 0, Math.PI), stone, tx, 0.51, D * 0.43); port.rotation.y = -Math.PI / 2;
  columns(add, fl, cap, 4, tx - 0.36, tx + 0.36, D * 0.43 + 0.36, 0.06, 0.85, 0.035);
  // 동쪽 반원 후진(애프스)
  add(new THREE.CylinderGeometry(nd / 2, nd / 2, nh * 0.85, 16, 1, false, 0, Math.PI), fac, nx + nl / 2, 0.06 + nh * 0.425, 0);
  // 서쪽 정면: 2단 기둥 현관 + 박공 + 쌍탑
  const wx = nx - nl / 2;
  for (let i = 0; i < 6; i++) { const z = -nd * 0.42 + i * nd * 0.84 / 5; columns(add, fl, cap, 1, wx - 0.3, wx - 0.3, z, 0.06, 0.82, 0.045); columns(add, fl, cap, 1, wx - 0.3, wx - 0.3, z, 0.92, 0.7, 0.04); }
  add(sbox(0.45, 0.08, nd * 1.0, 0.8, 0.8), cap, wx - 0.25, 0.9, 0);
  const ped = add(pediment(nd * 1.0, 0.36, 0.4), reliefMat('lonstp', 0xe3ddce), wx - 0.22, 1.62, 0); ped.rotation.y = -Math.PI / 2;
  for (const s of [-1, 1]) {
    const z = s * (nd / 2 + 0.22);
    add(sbox(0.62, 2.0, 0.62, 0.62, 1.0), fac, wx + 0.05, 0.06 + 1.0, z);
    cornice(add, cap, 0.62, 0.62, 2.06, wx + 0.05, z, 0.04);
    add(new THREE.CylinderGeometry(0.24, 0.26, 0.55, 12), stone, wx + 0.05, 2.42, z);
    for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2; add(new THREE.CylinderGeometry(0.025, 0.025, 0.5, 6), cap, wx + 0.05 + Math.cos(a) * 0.29, 2.42, z + Math.sin(a) * 0.29); }
    add(new THREE.CylinderGeometry(0.13, 0.27, 0.35, 12), lead, wx + 0.05, 2.87, z);
    add(new THREE.CylinderGeometry(0.06, 0.08, 0.3, 8), stone, wx + 0.05, 3.18, z);
    add(new THREE.SphereGeometry(0.07, 8, 6), gl, wx + 0.05, 3.38, z);
  }
  // 돔: 받침 → 기둥 둘린 드럼 → 위 드럼 → 납 돔(갈빗대) → 랜턴 → 황금 공·십자가
  let y = 0.06 + nh;
  add(new THREE.CylinderGeometry(1.0, 1.05, 0.28, 32), stone, tx, y + 0.14, 0); y += 0.28;
  const drum = facadeMat('lonstpd', { wall: 0xe3ddce, cols: 8, rows: 1, ww: 0.35, wh: 0.6, win: 'arch', band: false, glass: '#3a434c' });
  add(uvMul(new THREE.CylinderGeometry(0.78, 0.8, 0.85, 32), 3, 1), drum, tx, y + 0.425, 0);
  for (let i = 0; i < 24; i++) { const a = i / 24 * Math.PI * 2; add(new THREE.CylinderGeometry(0.035, 0.04, 0.78, 6), cap, tx + Math.cos(a) * 0.96, y + 0.39, Math.sin(a) * 0.96); }
  add(new THREE.CylinderGeometry(1.0, 1.0, 0.07, 32), cap, tx, y + 0.82, 0); y += 0.85;
  add(new THREE.CylinderGeometry(0.76, 0.78, 0.32, 32), drum, tx, y + 0.16, 0); y += 0.32;
  const dome = add(new THREE.SphereGeometry(0.78, 32, 14, 0, Math.PI * 2, 0, Math.PI / 2), lead, tx, y, 0); dome.scale.y = 1.2; y += 0.78 * 1.2;
  add(new THREE.CylinderGeometry(0.16, 0.18, 0.4, 12), cap, tx, y + 0.2, 0);
  for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2; add(new THREE.CylinderGeometry(0.018, 0.018, 0.36, 5), cap, tx + Math.cos(a) * 0.19, y + 0.2, Math.sin(a) * 0.19); }
  add(new THREE.ConeGeometry(0.17, 0.3, 12), lead, tx, y + 0.55, 0);
  add(new THREE.SphereGeometry(0.07, 10, 8), gl, tx, y + 0.76, 0);
  add(new THREE.BoxGeometry(0.03, 0.22, 0.03), gl, tx, y + 0.92, 0); add(new THREE.BoxGeometry(0.12, 0.03, 0.03), gl, tx, y + 0.96, 0);
  trees(G, [[W * 0.42, D * 0.4], [W * 0.42, -D * 0.4], [-W * 0.18, D * 0.42]], 1);
}
// 피커딜리 서커스: 곡면 대형 전광판이 걸린 모퉁이 건물 + 에로스(섀프츠베리) 분수 + 빨간 2층 버스 + 빨간 공중전화 박스
function piccadilly(G, k) {
  const add = adder(G), W = k.w, D = k.d;
  const bbT = canvasTex('lonbb', 512, 160, (g, w, h) => {
    const rnd = makeRng('lonbb');
    g.fillStyle = '#0d0f12'; g.fillRect(0, 0, w, h);
    const words = ['LONDON', 'THEATRE', 'TEA', '2030', 'MUSICAL', 'CINEMA', 'NEWS', 'SALE', 'COLA', 'PHONE'], cols = ['#e63946', '#f1c40f', '#2ecc71', '#3498db', '#ff6bd6', '#ff8c1a', '#ffffff', '#00d1d1'];
    let x = 0;
    while (x < w) {
      const pw = 60 + rnd() * 120, rows = rnd() < 0.5 ? 1 : 2;
      for (let r = 0; r < rows; r++) {
        const y = r * h / rows, ph = h / rows, c1 = cols[Math.floor(rnd() * cols.length)];
        const gr = g.createLinearGradient(x, y, x + pw, y + ph); gr.addColorStop(0, c1); gr.addColorStop(1, cols[Math.floor(rnd() * cols.length)]);
        g.fillStyle = gr; g.fillRect(x + 2, y + 2, pw - 4, ph - 4);
        g.fillStyle = 'rgba(0,0,0,0.2)'; for (let yy = y; yy < y + ph; yy += 3) g.fillRect(x, yy, pw, 1);
        g.fillStyle = rnd() < 0.5 ? '#111' : '#fff'; g.font = `bold ${Math.floor(ph * 0.4)}px "Arial Black",sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle';
        g.fillText(words[Math.floor(rnd() * words.length)], x + pw / 2, y + ph / 2, pw - 10);
      }
      x += pw;
    }
  });
  const bb = new THREE.MeshStandardMaterial({ map: bbT, emissiveMap: bbT, emissive: 0xffffff, emissiveIntensity: 0.95, roughness: 0.35 });
  const shopM = emis(shopTex(1), { emissiveIntensity: 0.4 }), shopM2 = emis(shopTex(4), { emissiveIntensity: 0.4 }), cap = std(0xe2dccb), slate = new THREE.MeshStandardMaterial({ map: slateTex(), roughness: 0.75 });
  // 뒤쪽 건물 2동 + 모퉁이 곡면 (런던 파빌리온)
  const bz = -D * 0.28, bh = 1.6;
  add(sbox(W * 0.42, bh, D * 0.4, 1, 1.5), shopM, -W * 0.27, 0.06 + bh / 2, bz);
  add(sbox(W * 0.34, bh * 0.9, D * 0.4, 1, 1.5), shopM2, W * 0.32, 0.06 + bh * 0.45, bz);
  cornice(add, cap, W * 0.42, D * 0.4, 0.06 + bh, -W * 0.27, bz, 0.04);
  add(gableGeo(-W * 0.27, 0.06 + bh + 0.08, bz, W * 0.42, D * 0.38, 0.3, 0), slate);
  const R = D * 0.2, cx = -W * 0.06, cz = bz;
  add(new THREE.CylinderGeometry(R, R, bh, 20, 1, false, 0, Math.PI), ashlarMat('lonpicc', 0xd9d0bc), cx, 0.06 + bh / 2, cz);
  add(new THREE.CylinderGeometry(R + 0.03, R + 0.03, bh * 0.55, 24, 1, true, 0, Math.PI), bb, cx, 0.06 + bh * 0.62, cz);
  add(sbox(W * 0.28, bh * 0.55, 0.04, W * 0.28, bh * 0.55), bb, -W * 0.27 + W * 0.07, 0.06 + bh * 0.62, bz + D * 0.2 + 0.03);
  // 에로스 분수: 팔각 청동 수반 + 받침 + 은빛 궁수
  const br = bronze(), alu = std(0xd8dde2, { metalness: 0.85, roughness: 0.25 }), fx = W * 0.05, fz = D * 0.18;
  add(new THREE.CylinderGeometry(0.42, 0.46, 0.1, 8), std(0x9a9488), fx, 0.11, fz);
  add(new THREE.CylinderGeometry(0.34, 0.36, 0.16, 8), br, fx, 0.24, fz);
  add(new THREE.CylinderGeometry(0.06, 0.12, 0.5, 8), br, fx, 0.57, fz);
  add(new THREE.CylinderGeometry(0.035, 0.04, 0.18, 6), alu, fx, 0.91, fz);
  add(new THREE.SphereGeometry(0.035, 6, 5), alu, fx, 1.03, fz);
  const wing = add(new THREE.BoxGeometry(0.2, 0.06, 0.01), alu, fx, 0.96, fz); wing.rotation.z = 0.3;
  const bow = add(new THREE.TorusGeometry(0.08, 0.008, 4, 10, Math.PI), alu, fx + 0.06, 0.96, fz); bow.rotation.z = -Math.PI / 2;
  // 빨간 2층 버스 (루트마스터)
  const busT = canvasTex('lonbus', 256, 96, (g, w, h) => {
    g.fillStyle = '#c4161c'; g.fillRect(0, 0, w, h);
    for (const [y, hh] of [[10, 26], [52, 24]]) { g.fillStyle = '#20262c'; g.fillRect(8, y, w - 16, hh); g.fillStyle = 'rgba(180,210,230,0.35)'; for (let x = 8; x < w - 8; x += 30) g.fillRect(x + 2, y + 2, 26, hh - 4); }
    g.fillStyle = '#f1e6c8'; g.fillRect(0, 44, w, 4);
    g.fillStyle = '#f1e6c8'; g.font = 'bold 12px Georgia,serif'; g.textAlign = 'center'; g.fillText('LONDON TRANSPORT', w / 2, 92);
  });
  const busM = new THREE.MeshStandardMaterial({ map: busT, roughness: 0.45, metalness: 0.15 }), redM = std(0xc4161c, { roughness: 0.45 }), tyre = std(0x161616);
  const bus = new THREE.Group(); bus.position.set(W * 0.3, 0.06, D * 0.34); bus.rotation.y = 0.08; G.add(bus);
  const ab = adder(bus);
  ab(new THREE.BoxGeometry(1.05, 0.46, 0.3), [redM, redM, redM, redM, busM, busM], 0, 0.3, 0);
  ab(new THREE.BoxGeometry(1.03, 0.03, 0.28), std(0xe8e2d2), 0, 0.545, 0);
  for (const [x, z] of [[-0.34, 0.15], [0.34, 0.15], [-0.34, -0.15], [0.34, -0.15]]) { const t = ab(new THREE.CylinderGeometry(0.07, 0.07, 0.05, 10), tyre, x, 0.07, z); t.rotation.x = Math.PI / 2; }
  // 빨간 공중전화 박스 2개 (둥근 지붕 + 창살)
  const boxT = canvasTex('lonkiosk', 64, 128, (g, w, h) => {
    g.fillStyle = '#c4161c'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#1b1d20'; g.fillRect(6, 4, w - 12, 12); g.fillStyle = '#f2f0e6'; g.font = 'bold 9px sans-serif'; g.textAlign = 'center'; g.fillText('TELEPHONE', w / 2, 13);
    g.fillStyle = '#2a3238'; g.fillRect(10, 24, w - 20, h - 40); g.fillStyle = '#c4161c'; for (let r = 1; r < 6; r++) g.fillRect(10, 24 + r * (h - 40) / 6, w - 20, 3); g.fillRect(w / 2 - 1.5, 24, 3, h - 40);
  });
  const kM = new THREE.MeshStandardMaterial({ map: boxT, roughness: 0.5 });
  for (const [x, z] of [[-W * 0.42, D * 0.38], [-W * 0.34, D * 0.38]]) {
    add(new THREE.BoxGeometry(0.15, 0.36, 0.15), [kM, kM, redM, redM, kM, kM], x, 0.24, z);
    add(new THREE.CylinderGeometry(0.085, 0.085, 0.15, 12, 1, false, 0, Math.PI).rotateZ(Math.PI / 2), redM, x, 0.42, z);
  }
  lamps(add, [[-W * 0.12, D * 0.45], [W * 0.46, -D * 0.05]]);
}

// =================== 가장자리 큰 랜드마크 ===================
const ANSTON = 0xd0bd8c;   // 국회의사당 노란 석회암
function clockTex() {
  return canvasTex('lonclock', 128, 128, (g, w, h) => {
    g.fillStyle = '#c9a54a'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#2c2a26'; g.fillRect(6, 6, w - 12, h - 12);
    g.fillStyle = '#f4efdc'; g.beginPath(); g.arc(64, 64, 50, 0, 7); g.fill();
    g.strokeStyle = '#1c1c1c'; g.lineWidth = 3; g.beginPath(); g.arc(64, 64, 50, 0, 7); g.stroke();
    for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2; g.lineWidth = 4; g.beginPath(); g.moveTo(64 + Math.cos(a) * 38, 64 + Math.sin(a) * 38); g.lineTo(64 + Math.cos(a) * 47, 64 + Math.sin(a) * 47); g.stroke(); }
    g.lineWidth = 2; for (let i = 0; i < 12; i++) { const a = (i + 0.5) / 12 * Math.PI * 2; g.beginPath(); g.moveTo(64 + Math.cos(a) * 20, 64 + Math.sin(a) * 20); g.lineTo(64 + Math.cos(a) * 34, 64 + Math.sin(a) * 34); g.stroke(); }
    g.lineWidth = 4; g.beginPath(); g.moveTo(64, 64); g.lineTo(64, 26); g.moveTo(64, 64); g.lineTo(88, 72); g.stroke();
    g.fillStyle = '#c9a54a'; for (const [x, y] of [[14, 14], [114, 14], [14, 114], [114, 114]]) { g.beginPath(); g.arc(x, y, 6, 0, 7); g.fill(); }
  });
}
// 국회의사당: 긴 고딕 정면 + 수직 첨탑 줄 + 가파른 납 지붕 + 가운데 팔각 탑 + 서쪽 빅토리아 탑 + 동쪽 엘리자베스 탑(빅벤)
function westminster() {
  const G = new THREE.Group(), add = adder(G);
  const fac = facadeMat('lonwm', { wall: ANSTON, cols: 4, rows: 3, ww: 0.36, wh: 0.7, win: 'gothic', pilaster: true, glass: '#3b444d', lit: 0.12 });
  const panel = facadeMat('lonwmp', { wall: ANSTON, cols: 2, rows: 4, ww: 0.3, wh: 0.78, win: 'gothic', pilaster: true, glass: '#3e4750' });
  const stone = ashlarMat('lonwms', ANSTON), lead = roofMat('lead'), gl = gold(), slate = std(0x3b4650, { roughness: 0.6, metalness: 0.3 });
  const L = 22, H = 2.4, D = 3.6;
  add(sbox(L, H, D, 2.0, H / 3), fac, 0, H / 2, 0);
  add(sbox(L - 4, 0.9, D * 0.7, 1.0, 0.9), panel, 0, H + 0.45, -0.3);
  add(gableGeo(0, H + 0.9, -0.3, L - 4, D * 0.7, 0.8, 0), lead);
  for (const s of [-1, 1]) add(gableGeo(s * (L / 2 - 1), H, 0, 2, D, 0.7, 0), lead);
  for (let i = 0; i <= 26; i++) { const x = -L / 2 + i * L / 26; add(new THREE.BoxGeometry(0.1, 0.5, 0.1), stone, x, H + 0.25, D / 2); add(new THREE.ConeGeometry(0.07, 0.3, 4), stone, x, H + 0.65, D / 2); }
  for (let i = 0; i <= 18; i++) { const x = -(L - 4) / 2 + i * (L - 4) / 18; add(new THREE.ConeGeometry(0.06, 0.35, 4), stone, x, H + 1.07, D * 0.05); }
  // 가운데 팔각 탑
  add(uvMul(new THREE.CylinderGeometry(0.85, 0.9, 3.0, 8), 4, 2), panel, 0.6, H + 1.5, -0.3);
  add(new THREE.ConeGeometry(0.88, 2.4, 8), slate, 0.6, H + 3 + 1.2, -0.3);
  add(new THREE.SphereGeometry(0.08, 6, 5), gl, 0.6, H + 5.5, -0.3);
  // 빅토리아 탑 (서쪽 끝, 넓고 각진 탑 + 모서리 첨탑 + 국기)
  const vx = -L / 2 + 1.2;
  add(sbox(2.4, 8.6, 2.4, 1.2, 1.4), panel, vx, 4.3, 0);
  cornice(add, stone, 2.4, 2.4, 8.6, vx, 0, 0.08);
  for (const [sx, sz] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) { add(new THREE.CylinderGeometry(0.2, 0.22, 9.6, 8), stone, vx + sx * 1.15, 4.8, sz * 1.15); add(new THREE.ConeGeometry(0.24, 0.9, 8), slate, vx + sx * 1.15, 10.05, sz * 1.15); add(new THREE.SphereGeometry(0.06, 6, 4), gl, vx + sx * 1.15, 10.55, sz * 1.15); }
  add(new THREE.ConeGeometry(1.2, 0.8, 4).rotateY(Math.PI / 4), slate, vx, 9.05, 0);
  add(new THREE.CylinderGeometry(0.03, 0.04, 2.2, 6), std(0xdddddd), vx, 10.5, 0);
  const flag = add(new THREE.PlaneGeometry(1.1, 0.55), new THREE.MeshStandardMaterial({ map: unionJack(), side: THREE.DoubleSide, roughness: 0.8 }), vx + 0.56, 11.25, 0); flag.castShadow = false;
  // 엘리자베스 탑 (빅벤): 탑신 → 시계 단(4면 시계) → 종루 → 뾰족 지붕 + 금 장식
  const bx = L / 2 + 0.6, bz = 0.6, bw = 1.5;
  add(sbox(bw + 0.2, 0.6, bw + 0.2, 0.8, 0.6), stone, bx, 0.3, bz);
  add(sbox(bw, 7.6, bw, bw / 2, 1.0), panel, bx, 0.6 + 3.8, bz);
  const cy = 8.2, cw = bw + 0.24;
  add(sbox(cw, 1.4, cw, 0.8, 0.7), stone, bx, cy + 0.7, bz);
  const cm = new THREE.MeshStandardMaterial({ map: clockTex(), emissiveMap: clockTex(), emissive: 0x6a5a30, emissiveIntensity: 0.6, roughness: 0.6 });
  for (const [ox, oz, ry] of [[0, 1, 0], [0, -1, Math.PI], [1, 0, Math.PI / 2], [-1, 0, -Math.PI / 2]]) { const p = add(new THREE.PlaneGeometry(cw * 0.86, cw * 0.86), cm, bx + ox * (cw / 2 + 0.01), cy + 0.7, bz + oz * (cw / 2 + 0.01)); p.rotation.y = ry; p.castShadow = false; }
  for (const [sx, sz] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) add(new THREE.ConeGeometry(0.1, 0.5, 4), stone, bx + sx * cw / 2, cy + 1.65, bz + sz * cw / 2);
  // 종루: 아치 창 + 금 테두리
  const bel = canvasTex('lonbelfry', 128, 64, (g, w, h) => { g.fillStyle = '#c4a96e'; g.fillRect(0, 0, w, h); for (let i = 0; i < 3; i++) { const x = 10 + i * 40; g.fillStyle = '#1e1d1b'; g.beginPath(); g.moveTo(x, h - 6); g.lineTo(x, 22); g.quadraticCurveTo(x, 6, x + 14, 4); g.quadraticCurveTo(x + 28, 6, x + 28, 22); g.lineTo(x + 28, h - 6); g.fill(); g.fillStyle = '#d8b04a'; g.fillRect(x + 13, 6, 2, h - 12); } g.fillStyle = '#d8b04a'; g.fillRect(0, 0, w, 4); g.fillRect(0, h - 4, w, 4); });
  add(new THREE.BoxGeometry(bw + 0.05, 1.0, bw + 0.05), new THREE.MeshStandardMaterial({ map: bel, roughness: 0.6, metalness: 0.2 }), bx, cy + 1.4 + 0.5, bz);
  add(new THREE.ConeGeometry(bw * 0.78, 2.2, 4).rotateY(Math.PI / 4), slate, bx, cy + 2.4 + 1.1, bz);
  for (const y of [cy + 2.9, cy + 3.5]) { const s = 1 - (y - cy - 2.4) / 2.2; add(new THREE.BoxGeometry(bw * 1.1 * s + 0.04, 0.06, bw * 1.1 * s + 0.04), gl, bx, y, bz); }
  add(new THREE.CylinderGeometry(0.03, 0.06, 0.7, 6), gl, bx, cy + 4.85, bz);
  add(new THREE.SphereGeometry(0.06, 6, 5), gl, bx, cy + 5.25, bz);
  return G;
}
// 타워 브리지: 강 위 고딕 쌍탑(네 귀퉁이 작은 탑) + 위층 파란 보행 다리 + 도개교 + 강가로 늘어진 파란 쇠사슬
function towerbridge(L, city) {
  const G = new THREE.Group(), add = adder(G), w = (city.S.river || {}).w || 8;
  const stone = ashlarMat('lontbs', 0xd7cfbd), fac = facadeMat('lontb', { wall: 0xd7cfbd, cols: 2, rows: 4, ww: 0.34, wh: 0.7, win: 'gothic', glass: '#3c454e' });
  const blue = std(0x5d93c8, { roughness: 0.5, metalness: 0.3 }), white = std(0xeef0f0), slate = std(0x40505c, { roughness: 0.55, metalness: 0.3 }), gl = gold();
  const latT = canvasTex('lontblat', 128, 32, (g, w2, h) => { g.fillStyle = '#5d93c8'; g.fillRect(0, 0, w2, h); g.strokeStyle = '#eef2f4'; g.lineWidth = 3; g.strokeRect(1, 1, w2 - 2, h - 2); for (let x = 0; x < w2; x += 16) { g.beginPath(); g.moveTo(x, 2); g.lineTo(x + 16, h - 2); g.moveTo(x + 16, 2); g.lineTo(x, h - 2); g.stroke(); } });
  latT.repeat.set(3, 1);
  const lat = new THREE.MeshStandardMaterial({ map: latT, roughness: 0.5, metalness: 0.2 });
  const tz = w / 2 - 1.4, th = 6.4;
  for (const s of [-1, 1]) {
    const z = s * tz;
    add(sbox(2.4, 1.2, 2.2, 0.8, 0.8), stone, 0, -0.3, z);               // 교각
    add(sbox(1.7, th, 1.7, 0.85, th / 4), fac, 0, th / 2, z);
    for (const [sx, sz] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) {
      add(new THREE.CylinderGeometry(0.22, 0.24, th + 0.6, 8), stone, sx * 0.85, (th + 0.6) / 2, z + sz * 0.85);
      add(new THREE.ConeGeometry(0.26, 0.9, 8), slate, sx * 0.85, th + 1.05, z + sz * 0.85);
      add(new THREE.SphereGeometry(0.05, 6, 4), gl, sx * 0.85, th + 1.55, z + sz * 0.85);
    }
    add(new THREE.ConeGeometry(0.95, 1.5, 4).rotateY(Math.PI / 4), slate, 0, th + 0.75, z);
    add(new THREE.CylinderGeometry(0.03, 0.05, 0.6, 6), gl, 0, th + 1.8, z);
  }
  // 위층 보행 다리 2줄
  for (const x of [-0.55, 0.55]) add(uvMul(new THREE.BoxGeometry(0.32, 0.55, tz * 2 - 1.7), 1, 3), lat, x, th - 1.0, 0);
  // 도로 상판 (탑 사이 + 양쪽 강가까지)
  const span = tz * 2 + 9;
  add(new THREE.BoxGeometry(2.4, 0.28, span), blue, 0, 0.42, 0);
  add(new THREE.PlaneGeometry(2.1, span).rotateX(-Math.PI / 2), std(0x55585d), 0, 0.57, 0);
  for (const sx of [-1, 1]) add(new THREE.BoxGeometry(0.06, 0.2, span), white, sx * 1.18, 0.66, 0);
  // 쇠사슬 (탑 꼭대기 근처 → 강가 낮은 탑)
  for (const s of [-1, 1]) for (const sx of [-1, 1]) {
    const pts = [[sx * 0.95, th - 1.6, s * (tz + 0.8)], [sx * 1.05, 2.2, s * (tz + 2.6)], [sx * 1.1, 1.1, s * (tz + 4.0)], [sx * 1.1, 2.0, s * (tz + 5.6)]].map(([x, y, z]) => new THREE.Vector3(x, y, z));
    add(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 16, 0.09, 6, false), blue);
    for (let i = 1; i < 6; i++) { const z = s * (tz + 0.8 + i * 0.85), y = new THREE.CatmullRomCurve3(pts).getPoint(i / 6).y; add(new THREE.BoxGeometry(0.03, y - 0.6, 0.03), blue, sx * 1.05, 0.6 + (y - 0.6) / 2, z); }
  }
  for (const s of [-1, 1]) { add(sbox(0.9, 2.4, 0.9, 0.8, 0.8), stone, -1.4, 1.2, s * (tz + 5.6)); add(sbox(0.9, 2.4, 0.9, 0.8, 0.8), stone, 1.4, 1.2, s * (tz + 5.6)); }
  return G;
}
// 런던 아이: 흰 큰 바퀴(테 2줄 + 바큇살 + 유리 캡슐 32개) + 한쪽으로 기운 A자 받침. 천천히 돎
function londoneye(L, city) {
  const G = new THREE.Group(), add = adder(G), R = 6.6, cy = R + 0.9;
  const white = std(0xf1f3f4, { roughness: 0.4, metalness: 0.4 }), cable = std(0xc9cdd0, { metalness: 0.5 });
  const wheel = new THREE.Group(); wheel.position.set(0, cy, 0); G.add(wheel);
  const aw = adder(wheel);
  aw(new THREE.TorusGeometry(R, 0.09, 6, 72), white); aw(new THREE.TorusGeometry(R - 0.45, 0.05, 6, 72), white);
  for (let i = 0; i < 64; i++) { const a = i / 64 * Math.PI * 2, m = aw(new THREE.CylinderGeometry(0.02, 0.02, 0.45, 4), white, Math.cos(a) * (R - 0.22), Math.sin(a) * (R - 0.22), 0); m.rotation.z = a + Math.PI / 2; }
  for (let i = 0; i < 32; i++) { const a = i / 32 * Math.PI * 2, m = aw(new THREE.CylinderGeometry(0.012, 0.012, R - 0.5, 3), cable, Math.cos(a) * (R - 0.5) / 2, Math.sin(a) * (R - 0.5) / 2, 0); m.rotation.z = a - Math.PI / 2; }
  const capM = new THREE.MeshStandardMaterial({ color: 0xcfe2ec, roughness: 0.1, metalness: 0.4, emissive: 0x203038, transparent: true, opacity: 0.92 });
  for (let i = 0; i < 32; i++) { const a = i / 32 * Math.PI * 2, c = aw(new THREE.SphereGeometry(0.26, 10, 8), capM, Math.cos(a) * (R + 0.28), Math.sin(a) * (R + 0.28), 0.2); c.scale.set(1.3, 0.85, 0.85); }
  aw(new THREE.CylinderGeometry(0.35, 0.35, 0.8, 16).rotateX(Math.PI / 2), white);
  // A자 받침: 앞(남)쪽에서 기울어 바퀴 축을 받침
  for (const sx of [-1, 1]) {
    const a = new THREE.Vector3(sx * 3.2, 0, 4.2), b = new THREE.Vector3(0, cy, 0.5), len = a.distanceTo(b);
    const m = add(new THREE.CylinderGeometry(0.14, 0.2, len, 8), white, (a.x + b.x) / 2, (a.y + b.y) / 2, (a.z + b.z) / 2);
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), b.clone().sub(a).normalize());
  }
  add(new THREE.BoxGeometry(7.4, 0.3, 1.2), ashlarMat('loneye', 0xbdb6a8), 0, 0.15, 4.2);
  city.anim.push((dt) => { wheel.rotation.z += dt * 0.025; });
  return G;
}
// 더 샤드: 위로 갈수록 뾰족해지는 유리 조각 8장 (꼭대기는 조각들이 벌어져 갈라짐)
function shard() {
  const G = new THREE.Group(), add = adder(G), T = glassTex('shard', ['#c3d3dc', '#6f8797']);
  const gm = new THREE.MeshStandardMaterial({ map: T.map, emissiveMap: T.emissiveMap, emissive: 0xffffff, emissiveIntensity: 0.3, roughness: 0.08, metalness: 0.6, side: THREE.DoubleSide });
  const H = 24, a0 = 2.6;
  const P = [], U = [];
  const quad = (p0, p1, p2, p3, uw, uh) => { P.push(...p0, ...p1, ...p2, ...p0, ...p2, ...p3); U.push(0, 0, uw, 0, uw, uh, 0, 0, uw, uh, 0, uh); };
  for (let s = 0; s < 4; s++) {
    const ry = s * Math.PI / 2, c = Math.cos(ry), sn = Math.sin(ry);
    const tr = (x, y, z) => [x * c + z * sn, y, -x * sn + z * c];
    for (const half of [-1, 1]) {
      const top = H * (half > 0 ? 1 : 0.9) - s * 0.5, out = 0.12 * half;
      const xb0 = half < 0 ? -a0 : 0.1, xb1 = half < 0 ? -0.1 : a0, k = 1 - top / H * 0.97;
      quad(tr(xb0, 0, a0 + out), tr(xb1, 0, a0 + out), tr(xb1 * k, top, a0 * k + out + 0.15), tr(xb0 * k, top, a0 * k + out + 0.15), a0 / 3, top / 4);
    }
  }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(U, 2)); g.computeVertexNormals();
  add(g, gm);
  add(new THREE.CylinderGeometry(0.3, a0 * 0.85, H * 0.9, 4, 1).rotateY(Math.PI / 4), new THREE.MeshStandardMaterial({ map: T.map, emissiveMap: T.emissiveMap, emissive: 0xffffff, emissiveIntensity: 0.25, roughness: 0.2, metalness: 0.4 }), 0, H * 0.45, 0);
  add(new THREE.BoxGeometry(6.4, 1.0, 6.4), std(0x9aa3aa, { metalness: 0.3 }), 0, 0.6, 0);
  return G;
}

export default {
  build,
  field: { nelson, buckingham, stpauls, piccadilly },
  edge: {
    westminster: { r: 12, build: westminster }, towerbridge: { r: 9, build: towerbridge },
    londoneye: { r: 9, build: londoneye }, shard: { r: 6, build: shard }
  },
  gate: { wall: 0xd6cfbf, cap: 0xe6e0d2 }, water: 0x7f9488, riverWall: 0xb7ad97, riverWalk: 0x9c968a, riverTrees: true,
  bridges: [[-44, 'stone', 0xd2cab6], [10, 'arch', 0x3f7a55], [64, 'suspension', 0x9aa8b4]],
  shop: shopTex, shopVariants: [0, 1, 2, 3, 4, 5], shopTV: 1.5, stoneTall: true
};
