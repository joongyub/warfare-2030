// 도시 키트: 모스크바 (스테이지 10 · 크렘린 방어전)
// 배경: 스탈린 양식 신고전주의 아파트(황토·크림색, 무거운 처마), 흐루숍카 판상 아파트, 작은 양파 돔 교회, 자작나무
// 전투 구역 안: 크렘린 스파스카야 탑 + 성벽, 성 바실리 대성당, 볼쇼이 극장, 굼 백화점
// 바깥: 모스크바 국립대학교(스탈린 고층), 모스크바 시티(유리 초고층), 오스탄키노 타워, 구세주 그리스도 대성당
import * as THREE from 'three';
import { makeRng } from '../textures.js';
import { cv, mk, once, pane, grime, bricks } from '../textures_world.js';
import { mansardGeo } from '../world_city.js';
import { ashlarMat, sbox, std, adder, canvasTex, uvMul, facadeMat, fluteMat, gold, bronze, pediment, cornice, columns, trees, lamps, shade, hex, reliefMat } from '../landmarks_world.js';
import { emis } from './common.js';

// =================== 그림(텍스처) ===================
// 양파 돔 무늬: spiral(꼬인 줄무늬) / chevron(지그재그) / diamond(마름모 비늘) / scale(물고기 비늘 기와) / plain(금박 주름)
function domeTex(kind, c1, c2, c3) {
  return canvasTex('mosdome' + kind + c1 + c2 + (c3 || ''), 256, 256, (g, w, h) => {
    const rnd = makeRng('mosdome' + kind + c1);
    g.fillStyle = c1; g.fillRect(0, 0, w, h);
    if (kind === 'spiral') {
      // 대각선 줄무늬가 가로로 정확히 한 바퀴(w) 밀리도록 → 돔에 감기면 소용돌이
      const n = 8, s = w / n;
      for (let i = -n; i < 2 * n; i++) {
        g.fillStyle = c2; g.beginPath();
        g.moveTo(i * s, h); g.lineTo(i * s + s * 0.5, h); g.lineTo(i * s + s * 0.5 + w * 0.5, 0); g.lineTo(i * s + w * 0.5, 0); g.closePath(); g.fill();
        if (c3) { g.fillStyle = c3; g.beginPath(); g.moveTo(i * s + s * 0.5, h); g.lineTo(i * s + s * 0.6, h); g.lineTo(i * s + s * 0.6 + w * 0.5, 0); g.lineTo(i * s + s * 0.5 + w * 0.5, 0); g.closePath(); g.fill(); }
      }
    } else if (kind === 'chevron') {
      const rows = 9, rh = h / rows, n = 12, s = w / n;
      for (let r = 0; r < rows; r++) {
        g.fillStyle = r % 2 ? c2 : (c3 || c1); g.beginPath();
        g.moveTo(0, r * rh + rh * 0.5);
        for (let i = 0; i <= n; i++) g.lineTo(i * s + s * 0.5, r * rh + (i % 2 ? rh * 0.5 : 0)), g.lineTo((i + 1) * s, r * rh + rh * 0.5);
        g.lineTo(w, r * rh + rh); g.lineTo(0, r * rh + rh); g.closePath(); g.fill();
      }
    } else if (kind === 'diamond') {
      const n = 10, s = w / n, rows = 10, rh = h / rows;
      for (let r = 0; r < rows; r++) for (let i = 0; i < n; i++) {
        const x = i * s + (r % 2 ? s / 2 : 0), y = r * rh;
        g.fillStyle = (i + r) % 3 === 0 && c3 ? c3 : c2; g.beginPath(); g.moveTo(x + s / 2, y); g.lineTo(x + s, y + rh / 2); g.lineTo(x + s / 2, y + rh); g.lineTo(x, y + rh / 2); g.closePath(); g.fill();
        g.fillStyle = 'rgba(255,255,255,0.28)'; g.beginPath(); g.moveTo(x + s / 2, y + 3); g.lineTo(x + s - 5, y + rh / 2); g.lineTo(x + s / 2, y + rh / 2); g.closePath(); g.fill();
        g.fillStyle = 'rgba(0,0,0,0.2)'; g.beginPath(); g.moveTo(x + 5, y + rh / 2); g.lineTo(x + s / 2, y + rh - 3); g.lineTo(x + s / 2, y + rh / 2); g.closePath(); g.fill();
      }
    } else if (kind === 'scale') {
      const n = 16, s = w / n, rows = 16, rh = h / rows;
      for (let r = rows; r >= -1; r--) for (let i = -1; i <= n; i++) {
        const x = i * s + (r % 2 ? s / 2 : 0), y = r * rh;
        g.fillStyle = rnd() < 0.18 && c3 ? c3 : (rnd() < 0.5 ? c2 : shade(parseInt(c2.slice(1), 16), 0.88));
        g.beginPath(); g.moveTo(x, y); g.lineTo(x + s, y); g.lineTo(x + s, y + rh * 0.5); g.arc(x + s / 2, y + rh * 0.5, s / 2, 0, Math.PI); g.closePath(); g.fill();
        g.strokeStyle = 'rgba(0,0,0,0.25)'; g.lineWidth = 1; g.beginPath(); g.arc(x + s / 2, y + rh * 0.5, s / 2, 0, Math.PI); g.stroke();
      }
    } else if (kind === 'plain') {
      for (let i = 0; i < 24; i++) { const x = i * w / 24, gr = g.createLinearGradient(x, 0, x + w / 24, 0); gr.addColorStop(0, shade(parseInt(c1.slice(1), 16), 0.8)); gr.addColorStop(0.5, shade(parseInt(c1.slice(1), 16), 1.15)); gr.addColorStop(1, shade(parseInt(c1.slice(1), 16), 0.85)); g.fillStyle = gr; g.fillRect(x, 0, w / 24 + 1, h); }
    }
    // 아래 끝 금빛 테 + 위쪽 빛
    g.fillStyle = '#d8b04a'; g.fillRect(0, h - 6, w, 6);
  });
}
const domeMat = (kind, c1, c2, c3, o = {}) => new THREE.MeshStandardMaterial(Object.assign({ map: domeTex(kind, c1, c2, c3), roughness: 0.42, metalness: 0.15 }, o));

// 붉은 벽돌 + 흰 돌 장식 (크렘린·성 바실리): 벽돌 줄눈, 흰 띠, 흰 아치 벽감(코코시닉)
function brickRedTex(key, o = {}) {
  return canvasTex('mosbrick' + key, 256, 256, (g, w, h) => {
    const rnd = makeRng('mosbrick' + key);
    bricks(g, w, h, o.base || '#a3402e', rnd);
    grime(g, w, h, rnd, 700, 0.05);
    if (o.arches) {
      // 흰 테두리 아치 창 + 장식 띠
      const n = o.arches, cw = w / n;
      for (let i = 0; i < n; i++) {
        const x = i * cw + cw * 0.28, ww = cw * 0.44, y = h * 0.34, hh = h * 0.44;
        g.fillStyle = '#efe8da'; g.beginPath(); g.moveTo(x - 5, y + hh + 4); g.lineTo(x - 5, y + ww / 2); g.arc(x + ww / 2, y + ww / 2, ww / 2 + 5, Math.PI, 0); g.lineTo(x + ww + 5, y + hh + 4); g.closePath(); g.fill();
        g.fillStyle = '#2a2420'; g.beginPath(); g.moveTo(x, y + hh); g.lineTo(x, y + ww / 2); g.arc(x + ww / 2, y + ww / 2, ww / 2, Math.PI, 0); g.lineTo(x + ww, y + hh); g.closePath(); g.fill();
        g.fillStyle = 'rgba(140,170,190,0.35)'; g.fillRect(x + 3, y + ww / 2, ww * 0.35, hh - ww / 2 - 3);
        // 코코시닉 (위쪽 흰 반원 장식)
        g.strokeStyle = '#efe8da'; g.lineWidth = 4; g.beginPath(); g.arc(i * cw + cw / 2, h * 0.2, cw * 0.4, Math.PI, 0); g.stroke();
        g.fillStyle = shade(0xa3402e, 0.75); g.beginPath(); g.arc(i * cw + cw / 2, h * 0.2, cw * 0.36, Math.PI, 0); g.fill();
      }
    }
    if (o.bands !== false) { g.fillStyle = '#efe8da'; g.fillRect(0, 0, w, 7); g.fillRect(0, h - 10, w, 10); g.fillStyle = 'rgba(0,0,0,0.25)'; g.fillRect(0, 7, w, 2); g.fillRect(0, h - 12, w, 2); }
    if (o.slits) { g.fillStyle = '#2a1d18'; for (let x = 16; x < w; x += 42) g.fillRect(x, h * 0.45, 5, 18); }
    if (o.diamonds) for (let x = 0; x < w; x += 22) { g.fillStyle = '#efe8da'; g.beginPath(); g.moveTo(x + 11, h * 0.84); g.lineTo(x + 18, h * 0.88); g.lineTo(x + 11, h * 0.92); g.lineTo(x + 4, h * 0.88); g.closePath(); g.fill(); }
  });
}
const brickMat = (key, o) => { const t = brickRedTex(key, o); return new THREE.MeshStandardMaterial({ map: t, bumpMap: t, bumpScale: 0.5, roughness: 0.86 }); };

