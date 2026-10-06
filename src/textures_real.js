// 실사풍 바닥 재질 (코드로 그림): 잔디·아스팔트 도로·보도블록·콘크리트
// 각 함수는 { map: 색 그림, bump: 울퉁불퉁 높이 그림 } 을 돌려줌. 이음매 없이 반복되도록 노이즈를 감아서 만듦
import * as THREE from 'three';
import { makeRng } from './textures.js';

const cache = {};

// 이음매 없는 값 노이즈 (cell 칸 격자, 가장자리끼리 이어짐)
function tileNoise(w, h, cellsX, cellsY, rnd) {
  const g = new Float32Array((cellsX + 1) * (cellsY + 1));
  for (let y = 0; y <= cellsY; y++) for (let x = 0; x <= cellsX; x++) g[y * (cellsX + 1) + x] = rnd();
  for (let y = 0; y <= cellsY; y++) g[y * (cellsX + 1) + cellsX] = g[y * (cellsX + 1)];
  for (let x = 0; x <= cellsX; x++) g[cellsY * (cellsX + 1) + x] = g[x];
  const out = new Float32Array(w * h), sm = (t) => t * t * (3 - 2 * t);
  for (let y = 0; y < h; y++) {
    const fy = y / h * cellsY, iy = Math.floor(fy), ty = sm(fy - iy);
    for (let x = 0; x < w; x++) {
      const fx = x / w * cellsX, ix = Math.floor(fx), tx = sm(fx - ix);
      const a = g[iy * (cellsX + 1) + ix], b = g[iy * (cellsX + 1) + ix + 1];
      const c = g[(iy + 1) * (cellsX + 1) + ix], d = g[(iy + 1) * (cellsX + 1) + ix + 1];
      out[y * w + x] = (a + (b - a) * tx) * (1 - ty) + (c + (d - c) * tx) * ty;
    }
  }
  return out;
}
// 여러 크기 노이즈를 겹침 (큰 얼룩 + 잔 무늬)
function fbm(w, h, base, oct, rnd, aspect = 1) {
  const out = new Float32Array(w * h); let amp = 1, tot = 0;
  for (let o = 0; o < oct; o++) {
    const c = base << o, n = tileNoise(w, h, Math.max(1, Math.round(c * aspect)), c, rnd);
    for (let i = 0; i < out.length; i++) out[i] += n[i] * amp;
    tot += amp; amp *= 0.55;
  }
  for (let i = 0; i < out.length; i++) out[i] /= tot;
  return out;
}
const clamp = (v) => (v < 0 ? 0 : v > 255 ? 255 : v);

function build(key, w, h, paint) {
  if (cache[key]) return cache[key];
  const mk = () => { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; };
  const cc = mk(), bc = mk(), cg = cc.getContext('2d'), bg = bc.getContext('2d');
  const col = cg.createImageData(w, h), hgt = bg.createImageData(w, h);
  paint(col.data, hgt.data, cg, bg);
  cg.putImageData(col, 0, 0); bg.putImageData(hgt, 0, 0);
  if (paint.after) paint.after(cg, bg);
  const map = new THREE.CanvasTexture(cc); map.colorSpace = THREE.SRGBColorSpace;
  const bump = new THREE.CanvasTexture(bc);
  for (const t of [map, bump]) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8; }
  return (cache[key] = { map, bump });
}

// 잔디: 자연스러운 녹색 + 넓은 얼룩 + 아주 옅은 잔디깎기 줄무늬 + 마른 자리
export function realLawn() {
  const S = 512;
  return build('lawn', S, S, (c, hb) => {
    const rnd = makeRng('rlawn');
    const big = fbm(S, S, 2, 3, rnd), mid = fbm(S, S, 8, 3, rnd), fine = fbm(S, S, 64, 2, rnd), dry = fbm(S, S, 3, 3, rnd);
    for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
      const i = y * S + x, p = i * 4;
      const blade = rnd();
      const stripe = Math.sin((y / S) * Math.PI * 4) > 0 ? 1.035 : 0.965;
      let l = (0.72 + big[i] * 0.32 + (mid[i] - 0.5) * 0.25 + (fine[i] - 0.5) * 0.3 + (blade - 0.5) * 0.22) * stripe;
      const d = Math.max(0, (dry[i] - 0.58) * 3.2);     // 마른 잔디 (누런 자리)
      let r = 78 * l, g = 104 * l, b = 50 * l;
      r += d * 46; g += d * 16; b += d * 6;
      c[p] = clamp(r); c[p + 1] = clamp(g); c[p + 2] = clamp(b); c[p + 3] = 255;
      const hv = clamp(110 + (fine[i] - 0.5) * 120 + (blade - 0.5) * 90);
      hb[p] = hb[p + 1] = hb[p + 2] = hv; hb[p + 3] = 255;
    }
  });
}

