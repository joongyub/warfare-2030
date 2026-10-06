// 도시 풍경 만들기 (v4): 전투 구역(공원) + 굽이 도로 + 주변 도시·강·산·랜드마크
// 스테이지 파일의 route / blockers / river / landmarks 를 읽어서 만듦
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import {
  makeRng, grassTex, cityGroundTex, sidewalkTex, roadStripTex, ghostRoadTex, aptFacadeTex, aptGableTex,
  glassTex, goldGlassTex, fieldTex, waterTex, lawnStripeTex, dirtTex, snowTex
} from './textures.js';

// 도시 테마 → 전투 구역 바닥 무늬
import { realLawn, realRoad, realWalk, realConcrete } from './textures_real.js';
// 반복 횟수를 따로 주려고 복제 (그림은 공유)
function rep(t, x, y) { const c = t.clone(); c.needsUpdate = true; c.repeat.set(x, y); return c; }
const GROUNDS = { hangangPark: lawnStripeTex, grass: grassTex, dirt: dirtTex, snow: snowTex };
import { makeBase, mat } from './models.js';

const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const ROAD_W = 1.9;          // 도로 폭
export const ROAD_CLEAR = 1.75; // 무기 중심이 도로 중심선에서 떨어져야 하는 거리

// ---------- 같은 재질끼리 모아서 한 번에 그리는 통 ----------
class Buckets {
  constructor() { this.map = new Map(); }
  push(material, geo) {
    if (!this.map.has(material)) this.map.set(material, []);
    for (const n of Object.keys(geo.attributes)) if (!['position', 'normal', 'uv'].includes(n)) geo.deleteAttribute(n);
    if (!geo.attributes.uv) geo.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(geo.attributes.position.count * 2), 2));
    this.map.get(material).push(geo.index ? geo.toNonIndexed() : geo);
  }
  build(parent, shadow = true) {
    for (const [m, geos] of this.map) {
      const mesh = new THREE.Mesh(mergeGeometries(geos, false), m);
      mesh.castShadow = shadow; mesh.receiveShadow = true;
      parent.add(mesh);
    }
    this.map.clear();
  }
}

// 벽 4면(텍스처 반복은 크기에 비례) + 지붕
function boxWalls(B, x, y, z, w, h, d, ry, wallM, roofM, tu = 1, tv = 1, gableM) {
  const faces = [
    [w, 0, 0, d / 2, 0, false], [w, Math.PI, 0, -d / 2, 0, false],
    [d, Math.PI / 2, w / 2, 0, 0, true], [d, -Math.PI / 2, -w / 2, 0, 0, true]
  ];
  const rot = new THREE.Matrix4().makeRotationY(ry), pos = new THREE.Matrix4().makeTranslation(x, y, z);
  for (const [fw, r, ox, oz, , gable] of faces) {
    const g = new THREE.PlaneGeometry(fw, h);
    const uv = g.attributes.uv;
    const useM = gable && gableM ? gableM : wallM;
    if (!(gable && gableM)) for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * fw / tu, uv.getY(i) * h / tv);
    g.rotateY(r); g.translate(ox, h / 2, oz);
    g.applyMatrix4(rot); g.applyMatrix4(pos);
    B.push(useM, g);
  }
  if (roofM) {
    const g = new THREE.PlaneGeometry(w, d); g.rotateX(-Math.PI / 2); g.translate(0, h, 0);
    g.applyMatrix4(rot); g.applyMatrix4(pos);
    B.push(roofM, g);
  }
}

const repMat = (tex, o = {}) => { const t = tex.clone(); t.needsUpdate = true; t.wrapS = t.wrapT = THREE.RepeatWrapping; return new THREE.MeshStandardMaterial(Object.assign({ map: t, roughness: 0.85 }, o)); };

// ---------- 전투 구역 안 랜드마크 건물 (그 자리는 무기 배치 불가) ----------
function hipRoof(w, d, h) {
  // 한옥·궁궐식 우진각 지붕: 바닥 사각형 w×d, 용마루 길이 w-d
  const r = Math.max(0.05, (w - d) / 2), x = w / 2, z = d / 2;
  const v = [
    -x, 0, z, x, 0, z, r, h, 0, -x, 0, z, r, h, 0, -r, h, 0,      // 앞
    x, 0, -z, -x, 0, -z, -r, h, 0, x, 0, -z, -r, h, 0, r, h, 0,   // 뒤
    x, 0, z, x, 0, -z, r, h, 0,                                   // 오른쪽
    -x, 0, -z, -x, 0, z, -r, h, 0                                 // 왼쪽
  ];
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(v, 3)); g.computeVertexNormals();
  return g;
}