// 배경 건물: 스탈린 양식 아파트 (가로 4칸 × 6층 = 1.6 × 1.8). 황토·크림 벽, 흰 창틀, 벽기둥, 층마다 가는 띠
const ST_WALL = ['#cf9f55', '#dccb98', '#c9805f', '#dab55e', '#b9ab8c', '#cf8e4c'];
function stalinHD(v) {
  return once('mosstalin' + v, () => {
    const W = 256, H = 288, [c, g] = cv(W, H), [ce, e] = cv(W, H), rnd = makeRng('mosstalin' + v);
    e.fillStyle = '#000'; e.fillRect(0, 0, W, H);
    const wall = ST_WALL[v % ST_WALL.length]; g.fillStyle = wall; g.fillRect(0, 0, W, H);
    grime(g, W, H, rnd, 900, 0.05);
    const cw = W / 4, rh = H / 6;
    for (let k = 0; k <= 4; k += 2) { g.fillStyle = 'rgba(255,250,235,0.35)'; g.fillRect(k * cw - 6, 0, 12, H); g.fillStyle = 'rgba(0,0,0,0.15)'; g.fillRect(k * cw + 6, 0, 2, H); }
    for (let r = 0; r < 6; r++) for (let k = 0; k < 4; k++) {
      const ww = cw * 0.44, wh = rh * 0.6, x = k * cw + (cw - ww) / 2, y = r * rh + rh * 0.2;
      g.fillStyle = '#f2ece0'; g.fillRect(x - 5, y - 5, ww + 10, wh + 9);
      if (r % 2 === 0) { g.fillStyle = '#f6f0e4'; g.beginPath(); g.moveTo(x - 7, y - 5); g.lineTo(x + ww / 2, y - 13); g.lineTo(x + ww + 7, y - 5); g.closePath(); g.fill(); }
      pane(g, e, x, y, ww, wh, rnd, { frame: '#f2ece0', lit: 0.16, sky: '#9fb3c2' });
      if (r === 2 && k % 3 === 1) { g.fillStyle = '#f2ece0'; g.fillRect(x - 8, y + wh, ww + 16, 6); for (let b = x - 6; b < x + ww + 6; b += 5) g.fillRect(b, y + wh - 10, 2, 10); }
    }
    for (let r = 0; r <= 6; r++) { g.fillStyle = 'rgba(255,250,235,0.5)'; g.fillRect(0, r * rh - 2, W, 3); g.fillStyle = 'rgba(0,0,0,0.12)'; g.fillRect(0, r * rh + 1, W, 2); }
    return { map: mk(c), emissiveMap: mk(ce) };
  });
}
// 흐루숍카·판상 아파트 (가로 4칸 × 5층 = 1.6 × 1.5): 콘크리트 판 이음, 발코니
const PN_WALL = ['#d6d4cc', '#c8ccce', '#dcd2c0', '#c7c2b6', '#d2d8da'];
function panelHD(v) {
  return once('mospanel' + v, () => {
    const W = 256, H = 240, [c, g] = cv(W, H), [ce, e] = cv(W, H), rnd = makeRng('mospanel' + v);
    e.fillStyle = '#000'; e.fillRect(0, 0, W, H);
    g.fillStyle = PN_WALL[v % PN_WALL.length]; g.fillRect(0, 0, W, H);
    grime(g, W, H, rnd, 1400, 0.07);
    const cw = W / 4, rh = H / 5;
    for (let r = 0; r < 5; r++) for (let k = 0; k < 4; k++) {
      const x = k * cw, y = r * rh;
      g.fillStyle = `rgba(${rnd() < 0.5 ? '0,0,0' : '255,255,255'},${rnd() * 0.06})`; g.fillRect(x + 2, y + 2, cw - 4, rh - 4);
      g.fillStyle = 'rgba(0,0,0,0.22)'; g.fillRect(x, y, cw, 2); g.fillRect(x, y, 2, rh);
      const balc = v % 2 === 0 && k % 2 === 1;
      pane(g, e, x + cw * 0.2, y + rh * 0.22, cw * 0.6, rh * 0.5, rnd, { frame: '#e8e4dc', lit: 0.14 });
      if (balc) { g.fillStyle = ['#b9b4aa', '#8fa3b5', '#c47e62'][v % 3]; g.fillRect(x + 4, y + rh * 0.6, cw - 8, rh * 0.36); g.fillStyle = 'rgba(0,0,0,0.3)'; g.fillRect(x + 4, y + rh * 0.6, cw - 8, 3); }
    }
    return { map: mk(c), emissiveMap: mk(ce) };
  });
}
// 앞줄(카메라 쪽) 2~3층 옛 상인 저택: 파스텔 벽 + 흰 창틀 (가로 3칸 × 2층 = 1.2 × 0.7)
const OLD_WALL = ['#e6c661', '#dea19a', '#a9cdb5', '#a8bed8', '#e8d9b0', '#d7a35c'];
function oldHD(v) {
  return once('mosold' + v, () => {
    const W = 192, H = 112, [c, g] = cv(W, H), [ce, e] = cv(W, H), rnd = makeRng('mosold' + v);
    e.fillStyle = '#000'; e.fillRect(0, 0, W, H);
    g.fillStyle = OLD_WALL[v % OLD_WALL.length]; g.fillRect(0, 0, W, H);
    grime(g, W, H, rnd, 300, 0.05);
    const cw = W / 3, rh = H / 2;
    for (let r = 0; r < 2; r++) for (let k = 0; k < 3; k++) {
      const ww = cw * 0.42, wh = rh * 0.56, x = k * cw + (cw - ww) / 2, y = r * rh + rh * 0.22;
      g.fillStyle = '#f7f3ea'; g.fillRect(x - 5, y - 6, ww + 10, wh + 10);
      g.beginPath(); g.arc(x + ww / 2, y - 6, ww / 2 + 5, Math.PI, 0); g.fill();
      pane(g, e, x, y, ww, wh, rnd, { frame: '#f7f3ea', lit: 0.2 });
    }
    g.fillStyle = '#f7f3ea'; g.fillRect(0, rh - 3, W, 5); g.fillRect(0, 0, 7, H); g.fillRect(W - 7, 0, 7, H);
    return { map: mk(c), emissiveMap: mk(ce) };
  });
}
// 흰 회벽 + 아치 창 (교회·구세주 대성당)
const whiteChurch = (key, cols = 3) => facadeMat('mos' + key, { wall: 0xf1ede4, cols, rows: 1, ww: 0.34, wh: 0.55, wy: 0.25, win: 'arch', key: true, band: false, glass: '#3e4650' });
// 녹색 함석 지붕 (모스크바 옛 건물)
function tinRoof(color = 0x5f8a6a) {
  const t = canvasTex('mostin' + color, 128, 128, (g, w, h) => {
    const rnd = makeRng('mostin' + color);
    g.fillStyle = hex(color); g.fillRect(0, 0, w, h);
    for (let x = 0; x < w; x += 10) { g.fillStyle = shade(color, 0.9 + rnd() * 0.18); g.fillRect(x, 0, 9, h); g.fillStyle = shade(color, 0.62); g.fillRect(x + 9, 0, 1, h); g.fillStyle = 'rgba(255,255,255,0.2)'; g.fillRect(x, 0, 1, h); }
    for (let i = 0; i < 20; i++) { g.fillStyle = 'rgba(80,50,30,0.12)'; g.fillRect(rnd() * w, rnd() * h, 2 + rnd() * 3, 8 + rnd() * 20); }
  });
  return new THREE.MeshStandardMaterial({ map: t, bumpMap: t, bumpScale: 0.4, roughness: 0.55, metalness: 0.3, side: THREE.DoubleSide });
}
// 콘크리트 (오스탄키노)
function concreteMat(key, slits) {
  const t = canvasTex('mosconc' + key, 128, 256, (g, w, h) => {
    const rnd = makeRng('mosconc' + key);
    g.fillStyle = '#d9d6cf'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 900; i++) { g.fillStyle = `rgba(0,0,0,${rnd() * 0.07})`; g.fillRect(rnd() * w, rnd() * h, 2, 2); }
    g.fillStyle = 'rgba(0,0,0,0.1)'; for (let y = 0; y < h; y += 32) g.fillRect(0, y, w, 1);
    if (slits) { g.fillStyle = '#4a5560'; for (let x = 6; x < w; x += 16) g.fillRect(x, 20, 4, h - 40); }
  });
  return new THREE.MeshStandardMaterial({ map: t, bumpMap: t, bumpScale: 0.3, roughness: 0.8 });
}

