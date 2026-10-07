// 뉴욕·파리 랜드마크 (코드로 제작)
// EDGE  = 전투 구역 바깥의 큰 랜드마크 (자유의 여신상, 엠파이어, 에펠탑 …). { r: 도시 블록을 비울 반지름, build(L, city) → 그룹 }
// FIELD = 전투 구역 안 랜드마크 (그 자리는 무기 배치 불가). (G, k) → k.w × k.d 안에 맞춤
import * as THREE from 'three';
import { makeRng } from './textures.js';
import { nyTowerHD, haussmannHD, zincRoofHD } from './textures_world.js';
import { glassFacadeHD } from './textures_bldg.js';
import { mansardGeo } from './world_city.js';

const texCache = {};
function canvasTex(key, w, h, draw) {
  if (texCache[key]) return texCache[key];
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8;
  return (texCache[key] = t);
}
const std = (c, o = {}) => new THREE.MeshStandardMaterial(Object.assign({ color: c, roughness: 0.85 }, o));
const adder = (G) => (geo, m, x = 0, y = 0, z = 0) => { const o = new THREE.Mesh(geo, m); o.position.set(x, y, z); o.castShadow = o.receiveShadow = true; G.add(o); return o; };
// 상자 UV를 크기에 맞게 늘려 창문이 일정한 크기로 반복되게 (su·sv = 무늬 한 칸 크기)
function sbox(w, h, d, su, sv) {
  const g = new THREE.BoxGeometry(w, h, d), uv = g.attributes.uv, n = g.attributes.normal;
  for (let i = 0; i < uv.count; i++) { const side = Math.abs(n.getX(i)) > 0.5 ? d : w; const top = Math.abs(n.getY(i)) > 0.5; uv.setXY(i, uv.getX(i) * (top ? 0 : side / su), uv.getY(i) * (top ? 0 : h / sv)); }
  return g;
}
const uvMul = (g, su, sv) => { const uv = g.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * su, uv.getY(i) * sv); return g; };
const emisMat = (T, o = {}) => new THREE.MeshStandardMaterial(Object.assign({ map: T.map, emissiveMap: T.emissiveMap, emissive: 0xffffff, emissiveIntensity: 0.35, roughness: 0.75 }, o));
// 창 격자 무늬 (석조 건물)
function winTex(key, o) {
  return canvasTex('w' + key, 256, 256, (g, w, h) => {
    const rnd = makeRng(key);
    g.fillStyle = o.wall; g.fillRect(0, 0, w, h);
    const cw = w / o.cols, rh = h / o.rows;
    for (let r = 0; r < o.rows; r++) for (let c = 0; c < o.cols; c++) {
      const x = c * cw + cw * o.mx, y = r * rh + rh * o.my, ww = cw * (1 - 2 * o.mx), hh = rh * (1 - 2 * o.my);
      g.fillStyle = rnd() < (o.lit || 0) ? '#e8d6a0' : o.glass;
      if (o.arch) { g.beginPath(); g.moveTo(x, y + hh); g.lineTo(x, y + ww / 2); g.arc(x + ww / 2, y + ww / 2, ww / 2, Math.PI, 0); g.lineTo(x + ww, y + hh); g.closePath(); g.fill(); }
      else g.fillRect(x, y, ww, hh);
      g.fillStyle = 'rgba(255,255,255,0.1)'; g.fillRect(x, y, ww * 0.35, hh);
    }
    if (o.band) { g.fillStyle = o.band; for (let r = 0; r <= o.rows; r++) g.fillRect(0, r * rh - 2, w, 3); }
  });
}
// 삼각 박공(페디먼트): 폭 w, 높이 h, 두께 d — 앞(+z)을 봄
function pediment(w, h, d) {
  const s = new THREE.Shape(); s.moveTo(-w / 2, 0); s.lineTo(w / 2, 0); s.lineTo(0, h); s.closePath();
  const g = new THREE.ExtrudeGeometry(s, { depth: d, bevelEnabled: false }); g.translate(0, 0, -d / 2); return g;
}
function columns(add, m, n, x0, x1, z, y, h, r = 0.06) {
  for (let i = 0; i < n; i++) add(new THREE.CylinderGeometry(r, r * 1.1, h, 10), m, x0 + (x1 - x0) * (n > 1 ? i / (n - 1) : 0.5), y + h / 2, z);
}
function flagTex(kind) {
  return canvasTex('flag' + kind, 128, 80, (g, w, h) => {
    if (kind === 'fr') { ['#1f3d8f', '#f4f4f4', '#d0312d'].forEach((c, i) => { g.fillStyle = c; g.fillRect(i * w / 3, 0, w / 3 + 1, h); }); return; }
    for (let i = 0; i < 13; i++) { g.fillStyle = i % 2 ? '#f4f4f4' : '#b8262e'; g.fillRect(0, i * h / 13, w, h / 13 + 1); }
    g.fillStyle = '#2b3a78'; g.fillRect(0, 0, w * 0.42, h * 7 / 13);
    g.fillStyle = '#fff'; for (let y = 0; y < 5; y++) for (let x = 0; x < 6; x++) g.fillRect(4 + x * 8.5, 4 + y * 8, 2, 2);
  });
}

