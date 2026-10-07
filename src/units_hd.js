// 정밀 무기·적 3D 모델 (코드로 만듦, v0.14)
// - 실제 장비 비율·실루엣: 경사 장갑, 궤도 고리, 도로바퀴, 포구 제퇴기, 해치, 연막탄, 안테나, 유리창
// - 위장 무늬는 "삼면 투영"(부품 위치 기준)으로 칠해 부품끼리 무늬가 이어짐
// - 모든 모델은 +x 방향을 바라봄. 반환 구조는 models.js 와 같음 (root/yaw/pitch/muzzle, root/body)
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { makeRng } from './textures.js';
import { fbm } from './textures_real.js';

// ---------- 모양 ----------
const G = {};
const geo = (k, f) => G[k] || (G[k] = f());
const f3 = (v) => (+v).toFixed(3);
// 모서리가 둥근 상자 (빛이 모서리에 맺혀 실제 철판처럼 보임)
const RB = (w, h, d, r = 0.012) => geo(`rb${f3(w)},${f3(h)},${f3(d)},${r}`, () => mergeVertices(new RoundedBoxGeometry(w, h, d, 1, Math.min(r, Math.min(w, h, d) / 2 - 1e-4))));
const BX = (w, h, d) => geo(`bx${f3(w)},${f3(h)},${f3(d)}`, () => new THREE.BoxGeometry(w, h, d));
const CY = (rt, rb, h, s = 14) => geo(`cy${f3(rt)},${f3(rb)},${f3(h)},${s}`, () => new THREE.CylinderGeometry(rt, rb, h, s));
const SP = (r, s = 14, part = 1) => geo(`sp${f3(r)},${s},${part}`, () => new THREE.SphereGeometry(r, s, Math.max(6, s >> 1), 0, Math.PI * 2, 0, Math.PI * part));
const CAP = (r, l) => geo(`ca${f3(r)},${f3(l)}`, () => new THREE.CapsuleGeometry(r, l, 3, 8));
// 옆모습(x,y) 다각형을 z 방향으로 두께 d만큼 뽑아냄 (경사 장갑 차체·포탑)
function prism(key, pts, d, bev = 0.006) {
  return geo('pr' + key, () => {
    const s = new THREE.Shape(pts.map(([x, y]) => new THREE.Vector2(x, y)));
    let g = new THREE.ExtrudeGeometry(s, { depth: d - bev * 2, bevelEnabled: bev > 0, bevelThickness: bev, bevelSize: bev, bevelSegments: 1, curveSegments: 6 });
    g.translate(0, 0, -(d - bev * 2) / 2);
    g.deleteAttribute('uv'); g = mergeVertices(g); g.computeVertexNormals();
    addUv(g); return g;
  });
}
// 위에서 본 모양(x,z)을 위로 h만큼 뽑아냄 (각진 포탑)
function slab(key, pts, h, bev = 0.006) {
  return geo('sl' + key, () => {
    const s = new THREE.Shape(pts.map(([x, z]) => new THREE.Vector2(x, -z)));
    let g = new THREE.ExtrudeGeometry(s, { depth: h - bev * 2, bevelEnabled: bev > 0, bevelThickness: bev, bevelSize: bev, bevelSegments: 1 });
    g.rotateX(-Math.PI / 2); g.translate(0, bev, 0);
    g.deleteAttribute('uv'); g = mergeVertices(g); g.computeVertexNormals();
    addUv(g); return g;
  });
}
function addUv(g) { const n = g.attributes.position.count; g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(n * 2), 2)); }
// 궤도(무한궤도) 고리: 앞뒤 바퀴 중심 x0,x1, 높이 y, 반지름 r, 두께 t, 폭 w
function trackLoop(x0, x1, y, r, t, w) {
  return geo(`tl${f3(x0)},${f3(x1)},${f3(y)},${f3(r)},${f3(t)},${f3(w)}`, () => {
    const s = new THREE.Shape();
    s.absarc(x1, y, r, -Math.PI / 2, Math.PI / 2, false); s.absarc(x0, y, r, Math.PI / 2, Math.PI * 1.5, false);
    const h = new THREE.Path(); const ri = r - t;
    h.absarc(x1, y, ri, -Math.PI / 2, Math.PI / 2, false); h.absarc(x0, y, ri, Math.PI / 2, Math.PI * 1.5, false);
    s.holes.push(h);
    const g = new THREE.ExtrudeGeometry(s, { depth: w, bevelEnabled: false, curveSegments: 10 });
    g.translate(0, 0, -w / 2);
    // 궤도판 무늬가 길이 방향으로 반복되도록 uv = (둘레 위치, 폭)
    const p = g.attributes.position, uv = g.attributes.uv;
    for (let i = 0; i < p.count; i++) { const x = p.getX(i), yy = p.getY(i); uv.setXY(i, x * 34 + (Math.abs(x - (x0 + x1) / 2) > (x1 - x0) / 2 ? (yy - y) * 34 : 0), p.getZ(i) / w + 0.5); }
    return mergeVertices(g);
  });
}

// ---------- 재질 ----------
const M = {};
function pbr(key, o) { return M[key] || (M[key] = new THREE.MeshStandardMaterial(Object.assign({ roughness: 0.7, metalness: 0.15 }, o))); }
const steel = () => pbr('steel', { color: 0x34362f, roughness: 0.42, metalness: 0.65 });
const dark = () => pbr('dark', { color: 0x1f201d, roughness: 0.6, metalness: 0.35 });
const rubber = () => pbr('rubber', { color: 0x1a1a19, roughness: 0.92, metalness: 0 });
const glass = () => pbr('glass', { color: 0x1a2731, roughness: 0.06, metalness: 0.9, envMapIntensity: 2.5 });
const lamp = () => pbr('lamp', { color: 0xfff4d6, emissive: 0xfff0c8, emissiveIntensity: 0.6, roughness: 0.2 });
const skin = () => pbr('skin', { color: 0xc89a74, roughness: 0.75, metalness: 0 });
const redM = () => pbr('red', { color: 0xa5171c, roughness: 0.55, metalness: 0.2 });
const redLamp = () => pbr('redl', { color: 0xff2a20, emissive: 0xff1a10, emissiveIntensity: 1.6, roughness: 0.3 });
const white = () => pbr('white', { color: 0xd9dbd3, roughness: 0.5, metalness: 0.1 });
const paint = (c, r = 0.68, m = 0.25) => pbr('p' + c + r + m, { color: c, roughness: r, metalness: m });

