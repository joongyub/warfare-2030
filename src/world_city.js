// 세계 도시 배경 블록: 뉴욕(초고층·벽돌 빌딩·물탱크·브라운스톤), 파리(오스만 블록·망사르드 지붕·가로수)
// city.js 의 buildCity 가 테마에 따라 부름. H = { free, B, M, rnd, boxWalls, roofKit, mat, cityTrees }
import * as THREE from 'three';
import { nyBrickHD, nyTowerHD, brownstoneHD, haussmannHD, zincRoofHD } from './textures_world.js';

const emis = (T, o = {}) => new THREE.MeshStandardMaterial(Object.assign({ map: T.map, emissiveMap: T.emissiveMap, emissive: 0xffffff, emissiveIntensity: 0.35, roughness: 0.8 }, o));

// 망사르드 지붕: 바닥 w×d (높이 y) 에서 가파르게 올라가 안쪽 평평한 윗면. 로컬에서 만든 뒤 ry 회전, (x,z) 이동
export function mansardGeo(x, y, z, w, d, rh, ry, inset = 0.42) {
  const s = Math.min(rh * inset, w * 0.3, d * 0.3), W = w / 2, D = d / 2, a = W - s, b = D - s, T = y + rh;
  const P = [], U = [];
  const quad = (p0, p1, p2, p3, len) => { P.push(...p0, ...p1, ...p2, ...p0, ...p2, ...p3); U.push(0, 0, len, 0, len, 1, 0, 0, len, 1, 0, 1); };
  quad([-W, y, D], [W, y, D], [a, T, b], [-a, T, b], w);       // 앞
  quad([W, y, -D], [-W, y, -D], [-a, T, -b], [a, T, -b], w);   // 뒤
  quad([W, y, D], [W, y, -D], [a, T, -b], [a, T, b], d);       // 오른쪽
  quad([-W, y, -D], [-W, y, D], [-a, T, b], [-a, T, -b], d);   // 왼쪽
  const top = [[-a, T, b], [a, T, b], [a, T, -b], [-a, T, -b]];
  P.push(...top[0], ...top[1], ...top[2], ...top[0], ...top[2], ...top[3]); U.push(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(U, 2));
  g.computeVertexNormals();
  g.applyMatrix4(new THREE.Matrix4().makeRotationY(ry)); g.translate(x, 0, z);
  return g;
}

// 뉴욕 옥상 나무 물탱크 (다리 4개 + 통 + 고깔 지붕)
function waterTank(B, x, y, z, s, woodM, legM) {
  const tub = new THREE.CylinderGeometry(0.17 * s, 0.17 * s, 0.32 * s, 10); tub.translate(x, y + 0.2 * s + 0.16 * s, z); B.push(woodM, tub);
  const cap = new THREE.ConeGeometry(0.19 * s, 0.14 * s, 10); cap.translate(x, y + 0.52 * s + 0.07 * s, z); B.push(legM, cap);
  for (const [dx, dz] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) { const l = new THREE.BoxGeometry(0.03 * s, 0.2 * s, 0.03 * s); l.translate(x + dx * 0.11 * s, y + 0.1 * s, z + dz * 0.11 * s); B.push(legM, l); }
}

