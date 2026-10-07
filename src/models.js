// 임시 3D 모델 (상자·원기둥으로 조립). 나중에 실제 3D 모델 파일(.glb)로 교체.
// 무기·적 모델은 모두 +x 방향(오른쪽)을 바라보도록 만들고, 게임이 회전시킵니다.
import * as THREE from 'three';
import { facadeTex, roofTex } from './textures.js';

const matCache = {};
export function mat(color, o = {}) {
  const key = color + JSON.stringify(o);
  if (!matCache[key]) matCache[key] = new THREE.MeshStandardMaterial(Object.assign({ color, roughness: 0.78, metalness: 0.12 }, o));
  return matCache[key];
}
const geoCache = {};
const geo = (key, make) => geoCache[key] || (geoCache[key] = make());
const B = (w, h, d) => geo(`b${w},${h},${d}`, () => new THREE.BoxGeometry(w, h, d));
const C = (rt, rb, h, s = 12) => geo(`c${rt},${rb},${h},${s}`, () => new THREE.CylinderGeometry(rt, rb, h, s));
const S = (r, s = 12) => geo(`s${r},${s}`, () => new THREE.SphereGeometry(r, s, Math.max(6, s >> 1)));
const K = (r, l) => geo(`k${r},${l}`, () => new THREE.CapsuleGeometry(r, l, 4, 8));

function add(parent, g, m, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) {
  const o = new THREE.Mesh(g, typeof m === 'number' ? mat(m) : m);
  o.position.set(x, y, z); o.rotation.set(rx, ry, rz);
  o.castShadow = true; o.receiveShadow = true;
  parent.add(o);
  return o;
}
const barrel = (p, r, len, color, x, y, z = 0) => add(p, C(r, r, len, 10), color, x + len / 2, y, z, 0, 0, Math.PI / 2);

// ---------- 공통: 모래주머니 진지 ----------
function pad(root) {
  add(root, B(0.84, 0.06, 0.84), 0x8d887b, 0, 0.03, 0);
  for (let i = 0; i < 14; i++) {
    const a = i / 14 * Math.PI * 2;
    add(root, B(0.16, 0.09, 0.1), i % 2 ? 0xb9a57a : 0xa8956a, Math.cos(a) * 0.38, 0.1, Math.sin(a) * 0.38, 0, -a + Math.PI / 2, 0);
  }
}
function tracks(p, len, z, y = 0.1, h = 0.14) {
  add(p, B(len, h, 0.13), 0x2b2b29, 0, y, z);
  for (let i = 0; i < 4; i++) add(p, C(0.06, 0.06, 0.14, 8), 0x3b3b38, -len / 2 + 0.08 + i * (len - 0.16) / 3, y - 0.01, z, Math.PI / 2, 0, 0);
}
function soldier(p, x, z, uniform, helmet, ry = 0) {
  const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = ry; p.add(g);
  add(g, K(0.075, 0.16), uniform, 0, 0.2, 0);
  add(g, S(0.065), 0xd2a77d, 0.01, 0.39, 0);
  add(g, S(0.075), helmet, 0, 0.42, 0);
  return g;
}

// ---------- 아군 무기 ----------
const TAN = 0xc2a878, TAN2 = 0xa8916a, OLV = 0x5d6744, OLV2 = 0x4a5236, KGR = 0x5f6347, MET = 0x2c2d2b;

