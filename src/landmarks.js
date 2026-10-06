// 실제 모양 랜드마크 (코드로 정밀 제작): 한옥 곡선 지붕, 기와 골, 단청, 기둥, 석축
// 크기는 스테이지 파일의 자리(w×d) 안에 맞춤
import * as THREE from 'three';
import { makeRng } from './textures.js';

const texCache = {};
function canvasTex(key, w, h, draw, srgb = true) {
  if (texCache[key]) return texCache[key];
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8;
  return (texCache[key] = t);
}

// 기와: 골기와 줄(세로) + 와구 끝(아래쪽 둥근 막새) + 얼룩
const TILE_COLORS = {
  gray: ['#3d4146', '#24272b', '#4f545a', '#5a5f66', '#2a2d31'],
  blue: ['#24508f', '#173866', '#2f63ad', '#3a72c0', '#1b3f73']   // 청기와 (청와대)
};
function tileTex(v = 'gray') {
  const C = TILE_COLORS[v];
  return canvasTex('giwa' + v, 256, 256, (g, w, h) => {
    const rnd = makeRng('giwa');
    g.fillStyle = C[0]; g.fillRect(0, 0, w, h);
    const n = 16, cw = w / n;
    for (let i = 0; i < n; i++) {
      const x = i * cw;
      const grd = g.createLinearGradient(x, 0, x + cw, 0);
      grd.addColorStop(0, C[1]); grd.addColorStop(0.35, C[2]); grd.addColorStop(0.55, C[3]); grd.addColorStop(1, C[4]);
      g.fillStyle = grd; g.fillRect(x + cw * 0.18, 0, cw * 0.64, h);
      for (let y = 0; y < h; y += 16) { g.fillStyle = 'rgba(0,0,0,0.25)'; g.fillRect(x + cw * 0.18, y, cw * 0.64, 1.5); }
    }
    for (let k = 0; k < 900; k++) { g.fillStyle = `rgba(${rnd() < 0.5 ? '255,255,255' : '0,0,0'},${0.03 + rnd() * 0.05})`; g.fillRect(rnd() * w, rnd() * h, 2 + rnd() * 6, 2 + rnd() * 6); }
  });
}

// 단청: 녹색 바탕 + 공포(받침) 반복 무늬 (붉은·푸른·흰 띠)
function dancheongTex() {
  return canvasTex('dancheong', 256, 64, (g, w, h) => {
    g.fillStyle = '#2f7a64'; g.fillRect(0, 0, w, h);
    const n = 8, cw = w / n;
    for (let i = 0; i < n; i++) {
      const x = i * cw;
      g.fillStyle = '#b8352a'; g.fillRect(x + cw * 0.4, 0, cw * 0.2, h);
      g.fillStyle = '#e9e1cf'; g.fillRect(x + cw * 0.36, h * 0.2, cw * 0.04, h * 0.6); g.fillRect(x + cw * 0.6, h * 0.2, cw * 0.04, h * 0.6);
      g.fillStyle = '#2a4f9a'; g.beginPath(); g.arc(x + cw * 0.15, h * 0.5, h * 0.18, 0, 7); g.fill(); g.beginPath(); g.arc(x + cw * 0.85, h * 0.5, h * 0.18, 0, 7); g.fill();
      g.fillStyle = '#e9c34a'; g.beginPath(); g.arc(x + cw * 0.15, h * 0.5, h * 0.07, 0, 7); g.fill(); g.beginPath(); g.arc(x + cw * 0.85, h * 0.5, h * 0.07, 0, 7); g.fill();
    }
    g.fillStyle = '#1f5a48'; g.fillRect(0, 0, w, 4); g.fillRect(0, h - 4, w, 4);
  });
}

// 창호: 붉은 틀 + 격자 창살
function doorTex() {
  return canvasTex('changho', 128, 128, (g, w, h) => {
    g.fillStyle = '#8b2f25'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#c9b48a'; g.fillRect(10, 10, w - 20, h - 20);
    g.strokeStyle = '#7a2a20'; g.lineWidth = 3;
    for (let i = 10; i <= w - 10; i += 12) { g.beginPath(); g.moveTo(i, 10); g.lineTo(i, h - 10); g.stroke(); }
    for (let i = 10; i <= h - 10; i += 12) { g.beginPath(); g.moveTo(10, i); g.lineTo(w - 10, i); g.stroke(); }
  });
}

