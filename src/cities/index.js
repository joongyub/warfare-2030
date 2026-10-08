// 세계 도시 키트 모음 (스테이지 4~). 키트의 field·edge 랜드마크를 FIELD·EDGE 목록에 합침
import { FIELD, EDGE } from '../landmarks_world.js';
import tokyo from './tokyo.js';
import london from './london.js';
import berlin from './berlin.js';
import cairo from './cairo.js';
import rio from './rio.js';
import beijing from './beijing.js';
import moscow from './moscow.js';

export const CITY_KITS = { tokyo, london, berlin, cairo, rio, beijing, moscow };
for (const K of Object.values(CITY_KITS)) { Object.assign(FIELD, K.field || {}); Object.assign(EDGE, K.edge || {}); }