// 아스팔트 도로 띠 (가로 = 도로 폭, 세로 = 길이 방향 반복)
// 흰 바깥 차선, 노란 중앙 겹선, 바퀴 자국, 균열, 땜질 자국, 닳은 페인트
export function realRoad() {
  const W = 256, H = 432;
  const f = (g, bg) => {
    const rnd = makeRng('rroad-after');
    const paint = (x, w, color) => {
      for (let y = 0; y < H; y += 2) {
        const worn = rnd();
        g.globalAlpha = worn < 0.08 ? 0.35 : 0.82 + rnd() * 0.18;
        g.fillStyle = color; g.fillRect(x, y, w, 2);
        bg.fillStyle = 'rgba(255,255,255,0.35)'; bg.fillRect(x, y, w, 2);
      }
      g.globalAlpha = 1;
    };
    paint(14, 6, '#e9e7e0'); paint(W - 20, 6, '#e9e7e0');
    paint(W / 2 - 8, 5, '#e2b93b'); paint(W / 2 + 3, 5, '#e2b93b');
    // 균열
    g.strokeStyle = 'rgba(25,25,27,0.55)'; bg.strokeStyle = 'rgba(0,0,0,0.7)';
    for (let k = 0; k < 5; k++) {
      let x = 30 + rnd() * (W - 60), y = rnd() * H; g.lineWidth = bg.lineWidth = 1 + rnd();
      g.beginPath(); bg.beginPath(); g.moveTo(x, y); bg.moveTo(x, y);
      for (let s = 0; s < 6; s++) { x += rnd() * 22 - 11; y += rnd() * 26 - 6; g.lineTo(x, y); bg.lineTo(x, y); }
      g.stroke(); bg.stroke();
    }
  };
  const paintFn = (c, hb) => {
    const rnd = makeRng('rroad');
    const big = fbm(W, H, 2, 3, rnd, 0.6), agg = fbm(W, H, 48, 2, rnd, 0.6), patch = fbm(W, H, 2, 2, rnd, 0.6);
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      const i = y * W + x, p = i * 4, u = x / W;
      const grain = rnd();
      // 바퀴 자국: 각 차로 가운데 두 줄이 조금 더 어둡고 매끈
      const lane = (u < 0.5 ? u / 0.5 : (u - 0.5) / 0.5);
      const track = Math.exp(-Math.pow((lane - 0.3) / 0.08, 2)) + Math.exp(-Math.pow((lane - 0.72) / 0.08, 2));
      let l = 66 + (big[i] - 0.5) * 22 + (agg[i] - 0.5) * 26 + (grain - 0.5) * 30 - track * 9;
      if (patch[i] > 0.66) l -= 10;                        // 땜질한 새 아스팔트(더 짙음)
      if (grain > 0.985) l += 40;                           // 반짝이는 돌 알갱이
      c[p] = clamp(l); c[p + 1] = clamp(l + 1); c[p + 2] = clamp(l + 4); c[p + 3] = 255;
      const hv = clamp(120 + (agg[i] - 0.5) * 140 + (grain - 0.5) * 110 - track * 25);
      hb[p] = hb[p + 1] = hb[p + 2] = hv; hb[p + 3] = 255;
    }
  };
  paintFn.after = f;
  return build('road', W, H, paintFn);
}

// 보도블록: 회색 직사각 블록, 블록마다 색이 조금씩 다르고 이음 줄이 패임
export function realWalk() {
  const S = 256;
  const paintFn = (c, hb) => {
    const rnd = makeRng('rwalk');
    const n = fbm(S, S, 8, 3, rnd), grain = fbm(S, S, 64, 1, rnd);
    const bw = 32, bh = 64, tone = [];
    for (let k = 0; k < 64; k++) tone.push(0.88 + rnd() * 0.2);
    for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
      const i = y * S + x, p = i * 4;
      const row = Math.floor(y / bh), off = row % 2 ? bw / 2 : 0;
      const bx = Math.floor((x + off) / bw) % (S / bw), id = (row * 8 + bx) % 64;
      const lx = (x + off) % bw, ly = y % bh, joint = lx < 2 || ly < 2;
      let l = (172 + (n[i] - 0.5) * 30 + (grain[i] - 0.5) * 26 + (rnd() - 0.5) * 18) * tone[id];
      if (joint) l *= 0.62;
      c[p] = clamp(l); c[p + 1] = clamp(l * 0.985); c[p + 2] = clamp(l * 0.95); c[p + 3] = 255;
      const hv = joint ? 40 : clamp(170 + (grain[i] - 0.5) * 70);
      hb[p] = hb[p + 1] = hb[p + 2] = hv; hb[p + 3] = 255;
    }
  };
  return build('walk', S, S, paintFn);
}