// 화강암 석축: 엇갈린 큰 돌 블록
function stoneTex() {
  return canvasTex('seokchuk', 256, 256, (g, w, h) => {
    const rnd = makeRng('seokchuk');
    g.fillStyle = '#6e6a62'; g.fillRect(0, 0, w, h);
    const rh = 32;
    for (let y = 0, r = 0; y < h; y += rh, r++) {
      let x = r % 2 ? -24 : 0;
      while (x < w) {
        const bw = 40 + rnd() * 30, l = 150 + rnd() * 40;
        g.fillStyle = `rgb(${l},${l - 4},${l - 12})`; g.fillRect(x + 2, y + 2, bw - 3, rh - 3);
        for (let k = 0; k < 12; k++) { g.fillStyle = `rgba(0,0,0,${rnd() * 0.08})`; g.fillRect(x + rnd() * bw, y + rnd() * rh, 3, 3); }
        x += bw;
      }
    }
  });
}

// ---------- 곡선 지붕 (우진각 / 팔작) ----------
// W×D 바닥(처마 포함), 높이 H. 경사는 오목하게 처지고, 네 귀는 위로 들림(처마 곡선)
function curvedRoof(W, D, H, opt = {}) {
  const lift = opt.lift ?? 0.22 * H, sag = opt.sag ?? 1.55, nx = 28, nz = 16;
  const r = Math.max(0, (W - D) / 2) * (opt.ridge ?? 1);
  const hw = W / 2, hd = D / 2;
  const hAt = (x, z) => {
    const tz = Math.abs(z) / hd, tx = Math.max(0, (Math.abs(x) - r)) / hd;
    const t = Math.min(1, Math.max(tz, tx));
    let y = H * Math.pow(1 - t, sag);
    const cx = Math.abs(x) / hw, cz = Math.abs(z) / hd;
    y += lift * Math.pow(Math.max(cx, cz) > 0.75 ? Math.min(cx, cz) * Math.max(cx, cz) : 0, 3) * 1.2;   // 귀 솟음
    y += lift * 0.35 * Math.pow(cx, 4) * t;   // 처마선이 양 끝으로 갈수록 살짝 올라감
    return { y, t };
  };
  const pos = [], uv = [], idx = [];
  for (let j = 0; j <= nz; j++) for (let i = 0; i <= nx; i++) {
    const x = -hw + (i / nx) * W, z = -hd + (j / nz) * D, { y, t } = hAt(x, z);
    pos.push(x, y, z);
    uv.push(Math.abs(z) / hd > (Math.abs(x) - r) / hd ? x * 1.4 : z * 1.4, t * 2.2);
  }
  for (let j = 0; j < nz; j++) for (let i = 0; i < nx; i++) {
    const a = j * (nx + 1) + i, b = a + 1, c = a + nx + 1, d = c + 1;
    idx.push(a, c, b, b, c, d);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx); g.computeVertexNormals();
  return { geo: g, hAt, r, hw, hd };
}

// 마루(용마루·추녀마루): 지붕 면을 따라가는 굵은 선
function ridgeLines(R, thick) {
  const parts = [];
  const tube = (pts) => { const c = new THREE.CatmullRomCurve3(pts); parts.push(new THREE.TubeGeometry(c, 24, thick, 6, false)); };
  const top = R.hAt(0, 0).y;
  if (R.r > 0.01) tube([new THREE.Vector3(-R.r - 0.02, top, 0), new THREE.Vector3(0, top, 0), new THREE.Vector3(R.r + 0.02, top, 0)]);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const pts = [];
    for (let k = 0; k <= 10; k++) {
      const f = k / 10, x = sx * (R.r + (R.hw - R.r) * f), z = sz * R.hd * f;
      pts.push(new THREE.Vector3(x, R.hAt(x * 0.999, z * 0.999).y + thick * 0.6, z));
    }
    tube(pts);
  }
  return parts;
}

function M() {
  const t = tileTex();
  return {
    tile: new THREE.MeshStandardMaterial({ map: t, roughness: 0.75, side: THREE.DoubleSide }),
    ridge: new THREE.MeshStandardMaterial({ color: 0xd9d4c8, roughness: 0.8 }),
    dan: new THREE.MeshStandardMaterial({ map: dancheongTex(), roughness: 0.8 }),
    col: new THREE.MeshStandardMaterial({ color: 0x8e2f24, roughness: 0.7 }),
    door: new THREE.MeshStandardMaterial({ map: doorTex(), roughness: 0.85 }),
    stone: new THREE.MeshStandardMaterial({ map: stoneTex(), roughness: 0.95 }),
    stoneLight: new THREE.MeshStandardMaterial({ color: 0xcfc8b8, roughness: 0.9 }),
    dark: new THREE.MeshBasicMaterial({ color: 0x0e0e10 }),
    plinth: new THREE.MeshStandardMaterial({ color: 0xbab3a3, roughness: 0.9 })
  };
}