function miniLandmark(k) {
  const G = new THREE.Group(); G.position.set(k.x, 0, k.z); G.rotation.y = k.ry || 0;
  const add = (geo, m, x = 0, y = 0, z = 0) => { const o = new THREE.Mesh(geo, m); o.position.set(x, y, z); o.castShadow = o.receiveShadow = true; G.add(o); return o; };
  const box = (w, h, d, m, x = 0, y = 0, z = 0) => add(new THREE.BoxGeometry(w, h, d), m, x, y + h / 2, z);
  const roof = (w, d, h, m, y) => add(hipRoof(w, d, h), m, 0, y, 0);
  const M = {
    plaza: mat(0xd9d2c2), stone: mat(0xbdb5a3), granite: mat(0x9a968e), red: mat(0xa3362c), green: mat(0x3e8b78),
    tile: mat(0x3b3f45, { side: THREE.DoubleSide }), blueTile: mat(0x2c5ea8, { side: THREE.DoubleSide, roughness: 0.5 }),
    white: mat(0xf1efe8), dark: new THREE.MeshBasicMaterial({ color: 0x141414 }), bronze: mat(0x5f6a4a, { metalness: 0.4, roughness: 0.5 }),
    silver: mat(0xc9ced4, { metalness: 0.6, roughness: 0.3 }), glass: mat(0x86b9dc, { metalness: 0.3, roughness: 0.2 }),
    lawn: mat(0x6fa64a), water: mat(0x5aa7d6, { roughness: 0.2 }), hill: mat(0x54803a, { roughness: 1 })
  };
  // 바닥 광장 (점유 표시)
  const pl = new THREE.Mesh(new THREE.BoxGeometry(k.w, 0.06, k.d), M.plaza); pl.position.y = 0.03; pl.receiveShadow = true; G.add(pl);
  switch (k.id) {
    case 'namdaemun': { // 숭례문: 돌 축대 + 무지개 문 + 2층 누각
      box(3.8, 1.0, 2.0, M.stone);
      box(0.9, 0.62, 2.04, M.dark);
      add(new THREE.CylinderGeometry(0.45, 0.45, 2.04, 14, 1, false, 0, Math.PI).rotateX(Math.PI / 2).rotateZ(Math.PI / 2), M.dark, 0, 0.62, 0);
      box(2.8, 0.5, 1.3, M.red, 0, 1.0); box(2.9, 0.08, 1.4, M.green, 0, 1.46);
      roof(3.7, 2.1, 0.45, M.tile, 1.5);
      box(2.2, 0.38, 0.95, M.red, 0, 1.8); box(2.3, 0.07, 1.05, M.green, 0, 2.16);
      roof(3.1, 1.8, 0.6, M.tile, 2.2);
      break;
    }
    case 'gyeongbok': { // 경복궁 근정전: 2단 월대 + 중층 전각
      box(4.2, 0.28, 3.0, M.stone); box(3.6, 0.28, 2.4, M.stone, 0, 0.28);
      box(0.7, 0.4, 0.5, M.granite, 0, 0, 1.6);
      box(2.8, 0.85, 1.4, M.red, 0, 0.56); box(2.9, 0.08, 1.5, M.green, 0, 1.38);
      roof(3.8, 2.2, 0.45, M.tile, 1.44);
      box(2.2, 0.4, 1.0, M.red, 0, 1.78); box(2.3, 0.07, 1.1, M.green, 0, 2.15);
      roof(3.3, 1.9, 0.65, M.tile, 2.2);
      break;
    }
    case 'cheongwadae': { // 청와대: 흰 본관 + 푸른 기와 지붕 + 앞 잔디
      box(k.w - 0.2, 0.04, 1.0, M.lawn, 0, 0.06, 0.8);
      box(3.4, 0.75, 1.3, M.white, 0, 0.06, -0.3); box(1.3, 0.95, 1.4, M.white, 0, 0.06, -0.3);
      roof(3.9, 1.8, 0.5, M.blueTile, 0.8); add(hipRoof(1.7, 1.8, 0.75), M.blueTile, 0, 1.0, -0.3).position.z = -0.3;
      break;
    }
    case 'ntower': { // 남산 N서울타워 (작은 남산 위)
      add(new THREE.SphereGeometry(1, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), M.hill).scale.set(1.5, 0.8, 1.3);
      const T = 0.8;
      add(new THREE.CylinderGeometry(0.28, 0.36, 0.3, 14), M.granite, 0, T + 0.15);
      add(new THREE.CylinderGeometry(0.11, 0.15, 2.6, 12), M.white, 0, T + 1.6);
      add(new THREE.CylinderGeometry(0.36, 0.26, 0.2, 16), M.white, 0, T + 2.9);
      add(new THREE.CylinderGeometry(0.4, 0.36, 0.3, 16), M.glass, 0, T + 3.12);
      add(new THREE.CylinderGeometry(0.3, 0.4, 0.16, 16), M.white, 0, T + 3.34);
      add(new THREE.CylinderGeometry(0.05, 0.09, 0.9, 8), M.white, 0, T + 3.85);
      add(new THREE.SphereGeometry(0.07, 8, 6), new THREE.MeshBasicMaterial({ color: 0xff3a2e }), 0, T + 4.33);
      break;
    }
    case 'yisunsin': { // 광화문광장 이순신 장군 동상 + 분수
      add(new THREE.CylinderGeometry(0.95, 0.95, 0.08, 24), M.water, 0, 0.1);
      box(0.7, 1.3, 0.7, M.granite, 0, 0.06);
      add(new THREE.CylinderGeometry(0.14, 0.22, 0.7, 10), M.bronze, 0, 1.72);
      add(new THREE.SphereGeometry(0.12, 10, 8), M.bronze, 0, 2.17);
      add(new THREE.CylinderGeometry(0.03, 0.03, 0.75, 6), M.bronze, 0.18, 1.7);
      break;
    }
    case 'cityhall': { // 서울시청: 앞의 옛 청사 + 뒤의 물결 유리 신청사
      box(3.4, 1.5, 1.2, M.glass, 0, 0.06, -0.5);
      add(new THREE.BoxGeometry(3.5, 0.18, 1.2), M.glass, 0, 1.6, 0.05).rotation.x = 0.55;
      box(1.8, 0.75, 0.8, M.stone, 0, 0.06, 0.75); box(0.45, 0.4, 0.45, M.stone, 0, 0.8, 0.75);
      box(k.w - 0.4, 0.04, 0.5, M.lawn, 0, 0.06, 1.25);
      break;
    }
    case 'ddp': { // 동대문디자인플라자: 은빛 곡면 건물
      add(new THREE.SphereGeometry(1, 36, 14, 0, Math.PI * 2, 0, Math.PI / 2), M.silver).scale.set(2.2, 0.85, 1.35);
      add(new THREE.SphereGeometry(1, 24, 10, 0, Math.PI * 2, 0, Math.PI / 2), M.silver, 1.2, 0, 0.35).scale.set(1.1, 0.6, 0.8);
      break;
    }
  }
  return G;
}