// 위장 무늬 그림 (이음매 없는 노이즈를 3~4색으로 끊어 칠함 + 때·먼지)
const CAMO = {
  kor: ['#5b6440', '#3f4a2e', '#6f5a3c', '#23251e'],   // 한국군 K9: 녹·진녹·갈·흑
  nato: ['#58603f', '#363d29', '#5a4a33', '#1f211b'],
  tan: ['#ad9a74', '#a08d68', '#b5a37c', '#94825f'],    // 미군·이스라엘 사막색
  jgsdf: ['#5e6b45', '#40472f', '#6d5c3f', '#2a2c22'],
  enemy: ['#5d605b', '#474a45', '#6d6e67', '#33352f'], // 적: 짙은 회색 계열
  uni: ['#6a6e4c', '#4d5236', '#7d6c4c', '#30321f'],    // 아군 군복
  euni: ['#4b4f4a', '#383b37', '#5e5f58', '#2a2c29']    // 적 군복
};
function camoTex(kind) {
  const key = 'camo_' + kind;
  if (M[key]) return M[key];
  const S = 256, cols = CAMO[kind].map((h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16)));
  const rnd = makeRng(key);
  const a = fbm(S, S, 3, 4, rnd), b = fbm(S, S, 3, 4, rnd), c = fbm(S, S, 4, 3, rnd), fine = fbm(S, S, 32, 2, rnd);
  const cv = document.createElement('canvas'); cv.width = cv.height = S;
  const ctx = cv.getContext('2d'), img = ctx.createImageData(S, S), d = img.data;
  for (let i = 0; i < S * S; i++) {
    let col = cols[0];
    if (a[i] > 0.56) col = cols[1];
    if (b[i] > 0.6) col = cols[2];
    if (c[i] > 0.66) col = cols[3];
    const l = 0.9 + (fine[i] - 0.5) * 0.35;
    d[i * 4] = Math.min(255, col[0] * l); d[i * 4 + 1] = Math.min(255, col[1] * l); d[i * 4 + 2] = Math.min(255, col[2] * l); d[i * 4 + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 4;
  return (M[key] = t);
}
// 삼면 투영 무늬: uv 없이 부품의 위치로 무늬를 찍음 → 여러 부품에 걸쳐 무늬가 자연스럽게 이어짐
function camo(kind, scale = 2.2, rough = 0.72) {
  const key = `camoM_${kind}_${scale}`;
  if (M[key]) return M[key];
  const m = new THREE.MeshStandardMaterial({ map: camoTex(kind), roughness: rough, metalness: 0.18 });
  m.onBeforeCompile = (s) => {
    s.uniforms.triScale = { value: scale };
    s.vertexShader = s.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vOP; varying vec3 vON;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvOP = position; vON = normal;');
    s.fragmentShader = s.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vOP; varying vec3 vON; uniform float triScale;')
      .replace('#include <map_fragment>', `
        vec3 tb = pow(abs(normalize(vON)), vec3(4.0)); tb /= (tb.x + tb.y + tb.z);
        vec3 tp = vOP * triScale;
        vec4 sampledDiffuseColor = texture2D(map, tp.zy) * tb.x + texture2D(map, tp.xz + 0.37) * tb.y + texture2D(map, tp.xy + 0.71) * tb.z;
        diffuseColor *= sampledDiffuseColor;`);
  };
  m.customProgramCacheKey = () => 'tri' + scale;
  return (M[key] = m);
}
// 궤도판 무늬
function trackMat() {
  if (M.track) return M.track;
  const cv = document.createElement('canvas'); cv.width = 64; cv.height = 64;
  const g = cv.getContext('2d');
  g.fillStyle = '#262624'; g.fillRect(0, 0, 64, 64);
  g.fillStyle = '#3a3a36'; g.fillRect(4, 3, 56, 40);
  g.fillStyle = '#4a4943'; g.fillRect(4, 3, 56, 7);
  g.fillStyle = '#151514'; g.fillRect(0, 46, 64, 18); g.fillRect(29, 0, 6, 64);
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping;
  const bump = new THREE.CanvasTexture(cv); bump.wrapS = bump.wrapT = THREE.RepeatWrapping;
  return (M.track = new THREE.MeshStandardMaterial({ map: t, bumpMap: bump, bumpScale: 2, roughness: 0.82, metalness: 0.45 }));
}
// 모래주머니 (삼베 질감)
const sandbag = () => pbr('sandbag', { color: 0xa79470, roughness: 0.95, metalness: 0 });

// ---------- 붙이기 도구 ----------
function add(p, g, m, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) {
  const o = new THREE.Mesh(g, m);
  o.position.set(x, y, z); o.rotation.set(rx, ry, rz);
  o.castShadow = o.receiveShadow = true;
  p.add(o); return o;
}
const noShadow = (o) => { o.castShadow = false; return o; };
// 두 점을 잇는 원기둥 (팔다리·다리·막대)
function rod(p, a, b, r, m, capsule = true) {
  const A = new THREE.Vector3(...a), Bv = new THREE.Vector3(...b), len = A.distanceTo(Bv);
  const o = add(p, capsule ? CAP(r, Math.max(0.001, len)) : CY(r, r, len, 8), m);
  o.position.copy(A).add(Bv).multiplyScalar(0.5);
  o.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), Bv.clone().sub(A).normalize());
  return o;
}
// x축 방향 포신 (뿌리 x0에서 길이 len)
const tube = (p, r0, r1, len, m, x0, y = 0, z = 0, s = 14) => add(p, CY(r1, r0, len, s), m, x0 + len / 2, y, z, 0, 0, -Math.PI / 2);
// 바퀴: 고무 타이어 + 휠 + 허브. 옆(z) 방향 축
function wheel(p, x, y, z, r, w, rimM) {
  const s = Math.sign(z) || 1;
  add(p, CY(r, r, w, 18), rubber(), x, y, z, Math.PI / 2, 0, 0);
  add(p, CY(r * 0.62, r * 0.62, w * 1.04, 14), rimM, x, y, z, Math.PI / 2, 0, 0);
  add(p, CY(r * 0.22, r * 0.3, w * 0.4, 8), steel(), x, y, z + s * w * 0.6, Math.PI / 2, 0, 0);
}
// 도로바퀴 (궤도 차량): 고무 테 + 금속 원판
function roadWheel(p, x, y, z, r, w) {
  add(p, CY(r, r, w, 16), rubber(), x, y, z, Math.PI / 2, 0, 0);
  add(p, CY(r * 0.8, r * 0.8, w * 1.08, 14), steel(), x, y, z, Math.PI / 2, 0, 0);
  add(p, CY(r * 0.25, r * 0.25, w * 1.3, 8), dark(), x, y, z, Math.PI / 2, 0, 0);
}
// 무한궤도 한쪽 세트: 궤도 고리 + 도로바퀴 n개 + 기동륜·유동륜 + 상부 롤러
function trackSet(p, o) {
  const { x0, x1, y, r, w, n, z, wr } = o;
  add(p, trackLoop(x0, x1, y, r, 0.016, w), trackMat(), 0, 0, z);
  const span = x1 - x0;
  for (let i = 0; i < n; i++) roadWheel(p, x0 + 0.06 + i * (span - 0.12) / (n - 1), y - r + 0.016 + wr, z, wr, w * 0.82);
  add(p, CY(r * 0.82, r * 0.82, w * 0.9, 12), steel(), x1, y, z, Math.PI / 2, 0, 0);
  add(p, CY(r * 0.78, r * 0.78, w * 0.9, 12), dark(), x0, y, z, Math.PI / 2, 0, 0);
  for (let i = 0; i < 3; i++) add(p, CY(0.012, 0.012, w * 0.6, 8), steel(), x0 + span * (0.25 + i * 0.25), y + r - 0.028, z, Math.PI / 2, 0, 0);
}
// 연막탄 발사기 묶음 (k개)
function smokeLaunchers(p, x, y, z, k, side, m) {
  for (let i = 0; i < k; i++) add(p, CY(0.011, 0.011, 0.05, 8), m, x - i * 0.022, y + 0.02, z, 0.6 * side, 0, -0.5);
}
// 안테나 (가는 막대, 그림자 없음)
const antenna = (p, x, y, z, h) => noShadow(add(p, CY(0.003, 0.005, h, 4), dark(), x, y + h / 2, z));
// 사람 (서기·무릎쏴). 키 약 0.42
function person(p, o) {
  const { x = 0, z = 0, ry = 0, pose = 'stand', uni, gear, helm, kit = 'rifle', side = 'ally' } = o;
  const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = ry; p.add(g);
  const kneel = pose === 'kneel';
  const hip = kneel ? 0.13 : 0.21;
  // 다리
  if (kneel) {
    rod(g, [0, hip, -0.035], [0.075, hip - 0.01, -0.04], 0.022, uni); rod(g, [0.075, hip - 0.01, -0.04], [0.08, 0.025, -0.04], 0.02, uni);
    add(g, RB(0.055, 0.025, 0.032, 0.008), dark(), 0.095, 0.013, -0.04);
    rod(g, [0, hip, 0.035], [0.0, 0.03, 0.045], 0.022, uni); rod(g, [0.0, 0.03, 0.045], [-0.11, 0.025, 0.045], 0.02, uni);
    add(g, RB(0.03, 0.03, 0.032, 0.008), dark(), -0.13, 0.02, 0.045);
  } else {
    for (const s of [-1, 1]) {
      rod(g, [0, hip, s * 0.034], [s * 0.02, 0.11, s * 0.036], 0.022, uni);
      rod(g, [s * 0.02, 0.11, s * 0.036], [s * -0.01, 0.03, s * 0.036], 0.02, uni);
      add(g, RB(0.055, 0.026, 0.032, 0.008), dark(), s * -0.0 + 0.012, 0.013, s * 0.036);
    }
  }
  // 몸통 + 방탄조끼 + 탄입대 + 배낭
  const tb = hip, lean = kneel ? 0.18 : 0.08;
  const torso = new THREE.Group(); torso.position.set(0, tb, 0); torso.rotation.z = -lean; g.add(torso);
  add(torso, RB(0.07, 0.13, 0.1, 0.025), uni, 0, 0.07, 0);
  add(torso, RB(0.085, 0.09, 0.108, 0.015), gear, 0.002, 0.085, 0);
  for (const s of [-1, 0, 1]) add(torso, RB(0.022, 0.03, 0.026, 0.006), gear, 0.05, 0.06, s * 0.03);
  add(torso, RB(0.05, 0.08, 0.085, 0.015), gear, -0.065, 0.085, 0);
  // 머리·헬멧·고글
  add(torso, CY(0.016, 0.018, 0.03, 8), skin(), 0.005, 0.15, 0);
  add(torso, SP(0.03, 12), skin(), 0.008, 0.175, 0);
  const hm = add(torso, SP(0.038, 14, 0.5), helm, 0.0, 0.178, 0); hm.scale.set(1.05, 0.95, 1);
  add(torso, RB(0.012, 0.012, 0.04, 0.004), dark(), 0.035, 0.192, 0);
  if (side === 'enemy') add(torso, RB(0.03, 0.02, 0.112, 0.004), redM(), 0, 0.12, 0); // 붉은 완장
  // 팔 + 무기
  const sh = 0.13;
  if (kit === 'rifle' || kit === 'binoc') {
    rod(torso, [0, sh, -0.05], [0.05, sh - 0.05, -0.055], 0.017, uni); rod(torso, [0.05, sh - 0.05, -0.055], [0.1, sh - 0.02, -0.02], 0.015, uni);
    rod(torso, [0, sh, 0.05], [0.03, sh - 0.06, 0.05], 0.017, uni); rod(torso, [0.03, sh - 0.06, 0.05], [0.05, sh - 0.03, 0.012], 0.015, uni);
    if (kit === 'rifle') {
      const w = new THREE.Group(); w.position.set(0.04, sh - 0.025, 0.005); w.rotation.z = lean * 0.9; torso.add(w);
      add(w, RB(0.12, 0.022, 0.014, 0.004), dark(), 0.03, 0, 0); add(w, CY(0.005, 0.005, 0.09, 6), steel(), 0.13, 0.004, 0, 0, 0, Math.PI / 2);
      add(w, RB(0.016, 0.04, 0.012, 0.003), dark(), 0.04, -0.025, 0, 0, 0, side === 'enemy' ? 0.35 : 0.1);
      add(w, RB(0.05, 0.026, 0.012, 0.004), dark(), -0.05, -0.008, 0);
      add(w, RB(0.03, 0.014, 0.012, 0.003), dark(), 0.03, 0.019, 0);
    } else {
      add(torso, RB(0.03, 0.022, 0.05, 0.006), dark(), 0.06, 0.168, 0);
    }
  } else if (kit === 'grip') { // 기관총 손잡이를 잡음
    rod(torso, [0, sh, -0.05], [0.06, sh - 0.05, -0.05], 0.017, uni); rod(torso, [0.06, sh - 0.05, -0.05], [0.11, sh - 0.03, -0.02], 0.015, uni);
    rod(torso, [0, sh, 0.05], [0.06, sh - 0.05, 0.05], 0.017, uni); rod(torso, [0.06, sh - 0.05, 0.05], [0.11, sh - 0.03, 0.02], 0.015, uni);
  } else if (kit === 'shoulder') { // 어깨 위 발사기를 받침
    rod(torso, [0, sh, -0.05], [0.04, sh - 0.04, -0.06], 0.017, uni); rod(torso, [0.04, sh - 0.04, -0.06], [0.06, sh + 0.02, -0.05], 0.015, uni);
    rod(torso, [0, sh, 0.05], [0.05, sh - 0.03, 0.06], 0.017, uni); rod(torso, [0.05, sh - 0.03, 0.06], [0.12, sh + 0.025, 0.05], 0.015, uni);
  }
  return g;
}
const allyKit = () => ({ uni: camo('uni', 3.2, 0.9), gear: paint(0x4b4f36, 0.9, 0), helm: camo('uni', 3.2, 0.8) });
const enemyKit = () => ({ uni: camo('euni', 3.2, 0.9), gear: paint(0x2d2f2c, 0.9, 0), helm: paint(0x3b3e3a, 0.6, 0.2), side: 'enemy' });