// 목조 누각 한 층: 기둥 열 + 창호 벽 + 단청 띠 + 곡선 지붕
function pavilion(G, Mt, { w, d, h, y, bays = 5, roofW, roofD, roofH, walls = true, lift }) {
  const add = (geo, m, x, yy, z) => { const o = new THREE.Mesh(geo, m); o.position.set(x, yy, z); o.castShadow = o.receiveShadow = true; G.add(o); return o; };
  const colR = Math.min(w, d) * 0.035;
  const colG = new THREE.CylinderGeometry(colR, colR * 1.1, h, 8);
  const dBays = Math.max(1, Math.round(bays * d / w));
  for (let i = 0; i <= bays; i++) for (const sz of [-1, 1]) add(colG, Mt.col, -w / 2 + (i / bays) * w, y + h / 2, sz * d / 2);
  for (let j = 1; j < dBays; j++) for (const sx of [-1, 1]) add(colG, Mt.col, sx * w / 2, y + h / 2, -d / 2 + (j / dBays) * d);
  if (walls) {
    const wall = new THREE.BoxGeometry(w * 0.98, h * 0.82, d * 0.9);
    const uvs = wall.attributes.uv; for (let i = 0; i < uvs.count; i++) uvs.setX(i, uvs.getX(i) * bays);
    add(wall, Mt.door, 0, y + h * 0.41, 0);
  }
  // 단청 띠 (창방·공포)
  const band = new THREE.BoxGeometry(w + colR * 4, h * 0.22, d + colR * 4);
  const bu = band.attributes.uv; for (let i = 0; i < bu.count; i++) bu.setX(i, bu.getX(i) * bays * 0.6);
  add(band, Mt.dan, 0, y + h + h * 0.11, 0);
  const R = curvedRoof(roofW, roofD, roofH, { lift });
  add(R.geo, Mt.tile, 0, y + h * 1.2, 0);
  for (const p of ridgeLines(R, roofH * 0.05)) add(p, Mt.ridge, 0, y + h * 1.2, 0);
  return y + h * 1.2;
}

// 숭례문: 화강암 석축 + 홍예문(아치 문) + 양옆 성벽 + 2층 우진각 누각
function namdaemun(G, k) {
  const Mt = M(), W = k.w, D = k.d;
  const add = (geo, m, x, y, z) => { const o = new THREE.Mesh(geo, m); o.position.set(x, y, z); o.castShadow = o.receiveShadow = true; G.add(o); return o; };
  const bw = W * 0.62, bd = D * 0.62, bh = 0.85;
  // 석축 (윗면이 살짝 좁은 사다리꼴)
  const base = new THREE.CylinderGeometry(1, 1, 1, 4, 1); base.rotateY(Math.PI / 4);
  const pb = base.attributes.position;
  for (let i = 0; i < pb.count; i++) { const top = pb.getY(i) > 0, s = top ? 0.94 : 1; pb.setXYZ(i, Math.sign(pb.getX(i)) * bw / 2 * s, pb.getY(i) * bh + bh / 2, Math.sign(pb.getZ(i)) * bd / 2 * s); }
  base.computeVertexNormals();
  const bu = base.attributes.uv; for (let i = 0; i < bu.count; i++) bu.setXY(i, bu.getX(i) * 3, bu.getY(i) * 1);
  add(base, Mt.stone, 0, 0, 0);
  // 양옆 성벽 (복원된 짧은 성곽)
  for (const s of [-1, 1]) {
    const wl = new THREE.BoxGeometry((W - bw) / 2, bh * 0.75, bd * 0.55);
    const u = wl.attributes.uv; for (let i = 0; i < u.count; i++) u.setX(i, u.getX(i) * 1.2);
    add(wl, Mt.stone, s * (bw / 2 + (W - bw) / 4), bh * 0.375, 0);
    for (let i = 0; i < 3; i++) add(new THREE.BoxGeometry(0.14, 0.14, bd * 0.55), Mt.stoneLight, s * (bw / 2 + 0.15 + i * 0.27), bh * 0.82, 0);
  }
  // 홍예문 (앞뒤로 뚫린 아치 통로)
  const ar = bh * 0.34;
  const arch = new THREE.Shape(); arch.moveTo(-ar, 0); arch.lineTo(-ar, bh * 0.36); arch.absarc(0, bh * 0.36, ar, Math.PI, 0, true); arch.lineTo(ar, 0); arch.closePath();
  const ag = new THREE.ExtrudeGeometry(arch, { depth: bd * 1.02, bevelEnabled: false }); ag.translate(0, 0, -bd * 0.51);
  add(ag, Mt.dark, 0, 0.001, 0);
  const rim = new THREE.TorusGeometry(ar * 1.12, ar * 0.1, 6, 16, Math.PI);
  for (const s of [-1, 1]) add(rim, Mt.stoneLight, 0, bh * 0.36, s * bd * 0.505);
  // 1층 누각
  const y1 = pavilion(G, Mt, { w: bw * 0.84, d: bd * 0.62, h: 0.42, y: bh, bays: 5, roofW: W * 0.9, roofD: D * 0.86, roofH: 0.38, walls: false, lift: 0.12 });
  // 2층 누각
  pavilion(G, Mt, { w: bw * 0.7, d: bd * 0.46, h: 0.34, y: y1 + 0.38 * 0.5, bays: 5, roofW: W * 0.72, roofD: D * 0.66, roofH: 0.48, walls: true, lift: 0.14 });
  // 1층 안쪽 마루 바닥
  add(new THREE.BoxGeometry(bw * 0.86, 0.04, bd * 0.64), Mt.plinth, 0, bh + 0.02, 0);
}