// =================== 뉴욕: 전투 구역 안 ===================
function billboardTex() {
  return canvasTex('timesq', 256, 512, (g, w, h) => {
    const rnd = makeRng('timesq');
    g.fillStyle = '#16181c'; g.fillRect(0, 0, w, h);
    const words = ['NEWS', 'LIVE', 'SALE', 'SHOW', '2030', 'MUSICAL', 'TOUR', 'CINEMA', 'SODA', 'PHONE', 'JEANS', 'TV'];
    const cols = ['#e63946', '#f1c40f', '#2ecc71', '#3498db', '#ff6bd6', '#ff8c1a', '#ffffff', '#00d1d1'];
    let y = 4;
    while (y < h - 10) {
      const ph = 40 + rnd() * 70;
      let x = 4;
      while (x < w - 10) {
        const pw = Math.min(w - 4 - x, 60 + rnd() * 140), c = cols[Math.floor(rnd() * cols.length)];
        const gr = g.createLinearGradient(x, y, x + pw, y + ph); gr.addColorStop(0, c); gr.addColorStop(1, cols[Math.floor(rnd() * cols.length)]);
        g.fillStyle = gr; g.fillRect(x, y, pw - 4, ph - 4);
        g.fillStyle = rnd() < 0.5 ? '#111' : '#fff'; g.font = `bold ${Math.floor(ph * 0.42)}px "Arial Black",sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle';
        g.fillText(words[Math.floor(rnd() * words.length)], x + pw / 2 - 2, y + ph / 2, pw - 12);
        x += pw;
      }
      y += ph;
    }
  });
}
function timesq(G, k) {
  const add = adder(G), W = k.w, D = k.d, T = billboardTex();
  const bb = new THREE.MeshStandardMaterial({ map: T, emissiveMap: T, emissive: 0xffffff, emissiveIntensity: 0.9, roughness: 0.4 });
  const stone = emisMat(nyTowerHD(1));
  // 가운데 원 타임스스퀘어 탑 (전광판으로 덮임) + 양옆 빌딩 (아래는 전광판, 위는 석조)
  add(sbox(0.95, 3.4, 0.95, 0.95, 1.7), bb, 0, 0.06 + 1.7, -D * 0.12);
  add(new THREE.BoxGeometry(0.7, 0.4, 0.7), stone, 0, 0.06 + 3.6, -D * 0.12);
  for (const s of [-1, 1]) {
    const x = s * W * 0.33, h0 = s < 0 ? 1.3 : 1.6, h1 = s < 0 ? 1.0 : 1.3;
    add(sbox(W * 0.32, h0, D * 0.8, W * 0.32, 1.3), bb, x, 0.06 + h0 / 2, -D * 0.05);
    add(sbox(W * 0.28, h1, D * 0.7, 0.8, 0.9), stone, x, 0.06 + h0 + h1 / 2, -D * 0.08);
  }
  // 빨간 계단 (TKTS) + 노란 택시
  const red = std(0xc8262e, { emissive: 0x500808, roughness: 0.5 });
  for (let i = 0; i < 4; i++) add(new THREE.BoxGeometry(0.8, 0.07, 0.18), red, 0, 0.09 + i * 0.07, D * 0.3 - i * 0.16);
  const taxi = std(0xf2c230, { roughness: 0.5 });
  for (const [x, z] of [[-0.8, D * 0.42], [0.85, D * 0.38], [0.2, D * 0.45]]) add(new THREE.BoxGeometry(0.36, 0.14, 0.17), taxi, x, 0.13, z);
}
function flatiron(G, k) {
  const add = adder(G), W = k.w, D = k.d, h = 3.4;
  const t = winTex('flat', { wall: '#d9cdb2', glass: '#4b5560', cols: 2, rows: 2, mx: 0.22, my: 0.18, lit: 0.12, band: 'rgba(150,130,100,0.5)' }).clone();
  t.needsUpdate = true; t.repeat.set(1 / 0.45, 1 / 0.42);
  const m = new THREE.MeshStandardMaterial({ map: t, roughness: 0.85 });
  // 다리미 모양: 뒤가 넓고 앞(카메라 쪽)이 뾰족한 삼각형 평면
  const s = new THREE.Shape();
  s.moveTo(-W * 0.46, D * 0.45); s.lineTo(W * 0.46, D * 0.45); s.lineTo(0.12, -D * 0.45); s.lineTo(-0.12, -D * 0.45); s.closePath();
  const g = new THREE.ExtrudeGeometry(s, { depth: h, bevelEnabled: false }); g.rotateX(-Math.PI / 2);
  add(g, m, 0, 0.06, 0);
  const cg = new THREE.ExtrudeGeometry(s, { depth: 0.14, bevelEnabled: false }); cg.rotateX(-Math.PI / 2); cg.scale(1.05, 1, 1.04);
  add(cg, std(0xc9bb9c), 0, 0.06 + h, 0);
  const base = new THREE.ExtrudeGeometry(s, { depth: 0.4, bevelEnabled: false }); base.rotateX(-Math.PI / 2); base.scale(1.02, 1, 1.02);
  add(base, std(0x8d8678), 0, 0.06, 0);
}
function grandcentral(G, k) {
  const add = adder(G), W = k.w, D = k.d;
  const front = new THREE.MeshStandardMaterial({ map: winTex('gct', { wall: '#d6ccb4', glass: '#3c4652', cols: 3, rows: 1, mx: 0.16, my: 0.12, arch: true }), roughness: 0.85 });
  const stone = std(0xd6ccb4);
  // 터미널: 큰 아치 창 3개 + 기둥 + 꼭대기 조각상과 시계
  const hall = new THREE.Mesh(new THREE.BoxGeometry(W * 0.86, 1.25, D * 0.42), [stone, stone, stone, stone, front, stone]);
  hall.position.set(0, 0.06 + 0.625, D * 0.22); hall.castShadow = hall.receiveShadow = true; G.add(hall);
  columns(add, std(0xe2d9c4), 8, -W * 0.38, W * 0.38, D * 0.44, 0.06, 1.0, 0.05);
  add(new THREE.BoxGeometry(W * 0.9, 0.12, D * 0.46), std(0xc4b89c), 0, 0.06 + 1.31, D * 0.22);
  add(new THREE.BoxGeometry(1.0, 0.4, 0.3), stone, 0, 0.06 + 1.57, D * 0.4);
  add(new THREE.CircleGeometry(0.15, 20), new THREE.MeshStandardMaterial({ color: 0xf2e6b8, emissive: 0x8a7030 }), 0, 0.06 + 1.55, D * 0.4 + 0.152);
  const bronze = std(0x5d7a62, { metalness: 0.4, roughness: 0.5 });
  for (const x of [-0.3, 0, 0.3]) add(new THREE.CylinderGeometry(0.06, 0.09, 0.42, 8), bronze, x, 0.06 + 1.98, D * 0.4);
  // 뒤의 메트라이프 빌딩
  add(sbox(W * 0.62, 4.4, D * 0.36, 2, 2.4), emisMat(nyTowerHD(3)), 0, 0.06 + 2.2, -D * 0.24);
  add(new THREE.BoxGeometry(W * 0.64, 0.12, D * 0.38), std(0x6c7178), 0, 0.06 + 4.46, -D * 0.24);
}
function nyse(G, k) {
  const add = adder(G), W = k.w, D = k.d, marble = std(0xe9e4d8, { roughness: 0.6 });
  add(sbox(W * 0.86, 1.7, D * 0.6, 0.6, 0.6), new THREE.MeshStandardMaterial({ map: winTex('nyse', { wall: '#e2dccd', glass: '#555d66', cols: 3, rows: 2, mx: 0.3, my: 0.25 }), roughness: 0.7 }), 0, 0.06 + 0.85, -D * 0.12);
  add(new THREE.BoxGeometry(W * 0.84, 0.18, D * 0.3), marble, 0, 0.06 + 0.09, D * 0.28);   // 계단 기단
  columns(add, marble, 6, -W * 0.32, W * 0.32, D * 0.3, 0.24, 1.25, 0.08);
  add(new THREE.BoxGeometry(W * 0.8, 0.2, D * 0.32), marble, 0, 0.24 + 1.25 + 0.1, D * 0.26);
  add(pediment(W * 0.82, 0.5, D * 0.3), marble, 0, 0.24 + 1.45, D * 0.26);
  // 기둥 뒤 큰 성조기
  const f = new THREE.Mesh(new THREE.PlaneGeometry(W * 0.6, 0.85), new THREE.MeshStandardMaterial({ map: flagTex('us'), side: THREE.DoubleSide }));
  f.position.set(0, 0.24 + 0.75, D * 0.17); G.add(f);
}
function rockefeller(G, k) {
  const add = adder(G), W = k.w, D = k.d, m = emisMat(nyTowerHD(0));
  add(sbox(W * 0.7, 1.6, D * 0.5, 2, 2.4), m, 0, 0.06 + 0.8, -D * 0.2);
  add(sbox(W * 0.5, 3.4, D * 0.36, 2, 2.4), m, 0, 0.06 + 1.6 + 1.7, -D * 0.2);
  add(sbox(W * 0.34, 1.1, D * 0.28, 2, 2.4), m, 0, 0.06 + 5 + 0.55, -D * 0.2);
  // 앞마당 스케이트장 + 황금 조각상 + 깃발 줄
  add(new THREE.BoxGeometry(W * 0.5, 0.04, D * 0.28), std(0xdfeaf2, { roughness: 0.2 }), 0, 0.08, D * 0.26);
  add(new THREE.SphereGeometry(0.16, 12, 8), std(0xd8a93a, { metalness: 0.8, roughness: 0.3 }), 0, 0.3, D * 0.14);
  const cols = [0xc8262e, 0x2a4f9a, 0xf2c230, 0x2e8b57, 0xffffff];
  for (let i = 0; i < 8; i++) {
    const x = -W * 0.42 + i * W * 0.12;
    add(new THREE.CylinderGeometry(0.012, 0.012, 0.8, 4), std(0xcccccc), x, 0.46, D * 0.45);
    add(new THREE.PlaneGeometry(0.16, 0.1), new THREE.MeshStandardMaterial({ color: cols[i % cols.length], side: THREE.DoubleSide }), x + 0.08, 0.8, D * 0.45);
  }
}

// =================== 파리: 전투 구역 안 ===================
const STONE_PA = 0xe2d6bb;
function arc(G, k) {
  const add = adder(G), stone = std(STONE_PA, { roughness: 0.9 }), dark = std(0x2a2620);
  const W = Math.min(k.w * 0.85, 2.5), Dp = Math.min(k.d * 0.55, 1.5), H = 2.2, ow = 0.5, oh = 1.15;
  // 정면 모양(가운데 큰 아치가 뚫린 문)을 앞뒤로 밀어서 만듦
  const s = new THREE.Shape();
  s.moveTo(-W / 2, 0); s.lineTo(-ow, 0); s.lineTo(-ow, oh); s.absarc(0, oh, ow, Math.PI, 0, true); s.lineTo(ow, 0); s.lineTo(W / 2, 0); s.lineTo(W / 2, H); s.lineTo(-W / 2, H); s.closePath();
  const g = new THREE.ExtrudeGeometry(s, { depth: Dp, bevelEnabled: false, curveSegments: 16 }); g.translate(0, 0, -Dp / 2);
  add(g, stone, 0, 0.06, 0);
  add(new THREE.BoxGeometry(W + 0.12, 0.12, Dp + 0.12), std(0xd2c5a6), 0, 0.06 + H + 0.06, 0);   // 처마
  add(new THREE.BoxGeometry(W, 0.32, Dp), stone, 0, 0.06 + H + 0.28, 0);                         // 꼭대기 아틱
  add(new THREE.BoxGeometry(W + 0.08, 0.06, Dp + 0.08), std(0xd2c5a6), 0, 0.06 + H + 0.47, 0);
  // 옆면 작은 아치 (어둡게) + 앞면 부조 판
  for (const sx of [-1, 1]) {
    const sa = new THREE.Mesh(new THREE.PlaneGeometry(Dp * 0.4, oh * 0.9), dark); sa.position.set(sx * (W / 2 + 0.005), 0.06 + oh * 0.5, 0); sa.rotation.y = sx * Math.PI / 2; G.add(sa);
    for (const sz of [-1, 1]) { const r = new THREE.Mesh(new THREE.PlaneGeometry(W / 2 - ow - 0.16, 0.6), std(0xc8bb9c)); r.position.set(sx * (ow + (W / 2 - ow) / 2), 0.06 + 0.75, sz * (Dp / 2 + 0.005)); if (sz < 0) r.rotation.y = Math.PI; G.add(r); }
  }
  // 아치 안 삼색기
  const f = new THREE.Mesh(new THREE.PlaneGeometry(0.62, 0.9), new THREE.MeshStandardMaterial({ map: flagTex('fr'), side: THREE.DoubleSide }));
  f.position.set(0, 0.06 + 0.95, 0); G.add(f);
}
function louvre(G, k) {
  const add = adder(G), W = k.w, D = k.d;
  const wing = emisMat(haussmannHD(1, false), { emissiveIntensity: 0.2 });
  const zinc = new THREE.MeshStandardMaterial({ map: zincRoofHD(), roughness: 0.55, metalness: 0.35 });
  const wings = [[0, -D * 0.38, W * 0.96, D * 0.22, 0], [-W * 0.4, 0.05, D * 0.62, W * 0.16, Math.PI / 2], [W * 0.4, 0.05, D * 0.62, W * 0.16, -Math.PI / 2]];
  for (const [x, z, len, dep, ry] of wings) {
    const g = sbox(len, 1.0, dep, 1, 1.8); g.rotateY(ry); add(g, wing, x, 0.06 + 0.5, z);
    add(mansardGeo(0, 0, 0, len, dep, 0.35, ry), zinc, x, 0.06 + 1.0, z);
  }
  // 유리 피라미드 + 작은 피라미드 + 분수
  const glass = std(0x9fc3d8, { metalness: 0.6, roughness: 0.08, transparent: true, opacity: 0.85 });
  const py = new THREE.ConeGeometry(0.95, 1.05, 4, 1); py.rotateY(Math.PI / 4);
  add(py, glass, 0, 0.06 + 0.525, D * 0.12);
  for (const [x, z] of [[-0.95, D * 0.3], [0.95, D * 0.3], [0, D * 0.42]]) { const p = new THREE.ConeGeometry(0.2, 0.22, 4, 1); p.rotateY(Math.PI / 4); add(p, glass, x, 0.06 + 0.11, z); }
  const water = std(0x4d7f9c, { roughness: 0.1, metalness: 0.2 });
  for (const sx of [-1, 1]) add(new THREE.BoxGeometry(0.7, 0.03, 0.5), water, sx * 1.05, 0.08, D * 0.08);
}
function notredame(G, k) {
  const add = adder(G), W = k.w, D = k.d;
  const stone = std(0xd3c8af, { roughness: 0.9 }), lead = std(0x5c6268, { roughness: 0.6, metalness: 0.3 }), dark = std(0x2b2724);
  const nw = W * 0.4, nz0 = -D * 0.45, nz1 = D * 0.18, nh = 1.25;
  // 본당(신랑) + 가파른 지붕 + 십자형 익랑
  const nave = sbox(nw, nh, nz1 - nz0, 0.5, 0.6);
  add(nave, new THREE.MeshStandardMaterial({ map: winTex('nd', { wall: '#d3c8af', glass: '#3a4a6a', cols: 2, rows: 1, mx: 0.3, my: 0.2, arch: true }), roughness: 0.9 }), 0, 0.06 + nh / 2, (nz0 + nz1) / 2);
  const roof = pediment(nw + 0.06, 0.7, nz1 - nz0); roof.rotateY(0); add(roof, lead, 0, 0.06 + nh, (nz0 + nz1) / 2);
  add(sbox(W * 0.86, nh, 0.7, 0.5, 0.6), stone, 0, 0.06 + nh / 2, -D * 0.12);
  const tr = pediment(0.76, 0.7, W * 0.86); tr.rotateY(Math.PI / 2); add(tr, lead, 0, 0.06 + nh, -D * 0.12);
  // 첨탑
  add(new THREE.CylinderGeometry(0.1, 0.14, 0.4, 8), lead, 0, 0.06 + nh + 0.85, -D * 0.12);
  add(new THREE.ConeGeometry(0.11, 1.5, 8), lead, 0, 0.06 + nh + 1.8, -D * 0.12);
  // 날개 버팀벽 (본당 옆 사선 기둥)
  for (const sx of [-1, 1]) for (let i = 0; i < 5; i++) {
    const z = nz0 + 0.3 + i * (nz1 - nz0 - 0.5) / 4;
    add(new THREE.BoxGeometry(0.1, 0.9, 0.12), stone, sx * (nw / 2 + 0.35), 0.06 + 0.45, z);
    const fl = add(new THREE.BoxGeometry(0.05, 0.5, 0.06), stone, sx * (nw / 2 + 0.17), 0.06 + 1.0, z); fl.rotation.z = sx * 0.9;
  }
  // 서쪽 정면 (카메라 쪽): 두 탑 + 장미창 + 세 개의 문
  const fz = nz1 + 0.35, fh = 2.2, fw = W * 0.62;
  add(sbox(fw, fh, 0.7, fw, fh), stone, 0, 0.06 + fh / 2, fz);
  for (const sx of [-1, 1]) add(new THREE.BoxGeometry(fw * 0.36, 1.0, 0.66), stone, sx * fw * 0.32, 0.06 + fh + 0.5, fz);
  const rose = canvasTex('rose', 128, 128, (g, w) => {
    g.fillStyle = '#d3c8af'; g.fillRect(0, 0, w, w);
    const c = w / 2; g.fillStyle = '#26365e'; g.beginPath(); g.arc(c, c, c * 0.92, 0, 7); g.fill();
    const cols = ['#b8352a', '#2f63ad', '#e0b84a', '#3b8f6a'];
    for (let i = 0; i < 24; i++) { g.fillStyle = cols[i % 4]; g.beginPath(); g.moveTo(c, c); g.arc(c, c, c * 0.85, i / 24 * 6.283, (i + 0.5) / 24 * 6.283); g.fill(); }
    g.strokeStyle = '#d3c8af'; g.lineWidth = 3; g.beginPath(); g.arc(c, c, c * 0.4, 0, 7); g.stroke();
  });
  add(new THREE.CircleGeometry(0.34, 24), new THREE.MeshStandardMaterial({ map: rose, emissiveMap: rose, emissive: 0x666666 }), 0, 0.06 + 1.45, fz + 0.352);
  for (const x of [-fw * 0.3, 0, fw * 0.3]) add(new THREE.PlaneGeometry(0.28, 0.6), dark, x, 0.06 + 0.3, fz + 0.352);
  add(new THREE.PlaneGeometry(fw * 0.9, 0.1), std(0xa99d84), 0, 0.06 + 1.0, fz + 0.353);   // 왕의 회랑 띠
}
function opera(G, k) {
  const add = adder(G), W = k.w, D = k.d;
  const stone = std(0xdccfb2), green = std(0x5f9f88, { roughness: 0.5, metalness: 0.3 }), gold = std(0xd9aa3c, { metalness: 0.85, roughness: 0.3 });
  const facade = new THREE.MeshStandardMaterial({ map: winTex('op', { wall: '#dccfb2', glass: '#3d3a36', cols: 7, rows: 2, mx: 0.24, my: 0.2, arch: true, band: 'rgba(170,140,90,0.5)' }), roughness: 0.85 });
  add(sbox(W * 0.86, 1.3, D * 0.46, W * 0.86, 1.3), facade, 0, 0.06 + 0.65, D * 0.18);
  columns(add, std(0xe6dcc6), 8, -W * 0.36, W * 0.36, D * 0.42, 0.66, 0.6, 0.045);
  add(new THREE.BoxGeometry(W * 0.9, 0.12, D * 0.5), std(0xcbbd9c), 0, 0.06 + 1.36, D * 0.18);
  for (const sx of [-1, 1]) { add(new THREE.BoxGeometry(0.5, 0.35, 0.5), stone, sx * W * 0.36, 0.06 + 1.58, D * 0.3); add(new THREE.ConeGeometry(0.16, 0.42, 6), gold, sx * W * 0.36, 0.06 + 1.96, D * 0.3); }
  // 가운데 초록 구리 돔 + 뒤 무대동 박공 + 꼭대기 아폴론상
  add(new THREE.CylinderGeometry(0.75, 0.75, 0.35, 24), stone, 0, 0.06 + 1.5, -D * 0.06);
  add(new THREE.SphereGeometry(0.75, 24, 10, 0, Math.PI * 2, 0, Math.PI / 2), green, 0, 0.06 + 1.67, -D * 0.06).scale.y = 0.55;
  add(new THREE.ConeGeometry(0.1, 0.3, 8), gold, 0, 0.06 + 2.25, -D * 0.06);
  add(sbox(W * 0.6, 1.9, D * 0.36, 1, 1), stone, 0, 0.06 + 0.95, -D * 0.3);
  add(pediment(W * 0.62, 0.55, D * 0.38), green, 0, 0.06 + 1.9, -D * 0.3);
  add(new THREE.CylinderGeometry(0.05, 0.08, 0.32, 6), gold, 0, 0.06 + 2.6, -D * 0.3 + D * 0.18);
}
function pantheon(G, k) {
  const add = adder(G), W = k.w, D = k.d, stone = std(0xe0d5bd, { roughness: 0.85 });
  add(sbox(W * 0.62, 1.2, D * 0.62, 1, 1), stone, 0, 0.06 + 0.6, -D * 0.05);
  add(sbox(W * 0.9, 1.0, D * 0.3, 1, 1), stone, 0, 0.06 + 0.5, -D * 0.05);
  // 정면 주랑 + 박공
  columns(add, std(0xeae2cf), 6, -W * 0.28, W * 0.28, D * 0.38, 0.06, 1.05, 0.07);
  add(new THREE.BoxGeometry(W * 0.66, 0.16, D * 0.2), stone, 0, 0.06 + 1.13, D * 0.33);
  add(pediment(W * 0.68, 0.42, D * 0.2), stone, 0, 0.06 + 1.21, D * 0.33);
  // 높은 원통 + 둘레 기둥 + 돔 + 랜턴
  const cy = 0.06 + 1.2;
  add(new THREE.CylinderGeometry(0.62, 0.66, 0.3, 24), stone, 0, cy + 0.15, -D * 0.05);
  add(new THREE.CylinderGeometry(0.55, 0.55, 0.9, 24), stone, 0, cy + 0.75, -D * 0.05);
  for (let i = 0; i < 16; i++) { const a = i / 16 * Math.PI * 2; add(new THREE.CylinderGeometry(0.03, 0.03, 0.8, 6), std(0xeae2cf), Math.cos(a) * 0.64, cy + 0.7, -D * 0.05 + Math.sin(a) * 0.64); }
  add(new THREE.CylinderGeometry(0.7, 0.7, 0.06, 24), stone, 0, cy + 1.13, -D * 0.05);
  add(new THREE.SphereGeometry(0.55, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), std(0x9aa3a8, { metalness: 0.4, roughness: 0.4 }), 0, cy + 1.16, -D * 0.05).scale.y = 1.15;
  add(new THREE.CylinderGeometry(0.1, 0.12, 0.3, 10), stone, 0, cy + 1.95, -D * 0.05);
  add(new THREE.ConeGeometry(0.1, 0.2, 10), std(0x9aa3a8), 0, cy + 2.2, -D * 0.05);
}
function moulinrouge(G, k) {
  const add = adder(G), W = k.w, D = k.d, red = std(0xb3222b, { roughness: 0.6, emissive: 0x300000 });
  const sign = canvasTex('moulin', 256, 64, (g, w, h) => { g.fillStyle = '#3b0b10'; g.fillRect(0, 0, w, h); g.fillStyle = '#ffd9a8'; g.font = 'bold 34px Georgia,serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('MOULIN ROUGE', w / 2, h / 2 + 2); for (let x = 6; x < w; x += 12) { g.fillStyle = '#ffd36a'; g.beginPath(); g.arc(x, 5, 2.4, 0, 7); g.arc(x, h - 5, 2.4, 0, 7); g.fill(); } });
  const facade = new THREE.MeshStandardMaterial({ map: winTex('mr', { wall: '#a8202a', glass: '#f2c46a', cols: 6, rows: 2, mx: 0.25, my: 0.25, lit: 0.6 }), emissive: 0x401010, roughness: 0.6 });
  add(sbox(W * 0.86, 1.0, D * 0.5, W * 0.86 / 2, 1), facade, W * 0.05, 0.06 + 0.5, -D * 0.05);
  add(new THREE.PlaneGeometry(W * 0.6, 0.22), new THREE.MeshStandardMaterial({ map: sign, emissiveMap: sign, emissive: 0xffffff, emissiveIntensity: 0.9 }), W * 0.12, 0.06 + 0.82, D * 0.2 + 0.01);
  // 빨간 풍차: 지붕 위 탑 + 날개 4장
  const mx = -W * 0.3, mz = D * 0.05;
  add(new THREE.CylinderGeometry(0.28, 0.36, 1.1, 8), red, mx, 0.06 + 1.0 + 0.55, mz);
  add(new THREE.ConeGeometry(0.34, 0.4, 8), std(0x7a1a20), mx, 0.06 + 2.3, mz);
  const blade = std(0xd8343c, { emissive: 0x501010 });
  for (let i = 0; i < 4; i++) {
    const b = add(new THREE.BoxGeometry(0.16, 1.15, 0.03), blade, mx, 0.06 + 1.9, mz + 0.38);
    b.geometry.translate(0, 0.6, 0); b.rotation.z = i * Math.PI / 2 + 0.4;
  }
  add(new THREE.SphereGeometry(0.06, 8, 6), std(0xffd36a, { emissive: 0x806020 }), mx, 0.06 + 1.9, mz + 0.4);
}

export const FIELD = { timesq, flatiron, grandcentral, nyse, rockefeller, arc, louvre, notredame, opera, pantheon, moulinrouge };

// =================== 가장자리 큰 랜드마크 ===================
// 자유의 여신상: 별 모양 요새 섬 + 화강암 받침대 + 횃불을 든 청록 구리 여신상
function liberty() {
  const G = new THREE.Group(), add = adder(G);
  const copper = std(0x78b3a2, { roughness: 0.55, metalness: 0.25 }), gran = std(0xb7ae9c), grass = std(0x5f8a45, { roughness: 1 });
  add(new THREE.CylinderGeometry(5.2, 5.6, 0.5, 32), grass, 0, 0.1);
  const star = new THREE.Shape();
  for (let i = 0; i < 22; i++) { const a = i / 22 * Math.PI * 2, r = i % 2 ? 2.2 : 3.2; i ? star.lineTo(Math.cos(a) * r, Math.sin(a) * r) : star.moveTo(Math.cos(a) * r, Math.sin(a) * r); }
  const sg = new THREE.ExtrudeGeometry(star, { depth: 0.7, bevelEnabled: false }); sg.rotateX(-Math.PI / 2); add(sg, gran, 0, 0.35);
  add(new THREE.BoxGeometry(2.0, 0.6, 2.0), gran, 0, 1.35);
  add(new THREE.BoxGeometry(1.5, 2.6, 1.5), gran, 0, 2.95);
  add(new THREE.BoxGeometry(1.7, 0.2, 1.7), gran, 0, 4.3);
  const y0 = 4.4;
  add(new THREE.CylinderGeometry(0.42, 0.72, 2.7, 14), copper, 0, y0 + 1.35);     // 옷자락
  add(new THREE.SphereGeometry(0.5, 14, 8), copper, 0, y0 + 2.7).scale.set(1, 0.6, 0.85);
  add(new THREE.CylinderGeometry(0.13, 0.17, 0.3, 10), copper, 0, y0 + 3.0);
  add(new THREE.SphereGeometry(0.28, 14, 10), copper, 0, y0 + 3.3);
  for (let i = 0; i < 7; i++) { const a = (i / 6 - 0.5) * 2.2, sp = add(new THREE.ConeGeometry(0.05, 0.42, 5), copper, Math.sin(a) * 0.3, y0 + 3.55, Math.cos(a) * 0.12 + 0.05); sp.rotation.z = -Math.sin(a) * 0.9; sp.rotation.x = 0.5; }
  const arm = add(new THREE.CylinderGeometry(0.1, 0.12, 1.5, 8), copper, 0.42, y0 + 3.55, 0); arm.rotation.z = -0.32;
  add(new THREE.CylinderGeometry(0.13, 0.08, 0.3, 8), std(0xd8b04a, { metalness: 0.8, roughness: 0.3 }), 0.66, y0 + 4.35, 0);
  add(new THREE.ConeGeometry(0.12, 0.34, 8), new THREE.MeshStandardMaterial({ color: 0xffc04a, emissive: 0xff9a20, emissiveIntensity: 1.2 }), 0.66, y0 + 4.65, 0);
  const tab = add(new THREE.BoxGeometry(0.34, 0.5, 0.1), copper, -0.45, y0 + 2.2, 0.2); tab.rotation.z = 0.25;
  return G;
}
function empire() {
  const G = new THREE.Group(), add = adder(G), m = emisMat(nyTowerHD(0), { roughness: 0.7 });
  let y = 0;
  for (const [w, h] of [[6.4, 3], [4.8, 12.5], [3.9, 3.5], [3.0, 1.6], [2.2, 1.2], [1.5, 1.2]]) { add(sbox(w, h, w, 2, 2.4), m, 0, y + h / 2, 0); add(new THREE.BoxGeometry(w + 0.12, 0.14, w + 0.12), std(0x8c8a84), 0, y + h, 0); y += h; }
  add(new THREE.CylinderGeometry(0.45, 0.65, 2.6, 8), std(0xbfc4c9, { metalness: 0.6, roughness: 0.3 }), 0, y + 1.3, 0);
  add(new THREE.CylinderGeometry(0.06, 0.1, 3.2, 6), std(0xdddddd), 0, y + 2.6 + 1.6, 0);
  const beacon = add(new THREE.SphereGeometry(0.14, 8, 6), new THREE.MeshBasicMaterial({ color: 0xff3a2e }), 0, y + 5.9, 0);
  beacon.castShadow = false;
  return G;
}
function chrysler() {
  const G = new THREE.Group(), add = adder(G), m = emisMat(nyTowerHD(2), { roughness: 0.7 });
  add(sbox(4.2, 3, 4.2, 2, 2.4), m, 0, 1.5, 0);
  add(sbox(3.2, 15, 3.2, 2, 2.4), m, 0, 3 + 7.5, 0);
  // 은빛 왕관: 점점 작아지는 아치 단 + 삼각 창 + 바늘 첨탑
  const crown = canvasTex('chrysler', 128, 128, (g, w, h) => {
    g.fillStyle = '#c9ced4'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 4; i++) { g.fillStyle = '#2a3038'; g.beginPath(); g.moveTo(i * 32 + 6, h); g.lineTo(i * 32 + 16, h * 0.25); g.lineTo(i * 32 + 26, h); g.fill(); }
    g.strokeStyle = '#f2f2f2'; g.lineWidth = 3; g.beginPath(); for (let i = 0; i < 4; i++) g.arc(i * 32 + 16, h, 15, Math.PI, 0); g.stroke();
  });
  const cm = new THREE.MeshStandardMaterial({ map: crown, metalness: 0.75, roughness: 0.25 });
  let y = 18;
  for (let i = 0; i < 6; i++) {
    const r0 = 1.55 - i * 0.24, r1 = r0 - 0.16, h = 0.85;
    const g = new THREE.CylinderGeometry(r1, r0, h, 16, 1, true); uvMul(g, 4, 1);
    add(g, cm, 0, y + h / 2, 0); y += h;
  }
  add(new THREE.ConeGeometry(0.2, 3.2, 8), std(0xe8ecef, { metalness: 0.9, roughness: 0.2 }), 0, y + 1.6, 0);
  return G;
}
function wtc() {
  const G = new THREE.Group(), add = adder(G);
  const T = glassFacadeHD(2), gm = new THREE.MeshStandardMaterial({ map: T.map, emissiveMap: T.emissiveMap, emissive: 0xffffff, emissiveIntensity: 0.35, roughness: 0.1, metalness: 0.6 });
  add(sbox(4.8, 3, 4.8, 2, 2), std(0xbfc6cc, { metalness: 0.5, roughness: 0.3 }), 0, 1.5, 0);
  // 아래는 정사각형, 위로 갈수록 45도 돌아간 작은 정사각형 → 삼각형 8면
  const H = 26, rb = 3.4, rt = 2.0, P = [], U = [];
  const B = (i) => { const a = Math.PI / 4 + i * Math.PI / 2; return [Math.cos(a) * rb, 0, Math.sin(a) * rb]; };
  const Tp = (i) => { const a = i * Math.PI / 2; return [Math.cos(a) * rt, H, Math.sin(a) * rt]; };
  for (let i = 0; i < 4; i++) {
    const b0 = B(i), b1 = B(i + 1), t1 = Tp(i + 1), t0 = Tp(i);
    P.push(...b0, ...t1, ...b1); U.push(0, 0, 1.2, H / 2, 2.4, 0);
    P.push(...t0, ...t1, ...b0); U.push(-1.2, H / 2, 1.2, H / 2, 0, 0);
  }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(U, 2)); g.computeVertexNormals();
  add(g, gm, 0, 3, 0);
  add(new THREE.BoxGeometry(rt * 1.42, 0.5, rt * 1.42), std(0xd4d9dd, { metalness: 0.5 }), 0, 3 + H + 0.25, 0).rotation.y = Math.PI / 4;
  add(new THREE.CylinderGeometry(0.08, 0.16, 7, 8), std(0xf0f0f0), 0, 3 + H + 3.9, 0);
  return G;
}
// 에펠탑: 그물(격자) 무늬 철골. 다리 4개 + 아치 + 1·2층 전망대 + 위로 가늘어지는 탑
function latticeTex() {
  return canvasTex('lattice', 128, 128, (g, w, h) => {
    g.clearRect(0, 0, w, h);
    g.strokeStyle = '#7a5f45'; g.lineCap = 'square';
    g.lineWidth = 9; g.strokeRect(4, 0, w - 8, h);
    g.lineWidth = 5; g.beginPath(); g.moveTo(4, 0); g.lineTo(w - 4, h); g.moveTo(w - 4, 0); g.lineTo(4, h); g.stroke();
    g.lineWidth = 4; g.beginPath(); g.moveTo(0, h / 2); g.lineTo(w, h / 2); g.stroke();
  });
}
function eiffel() {
  const G = new THREE.Group(), add = adder(G);
  const lat = new THREE.MeshStandardMaterial({ map: latticeTex(), alphaTest: 0.4, side: THREE.DoubleSide, roughness: 0.8, color: 0xc0a080 });
  const solid = std(0x6d5640, { roughness: 0.8 });
  const leg = (from, to, t) => {
    const a = new THREE.Vector3(...from), b = new THREE.Vector3(...to), len = a.distanceTo(b);
    const g = uvMul(new THREE.BoxGeometry(t, len, t), 1, len / 1.6);
    const m = add(g, lat, (a.x + b.x) / 2, (a.y + b.y) / 2, (a.z + b.z) / 2);
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), b.clone().sub(a).normalize());
    const core = add(new THREE.BoxGeometry(t * 0.45, len, t * 0.45), solid, m.position.x, m.position.y, m.position.z); core.quaternion.copy(m.quaternion);
  };
  for (const [sx, sz] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) {
    leg([sx * 6.6, 0, sz * 6.6], [sx * 3.9, 6, sz * 3.9], 1.7);
    leg([sx * 3.9, 6, sz * 3.9], [sx * 2.1, 12.6, sz * 2.1], 1.2);
  }
  // 다리 사이 아치
  for (let i = 0; i < 4; i++) {
    const t = new THREE.TorusGeometry(4.6, 0.18, 6, 28, Math.PI);
    const m = add(t, solid, 0, 0.6, 0); m.rotation.y = i * Math.PI / 2;
    m.position.set(Math.sin(i * Math.PI / 2) * 5.4, 0.6, Math.cos(i * Math.PI / 2) * 5.4);
  }
  // 1층·2층 전망대
  add(uvMul(new THREE.BoxGeometry(9.6, 0.8, 9.6), 6, 0.5), lat, 0, 6.1, 0);
  add(new THREE.BoxGeometry(8.6, 0.25, 8.6), solid, 0, 6.1, 0);
  add(uvMul(new THREE.BoxGeometry(5.4, 0.6, 5.4), 3, 0.4), lat, 0, 12.7, 0);
  add(new THREE.BoxGeometry(4.8, 0.2, 4.8), solid, 0, 12.7, 0);
  // 위쪽 탑: 4면 사각뿔대 (격자) + 가운데 심
  const up = new THREE.CylinderGeometry(0.75, 2.8, 11, 4, 1, true); up.rotateY(Math.PI / 4); uvMul(up, 4, 7);
  add(up, lat, 0, 13 + 5.5, 0);
  add(new THREE.CylinderGeometry(0.35, 1.3, 11, 4).rotateY(Math.PI / 4), solid, 0, 13 + 5.5, 0);
  add(new THREE.BoxGeometry(1.2, 0.9, 1.2), solid, 0, 24.4, 0);
  add(new THREE.CylinderGeometry(0.08, 0.14, 2.6, 6), solid, 0, 26.1, 0);
  return G;
}
function sacrecoeur(L, city) {
  const G = new THREE.Group(), add = adder(G), white = std(0xf3efe6, { roughness: 0.7 });
  const g = new THREE.SphereGeometry(1, 28, 12, 0, Math.PI * 2, 0, Math.PI / 2);
  const hill = add(g, std(0x557a3a, { roughness: 1 })); hill.scale.set(15, 7, 11); hill.position.y = -0.2;
  const rnd = makeRng('montmartre');
  for (let i = 0; i < 160; i++) {
    const a = rnd() * Math.PI * 2, r = 0.3 + Math.sqrt(rnd()) * 0.65, x = Math.cos(a) * r * 15, z = Math.sin(a) * r * 11, y = 7 * Math.sqrt(Math.max(0, 1 - r * r)) - 0.3;
    (city.cityTrees = city.cityTrees || []).push([L.x + x, L.z + z, rnd.range(0.9, 1.3), y]);
  }
  const y0 = 6.6;
  add(new THREE.BoxGeometry(5, 2.2, 3.2), white, 0, y0 + 1.1, 0);
  add(new THREE.BoxGeometry(3.2, 1.6, 0.8), white, 0, y0 + 0.8, 1.9);
  for (const x of [-0.9, 0, 0.9]) add(new THREE.PlaneGeometry(0.55, 1.0), std(0x2c2822), x, y0 + 0.5, 2.31);
  // 큰 돔 (드럼 + 길쭉한 돔 + 랜턴) + 작은 돔 4개 + 뒤 종탑
  add(new THREE.CylinderGeometry(1.15, 1.2, 1.5, 24), white, 0, y0 + 2.2 + 0.75, 0);
  add(new THREE.SphereGeometry(1.15, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), white, 0, y0 + 3.7, 0).scale.y = 1.5;
  add(new THREE.CylinderGeometry(0.22, 0.26, 0.7, 10), white, 0, y0 + 5.7, 0);
  add(new THREE.ConeGeometry(0.24, 0.5, 10), white, 0, y0 + 6.3, 0);
  for (const [x, z] of [[-1.9, 1], [1.9, 1], [-1.9, -1], [1.9, -1]]) {
    add(new THREE.CylinderGeometry(0.45, 0.45, 0.6, 14), white, x, y0 + 2.5, z);
    add(new THREE.SphereGeometry(0.45, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), white, x, y0 + 2.8, z).scale.y = 1.5;
  }
  add(new THREE.BoxGeometry(1, 4.6, 1), white, 0, y0 + 2.3, -2.3);
  add(new THREE.SphereGeometry(0.5, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), white, 0, y0 + 4.6, -2.3).scale.y = 1.4;
  return G;
}
function montparnasse() {
  const G = new THREE.Group(), add = adder(G);
  const t = canvasTex('mtp', 128, 128, (g, w, h) => {
    g.fillStyle = '#2a2622'; g.fillRect(0, 0, w, h);
    const rnd = makeRng('mtp');
    for (let y = 0; y < h; y += 8) { g.fillStyle = '#4a4540'; g.fillRect(0, y, w, 5); for (let x = 0; x < w; x += 8) if (rnd() < 0.12) { g.fillStyle = '#c9a866'; g.fillRect(x, y, 6, 5); } }
  });
  const m = new THREE.MeshStandardMaterial({ map: t, emissiveMap: t, emissive: 0x555555, roughness: 0.25, metalness: 0.5 });
  add(sbox(6, 2, 4, 2, 2), std(0x3a3632), 0, 1, 0);
  const s = new THREE.Shape(); s.moveTo(-2.4, -1.2); s.lineTo(2.4, -1.2); s.absarc(2.4, 0, 1.2, -Math.PI / 2, Math.PI / 2); s.lineTo(-2.4, 1.2); s.absarc(-2.4, 0, 1.2, Math.PI / 2, Math.PI * 1.5);
  const g = new THREE.ExtrudeGeometry(s, { depth: 19, bevelEnabled: false, curveSegments: 10 }); g.rotateX(-Math.PI / 2);
  uvMul(g, 0.4, 0.5);
  add(g, m, 0, 2, 0);
  add(new THREE.BoxGeometry(3, 0.8, 1.6), std(0x55504a), 0, 21.4, 0);
  return G;
}
function defense(L, city) {
  const G = new THREE.Group(), add = adder(G);
  const marble = new THREE.MeshStandardMaterial({ map: winTex('arche', { wall: '#eef0f0', glass: '#c9d2d6', cols: 8, rows: 8, mx: 0.08, my: 0.08 }), roughness: 0.4 });
  // 그랑드 아르슈: 속이 뚫린 거대한 흰 정육면체
  const S = 8, t = 1.2, d = 6.5;
  add(sbox(t, S, d, 1, 1), marble, -S / 2 + t / 2, S / 2, 0);
  add(sbox(t, S, d, 1, 1), marble, S / 2 - t / 2, S / 2, 0);
  add(sbox(S, t, d, 1, 1), marble, 0, S - t / 2, 0);
  add(sbox(S, 0.5, d, 1, 1), marble, 0, 0.25, 0);
  add(new THREE.PlaneGeometry(S - 2 * t, 0.6), std(0xf6f6f6, { transparent: true, opacity: 0.6, side: THREE.DoubleSide }), 0, S * 0.45, 0).rotation.x = -Math.PI / 2;
  // 주변 유리 빌딩 숲 (업무 지구)
  const rnd = makeRng('defense');
  for (let i = 0; i < 8; i++) {
    const a = i / 8 * Math.PI * 2 + 0.3, r = 10 + rnd() * 4, h = 10 + rnd() * 14, w = 2.6 + rnd() * 1.6;
    const T = glassFacadeHD(i % 4), m = new THREE.MeshStandardMaterial({ map: T.map, emissiveMap: T.emissiveMap, emissive: 0xffffff, emissiveIntensity: 0.35, roughness: 0.12, metalness: 0.55 });
    add(sbox(w, h, w, 2, 2), m, Math.cos(a) * r, h / 2, Math.sin(a) * r);
  }
  return G;
}

export const EDGE = {
  liberty: { r: 7, build: liberty }, empire: { r: 6, build: empire }, chrysler: { r: 5, build: chrysler }, wtc: { r: 6, build: wtc },
  eiffel: { r: 10, build: eiffel }, sacrecoeur: { r: 15, build: sacrecoeur }, montparnasse: { r: 6, build: montparnasse }, defense: { r: 16, build: defense }
};