// =================== 모양 도우미 ===================
// 양파 돔: 밑에서 불룩하게 부풀었다가 오목하게 좁아져 뾰족한 끝 (LatheGeometry)
function onionGeo(r, h, seg = 18, fat = 1) {
  const P = [[0.55, 0], [0.8, 0.06], [0.98 * fat, 0.2], [1.02 * fat, 0.32], [0.94 * fat, 0.45], [0.74, 0.58], [0.48, 0.7], [0.26, 0.8], [0.12, 0.89], [0.04, 0.96], [0.001, 1]];
  return new THREE.LatheGeometry(P.map(([x, y]) => new THREE.Vector2(x * r, y * h)), seg);
}
// 투구 모양 돔 (구세주 대성당)
function helmetGeo(r, h, seg = 24) {
  const P = [[1, 0], [1.02, 0.15], [0.98, 0.35], [0.85, 0.55], [0.62, 0.72], [0.35, 0.85], [0.14, 0.94], [0.03, 0.99], [0.001, 1]];
  return new THREE.LatheGeometry(P.map(([x, y]) => new THREE.Vector2(x * r, y * h)), seg);
}
// 정교회 십자가 (금)
function cross(add, m, x, y, z, s = 1) {
  add(new THREE.BoxGeometry(0.02 * s, 0.32 * s, 0.02 * s), m, x, y + 0.16 * s, z);
  add(new THREE.BoxGeometry(0.16 * s, 0.02 * s, 0.02 * s), m, x, y + 0.22 * s, z);
  add(new THREE.BoxGeometry(0.09 * s, 0.018 * s, 0.02 * s), m, x, y + 0.28 * s, z);
  add(new THREE.BoxGeometry(0.1 * s, 0.018 * s, 0.02 * s), m, x, y + 0.09 * s, z).rotation.z = 0.4;
}
// 붉은 별 (크렘린 탑 꼭대기, 루비빛)
function rubyStar(add, x, y, z, r, mm) {
  const s = new THREE.Shape();
  for (let i = 0; i < 10; i++) { const a = Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.42 : r; i ? s.lineTo(Math.cos(a) * rr, Math.sin(a) * rr) : s.moveTo(Math.cos(a) * rr, Math.sin(a) * rr); }
  const g = new THREE.ExtrudeGeometry(s, { depth: r * 0.25, bevelEnabled: true, bevelSize: r * 0.06, bevelThickness: r * 0.06, bevelSegments: 1 }); g.translate(0, 0, -r * 0.125);
  const m = mm || new THREE.MeshStandardMaterial({ color: 0xd8132a, emissive: 0xff2030, emissiveIntensity: 0.9, roughness: 0.3, metalness: 0.2 });
  const o = add(g, m, x, y, z); o.castShadow = false;
  const o2 = add(g.clone(), m, x, y, z); o2.rotation.y = Math.PI / 2; o2.castShadow = false;
  return o;
}
// 크렘린 성벽 톱니(제비꼬리 모양 메를론): 길이 len 방향 x, 중심 (x0,y,z)
function merlons(add, m, x0, y, z, len, step = 0.3, s = 1) {
  for (let x = -len / 2 + step / 2; x < len / 2; x += step) {
    add(new THREE.BoxGeometry(0.16 * s, 0.14 * s, 0.14 * s), m, x0 + x, y + 0.07 * s, z);
    for (const sx of [-1, 1]) { const t = add(new THREE.BoxGeometry(0.06 * s, 0.12 * s, 0.14 * s), m, x0 + x + sx * 0.05 * s, y + 0.19 * s, z); t.rotation.z = -sx * 0.25; }
  }
}
// 맞배 지붕 (용마루 x 방향): 폭 w(x) × 깊이 d(z), 높이 h
function gableRoof(w, d, h) {
  const s = new THREE.Shape(); s.moveTo(-d / 2, 0); s.lineTo(d / 2, 0); s.lineTo(0, h); s.closePath();
  const g = new THREE.ExtrudeGeometry(s, { depth: w, bevelEnabled: false }); g.translate(0, 0, -w / 2); g.rotateY(Math.PI / 2);
  return uvMul(g, 1.5, 1.5);
}
// 자작나무 (흰 줄기 + 연두 잎) — 배경용, 통에 모음
function birch(B, M, x, z, s, rnd) {
  const tr = new THREE.CylinderGeometry(0.035 * s, 0.05 * s, 1.0 * s, 5); tr.translate(x, 0.5 * s, z); B.push(M.birchBark, tr);
  for (let k = 0; k < 2; k++) {
    const c = new THREE.IcosahedronGeometry(0.28 * s * (1 - k * 0.25), 0); c.scale(1, 1.5, 1); c.translate(x + rnd.range(-0.05, 0.05) * s, (0.95 + k * 0.38) * s, z + rnd.range(-0.05, 0.05) * s);
    B.push(rnd() < 0.5 ? M.birchLeaf : M.birchLeaf2, c);
  }
}

// =================== 배경 도시 ===================
function build(C, H) {
  const { free, B, rnd, boxWalls, roofKit, mat } = H, S = C.S, b = S.bounds, R = S.river;
  const M = {
    stalin: [0, 1, 2, 3, 4, 5].map((v) => emis(stalinHD(v), { roughness: 0.85, emissiveIntensity: 0.3 })),
    panel: [0, 1, 2, 3, 4].map((v) => emis(panelHD(v), { roughness: 0.9 })),
    old: [0, 1, 2, 3, 4, 5].map((v) => emis(oldHD(v), { roughness: 0.85, emissiveIntensity: 0.3 })),
    church: whiteChurch('bgch', 2),
    roof: mat(0x5c5f63, { roughness: 0.95 }), cornice: mat(0xefe6d2, { roughness: 0.85 }), base: mat(0x6e6560, { roughness: 0.9 }),
    tinG: tinRoof(0x5f8a6a), tinR: tinRoof(0x9a5a44), tinGray: tinRoof(0x7d8288),
    mech: C.M.mech, spire: mat(0xd8b04a, { metalness: 0.8, roughness: 0.3 }),
    domes: [domeMat('plain', '#d9ae48', '#d9ae48', null, { metalness: 0.85, roughness: 0.28 }), domeMat('plain', '#3f6fb0', '#3f6fb0', null, { metalness: 0.3 }), domeMat('plain', '#4f8f5f', '#4f8f5f'), domeMat('diamond', '#2e4f8f', '#3f6fb0', '#e6c35a')],
    birchBark: mat(0xece8e0, { roughness: 0.8 }), birchLeaf: mat(0x8fbf4e, { flatShading: true, roughness: 0.9 }), birchLeaf2: mat(0x6fa040, { flatShading: true, roughness: 0.9 }),
    lawn: mat(0x6f9a4a, { roughness: 1 }), path: mat(0xc8c0ae, { roughness: 1 })
  };
  const plotM = mat(0xb7b3ab);
  const put = (m, g) => B.push(m, g);
  // 스탈린 양식 건물 한 동: 화강암 기단 + 벽 + 무거운 처마 + (가끔) 모서리 첨탑
  const stalinBlock = (x, z, w, d, ry, floors, spire) => {
    const h = floors * 0.3, m = M.stalin[rnd.int(0, 5)];
    boxWalls(B, x, 0, z, w + 0.04, 0.32, d + 0.04, ry, M.base, null, 1, 1);
    boxWalls(B, x, 0.32, z, w, h - 0.32, d, ry, m, M.roof, 1.6, 1.8);
    roofKit(B, x, z, w + 0.1, d + 0.1, h, ry, M.cornice, { t: 0.14, rh: 0.16 });
    if (spire) {
      const tw = Math.min(w, d) * 0.45, th = 0.9;
      boxWalls(B, x, h, z, tw, th, tw, ry, m, M.roof, 1.6, 1.8);
      roofKit(B, x, z, tw + 0.08, tw + 0.08, h + th, ry, M.cornice, { t: 0.1, rh: 0.12 });
      const c = new THREE.ConeGeometry(tw * 0.35, 1.4, 8); c.translate(x, h + th + 0.85, z); put(M.spire, c);
    }
  };
  const church = (x, z, s) => {
    const w = 1.6 * s, d = 2.2 * s, h = 1.1 * s, ry = rnd() < 0.5 ? 0 : Math.PI / 2;
    boxWalls(B, x, 0, z, w, h, d, ry, M.church, null, w, h);
    put(M.tinG, mansardGeo(x, h, z, w + 0.06, d + 0.06, 0.25 * s, ry, 1.4));
    const dm = M.domes[rnd.int(0, M.domes.length - 1)];
    const dr = new THREE.CylinderGeometry(0.32 * s, 0.32 * s, 0.55 * s, 12); dr.translate(x, h + 0.45 * s, z); put(M.church, dr);
    const on = onionGeo(0.4 * s, 0.75 * s, 14); on.translate(x, h + 0.72 * s, z); put(dm, on);
    for (const [ox, oz] of [[1, 1], [-1, 1], [1, -1], [-1, -1]]) {
      const px = x + ox * w * 0.32, pz = z + oz * d * 0.3;
      const sd = new THREE.CylinderGeometry(0.13 * s, 0.13 * s, 0.3 * s, 10); sd.translate(px, h + 0.25 * s, pz); put(M.church, sd);
      const so = onionGeo(0.17 * s, 0.34 * s, 10); so.translate(px, h + 0.4 * s, pz); put(dm, so);
    }
    // 종탑 (천막 지붕)
    const bx = x + (ry ? d * 0.65 : 0), bz = z + (ry ? 0 : d * 0.65);
    boxWalls(B, bx, 0, bz, 0.6 * s, 2.0 * s, 0.6 * s, 0, M.church, null, 0.6 * s, 1.0 * s);
    const tent = new THREE.ConeGeometry(0.42 * s, 1.0 * s, 8); tent.rotateY(Math.PI / 8); tent.translate(bx, 2.5 * s, bz); put(M.tinG, tent);
    const bo = onionGeo(0.11 * s, 0.24 * s, 10); bo.translate(bx, 3.0 * s, bz); put(M.domes[0], bo);
  };
  for (let bx = -150; bx < 150; bx += 9) for (let bz = -90; bz < 90; bz += 9) {
    const cx = bx + 4.5, cz = bz + 4.5, dist = Math.hypot(cx, cz);
    if (dist > 150 || !free(cx, cz, 4)) continue;
    const pg = new THREE.PlaneGeometry(7.4, 7.4); pg.rotateX(-Math.PI / 2); pg.translate(cx, 0.006, cz); put(plotM, pg);
    const front = cz > b.z1 - 6 && cz < b.z1 + 34 && cx > b.x0 - 30 && cx < b.x1 + 30;
    const side = !front && cz > b.z0 - 4 && cz < b.z1 && (cx < b.x0 || cx > b.x1) && Math.min(Math.abs(cx - b.x0), Math.abs(cx - b.x1)) < 16;
    const across = R && cz < R.z;
    const r = rnd();
    if (r < 0.07 && !across) {
      // 작은 양파 돔 교회 + 자작나무 마당
      const g1 = new THREE.PlaneGeometry(7, 7); g1.rotateX(-Math.PI / 2); g1.translate(cx, 0.01, cz); put(M.lawn, g1);
      church(cx - 0.6, cz - 0.4, front ? 0.9 : 1.15);
      for (let k = 0; k < 7; k++) birch(B, M, cx + rnd.range(-3.2, 3.2), cz + (k % 2 ? 3.1 : -3.1) + rnd.range(-0.3, 0.3), rnd.range(0.8, 1.1), rnd);
      continue;
    }
    if (r < 0.15 && !across) {
      // 자작나무 숲 공원 (산책길 + 잔디)
      const g1 = new THREE.PlaneGeometry(7.2, 7.2); g1.rotateX(-Math.PI / 2); g1.translate(cx, 0.01, cz); put(M.lawn, g1);
      const g2 = new THREE.PlaneGeometry(7.2, 0.7); g2.rotateX(-Math.PI / 2); g2.rotateY(rnd() < 0.5 ? 0.5 : -0.5); g2.translate(cx, 0.014, cz); put(M.path, g2);
      for (let k = 0; k < 16; k++) birch(B, M, cx + rnd.range(-3.3, 3.3), cz + rnd.range(-3.3, 3.3), rnd.range(0.8, 1.25), rnd);
      continue;
    }
    if (front) {
      // 카메라 쪽: 2~3층 파스텔 옛 저택 줄 + 녹색·적갈색 함석 지붕
      for (const sz of [-1, 1]) for (let k = 0; k < 3; k++) {
        const w = 2.2, x = cx - 2.4 + k * 2.4, z = cz + sz * 2.3, fl = rnd.int(2, 3), h = fl * 0.35;
        boxWalls(B, x, 0, z, w, h, 2.0, sz > 0 ? 0 : Math.PI, M.old[rnd.int(0, 5)], null, 1.2, 0.7);
        roofKit(B, x, z, w + 0.04, 2.04, h, 0, M.cornice, { t: 0.05, rh: 0.06 });
        put(rnd() < 0.6 ? M.tinG : M.tinR, mansardGeo(x, h + 0.06, z, w, 2.0, 0.42, 0, 1.6));
      }
      for (let k = 0; k < 4; k++) birch(B, M, cx - 3 + k * 2, cz + (rnd() < 0.5 ? -3.9 : 3.9), rnd.range(0.6, 0.85), rnd);
    } else if (across || (dist < 85 && r < 0.62)) {
      // 스탈린 양식 둘레형 블록 (네 변 + 안뜰), 모서리에 가끔 첨탑
      const dep = 1.9, L = 7.2, fl = (side ? 5 : across ? 9 : 7) + rnd.int(0, 2);
      let sp = !side && rnd() < (across ? 0.35 : 0.18);
      for (const [ox, oz, ry, len] of [[0, L / 2 - dep / 2, 0, L], [0, -L / 2 + dep / 2, Math.PI, L], [L / 2 - dep / 2, 0, Math.PI / 2, L - dep * 2], [-L / 2 + dep / 2, 0, -Math.PI / 2, L - dep * 2]]) {
        stalinBlock(cx + ox, cz + oz, len - 0.04, dep, ry, fl, sp && oz > 0);
        if (oz > 0) sp = false;
      }
      if (rnd() < 0.6) for (let k = 0; k < 3; k++) birch(B, M, cx - 1.4 + k * 1.4, cz + rnd.range(-0.8, 0.8), rnd.range(0.7, 0.95), rnd);
    } else if (dist < 105 || side) {
      // 흐루숍카: 5층 긴 판상 아파트 2줄 + 사이 자작나무
      for (const sz of [-1, 1]) {
        const h = 5 * 0.3 * (side ? 0.85 : 1);
        boxWalls(B, cx, 0, cz + sz * 2.4, 7.0, h, 1.5, 0, M.panel[rnd.int(0, 4)], M.roof, 1.6, 1.5);
        roofKit(B, cx, cz + sz * 2.4, 7.0, 1.5, h, 0, M.tinGray, { t: 0.05, rh: 0.08 });
      }
      for (let k = 0; k < 5; k++) birch(B, M, cx - 3 + k * 1.5, cz + rnd.range(-0.6, 0.6), rnd.range(0.7, 1.0), rnd);
    } else {
      // 먼 곳: 9~17층 판상 고층 (줄무늬 발코니)
      const n = rnd.int(1, 2);
      for (let k = 0; k < n; k++) {
        const w = n > 1 ? 3 : rnd.range(3, 6.5), h = rnd.int(9, 17) * 0.3, x = cx + (n > 1 ? (k ? 1.8 : -1.8) : 0);
        boxWalls(B, x, 0, cz, w, h, 2.2, 0, M.panel[rnd.int(0, 4)], M.roof, 1.6, 1.5);
        roofKit(B, x, cz, w, 2.2, h, 0, M.tinGray, { t: 0.06, rh: 0.1, house: [0.8, 0.4, 0.8], houseM: M.mech });
      }
    }
  }
  // 강 건너 강변: 스탈린 양식 강변 아파트 줄 (크렘린 강변 맞은편)
  if (R) for (let x = -150; x < 150; x += 5) {
    const z = R.z - R.w / 2 - 3.4;
    if (!free(x, z, 2.4)) continue;
    stalinBlock(x, z, 4.7, 2.2, Math.PI, rnd.int(7, 10), rnd() < 0.12);
  }
}