export function buildNYCity(C, H) {
  const { free, B, rnd, boxWalls, roofKit, mat } = H, S = C.S, b = S.bounds, R = S.river;
  const M = {
    tower: [0, 1, 2, 3].map((v) => emis(nyTowerHD(v), { roughness: 0.7 })),
    brick: [0, 1, 2].map((v) => emis(nyBrickHD(v))),
    brown: [0, 1, 2].map((v) => emis(brownstoneHD(v))),
    glass: C.M.glass, roof: mat(0x56585c, { roughness: 0.95 }), rim: C.M.rim, rimDark: C.M.rimDark, mech: C.M.mech,
    wood: mat(0x6b4a30, { roughness: 0.95 }), leg: mat(0x2c2d30), cornice: mat(0xd6cdb9, { roughness: 0.9 })
  };
  const plotM = mat(0xb9b6ae);
  const tower = (x, z, w, d, h, m, tu, tv) => {
    // 계단식 후퇴(셋백): 2~3단으로 좁아지며 올라감
    let y = 0, cw = w, cd = d;
    const steps = h > 14 ? 3 : h > 8 ? 2 : 1;
    for (let k = 0; k < steps; k++) {
      const hh = k === steps - 1 ? h - y : h * (k === 0 ? 0.55 : 0.28);
      boxWalls(B, x, y, z, cw, hh, cd, 0, m, M.roof, tu, tv);
      roofKit(B, x, z, cw, cd, y + hh, 0, M.rimDark, { t: 0.08, rh: 0.15 });
      y += hh; cw *= 0.74; cd *= 0.74;
    }
    roofKit(B, x, z, cw / 0.74, cd / 0.74, y, 0, M.rimDark, { house: [cw * 0.5, 0.5, cd * 0.5], houseM: M.mech, mech: [[cw * 0.2, cd * 0.2, 0.3, 0.3, 0.3]], mechM: M.mech });
    if (h > 20 && rnd() < 0.5) { const sp = new THREE.CylinderGeometry(0.04, 0.09, 2.5, 6); sp.translate(x, y + 1.3, z); B.push(M.mech, sp); }
  };
  for (let bx = -150; bx < 150; bx += 9) for (let bz = -90; bz < 90; bz += 9) {
    const cx = bx + 4.5, cz = bz + 4.5, dist = Math.hypot(cx, cz);
    if (dist > 150 || !free(cx, cz, 4)) continue;
    const pg = new THREE.PlaneGeometry(7.4, 7.4); pg.rotateX(-Math.PI / 2); pg.translate(cx, 0.006, cz); B.push(plotM, pg);
    const front = cz > b.z1 - 6 && cz < b.z1 + 34 && cx > b.x0 - 30 && cx < b.x1 + 30;
    const side = !front && cz > b.z0 - 4 && cz < b.z1 && (cx < b.x0 || cx > b.x1) && Math.min(Math.abs(cx - b.x0), Math.abs(cx - b.x1)) < 16;
    const across = R && cz < R.z;   // 강 건너 = 미드타운 초고층 숲
    const r = rnd();
    if (front || (!across && r < 0.25 && dist < 70)) {
      // 브라운스톤 연립주택 줄 (블록 앞뒤로 좁은 집이 다닥다닥)
      for (const sz of [-1, 1]) for (let k = 0; k < 5; k++) {
        const w = 1.36, x = cx - 2.9 + k * 1.45, z = cz + sz * 2.6, h = rnd.int(3, 4) * 0.3 + (front ? 0 : 0.3);
        boxWalls(B, x, 0, z, w, h, 1.9, sz > 0 ? 0 : Math.PI, M.brown[(((k + bx) % 3) + 3) % 3], M.roof, 1.2, 1.2);
        roofKit(B, x, z, w, 1.9, h, 0, M.cornice, { t: 0.06, rh: 0.1 });
      }
      for (let k = 0; k < 5; k++) (C.cityTrees = C.cityTrees || []).push([cx - 3 + k * 1.5, cz + (rnd() < 0.5 ? -3.8 : 3.8), rnd.range(0.6, 0.85)]);
    } else if (!across && (side || r < 0.62)) {
      // 벽돌 중층 빌딩 2~4채 + 옥상 물탱크
      const n = rnd.int(2, 4), hm = side ? 0.6 : 1;
      for (let k = 0; k < n; k++) {
        const w = 7 / n - 0.15, x = cx - 3.5 + (k + 0.5) * 7 / n, d = rnd.range(5, 7), h = rnd.int(6, 14) * 0.3 * hm;
        boxWalls(B, x, 0, cz, w, h, d, 0, M.brick[rnd.int(0, 2)], M.roof, 1.6, 1.2);
        roofKit(B, x, cz, w, d, h, 0, M.cornice, { t: 0.1, rh: 0.16 });
        if (rnd() < 0.7) waterTank(B, x + rnd.range(-w * 0.25, w * 0.25), h, cz + rnd.range(-1.5, 1.5), 1.6, M.wood, M.leg);
      }
    } else {
      // 초고층 (석조 아르데코 또는 유리), 강 건너는 더 높게
      const n = rnd.int(1, 2), tall = across ? rnd.range(14, 34) : rnd.range(8, 18);
      for (let k = 0; k < n; k++) {
        const w = rnd.range(3, 4.6), d = rnd.range(3, 4.6), h = tall * rnd.range(0.7, 1);
        const x = cx + (n > 1 ? (k ? 1.8 : -1.8) : rnd.range(-1, 1)), z = cz + rnd.range(-1, 1);
        if (rnd() < 0.55) tower(x, z, w, d, h, M.tower[rnd.int(0, 3)], 2, 2.4);
        else tower(x, z, w, d, h, M.glass[rnd.int(0, 3)], 2, 2);
      }
    }
  }
  // 강 건너 강변 (스카이라인 앞줄)
  if (R) for (let x = -150; x < 150; x += 6) {
    const z = R.z - R.w / 2 - 4.5;
    if (!free(x, z, 3)) continue;
    const h = rnd.range(6, 16), w = rnd.range(3.4, 5);
    boxWalls(B, x, 0, z, w, h, 4, 0, rnd() < 0.5 ? M.tower[rnd.int(0, 3)] : M.glass[rnd.int(0, 3)], M.roof, 2, 2.4);
    roofKit(B, x, z, w, 4, h, 0, M.rimDark, { t: 0.08, rh: 0.15 });
  }
}