// 모래주머니 반원 진지
function sandbagRing(p, r, from, to, n) {
  for (let i = 0; i < n; i++) {
    const a = from + (to - from) * (i + 0.5) / n;
    add(p, RB(0.13, 0.055, 0.075, 0.025), sandbag(), Math.cos(a) * r, 0.03, Math.sin(a) * r, 0, -a + Math.PI / 2, 0);
    add(p, RB(0.13, 0.055, 0.075, 0.025), sandbag(), Math.cos(a + (to - from) / n / 2) * (r - 0.01), 0.083, Math.sin(a + (to - from) / n / 2) * (r - 0.01), 0, -a + Math.PI / 2, 0);
  }
}
// 바닥 그림자 얼룩 (땅에 붙어 보이게)
let blobM = null;
function blob(p, w, d) {
  if (!blobM) {
    const cv = document.createElement('canvas'); cv.width = cv.height = 64; const g = cv.getContext('2d');
    const gr = g.createRadialGradient(32, 32, 4, 32, 32, 32); gr.addColorStop(0, 'rgba(0,0,0,0.55)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
    blobM = new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(cv), transparent: true, depthWrite: false });
  }
  const o = new THREE.Mesh(geo('blobg', () => new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2)), blobM);
  o.scale.set(w, 1, d); o.position.y = 0.004; o.renderOrder = 1; p.add(o);
  o.userData.keep = true;
  return o;
}

// 트럭 바퀴 줄
function axles(p, xs, z, r, w, rimM) { for (const x of xs) for (const s of [-1, 1]) wheel(p, x, r, s * z, r, w, rimM); }
// 군용 트럭 운전석 (앞 x0~x1, 폭 W, 높이 H, 바닥 y0)
function cab(p, x0, x1, W, H, y0, m, armored = false) {
  const L = x1 - x0, cx = (x0 + x1) / 2;
  add(p, RB(L, H * 0.55, W, 0.02), m, cx, y0 + H * 0.275, 0);
  // 위쪽: 앞유리 쪽으로 기울어진 운전실
  add(p, prism(`cab${f3(L)},${f3(H)},${armored}`, [[-L / 2, 0], [L / 2 - 0.01, 0], [L / 2 - (armored ? 0.07 : 0.05), H * 0.45], [-L / 2, H * 0.45]], W, 0.008), m, cx, y0 + H * 0.55, 0);
  // 앞유리 2장 + 옆창
  const a = Math.atan2(armored ? 0.07 : 0.05, H * 0.45);
  for (const s of [-1, 1]) add(p, BX(0.006, H * 0.32, W * 0.4), glass(), x1 - 0.012 - (armored ? 0.035 : 0.025), y0 + H * 0.77, s * W * 0.22, 0, 0, a);
  for (const s of [-1, 1]) add(p, BX(L * 0.42, H * 0.25, 0.004), glass(), cx + L * 0.12, y0 + H * 0.78, s * (W / 2 + 0.001));
  // 범퍼·전조등·그릴·사이드미러
  add(p, RB(0.04, 0.035, W * 1.04, 0.008), dark(), x1 + 0.012, y0 + 0.02, 0);
  for (const s of [-1, 1]) { add(p, CY(0.013, 0.013, 0.01, 10), lamp(), x1 + 0.002, y0 + H * 0.3, s * W * 0.36, 0, 0, Math.PI / 2); add(p, RB(0.015, 0.035, 0.01, 0.003), dark(), x1 - 0.06, y0 + H * 0.8, s * (W / 2 + 0.02)); }
  for (let i = 0; i < 4; i++) add(p, BX(0.004, 0.008, W * 0.4), dark(), x1 + 0.001, y0 + H * 0.12 + i * 0.022, 0);
}

// ================= 아군 무기 =================
export function makeTowerHD(type) {
  if (type === 'ewcar') type = 'jammer';
  const root = new THREE.Group();
  const yaw = new THREE.Group(); root.add(yaw);
  const pitch = new THREE.Group(); yaw.add(pitch);
  const muzzle = new THREE.Object3D();
  const spin = [], glow = [];
  const B = TOWERS[type];
  if (!B) return null;
  B({ root, yaw, pitch, muzzle, spin, glow });
  pitch.add(muzzle);
  return { root, yaw, pitch, muzzle, spin, glow };
}

