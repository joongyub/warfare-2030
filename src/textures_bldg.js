// 건물 외벽 그림 (코드로 그림, 고해상도): 상가·아파트·유리 빌딩
// 각 그림은 색(map) + 빛나는 부분(emissiveMap: 간판·켜진 창문)을 같이 만듦
import * as THREE from 'three';
import { makeRng } from './textures.js';

const cache = {};
const mk = (c, rep = true) => { const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; if (rep) t.wrapS = t.wrapT = THREE.RepeatWrapping; return t; };
const cv = (w, h) => { const c = document.createElement('canvas'); c.width = w; c.height = h; return [c, c.getContext('2d')]; };

// 유리창 하나: 하늘 반사(위 밝고 아래 어두움) + 창틀 + 가운데 창살 + 아래 그림자
function windowPane(g, e, x, y, w, h, rnd, o = {}) {
  const lit = rnd() < (o.lit ?? 0.18), blind = !lit && rnd() < 0.3;
  g.fillStyle = o.frame || '#d9d6cf'; g.fillRect(x - 2, y - 2, w + 4, h + 4);
  const gr = g.createLinearGradient(x, y, x, y + h);
  if (lit) { gr.addColorStop(0, '#f3dfa8'); gr.addColorStop(1, '#c9a868'); }
  else { gr.addColorStop(0, '#a9c3d6'); gr.addColorStop(0.45, '#6c8396'); gr.addColorStop(1, '#3a4652'); }
  g.fillStyle = gr; g.fillRect(x, y, w, h);
  if (blind) { g.fillStyle = 'rgba(235,232,222,0.75)'; g.fillRect(x, y, w, h * (0.3 + rnd() * 0.5)); g.fillStyle = 'rgba(0,0,0,0.12)'; for (let k = y + 3; k < y + h * 0.7; k += 3) g.fillRect(x, k, w, 1); }
  g.fillStyle = 'rgba(255,255,255,0.22)'; g.beginPath(); g.moveTo(x, y); g.lineTo(x + w * 0.45, y); g.lineTo(x, y + h * 0.6); g.fill();   // 반사 사선
  g.fillStyle = o.frame || '#d9d6cf'; g.fillRect(x + w / 2 - 1, y, 2, h);
  g.fillStyle = 'rgba(0,0,0,0.28)'; g.fillRect(x - 2, y + h + 2, w + 4, 3);   // 창턱 그림자
  if (lit && e) { e.fillStyle = '#b08840'; e.fillRect(x, y, w, h); }
}

// 간판 글자 (한국 도심 느낌)
const SHOP_WORDS = ['치킨', '카페', '약국', '편의점', '학원', 'PC방', '노래방', '부동산', '병원', '치과', '미용실', '분식', '은행', '안경', '피자', '정형외과', '수학학원', '헬스', '국밥', '마트'];
const SIGN_BG = ['#d23b2f', '#1f6fc2', '#f2b630', '#2e9c5a', '#e26c1f', '#6a3fb0', '#1d2a3a', '#ffffff', '#c41f5a'];
function sign(g, e, x, y, w, h, rnd, vertical = false) {
  const bg = SIGN_BG[Math.floor(rnd() * SIGN_BG.length)], light = bg === '#ffffff' || bg === '#f2b630';
  g.fillStyle = bg; g.fillRect(x, y, w, h);
  g.fillStyle = 'rgba(0,0,0,0.25)'; g.fillRect(x, y + h - 2, w, 2);
  const word = SHOP_WORDS[Math.floor(rnd() * SHOP_WORDS.length)];
  g.fillStyle = light ? '#1a1a1a' : '#ffffff';
  g.textAlign = 'center'; g.textBaseline = 'middle';
  if (vertical) {
    const ch = [...word], fs = Math.min(w * 0.8, h / (ch.length + 0.5));
    g.font = `bold ${fs}px "Noto Sans KR","Malgun Gothic",sans-serif`;
    ch.forEach((c, i) => g.fillText(c, x + w / 2, y + fs * (i + 0.85)));
  } else {
    g.font = `bold ${Math.floor(h * 0.68)}px "Noto Sans KR","Malgun Gothic",sans-serif`;
    g.fillText(word, x + w / 2, y + h / 2 + 1, w * 0.9);
  }
  if (e) { e.fillStyle = bg; e.globalAlpha = 0.85; e.fillRect(x, y, w, h); e.globalAlpha = 1; }
}