// =================== 전투 구역 안 랜드마크 ===================
// 크렘린: 붉은 벽돌 성벽(제비꼬리 톱니) + 스파스카야 탑(시계, 초록 천막 첨탑, 붉은 별) + 모서리 탑 2개 + 레닌 묘 + 전나무
function kremlin(G, k) {
  const add = adder(G), W = k.w, D = k.d;
  const wallM = brickMat('kwall', { slits: true, bands: false }), brick = brickMat('ktower', { arches: 2 }), brick3 = brickMat('ktower3', { arches: 4, diamonds: true });
  const white = std(0xefe8da, { roughness: 0.7 }), green = new THREE.MeshStandardMaterial({ map: domeTex('scale', '#3d7a52', '#3f8256', '#5aa070'), roughness: 0.5, metalness: 0.2 }), au = gold();
  const zW = -D * 0.12;
  // 붉은광장 포석
  const sq = canvasTex('mosredsq', 128, 128, (g, w, h) => { const rnd = makeRng('redsq'); g.fillStyle = '#5a5552'; g.fillRect(0, 0, w, h); for (let y = 0; y < h; y += 8) for (let x = (y / 8) % 2 ? -4 : 0; x < w; x += 8) { g.fillStyle = shade(0x5a5552, 0.8 + rnd() * 0.45); g.beginPath(); g.arc(x + 4, y + 4, 3.6, 0, 7); g.fill(); } });
  sq.repeat.set(W / 1.5, D / 3); add(new THREE.PlaneGeometry(W, D * 0.55), new THREE.MeshStandardMaterial({ map: sq, roughness: 0.95 }), 0, 0.065, D * 0.22).rotation.x = -Math.PI / 2;
  // 성벽
  const wl = W * 0.92;
  add(sbox(wl, 1.0, 0.42, 1.2, 1.0), wallM, 0, 0.06 + 0.5, zW);
  merlons(add, wallM, 0, 1.06, zW + 0.12, wl, 0.3);
  // 성벽 뒤 크렘린 전나무
  const fir = std(0x2f5a3a, { roughness: 1, flatShading: true });
  for (let i = 0; i < 9; i++) { const x = -wl / 2 + 0.4 + i * (wl - 0.8) / 8; if (Math.abs(x) < 1.1) continue; add(new THREE.ConeGeometry(0.28, 1.1, 7), fir, x, 0.06 + 0.9, zW - 0.6 - (i % 2) * 0.25); }
  // 모서리 탑: 왼쪽 둥근 탑(베클레미셰프), 오른쪽 사각 탑 (각각 초록 천막 지붕 + 작은 별)
  const xl = -wl / 2 + 0.1, xr = wl / 2 - 0.1;
  add(uvMul(new THREE.CylinderGeometry(0.42, 0.48, 1.7, 16), 3, 1.4), wallM, xl, 0.06 + 0.85, zW);
  merlons(add, wallM, xl, 1.76, zW + 0.44, 0.6, 0.3, 0.8);
  add(uvMul(new THREE.CylinderGeometry(0.3, 0.34, 0.5, 8), 2, 0.5), brick3, xl, 0.06 + 2.0, zW);
  add(new THREE.ConeGeometry(0.36, 1.4, 8), green, xl, 0.06 + 2.95, zW);
  rubyStar(add, xl, 0.06 + 3.85, zW, 0.14);
  add(sbox(0.8, 1.6, 0.8, 0.8, 0.8), wallM, xr, 0.06 + 0.8, zW);
  add(sbox(0.6, 0.6, 0.6, 0.6, 0.6), brick3, xr, 0.06 + 1.9, zW);
  add(new THREE.ConeGeometry(0.46, 1.2, 4), green, xr, 0.06 + 2.8, zW).rotation.y = Math.PI / 4;
  rubyStar(add, xr, 0.06 + 3.6, zW, 0.12);
  // 스파스카야 탑
  const tx = 0, tz = zW + 0.05;
  let y = 0.06;
  add(sbox(1.35, 2.1, 1.35, 0.9, 1.05), brick, tx, y + 1.05, tz);
  add(new THREE.PlaneGeometry(0.42, 0.7), std(0x1c1714), tx, y + 0.35, tz + 0.68);   // 성문
  add(new THREE.CircleGeometry(0.21, 16, 0, Math.PI), std(0x1c1714), tx, y + 0.7, tz + 0.68);
  y += 2.1; cornice(add, white, 1.35, 1.35, y, tx, tz, 0.07); y += 0.11;
  // 흰 돌 고딕 단 + 모서리 작은 첨탑
  add(sbox(1.15, 0.55, 1.15, 0.6, 0.55), brick3, tx, y + 0.27, tz);
  for (const [sx, sz] of [[1, 1], [-1, 1], [1, -1], [-1, -1]]) { add(new THREE.ConeGeometry(0.07, 0.5, 6), white, tx + sx * 0.58, y + 0.3 + 0.25 + 0.2, tz + sz * 0.58); add(new THREE.SphereGeometry(0.035, 8, 6), au, tx + sx * 0.58, y + 1.02, tz + sz * 0.58); }
  y += 0.55;
  // 시계 단 (네 면 시계)
  add(sbox(1.0, 0.9, 1.0, 0.5, 0.45), brick3, tx, y + 0.45, tz);
  const clock = canvasTex('moskclock', 128, 128, (g, w, h) => {
    g.fillStyle = '#d8b04a'; g.beginPath(); g.arc(64, 64, 62, 0, 7); g.fill();
    g.fillStyle = '#1d2a4a'; g.beginPath(); g.arc(64, 64, 54, 0, 7); g.fill();
    g.fillStyle = '#e8c860'; for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2; g.save(); g.translate(64 + Math.cos(a) * 44, 64 + Math.sin(a) * 44); g.rotate(a); g.fillRect(-6, -2, 12, 4); g.restore(); }
    g.strokeStyle = '#f0d070'; g.lineWidth = 5; g.beginPath(); g.moveTo(64, 64); g.lineTo(64, 28); g.moveTo(64, 64); g.lineTo(88, 74); g.stroke();
  });
  const cm = new THREE.MeshStandardMaterial({ map: clock, emissiveMap: clock, emissive: 0x504020, roughness: 0.4, metalness: 0.4 });
  for (let i = 0; i < 4; i++) { const a = i * Math.PI / 2, c = add(new THREE.CircleGeometry(0.34, 24), cm, tx + Math.sin(a) * 0.505, y + 0.45, tz + Math.cos(a) * 0.505); c.rotation.y = a; }
  y += 0.9; cornice(add, white, 1.0, 1.0, y, tx, tz, 0.05); y += 0.08;
  for (const [sx, sz] of [[1, 1], [-1, 1], [1, -1], [-1, -1]]) add(new THREE.ConeGeometry(0.06, 0.42, 6), white, tx + sx * 0.44, y + 0.21, tz + sz * 0.44);
  // 팔각 단 (붉은 벽돌 + 흰 아치) → 열린 흰 아케이드 → 초록 천막 첨탑
  add(uvMul(new THREE.CylinderGeometry(0.42, 0.46, 0.75, 8), 3, 0.75), brick3, tx, y + 0.375, tz); y += 0.75;
  add(new THREE.CylinderGeometry(0.47, 0.47, 0.06, 8), white, tx, y + 0.03, tz); y += 0.06;
  for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2 + Math.PI / 8; add(new THREE.BoxGeometry(0.07, 0.42, 0.07), white, tx + Math.cos(a) * 0.36, y + 0.21, tz + Math.sin(a) * 0.36); }
  add(new THREE.CylinderGeometry(0.2, 0.2, 0.42, 8), std(0x2a2522), tx, y + 0.21, tz); y += 0.42;
  add(new THREE.CylinderGeometry(0.44, 0.44, 0.06, 8), white, tx, y + 0.03, tz); y += 0.06;
  const spire = new THREE.ConeGeometry(0.42, 1.5, 8); uvMul(spire, 2, 2);
  add(spire, green, tx, y + 0.75, tz); y += 1.5;
  add(new THREE.SphereGeometry(0.06, 10, 8), au, tx, y + 0.02, tz);
  add(new THREE.CylinderGeometry(0.015, 0.02, 0.2, 6), au, tx, y + 0.12, tz);
  rubyStar(add, tx, y + 0.4, tz, 0.22);
  // 레닌 묘 (붉은·검은 화강암 계단 피라미드) — 탑 오른쪽 앞
  const gr1 = std(0x6e2a26, { roughness: 0.4, metalness: 0.15 }), gr2 = std(0x2a2324, { roughness: 0.35, metalness: 0.15 });
  let my = 0.06;
  for (const [w, h, m] of [[1.6, 0.22, gr1], [1.3, 0.12, gr2], [1.05, 0.14, gr1], [0.8, 0.1, gr2], [0.56, 0.12, gr1], [0.62, 0.05, gr2]]) { add(new THREE.BoxGeometry(w, h, w * 0.55), m, 2.1, my + h / 2, zW + 0.95); my += h; }
  lamps(add, [[-1.0, D * 0.42], [1.0, D * 0.42], [-3.2, D * 0.42], [3.4, D * 0.42]]);
}