export function buildParisCity(C, H) {
  const { free, B, rnd, boxWalls, roofKit, mat } = H, S = C.S, b = S.bounds, R = S.river;
  const M = {
    haus: [0, 1, 2, 3].map((v) => emis(haussmannHD(v, v % 2 === 0), { emissiveIntensity: 0.3, roughness: 0.85 })),
    zinc: new THREE.MeshStandardMaterial({ map: zincRoofHD(), roughness: 0.55, metalness: 0.35 }),
    flat: mat(0x59616a, { roughness: 0.7 }), chim: mat(0xb0765a, { roughness: 0.9 }), rim: mat(0xe4dac4, { roughness: 0.9 })
  };
  const plotM = mat(0xcfc6b2), gravel = mat(0xd9ccaa, { roughness: 1 }), lawn = mat(0x6d9a4a, { roughness: 1 });
  // 건물 한 동 (오스만): 벽 + 처마 + 망사르드 지붕 + 굴뚝
  const haus = (x, z, w, d, ry, floors) => {
    const h = floors * 0.3, m = M.haus[rnd.int(0, 3)];
    boxWalls(B, x, 0, z, w, h, d, ry, m, null, 1, 1.8);
    roofKit(B, x, z, w + 0.06, d + 0.06, h, ry, M.rim, { t: 0.05, rh: 0.05 });
    B.push(M.zinc, mansardGeo(x, h + 0.05, z, w, d, 0.5, ry));
    const n = Math.max(1, Math.round(w / 1.6));
    for (let k = 0; k < n; k++) {
      const off = (k + 0.5) / n * w - w / 2, c = new THREE.BoxGeometry(0.12, 0.22, 0.4);
      c.rotateY(ry); c.translate(x + Math.cos(ry) * off, h + 0.6, z - Math.sin(ry) * off); B.push(M.chim, c);
    }
  };
  for (let bx = -150; bx < 150; bx += 9) for (let bz = -90; bz < 90; bz += 9) {
    const cx = bx + 4.5, cz = bz + 4.5, dist = Math.hypot(cx, cz);
    if (dist > 150 || !free(cx, cz, 4)) continue;
    const pg = new THREE.PlaneGeometry(7.6, 7.6); pg.rotateX(-Math.PI / 2); pg.translate(cx, 0.006, cz); B.push(plotM, pg);
    const front = cz > b.z1 - 6 && cz < b.z1 + 34 && cx > b.x0 - 30 && cx < b.x1 + 30;
    const fl = front ? 4 : 6 + (rnd() < 0.3 ? 1 : 0);
    if (rnd() < 0.1 && !front) {
      // 정원 (자갈길 + 잔디 + 가로수 줄)
      const g1 = new THREE.PlaneGeometry(7, 7); g1.rotateX(-Math.PI / 2); g1.translate(cx, 0.01, cz); B.push(gravel, g1);
      for (const [ox, oz] of [[-1.8, -1.8], [1.8, -1.8], [-1.8, 1.8], [1.8, 1.8]]) { const g2 = new THREE.PlaneGeometry(2.8, 2.8); g2.rotateX(-Math.PI / 2); g2.translate(cx + ox, 0.014, cz + oz); B.push(lawn, g2); }
      for (let k = 0; k < 10; k++) (C.cityTrees = C.cityTrees || []).push([cx + (k % 2 ? -3.3 : 3.3), cz - 3.3 + Math.floor(k / 2) * 1.6, rnd.range(0.7, 0.9)]);
      continue;
    }
    // 둘레형 블록: 네 변을 따라 건물, 가운데 안뜰
    const dep = 1.7, L = 7.2;
    for (const [ox, oz, ry, len] of [[0, L / 2 - dep / 2, 0, L], [0, -L / 2 + dep / 2, Math.PI, L], [L / 2 - dep / 2, 0, Math.PI / 2, L - dep * 2], [-L / 2 + dep / 2, 0, -Math.PI / 2, L - dep * 2]]) {
      const n = len > 5 ? 3 : 2;
      for (let k = 0; k < n; k++) {
        const w = len / n, off = (k + 0.5) * w - len / 2;
        haus(cx + ox + Math.cos(ry) * off, cz + oz - Math.sin(ry) * off, w - 0.04, dep, ry, fl - (rnd() < 0.25 ? 1 : 0));
      }
    }
    // 대로 가로수 (블록 앞뒤)
    if (rnd() < 0.7) for (let k = 0; k < 4; k++) (C.cityTrees = C.cityTrees || []).push([cx - 3 + k * 2, cz + 4.25, rnd.range(0.7, 0.85)]);
  }
  // 센강 건너편 강둑 건물 줄
  if (R) for (let x = -150; x < 150; x += 5) {
    const z = R.z - R.w / 2 - 3.2;
    if (!free(x, z, 2.4)) continue;
    haus(x, z, 4.8, 2, Math.PI, 6);
  }
}