export function makeTower(type) {
  const root = new THREE.Group();
  pad(root);
  const yaw = new THREE.Group(); root.add(yaw);
  const pitch = new THREE.Group(); yaw.add(pitch);
  const muzzle = new THREE.Object3D();
  const spin = [];
  const glow = [];
  switch (type) {
    case 'browning': {
      for (let i = 0; i < 3; i++) { const a = i / 3 * Math.PI * 2; add(yaw, C(0.015, 0.015, 0.3, 6), MET, Math.cos(a) * 0.1, 0.17, Math.sin(a) * 0.1, Math.sin(a) * 0.4, 0, -Math.cos(a) * 0.4); }
      pitch.position.set(0, 0.32, 0);
      add(pitch, B(0.28, 0.1, 0.11), 0x3a3b36, 0, 0, 0);
      barrel(pitch, 0.022, 0.5, MET, 0.12, 0.01);
      add(pitch, B(0.1, 0.08, 0.08), OLV, -0.02, -0.02, 0.1);
      add(pitch, B(0.06, 0.08, 0.08), MET, -0.18, 0.0, 0);
      muzzle.position.set(0.62, 0.01, 0);
      soldier(yaw, -0.28, 0, TAN2, 0x8a7a55);
      break;
    }
    case 'm777': {
      for (const [ry, len] of [[2.7, 0.55], [-2.7, 0.55], [2.2, 0.35], [-2.2, 0.35]]) add(yaw, B(len, 0.05, 0.06), TAN, Math.cos(ry) * len / 2, 0.1, -Math.sin(ry) * len / 2, 0, ry, 0);
      add(yaw, B(0.34, 0.12, 0.3), TAN, 0, 0.18, 0);
      add(yaw, C(0.1, 0.1, 0.05, 12), MET, 0, 0.12, 0.2, Math.PI / 2, 0, 0);
      add(yaw, C(0.1, 0.1, 0.05, 12), MET, 0, 0.12, -0.2, Math.PI / 2, 0, 0);
      pitch.position.set(0, 0.3, 0); pitch.rotation.z = 0.35;
      add(pitch, B(0.42, 0.1, 0.14), TAN2, 0, 0, 0);
      barrel(pitch, 0.04, 0.95, 0xb19a70, 0.1, 0.02);
      add(pitch, B(0.08, 0.07, 0.1), MET, 1.06, 0.02, 0);
      muzzle.position.set(1.1, 0.02, 0);
      break;
    }
    case 'gepard': {
      const fl = 0x55603f;
      tracks(yaw, 0.74, 0.24); tracks(yaw, 0.74, -0.24);
      add(yaw, B(0.74, 0.18, 0.4), fl, 0, 0.22, 0);
      pitch.position.set(0, 0.42, 0);
      add(pitch, B(0.38, 0.22, 0.36), 0x606b48, 0, 0, 0);
      barrel(pitch, 0.025, 0.62, MET, 0.15, 0.02, 0.22);
      barrel(pitch, 0.025, 0.62, MET, 0.15, 0.02, -0.22);
      add(pitch, B(0.1, 0.12, 0.08), fl, 0.12, 0.02, 0.22); add(pitch, B(0.1, 0.12, 0.08), fl, 0.12, 0.02, -0.22);
      const dish = add(pitch, C(0.13, 0.13, 0.025, 14), 0xd0d4c6, -0.16, 0.22, 0, 0, 0, Math.PI / 2 - 0.2); spin.push([dish, 'y', 3]);
      muzzle.position.set(0.8, 0.02, 0);
      break;
    }
    case 'jammer': {
      add(yaw, B(0.6, 0.08, 0.36), MET, 0, 0.12, 0);
      for (const x of [-0.2, 0.18]) for (const z of [-0.17, 0.17]) add(yaw, C(0.07, 0.07, 0.06, 10), 0x1f1f1f, x, 0.08, z, Math.PI / 2, 0, 0);
      add(yaw, B(0.18, 0.2, 0.34), TAN, 0.22, 0.26, 0);
      add(yaw, B(0.06, 0.08, 0.3), 0x2b3a44, 0.31, 0.3, 0);
      add(yaw, B(0.36, 0.26, 0.36), TAN2, -0.08, 0.29, 0);
      add(yaw, C(0.02, 0.025, 0.5, 6), MET, -0.08, 0.66, 0);
      const d = add(yaw, C(0.16, 0.05, 0.05, 16), 0xe7e9e2, -0.08, 0.9, 0, 0, 0, 0.5); spin.push([d, 'y', 1.2]);
      const ring = add(root, geo('ring', () => new THREE.TorusGeometry(0.46, 0.02, 6, 32)), mat(0x6fd3ff, { emissive: 0x3fb0ff, emissiveIntensity: 1.4 }), 0, 0.08, 0, Math.PI / 2, 0, 0);
      ring.castShadow = false; glow.push(ring);
      muzzle.position.set(-0.08, 0.9, 0);
      break;
    }
    case 'javelin': {
      soldier(yaw, -0.05, 0.12, TAN2, 0x8a7a55);
      soldier(yaw, -0.2, -0.16, TAN2, 0x8a7a55, 0.4);
      pitch.position.set(-0.05, 0.36, 0.12); pitch.rotation.z = 0.12;
      add(pitch, C(0.05, 0.05, 0.55, 10), 0x6d6a50, 0.05, 0, 0, 0, 0, Math.PI / 2);
      add(pitch, B(0.12, 0.1, 0.12), 0x4a4a3c, -0.1, 0.06, 0.06);
      muzzle.position.set(0.34, 0, 0);
      add(yaw, B(0.22, 0.12, 0.14), OLV2, -0.3, 0.1, 0.14);
      break;
    }
    case 'k9': {
      tracks(yaw, 0.86, 0.25); tracks(yaw, 0.86, -0.25);
      add(yaw, B(0.86, 0.18, 0.42), KGR, 0, 0.22, 0);
      pitch.position.set(-0.04, 0.42, 0); pitch.rotation.z = 0.12;
      add(pitch, B(0.46, 0.2, 0.4), 0x6b6e4e, 0, 0, 0);
      add(pitch, B(0.2, 0.06, 0.14), 0x575a3f, -0.1, 0.13, 0.08);
      barrel(pitch, 0.042, 0.9, 0x55573f, 0.2, 0);
      add(pitch, B(0.09, 0.08, 0.11), MET, 1.12, 0, 0);
      muzzle.position.set(1.16, 0, 0);
      break;
    }
    case 'flash': {
      for (let i = 0; i < 3; i++) { const a = i / 3 * Math.PI * 2 + 0.5; add(yaw, C(0.015, 0.015, 0.26, 6), MET, Math.cos(a) * 0.09, 0.15, Math.sin(a) * 0.09, Math.sin(a) * 0.4, 0, -Math.cos(a) * 0.4); }
      pitch.position.set(0, 0.32, 0); pitch.rotation.z = 0.1;
      add(pitch, B(0.42, 0.18, 0.18), OLV, 0.06, 0, 0);
      for (const [y, z] of [[0.045, 0.045], [0.045, -0.045], [-0.045, 0.045], [-0.045, -0.045]]) add(pitch, C(0.035, 0.035, 0.02, 10), 0x1a1a1a, 0.27, y, z, 0, 0, Math.PI / 2);
      add(pitch, B(0.42, 0.03, 0.19), 0xd9772a, 0.06, 0.095, 0);
      muzzle.position.set(0.3, 0, 0);
      soldier(yaw, -0.28, 0.08, TAN2, 0x8a7a55);
      break;
    }
    case 'himars': {
      add(yaw, B(0.96, 0.1, 0.38), MET, 0, 0.16, 0);
      for (const x of [-0.3, -0.06, 0.32]) for (const z of [-0.19, 0.19]) add(yaw, C(0.08, 0.08, 0.07, 12), 0x1f1f1f, x, 0.09, z, Math.PI / 2, 0, 0);
      add(yaw, B(0.24, 0.24, 0.38), TAN, 0.34, 0.33, 0);
      add(yaw, B(0.04, 0.1, 0.32), 0x2b3a44, 0.465, 0.38, 0);
      pitch.position.set(-0.14, 0.3, 0); pitch.rotation.z = 0.32;
      add(pitch, B(0.6, 0.24, 0.36), TAN2, 0, 0.12, 0);
      for (let r = 0; r < 2; r++) for (let c = 0; c < 3; c++) add(pitch, C(0.04, 0.04, 0.02, 10), 0x1d1d1b, 0.305, 0.06 + r * 0.12, -0.11 + c * 0.11, 0, 0, Math.PI / 2);
      muzzle.position.set(0.32, 0.12, 0);
      break;
    }
  }
  pitch.add(muzzle);
  return { root, yaw, pitch, muzzle, spin, glow };
}