// 성 바실리 대성당: 가운데 천막 탑 + 큰 양파 돔 4 + 작은 양파 돔 4 (돔마다 다른 꼬임·지그재그·비늘 무늬) + 종탑
function basil(G, k) {
  const add = adder(G), s = Math.min(k.w, k.d) / 4.4;
  const red = brickMat('basil', { arches: 3, diamonds: true }), red2 = brickMat('basil2', { arches: 2 }), base = brickMat('basilb', { arches: 5, bands: true });
  const white = std(0xefe8da, { roughness: 0.7 }), au = gold();
  const D = {
    a: domeMat('spiral', '#2f8a4e', '#e8c23a', '#c8262e'),       // 초록·노랑 꼬임
    b: domeMat('spiral', '#2a58a8', '#f2f0ea'),                  // 파랑·흰 꼬임
    c: domeMat('chevron', '#c8262e', '#2f8a4e', '#f2f0ea'),      // 빨강·초록 지그재그
    d: domeMat('diamond', '#2f7a46', '#e8c23a', '#c8262e'),      // 마름모 비늘
    e: domeMat('spiral', '#c8262e', '#f2f0ea', '#2f8a4e'),       // 빨강·흰 꼬임
    f: domeMat('chevron', '#e8c23a', '#2a58a8'),                 // 노랑·파랑 지그재그
    g: domeMat('diamond', '#c8262e', '#f2c64a'),
    h: domeMat('plain', '#d8aa45', '#d8aa45', null, { metalness: 0.85, roughness: 0.28 })
  };
  // 기단 (붉은 벽돌 회랑 + 흰 계단)
  add(new THREE.CylinderGeometry(1.95 * s, 2.05 * s, 0.12, 8), std(0xd9d2c4), 0, 0.06 + 0.06, 0).rotation.y = Math.PI / 8;
  const gal = new THREE.CylinderGeometry(1.75 * s, 1.8 * s, 0.85 * s, 8); uvMul(gal, 5, 0.9);
  add(gal, base, 0, 0.18 + 0.425 * s, 0).rotation.y = Math.PI / 8;
  const y0 = 0.18 + 0.85 * s;
  add(new THREE.CylinderGeometry(1.8 * s, 1.8 * s, 0.05, 8), white, 0, y0, 0).rotation.y = Math.PI / 8;
  for (let i = 0; i < 4; i++) add(new THREE.BoxGeometry(1.0 * s, 0.06, 0.18), white, 0, 0.12 + i * 0.07, 1.9 * s + 0.05 - i * 0.16);   // 남쪽 계단
  // 예배당 하나: 팔각 몸체 + 흰 띠 + 북 + 양파 돔 + 금 십자가
  const chapel = (x, z, r, bodyH, drumH, domeM, domeR, domeH) => {
    const b = new THREE.CylinderGeometry(r, r * 1.04, bodyH, 8); uvMul(b, 2.6, bodyH / (0.9 * s));
    add(b, red, x, y0 + bodyH / 2, z).rotation.y = Math.PI / 8;
    add(new THREE.CylinderGeometry(r * 1.08, r * 1.08, 0.06 * s, 8), white, x, y0 + bodyH, z).rotation.y = Math.PI / 8;
    // 코코시닉 (흰 반원 장식 고리)
    for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2; const kk = add(new THREE.CylinderGeometry(r * 0.32, r * 0.32, 0.05 * s, 12, 1, false, 0, Math.PI), white, x + Math.cos(a) * r * 0.86, y0 + bodyH + 0.04 * s, z + Math.sin(a) * r * 0.86); kk.rotation.set(0, -a, Math.PI / 2); }
    const dr = new THREE.CylinderGeometry(r * 0.62, r * 0.66, drumH, 12); uvMul(dr, 3, 0.6);
    add(dr, red2, x, y0 + bodyH + drumH / 2, z);
    add(new THREE.CylinderGeometry(r * 0.7, r * 0.7, 0.04 * s, 12), white, x, y0 + bodyH + drumH, z);
    const on = onionGeo(domeR, domeH, 20, 1.05); uvMul(on, 1, 1);
    add(on, domeM, x, y0 + bodyH + drumH, z);
    cross(add, au, x, y0 + bodyH + drumH + domeH - 0.02, z, 0.9 * s);
  };
  // 가운데 천막 탑 (팔각 몸체 → 코코시닉 단 → 무늬 천막 → 작은 금 돔)
  const cb = new THREE.CylinderGeometry(0.62 * s, 0.66 * s, 1.55 * s, 8); uvMul(cb, 3, 1.6);
  add(cb, red, 0, y0 + 0.775 * s, 0).rotation.y = Math.PI / 8;
  let cy = y0 + 1.55 * s;
  add(new THREE.CylinderGeometry(0.72 * s, 0.72 * s, 0.07 * s, 8), white, 0, cy, 0).rotation.y = Math.PI / 8;
  for (let t = 0; t < 2; t++) for (let i = 0; i < 8; i++) {
    const a = i / 8 * Math.PI * 2 + (t ? Math.PI / 8 : 0), rr = (0.6 - t * 0.1) * s;
    const kk = add(new THREE.CylinderGeometry(0.16 * s, 0.16 * s, 0.05 * s, 12, 1, false, 0, Math.PI), white, Math.cos(a) * rr, cy + 0.06 * s + t * 0.15 * s, Math.sin(a) * rr);
    kk.rotation.set(0, -a, Math.PI / 2);
  }
  cy += 0.3 * s;
  const tent = new THREE.ConeGeometry(0.56 * s, 1.9 * s, 8, 1, true); uvMul(tent, 2, 3);
  add(tent, new THREE.MeshStandardMaterial({ map: domeTex('diamond', '#f2eee4', '#e8c23a', '#2f8a4e'), roughness: 0.5, side: THREE.DoubleSide }), 0, cy + 0.95 * s, 0).rotation.y = Math.PI / 8;
  cy += 1.9 * s;
  add(new THREE.CylinderGeometry(0.1 * s, 0.12 * s, 0.25 * s, 10), red2, 0, cy - 0.05 * s, 0);
  add(onionGeo(0.2 * s, 0.38 * s, 16), D.h, 0, cy + 0.07 * s, 0);
  cross(add, au, 0, cy + 0.43 * s, 0, 1.1 * s);
  // 큰 예배당 4 (동서남북) + 작은 예배당 4 (대각)
  const R1 = 1.12 * s, R2 = 1.0 * s;
  chapel(0, R1, 0.4 * s, 0.95 * s, 0.4 * s, D.d, 0.44 * s, 0.9 * s);   // 남 (카메라 쪽)
  chapel(0, -R1, 0.4 * s, 1.1 * s, 0.4 * s, D.e, 0.44 * s, 0.9 * s);
  chapel(R1, 0, 0.4 * s, 1.0 * s, 0.4 * s, D.c, 0.44 * s, 0.9 * s);
  chapel(-R1, 0, 0.4 * s, 1.05 * s, 0.4 * s, D.b, 0.44 * s, 0.9 * s);
  chapel(R2 * 0.75, R2 * 0.75, 0.26 * s, 0.75 * s, 0.3 * s, D.a, 0.3 * s, 0.62 * s);
  chapel(-R2 * 0.75, R2 * 0.75, 0.26 * s, 0.8 * s, 0.3 * s, D.f, 0.3 * s, 0.62 * s);
  chapel(R2 * 0.75, -R2 * 0.75, 0.26 * s, 0.78 * s, 0.3 * s, D.g, 0.3 * s, 0.62 * s);
  chapel(-R2 * 0.75, -R2 * 0.75, 0.26 * s, 0.72 * s, 0.3 * s, D.a, 0.3 * s, 0.62 * s);
  // 종탑 (남동 모서리: 흰 기둥 단 + 초록 천막 + 작은 금 돔)
  const bx = 1.65 * s, bz = 1.55 * s;
  add(sbox(0.42 * s, 1.2 * s, 0.42 * s, 0.4, 0.6), red2, bx, 0.06 + 0.6 * s, bz);
  add(new THREE.BoxGeometry(0.46 * s, 0.05, 0.46 * s), white, bx, 0.06 + 1.2 * s, bz);
  for (const [ox, oz] of [[1, 1], [-1, 1], [1, -1], [-1, -1]]) add(new THREE.BoxGeometry(0.05, 0.3 * s, 0.05), white, bx + ox * 0.17 * s, 0.06 + 1.37 * s, bz + oz * 0.17 * s);
  add(new THREE.ConeGeometry(0.3 * s, 0.75 * s, 8), new THREE.MeshStandardMaterial({ map: domeTex('scale', '#3d7a52', '#3f8256', '#e8c23a'), roughness: 0.5 }), bx, 0.06 + 1.52 * s + 0.375 * s, bz);
  add(onionGeo(0.08 * s, 0.18 * s, 10), D.h, bx, 0.06 + 2.27 * s, bz);
  // 미닌과 포자르스키 동상 (앞쪽 서남)
  const br = bronze();
  add(new THREE.BoxGeometry(0.42, 0.42, 0.28), std(0x8a8478), -1.6 * s, 0.06 + 0.21, 1.75 * s);
  add(new THREE.CylinderGeometry(0.06, 0.08, 0.3, 8), br, -1.68 * s, 0.06 + 0.57, 1.75 * s);
  add(new THREE.CylinderGeometry(0.06, 0.08, 0.26, 8), br, -1.5 * s, 0.06 + 0.55, 1.75 * s);
  add(new THREE.SphereGeometry(0.05, 8, 6), br, -1.68 * s, 0.06 + 0.77, 1.75 * s); add(new THREE.SphereGeometry(0.05, 8, 6), br, -1.5 * s, 0.06 + 0.72, 1.75 * s);
  lamps(add, [[-2.0 * s, -1.9 * s], [2.0 * s, -1.9 * s]]);
}