// 경복궁 근정전: 2단 월대(돌난간) + 중층 팔작 전각
function gyeongbok(G, k) {
  const Mt = M(), W = k.w, D = k.d;
  const add = (geo, m, x, y, z) => { const o = new THREE.Mesh(geo, m); o.position.set(x, y, z); o.castShadow = o.receiveShadow = true; G.add(o); return o; };
  let y = 0;
  for (const [sw, sd, sh] of [[W * 0.92, D * 0.9, 0.22], [W * 0.76, D * 0.72, 0.22]]) {
    const b = new THREE.BoxGeometry(sw, sh, sd); const u = b.attributes.uv; for (let i = 0; i < u.count; i++) u.setX(i, u.getX(i) * 4);
    add(b, Mt.stone, 0, y + sh / 2, 0);
    // 돌난간 기둥
    const n = 14;
    for (let i = 0; i <= n; i++) for (const s of [-1, 1]) add(new THREE.BoxGeometry(0.05, 0.12, 0.05), Mt.stoneLight, -sw / 2 + (i / n) * sw, y + sh + 0.06, s * (sd / 2 - 0.03));
    for (const s of [-1, 1]) add(new THREE.BoxGeometry(sw, 0.025, 0.03), Mt.stoneLight, 0, y + sh + 0.1, s * (sd / 2 - 0.03));
    y += sh;
  }
  // 앞 계단 (답도)
  add(new THREE.BoxGeometry(0.5, 0.44, 0.5), Mt.stoneLight, 0, 0.22, D * 0.42);
  const y1 = pavilion(G, Mt, { w: W * 0.6, d: D * 0.42, h: 0.62, y, bays: 5, roofW: W * 0.82, roofD: D * 0.66, roofH: 0.32, walls: true, lift: 0.1 });
  pavilion(G, Mt, { w: W * 0.48, d: D * 0.3, h: 0.32, y: y1 + 0.32 * 0.5, bays: 5, roofW: W * 0.68, roofD: D * 0.52, roofH: 0.52, walls: true, lift: 0.12 });
}