// ---------- 적: 부카니스탄군 (짙은 회색 + 붉은 표식) ----------
const AG = 0x6b2226, AG2 = 0x2a2426, RED = 0xff3b30;
export function makeEnemy(type) {
  const root = new THREE.Group();
  const body = new THREE.Group(); root.add(body);
  const spin = [];
  let hpY = 0.7;
  switch (type) {
    case 'inf': {
      add(body, K(0.085, 0.18), AG, 0, 0.22, 0);
      add(body, S(0.07), 0xc79d77, 0.01, 0.43, 0);
      add(body, S(0.08), AG2, -0.005, 0.46, 0);
      add(body, B(0.1, 0.03, 0.18), RED, 0, 0.3, 0);
      add(body, B(0.34, 0.035, 0.035), 0x151515, 0.12, 0.28, 0.08);
      add(body, B(0.12, 0.14, 0.14), AG2, -0.1, 0.25, 0);
      hpY = 0.68; break;
    }
    case 'jeep': {
      for (const x of [-0.16, 0.17]) for (const z of [-0.15, 0.15]) add(body, C(0.08, 0.08, 0.06, 12), 0x161616, x, 0.08, z, Math.PI / 2, 0, 0);
      add(body, B(0.56, 0.14, 0.3), 0x7a2428, 0, 0.18, 0);
      add(body, B(0.24, 0.12, 0.28), 0x43473f, -0.04, 0.31, 0);
      add(body, B(0.03, 0.1, 0.26), 0x22313a, 0.09, 0.31, 0);
      add(body, C(0.04, 0.04, 0.08, 8), AG2, -0.06, 0.41, 0);
      barrel(body, 0.015, 0.28, 0x111111, -0.06, 0.45);
      add(body, B(0.02, 0.1, 0.12), RED, -0.28, 0.2, 0);
      hpY = 0.7; break;
    }
    case 'apc': {
      for (let i = 0; i < 4; i++) for (const z of [-0.17, 0.17]) add(body, C(0.075, 0.075, 0.06, 10), 0x151515, -0.27 + i * 0.18, 0.08, z, Math.PI / 2, 0, 0);
      add(body, B(0.74, 0.16, 0.32), 0x7a2428, 0, 0.2, 0);
      add(body, B(0.2, 0.1, 0.32), 0x8a2a2e, 0.3, 0.24, 0, 0, 0, -0.35);
      add(body, B(0.24, 0.1, 0.22), 0x2a2426, -0.05, 0.33, 0);
      barrel(body, 0.02, 0.32, 0x111111, 0.02, 0.35);
      add(body, B(0.03, 0.05, 0.3), RED, -0.37, 0.24, 0);
      add(body, B(0.1, 0.02, 0.1), RED, -0.2, 0.29, 0);
      hpY = 0.72; break;
    }
    case 'tank': case 'boss': {
      const boss = type === 'boss';
      const g = boss ? body.add(new THREE.Group()) && body.children[0] : body;
      if (boss) g.scale.setScalar(1.55);
      tracks(g, 0.84, 0.22, 0.09, 0.16); tracks(g, 0.84, -0.22, 0.09, 0.16);
      add(g, B(0.8, 0.14, 0.36), boss ? 0x2a2224 : 0x7a2428, 0, 0.21, 0);
      add(g, B(0.38, 0.14, 0.3), boss ? 0x3a2a2c : 0x5e1c20, -0.04, 0.35, 0);
      barrel(g, 0.03, 0.55, 0x23251f, 0.14, 0.36, boss ? 0.07 : 0);
      if (boss) barrel(g, 0.03, 0.55, 0x23251f, 0.14, 0.36, -0.07);
      add(g, B(0.04, 0.1, 0.32), RED, -0.36, 0.22, 0);
      add(g, B(0.1, 0.03, 0.1), RED, -0.04, 0.43, 0);
      if (boss) { add(g, C(0.05, 0.05, 0.1, 8), 0x8e1c22, -0.15, 0.48, 0.08); add(g, B(0.18, 0.05, 0.38), 0x8e1c22, 0.28, 0.25, 0); }
      hpY = boss ? 1.05 : 0.72; break;
    }
    case 'drone': {
      body.position.y = 1.4;
      add(body, B(0.2, 0.07, 0.14), AG, 0, 0, 0);
      add(body, S(0.05), RED, 0.12, 0, 0);
      for (const [x, z] of [[0.13, 0.13], [0.13, -0.13], [-0.13, 0.13], [-0.13, -0.13]]) {
        add(body, B(0.2, 0.02, 0.02), AG2, x / 2, 0.02, z / 2, 0, Math.atan2(z, x) * -1, 0);
        const r = add(body, C(0.08, 0.08, 0.006, 12), mat(0xc8ccd0, { transparent: true, opacity: 0.45 }), x, 0.05, z); r.castShadow = false;
        spin.push([r, 'y', 30]);
      }
      hpY = 1.75; break;
    }
    case 'heli': {
      body.position.y = 1.9;
      add(body, K(0.13, 0.36), 0x5e1c20, 0.05, 0, 0, 0, 0, Math.PI / 2);
      add(body, S(0.11), 0x22313a, 0.27, 0.03, 0);
      add(body, C(0.035, 0.05, 0.5, 8), 0x3e4239, -0.42, 0.04, 0, 0, 0, Math.PI / 2);
      add(body, B(0.06, 0.16, 0.03), 0x3e4239, -0.66, 0.1, 0);
      add(body, B(0.14, 0.03, 0.46), 0x30332d, 0.02, -0.04, 0);
      add(body, B(0.08, 0.06, 0.05), RED, -0.2, 0.05, 0.13);
      const rot = new THREE.Group(); rot.position.set(0.04, 0.2, 0); body.add(rot);
      add(rot, B(1.15, 0.01, 0.05), 0x1c1c1c, 0, 0, 0); add(rot, B(0.05, 0.01, 1.15), 0x1c1c1c, 0, 0, 0);
      spin.push([rot, 'y', 22]);
      hpY = 2.3; break;
    }
  }
  return { root, body, spin, hpY };
}

