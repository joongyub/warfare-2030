// 세계 도시 건물 외벽 (코드로 그림): 뉴욕 벽돌·석조 빌딩, 파리 오스만 양식
// shopFacadeHD 와 같은 규칙: 색(map) + 빛나는 부분(emissiveMap)
import * as THREE from 'three';
import { makeRng } from './textures.js';

const cache = {};
const mk = (c) => { const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; t.wrapS = t.wrapT = THREE.RepeatWrapping; return t; };
const cv = (w, h) => { const c = document.createElement('canvas'); c.width = w; c.height = h; return [c, c.getContext('2d')]; };
const once = (key, fn) => cache[key] || (cache[key] = fn());

// 창문: 하늘 반사 유리 + 창틀 (켜진 창은 노란빛, emissive 에도 칠함)
function pane(g, e, x, y, w, h, rnd, o = {}) {
  const lit = rnd() < (o.lit ?? 0.15);
  if (o.frame) { g.fillStyle = o.frame; g.fillRect(x - 2, y - 2, w + 4, h + 4); }
  const gr = g.createLinearGradient(x, y, x, y + h);
  if (lit) { gr.addColorStop(0, '#f2dca0'); gr.addColorStop(1, '#c49c58'); }
  else { gr.addColorStop(0, o.sky || '#8fa9bd'); gr.addColorStop(0.5, '#56687a'); gr.addColorStop(1, '#2b3540'); }
  g.fillStyle = gr; g.fillRect(x, y, w, h);
  g.fillStyle = 'rgba(255,255,255,0.18)'; g.beginPath(); g.moveTo(x, y); g.lineTo(x + w * 0.5, y); g.lineTo(x, y + h * 0.55); g.fill();
  if (o.mull !== false) { g.fillStyle = o.frame || '#e8e4da'; g.fillRect(x, y + h * 0.45, w, 2); g.fillRect(x + w / 2 - 1, y, 2, h); }
  if (lit && e) { e.fillStyle = '#a07a38'; e.fillRect(x, y, w, h); }
}
function grime(g, W, H, rnd, n = 1200, a = 0.05) {
  for (let k = 0; k < n; k++) { g.fillStyle = `rgba(0,0,0,${rnd() * a})`; g.fillRect(rnd() * W, rnd() * H, 2, 2); }
  for (let k = 0; k < 8; k++) { const x = rnd() * W, gr = g.createLinearGradient(0, 0, 0, H); gr.addColorStop(0, 'rgba(0,0,0,0.07)'); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.fillRect(x, 0, 2 + rnd() * 5, H * rnd()); }
}
function bricks(g, W, H, base, rnd) {
  g.fillStyle = base; g.fillRect(0, 0, W, H);
  for (let y = 0; y < H; y += 5) for (let x = (y / 5) % 2 ? -5 : 0; x < W; x += 10) { g.fillStyle = `rgba(${rnd() < 0.5 ? '0,0,0' : '255,230,210'},${0.03 + rnd() * 0.08})`; g.fillRect(x, y, 9, 4); }
  g.fillStyle = 'rgba(40,25,20,0.22)'; for (let y = 4; y < H; y += 5) g.fillRect(0, y, W, 1);
}
// 간판 (영어·프랑스어)
function signBoard(g, e, x, y, w, h, word, bg, fg, font) {
  g.fillStyle = bg; g.fillRect(x, y, w, h);
  g.fillStyle = 'rgba(0,0,0,0.25)'; g.fillRect(x, y + h - 2, w, 2);
  g.fillStyle = fg; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.font = `bold ${Math.floor(h * 0.62)}px ${font}`;
  g.fillText(word, x + w / 2, y + h / 2 + 1, w * 0.9);
  if (e) { e.fillStyle = bg; e.globalAlpha = 0.7; e.fillRect(x, y, w, h); e.globalAlpha = 1; }
}
// 철제 비상계단 (뉴욕 벽돌 건물 앞면): 층마다 난간 발판 + 사선 사다리
function fireEscape(g, x, w, y0, fh, floors) {
  g.strokeStyle = '#1c1d1f'; g.fillStyle = '#1c1d1f';
  for (let f = 0; f < floors; f++) {
    const y = y0 + f * fh + fh * 0.78;
    g.fillRect(x, y, w, 3);                       // 발판
    g.lineWidth = 1.5; g.strokeRect(x, y - fh * 0.28, w, fh * 0.28);   // 난간
    for (let k = x; k < x + w; k += 6) { g.beginPath(); g.moveTo(k, y - fh * 0.28); g.lineTo(k, y); g.stroke(); }
    if (f < floors - 1) { g.lineWidth = 2.5; g.beginPath(); g.moveTo(x + w * 0.15, y); g.lineTo(x + w * 0.85, y + fh); g.stroke(); }
  }
}