// ---------- 공통: 창문 벽, 나무, 금속 패널 ----------
function windowTex(key, o) {
  return canvasTex('win' + key, 256, 256, (g, w, h) => {
    const rnd = makeRng(key);
    g.fillStyle = o.wall; g.fillRect(0, 0, w, h);
    const cw = w / o.cols, rh = h / o.rows;
    for (let r = 0; r < o.rows; r++) for (let c = 0; c < o.cols; c++) {
      const x = c * cw + cw * o.mx, y = r * rh + rh * o.my, ww = cw * (1 - 2 * o.mx), hh = rh * (1 - 2 * o.my);
      const lit = rnd() < (o.lit || 0);
      g.fillStyle = lit ? '#e8d9a8' : o.glass;
      if (o.arch) { g.beginPath(); g.moveTo(x, y + hh); g.lineTo(x, y + ww / 2); g.arc(x + ww / 2, y + ww / 2, ww / 2, Math.PI, 0); g.lineTo(x + ww, y + hh); g.closePath(); g.fill(); }
      else g.fillRect(x, y, ww, hh);
      if (o.frame) { g.strokeStyle = o.frame; g.lineWidth = 2; g.strokeRect(x, y, ww, hh); }
      g.fillStyle = 'rgba(255,255,255,0.08)'; g.fillRect(x, y, ww * 0.4, hh);
    }
    if (o.band) { g.fillStyle = o.band; for (let r = 0; r <= o.rows; r++) g.fillRect(0, r * rh - 2, w, 4); }
  });
}
function panelTex() {
  return canvasTex('ddp', 256, 256, (g, w, h) => {
    const rnd = makeRng('ddp');
    g.fillStyle = '#5d6166'; g.fillRect(0, 0, w, h);
    const n = 12, c = w / n;
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
      const l = 168 + rnd() * 50; g.fillStyle = `rgb(${l},${l + 2},${l + 6})`;
      g.fillRect(i * c + 1, j * c + 1, c - 2, c - 2);
      if (rnd() < 0.25) { g.fillStyle = 'rgba(40,44,50,0.35)'; for (let k = 0; k < 9; k++) g.fillRect(i * c + 3 + (k % 3) * (c / 3), j * c + 3 + Math.floor(k / 3) * (c / 3), 2, 2); }
    }
  });
}
function trees(G, pts, s = 1) {
  const n = pts.length; if (!n) return;
  const crown = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.16 * s, 1), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1 }), n);
  const trunk = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.025 * s, 0.035 * s, 0.18 * s, 5), new THREE.MeshStandardMaterial({ color: 0x5a4632, roughness: 1 }), n);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), c = new THREE.Color(), rnd = makeRng('trees' + n);
  pts.forEach(([x, y, z], i) => {
    const k = 0.75 + rnd() * 0.6;
    m.compose(new THREE.Vector3(x, y + 0.2 * s * k, z), q, new THREE.Vector3(k, k * (0.9 + rnd() * 0.4), k)); crown.setMatrixAt(i, m);
    m.compose(new THREE.Vector3(x, y + 0.08 * s, z), q, new THREE.Vector3(1, 1, 1)); trunk.setMatrixAt(i, m);
    crown.setColorAt(i, c.setHSL(0.24 + rnd() * 0.06, 0.38 + rnd() * 0.15, 0.2 + rnd() * 0.1));
  });
  crown.castShadow = trunk.castShadow = true; crown.receiveShadow = true;
  G.add(crown, trunk);
}
const adder = (G) => (geo, m, x = 0, y = 0, z = 0) => { const o = new THREE.Mesh(geo, m); o.position.set(x, y, z); o.castShadow = o.receiveShadow = true; G.add(o); return o; };
const std = (c, o = {}) => new THREE.MeshStandardMaterial(Object.assign({ color: c, roughness: 0.85 }, o));
// 상자 UV를 크기에 맞게 늘려 창문이 일정한 크기로 반복되게
function scaledBox(w, h, d, su, sv) {
  const g = new THREE.BoxGeometry(w, h, d), uv = g.attributes.uv, n = g.attributes.normal;
  for (let i = 0; i < uv.count; i++) { const side = Math.abs(n.getX(i)) > 0.5 ? d : w; uv.setXY(i, uv.getX(i) * side / su, uv.getY(i) * h / sv); }
  return g;
}