// ---------- 사령부 · 진입문 ----------
export function makeBase() {
  const root = new THREE.Group();
  add(root, B(1.2, 0.08, 1.2), 0x8e8a7d, 0, 0.04, 0);
  for (let i = 0; i < 28; i++) {
    const t = i / 28 * 4, side = Math.floor(t), f = t - side;
    const p = [[-0.56 + f * 1.12, -0.56], [0.56, -0.56 + f * 1.12], [0.56 - f * 1.12, 0.56], [-0.56, 0.56 - f * 1.12]][side];
    add(root, B(0.16, 0.1, 0.1), 0xb39f74, p[0], 0.12, p[1], 0, side % 2 ? Math.PI / 2 : 0, 0);
  }
  const fac = new THREE.MeshStandardMaterial({ map: facadeTex(2), roughness: 0.85 });
  const bm = new THREE.Mesh(B(0.62, 0.5, 0.5), [fac, fac, mat(0x9b9b8c), mat(0x9b9b8c), fac, fac]);
  bm.position.set(-0.1, 0.33, -0.08); bm.castShadow = bm.receiveShadow = true; root.add(bm);
  add(root, B(0.66, 0.04, 0.54), 0x6c6f5a, -0.1, 0.6, -0.08);
  add(root, C(0.02, 0.02, 0.9, 6), 0xd0d0d0, 0.38, 0.5, 0.36);
  const flag = add(root, B(0.36, 0.22, 0.01), mat(0x2f6fd0, { side: THREE.DoubleSide }), 0.56, 0.82, 0.36); flag.castShadow = false;
  add(root, B(0.16, 0.03, 0.012), 0xffffff, 0.56, 0.82, 0.367);
  add(root, C(0.02, 0.02, 0.3, 6), 0x777777, -0.25, 0.75, -0.1);
  const dish = add(root, C(0.16, 0.04, 0.05, 16), 0xe5e7e2, -0.25, 0.92, -0.1, 0, 0, 0.6);
  add(root, B(0.36, 0.01, 0.36), 0x3d4730, 0.3, 0.085, -0.3);
  add(root, geo('hring', () => new THREE.TorusGeometry(0.13, 0.015, 4, 24)), 0xffffff, 0.3, 0.095, -0.3, Math.PI / 2, 0, 0);
  return { root, spin: [[dish, 'y', 0.8]], flag };
}