const TOWERS = {
  // M2 브라우닝 중기관총: M3 삼각대 + 사수 + 탄약통 + 모래주머니 진지
  browning({ root, yaw, pitch, muzzle }) {
    blob(root, 0.95, 0.95);
    sandbagRing(root, 0.36, -1.9, 1.9, 9);
    const K = allyKit();
    // 삼각대
    for (const [x, z] of [[0.16, 0.12], [0.16, -0.12], [-0.2, 0]]) rod(yaw, [0, 0.19, 0], [x, 0.0, z], 0.008, dark(), false);
    add(yaw, CY(0.02, 0.025, 0.04, 10), dark(), 0, 0.2, 0);
    pitch.position.set(0, 0.23, 0);
    // 기관총 몸통·덮개·손잡이·조준기
    add(pitch, RB(0.2, 0.06, 0.055, 0.008), steel(), -0.02, 0.0, 0);
    add(pitch, RB(0.14, 0.012, 0.05, 0.004), dark(), 0.0, 0.035, 0);
    for (const s of [-1, 1]) add(pitch, CY(0.006, 0.006, 0.05, 6), dark(), -0.14, -0.005, s * 0.018, 0, 0, Math.PI / 2);
    add(pitch, RB(0.02, 0.03, 0.05, 0.005), dark(), -0.13, 0, 0);
    // 방열 덮개(구멍 뚫린 통) + 총열
    add(pitch, CY(0.018, 0.018, 0.12, 12), dark(), 0.14, 0.004, 0, 0, 0, Math.PI / 2);
    for (let i = 0; i < 4; i++) add(pitch, CY(0.0185, 0.0185, 0.006, 12), steel(), 0.1 + i * 0.026, 0.004, 0, 0, 0, Math.PI / 2);
    tube(pitch, 0.011, 0.01, 0.33, steel(), 0.2, 0.004);
    add(pitch, CY(0.016, 0.016, 0.03, 10), dark(), 0.54, 0.004, 0, 0, 0, Math.PI / 2);
    // 탄약통 + 탄띠
    add(pitch, RB(0.06, 0.05, 0.035, 0.005), paint(0x4c5233), -0.0, -0.035, 0.05);
    add(pitch, BX(0.02, 0.008, 0.04), pbr('brass', { color: 0xb08a3e, roughness: 0.35, metalness: 0.9 }), 0.0, 0.0, 0.035);
    muzzle.position.set(0.58, 0.004, 0);
    // 사수
    person(yaw, Object.assign({ x: -0.3, z: 0, pose: 'kneel', kit: 'grip' }, K));
    add(yaw, RB(0.09, 0.06, 0.06, 0.008), paint(0x4c5233), -0.1, 0.03, 0.2);
    add(yaw, RB(0.09, 0.06, 0.06, 0.008), paint(0x4c5233), -0.1, 0.03, 0.27);
  },

  // K9 천둥 자주포: 경사 차체, 무한궤도(바퀴 6개), 큰 포탑, 155mm 52구경장 포신 + 배연기 + 제퇴기
  k9({ root, yaw, pitch, muzzle }) {
    const cm = camo('kor');
    blob(root, 1.15, 0.6);
    // 차체 (앞쪽 경사)
    add(yaw, prism('k9hull', [[-0.43, 0.075], [0.34, 0.075], [0.45, 0.15], [0.32, 0.235], [-0.43, 0.235], [-0.44, 0.16]], 0.3), cm);
    // 흙받이·사이드 스커트
    for (const s of [-1, 1]) {
      add(yaw, RB(0.86, 0.014, 0.075, 0.004), cm, -0.005, 0.228, s * 0.19);
      add(yaw, RB(0.66, 0.045, 0.012, 0.004), cm, -0.04, 0.2, s * 0.226);
      trackSet(yaw, { x0: -0.37, x1: 0.37, y: 0.11, r: 0.075, w: 0.075, n: 6, z: s * 0.185, wr: 0.047 });
    }
    // 엔진 흡기 그릴(앞 오른쪽)·배기구·조종수 해치·전조등
    for (let i = 0; i < 5; i++) add(yaw, BX(0.012, 0.006, 0.11), dark(), 0.2 + i * 0.022, 0.24, -0.07);
    add(yaw, RB(0.05, 0.02, 0.06, 0.006), dark(), 0.12, 0.24, -0.13);
    add(yaw, CY(0.032, 0.032, 0.012, 14), cm, 0.25, 0.242, 0.08);
    for (const s of [-1, 1]) { add(yaw, CY(0.014, 0.014, 0.012, 10), lamp(), 0.42, 0.17, s * 0.12, 0, 0, Math.PI / 2 - 0.6); add(yaw, RB(0.03, 0.03, 0.03, 0.006), dark(), 0.41, 0.17, s * 0.12); }
    // 주퇴 고정대(여행 잠금 A자 프레임)
    for (const s of [-1, 1]) rod(yaw, [0.36, 0.2, s * 0.05], [0.4, 0.3, 0], 0.006, dark(), false);
    // 포탑
    add(yaw, prism('k9tur', [[-0.38, 0], [0.09, 0], [0.17, 0.06], [0.13, 0.165], [-0.37, 0.165]], 0.36, 0.008), cm, 0, 0.235, 0);
    add(yaw, RB(0.08, 0.1, 0.34, 0.01), cm, -0.41, 0.31, 0);                 // 뒤 짐 바구니
    for (let i = 0; i < 4; i++) add(yaw, BX(0.004, 0.09, 0.345), dark(), -0.44 + i * 0.02, 0.31, 0);
    add(yaw, RB(0.07, 0.04, 0.05, 0.01), paint(0x4a4f34), -0.4, 0.38, 0.1);
    add(yaw, RB(0.07, 0.04, 0.05, 0.01), paint(0x6e5e40), -0.4, 0.38, -0.08);
    // 지휘관 큐폴라 + K6 기관총 + 해치 + 조준경
    add(yaw, CY(0.05, 0.055, 0.035, 16), cm, -0.12, 0.418, 0.09);
    add(yaw, CY(0.046, 0.046, 0.01, 16), cm, -0.12, 0.44, 0.09);
    tube(yaw, 0.007, 0.006, 0.13, steel(), -0.12, 0.465, 0.09);
    add(yaw, RB(0.06, 0.025, 0.02, 0.004), dark(), -0.12, 0.465, 0.09);
    add(yaw, CY(0.04, 0.04, 0.01, 14), cm, -0.2, 0.405, -0.09);
    add(yaw, RB(0.05, 0.04, 0.04, 0.006), cm, 0.02, 0.42, -0.12);
    add(yaw, BX(0.004, 0.022, 0.03), glass(), 0.046, 0.425, -0.12);
    // 옆문·손잡이·연막탄
    for (const s of [-1, 1]) {
      add(yaw, BX(0.14, 0.09, 0.004), dark(), -0.2, 0.32, s * 0.181);
      add(yaw, BX(0.06, 0.006, 0.006), steel(), -0.2, 0.36, s * 0.185);
      smokeLaunchers(yaw, 0.08, 0.36, s * 0.17, 4, s, dark());
    }
    antenna(yaw, -0.33, 0.4, 0.15, 0.24); antenna(yaw, -0.33, 0.4, -0.15, 0.18);
    // 포 (방패·주퇴기·포신)
    pitch.position.set(0.15, 0.32, 0); pitch.rotation.z = 0.14;
    add(pitch, RB(0.09, 0.11, 0.15, 0.015), cm, 0.0, 0, 0);
    add(pitch, RB(0.16, 0.035, 0.05, 0.008), steel(), 0.08, -0.04, 0);
    tube(pitch, 0.026, 0.021, 0.86, pbr('k9gun', { color: 0x4d5338, roughness: 0.6, metalness: 0.35 }), 0.04, 0);
    add(pitch, CY(0.033, 0.033, 0.09, 16), pbr('k9gun', {}), 0.5, 0, 0, 0, 0, Math.PI / 2);         // 배연기
    add(pitch, RB(0.085, 0.052, 0.068, 0.012), dark(), 0.93, 0, 0);                                  // 포구 제퇴기
    for (const s of [-1, 1]) add(pitch, BX(0.05, 0.03, 0.006), pbr('void', { color: 0x050505, roughness: 1 }), 0.93, 0, s * 0.035);
    muzzle.position.set(0.98, 0, 0);
  },

  // 16식 기동전투차: 8륜 장갑차 + 각진 포탑 + 105mm 포
  type16({ root, yaw, pitch, muzzle }) {
    const cm = camo('jgsdf');
    blob(root, 1.1, 0.55);
    add(yaw, prism('t16hull', [[-0.45, 0.085], [0.32, 0.085], [0.46, 0.17], [0.38, 0.22], [-0.45, 0.22]], 0.36), cm);
    add(yaw, RB(0.9, 0.012, 0.4, 0.004), cm, -0.005, 0.222, 0);
    for (const x of [-0.33, -0.15, 0.1, 0.28]) for (const s of [-1, 1]) wheel(yaw, x, 0.075, s * 0.19, 0.075, 0.06, paint(0x3f4530));
    for (const s of [-1, 1]) { add(yaw, RB(0.86, 0.03, 0.025, 0.006), cm, 0, 0.18, s * 0.19); for (const x of [-0.24, 0.19]) add(yaw, RB(0.13, 0.05, 0.02, 0.008), cm, x, 0.14, s * 0.2); }
    add(yaw, RB(0.06, 0.03, 0.08, 0.008), cm, 0.33, 0.235, 0.09);
    add(yaw, BX(0.004, 0.02, 0.06), glass(), 0.362, 0.24, 0.09);
    for (const s of [-1, 1]) add(yaw, CY(0.013, 0.013, 0.01, 10), lamp(), 0.45, 0.17, s * 0.13, 0, 0, Math.PI / 2 - 0.5);
    for (let i = 0; i < 4; i++) add(yaw, BX(0.1, 0.005, 0.012), dark(), -0.32, 0.225, -0.12 + i * 0.03);
    // 각진 포탑 (위에서 본 육각형)
    add(yaw, slab('t16t', [[-0.2, -0.15], [0.06, -0.16], [0.17, -0.08], [0.17, 0.08], [0.06, 0.16], [-0.2, 0.15], [-0.26, 0.1], [-0.26, -0.1]], 0.12, 0.008), cm, -0.06, 0.222, 0);
    add(yaw, CY(0.04, 0.044, 0.03, 14), cm, -0.12, 0.355, 0.07);
    add(yaw, RB(0.05, 0.04, 0.04, 0.006), cm, -0.03, 0.36, -0.08);
    add(yaw, BX(0.004, 0.02, 0.03), glass(), -0.004, 0.365, -0.08);
    tube(yaw, 0.006, 0.005, 0.12, steel(), -0.12, 0.38, 0.07);
    for (const s of [-1, 1]) smokeLaunchers(yaw, 0.07, 0.31, s * 0.15, 3, s, dark());
    antenna(yaw, -0.3, 0.33, 0.1, 0.22);
    pitch.position.set(0.1, 0.29, 0);
    add(pitch, RB(0.08, 0.075, 0.13, 0.012), cm, 0, 0, 0);
    tube(pitch, 0.02, 0.016, 0.72, pbr('t16gun', { color: 0x4b553b, roughness: 0.55, metalness: 0.35 }), 0.04, 0.005);
    add(pitch, CY(0.026, 0.026, 0.07, 14), pbr('t16gun', {}), 0.42, 0.005, 0, 0, 0, Math.PI / 2);
    add(pitch, RB(0.055, 0.04, 0.05, 0.01), dark(), 0.78, 0.005, 0);
    muzzle.position.set(0.82, 0.005, 0);
  },

  // 패트리어트: 견인 트랙터 + M860 발사대 트레일러 + 4연장 발사관 (38° 고정 각)
  patriot({ root, yaw, pitch, muzzle }) {
    const cm = camo('tan', 2);
    blob(root, 1.2, 0.6);
    // 트랙터 (앞) + 트레일러 (뒤)
    add(yaw, RB(0.34, 0.05, 0.22, 0.008), dark(), 0.3, 0.12, 0);
    cab(yaw, 0.32, 0.5, 0.3, 0.22, 0.1, cm);
    axles(yaw, [0.42, 0.22, 0.12], 0.13, 0.06, 0.05, paint(0x7a6a4c));
    add(yaw, RB(0.78, 0.04, 0.32, 0.008), cm, -0.17, 0.155, 0);
    for (const s of [-1, 1]) add(yaw, RB(0.74, 0.04, 0.02, 0.006), dark(), -0.17, 0.12, s * 0.14);
    axles(yaw, [-0.36, -0.48], 0.15, 0.06, 0.05, paint(0x7a6a4c));
    // 지지대(아웃리거) 4개
    for (const [x, s] of [[0.06, 1], [0.06, -1], [-0.5, 1], [-0.5, -1]]) { rod(yaw, [x, 0.15, s * 0.15], [x, 0.01, s * 0.27], 0.01, dark(), false); add(yaw, CY(0.025, 0.025, 0.01, 10), dark(), x, 0.008, s * 0.27); }
    add(yaw, RB(0.14, 0.1, 0.2, 0.01), cm, -0.02, 0.22, 0);                    // 발전기·전자장비
    // 발사관 4개 (2×2), 테두리 보강살
    pitch.position.set(-0.52, 0.19, 0); pitch.rotation.z = 0.66;
    const can = paint(0xb7a57d, 0.7, 0.15);
    for (const [y, z] of [[0.06, -0.085], [0.06, 0.085], [0.22, -0.085], [0.22, 0.085]]) {
      add(pitch, RB(0.64, 0.155, 0.155, 0.012), can, 0.32, y, z);
      for (let i = 0; i < 5; i++) add(pitch, RB(0.012, 0.164, 0.164, 0.004), cm, 0.04 + i * 0.14, y, z);
      add(pitch, BX(0.006, 0.12, 0.12), white(), 0.643, y, z);
    }
    add(pitch, RB(0.66, 0.02, 0.36, 0.006), dark(), 0.32, -0.035, 0);
    muzzle.position.set(0.66, 0.14, 0);
  },

  // 아이언돔: 20발 발사대(트레일러) + 회전 레이더
  irondome({ root, yaw, pitch, muzzle, spin }) {
    const cm = camo('tan', 2);
    blob(root, 0.95, 0.85);
    add(yaw, RB(0.66, 0.05, 0.42, 0.01), dark(), 0, 0.1, 0);
    for (const s of [-1, 1]) wheel(yaw, -0.12, 0.065, s * 0.24, 0.065, 0.05, paint(0x7a6a4c));
    for (const [x, s] of [[0.28, 1], [0.28, -1], [-0.28, 1], [-0.28, -1]]) { rod(yaw, [x, 0.1, s * 0.18], [x + 0.03 * Math.sign(x), 0.01, s * 0.3], 0.01, dark(), false); add(yaw, CY(0.025, 0.025, 0.01, 10), dark(), x + 0.03 * Math.sign(x), 0.008, s * 0.3); }
    add(yaw, RB(0.1, 0.12, 0.16, 0.01), cm, 0.25, 0.19, 0);
    pitch.position.set(-0.05, 0.16, 0); pitch.rotation.z = 0.8;
    add(pitch, RB(0.48, 0.44, 0.5, 0.02), cm, 0.0, 0.22, 0);
    for (let i = 0; i < 4; i++) add(pitch, BX(0.49, 0.008, 0.51), dark(), 0, 0.03 + i * 0.12, 0);
    const cap = white();
    for (let r = 0; r < 4; r++) for (let c = 0; c < 5; c++) {
      add(pitch, CY(0.04, 0.04, 0.012, 12), dark(), 0.242, 0.05 + r * 0.105, -0.2 + c * 0.1, 0, 0, Math.PI / 2);
      add(pitch, SP(0.03, 10, 0.5), cap, 0.244, 0.05 + r * 0.105, -0.2 + c * 0.1, 0, 0, -Math.PI / 2);
    }
    muzzle.position.set(0.28, 0.22, 0);
    // EL/M-2084 레이더: 받침대 + 평판 안테나 (빙글빙글)
    rod(root, [-0.33, 0, 0.3], [-0.33, 0.42, 0.3], 0.018, dark(), false);
    const rad = new THREE.Group(); rad.position.set(-0.33, 0.48, 0.3); root.add(rad);
    add(rad, RB(0.05, 0.22, 0.3, 0.01), paint(0xc9c3a8, 0.6, 0.15), 0, 0, 0, 0, 0, 0.12);
    add(rad, BX(0.006, 0.19, 0.27), paint(0x8f8a76, 0.5, 0.2), 0.027, 0.003, 0, 0, 0, 0.12);
    add(rad, RB(0.06, 0.05, 0.08, 0.008), dark(), -0.05, -0.05, 0);
    spin.push([rad, 'y', 1.4]);
  },

  // 전자전 차량: 6륜 트럭 + 장비 셸터 + 접이식 마스트 + 회전 안테나 배열
  jammer({ root, yaw, muzzle, spin, glow }) {
    const cm = camo('nato');
    blob(root, 1.0, 0.55);
    add(yaw, RB(0.82, 0.05, 0.24, 0.008), dark(), 0, 0.12, 0);
    axles(yaw, [0.27, -0.13, -0.27], 0.16, 0.065, 0.055, paint(0x3e4430));
    cab(yaw, 0.17, 0.4, 0.32, 0.24, 0.13, cm);
    add(yaw, RB(0.5, 0.25, 0.34, 0.014), cm, -0.15, 0.275, 0);
    for (const s of [-1, 1]) { add(yaw, RB(0.08, 0.05, 0.006, 0.003), dark(), -0.2, 0.3, s * 0.171); add(yaw, BX(0.1, 0.17, 0.004), dark(), -0.02, 0.27, s * 0.171); }
    add(yaw, RB(0.12, 0.06, 0.12, 0.008), paint(0x50553e), -0.32, 0.43, 0.08);           // 발전기
    for (let i = 0; i < 3; i++) add(yaw, BX(0.1, 0.004, 0.1), dark(), -0.32, 0.405 + i * 0.016, 0.08);
    // 마스트 (3단 망원) + 회전 머리
    for (let i = 0; i < 3; i++) add(yaw, CY(0.022 - i * 0.005, 0.024 - i * 0.005, 0.2, 10), paint(0x9ea08f, 0.5, 0.5), -0.12, 0.5 + i * 0.18, -0.06);
    const head = new THREE.Group(); head.position.set(-0.12, 0.98, -0.06); root.add(head);
    add(head, RB(0.04, 0.05, 0.36, 0.008), white(), 0, 0, 0);
    for (let i = 0; i < 7; i++) add(head, BX(0.004, 0.004, 0.06 + (i % 3) * 0.03), dark(), 0.024, 0.0, -0.15 + i * 0.05, Math.PI / 2, 0, 0);
    add(head, RB(0.14, 0.1, 0.03, 0.01), paint(0xd8d9d0, 0.5, 0.1), 0, 0.08, 0);
    spin.push([head, 'y', 1.2]);
    antenna(yaw, -0.36, 0.4, -0.13, 0.3); antenna(yaw, 0.2, 0.37, 0.12, 0.2);
    const ring = noShadow(add(root, geo('ewring', () => new THREE.TorusGeometry(0.5, 0.016, 6, 40)), pbr('ewglow', { color: 0x6fd3ff, emissive: 0x3fb0ff, emissiveIntensity: 1.4 }), 0, 0.03, 0, Math.PI / 2, 0, 0));
    glow.push(ring);
    muzzle.position.set(-0.12, 0.98, -0.06);
  },

  // 재블린: 무릎쏴 사수(어깨 위 발사관 + 조준장치) + 관측수(쌍안경) + 모래주머니
  javelin({ root, yaw, pitch, muzzle }) {
    blob(root, 0.9, 0.9);
    sandbagRing(root, 0.36, -1.5, 1.5, 7);
    const K = allyKit();
    person(yaw, Object.assign({ x: -0.06, z: 0.06, pose: 'kneel', kit: 'shoulder' }, K));
    person(yaw, Object.assign({ x: -0.16, z: -0.18, pose: 'kneel', kit: 'binoc', ry: 0.3 }, K));
    add(yaw, RB(0.12, 0.07, 0.08, 0.015), paint(0x4b4f36, 0.9, 0), -0.28, 0.035, 0.18);
    // 발사관 (어깨 위)
    pitch.position.set(-0.04, 0.285, 0.1); pitch.rotation.z = 0.1;
    const tubeM = paint(0x5c6040, 0.75, 0.1);
    add(pitch, CY(0.034, 0.034, 0.5, 14), tubeM, 0.06, 0, 0, 0, 0, Math.PI / 2);
    add(pitch, CY(0.042, 0.042, 0.04, 14), tubeM, 0.3, 0, 0, 0, 0, Math.PI / 2);
    add(pitch, CY(0.042, 0.042, 0.04, 14), tubeM, -0.18, 0, 0, 0, 0, Math.PI / 2);
    add(pitch, CY(0.03, 0.03, 0.006, 14), dark(), 0.322, 0, 0, 0, 0, Math.PI / 2);
    // 지휘발사장치(CLU): 상자 + 렌즈 + 손잡이
    add(pitch, RB(0.11, 0.07, 0.09, 0.01), paint(0x4a4c3a, 0.7, 0.15), 0.0, 0.0, -0.075);
    add(pitch, CY(0.02, 0.02, 0.01, 12), glass(), 0.058, 0.01, -0.075, 0, 0, Math.PI / 2);
    add(pitch, RB(0.03, 0.02, 0.05, 0.006), dark(), -0.06, 0.02, -0.075);
    muzzle.position.set(0.34, 0, 0);
  },

  // 하이마스(M142): 6륜 FMTV 트럭 + 방탄 운전실 + 6연장 로켓 포드
  himars({ root, yaw, pitch, muzzle }) {
    const cm = camo('tan', 2);
    blob(root, 1.15, 0.55);
    add(yaw, RB(0.92, 0.06, 0.24, 0.008), dark(), -0.02, 0.13, 0);
    axles(yaw, [0.3, -0.17, -0.34], 0.155, 0.075, 0.06, paint(0x7a6a4c));
    cab(yaw, 0.22, 0.48, 0.34, 0.27, 0.14, cm, true);
    for (const s of [-1, 1]) add(yaw, RB(0.1, 0.012, 0.06, 0.004), dark(), 0.3, 0.14, s * 0.2);
    add(yaw, RB(0.66, 0.04, 0.36, 0.008), cm, -0.12, 0.19, 0);
    for (const s of [-1, 1]) add(yaw, RB(0.6, 0.05, 0.014, 0.004), cm, -0.12, 0.17, s * 0.176);
    // 포드 회전대
    add(yaw, CY(0.12, 0.13, 0.04, 18), dark(), -0.2, 0.23, 0);
    pitch.position.set(-0.42, 0.26, 0); pitch.rotation.z = 0.35;
    add(pitch, RB(0.6, 0.2, 0.3, 0.014), cm, 0.29, 0.1, 0);
    for (let i = 0; i < 4; i++) add(pitch, BX(0.012, 0.205, 0.305), dark(), 0.06 + i * 0.15, 0.1, 0);
    add(pitch, BX(0.006, 0.18, 0.28), paint(0x9a8a66), 0.593, 0.1, 0);
    for (let r = 0; r < 2; r++) for (let c = 0; c < 3; c++) {
      add(pitch, CY(0.036, 0.036, 0.012, 14), dark(), 0.598, 0.055 + r * 0.09, -0.09 + c * 0.09, 0, 0, Math.PI / 2);
      add(pitch, SP(0.024, 10, 0.5), white(), 0.598, 0.055 + r * 0.09, -0.09 + c * 0.09, 0, 0, -Math.PI / 2);
    }
    muzzle.position.set(0.62, 0.1, 0);
  },

  // 현무-3: 8륜 대형 발사차(TEL) + 대형 원통 발사관 4개 + 유압 기둥
  hyunmoo({ root, yaw, pitch, muzzle }) {
    const cm = camo('kor', 2);
    blob(root, 1.35, 0.6);
    add(yaw, RB(1.18, 0.07, 0.28, 0.01), dark(), 0, 0.15, 0);
    axles(yaw, [0.42, 0.26, -0.25, -0.41], 0.18, 0.08, 0.065, paint(0x3e4430));
    cab(yaw, 0.36, 0.6, 0.42, 0.28, 0.16, cm, true);
    add(yaw, RB(0.6, 0.06, 0.42, 0.01), cm, -0.25, 0.22, 0);
    for (const s of [-1, 1]) add(yaw, RB(0.92, 0.06, 0.016, 0.004), cm, -0.08, 0.2, s * 0.21);
    add(yaw, RB(0.16, 0.12, 0.42, 0.01), cm, 0.24, 0.27, 0);
    for (let i = 0; i < 4; i++) add(yaw, BX(0.005, 0.09, 0.3), dark(), 0.17 + i * 0.04, 0.27, 0);
    for (const [x, s] of [[0.32, 1], [0.32, -1], [-0.55, 1], [-0.55, -1]]) { rod(yaw, [x, 0.17, s * 0.15], [x, 0.01, s * 0.24], 0.012, dark(), false); add(yaw, CY(0.03, 0.03, 0.012, 10), dark(), x, 0.008, s * 0.24); }
    pitch.position.set(-0.55, 0.26, 0); pitch.rotation.z = 0.85;
    add(pitch, RB(0.92, 0.04, 0.5, 0.008), dark(), 0.46, -0.03, 0);
    rod(yaw, [0.05, 0.22, 0], [-0.2, 0.62, 0], 0.025, steel(), false);   // 유압 기둥
    for (const [y, z] of [[0.1, -0.1], [0.1, 0.1], [0.3, -0.1], [0.3, 0.1]]) {
      add(pitch, CY(0.092, 0.092, 0.9, 18), cm, 0.47, y, z, 0, 0, Math.PI / 2);
      for (const x of [0.08, 0.47, 0.86]) add(pitch, CY(0.097, 0.097, 0.025, 18), dark(), x, y, z, 0, 0, Math.PI / 2);
      add(pitch, CY(0.082, 0.082, 0.01, 18), white(), 0.922, y, z, 0, 0, Math.PI / 2);
    }
    muzzle.position.set(0.95, 0.2, 0);
  }
};