// ---------- 뉴욕 ----------
const NY_BRICK = ['#8a4a36', '#9c6a4c', '#6e3b2c', '#b08a68', '#7d5a48'];
const NY_WORDS = ['DELI', 'PIZZA', 'CAFE', 'BAGELS', 'PHARMACY', 'NAILS', 'DINER', 'LAUNDRY', 'BOOKS', 'TACOS', 'BANK', 'HOTEL', 'MARKET', 'BAR', 'SHOES', 'NOODLES'];
const NY_SIGN = [['#1d2a3a', '#f4d35e'], ['#b8312f', '#ffffff'], ['#0f5c4a', '#f1e7c8'], ['#f2f0ea', '#1a1a1a'], ['#2a4f8f', '#ffffff'], ['#111111', '#ff5a7a']];
// 뉴욕 상가 (가로 1 × 세로 1.5 = 5층, 맨 아래 1층 가게) — 거리 앞 건물용
export function nyShopHD(v) {
  return once('nyshop' + v, () => {
    const W = 256, H = 384, fh = H / 5, [c, g] = cv(W, H), [ce, e] = cv(W, H), rnd = makeRng('nyshop' + v);
    e.fillStyle = '#000'; e.fillRect(0, 0, W, H);
    bricks(g, W, H, NY_BRICK[v % NY_BRICK.length], rnd);
    grime(g, W, H, rnd);
    // 처마 장식 (코니스)
    g.fillStyle = '#d8d0c0'; g.fillRect(0, 0, W, 8); g.fillStyle = 'rgba(0,0,0,0.3)'; g.fillRect(0, 8, W, 3);
    const n = 3, cw = W / n;
    for (let f = 0; f < 4; f++) for (let i = 0; i < n; i++) {
      const x = i * cw + cw * 0.2, y = f * fh + fh * 0.18;
      g.fillStyle = '#d9d1c1'; g.fillRect(x - 4, y - 7, cw * 0.6 + 8, 6);   // 창 위 돌 인방
      pane(g, e, x, y, cw * 0.6, fh * 0.62, rnd, { frame: v % 2 ? '#f0ece4' : '#2a2b2e' });
    }
    if (v % 3 !== 2) fireEscape(g, cw * 1.05, cw * 0.9, 0, fh, 4);
    // 1층: 진열창 + 차양 아래 간판
    const gy = 4 * fh, [bg, fg] = NY_SIGN[Math.floor(rnd() * NY_SIGN.length)];
    g.fillStyle = '#2b2d30'; g.fillRect(0, gy, W, fh);
    signBoard(g, e, 0, gy + 2, W, fh * 0.26, NY_WORDS[Math.floor(rnd() * NY_WORDS.length)], bg, fg, '"Arial Black","Helvetica",sans-serif');
    const sg = g.createLinearGradient(0, gy + fh * 0.3, 0, H); sg.addColorStop(0, '#f6e2b0'); sg.addColorStop(1, '#a8885a');
    g.fillStyle = sg; g.fillRect(8, gy + fh * 0.32, W * 0.6, fh * 0.64);
    e.fillStyle = '#6e5430'; e.fillRect(8, gy + fh * 0.32, W * 0.6, fh * 0.64);
    g.fillStyle = '#4a4d52'; for (let k = 1; k < 3; k++) g.fillRect(8 + k * W * 0.2, gy + fh * 0.32, 3, fh * 0.64);
    g.fillStyle = '#3a3d42'; g.fillRect(W * 0.72, gy + fh * 0.32, W * 0.2, fh * 0.68);
    g.fillStyle = 'rgba(200,220,235,0.4)'; g.fillRect(W * 0.74, gy + fh * 0.37, W * 0.16, fh * 0.56);
    return { map: mk(c), emissiveMap: mk(ce) };
  });
}
// 뉴욕 벽돌 아파트·사무실 (1칸 = 가로 1.6 × 세로 1.2 = 4층) — 배경 중층 건물
export function nyBrickHD(v) {
  return once('nybrick' + v, () => {
    const S = 256, fh = S / 4, [c, g] = cv(S, S), [ce, e] = cv(S, S), rnd = makeRng('nybrick' + v);
    e.fillStyle = '#000'; e.fillRect(0, 0, S, S);
    bricks(g, S, S, NY_BRICK[(v + 2) % NY_BRICK.length], rnd); grime(g, S, S, rnd, 800);
    const n = 4, cw = S / n;
    for (let f = 0; f < 4; f++) {
      for (let i = 0; i < n; i++) { const x = i * cw + cw * 0.2; g.fillStyle = '#cfc6b4'; g.fillRect(x - 3, f * fh + fh * 0.12, cw * 0.6 + 6, 5); pane(g, e, x, f * fh + fh * 0.2, cw * 0.6, fh * 0.6, rnd, { frame: '#efe9dd', lit: 0.2 }); }
      g.fillStyle = 'rgba(0,0,0,0.12)'; g.fillRect(0, f * fh + fh - 2, S, 2);
    }
    if (v % 2 === 0) fireEscape(g, cw * 1.1, cw * 1.8, 0, fh, 4);
    return { map: mk(c), emissiveMap: mk(ce) };
  });
}
// 뉴욕 석조 초고층 (아르데코: 밝은 석회암 세로 기둥 + 움푹한 어두운 창 줄) (1칸 = 2 × 2.4 = 8층)
export function nyTowerHD(v) {
  return once('nytower' + v, () => {
    const S = 256, [c, g] = cv(S, S), [ce, e] = cv(S, S), rnd = makeRng('nytower' + v);
    e.fillStyle = '#000'; e.fillRect(0, 0, S, S);
    const stone = ['#d8cdb6', '#c9bda4', '#bfb7aa', '#a99c88'][v % 4];
    g.fillStyle = stone; g.fillRect(0, 0, S, S);
    grime(g, S, S, rnd, 900, 0.06);
    const cols = 8, cw = S / cols, rows = 8, rh = S / rows;
    for (let i = 0; i < cols; i++) {
      // 창이 세로로 이어진 줄(스팬드럴은 어두운 금속판)
      const x = i * cw + cw * 0.22, w = cw * 0.56;
      g.fillStyle = '#4a4f55'; g.fillRect(x, 0, w, S);
      for (let r = 0; r < rows; r++) pane(g, e, x, r * rh + rh * 0.1, w, rh * 0.62, rnd, { mull: false, lit: 0.2, sky: '#93aabb' });
      g.fillStyle = 'rgba(255,255,255,0.12)'; g.fillRect(i * cw, 0, 3, S);   // 기둥 빛
      g.fillStyle = 'rgba(0,0,0,0.18)'; g.fillRect(x - 2, 0, 2, S);
    }
    return { map: mk(c), emissiveMap: mk(ce) };
  });
}
// 브라운스톤 (뉴욕 연립주택: 갈색 사암, 계단 현관) (1칸 = 1.2 × 1.2 = 4층)
export function brownstoneHD(v) {
  return once('brown' + v, () => {
    const S = 256, fh = S / 4, [c, g] = cv(S, S), [ce, e] = cv(S, S), rnd = makeRng('brown' + v);
    e.fillStyle = '#000'; e.fillRect(0, 0, S, S);
    g.fillStyle = ['#6b4a3a', '#7a5642', '#5e4234'][v % 3]; g.fillRect(0, 0, S, S);
    grime(g, S, S, rnd, 1400, 0.07);
    g.fillStyle = 'rgba(0,0,0,0.2)'; for (let y = 0; y < S; y += 16) g.fillRect(0, y, S, 1);
    g.fillStyle = '#3d2a20'; g.fillRect(0, 0, S, 10);
    for (let f = 0; f < 4; f++) for (let i = 0; i < 3; i++) {
      const x = i * S / 3 + S / 3 * 0.24, y = f * fh + fh * 0.2;
      g.fillStyle = '#4a3226'; g.fillRect(x - 5, y - 8, S / 3 * 0.52 + 10, 7);
      pane(g, e, x, y, S / 3 * 0.52, fh * 0.62, rnd, { frame: '#2d201a', lit: 0.22 });
    }
    // 1층 현관 계단(아래 왼쪽)
    g.fillStyle = '#4f382c'; g.fillRect(S * 0.05, S - fh * 0.5, S * 0.3, fh * 0.5);
    g.fillStyle = 'rgba(0,0,0,0.25)'; for (let k = 0; k < 5; k++) g.fillRect(S * 0.05, S - fh * 0.5 + k * fh * 0.1, S * 0.3, 2);
    return { map: mk(c), emissiveMap: mk(ce) };
  });
}

