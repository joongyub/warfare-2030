// 도시 키트 공용 도구 (스테이지 4~ 세계 도시)
// 도시 키트 = { build(C, H), field: {id: (G,k)=>{}}, edge: {id: {r, build(L, city)}}, gate, water, riverWall, riverWalk, bridges, shop, shopVariants, shopTV, stoneTall }
//   build(C, H): 전투 구역 바깥 배경 도시 블록. H = { free, B, rnd, boxWalls, roofKit, mat }  (world_city.js 의 buildNYCity 와 같은 규칙)
//   field: 전투 구역 안 랜드마크 (stage.blockers 의 kind:'landmark', id) — (G, k) → k.w × k.d 안에 맞춰 G 에 추가 (바닥 0.06 위)
//   edge : 전투 구역 바깥 큰 랜드마크 (stage.landmarks 의 id) — r = 주변 배경 블록을 비울 반지름
//   gate : { wall, cap } 적 진입 석축 색 / water: 강물 색 / riverWall·riverWalk: 강둑 벽·산책로 색 / riverTrees: 강변 가로수
//   bridges: [[x, 'arch'|'plain'|'truss'|'suspension'|'stone', 색], ...] 3개
//   shop(v) → { map, emissiveMap } 도로변 상가 외벽 (stage.streetFront 를 쓸 때)
import * as THREE from 'three';
import { makeRng } from '../textures.js';
import { cv, mk, once, pane, grime } from '../textures_world.js';

export const emis = (T, o = {}) => new THREE.MeshStandardMaterial(Object.assign({ map: T.map, emissiveMap: T.emissiveMap, emissive: 0xffffff, emissiveIntensity: 0.35, roughness: 0.8 }, o));

// 창이 있는 건물 외벽 텍스처 (map + emissiveMap). 한 장 = 가로 cols칸 × 세로 rows층
// o: { wall:'#hex', cols, rows, ww, wh, frame, band, lit, sky, stripe(가로 띠 창), panel(콘크리트 판 이음), seed }
export function towerTex(key, o) {
  return once('ctw' + key, () => {
    const W = 256, H = 256, [c, g] = cv(W, H), [ce, e] = cv(W, H), rnd = makeRng('ctw' + key);
    e.fillStyle = '#000'; e.fillRect(0, 0, W, H);
    g.fillStyle = o.wall; g.fillRect(0, 0, W, H);
    grime(g, W, H, rnd, 900, 0.05);
    const cw = W / o.cols, rh = H / o.rows;
    if (o.panel) { g.fillStyle = 'rgba(0,0,0,0.12)'; for (let x = 0; x <= W; x += cw) g.fillRect(x - 1, 0, 2, H); for (let y = 0; y <= H; y += rh) g.fillRect(0, y - 1, W, 2); }
    for (let r = 0; r < o.rows; r++) {
      if (o.stripe) { pane(g, e, 2, r * rh + rh * 0.22, W - 4, rh * (o.wh || 0.5), rnd, { frame: o.frame, mull: false, lit: o.lit, sky: o.sky }); continue; }
      for (let k = 0; k < o.cols; k++) {
        const ww = cw * (o.ww || 0.56), wh = rh * (o.wh || 0.58);
        pane(g, e, k * cw + (cw - ww) / 2, r * rh + rh * 0.2, ww, wh, rnd, { frame: o.frame, lit: o.lit, sky: o.sky, mull: o.mull });
      }
    }
    if (o.band) { g.fillStyle = o.band; for (let r = 0; r <= o.rows; r++) g.fillRect(0, r * rh - 2, W, 4); }
    return { map: mk(c), emissiveMap: mk(ce) };
  });
}

// 기본 배경 도시: 9칸 블록 격자에 중층·고층 건물 (각 도시 키트가 자기 스타일로 바꿔 씀)
export function buildGenericCity(C, H, o = {}) {
  const { free, B, rnd, boxWalls, roofKit, mat } = H, S = C.S, b = S.bounds;
  const walls = (o.walls || ['#b9b2a6', '#9aa3ab', '#c9c0b0', '#8d939a']).map((w, i) => emis(towerTex((o.key || 'gen') + i, { wall: w, cols: 4, rows: 6, frame: '#e8e4da', lit: 0.12 })));
  const plotM = mat(o.plot ?? 0xc0bcb2), roofM = mat(0x5a5c60, { roughness: 0.95 }), rimM = mat(0xd8d2c6);
  for (let bx = -150; bx < 150; bx += 9) for (let bz = -90; bz < 90; bz += 9) {
    const cx = bx + 4.5, cz = bz + 4.5, dist = Math.hypot(cx, cz);
    if (dist > 150 || !free(cx, cz, 4)) continue;
    const pg = new THREE.PlaneGeometry(7.4, 7.4); pg.rotateX(-Math.PI / 2); pg.translate(cx, 0.006, cz); B.push(plotM, pg);
    const front = cz > b.z1 - 6 && cz < b.z1 + 34 && cx > b.x0 - 30 && cx < b.x1 + 30;   // 카메라 쪽은 낮게
    const n = rnd.int(1, 3);
    for (let k = 0; k < n; k++) {
      const w = 7 / n - 0.3, d = rnd.range(4, 6.6), h = (front ? rnd.range(1, 2.4) : rnd.range(2, dist < 70 ? 9 : 14));
      const x = cx - 3.5 + (k + 0.5) * 7 / n;
      boxWalls(B, x, 0, cz, w, h, d, 0, walls[rnd.int(0, walls.length - 1)], roofM, 1.6, 1.6);
      roofKit(B, x, cz, w, d, h, 0, rimM, { t: 0.08, rh: 0.14 });
    }
  }
}