export function makeGate(open = true) {
  const root = new THREE.Group();
  for (const z of [-0.42, 0.42]) {
    add(root, B(0.22, 0.8, 0.18), 0x77736a, 0, 0.4, z);
    const ban = add(root, B(0.02, 0.4, 0.14), mat(0xa31f26, { side: THREE.DoubleSide }), 0.12, 0.5, z); ban.castShadow = false;
    add(root, B(0.022, 0.08, 0.08), 0x1a1a1a, 0.125, 0.55, z);
  }
  add(root, B(0.24, 0.14, 1.06), 0x5f5b53, 0, 0.86, 0);
  add(root, B(0.03, 0.06, 0.5), 0xa31f26, 0.13, 0.86, 0);
  const bar = add(root, B(0.05, 0.05, 0.84), 0xd8d0b8, 0.05, 0.28, 0);
  const glow = add(root, geo('gring', () => new THREE.TorusGeometry(0.4, 0.025, 6, 32)), mat(0xff4a4a, { emissive: 0xff2020, emissiveIntensity: 1.6 }), 0, 0.03, 0, Math.PI / 2, 0, 0);
  glow.castShadow = false;
  const g = { root, bar, glow };
  setGateOpen(g, open);
  return g;
}
export function setGateOpen(g, open) {
  g.bar.visible = !open;
  g.glow.visible = open;
}

// ---------- 장식: 건물, 야자수, 잔해, 보급품 ----------
const facadeMats = {};
function facadeMat(v, floors) {
  const k = v + '_' + floors;
  if (!facadeMats[k]) {
    const t = facadeTex(v).clone(); t.needsUpdate = true;
    t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(1, floors / 4);
    facadeMats[k] = new THREE.MeshStandardMaterial({ map: t, roughness: 0.9 });
  }
  return facadeMats[k];
}
const roofMats = {};
const roofMat = (v) => roofMats[v] || (roofMats[v] = new THREE.MeshStandardMaterial({ map: roofTex(v), roughness: 0.95 }));

export function makeBuilding(rnd) {
  const root = new THREE.Group();
  const floors = rnd() < 0.12 ? rnd.int(4, 5) : rnd.int(1, 3);
  const h = floors * 0.32 + 0.1;
  const w = rnd.range(0.7, 0.92), d = rnd.range(0.7, 0.92);
  const v = rnd.int(0, 4), fm = facadeMat(v, floors), rm = roofMat(v % 3);
  const m = new THREE.Mesh(geo(`bld${w.toFixed(2)},${h},${d.toFixed(2)}`, () => new THREE.BoxGeometry(w, h, d)), [fm, fm, rm, rm, fm, fm]);
  m.position.y = h / 2; m.castShadow = m.receiveShadow = true; root.add(m);
  if (rnd() < 0.55) add(root, C(0.07, 0.07, 0.12, 10), 0x5f7f96, rnd.range(-0.2, 0.2), h + 0.06, rnd.range(-0.2, 0.2));
  if (rnd() < 0.6) add(root, B(0.12, 0.08, 0.1), 0x9a9584, rnd.range(-0.2, 0.2), h + 0.04, rnd.range(-0.2, 0.2));
  if (rnd() < 0.3) add(root, B(w * 0.5, 0.2, d * 0.5), 0xd5c8a6, rnd.range(-0.1, 0.1), h + 0.1, rnd.range(-0.1, 0.1));
  if (rnd() < 0.25) for (let i = 0; i < 5; i++) add(root, B(rnd.range(0.05, 0.14), rnd.range(0.03, 0.08), rnd.range(0.05, 0.12)), 0xa89878, rnd.range(-0.45, 0.45), 0.03, rnd.range(-0.45, 0.45), 0, rnd() * 3, 0);
  root.rotation.y = rnd.int(0, 3) * Math.PI / 2;
  return root;
}