// ================= 적 (부카니스탄군: 짙은 회색 + 붉은 식별 띠) =================
export function makeEnemyHD(type) {
  const root = new THREE.Group();
  const body = new THREE.Group(); root.add(body);
  const spin = [];
  const B = ENEMIES[type];
  if (!B) return null;
  const hpY = B({ root, body, spin });
  return { root, body, spin, hpY };
}

// 전차 공통 (T-90 계열): 낮은 차체, 둥근 포탑 + 반응장갑, 긴 포, 적외선 교란등(붉은 눈), 연료통
function tank(g, boss) {
  const cm = camo('enemy', 2);
  blob(g, 1.0, 0.55);
  add(g, prism('t90h', [[-0.42, 0.07], [0.32, 0.07], [0.43, 0.14], [0.36, 0.2], [-0.42, 0.2], [-0.43, 0.13]], 0.28), cm);
  add(g, RB(0.84, 0.012, 0.42, 0.004), cm, -0.005, 0.2, 0);
  for (const s of [-1, 1]) {
    trackSet(g, { x0: -0.36, x1: 0.35, y: 0.1, r: 0.07, w: 0.07, n: 6, z: s * 0.175, wr: 0.045 });
    add(g, RB(0.66, 0.06, 0.012, 0.004), cm, 0.02, 0.165, s * 0.214);                         // 옆 스커트
    for (let i = 0; i < 6; i++) add(g, BX(0.1, 0.035, 0.008), rubber(), -0.26 + i * 0.11, 0.12, s * 0.216);
  }
  // 차체 앞 반응장갑(V자) + 뒤 연료 드럼
  for (let i = 0; i < 6; i++) add(g, RB(0.07, 0.016, 0.06, 0.003), cm, 0.36, 0.188, -0.15 + i * 0.06, 0, 0, -0.55);
  for (const s of [-1, 1]) add(g, CY(0.035, 0.035, 0.14, 12), paint(0x3a3c36), -0.46, 0.15, s * 0.08, Math.PI / 2, 0, 0);
  add(g, CY(0.012, 0.012, 0.1, 6), dark(), -0.42, 0.21, 0.15, 0, 0, Math.PI / 2);
  // 포탑
  const t = new THREE.Group(); t.position.set(-0.05, 0.2, 0); g.add(t);
  add(t, slab('t90t', [[0.16, -0.06], [0.16, 0.06], [0.08, 0.17], [-0.1, 0.18], [-0.22, 0.12], [-0.24, 0], [-0.22, -0.12], [-0.1, -0.18], [0.08, -0.17]], 0.075, 0.012), cm, 0, 0, 0);
  const tur = add(t, SP(0.17, 18, 0.5), cm, -0.04, 0.07, 0); tur.scale.set(1.1, 0.28, 1.0);
  add(t, RB(0.1, 0.06, 0.26, 0.015), cm, -0.25, 0.04, 0);
  // 포탑 앞 반응장갑 쐐기 (Kontakt-5 모양)
  for (const s of [-1, 1]) {
    add(t, prism('era', [[0, 0], [0.13, 0], [0.13, 0.03], [0, 0.07]], 0.12, 0.004), cm, 0.08, 0.02, s * 0.1, 0, s * 0.35, 0);
    add(t, RB(0.04, 0.025, 0.03, 0.006), redLamp(), 0.11, 0.09, s * 0.15);                    // 적외선 교란등 (붉은 눈)
    smokeLaunchers(t, 0.0, 0.07, s * 0.16, 4, s, dark());
  }
  add(t, CY(0.05, 0.055, 0.035, 14), cm, -0.05, 0.11, -0.07);
  add(t, CY(0.04, 0.04, 0.03, 14), cm, -0.06, 0.1, 0.08);
  tube(t, 0.006, 0.005, 0.12, steel(), -0.06, 0.135, 0.08);
  add(t, RB(0.05, 0.02, 0.02, 0.004), dark(), -0.06, 0.13, 0.08);
  for (const s of [-1, 1]) add(t, RB(0.16, 0.018, 0.006, 0.002), redM(), -0.08, 0.045, s * 0.168, 0, s * 0.12, 0);   // 붉은 식별 띠
  add(t, RB(0.05, 0.004, 0.05, 0.002), redM(), -0.15, 0.11, 0);
  if (boss) {
    // 보스: 쌍포 + 포탑 뒤 철망(새장) 장갑 + 큰 반응장갑
    for (let i = 0; i < 6; i++) add(t, BX(0.004, 0.11, 0.36), steel(), -0.22 - i * 0.025, 0.04, 0);
    add(t, BX(0.13, 0.004, 0.36), steel(), -0.285, 0.095, 0);
    for (const z of [-0.055, 0.055]) {
      tube(t, 0.02, 0.016, 0.62, pbr('egun', { color: 0x30322e, roughness: 0.5, metalness: 0.5 }), 0.13, 0.05, z);
      add(t, CY(0.026, 0.026, 0.12, 12), pbr('egun', {}), 0.35, 0.05, z, 0, 0, Math.PI / 2);
    }
    add(g, prism('dozer', [[0, 0], [0.05, 0], [0.09, 0.09], [0.05, 0.1]], 0.42, 0.006), steel(), 0.4, 0.04, 0);
    add(g, RB(0.012, 0.02, 0.4, 0.003), redM(), 0.475, 0.11, 0);
    antenna(t, -0.15, 0.08, 0.12, 0.3); antenna(t, -0.15, 0.08, -0.12, 0.3);
  } else {
    tube(t, 0.02, 0.016, 0.6, pbr('egun', { color: 0x30322e, roughness: 0.5, metalness: 0.5 }), 0.13, 0.05);
    add(t, CY(0.026, 0.026, 0.12, 12), pbr('egun', {}), 0.33, 0.05, 0, 0, 0, Math.PI / 2);
    antenna(t, -0.15, 0.08, 0.12, 0.26);
  }
}

