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
function tileTex() {
  return canvasTex('giwa', 256, 256, (g, w, h) => {
    const rnd = makeRng('giwa');
    g.fillStyle = '#3d4146'; g.fillRect(0, 0, w, h);
    const n = 16, cw = w / n;
    for (let i = 0; i < n; i++) {
      const x = i * cw;
      const grd = g.createLinearGradient(x, 0, x + cw, 0);
      grd.addColorStop(0, '#24272b'); grd.addColorStop(0.35, '#4f545a'); grd.addColorStop(0.55, '#5a5f66'); grd.addColorStop(1, '#2a2d31');
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

export const DETAILED = { namdaemun, gyeongbok };