// ---------- 파리 ----------
const PA_STONE = ['#e6dcc6', '#ddd1b6', '#ece3cf', '#d9ccb0'];
const PA_WORDS = ['CAFÉ', 'BOULANGERIE', 'PHARMACIE', 'BRASSERIE', 'TABAC', 'LIBRAIRIE', 'FROMAGERIE', 'PÂTISSERIE', 'BISTROT', 'FLEURISTE', 'HÔTEL', 'CRÊPERIE'];
const PA_SIGN = [['#1f3b2d', '#e9d9a8'], ['#7a1f24', '#f3e6c4'], ['#1e2f4f', '#efe2bd'], ['#2b2b2b', '#e8c46a'], ['#5b2a4a', '#f2e4c6']];
// 철 난간 (가로 한 줄)
function ironRail(g, x, y, w, h) {
  g.strokeStyle = '#25282b'; g.lineWidth = 2; g.strokeRect(x, y, w, h);
  g.lineWidth = 1.2;
  for (let k = x + 3; k < x + w - 2; k += 7) { g.beginPath(); g.moveTo(k, y); g.lineTo(k, y + h); g.stroke(); g.beginPath(); g.arc(k + 3.5, y + h / 2, 2.2, 0, 7); g.stroke(); }
}
// 오스만 양식 건물 (크림색 석회석, 프렌치 창, 2·5층 연속 발코니) — 6층: 1층 가게 + 위 5층
// 1칸 = 가로 1 × 세로 1.8 (층 0.3)
export function haussmannHD(v, shop = true) {
  return once('haus' + v + shop, () => {
    const W = 256, H = 460, fh = H / 6, [c, g] = cv(W, H), [ce, e] = cv(W, H), rnd = makeRng('haus' + v);
    e.fillStyle = '#000'; e.fillRect(0, 0, W, H);
    g.fillStyle = PA_STONE[v % PA_STONE.length]; g.fillRect(0, 0, W, H);
    // 석재 줄눈
    g.fillStyle = 'rgba(120,100,70,0.18)'; for (let y = 0; y < H; y += 12) g.fillRect(0, y, W, 1);
    for (let y = 0; y < H; y += 12) for (let x = (y / 12) % 2 ? 20 : 0; x < W; x += 40) g.fillRect(x, y, 1, 12);
    grime(g, W, H, rnd, 1000, 0.04);
    const n = 3, cw = W / n;
    for (let f = 0; f < 5; f++) {
      const y = f * fh + fh * 0.16, wh = fh * (f === 3 ? 0.72 : 0.66);   // 2층(아래서) 창이 제일 큼
      for (let i = 0; i < n; i++) {
        const x = i * cw + cw * 0.27, w = cw * 0.46;
        // 창 위 장식 (삼각·아치 페디먼트는 2층만)
        g.fillStyle = 'rgba(255,250,235,0.6)'; g.fillRect(x - 5, y - 6, w + 10, 5);
        if (f === 3) { g.fillStyle = 'rgba(160,140,110,0.5)'; g.beginPath(); g.moveTo(x - 6, y - 6); g.lineTo(x + w / 2, y - 16); g.lineTo(x + w + 6, y - 6); g.fill(); }
        pane(g, e, x, y, w, wh, rnd, { frame: '#f4efe4', lit: 0.16, sky: '#9fb1bf' });
        if (f !== 0 && f !== 3) ironRail(g, x - 3, y + wh * 0.62, w + 6, wh * 0.36);   // 작은 발코니
      }
      if (f === 0 || f === 3) { g.fillStyle = 'rgba(80,70,55,0.35)'; g.fillRect(0, y + wh + 2, W, 4); ironRail(g, 0, y + wh * 0.62, W, wh * 0.38); }   // 연속 발코니
      g.fillStyle = 'rgba(255,255,255,0.35)'; g.fillRect(0, f * fh + fh - 4, W, 2);   // 층 띠
    }
    // 1층: 아치 진열창 + 간판 (카페·빵집)
    const gy = 5 * fh;
    g.fillStyle = '#cbbd9f'; g.fillRect(0, gy, W, fh);
    g.fillStyle = 'rgba(90,75,55,0.3)'; for (let y = gy; y < H; y += 10) g.fillRect(0, y, W, 2);
    if (shop) {
      const [bg, fg] = PA_SIGN[Math.floor(rnd() * PA_SIGN.length)];
      g.fillStyle = bg; g.fillRect(4, gy + fh * 0.12, W - 8, fh * 0.84);
      signBoard(g, e, 4, gy + fh * 0.12, W - 8, fh * 0.22, PA_WORDS[Math.floor(rnd() * PA_WORDS.length)], bg, fg, 'Georgia,"Times New Roman",serif');
      const sg = g.createLinearGradient(0, gy + fh * 0.36, 0, H); sg.addColorStop(0, '#f4dca4'); sg.addColorStop(1, '#a07c4a');
      for (let i = 0; i < 3; i++) { g.fillStyle = sg; g.fillRect(14 + i * (W - 28) / 3, gy + fh * 0.38, (W - 28) / 3 - 10, fh * 0.6); e.fillStyle = '#6a5028'; e.fillRect(14 + i * (W - 28) / 3, gy + fh * 0.38, (W - 28) / 3 - 10, fh * 0.6); }
    } else {
      for (let i = 0; i < 3; i++) { const x = i * cw + cw * 0.2, w = cw * 0.6; g.fillStyle = '#3c3a36'; g.beginPath(); g.moveTo(x, H); g.lineTo(x, gy + fh * 0.45); g.arc(x + w / 2, gy + fh * 0.45, w / 2, Math.PI, 0); g.lineTo(x + w, H); g.fill(); }
    }
    return { map: mk(c), emissiveMap: mk(ce) };
  });
}
// 파리 지붕: 회청색 아연판(세로 이음줄) + 작은 지붕창 줄 (망사르드 지붕 경사면용)
export function zincRoofHD() {
  return once('zinc', () => {
    const W = 256, H = 128, [c, g] = cv(W, H), rnd = makeRng('zinc');
    g.fillStyle = '#6f7a85'; g.fillRect(0, 0, W, H);
    for (let x = 0; x < W; x += 8) { g.fillStyle = `rgba(${rnd() < 0.5 ? '255,255,255' : '0,0,0'},${0.05 + rnd() * 0.08})`; g.fillRect(x, 0, 7, H); g.fillStyle = 'rgba(30,35,40,0.45)'; g.fillRect(x + 7, 0, 1, H); }
    // 지붕창 (도머)
    for (let i = 0; i < 3; i++) {
      const x = i * W / 3 + W / 3 * 0.32, w = W / 3 * 0.36, y = H * 0.3;
      g.fillStyle = '#ece5d6'; g.fillRect(x - 4, y - 8, w + 8, H * 0.5 + 8);
      g.fillStyle = '#3d4852'; g.fillRect(x, y, w, H * 0.5);
      g.fillStyle = '#ece5d6'; g.fillRect(x + w / 2 - 1, y, 2, H * 0.5);
      g.fillStyle = '#5c6670'; g.beginPath(); g.moveTo(x - 6, y - 8); g.lineTo(x + w / 2, y - 20); g.lineTo(x + w + 6, y - 8); g.fill();
    }
    return mk(c);
  });
}

// 다른 도시 키트(src/cities)에서 쓰는 그림 도구
export { pane, grime, bricks, signBoard, cv, mk, once };