const ENEMIES = {
  inf({ body }) {
    person(body, Object.assign({ pose: 'stand', kit: 'rifle' }, enemyKit()));
    blob(body, 0.25, 0.2);
    return 0.68;
  },
  // 차륜 장갑차 (BTR 계열): 배 모양 차체, 8바퀴, 소형 포탑 30mm
  apc({ body }) {
    const cm = camo('enemy', 2);
    blob(body, 0.95, 0.45);
    add(body, prism('btr', [[-0.4, 0.09], [0.28, 0.09], [0.42, 0.17], [0.3, 0.25], [-0.36, 0.25], [-0.41, 0.2]], 0.32), cm);
    add(body, RB(0.66, 0.012, 0.34, 0.004), cm, -0.04, 0.252, 0);
    for (const x of [-0.27, -0.12, 0.08, 0.23]) for (const s of [-1, 1]) wheel(body, x, 0.07, s * 0.16, 0.07, 0.05, paint(0x2f312d));
    for (const s of [-1, 1]) { add(body, BX(0.08, 0.06, 0.004), dark(), -0.02, 0.17, s * 0.162); add(body, BX(0.7, 0.025, 0.004), redM(), -0.03, 0.225, s * 0.162); }
    add(body, BX(0.004, 0.03, 0.2), glass(), 0.36, 0.22, 0, 0, 0, 0.9);
    for (const s of [-1, 1]) add(body, CY(0.012, 0.012, 0.01, 10), lamp(), 0.41, 0.16, s * 0.11, 0, 0, Math.PI / 2);
    // 포탑
    add(body, CY(0.075, 0.09, 0.07, 14), cm, 0.02, 0.29, 0);
    add(body, RB(0.06, 0.04, 0.06, 0.01), cm, 0.07, 0.31, 0);
    tube(body, 0.009, 0.008, 0.26, steel(), 0.1, 0.31, 0);
    tube(body, 0.006, 0.006, 0.09, steel(), 0.08, 0.3, 0.035);
    for (const s of [-1, 1]) smokeLaunchers(body, 0.02, 0.3, s * 0.07, 3, s, dark());
    add(body, CY(0.035, 0.035, 0.01, 12), cm, -0.2, 0.258, 0.08);
    add(body, CY(0.035, 0.035, 0.01, 12), cm, -0.2, 0.258, -0.08);
    antenna(body, -0.34, 0.25, 0.12, 0.24);
    return 0.72;
  },
  tank({ body }) { tank(body, false); return 0.72; },
  boss({ body }) {
    const g = new THREE.Group(); g.scale.setScalar(1.55); body.add(g);
    tank(g, true);
    return 1.05;
  },
  // 자폭 드론 (샤헤드 계열): 삼각 날개 + 끝 수직날개 + 뒤 프로펠러
  drone({ body, spin }) {
    body.position.y = 1.4;
    const m = paint(0x5a5c57, 0.6, 0.2);
    add(body, slab('shahed', [[0.14, 0], [-0.17, -0.2], [-0.2, -0.2], [-0.16, 0], [-0.2, 0.2], [-0.17, 0.2]], 0.012, 0.004), m, 0, -0.006, 0);
    add(body, CAP(0.026, 0.3), m, 0.0, 0.0, 0, 0, 0, Math.PI / 2);
    add(body, SP(0.026, 12), redM(), 0.175, 0, 0);
    for (const s of [-1, 1]) add(body, prism('sfin', [[-0.04, 0], [0.02, 0], [-0.01, 0.05], [-0.04, 0.05]], 0.006, 0.002), m, -0.165, -0.02, s * 0.2);
    add(body, CY(0.016, 0.022, 0.03, 10), dark(), -0.17, 0, 0, 0, 0, Math.PI / 2);
    const pr = new THREE.Group(); pr.position.set(-0.19, 0, 0); body.add(pr);
    const blade = add(pr, BX(0.004, 0.11, 0.012), dark(), 0, 0, 0); add(pr, BX(0.004, 0.012, 0.11), dark(), 0, 0, 0);
    blade.castShadow = false;
    spin.push([pr, 'x', 40]);
    add(body, RB(0.05, 0.004, 0.08, 0.002), redM(), -0.05, 0.003, 0.11);
    add(body, RB(0.05, 0.004, 0.08, 0.002), redM(), -0.05, 0.003, -0.11);
    return 1.75;
  },
  // 공격 헬기 (Mi-28 계열): 앞뒤 복좌 조종석, 짧은 날개 + 로켓 포드, 기관포, 5날 주회전익, 꼬리 회전익
  heli({ body, spin }) {
    body.position.y = 1.9;
    const cm = camo('enemy', 2.2);
    const f = add(body, CAP(0.11, 0.42), cm, 0.02, 0, 0, 0, 0, Math.PI / 2); f.scale.set(1.15, 1, 0.9);
    add(body, RB(0.3, 0.1, 0.16, 0.04), cm, -0.06, 0.08, 0);                                   // 엔진 덮개
    for (const s of [-1, 1]) add(body, CY(0.03, 0.03, 0.08, 10), dark(), -0.02, 0.1, s * 0.09, 0, 0, Math.PI / 2);
    // 복좌 조종석 유리 (계단형)
    add(body, RB(0.11, 0.07, 0.12, 0.02), glass(), 0.25, 0.06, 0);
    add(body, RB(0.11, 0.06, 0.12, 0.02), glass(), 0.15, 0.09, 0);
    add(body, CAP(0.05, 0.06), cm, 0.35, -0.02, 0, 0, 0, Math.PI / 2);
    // 기수 기관포 + 센서 구
    add(body, SP(0.035, 12), dark(), 0.38, -0.06, 0);
    add(body, CY(0.025, 0.025, 0.04, 10), dark(), 0.32, -0.1, 0);
    tube(body, 0.007, 0.006, 0.13, steel(), 0.32, -0.12, 0);
    // 꼬리
    add(body, CY(0.03, 0.06, 0.52, 10), cm, -0.46, 0.03, 0, 0, 0, Math.PI / 2 - 0.04);
    add(body, prism('hfin', [[-0.06, 0], [0.06, 0], [0.02, 0.17], [-0.05, 0.17]], 0.018, 0.004), cm, -0.7, 0.04, 0);
    add(body, RB(0.06, 0.008, 0.2, 0.003), cm, -0.62, 0.04, 0);
    add(body, RB(0.04, 0.006, 0.06, 0.002), redM(), -0.68, 0.16, 0.012);
    // 짧은 날개 + 로켓 포드 + 미사일
    add(body, RB(0.1, 0.012, 0.5, 0.004), cm, -0.02, -0.04, 0, 0.12);
    for (const s of [-1, 1]) {
      add(body, CY(0.03, 0.03, 0.14, 12), paint(0x41433e), -0.02, -0.08, s * 0.16, 0, 0, Math.PI / 2);
      add(body, CY(0.022, 0.022, 0.006, 12), redM(), 0.052, -0.08, s * 0.16, 0, 0, Math.PI / 2);
      for (const dz of [-0.02, 0.02]) tube(body, 0.009, 0.009, 0.14, paint(0x6a6d66), -0.08, -0.07, s * 0.23 + dz);
      add(body, RB(0.1, 0.04, 0.012, 0.004), redM(), -0.18, 0.05, s * 0.072);                // 붉은 식별 띠
    }
    // 바퀴
    for (const s of [-1, 1]) { rod(body, [0.2, -0.08, s * 0.06], [0.2, -0.15, s * 0.07], 0.006, dark(), false); add(body, CY(0.02, 0.02, 0.012, 10), rubber(), 0.2, -0.16, s * 0.075, Math.PI / 2, 0, 0); }
    // 주회전익 5날
    add(body, CY(0.012, 0.015, 0.08, 8), dark(), 0.0, 0.17, 0);
    const rot = new THREE.Group(); rot.position.set(0.0, 0.21, 0); body.add(rot);
    add(rot, CY(0.03, 0.03, 0.025, 10), dark(), 0, 0, 0);
    for (let i = 0; i < 5; i++) { const a = i / 5 * Math.PI * 2; noShadow(add(rot, BX(0.6, 0.006, 0.04), pbr('blade', { color: 0x1e1f1c, roughness: 0.5, metalness: 0.3 }), Math.cos(a) * 0.3, 0, -Math.sin(a) * 0.3, 0, a, -0.02)); }
    spin.push([rot, 'y', 22]);
    const tr = new THREE.Group(); tr.position.set(-0.72, 0.14, 0.022); body.add(tr);
    for (let i = 0; i < 4; i++) noShadow(add(tr, BX(0.012, 0.14, 0.003), dark(), 0, 0, 0, 0, 0, i * Math.PI / 4));
    spin.push([tr, 'z', 30]);
    return 2.3;
  }
};