// 바깥 도시 바닥: 낡은 콘크리트
export function realConcrete() {
  const S = 256;
  return build('concrete', S, S, (c, hb) => {
    const rnd = makeRng('rconc');
    const n = fbm(S, S, 4, 4, rnd);
    for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
      const i = y * S + x, p = i * 4, gr = rnd();
      const joint = x % 128 < 2 || y % 128 < 2;
      let l = 132 + (n[i] - 0.5) * 40 + (gr - 0.5) * 22; if (joint) l *= 0.7;
      c[p] = clamp(l); c[p + 1] = clamp(l + 1); c[p + 2] = clamp(l + 3); c[p + 3] = 255;
      const hv = joint ? 50 : clamp(140 + (gr - 0.5) * 60);
      hb[p] = hb[p + 1] = hb[p + 2] = hv; hb[p + 3] = 255;
    }
  });
}

// 무기 배치 공간 = 넓은 대로 (8차로). 한 장 = 가로 8.5 × 세로 8.5, 세로 가운데(v=0.5)가 중앙선
// 가운데 노란 겹선, 흰 점선 차선, 바깥 흰 실선, 바퀴 자국, 맨홀
export function realBoulevard() {
  const S = 512, U = 8.5;
  const paintFn = (c, hb) => {
    const rnd = makeRng('rblvd');
    const big = fbm(S, S, 2, 3, rnd), agg = fbm(S, S, 64, 2, rnd), patch = fbm(S, S, 3, 2, rnd);
    for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
      const i = y * S + x, p = i * 4, g = rnd();
      const zu = Math.abs((y / S - 0.5) * U);                          // 중앙선에서 거리(유닛)
      const inLane = zu % 0.8, track = Math.exp(-Math.pow((inLane - 0.25) / 0.07, 2)) + Math.exp(-Math.pow((inLane - 0.55) / 0.07, 2));
      let l = 64 + (big[i] - 0.5) * 20 + (agg[i] - 0.5) * 24 + (g - 0.5) * 26 - (zu < 2.2 ? track * 7 : 0);
      if (patch[i] > 0.7) l -= 9;
      if (g > 0.986) l += 36;
      c[p] = clamp(l); c[p + 1] = clamp(l + 1); c[p + 2] = clamp(l + 4); c[p + 3] = 255;
      const hv = clamp(120 + (agg[i] - 0.5) * 130 + (g - 0.5) * 100);
      hb[p] = hb[p + 1] = hb[p + 2] = hv; hb[p + 3] = 255;
    }
  };
  paintFn.after = (g, bg) => {
    const rnd = makeRng('rblvd2'), px = S / U;
    const line = (zu, w, color, dash) => {
      for (const s of zu === 0 ? [1] : [-1, 1]) {
        const y0 = S / 2 + s * zu * px - w * px / 2;
        for (let x = 0; x < S; x += 2) {
          if (dash && ((x / px) % (U / 2)) > U / 4) continue;
          g.globalAlpha = rnd() < 0.07 ? 0.35 : 0.85 + rnd() * 0.15; g.fillStyle = color; g.fillRect(x, y0, 2, w * px);
          bg.fillStyle = 'rgba(255,255,255,0.3)'; bg.fillRect(x, y0, 2, w * px);
        }
        g.globalAlpha = 1;
      }
    };
    line(0.07, 0.06, '#e2b93b'); line(0.8, 0.05, '#ebe9e2', true); line(1.6, 0.05, '#ebe9e2', true); line(2.2, 0.06, '#ebe9e2');
    // 맨홀 뚜껑
    for (const [ux, uz] of [[1.7, 1.2], [6.1, -1.25]]) {
      const cx = ux * px, cy = S / 2 + uz * px, r = 0.16 * px;
      g.fillStyle = '#2c2d2f'; g.beginPath(); g.arc(cx, cy, r, 0, 7); g.fill();
      g.strokeStyle = '#4a4b4e'; g.lineWidth = 2; g.beginPath(); g.arc(cx, cy, r * 0.7, 0, 7); g.stroke();
      bg.fillStyle = '#222'; bg.beginPath(); bg.arc(cx, cy, r, 0, 7); bg.fill();
    }
  };
  return build('blvd', S, S, paintFn);
}