export function makePalm(rnd) {
  const root = new THREE.Group();
  const lean = rnd.range(-0.25, 0.25), h = rnd.range(0.7, 1.05);
  const trunk = add(root, C(0.03, 0.05, h, 7), 0x8a6b45, Math.sin(lean) * h / 2, h / 2, 0, 0, 0, -lean);
  const top = new THREE.Group(); top.position.set(Math.sin(lean) * h, h, 0); root.add(top);
  for (let i = 0; i < 7; i++) {
    const a = i / 7 * Math.PI * 2;
    const leaf = add(top, B(0.38, 0.015, 0.09), 0x4f7a32 + (i % 2) * 0x050a03, Math.cos(a) * 0.17, -0.04, Math.sin(a) * 0.17, 0, -a, -0.45);
    leaf.castShadow = true;
  }
  add(top, S(0.05, 8), 0x6b4f2c, 0, 0, 0);
  root.rotation.y = rnd() * Math.PI * 2;
  return root;
}

export function makeRubble(rnd) {
  const root = new THREE.Group();
  for (let i = 0; i < 9; i++) add(root, B(rnd.range(0.06, 0.22), rnd.range(0.04, 0.16), rnd.range(0.06, 0.2)), rnd.pick([0xa89878, 0x8f8470, 0xc2b494, 0x6f6555]), rnd.range(-0.35, 0.35), 0.05, rnd.range(-0.35, 0.35), rnd() * 0.5, rnd() * 3, rnd() * 0.5);
  if (rnd() < 0.6) add(root, B(0.5, 0.36, 0.08), 0xc9bb9a, rnd.range(-0.2, 0.2), 0.18, rnd.range(-0.2, 0.2), 0, rnd() * 3, 0.1);
  return root;
}

export function makeCrate() {
  const root = new THREE.Group();
  add(root, B(0.34, 0.2, 0.24), 0x5e6b3a, 0, 0.1, 0);
  add(root, B(0.35, 0.04, 0.25), 0x45502a, 0, 0.21, 0);
  add(root, B(0.2, 0.06, 0.005), 0xf2c14e, 0, 0.12, 0.123);
  const glow = add(root, geo('cring', () => new THREE.TorusGeometry(0.3, 0.02, 6, 24)), mat(0xffd36a, { emissive: 0xffb020, emissiveIntensity: 1.5 }), 0, 0.02, 0, Math.PI / 2, 0, 0);
  glow.castShadow = false;
  return root;
}

export function makeFloatingRock(rnd) {
  const root = new THREE.Group();
  const r = rnd.range(0.5, 1.4);
  add(root, geo(`fr${r.toFixed(1)}`, () => new THREE.ConeGeometry(r, r * 1.8, 7)), 0x6f6250, 0, -r * 0.9, 0, Math.PI, 0, 0);
  add(root, C(r, r, 0.18, 7), 0xcdb68a, 0, 0.09, 0);
  if (rnd() < 0.7) { const p = makePalm(rnd); p.position.y = 0.18; root.add(p); }
  return root;
}


// ================= v4 추가: 위장 무늬 무기, 모델 압축·재사용 =================
import { camoTex } from './textures.js';
let camoM = null;
export const camo = () => camoM || (camoM = new THREE.MeshStandardMaterial({ map: camoTex(), roughness: 0.85, metalness: 0.1 }));

function wheels(p, xs, z, r = 0.075, y = 0.08) { for (const x of xs) for (const zz of [-z, z]) add(p, C(r, r, 0.07, 12), 0x1b1b1b, x, y, zz, Math.PI / 2, 0, 0); }