// 볼쇼이 극장: 크림색 몸체 + 흰 기둥 8개 현관 + 박공 + 그 위 아폴론 사두마차(청동)
function bolshoi(G, k) {
  const add = adder(G), W = k.w, D = k.d;
  const fac = facadeMat('mosbolshoi', { wall: 0xe9d9b4, cols: 4, rows: 2, ww: 0.38, wh: 0.6, win: 'arch', key: true, pilaster: true, lit: 0.18 });
  const stone = ashlarMat('mosbolb', 0xe2d6bc), white = std(0xf4f0e6, { roughness: 0.6 }), roofM = tinRoof(0x6c7a72), br = bronze();
  const bw = W * 0.82, bd = D * 0.56, bh = 1.65, bz = -D * 0.18;
  add(sbox(bw, bh, bd, bw / 4, bh / 2), fac, 0, 0.06 + bh / 2, bz);
  cornice(add, white, bw, bd, 0.06 + bh, 0, bz, 0.07);
  G.add(Object.assign(new THREE.Mesh(mansardGeo(0, 0.06 + bh + 0.13, bz, bw, bd, 0.55, 0, 1.6), roofM), { castShadow: true }));
  // 뒤 무대탑 (높은 지붕)
  add(sbox(bw * 0.6, 0.5, bd * 0.5, 1.0, 0.5), fac, 0, 0.06 + bh + 0.38, bz - bd * 0.18);
  add(gableRoof(bw * 0.6, bd * 0.5, 0.42), roofM, 0, 0.06 + bh + 0.63, bz - bd * 0.18);
  // 현관: 계단 + 기단 + 기둥 8개 + 엔타블러처 + 박공
  const pz = bz + bd / 2 + 0.38, pw = bw * 0.84;
  for (let i = 0; i < 3; i++) add(sbox(pw + 0.3 - i * 0.1, 0.06, 0.95 - i * 0.12, 0.8, 0.8), stone, 0, 0.06 + 0.03 + i * 0.06, pz + 0.1 + i * 0.06);
  const cy = 0.24;
  columns(add, fluteMat(0xf2eee4), white, 8, -pw / 2 + 0.12, pw / 2 - 0.12, pz + 0.2, cy, 1.45, 0.075);
  add(new THREE.BoxGeometry(pw + 0.1, 0.18, 0.7), white, 0, cy + 1.45 + 0.09, pz);
  add(pediment(pw + 0.1, 0.48, 0.66), reliefMat('mosbolshoi', 0xefe7d6), 0, cy + 1.63, pz);
  // 아폴론의 사두마차: 말 4필 + 전차 + 마부
  const qy = cy + 1.63 + 0.46, qz = pz + 0.05;
  add(new THREE.BoxGeometry(0.5, 0.06, 0.3), stone, 0, qy, qz);
  for (let i = 0; i < 4; i++) {
    const x = -0.21 + i * 0.14, hz = qz + 0.06;
    add(new THREE.BoxGeometry(0.07, 0.09, 0.22), br, x, qy + 0.16, hz);                         // 몸통
    const neck = add(new THREE.BoxGeometry(0.05, 0.14, 0.06), br, x, qy + 0.26, hz + 0.11); neck.rotation.x = 0.5;
    add(new THREE.BoxGeometry(0.045, 0.05, 0.1), br, x, qy + 0.33, hz + 0.16);                    // 머리
    const leg1 = add(new THREE.BoxGeometry(0.025, 0.12, 0.025), br, x, qy + 0.1, hz + 0.1); leg1.rotation.x = -0.7;   // 앞발 치켜듦
    add(new THREE.BoxGeometry(0.025, 0.12, 0.025), br, x, qy + 0.06, hz - 0.08);
  }
  add(new THREE.BoxGeometry(0.28, 0.12, 0.12), br, 0, qy + 0.12, qz - 0.1);
  add(new THREE.CylinderGeometry(0.03, 0.045, 0.22, 8), br, 0, qy + 0.28, qz - 0.12);
  add(new THREE.SphereGeometry(0.035, 8, 6), br, 0, qy + 0.42, qz - 0.12);
  const arm = add(new THREE.BoxGeometry(0.02, 0.16, 0.02), br, 0.05, qy + 0.42, qz - 0.1); arm.rotation.z = -0.5;
  // 앞 분수 + 가로수
  add(new THREE.CylinderGeometry(0.3, 0.32, 0.08, 20), stone, -W * 0.3, 0.1, D * 0.43);
  add(new THREE.CylinderGeometry(0.25, 0.25, 0.02, 20), std(0x6aa6c8, { roughness: 0.15 }), -W * 0.3, 0.14, D * 0.43);
  trees(G, [[W * 0.42, D * 0.42], [W * 0.3, D * 0.45], [-W * 0.45, -D * 0.35], [W * 0.45, -D * 0.38]], 1);
  lamps(add, [[-W * 0.12, D * 0.46], [W * 0.12, D * 0.46]]);
}