// 도심 상가 (가로 1 × 세로 1.5 유닛 = 5개 층, 맨 아래가 1층 상점)
const WALLS = ['#cdbb9e', '#a19f99', '#a85f45', '#dcd7cc', '#8d806d', '#a9b2b7'];
export function shopFacadeHD(v) {
  if (cache['shop' + v]) return cache['shop' + v];
  const W = 256, H = 384, fh = H / 5, [c, g] = cv(W, H), [ce, e] = cv(W, H), rnd = makeRng('shopHD' + v);
  e.fillStyle = '#000'; e.fillRect(0, 0, W, H);
  // 벽 재질: 0·3 석재 판, 2 벽돌, 나머지 타일
  g.fillStyle = WALLS[v % WALLS.length]; g.fillRect(0, 0, W, H);
  if (v % 6 === 2) { for (let y = 0; y < H; y += 6) for (let x = (y / 6) % 2 ? -6 : 0; x < W; x += 12) { g.fillStyle = `rgba(${rnd() < 0.5 ? '0,0,0' : '255,240,220'},${0.04 + rnd() * 0.08})`; g.fillRect(x, y, 11, 5); } g.fillStyle = 'rgba(60,40,30,0.25)'; for (let y = 0; y < H; y += 6) g.fillRect(0, y + 5, W, 1); }
  else { g.strokeStyle = 'rgba(0,0,0,0.08)'; g.lineWidth = 1; const ts = v % 3 ? 16 : 32; for (let y = 0; y < H; y += ts) { g.beginPath(); g.moveTo(0, y + 0.5); g.lineTo(W, y + 0.5); g.stroke(); } for (let x = 0; x < W; x += ts * 2) { g.beginPath(); g.moveTo(x + 0.5, 0); g.lineTo(x + 0.5, H); g.stroke(); } }
  for (let k = 0; k < 1500; k++) { g.fillStyle = `rgba(0,0,0,${rnd() * 0.05})`; g.fillRect(rnd() * W, rnd() * H, 2, 2); }
  // 빗물 얼룩 (위에서 아래로)
  for (let k = 0; k < 10; k++) { const x = rnd() * W, gr = g.createLinearGradient(0, 0, 0, H); gr.addColorStop(0, 'rgba(0,0,0,0.08)'); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.fillRect(x, 0, 2 + rnd() * 5, H * rnd()); }
  // 층 구분 띠
  for (let f = 1; f <= 4; f++) { g.fillStyle = 'rgba(0,0,0,0.16)'; g.fillRect(0, f * fh - 3, W, 3); g.fillStyle = 'rgba(255,255,255,0.18)'; g.fillRect(0, f * fh - 5, W, 2); }
  // 위층 창문 4개 층
  const n = 2 + (v % 2), frame = v % 2 ? '#e4e1da' : '#3b4046';
  for (let f = 0; f < 4; f++) {
    const y = f * fh + fh * 0.16, cw = W / n;
    const hasSign = rnd() < 0.5;
    for (let i = 0; i < n; i++) windowPane(g, e, i * cw + cw * 0.14, y, cw * 0.72, fh * (hasSign ? 0.46 : 0.6), rnd, { frame });
    if (hasSign) sign(g, e, 8, y + fh * 0.53, W - 40, fh * 0.26, rnd);
  }
  // 세로 간판
  if (rnd() < 0.75) sign(g, e, W - 28, fh * 0.2, 22, fh * 3.4, rnd, true);
  // 1층: 큰 유리 진열창 + 안쪽 따뜻한 조명 + 간판 띠
  const gy = 4 * fh;
  g.fillStyle = '#2a2f35'; g.fillRect(0, gy, W, fh);
  sign(g, e, 0, gy + 2, W, fh * 0.26, rnd);
  const sg = g.createLinearGradient(0, gy + fh * 0.3, 0, H); sg.addColorStop(0, '#f6e6b8'); sg.addColorStop(1, '#b89a62');
  g.fillStyle = sg; g.fillRect(6, gy + fh * 0.32, W * 0.62, fh * 0.64);
  e.fillStyle = '#7a6033'; e.fillRect(6, gy + fh * 0.32, W * 0.62, fh * 0.64);
  g.fillStyle = 'rgba(80,60,40,0.55)'; for (let k = 0; k < 6; k++) g.fillRect(14 + k * 26, gy + fh * 0.62, 16, fh * 0.34);   // 안쪽 진열대
  g.fillStyle = 'rgba(255,255,255,0.25)'; g.fillRect(6, gy + fh * 0.32, W * 0.62, 4);
  g.fillStyle = '#5b6168'; for (let k = 1; k < 4; k++) g.fillRect(6 + k * W * 0.155, gy + fh * 0.32, 3, fh * 0.64);
  g.fillStyle = '#444b52'; g.fillRect(W * 0.7, gy + fh * 0.32, W * 0.2, fh * 0.68);   // 문
  g.fillStyle = 'rgba(200,220,235,0.45)'; g.fillRect(W * 0.71, gy + fh * 0.36, W * 0.08, fh * 0.6); g.fillRect(W * 0.81, gy + fh * 0.36, W * 0.08, fh * 0.6);
  const t = mk(c); t.wrapT = THREE.ClampToEdgeWrapping; t.wrapT = THREE.RepeatWrapping;
  const te = mk(ce);
  return (cache['shop' + v] = { map: t, emissiveMap: te });
}