// 청와대: 청기와 팔작지붕 본관 + 좌우 별채 + 앞 대정원 잔디
function cheongwadae(G, k) {
  const Mt = M(), add = adder(G), W = k.w, D = k.d;
  const blue = new THREE.MeshStandardMaterial({ map: tileTex('blue'), roughness: 0.45, metalness: 0.1, side: THREE.DoubleSide });
  const wall = new THREE.MeshStandardMaterial({ map: windowTex('cwd', { wall: '#efeae0', glass: '#5d4a3a', cols: 2, rows: 1, mx: 0.18, my: 0.12, frame: '#8a2f25' }), roughness: 0.8 });
  const lawn = std(0x5e8a3c, { roughness: 1 });
  const lg = new THREE.PlaneGeometry(W * 0.92, D * 0.4); lg.rotateX(-Math.PI / 2); add(lg, lawn, 0, 0.065, D * 0.27);
  const zb = -D * 0.16;
  add(new THREE.BoxGeometry(W * 0.92, 0.12, D * 0.5), Mt.stone, 0, 0.06, zb);
  add(new THREE.BoxGeometry(0.5, 0.1, 0.25), Mt.stoneLight, 0, 0.05, zb + D * 0.27);
  const cols = new THREE.CylinderGeometry(0.035, 0.04, 0.5, 8);
  const hall = (x, w, d, h, rw, rd, rh) => {
    add(scaledBox(w, h, d, 0.28, h), wall, x, 0.12 + h / 2, zb);
    for (let i = 0; i <= 6; i++) add(cols, Mt.stoneLight, x - w / 2 + (i / 6) * w, 0.12 + h / 2, zb + d / 2 + 0.06).scale.y = h / 0.5;
    add(new THREE.BoxGeometry(w + 0.12, 0.07, d + 0.16), Mt.dan, x, 0.12 + h + 0.035, zb);
    const R = curvedRoof(rw, rd, rh, { lift: rh * 0.3 });
    add(R.geo, blue, x, 0.12 + h + 0.07, zb);
    for (const p of ridgeLines(R, rh * 0.05)) add(p, Mt.ridge, x, 0.12 + h + 0.07, zb);
  };
  hall(0, W * 0.42, D * 0.3, 0.5, W * 0.56, D * 0.46, 0.55);
  for (const s of [-1, 1]) hall(s * W * 0.33, W * 0.2, D * 0.24, 0.34, W * 0.27, D * 0.36, 0.3);
  trees(G, [[-W * 0.44, 0.06, D * 0.42], [W * 0.44, 0.06, D * 0.42], [-W * 0.44, 0.06, D * 0.12], [W * 0.44, 0.06, D * 0.12]], 1);
}

// N서울타워: 숲 덮인 남산 + 받침 건물 + 가늘어지는 기둥 + 여러 층 전망대 + 빨강·흰 안테나
function ntower(G, k) {
  const add = adder(G);
  const hill = new THREE.SphereGeometry(1, 28, 12, 0, Math.PI * 2, 0, Math.PI / 2);
  const hm = std(0x41612f, { roughness: 1 });
  const H = add(hill, hm); H.scale.set(1.5, 0.8, 1.3);
  const rnd = makeRng('namsan'), pts = [];
  for (let i = 0; i < 70; i++) {
    const a = rnd() * Math.PI * 2, r = 0.25 + Math.sqrt(rnd()) * 0.72;
    const x = Math.cos(a) * r * 1.5, z = Math.sin(a) * r * 1.3, y = 0.8 * Math.sqrt(Math.max(0, 1 - r * r)) - 0.05;
    pts.push([x, y, z]);
  }
  trees(G, pts, 0.9);
  const T = 0.8, white = std(0xcfcec9, { roughness: 0.7 });
  const glass = new THREE.MeshStandardMaterial({ map: windowTex('ntg', { wall: '#2b3540', glass: '#3e5263', cols: 16, rows: 2, mx: 0.06, my: 0.12, lit: 0.25 }), roughness: 0.15, metalness: 0.5 });
  add(new THREE.CylinderGeometry(0.34, 0.4, 0.22, 20), std(0xc9c8c2), 0, T + 0.11);
  add(new THREE.CylinderGeometry(0.1, 0.15, 2.5, 16), white, 0, T + 0.22 + 1.25);
  let y = T + 2.72;
  for (const [r0, r1, h, m] of [[0.12, 0.3, 0.12, white], [0.33, 0.33, 0.2, glass], [0.34, 0.3, 0.07, white], [0.29, 0.29, 0.12, glass], [0.3, 0.2, 0.1, white], [0.2, 0.13, 0.1, white]]) {
    add(new THREE.CylinderGeometry(r1, r0, h, 24), m, 0, y + h / 2); y += h;
  }
  const red = std(0xc8322a, { roughness: 0.6 });
  for (let i = 0; i < 5; i++) add(new THREE.CylinderGeometry(0.05 - i * 0.006, 0.055 - i * 0.006, 0.2, 8), i % 2 ? white : red, 0, y + 0.1 + i * 0.2);
  add(new THREE.SphereGeometry(0.05, 8, 6), new THREE.MeshBasicMaterial({ color: 0xff3a2e }), 0, y + 1.05);
}

