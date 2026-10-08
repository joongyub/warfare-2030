// 도시 키트: tokyo (임시 — 기본 배경만)
import { buildGenericCity } from './common.js';
export default {
  build(C, H) { buildGenericCity(C, H, { key: 'tokyo' }); },
  field: {}, edge: {},
  gate: { wall: 0x8a7a6a, cap: 0x9c958a }, water: 0x86aec8, riverWall: 0x8f9295, riverWalk: 0x77797c,
  bridges: [[-18, 'plain', 0x8c8f93], [14, 'truss', 0x3a6fb5], [46, 'arch', 0xc8463a]]
};