// 횡단보도 (흰 줄무늬), 투명 바탕
export function zebraTex() {
  if (cache.zebra) return cache.zebra;
  const c = document.createElement('canvas'); c.width = 64; c.height = 256;
  const g = c.getContext('2d'), rnd = makeRng('zebra');
  for (let y = 0; y < 256; y += 32) for (let k = 0; k < 64; k += 2) { g.globalAlpha = 0.75 + rnd() * 0.25; g.fillStyle = '#ecebe6'; g.fillRect(k, y + 4, 2, 18); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  return (cache.zebra = t);
}

// 도심 상가 건물 벽 (가로 1 × 세로 1.5 유닛 = 1층 상점 + 위로 4개 층). v: 0~5 종류
const WALLS = ['#c9b79c', '#9c9a95', '#b46a4f', '#d8d4cb', '#8a7d6b', '#a7b0b5'];
const SIGNS = ['#d23b2f', '#1f6fc2', '#f2c230', '#2e9c5a', '#e26c1f', '#7a3fb0', '#ffffff'];
export function shopFacade(v) {
  if (cache['shop' + v]) return cache['shop' + v];
  const W = 128, H = 192, c = document.createElement('canvas'); c.width = W; c.height = H;
  const g = c.getContext('2d'), rnd = makeRng('shop' + v), fh = H / 5;
  g.fillStyle = WALLS[v % WALLS.length]; g.fillRect(0, 0, W, H);
  for (let k = 0; k < 500; k++) { g.fillStyle = `rgba(0,0,0,${rnd() * 0.06})`; g.fillRect(rnd() * W, rnd() * H, 2, 2); }
  // 위층 창문 (4개 층)
  const n = 2 + (v % 2);
  for (let f = 0; f < 4; f++) {
    const y = f * fh + fh * 0.22;
    for (let i = 0; i < n; i++) {
      const cw = W / n, x = i * cw + cw * 0.14, lit = rnd() < 0.2;
      g.fillStyle = lit ? '#e6d6a4' : (rnd() < 0.5 ? '#3c4651' : '#4d5a66'); g.fillRect(x, y, cw * 0.72, fh * 0.55);
      g.fillStyle = 'rgba(255,255,255,0.12)'; g.fillRect(x, y, cw * 0.25, fh * 0.55);
    }
    if (rnd() < 0.55) {   // 층마다 붙은 가로 간판
      g.fillStyle = SIGNS[Math.floor(rnd() * SIGNS.length)]; g.fillRect(4, y + fh * 0.58, W - 8, fh * 0.18);
      g.fillStyle = 'rgba(255,255,255,0.85)'; for (let k = 0; k < 5; k++) g.fillRect(12 + k * 20, y + fh * 0.62, 12, fh * 0.1);
    }
  }
  // 세로 간판
  if (rnd() < 0.7) { g.fillStyle = SIGNS[Math.floor(rnd() * SIGNS.length)]; g.fillRect(W - 18, fh * 0.3, 14, fh * 3.2); g.fillStyle = '#fff'; for (let k = 0; k < 6; k++) g.fillRect(W - 14, fh * 0.5 + k * fh * 0.5, 6, fh * 0.28); }
  // 1층 상점: 유리 + 간판 띠
  g.fillStyle = SIGNS[v % SIGNS.length]; g.fillRect(0, 4 * fh, W, fh * 0.26);
  g.fillStyle = 'rgba(255,255,255,0.9)'; for (let k = 0; k < 4; k++) g.fillRect(14 + k * 26, 4 * fh + fh * 0.07, 16, fh * 0.12);
  g.fillStyle = '#2b3138'; g.fillRect(4, 4 * fh + fh * 0.3, W - 8, fh * 0.7);
  g.fillStyle = 'rgba(240,226,180,0.55)'; g.fillRect(8, 4 * fh + fh * 0.36, W * 0.55, fh * 0.6);
  g.fillStyle = '#6a6e73'; g.fillRect(W * 0.66, 4 * fh + fh * 0.3, 3, fh * 0.7);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; t.wrapS = THREE.RepeatWrapping;
  return (cache['shop' + v] = t);
}
// 높은 사무실 건물: 유리 커튼월
export function officeFacade(v) {
  if (cache['office' + v]) return cache['office' + v];
  const W = 128, H = 128, c = document.createElement('canvas'); c.width = W; c.height = H;
  const g = c.getContext('2d'), rnd = makeRng('office' + v);
  g.fillStyle = ['#5d6e7c', '#6b7a70', '#4f5b6a'][v % 3]; g.fillRect(0, 0, W, H);
  for (let y = 0; y < H; y += 16) for (let x = 0; x < W; x += 16) {
    const l = rnd() < 0.15; g.fillStyle = l ? '#d9cfa2' : `rgb(${120 + rnd() * 30},${150 + rnd() * 30},${170 + rnd() * 30})`;
    g.fillRect(x + 1, y + 1, 14, 13);
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return (cache['office' + v] = t);
}