// 이순신 장군상: 화강암 기단 + 칼을 든 갑옷 입은 청동상 + 분수 + 앞의 거북선
function yisunsin(G, k) {
  const Mt = M(), add = adder(G);
  const bronze = std(0x66765a, { metalness: 0.55, roughness: 0.45 }), gran = std(0xb7b1a5, { roughness: 0.8 });
  const water = std(0x3d6e8a, { roughness: 0.05, metalness: 0.2 });
  add(new THREE.CylinderGeometry(1.0, 1.02, 0.12, 40), gran, 0, 0.06);
  add(new THREE.CylinderGeometry(0.92, 0.92, 0.02, 40), water, 0, 0.12);
  const jet = new THREE.MeshBasicMaterial({ color: 0xeaf6ff, transparent: true, opacity: 0.55 });
  for (let i = 0; i < 16; i++) { const a = i / 16 * Math.PI * 2; add(new THREE.CylinderGeometry(0.008, 0.02, 0.3, 4), jet, Math.cos(a) * 0.78, 0.27, Math.sin(a) * 0.78).castShadow = false; }
  add(new THREE.BoxGeometry(0.78, 0.12, 0.78), gran, 0, 0.18);
  add(new THREE.BoxGeometry(0.6, 0.86, 0.6), Mt.stone, 0, 0.67);
  add(new THREE.BoxGeometry(0.68, 0.06, 0.68), gran, 0, 1.13);
  // 동상: 기단 위 그룹 (1.35배 크게)
  const SG = new THREE.Group(); SG.position.y = 1.16; SG.scale.setScalar(1.35); G.add(SG);
  const sa = adder(SG), y0 = 0, s = 1;
  sa(new THREE.CylinderGeometry(0.12 * s, 0.19 * s, 0.46 * s, 12), bronze, 0, y0 + 0.23);           // 갑옷 치마
  sa(new THREE.CylinderGeometry(0.13 * s, 0.12 * s, 0.32 * s, 12), bronze, 0, y0 + 0.62);           // 몸통
  sa(new THREE.SphereGeometry(1, 12, 6), bronze, 0, y0 + 0.78).scale.set(0.22, 0.07, 0.14);        // 어깨 갑옷
  for (const sx of [-1, 1]) { const a = sa(new THREE.CylinderGeometry(0.035, 0.04, 0.3, 8), bronze, sx * 0.13, y0 + 0.64, 0.07); a.rotation.x = -0.6; a.rotation.z = sx * 0.35; }
  sa(new THREE.SphereGeometry(0.075, 12, 10), bronze, 0, y0 + 0.9);                                 // 머리
  sa(new THREE.ConeGeometry(0.085, 0.14, 12), bronze, 0, y0 + 1.02);                               // 투구
  sa(new THREE.TorusGeometry(0.085, 0.015, 6, 16), bronze, 0, y0 + 0.95).rotation.x = Math.PI / 2;
  sa(new THREE.BoxGeometry(0.03, 0.62, 0.014), std(0x6b7564, { metalness: 0.8, roughness: 0.3 }), 0, y0 + 0.36, 0.17);   // 칼
  sa(new THREE.BoxGeometry(0.1, 0.025, 0.03), bronze, 0, y0 + 0.66, 0.17);
  // 거북선
  const tg = new THREE.Group(); tg.position.set(0, 0.13, 0.66); tg.rotation.y = Math.PI / 2; G.add(tg);
  const ta = adder(tg), wood = std(0x6a4a2e), roof = std(0x3a3f35, { roughness: 0.7 });
  ta(new THREE.BoxGeometry(0.5, 0.07, 0.16), wood, 0, 0.035);
  ta(new THREE.SphereGeometry(1, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2), roof, 0, 0.07).scale.set(0.24, 0.07, 0.08);
  ta(new THREE.SphereGeometry(0.035, 8, 6), std(0x8b2f25), 0.27, 0.08);
}