export function makeTowerV4(type) {
  const hd = makeTowerHD(type);
  if (hd) return hd;
  if (type === 'ewcar') type = 'jammer';
  if (!['patriot', 'type16', 'irondome', 'hyunmoo'].includes(type)) {
    const m = makeTower(type);
    if (['k9', 'himars', 'jammer'].includes(type)) m.root.traverse((o) => { if (o.isMesh && !Array.isArray(o.material) && [0x5f6347, 0x6b6e4e, 0x575a3f, 0xc2a878, 0xa8916a, 0x5d6744].includes(o.material.color.getHex())) o.material = camo(); });
    return m;
  }
  const root = new THREE.Group();
  pad(root);
  const yaw = new THREE.Group(); root.add(yaw);
  const pitch = new THREE.Group(); yaw.add(pitch);
  const muzzle = new THREE.Object3D();
  const spin = [], glow = [];
  const C1 = camo();
  if (type === 'patriot') {
    add(yaw, B(1.0, 0.1, 0.4), MET, 0, 0.17, 0);
    wheels(yaw, [-0.36, -0.18, 0.3], 0.19, 0.08, 0.09);
    add(yaw, B(0.24, 0.24, 0.4), C1, 0.38, 0.34, 0);
    add(yaw, B(0.04, 0.1, 0.34), 0x2b3a44, 0.5, 0.4, 0);
    pitch.position.set(-0.12, 0.3, 0); pitch.rotation.z = 0.55;
    for (const [y, z] of [[0.08, -0.1], [0.08, 0.1], [0.28, -0.1], [0.28, 0.1]]) add(pitch, B(0.62, 0.19, 0.19), C1, 0.05, y, z);
    for (const [y, z] of [[0.08, -0.1], [0.08, 0.1], [0.28, -0.1], [0.28, 0.1]]) add(pitch, B(0.02, 0.15, 0.15), 0x2a2a28, 0.365, y, z);
    muzzle.position.set(0.4, 0.18, 0);
  } else if (type === 'type16') {
    add(yaw, B(0.92, 0.2, 0.42), C1, 0, 0.24, 0);
    add(yaw, B(0.22, 0.12, 0.42), C1, 0.4, 0.26, 0, 0, 0, -0.4);
    wheels(yaw, [-0.33, -0.11, 0.11, 0.33], 0.22, 0.09, 0.1);
    pitch.position.set(-0.06, 0.42, 0);
    add(pitch, B(0.42, 0.16, 0.36), C1, 0, 0, 0);
    add(pitch, B(0.14, 0.06, 0.14), 0x3d4429, -0.1, 0.11, 0.08);
    barrel(pitch, 0.032, 0.8, 0x3a3f2a, 0.18, 0.01);
    add(pitch, B(0.07, 0.06, 0.08), MET, 1.0, 0.01, 0);
    muzzle.position.set(1.02, 0.01, 0);
  } else if (type === 'hyunmoo') {
    // 현무-3 순항미사일 발사차량: 8륜 트럭 + 큰 원통 발사관 4개
    add(yaw, B(1.2, 0.12, 0.44), MET, 0, 0.19, 0);
    wheels(yaw, [-0.44, -0.24, 0.24, 0.44], 0.21, 0.09, 0.1);
    add(yaw, B(0.26, 0.28, 0.44), C1, 0.47, 0.39, 0);
    add(yaw, B(0.04, 0.11, 0.38), 0x2b3a44, 0.6, 0.45, 0);
    add(yaw, B(0.12, 0.1, 0.5), MET, -0.55, 0.3, 0);
    pitch.position.set(-0.5, 0.33, 0); pitch.rotation.z = 0.9;
    for (const [y, z] of [[0.1, -0.12], [0.1, 0.12], [0.33, -0.12], [0.33, 0.12]]) {
      add(pitch, C(0.11, 0.11, 0.95, 14), C1, 0.47, y, z, 0, 0, Math.PI / 2);
      add(pitch, C(0.095, 0.095, 0.02, 14), 0x1d1d1b, 0.95, y, z, 0, 0, Math.PI / 2);
    }
    add(pitch, B(0.9, 0.04, 0.5), MET, 0.45, -0.03, 0);
    muzzle.position.set(0.98, 0.22, 0);
  } else if (type === 'irondome') {
    add(yaw, B(0.7, 0.08, 0.5), MET, 0, 0.1, 0);
    wheels(yaw, [-0.2, 0.2], 0.26, 0.07, 0.07);
    pitch.position.set(0, 0.22, 0); pitch.rotation.z = 0.75;
    add(pitch, B(0.5, 0.42, 0.5), 0xbfc2b4, 0.0, 0.2, 0);
    for (let r = 0; r < 4; r++) for (let c = 0; c < 5; c++) add(pitch, C(0.035, 0.035, 0.02, 8), 0x2a2a28, 0.255, 0.04 + r * 0.1, -0.2 + c * 0.1, 0, 0, Math.PI / 2);
    muzzle.position.set(0.28, 0.2, 0);
    const radar = add(root, B(0.06, 0.3, 0.32), 0xd8dccf, -0.3, 0.4, 0.28);
    add(root, C(0.02, 0.02, 0.3, 6), MET, -0.3, 0.18, 0.28);
    spin.push([radar, 'y', 1.5]);
  }
  pitch.add(muzzle);
  return { root, yaw, pitch, muzzle, spin, glow };
}