// 굼 백화점: 긴 3층 석조 정면(아치 창) + 가운데·양끝 파빌리온(작은 천막 탑) + 뒤 유리 아케이드 지붕
function gum(G, k) {
  const add = adder(G), W = k.w, D = k.d;
  const fac = facadeMat('mosgum', { wall: 0xe6dccb, cols: 6, rows: 3, ww: 0.42, wh: 0.62, win: 'arch', key: true, pilaster: true, lit: 0.3, glassTop: '#a8bccb' });
  const stone = ashlarMat('mosgumb', 0xd8ccb6), white = std(0xf0e9da, { roughness: 0.7 }), roofM = tinRoof(0x5f8a6a), au = gold();
  const glass = new THREE.MeshStandardMaterial({ color: 0xbfd8e8, roughness: 0.1, metalness: 0.5, transparent: true, opacity: 0.75, side: THREE.DoubleSide });
  const bw = W * 0.94, bd = D * 0.62, bh = 1.25, bz = -D * 0.1;
  add(sbox(bw, 0.3, bd, 0.8, 0.3), stone, 0, 0.06 + 0.15, bz);
  add(sbox(bw, bh - 0.3, bd, bw / 6 / 1.5, (bh - 0.3) / 3 * 1.2), fac, 0, 0.36 + (bh - 0.3) / 2, bz);
  cornice(add, white, bw, bd, 0.06 + bh, 0, bz, 0.05);
  // 유리 아케이드 지붕 (반원통 3줄, 남북 방향)
  for (const x of [-bw * 0.3, 0, bw * 0.3]) {
    const v = new THREE.CylinderGeometry(0.36, 0.36, bd * 0.9, 16, 1, true, -Math.PI / 2, Math.PI); v.rotateX(-Math.PI / 2);
    add(v, glass, x, 0.06 + bh + 0.08, bz);
    for (let z = -bd * 0.4; z <= bd * 0.4; z += 0.22) add(new THREE.TorusGeometry(0.36, 0.012, 4, 16, Math.PI), std(0x5a6066, { metalness: 0.5 }), x, 0.06 + bh + 0.08, bz + z);
  }
  // 파빌리온: 가운데(크게) + 양끝
  for (const [x, pw, ph] of [[0, 1.1, 1.75], [-bw / 2 + 0.38, 0.72, 1.55], [bw / 2 - 0.38, 0.72, 1.55]]) {
    const pz = bz + bd / 2 + 0.08;
    add(sbox(pw, ph, 0.5, pw / 1.5, ph / 2.4), fac, x, 0.06 + ph / 2, pz - 0.1);
    cornice(add, white, pw, 0.5, 0.06 + ph, x, pz - 0.1, 0.04);
    add(new THREE.ConeGeometry(pw * 0.42, 0.55, 4), roofM, x, 0.06 + ph + 0.35, pz - 0.1).rotation.y = Math.PI / 4;
    for (const sx of [-1, 1]) {
      add(new THREE.CylinderGeometry(0.06, 0.06, 0.32, 8), white, x + sx * pw * 0.45, 0.06 + ph + 0.16, pz + 0.12);
      add(new THREE.ConeGeometry(0.075, 0.3, 8), roofM, x + sx * pw * 0.45, 0.06 + ph + 0.47, pz + 0.12);
      add(new THREE.SphereGeometry(0.025, 6, 6), au, x + sx * pw * 0.45, 0.06 + ph + 0.64, pz + 0.12);
    }
    // 큰 아치 입구
    add(new THREE.PlaneGeometry(pw * 0.45, 0.5), std(0x2a2520), x, 0.06 + 0.25, pz + 0.152);
    add(new THREE.CircleGeometry(pw * 0.225, 14, 0, Math.PI), std(0x2a2520), x, 0.06 + 0.5, pz + 0.152);
  }
  // 지붕 난간 작은 첨탑 줄
  for (let x = -bw / 2 + 0.2; x < bw / 2; x += 0.4) if (Math.abs(x) > 0.65 && Math.abs(Math.abs(x) - (bw / 2 - 0.38)) > 0.45) add(new THREE.ConeGeometry(0.035, 0.18, 6), white, x, 0.06 + bh + 0.18, bz + bd / 2);
  // 앞 붉은광장 쪽 가로등 + 꽃 화분
  lamps(add, [[-W * 0.3, D * 0.44], [W * 0.3, D * 0.44], [0, D * 0.46]]);
  const flower = std(0xd84a6a, { roughness: 0.9 });
  for (const x of [-W * 0.42, -W * 0.15, W * 0.15, W * 0.42]) add(new THREE.CylinderGeometry(0.1, 0.08, 0.1, 10), flower, x, 0.11, D * 0.4);
}

// =================== 전투 구역 바깥 큰 랜드마크 ===================
// 모스크바 국립대학교: 스탈린의 '일곱 자매' 웨딩케이크 탑 (계단식 탑 + 금빛 별 첨탑 + 양 날개 탑)
function msu(L, city) {
  const G = new THREE.Group(), add = adder(G);
  const fac = facadeMat('mosmsu', { wall: 0xe4d8be, cols: 4, rows: 4, ww: 0.36, wh: 0.55, lit: 0.22, pilaster: true });
  const dark = facadeMat('mosmsud', { wall: 0xb8a68a, cols: 3, rows: 3, ww: 0.3, wh: 0.5, lit: 0.1 });
  const trim = std(0xf0e8d8, { roughness: 0.7 }), au = gold(), spireM = std(0xd8b04a, { metalness: 0.85, roughness: 0.3, emissive: 0x2a1c00 });
  const lawn = std(0x5f8a45, { roughness: 1 }), path = std(0xc9c1ae, { roughness: 1 });
  add(new THREE.BoxGeometry(24, 0.06, 15), lawn, 0, 0.03, 0.5).castShadow = false;
  add(new THREE.BoxGeometry(2.4, 0.07, 15), path, 0, 0.04, 0.5).castShadow = false;
  add(new THREE.BoxGeometry(24, 0.07, 1.6), path, 0, 0.04, 4).castShadow = false;
  const blk = (w, h, d, x, y, z, m = fac) => { add(sbox(w, h, d, 1.6, 1.2), m, x, y + h / 2, z); cornice(add, trim, w, d, y + h, x, z, 0.12); };
  // 양 날개 (낮은 건물 + 날개 탑)
  blk(18, 3.6, 4.2, 0, 0, -2);
  for (const sx of [-1, 1]) {
    blk(4.6, 6.5, 4.6, sx * 8.4, 0, -2);
    blk(3.2, 1.6, 3.2, sx * 8.4, 6.6, -2);
    blk(2, 1.0, 2, sx * 8.4, 8.4, -2);
    add(new THREE.CylinderGeometry(0.5, 0.6, 1.0, 8), dark, sx * 8.4, 9.9, -2);
    add(new THREE.ConeGeometry(0.4, 3.0, 8), spireM, sx * 8.4, 11.9, -2);
    rubyStar(add, sx * 8.4, 13.7, -2, 0.3, au);
    blk(3.6, 5.0, 8, sx * 7.8, 0, 4.4);
  }
  // 가운데 계단식 탑
  let y = 0;
  for (const [w, h, d] of [[8, 9.5, 7], [6, 3.5, 5.2], [4.6, 3.0, 4.2], [3.4, 2.0, 3.2]]) {
    blk(w, h, d, 0, y, -2.2); y += h + 0.2;
    if (w > 4) for (const [sx, sz] of [[1, 1], [-1, 1], [1, -1], [-1, -1]]) { add(new THREE.CylinderGeometry(0.22, 0.28, 0.8, 8), trim, sx * (w / 2 - 0.3), y + 0.4, -2.2 + sz * (d / 2 - 0.3)); add(new THREE.ConeGeometry(0.24, 0.6, 8), spireM, sx * (w / 2 - 0.3), y + 1.1, -2.2 + sz * (d / 2 - 0.3)); }
  }
  add(new THREE.CylinderGeometry(1.2, 1.4, 1.5, 8), dark, 0, y + 0.75, -2.2); y += 1.5;
  add(new THREE.CylinderGeometry(1.3, 1.3, 0.15, 8), trim, 0, y + 0.07, -2.2);
  add(new THREE.ConeGeometry(1.0, 6.5, 8), spireM, 0, y + 3.25, -2.2); y += 6.5;
  add(new THREE.TorusGeometry(0.55, 0.1, 6, 16), au, 0, y + 0.6, -2.2);
  rubyStar(add, 0, y + 0.6, -2.2, 0.5, au);
  const T = []; for (let i = 0; i < 18; i++) T.push([-11 + (i % 9) * 2.6 + (i > 8 ? 1.3 : 0), i > 8 ? 7.5 : 6.2]);
  trees(G, T, 2.2);
  G.rotation.y = -Math.PI / 2;   // 정면이 서쪽(전투 구역)을 봄
  return G;
}