// ---------- 도로 띠(곡선) ----------
function ribbon(samples, width, y, texLen) {
  const n = samples.length, pos = new Float32Array(n * 6), uv = new Float32Array(n * 4), idx = [];
  for (let i = 0; i < n; i++) {
    const p = samples[i].p, q = samples[Math.min(n - 1, i + 1)].p, o = samples[Math.max(0, i - 1)].p;
    const dx = q.x - o.x, dz = q.z - o.z, l = Math.hypot(dx, dz) || 1;
    const nx = -dz / l * width / 2, nz = dx / l * width / 2;
    pos.set([p.x + nx, y, p.z + nz, p.x - nx, y, p.z - nz], i * 6);
    const v = samples[i].cum / texLen;
    uv.set([0, v, 1, v], i * 4);
    if (i < n - 1) { const a = i * 2; idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  g.setIndex(idx); g.computeVertexNormals();
  return g;
}

// 도로 양옆 보도 띠 (중심선에서 a~b 떨어진 두 줄)
function walkStrips(samples, a, b, y, texLen) {
  const geos = [];
  for (const sd of [1, -1]) {
    const n = samples.length, pos = new Float32Array(n * 6), uv = new Float32Array(n * 4), idx = [];
    for (let i = 0; i < n; i++) {
      const p = samples[i].p, q = samples[Math.min(n - 1, i + 1)].p, o = samples[Math.max(0, i - 1)].p;
      const dx = q.x - o.x, dz = q.z - o.z, l = Math.hypot(dx, dz) || 1, nx = -dz / l * sd, nz = dx / l * sd;
      pos.set([p.x + nx * b, y, p.z + nz * b, p.x + nx * a, y, p.z + nz * a], i * 6);
      const v = samples[i].cum / texLen; uv.set([0, v, 1, v], i * 4);
      if (i < n - 1) { const k = i * 2; idx.push(...(sd > 0 ? [k, k + 2, k + 1, k + 1, k + 2, k + 3] : [k, k + 1, k + 2, k + 1, k + 3, k + 2])); }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    g.setIndex(idx); g.computeVertexNormals(); geos.push(g.toNonIndexed());
  }
  return mergeGeometries(geos, false);
}

// 도로 옆 세로 벽(연석 옆면): 중심선에서 off 만큼 떨어진 곳에 y0~y1 높이
function sideWall(samples, off, y0, y1) {
  const n = samples.length, pos = new Float32Array(n * 6), idx = [];
  for (let i = 0; i < n; i++) {
    const p = samples[i].p, q = samples[Math.min(n - 1, i + 1)].p, o = samples[Math.max(0, i - 1)].p;
    const dx = q.x - o.x, dz = q.z - o.z, l = Math.hypot(dx, dz) || 1;
    const x = p.x - dz / l * off, z = p.z + dx / l * off;
    pos.set([x, y1, z, x, y0, z], i * 6);
    if (i < n - 1) { const a = i * 2; idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setIndex(idx); g.computeVertexNormals();
  return g;
}

// 가로등 한 줄 (도로 옆 배치 금지 구역 안쪽에만 세움 → 무기 자리를 막지 않음)
function lampRow(samples, len, off) {
  const geos = [], step = 6.5;
  for (let d = 3, k = 0; d < len - 2; d += step, k++) {
    const i = samples.findIndex((s) => s.cum >= d); if (i < 1) continue;
    const p = samples[i].p, q = samples[Math.min(samples.length - 1, i + 1)].p, o = samples[i - 1].p;
    const dx = q.x - o.x, dz = q.z - o.z, l = Math.hypot(dx, dz) || 1, sd = k % 2 ? 1 : -1;
    const nx = -dz / l * sd, nz = dx / l * sd;
    const x = p.x + nx * off, z = p.z + nz * off;
    const pole = new THREE.CylinderGeometry(0.035, 0.05, 1.5, 6); pole.translate(x, 0.75 + 0.1, z);
    const arm = new THREE.BoxGeometry(0.05, 0.05, 0.42); arm.rotateY(Math.atan2(-nx, -nz)); arm.translate(x - nx * 0.2, 1.58, z - nz * 0.2);
    const head = new THREE.BoxGeometry(0.2, 0.07, 0.12); head.rotateY(Math.atan2(-nx, -nz)); head.translate(x - nx * 0.4, 1.55, z - nz * 0.4);
    geos.push(pole, arm, head);
  }
  return geos.length ? mergeGeometries(geos.map((g) => g.toNonIndexed()), false) : null;
}

// 직각 도로: 꺾이는 곳만 작은 반지름으로 둥글린 직선 길
function samplePoly(pts, r = 1.6) {
  const P = pts.map(([x, z]) => V(x, 0, z)), path = [P[0]];
  for (let i = 1; i < P.length - 1; i++) {
    const a = P[i - 1], b = P[i], c = P[i + 1];
    const u = a.clone().sub(b).normalize(), w = c.clone().sub(b).normalize();
    const p0 = b.clone().addScaledVector(u, r), p1 = b.clone().addScaledVector(w, r);
    for (let k = 0; k <= 8; k++) { const t = k / 8; path.push(p0.clone().multiplyScalar((1 - t) ** 2).addScaledVector(b, 2 * t * (1 - t)).addScaledVector(p1, t * t)); }
  }
  path.push(P[P.length - 1]);
  const samples = [];
  let cum = 0;
  for (let i = 0; i < path.length - 1; i++) {
    const a = path[i], b = path[i + 1], L = a.distanceTo(b), n = Math.max(1, Math.ceil(L / 0.25));
    for (let k = 0; k < n; k++) { samples.push({ p: a.clone().lerp(b, k / n), cum: cum + L * k / n }); }
    cum += L;
  }
  samples.push({ p: path[path.length - 1].clone(), cum });
  return { samples, len: cum };
}

function sampleCurve(pts) {
  const curve = new THREE.CatmullRomCurve3(pts.map(([x, z]) => V(x, 0, z)), false, 'centripetal');
  const len = curve.getLength(), n = Math.max(8, Math.ceil(len / 0.25));
  const samples = [];
  let cum = 0, prev = null;
  for (let i = 0; i <= n; i++) {
    const p = curve.getPointAt(i / n);
    if (prev) cum += p.distanceTo(prev);
    samples.push({ p, cum }); prev = p;
  }
  return { samples, len: cum };
}

export class City {
  constructor(scene, stage) {
    this.scene = scene;
    this.S = stage;
    this.group = new THREE.Group(); scene.add(this.group);
    this.anim = [];
    this.labels = [];
    this.rnd = makeRng(stage.seed);
    this.mats();
    this.buildRoute();
    this.buildGround();
    this.buildRiver();
    this.buildCity();
    this.buildLandmarks();
    this.buildBattleDecor();
    this.buildGateBase();
    this.buildTrees();
  }

  mats() {
    this.M = {
      apt: [0, 1, 2].map((v) => repMat(aptFacadeTex(v), { roughness: 0.8, emissive: 0x262626 })),
      glass: [0, 1, 2, 3].map((v) => repMat(glassTex(v), { roughness: 0.4, metalness: 0.05, color: 0xe8f0f8 })),
      gold: repMat(goldGlassTex(), { roughness: 0.35, metalness: 0.1 }),
      roof: mat(0xb9bcc0), roof2: mat(0x8e9298), roofG: mat(0x7d9a6a),
      gable: [101, 102, 103, 104, 105, 106, 107, 108, 109, 110].map((n, i) => new THREE.MeshStandardMaterial({ map: aptGableTex(n, i % 3), roughness: 0.8 }))
    };
  }

  // ---------- 도로 ----------
  buildRoute() {
    const S = this.S;
    this.steps = S.route.map((st) => {
      const opts = (st.choice || [st]).map((o) => Object.assign({ id: o.id, pts: o.pts }, o.sharp ? samplePoly(o.pts) : sampleCurve(o.pts)));
      return { opts, choice: !!st.choice, open: 0 };
    });
    const RR = realRoad(), RW = realWalk();
    const roadM = new THREE.MeshStandardMaterial({ map: RR.map, bumpMap: RR.bump, bumpScale: 1.2, roughness: 0.88, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
    const walkM = new THREE.MeshStandardMaterial({ map: RW.map, bumpMap: RW.bump, bumpScale: 1.5, roughness: 0.92, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 });
    const ghostM = new THREE.MeshBasicMaterial({ map: ghostRoadTex(), transparent: true, depthWrite: false });
    const curbM = new THREE.MeshStandardMaterial({ color: 0xb9b6ae, roughness: 0.9, side: THREE.DoubleSide });
    const lampM = mat(0x40454c);
    this.ghostM = ghostM; this.roadM = roadM; this.walkM = walkM;
    this.roadGroup = new THREE.Group(); this.group.add(this.roadGroup);
    for (const st of this.steps) st.opts.forEach((o, i) => {
      o.road = new THREE.Mesh(ribbon(o.samples, ROAD_W, 0.03 + i * 0.004, 3.2), roadM);
      // 보도는 도로보다 한 단 높게(연석) → 입체감
      o.walk = new THREE.Mesh(walkStrips(o.samples, ROAD_W / 2, (ROAD_W + 0.9) / 2, 0.13, 2.4), walkM);
      o.road.receiveShadow = o.walk.receiveShadow = true;
      for (const off of [ROAD_W / 2, -ROAD_W / 2]) o.walk.add(new THREE.Mesh(sideWall(o.samples, off, 0.02, 0.13), curbM));
      for (const off of [(ROAD_W + 0.9) / 2, -(ROAD_W + 0.9) / 2]) { const w = new THREE.Mesh(sideWall(o.samples, off, 0, 0.13), curbM); w.castShadow = true; o.walk.add(w); }
      const lamps = lampRow(o.samples, o.len, ROAD_W / 2 + 0.28);
      if (lamps) { const lm = new THREE.Mesh(lamps, lampM); lm.castShadow = true; o.walk.add(lm); }
      o.ghost = new THREE.Mesh(ribbon(o.samples, ROAD_W, 0.05, 1.6), ghostM);
      this.roadGroup.add(o.road, o.walk, o.ghost);
    });
    // 빨간 진행 화살표 (활성 경로를 따라 흐름)
    const sh = new THREE.Shape();
    sh.moveTo(-0.32, 0.36); sh.lineTo(0.18, 0); sh.lineTo(-0.32, -0.36); sh.lineTo(-0.1, -0.36); sh.lineTo(0.4, 0); sh.lineTo(-0.1, 0.36); sh.closePath();
    const cg = new THREE.ShapeGeometry(sh); cg.rotateX(-Math.PI / 2);
    this.chevM = new THREE.MeshBasicMaterial({ color: 0xd8473c, transparent: true, opacity: 0.5, depthWrite: false });
    this.chev = new THREE.InstancedMesh(cg, this.chevM, 600);
    this.chev.frustumCulled = false;
    this.group.add(this.chev);
    // 지름길 막는 바리케이드
    this.barricades = new THREE.Group(); this.group.add(this.barricades);
    this.refreshRoads();
  }

  // 현재 열린 길 목록
  activeOpts() { return this.steps.map((st) => st.opts[st.open]); }
  routeLength() { return this.activeOpts().reduce((s, o) => s + o.len, 0); }

  refreshRoads() {
    for (const st of this.steps) st.opts.forEach((o, i) => {
      const built = i === 0 || st.open === i;
      o.road.visible = o.walk.visible = built;
      o.ghost.visible = !built;
    });
    this.barricades.clear();
    for (const st of this.steps) {
      if (!st.choice || st.open === 0) continue;
      const s = st.opts[0].samples, mid = s[Math.floor(s.length / 2)], nx = s[Math.floor(s.length / 2) + 1];
      const g = new THREE.Group();
      for (let k = -1; k <= 1; k++) {
        const b = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.42, 0.6), mat(k % 2 ? 0xd8d8d0 : 0xd8402e));
        b.position.set(0, 0.21, k * 0.62); b.castShadow = true; g.add(b);
      }
      g.position.set(mid.p.x, 0, mid.p.z);
      g.rotation.y = -Math.atan2(nx.p.z - mid.p.z, nx.p.x - mid.p.x);
      this.barricades.add(g);
    }
    // 화살표 위치 계산
    this.chevPts = [];
    let carry = 0;
    for (const o of this.activeOpts()) {
      const s = o.samples;
      for (let d = carry; d < o.len; d += 2.2) {
        let k = 0; while (k < s.length - 2 && s[k + 1].cum < d) k++;
        const a = s[k], b = s[k + 1], f = (d - a.cum) / Math.max(1e-6, b.cum - a.cum);
        this.chevPts.push({ x: a.p.x + (b.p.x - a.p.x) * f, z: a.p.z + (b.p.z - a.p.z) * f, ang: Math.atan2(b.p.z - a.p.z, b.p.x - a.p.x) });
      }
      carry = (carry - o.len) % 2.2; if (carry < 0) carry += 2.2;
    }
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), one = V(1, 1, 1);
    this.chev.count = Math.min(600, this.chevPts.length);
    for (let i = 0; i < this.chev.count; i++) {
      const c = this.chevPts[i];
      q.setFromAxisAngle(V(0, 1, 0), -c.ang);
      m.compose(V(c.x, 0.1, c.z), q, V(1.25, 1, 1.25));
      this.chev.setMatrixAt(i, m);
    }
    this.chev.instanceMatrix.needsUpdate = true;
  }

  openDetour(stepIdx) { const st = this.steps[stepIdx]; if (!st || !st.choice || st.open) return false; st.open = 1; this.refreshRoads(); return true; }
  resetRoutes() { for (const st of this.steps) st.open = 0; this.refreshRoads(); }

  // 가장 가까운 닫힌 우회로 (클릭 판정)
  detourNear(p, maxD = 2.2) {
    let best = null, bd = maxD;
    this.steps.forEach((st, i) => {
      if (!st.choice || st.open) return;
      for (const s of st.opts[1].samples) { const d = Math.hypot(s.p.x - p.x, s.p.z - p.z); if (d < bd) { bd = d; best = i; } }
    });
    return best;
  }

  // 도로(우회로 예정지 포함) 중심선까지 최소 거리
  roadDist(x, z) {
    let best = 1e9;
    for (const st of this.steps) for (const o of st.opts) {
      const s = o.samples;
      for (let i = 0; i < s.length; i += 2) { const d = (s[i].p.x - x) ** 2 + (s[i].p.z - z) ** 2; if (d < best) best = d; }
    }
    return Math.sqrt(best);
  }

  // 무기를 놓을 수 없으면 이유를, 놓을 수 있으면 null
  blockReason(x, z) {
    const b = this.S.bounds;
    if (x < b.x0 + 0.5 || x > b.x1 - 0.5 || z < b.z0 + 0.5 || z > b.z1 - 0.5) return '작전 구역 밖';
    if (this.roadDist(x, z) < ROAD_CLEAR) return '도로 배치 불가';
    for (const k of this.S.blockers) {
      if (k.kind === 'pond') { if (((x - k.x) / (k.rx + 0.4)) ** 2 + ((z - k.z) / (k.rz + 0.4)) ** 2 < 1) return '연못 배치 불가'; }
      else if (Math.abs(x - k.x) < k.w / 2 + 0.6 && Math.abs(z - k.z) < k.d / 2 + 0.6) return k.label + ' 자리 배치 불가';
    }
    if (Math.hypot(x - this.base.x, z - this.base.z) < 2.2) return '지휘부 배치 불가';
    return null;
  }

  // ---------- 땅 ----------
  buildGround() {
    const S = this.S, b = S.bounds;
    const RC = realConcrete();
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(520, 520), new THREE.MeshStandardMaterial({ map: rep(RC.map, 90, 90), bumpMap: rep(RC.bump, 90, 90), roughness: 0.95 }));
    ground.rotation.x = -Math.PI / 2; ground.position.y = -0.02; ground.receiveShadow = true;
    this.group.add(ground);
    // 전투 구역 = 화면 전체를 채우는 깨끗한 배치 공간 (도시 테마 바닥)
    const W = b.x1 - b.x0, H = b.z1 - b.z0, th = S.theme || {};
    let parkM;
    if (th.ground === 'hangangPark' || !th.ground) { const L = realLawn(); parkM = new THREE.MeshStandardMaterial({ map: rep(L.map, W / 14, H / 14), bumpMap: rep(L.bump, W / 14, H / 14), bumpScale: 2, roughness: 0.97 }); }
    else { const gt = GROUNDS[th.ground]().clone(); gt.needsUpdate = true; gt.wrapS = gt.wrapT = THREE.RepeatWrapping; gt.repeat.set(W / 8, H / 8); parkM = new THREE.MeshStandardMaterial({ map: gt, roughness: 1 }); }
    const park = new THREE.Mesh(new THREE.PlaneGeometry(W, H), parkM);
    park.rotation.x = -Math.PI / 2; park.position.set((b.x0 + b.x1) / 2, 0.005, (b.z0 + b.z1) / 2); park.receiveShadow = true;
    this.group.add(park);
    // 구역 테두리: 돌담 + 바깥쪽 산울타리 (입체감, 배치 공간 밖)
    const B = new Buckets();
    const edge = mat(th.edge || 0xbdb8ac), hedge = mat(th.hedge || 0x4c7a34, { roughness: 1 });
    const cx = (b.x0 + b.x1) / 2, cz = (b.z0 + b.z1) / 2;
    for (const [x, z, w, d, ox, oz] of [[cx, b.z0, W + 0.7, 0.35, 0, -1], [cx, b.z1, W + 0.7, 0.35, 0, 1], [b.x0, cz, 0.35, H + 0.7, -1, 0], [b.x1, cz, 0.35, H + 0.7, 1, 0]]) {
      const g = new THREE.BoxGeometry(w, 0.32, d); g.translate(x, 0.16, z); B.push(edge, g);
      const h = new THREE.BoxGeometry(w + (ox ? 0 : 1.2), 0.55, d + (oz ? 0 : 1.2)); h.translate(x + ox * 0.55, 0.27, z + oz * 0.55); B.push(hedge, h);
    }
    B.build(this.group);
  }

  // ---------- 강 ----------
  buildRiver() {
    const R = this.S.river; if (!R) return;
    const z0 = R.z - R.w / 2, z1 = R.z + R.w / 2;
    const wt = waterTex().clone(); wt.needsUpdate = true; wt.wrapS = wt.wrapT = THREE.RepeatWrapping; wt.repeat.set(60, 2);
    const water = new THREE.Mesh(new THREE.PlaneGeometry(520, R.w), new THREE.MeshStandardMaterial({ map: wt, color: 0x9ed0f0, roughness: 0.25, metalness: 0.2 }));
    water.rotation.x = -Math.PI / 2; water.position.set(0, 0.003, R.z); water.receiveShadow = true;
    this.group.add(water);
    this.anim.push((dt) => { wt.offset.x += dt * 0.01; wt.offset.y += dt * 0.004; });
    // 둔치(한강공원) + 경사 제방
    const gt = grassTex().clone(); gt.needsUpdate = true; gt.wrapS = gt.wrapT = THREE.RepeatWrapping; gt.repeat.set(80, 1);
    const gm = new THREE.MeshStandardMaterial({ map: gt, roughness: 1 });
    for (const [zc, w] of [[z0 - 1.0, 2.2], [z1 + 1.0, 2.2]]) {
      const p = new THREE.Mesh(new THREE.PlaneGeometry(520, w), gm); p.rotation.x = -Math.PI / 2; p.position.set(0, 0.004, zc); p.receiveShadow = true; this.group.add(p);
    }
    const bank = mat(0xa9a69c);
    for (const zc of [z0, z1]) { const m = new THREE.Mesh(new THREE.PlaneGeometry(520, 0.35), bank); m.rotation.x = -Math.PI / 2; m.position.set(0, 0.006, zc); this.group.add(m); }
    // 자전거 길
    const path = new THREE.Mesh(new THREE.PlaneGeometry(520, 0.35), mat(0xb5715a)); path.rotation.x = -Math.PI / 2; path.position.set(0, 0.008, z0 - 0.9); this.group.add(path);
    // 다리 3개 (각각 모양이 다름)
    const B = new Buckets();
    const deckM = mat(0x8c8f93), pierM = mat(0xb4b2aa), redM = mat(0xc8463a), blueM = mat(0x3a6fb5), railM = mat(0xe8e8e8);
    const bridges = [[-22, 'arch', blueM], [4, 'plain', null], [30, 'truss', redM]];
    for (const [bx, kind, accent] of bridges) {
      const len = R.w + 2.8, zc = R.z;
      const d = new THREE.BoxGeometry(2.6, 0.3, len); d.translate(bx, 0.35, zc); B.push(deckM, d);
      const rd = new THREE.PlaneGeometry(2.2, len); rd.rotateX(-Math.PI / 2); rd.translate(bx, 0.505, zc); B.push(mat(0x55585d), rd);
      for (const s of [-1, 1]) { const r = new THREE.BoxGeometry(0.08, 0.16, len); r.translate(bx + s * 1.25, 0.58, zc); B.push(railM, r); }
      for (let z = z0 + 0.5; z <= z1 - 0.5; z += 1.75) { const p = new THREE.BoxGeometry(1.6, 0.9, 0.5); p.translate(bx, -0.15, z); B.push(pierM, p); }
      if (kind === 'arch') {
        for (const s of [-1, 1]) for (let i = 0; i < 16; i++) {
          const a0 = i / 16 * Math.PI, a1 = (i + 1) / 16 * Math.PI;
          const p0 = V(bx + s * 1.25, 0.5 + Math.sin(a0) * 2.6, zc - Math.cos(a0) * (R.w / 2)), p1 = V(bx + s * 1.25, 0.5 + Math.sin(a1) * 2.6, zc - Math.cos(a1) * (R.w / 2));
          const g = new THREE.BoxGeometry(0.16, 0.16, p0.distanceTo(p1) + 0.05);
          g.lookAt(p1.clone().sub(p0)); g.translate((p0.x + p1.x) / 2, (p0.y + p1.y) / 2, (p0.z + p1.z) / 2); B.push(accent, g);
          if (i % 2 === 0 && i > 0) { const h = Math.sin(a0) * 2.6; const c = new THREE.BoxGeometry(0.05, h, 0.05); c.translate(bx + s * 1.25, 0.5 + h / 2, p0.z); B.push(accent, c); }
        }
      } else if (kind === 'truss') {
        for (const s of [-1, 1]) {
          const top = new THREE.BoxGeometry(0.14, 0.14, len - 3); top.translate(bx + s * 1.25, 1.7, zc); B.push(accent, top);
          for (let z = zc - (len - 3) / 2; z < zc + (len - 3) / 2; z += 1.1) {
            const g = new THREE.BoxGeometry(0.08, 1.45, 0.08); g.rotateX(((Math.round(z * 10) % 2) ? 0.6 : -0.6)); g.translate(bx + s * 1.25, 1.05, z + 0.55); B.push(accent, g);
          }
        }
      }
    }
    B.build(this.group);
    // 떠다니는 유람선
    for (let i = 0; i < 4; i++) {
      const boat = new THREE.Group();
      const hull = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.35, 0.7), mat(0xf4f4f0)); hull.position.y = -0.15; boat.add(hull);
      const cab = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.35, 0.55), mat(0x3a6fb5)); cab.position.set(-0.2, 0.18, 0); boat.add(cab);
      boat.position.set(-80 + i * 45, 0, R.z + (i % 2 ? 1.6 : -1.4));
      const dir = i % 2 ? 1 : -1;
      this.group.add(boat);
      this.anim.push((dt, t) => { boat.position.x += dir * 0.9 * dt; if (boat.position.x > 120) boat.position.x = -120; if (boat.position.x < -120) boat.position.x = 120; boat.rotation.z = Math.sin(t * 1.3 + i) * 0.02; boat.rotation.y = dir > 0 ? 0 : Math.PI; });
    }
  }

  // ---------- 도시 블록 ----------
  buildCity() {
    const S = this.S, b = S.bounds, R = S.river, rnd = this.rnd, B = new Buckets(), M = this.M;
    const reserved = [];   // 랜드마크 자리
    for (const L of S.landmarks) {
      if (L.id === 'namsan') reserved.push([L.x, L.z, 13]);
      if (L.id === 'lotte') reserved.push([L.x, L.z, 7]);
      if (L.id === 'b63') reserved.push([L.x, L.z - 3, 7]);
    }
    const gate = S.gate, base = S.base;
    reserved.push([gate[0] - 2, gate[1], 4.5]);
    const free = (x, z, r) => {
      if (x > b.x0 - 3.5 && x < b.x1 + 3.8 && z > b.z0 - 3.4 && z < b.z1 + 3.4) return false;   // 공원 + 둘레 큰길
      if (R && z > R.z - R.w / 2 - 2.5 - r && z < R.z + R.w / 2 + 2.5 + r) return false;          // 강·둔치
      for (const [rx, rz, rr] of reserved) if (Math.hypot(x - rx, z - rz) < rr + r) return false;
      return true;
    };
    const plotM = mat(0xc9c6bd);
    let gableI = 0;
    // 블록 격자
    for (let bx = -150; bx < 150; bx += 9) for (let bz = -78; bz < 90; bz += 9) {
      const cx = bx + 4.5, cz = bz + 4.5;
      const dist = Math.hypot(cx, cz);
      if (dist > 150) continue;
      if (!free(cx, cz, 4)) continue;
      const pg = new THREE.PlaneGeometry(7.2, 7.2); pg.rotateX(-Math.PI / 2); pg.translate(cx, 0.006, cz); B.push(plotM, pg);
      const north = cz < (R ? R.z : -40);
      // 공원 앞(카메라 쪽)과 옆은 낮게: 전투 구역을 가리지 않도록
      const front = cz > b.z1 - 6 && cz < b.z1 + 34 && cx > b.x0 - 30 && cx < b.x1 + 30;
      const side = !front && cz > b.z0 - 4 && cz < b.z1 && (cx < b.x0 || cx > b.x1) && Math.min(Math.abs(cx - b.x0), Math.abs(cx - b.x1)) < 16;
      const hMax = front ? 0.45 : side ? 0.75 : 1;
      const r = rnd();
      // 아파트 단지 (한국 특유의 흰 판상형 고층 아파트, 번호)
      if (r < (north ? 0.55 : 0.68)) {
        const v = rnd.int(0, 2), floors = Math.round(rnd.int(12, 25) * hMax), h = floors * 0.28, rot = rnd() < 0.85 ? 0 : Math.PI / 2;
        for (let k = 0; k < 2; k++) {
          const w = rnd.range(5.2, 6.4), d = 1.25;
          const ox = rot ? (k ? 1.7 : -1.7) : 0, oz = rot ? 0 : (k ? 1.8 : -1.8);
          const near = dist < 60;
          boxWalls(B, cx + ox, 0, cz + oz, w, h, d, rot, M.apt[v], M.roof, 1.6, 1.12, near ? M.gable[gableI++ % M.gable.length] : null);
        }
      } else if (r < 0.9) {
        // 오피스 빌딩 (유리)
        const n = rnd.int(1, 3);
        for (let k = 0; k < n; k++) {
          const w = rnd.range(2.2, 3.4), d = rnd.range(2.2, 3.4), h = rnd.range(5, dist < 50 ? 12 : 18) * hMax;
          boxWalls(B, cx + rnd.range(-1.6, 1.6), 0, cz + rnd.range(-1.6, 1.6), w, h, d, 0, M.glass[rnd.int(0, 3)], M.roof2, 2, 2);
        }
      } else {
        // 작은 공원
        const pg2 = new THREE.PlaneGeometry(6.8, 6.8); pg2.rotateX(-Math.PI / 2); pg2.translate(cx, 0.01, cz); B.push(M.roofG, pg2);
        for (let k = 0; k < 6; k++) (this.cityTrees = this.cityTrees || []).push([cx + rnd.range(-3, 3), cz + rnd.range(-3, 3), rnd.range(0.8, 1.2)]);
      }
      if (rnd() < 0.5) for (let k = 0; k < 3; k++) (this.cityTrees = this.cityTrees || []).push([cx + (rnd() < 0.5 ? -3.8 : 3.8), cz + rnd.range(-3.5, 3.5), rnd.range(0.7, 1)]);
    }
    // 강 북쪽 강변 아파트 줄 (강남 쪽에서 바라보는 스카이라인)
    if (R) for (let x = -150; x < 150; x += 7.5) {
      const z = R.z - R.w / 2 - 4;
      if (reserved.some(([rx, rz, rr]) => Math.hypot(x - rx, z - rz) < rr + 3)) continue;
      const v = rnd.int(0, 2), h = rnd.int(14, 28) * 0.28;
      boxWalls(B, x, 0, z, 6, h, 1.25, 0, M.apt[v], M.roof, 1.6, 1.12, Math.abs(x) < 50 ? M.gable[gableI++ % M.gable.length] : null);
    }
    B.build(this.group);
  }

  // ---------- 랜드마크 ----------
  buildLandmarks() {
    const S = this.S, B = new Buckets();
    for (const L of S.landmarks) {
      if (L.id === 'namsan') {
        // 남산: 숲이 덮인 둥근 산
        const g = new THREE.SphereGeometry(1, 28, 14, 0, Math.PI * 2, 0, Math.PI / 2);
        const pos = g.attributes.position, rnd = makeRng('namsan');
        for (let i = 0; i < pos.count; i++) { const y = pos.getY(i); pos.setXYZ(i, pos.getX(i) * 11, Math.pow(y, 1.4) * 6 * (1 + rnd.range(-0.04, 0.04)), pos.getZ(i) * 8); }
        g.computeVertexNormals();
        const hill = new THREE.Mesh(g, mat(0x4f7a36, { roughness: 1 }));
        hill.position.set(L.x, -0.1, L.z); hill.castShadow = hill.receiveShadow = true; this.group.add(hill);
        this.namsan = { x: L.x, z: L.z };
        for (let i = 0; i < 260; i++) {
          const a = rnd() * Math.PI * 2, r = Math.sqrt(rnd()) * 0.95;
          const x = Math.cos(a) * r, z = Math.sin(a) * r, y = Math.pow(Math.sqrt(Math.max(0, 1 - r * r)), 1.4) * 6;
          if (r > 0.18) (this.cityTrees = this.cityTrees || []).push([L.x + x * 11, L.z + z * 8, rnd.range(1, 1.5), y - 0.1]);
        }
      }
      if (L.id === 'ntower') {
        // N서울타워: 남산 꼭대기의 흰 탑
        const T = new THREE.Group(); T.position.set(L.x, 5.8, L.z); T.scale.setScalar(0.85);
        const white = mat(0xf2f2f0, { roughness: 0.5 }), grey = mat(0x9ea3a8);
        const add = (geo, m, y) => { const o = new THREE.Mesh(geo, m); o.position.y = y; o.castShadow = true; T.add(o); return o; };
        add(new THREE.CylinderGeometry(1.1, 1.4, 1.0, 16), grey, 0.5);
        add(new THREE.CylinderGeometry(0.42, 0.55, 8.5, 16), white, 5.2);
        add(new THREE.CylinderGeometry(1.15, 0.85, 0.6, 20), white, 9.4);
        add(new THREE.CylinderGeometry(1.25, 1.15, 0.9, 20), mat(0x6f8aa0, { roughness: 0.3, metalness: 0.5 }), 10.1);
        add(new THREE.CylinderGeometry(0.95, 1.25, 0.5, 20), white, 10.8);
        add(new THREE.CylinderGeometry(0.18, 0.3, 2.6, 10), white, 12.4);
        for (let i = 0; i < 4; i++) add(new THREE.CylinderGeometry(0.1, 0.12, 0.5, 8), i % 2 ? white : mat(0xd23a2e), 13.9 + i * 0.5);
        const beacon = add(new THREE.SphereGeometry(0.16, 8, 6), new THREE.MeshBasicMaterial({ color: 0xff3a2e }), 16);
        this.anim.push((dt, t) => { beacon.visible = Math.sin(t * 3) > 0; });
        this.group.add(T);
      }
      if (L.id === 'lotte') {
        // 롯데월드타워: 위로 갈수록 가늘어지는 은색 초고층
        const g = new THREE.CylinderGeometry(0.35, 2.4, 26, 4, 12, false, Math.PI / 4);
        const pos = g.attributes.position;
        for (let i = 0; i < pos.count; i++) { const y = pos.getY(i) / 26 + 0.5, cur = 2.4 + (0.35 - 2.4) * y, want = 2.4 * (1 - 0.86 * Math.pow(y, 1.7)); pos.setX(i, pos.getX(i) * want / cur); pos.setZ(i, pos.getZ(i) * want / cur); }
        g.computeVertexNormals();
        const t = glassTex(2).clone(); // 밝은 은빛 유리 t.needsUpdate = true; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(3, 14);
        const tower = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ map: t, color: 0xffffff, emissive: 0x1d2a36, roughness: 0.35, metalness: 0.05 }));
        tower.position.set(L.x, 13, L.z); tower.castShadow = true; this.group.add(tower);
        const spire = new THREE.Mesh(new THREE.ConeGeometry(0.35, 2, 4), mat(0xe9eef2, { metalness: 0.6, roughness: 0.3 }));
        spire.position.set(L.x, 27, L.z); this.group.add(spire);
        boxWalls(B, L.x + 4.2, 0, L.z + 1, 4, 2.2, 3, 0, this.M.glass[1], this.M.roof2, 2, 2); // 포디움(쇼핑몰)
      }
      if (L.id === 'b63') {
        // 63빌딩: 금색 유리 초고층 (여의도)
        const g = new THREE.BoxGeometry(3.2, 13, 2);
        const pos = g.attributes.position;
        for (let i = 0; i < pos.count; i++) { const y = pos.getY(i) / 13 + 0.5; pos.setX(i, pos.getX(i) * (1 - y * 0.35)); }
        g.computeVertexNormals();
        const t = goldGlassTex().clone(); t.needsUpdate = true; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(4, 16);
        const m = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ map: t, emissive: 0x2a1a00, roughness: 0.35, metalness: 0.1 }));
        m.position.set(L.x, 6.5, L.z); m.castShadow = true; this.group.add(m);
        for (let k = 0; k < 4; k++) boxWalls(B, L.x - 1.2 - (k >> 1) * 3.2, 0, L.z + (k % 2 ? 4.6 : -4.6), 2.2, 4 + k * 1.1, 2.6, 0, this.M.glass[k % 4], this.M.roof2, 2, 2);
      }
      if (L.id === 'bukhan') {
        // 북한산: 뒤쪽을 가로막는 바위 능선
        const rnd = makeRng('bukhan');
        const rockM = mat(0x7f8578, { roughness: 1, flatShading: true }), greenM = mat(0x55704a, { roughness: 1, flatShading: true });
        for (let i = 0; i < 16; i++) {
          const x = -160 + i * 21 + rnd.range(-6, 6), h = 14 + rnd() * 16 * (1 - Math.abs(x - L.x) / 200), r = rnd.range(14, 24);
          const g = new THREE.ConeGeometry(r, h, 9, 4);
          const pos = g.attributes.position;
          for (let k = 0; k < pos.count; k++) if (pos.getY(k) < h / 2 - 0.01) pos.setXYZ(k, pos.getX(k) * rnd.range(0.85, 1.15), pos.getY(k) + rnd.range(-1, 1), pos.getZ(k) * rnd.range(0.85, 1.15));
          g.computeVertexNormals();
          const m = new THREE.Mesh(g, i % 3 === 0 ? rockM : greenM);
          m.position.set(x, h / 2 - 1, L.z - rnd.range(0, 14));
          this.group.add(m);
        }
      }
      if (L.label && L.id !== 'namsan') this.labels.push({ text: L.label, pos: V(L.x, L.y || 0, L.z), kind: 'landmark' });
      if (L.id === 'namsan' && L.label) this.labels.push({ text: L.label, pos: V(L.x + 8, 2.5, L.z + 4), kind: 'landmark' });
    }
    B.build(this.group);
  }

  // ---------- 전투 구역 안 장식: 연못, 운동장, 아파트 ----------
  buildBattleDecor() {
    const B = new Buckets(), M = this.M;
    for (const k of this.S.blockers) {
      if (k.kind === 'pond') {
        const g = new THREE.CircleGeometry(1, 32); g.rotateX(-Math.PI / 2); g.scale(k.rx, 1, k.rz); g.translate(k.x, 0.015, k.z);
        B.push(mat(0x4f97c4, { roughness: 0.2, metalness: 0.2 }), g);
        const rim = new THREE.RingGeometry(1, 1.12, 32); rim.rotateX(-Math.PI / 2); rim.scale(k.rx, 1, k.rz); rim.translate(k.x, 0.02, k.z);
        B.push(mat(0xc9c2ad), rim);
      } else if (k.kind === 'field') {
        const t = new THREE.Mesh(new THREE.PlaneGeometry(k.w + 1.4, k.d + 0.9), mat(0xb5553f));
        t.rotation.x = -Math.PI / 2; t.position.set(k.x, 0.012, k.z); t.receiveShadow = true; this.group.add(t);
        const f = new THREE.Mesh(new THREE.PlaneGeometry(k.w, k.d), new THREE.MeshStandardMaterial({ map: fieldTex(), roughness: 1 }));
        f.rotation.x = -Math.PI / 2; f.position.set(k.x, 0.016, k.z); f.receiveShadow = true; this.group.add(f);
        for (const s of [-1, 1]) { const goal = new THREE.BoxGeometry(0.1, 0.35, 0.9); goal.translate(k.x + s * k.w / 2, 0.18, k.z); B.push(mat(0xffffff), goal); }
      } else if (k.kind === 'landmark') {
        this.group.add(miniLandmark(k));
        if (k.label) this.labels.push({ text: k.label, pos: V(k.x, k.y || 2.6, k.z), kind: 'landmark' });
      } else if (k.kind === 'apts') {
        const n = Math.max(1, Math.round(k.w / 3.4));
        for (let i = 0; i < n; i++) {
          const w = k.w / n - 0.5, x = k.x - k.w / 2 + (i + 0.5) * k.w / n;
          boxWalls(B, x, 0, k.z, w, 4.2 + (i % 2) * 0.8, k.d - 0.6, 0, M.apt[i % 3], M.roof, 1.6, 1.12, M.gable[i % M.gable.length]);
        }
      }
    }
    B.build(this.group);
  }

  // ---------- 적 진입 터널, 연합 지휘부 ----------
  buildGateBase() {
    const S = this.S;
    const [gx, gz] = S.gate;
    this.gate = V(gx, 0, gz);
    const T = new THREE.Group(); T.position.set(gx, 0, gz);
    const conc = mat(0x8d8a83), dark = new THREE.MeshBasicMaterial({ color: 0x0b0b0c });
    const hill = new THREE.Mesh(new THREE.SphereGeometry(1, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), mat(0x557a3c, { roughness: 1 }));
    hill.scale.set(3, 2.6, 3.4); hill.position.set(-2.4, 0, 0); hill.castShadow = true; T.add(hill);
    const portal = new THREE.Mesh(new THREE.BoxGeometry(1.2, 2.4, 4.2), conc); portal.position.set(0.2, 1.2, 0); portal.castShadow = true; T.add(portal);
    const hole = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 1.7), dark); hole.rotation.y = Math.PI / 2; hole.position.set(0.81, 0.85, 0); T.add(hole);
    const neon = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.12, 2.8), new THREE.MeshBasicMaterial({ color: 0xff3030 })); neon.position.set(0.84, 1.85, 0); T.add(neon);
    this.anim.push((dt, t) => { neon.material.color.setHSL(0, 1, 0.45 + Math.sin(t * 4) * 0.12); });
    this.group.add(T);
    this.labels.push({ text: '적 진입', pos: V(gx + 0.5, 3.2, gz), kind: 'enemy' });

    const [bx, bz] = S.base;
    this.base = V(bx, 0, bz);
    const bm = makeBase();
    bm.root.scale.setScalar(2.4); bm.root.position.set(bx, 0, bz); bm.root.rotation.y = Math.PI / 2;
    this.group.add(bm.root);
    for (const [o, ax, sp] of bm.spin) this.anim.push((dt) => { o.rotation[ax] += sp * dt; });
    this.anim.push((dt, t) => { bm.flag.rotation.y = Math.sin(t * 2.2) * 0.25; });
    this.baseModel = bm;
    this.labels.push({ text: '연합 지휘부', pos: V(bx, 3.4, bz), kind: 'base' });
  }

  // ---------- 나무 (전투 구역 나무는 무기를 놓으면 치워짐) ----------
  buildTrees() {
    const S = this.S, b = S.bounds, rnd = makeRng(S.seed + 'trees');
    const pts = [];
    for (let i = 0; i < 2600 && pts.length < (S.parkTrees || 0); i++) {   // 전투 구역 안 나무: 기본 없음
      const x = rnd.range(b.x0 + 0.6, b.x1 - 0.6), z = rnd.range(b.z0 + 0.6, b.z1 - 0.6);
      if (this.roadDist(x, z) < 1.6) continue;
      if (this.blockReason(x, z) && this.blockReason(x, z) !== '도로 배치 불가') continue;
      if (pts.some((p) => (p[0] - x) ** 2 + (p[1] - z) ** 2 < 0.8)) continue;
      pts.push([x, z, rnd.range(0.75, 1.15), rnd() < 0.12]);
    }
    this.parkTrees = pts;
    const trunkG = new THREE.CylinderGeometry(0.05, 0.07, 0.5, 5); trunkG.translate(0, 0.25, 0);
    const crownG = new THREE.IcosahedronGeometry(0.42, 0); crownG.scale(1, 1.15, 1); crownG.translate(0, 0.82, 0);
    const trunkM = mat(0x6b4a2f), greenM = mat(0x4e8a3a, { flatShading: true, roughness: 0.9 }), pinkM = mat(0xf2b6c6, { flatShading: true, roughness: 0.9 }), darkM = mat(0x3f7330, { flatShading: true, roughness: 0.9 });
    const make = (list, crownM) => {
      const tr = new THREE.InstancedMesh(trunkG, trunkM, Math.max(1, list.length)), cr = new THREE.InstancedMesh(crownG, crownM, Math.max(1, list.length));
      tr.castShadow = cr.castShadow = true; cr.receiveShadow = true;
      tr.count = cr.count = list.length;
      this.group.add(tr, cr);
      return { tr, cr, list };
    };
    this.treeSets = [make(pts.filter((p) => !p[3]), greenM), make(pts.filter((p) => p[3]), pinkM)];
    this.hiddenTrees = new Set();
    this.refreshTrees();
    // 도시 나무 (숨기지 않음)
    const ct = this.cityTrees || [];
    const cTr = new THREE.InstancedMesh(trunkG, trunkM, ct.length), cCr = new THREE.InstancedMesh(crownG, darkM, ct.length);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion();
    ct.forEach(([x, z, s, y = 0], i) => { m.compose(V(x, y, z), q, V(s, s, s)); cTr.setMatrixAt(i, m); cCr.setMatrixAt(i, m); });
    cCr.castShadow = true;
    this.group.add(cTr, cCr);
  }

  refreshTrees() {
    const m = new THREE.Matrix4(), q = new THREE.Quaternion();
    for (const set of this.treeSets) {
      set.list.forEach((p, i) => {
        const s = this.hiddenTrees.has(p) ? 0.0001 : p[2];
        q.setFromAxisAngle(V(0, 1, 0), p[0] * 7.3);
        m.compose(V(p[0], 0, p[1]), q, V(s, s, s));
        set.tr.setMatrixAt(i, m); set.cr.setMatrixAt(i, m);
      });
      set.tr.instanceMatrix.needsUpdate = set.cr.instanceMatrix.needsUpdate = true;
    }
  }
  clearTreesAt(x, z, r = 0.95) {
    let n = 0;
    for (const p of this.parkTrees) if (!this.hiddenTrees.has(p) && (p[0] - x) ** 2 + (p[1] - z) ** 2 < r * r) { this.hiddenTrees.add(p); n++; }
    if (n) this.refreshTrees();
    return n;
  }
  resetTrees() { this.hiddenTrees.clear(); this.refreshTrees(); }

  update(dt, t) {
    for (const f of this.anim) f(dt, t);
    this.chevM.opacity = 0.42 + Math.sin(t * 4) * 0.14;
    this.ghostM.opacity = 0.65 + Math.sin(t * 3) * 0.3;
  }
}