// 같은 재질끼리 합쳐 그리기 횟수를 줄임 (stop 안쪽은 건드리지 않음)
// bake: 그림 없는 단색 재질은 색을 꼭짓점에 구워 넣고 "무광/금속" 공용 재질 2개로 합침 → 모델당 그리기 3~5번
const vcMatte = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.72, metalness: 0.15 });
const vcMetal = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.45, metalness: 0.6 });
function bakeable(m) {
  return m.isMeshStandardMaterial && !m.map && !m.transparent && !m.vertexColors && !m.onBeforeCompile.toString().includes('vOP') &&
    (m.emissiveIntensity === 0 || m.emissive.getHex() === 0) && (m.envMapIntensity ?? 1) <= 1.01;
}
export function compactNode(node, isStop, bake = false) {
  node.updateMatrixWorld(true);
  const inv = new THREE.Matrix4().copy(node.matrixWorld).invert();
  const groups = new Map(), victims = [];
  const walk = (o) => {
    for (const c of o.children) {
      if (isStop(c)) continue;
      if (c.isMesh && !c.isInstancedMesh && !c.isSkinnedMesh && !Array.isArray(c.material) && c.geometry.attributes.position) {
        const m = new THREE.Matrix4().multiplyMatrices(inv, c.matrixWorld);
        let mm = c.material, col = null;
        if (bake && bakeable(mm)) { col = mm.color; mm = mm.metalness > 0.4 ? vcMetal : vcMatte; }
        const key = mm.uuid + (c.geometry.index ? 'i' : 'n');
        if (!groups.has(key)) groups.set(key, { mat: mm, geos: [], shadow: false });
        const gg = c.geometry.clone().applyMatrix4(m);
        for (const n of Object.keys(gg.attributes)) if (!['position', 'normal', 'uv'].includes(n)) gg.deleteAttribute(n);
        if (!gg.attributes.uv) gg.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(gg.attributes.position.count * 2), 2));
        if (!gg.attributes.normal) gg.computeVertexNormals();
        if (mm === vcMatte || mm === vcMetal) {
          const n = gg.attributes.position.count, a = new Float32Array(n * 3);
          for (let i = 0; i < n; i++) { a[i * 3] = col.r; a[i * 3 + 1] = col.g; a[i * 3 + 2] = col.b; }
          gg.setAttribute('color', new THREE.BufferAttribute(a, 3));
        }
        const gr = groups.get(key);
        gr.geos.push(gg); gr.shadow = gr.shadow || c.castShadow;
        victims.push(c);
      }
      walk(c);
    }
  };
  walk(node);
  for (const v of victims) v.parent.remove(v);
  for (const { mat: mm, geos, shadow } of groups.values()) {
    const merged = mergeGeometries(geos, false);
    if (!merged) continue;
    const mesh = new THREE.Mesh(merged, mm);
    mesh.castShadow = shadow; mesh.receiveShadow = true;
    node.add(mesh);
  }
}
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { makeTowerHD, makeEnemyHD } from './units_hd.js';

const towerProto = {}, enemyProto = {};
function tagSpin(list) { for (const [o, ax, sp] of list) o.userData.spin = [ax, sp]; }
function collect(root) {
  const spin = [], glow = [];
  root.traverse((o) => { if (o.userData.spin) spin.push([o, o.userData.spin[0], o.userData.spin[1]]); if (o.userData.glow) glow.push(o); });
  return { spin, glow };
}

export function getTower(type) {
  if (!towerProto[type]) {
    const m = makeTowerV4(type);
    tagSpin(m.spin); m.glow.forEach((g) => (g.userData.glow = true));
    for (const [o] of m.spin) compactNode(o, () => false, true);
    m.yaw.name = 'yaw'; m.pitch.name = 'pitch'; m.muzzle.name = 'muzzle';
    const special = (o) => o.userData.spin || o.userData.glow || o.userData.keep;
    compactNode(m.pitch, special, true);
    compactNode(m.yaw, (o) => o === m.pitch || special(o), true);
    compactNode(m.root, (o) => o === m.yaw || special(o), true);
    m.root.traverse((o) => { o.castShadow = false; });   // 움직이는 유닛은 실시간 그림자 대신 바닥 그림자 얼룩
    towerProto[type] = m.root;
  }
  const root = towerProto[type].clone(true);
  const yaw = root.getObjectByName('yaw'), pitch = root.getObjectByName('pitch'), muzzle = root.getObjectByName('muzzle');
  return Object.assign({ root, yaw, pitch, muzzle }, collect(root));
}

export function getEnemy(type) {
  if (!enemyProto[type]) {
    const m = makeEnemyHD(type) || makeEnemy(type);
    tagSpin(m.spin);
    for (const [o] of m.spin) compactNode(o, () => false, true);
    m.body.name = 'body';
    compactNode(m.body, (o) => o.userData.spin || o.userData.keep, true);
    m.root.traverse((o) => { o.castShadow = false; });
    enemyProto[type] = { root: m.root, hpY: m.hpY };
  }
  const p = enemyProto[type];
  const root = p.root.clone(true);
  return Object.assign({ root, body: root.getObjectByName('body'), hpY: p.hpY }, collect(root));
}

// 유령 모델(설치 미리보기)
const ghostMat = new THREE.MeshBasicMaterial({ color: 0x6ff3ff, transparent: true, opacity: 0.45, depthWrite: false });
const ghostBad = new THREE.MeshBasicMaterial({ color: 0xff5a5f, transparent: true, opacity: 0.45, depthWrite: false });
export function getGhost(type) {
  const m = getTower(type);
  m.root.traverse((o) => { if (o.userData.keep) o.visible = false; else if (o.isMesh) { o.material = ghostMat; o.castShadow = false; } });
  m.setOk = (ok) => m.root.traverse((o) => { if (o.isMesh && !o.userData.keep) o.material = ok ? ghostMat : ghostBad; });
  return m;
}