// 모스크바 시티: 유리 초고층 숲 (페데라치야 탑, 머큐리(구릿빛), 꼬인 에볼루션 탑, OKO, 임페리아)
function mcity(L, city) {
  const G = new THREE.Group(), add = adder(G), GM = city.M.glass;
  const tint = (i, c) => { const m = GM[i % GM.length].clone(); m.color = new THREE.Color(c); return m; };
  const blue = tint(0, 0x9fc0e0), copper = tint(1, 0xd8a070), dark = tint(2, 0x7a8c9e), teal = tint(3, 0x9fd0d0), steel = std(0xc9ced4, { metalness: 0.7, roughness: 0.3 });
  add(new THREE.BoxGeometry(18, 0.12, 12), std(0x8e9196), 0, 0.06, 0);
  // 페데라치야: 삼각 기둥 2개 + 첨탑
  for (const [x, z, h, r] of [[0, -2, 26, 2.2], [2.6, -0.4, 19, 1.9]]) {
    const g = new THREE.CylinderGeometry(r * 0.85, r, h, 3); uvMul(g, 3, h / 2.2);
    add(g, blue, x, h / 2, z).rotation.y = x ? Math.PI : 0;
  }
  add(new THREE.CylinderGeometry(0.06, 0.15, 5, 6), steel, 0, 28.5, -2);
  // 머큐리: 구릿빛 오각 계단 탑
  let y = 0; for (const [r, h] of [[2.0, 13], [1.6, 4.5], [1.1, 4]]) { const g = new THREE.CylinderGeometry(r * 0.95, r, h, 5); uvMul(g, 3, h / 2.2); add(g, copper, -4.2, y + h / 2, 1.2); y += h; }
  // 에볼루션: 층마다 조금씩 돌아가는 꼬인 탑
  for (let i = 0; i < 26; i++) { const g = sbox(2.2, 0.66, 2.2, 2.2, 2.2); add(g, teal, 5.8, 0.33 + i * 0.68, 2.2).rotation.y = i * 0.06; }
  // OKO: 짙은 유리 탑 2개 (흰 줄무늬)
  for (const [x, z, h, w] of [[-7.5, -2.5, 22, 2.6], [-6.2, 3.8, 15, 2.4]]) { add(sbox(w, h, w, 2, 2.4), dark, x, h / 2, z); for (let yy = 4; yy < h; yy += 4) add(new THREE.BoxGeometry(w + 0.06, 0.12, w + 0.06), steel, x, yy, z); }
  // 임페리아: 둥근 지붕 판상 탑
  add(sbox(4, 15, 1.8, 2, 2.4), blue, 2.2, 7.5, 4.6);
  const cap = new THREE.CylinderGeometry(0.9, 0.9, 4, 16, 1, false, 0, Math.PI); cap.rotateZ(Math.PI / 2);
  add(cap, steel, 2.2, 15, 4.6);
  return G;
}

// 오스탄키노 TV 탑: 다리 10개가 벌어진 콘크리트 받침 + 가는 몸통 + 전망대 + 빨강·흰 안테나
function ostankino() {
  const G = new THREE.Group(), add = adder(G), conc = concreteMat('ost', false), concS = concreteMat('osts', true);
  const glassM = std(0x2e3a48, { roughness: 0.2, metalness: 0.5, emissive: 0x1a2a3a });
  add(new THREE.CylinderGeometry(4.2, 4.4, 0.1, 24), std(0x9a9a92), 0, 0.05, 0);
  for (let i = 0; i < 10; i++) { const a = i / 10 * Math.PI * 2, leg = add(new THREE.BoxGeometry(0.5, 4.6, 0.7), conc, Math.cos(a) * 2.6, 2.0, Math.sin(a) * 2.6); leg.rotation.set(0, -a, 0.32); }
  const cone = new THREE.CylinderGeometry(0.85, 2.5, 6, 20, 1, true); uvMul(cone, 6, 1);
  add(cone, concS, 0, 3, 0);
  const shaft = new THREE.CylinderGeometry(0.42, 0.85, 22, 20); uvMul(shaft, 3, 6);
  add(shaft, conc, 0, 6 + 11, 0);
  for (const yy of [12, 16, 20]) add(new THREE.CylinderGeometry(0.9, 0.9, 0.3, 20), conc, 0, yy, 0);
  // 전망대 (짙은 유리 띠)
  add(new THREE.CylinderGeometry(1.5, 1.2, 0.5, 24), conc, 0, 27.7, 0);
  add(new THREE.CylinderGeometry(1.55, 1.55, 1.2, 24), glassM, 0, 28.5, 0);
  add(new THREE.CylinderGeometry(1.3, 1.6, 0.4, 24), conc, 0, 29.3, 0);
  add(new THREE.CylinderGeometry(0.32, 0.42, 4.5, 12), conc, 0, 31.7, 0);
  const strip = canvasTex('mosostant', 16, 128, (g, w, h) => { for (let i = 0; i < 8; i++) { g.fillStyle = i % 2 ? '#f2f2f2' : '#d23a2e'; g.fillRect(0, i * h / 8, w, h / 8); } });
  add(new THREE.CylinderGeometry(0.1, 0.24, 7, 8), new THREE.MeshStandardMaterial({ map: strip, roughness: 0.6 }), 0, 37.4, 0);
  const lamp = add(new THREE.SphereGeometry(0.16, 8, 6), new THREE.MeshBasicMaterial({ color: 0xff3a2e }), 0, 41, 0); lamp.castShadow = false;
  return G;
}

// 구세주 그리스도 대성당: 흰 대리석 십자형 몸체 + 네 면 현관(반원 지붕) + 큰 금 투구 돔 + 작은 금 돔 4개
function saviour() {
  const G = new THREE.Group(), add = adder(G);
  const wall = whiteChurch('saviour', 3), stone = ashlarMat('mossavb', 0xb9b0a2), white = std(0xf6f3ec, { roughness: 0.6 }), au = gold();
  const goldDome = domeMat('plain', '#d9ae48', '#d9ae48', null, { metalness: 0.9, roughness: 0.25, emissive: 0x2a1c00 });
  add(sbox(11, 0.7, 11, 1, 0.7), stone, 0, 0.35, 0);
  for (let i = 0; i < 4; i++) add(new THREE.BoxGeometry(3.6, 0.12, 0.4), stone, 0, 0.06 + i * 0.15, 5.7 - i * 0.2);
  const y0 = 0.7;
  add(sbox(6.4, 4.6, 6.4, 6.4 / 3, 4.6), wall, 0, y0 + 2.3, 0);
  cornice(add, white, 6.4, 6.4, y0 + 4.6, 0, 0, 0.12);
  // 네 면 현관 + 반원 박공(코코시닉)
  for (let i = 0; i < 4; i++) {
    const a = i * Math.PI / 2, px = Math.sin(a) * 3.55, pz = Math.cos(a) * 3.55;
    const p = add(sbox(3.4, 4.0, 0.7, 3.4 / 3, 4.0), wall, px, y0 + 2.0, pz); p.rotation.y = a;
    const half = new THREE.CylinderGeometry(1.7, 1.7, 0.72, 20, 1, false, -Math.PI / 2, Math.PI); half.rotateX(-Math.PI / 2);
    const h = add(half, white, px, y0 + 4.0, pz); h.rotation.y = a;
    for (const s of [-1, 1]) { const cx = px + Math.cos(a) * s * 1.2 + Math.sin(a) * 0.45, cz = pz - Math.sin(a) * s * 1.2 + Math.cos(a) * 0.45; columns(add, fluteMat(0xf0ece2), white, 1, cx, cx, cz, y0, 3.6, 0.13); }
  }
  // 가운데 북 + 큰 투구 돔
  const drum = new THREE.CylinderGeometry(2.0, 2.1, 2.0, 24); uvMul(drum, 1, 1);
  add(drum, facadeMat('mossavd', { wall: 0xf1ede4, cols: 2, rows: 1, ww: 0.36, wh: 0.6, wy: 0.2, win: 'arch', band: false }), 0, y0 + 4.6 + 1.0, 0);
  add(new THREE.CylinderGeometry(2.2, 2.2, 0.2, 24), white, 0, y0 + 6.7, 0);
  add(helmetGeo(2.1, 3.4), goldDome, 0, y0 + 6.8, 0);
  add(new THREE.CylinderGeometry(0.22, 0.28, 0.6, 10), goldDome, 0, y0 + 10.4, 0);
  cross(add, au, 0, y0 + 10.6, 0, 3.2);
  // 네 모서리 종탑 + 작은 금 돔
  for (const [sx, sz] of [[1, 1], [-1, 1], [1, -1], [-1, -1]]) {
    const x = sx * 2.55, z = sz * 2.55;
    add(new THREE.CylinderGeometry(0.62, 0.66, 1.4, 12), wall, x, y0 + 4.6 + 0.7, z);
    add(onionGeo(0.72, 1.4, 16, 0.95), goldDome, x, y0 + 6.0, z);
    cross(add, au, x, y0 + 7.35, z, 1.6);
  }
  return G;
}

export default {
  build,
  field: { kremlin, basil, bolshoi, gum },
  edge: {
    msu: { r: 13, build: msu }, mcity: { r: 11, build: mcity }, ostankino: { r: 5, build: ostankino }, saviour: { r: 8, build: saviour }
  },
  gate: { wall: 0x9c4636, cap: 0xe6dccb }, water: 0x6f92a6, riverWall: 0x9a8a82, riverWalk: 0x8e8a86, riverTrees: true,
  bridges: [[-36, 'arch', 0x7c8590], [6, 'suspension', 0xa8503e], [42, 'stone', 0xc2b8a8]]
};