// 한국 판상형 아파트 (1칸 = 가로 1.6 × 세로 1.12 유닛 = 4개 층)
export function aptFacadeHD(v) {
  if (cache['apt' + v]) return cache['apt' + v];
  const S = 256, [c, g] = cv(S, S), [ce, e] = cv(S, S), rnd = makeRng('aptHD' + v), fh = S / 4;
  e.fillStyle = '#000'; e.fillRect(0, 0, S, S);
  g.fillStyle = ['#f0eee8', '#e8e4da', '#f3f1ec'][v % 3]; g.fillRect(0, 0, S, S);
  for (let k = 0; k < 900; k++) { g.fillStyle = `rgba(0,0,0,${rnd() * 0.035})`; g.fillRect(rnd() * S, rnd() * S, 2, 2); }
  const units = 3, uw = S / units;
  for (let f = 0; f < 4; f++) {
    const y = f * fh;
    for (let u = 0; u < units; u++) {
      const x = u * uw;
      // 거실 큰 창(발코니 확장) + 작은 방 창
      windowPane(g, e, x + uw * 0.08, y + fh * 0.14, uw * 0.56, fh * 0.56, rnd, { frame: '#cfd3d6', lit: 0.12 });
      windowPane(g, e, x + uw * 0.72, y + fh * 0.2, uw * 0.2, fh * 0.42, rnd, { frame: '#cfd3d6', lit: 0.1 });
      // 실외기 거치대
      if (rnd() < 0.45) { g.fillStyle = '#b8bcbf'; g.fillRect(x + uw * 0.7, y + fh * 0.66, uw * 0.24, fh * 0.12); g.fillStyle = 'rgba(0,0,0,0.25)'; for (let k = 0; k < 5; k++) g.fillRect(x + uw * 0.71 + k * uw * 0.045, y + fh * 0.67, 2, fh * 0.1); }
      // 세대 사이 벽 기둥
      g.fillStyle = 'rgba(0,0,0,0.07)'; g.fillRect(x, y, 3, fh);
    }
    // 발코니 난간 띠 (유리 난간 + 슬래브)
    g.fillStyle = 'rgba(150,175,195,0.45)'; g.fillRect(0, y + fh * 0.7, S, fh * 0.16);
    g.fillStyle = '#d0d3d6'; g.fillRect(0, y + fh * 0.86, S, fh * 0.14);
    g.fillStyle = 'rgba(0,0,0,0.18)'; g.fillRect(0, y + fh * 0.98, S, 2);
    g.fillStyle = 'rgba(255,255,255,0.6)'; g.fillRect(0, y + fh * 0.7, S, 1);
  }
  // 세로 포인트 색띠 (단지마다 다른 색)
  g.fillStyle = ['rgba(90,140,190,0.35)', 'rgba(200,110,80,0.3)', 'rgba(100,160,120,0.3)'][v % 3]; g.fillRect(S - 10, 0, 10, S);
  return (cache['apt' + v] = { map: mk(c), emissiveMap: mk(ce) });
}