// 서울시청: 앞의 옛 청사(시계탑) + 뒤로 파도처럼 앞으로 휘어진 유리 신청사 + 서울광장 잔디
function cityhall(G, k) {
  const add = adder(G), W = k.w, D = k.d;
  const lawn = std(0x5e8a3c, { roughness: 1 });
  const og = new THREE.CircleGeometry(1, 40); og.rotateX(-Math.PI / 2); add(og, lawn, 0, 0.065, D * 0.44).scale.set(W * 0.34, 1, D * 0.05);
  const oldWall = new THREE.MeshStandardMaterial({ map: windowTex('cho', { wall: '#cbbd9d', glass: '#3a3f44', cols: 4, rows: 1, mx: 0.22, my: 0.18, arch: true, band: '#b1a283' }), roughness: 0.9 });
  const zo = D * 0.3, ho = 0.5;
  add(scaledBox(W * 0.56, ho, D * 0.2, 0.3, ho / 4), oldWall, 0, 0.06 + ho / 2, zo);
  add(new THREE.BoxGeometry(W * 0.58, 0.05, D * 0.22), std(0xb7a98a), 0, 0.06 + ho + 0.025, zo);
  add(scaledBox(0.42, 0.78, D * 0.24, 0.42 / 2, 0.78 / 4), oldWall, 0, 0.06 + 0.39, zo + 0.02);
  add(new THREE.BoxGeometry(0.46, 0.05, D * 0.26), std(0xb7a98a), 0, 0.06 + 0.8, zo + 0.02);
  const clock = canvasTex('clock', 64, 64, (g) => { g.fillStyle = '#f3efe4'; g.beginPath(); g.arc(32, 32, 30, 0, 7); g.fill(); g.strokeStyle = '#222'; g.lineWidth = 4; g.beginPath(); g.moveTo(32, 32); g.lineTo(32, 10); g.moveTo(32, 32); g.lineTo(46, 38); g.stroke(); });
  add(new THREE.CircleGeometry(0.11, 20), new THREE.MeshStandardMaterial({ map: clock }), 0, 0.68, zo + 0.02 + D * 0.12 + 0.002);
  // 신청사
  const glass = new THREE.MeshStandardMaterial({ map: windowTex('chn', { wall: '#7d93a3', glass: '#a9c7da', cols: 10, rows: 8, mx: 0.04, my: 0.06, lit: 0.08, frame: '#5a6a77' }), roughness: 0.12, metalness: 0.55, side: THREE.DoubleSide });
  // 신청사: 옆에서 본 모양(뒤는 곧게, 앞은 파도처럼 앞으로 휘어 넘어옴)을 가로로 밀어 만듦
  const hn = 1.3, wn = W * 0.86, zb = -D * 0.46, zf = D * 0.12;
  const sh = new THREE.Shape();
  sh.moveTo(zb, 0); sh.lineTo(zb, hn);
  sh.bezierCurveTo(zb + 0.25, hn + 0.3, zf + 0.25, hn * 1.05, zf, hn * 0.5);
  sh.lineTo(zf - 0.08, hn * 0.48);
  sh.bezierCurveTo(zf - 0.12, hn * 0.7, zf - 0.55, hn * 0.55, zf - 0.6, 0);
  sh.closePath();
  const wv = new THREE.ExtrudeGeometry(sh, { depth: wn, bevelEnabled: false, curveSegments: 20 });
  wv.rotateY(-Math.PI / 2); wv.translate(wn / 2, 0.06, 0);
  const uv = wv.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * 2.6, uv.getY(i) * 3.2);
  add(wv, glass);
}

// DDP: 은빛 알루미늄 패널로 덮인 유선형 건물 + 지붕 잔디 언덕
function ddp(G, k) {
  const add = adder(G), W = k.w, D = k.d;
  const ax = W * 0.45, bz = D * 0.4, n = 4, segA = 96, segR = 18;
  const pos = [], uv = [], idx = [];
  for (let j = 0; j <= segR; j++) {
    const r = j / segR;
    for (let i = 0; i <= segA; i++) {
      const a = i / segA * Math.PI * 2, c = Math.cos(a), s = Math.sin(a);
      const x = ax * Math.sign(c) * Math.pow(Math.abs(c), 2 / n) * r, z = bz * Math.sign(s) * Math.pow(Math.abs(s), 2 / n) * r;
      const Hc = 0.62 + 0.3 * Math.cos(a - 0.5) + 0.12 * Math.cos(2 * a + 1);
      const y = Hc * Math.pow(Math.max(0, 1 - Math.pow(r, 7)), 0.42);
      pos.push(x, y, z); uv.push(i / segA * 14, (1 - r) * 3 + y * 2);
    }
  }
  for (let j = 0; j < segR; j++) for (let i = 0; i < segA; i++) { const a = j * (segA + 1) + i, b = a + 1, c = a + segA + 1, d = c + 1; idx.push(a, b, c, b, d, c); }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx); g.computeVertexNormals();
  add(g, new THREE.MeshStandardMaterial({ map: panelTex(), metalness: 0.6, roughness: 0.52, side: THREE.DoubleSide }), 0, 0.06, 0);
  const hill = new THREE.SphereGeometry(1, 24, 8, 0, Math.PI * 2, 0, Math.PI / 2);
  add(hill, std(0x5c8a3a, { roughness: 1 }), -W * 0.36, 0.06, D * 0.28).scale.set(0.75, 0.22, 0.42);
  trees(G, [[-W * 0.47, 0.06, -D * 0.4], [W * 0.47, 0.06, D * 0.42], [W * 0.47, 0.06, -D * 0.42], [-W * 0.2, 0.06, D * 0.46]], 1);
}

export const DETAILED = { namdaemun, gyeongbok, cheongwadae, ntower, yisunsin, cityhall, ddp };