// 유리 커튼월 빌딩 (1칸 = 2 × 2 유닛)
export function glassFacadeHD(v) {
  if (cache['glass' + v]) return cache['glass' + v];
  const S = 256, [c, g] = cv(S, S), [ce, e] = cv(S, S), rnd = makeRng('glassHD' + v);
  e.fillStyle = '#000'; e.fillRect(0, 0, S, S);
  const tint = [['#9fc0d8', '#4c6a84', '#2b3c4c'], ['#a8c4c8', '#55747a', '#2c3e42'], ['#c3d2de', '#6e869a', '#3a4a58'], ['#b9c8b0', '#5f7560', '#33402f']][v % 4];
  const floors = 8, fh = S / floors, cols = 8, cw = S / cols;
  for (let f = 0; f < floors; f++) {
    const y = f * fh;
    // 층마다 하늘 반사가 살짝 다르게
    const gr = g.createLinearGradient(0, y, 0, y + fh); gr.addColorStop(0, tint[0]); gr.addColorStop(0.6, tint[1]); gr.addColorStop(1, tint[2]);
    g.fillStyle = gr; g.fillRect(0, y, S, fh);
    // 구름 반사 얼룩
    for (let k = 0; k < 3; k++) { g.fillStyle = `rgba(255,255,255,${0.04 + rnd() * 0.1})`; g.fillRect(rnd() * S, y, 20 + rnd() * 60, fh * 0.75); }
    for (let i = 0; i < cols; i++) if (rnd() < 0.05) { g.fillStyle = 'rgba(235,220,180,0.45)'; g.fillRect(i * cw + 2, y + 2, cw - 4, fh * 0.72); e.fillStyle = '#4a3c22'; e.fillRect(i * cw + 2, y + 2, cw - 4, fh * 0.72); }
    // 층 사이 불투명 띠
    g.fillStyle = 'rgba(30,40,50,0.55)'; g.fillRect(0, y + fh * 0.78, S, fh * 0.22);
    g.fillStyle = 'rgba(255,255,255,0.18)'; g.fillRect(0, y + fh * 0.78, S, 1);
  }
  g.fillStyle = 'rgba(20,26,32,0.7)'; for (let i = 0; i < cols; i++) g.fillRect(i * cw, 0, 2, S);   // 세로 멀리언
  // 대각선 큰 반사
  const rg = g.createLinearGradient(0, 0, S, S); rg.addColorStop(0, 'rgba(255,255,255,0)'); rg.addColorStop(0.45, 'rgba(255,255,255,0.12)'); rg.addColorStop(0.55, 'rgba(255,255,255,0)');
  g.fillStyle = rg; g.fillRect(0, 0, S, S);
  return (cache['glass' + v] = { map: mk(c), emissiveMap: mk(ce) });
}
// 옥상 바닥 (방수 페인트 + 줄눈)
export function roofHD(v) {
  if (cache['roof' + v]) return cache['roof' + v];
  const S = 128, [c, g] = cv(S, S), rnd = makeRng('roofHD' + v);
  g.fillStyle = ['#7f9a86', '#9a9d9f', '#8c8f93'][v % 3]; g.fillRect(0, 0, S, S);
  for (let k = 0; k < 600; k++) { g.fillStyle = `rgba(0,0,0,${rnd() * 0.08})`; g.fillRect(rnd() * S, rnd() * S, 3, 3); }
  g.strokeStyle = 'rgba(0,0,0,0.12)'; for (let x = 0; x < S; x += 32) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, S); g.stroke(); g.beginPath(); g.moveTo(0, x); g.lineTo(S, x); g.stroke(); }
  return (cache['roof' + v] = mk(c));
}
