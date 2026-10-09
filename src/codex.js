// 📖 무기도감: 조합법(레시피) 목록과 발견 기록
//   영웅 조합: heroes.js COMBOS (Lv.1부터, 가까이) / 무기 조합: data/weapons.js GF.COMBO_WEAPONS (둘 다 Lv.4, 가까이)
//   처음엔 모두 가려져 있고(???), 조합에 성공하면 도감에 영구 공개 (localStorage 'gf_codex', 구글 로그인 시 서버에도)
import { COMBOS, HEROES } from './heroes.js';

const KEY = 'gf_codex';
export const RECIPES = [];
export const RECIPE_CATS = [['weapon', '⚙ 일반무기 조합'], ['legend', '🎖 레전더리 영웅 조합'], ['myth', '🐐 신화 영웅 조합']];
export function buildRecipes() {
  RECIPES.length = 0;
  for (const [id, W] of Object.entries(GF.COMBO_WEAPONS || {})) {
    RECIPES.push({ key: 'w_' + id, hero: false, cat: 'weapon', ta: W.parts[0], tb: W.parts[1], into: id, name: W.name, dist: GF.COMBO_RULES.dist });
  }
  // cat: weapon 일반무기 조합 / legend 레전더리 영웅 조합(영웅 + 영웅) / myth 신화 영웅 조합(신화 영웅 + 조합 무기 → GOAT)
  for (const C of COMBOS) {
    RECIPES.push({ key: 'h_' + C.into, hero: true, goat: !!C.w, cat: C.w ? 'myth' : 'legend', ta: 'hero_' + C.a, tb: C.w || 'hero_' + C.b, into: 'hero_' + C.into, name: HEROES[C.into].name, title: C.name, dist: C.dist || GF.COMBO_RULES.dist });
  }
  return RECIPES;
}

function all() { try { return JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { return {}; } }
export const Codex = {
  all,
  has(key) { return !!all()[key]; },
  add(key) {
    const o = all(); if (o[key]) return false;
    o[key] = Date.now();
    try { localStorage.setItem(KEY, JSON.stringify(o)); } catch (e) { /* 저장 불가 환경 */ }
    if (GF.cloudPush) GF.cloudPush();
    return true;
  },
  count() { return RECIPES.filter((r) => this.has(r.key)).length; }
};
// 조합 성공률·수수료
export const comboRate = (R) => (R.goat ? GF.COMBO_RULES.goatRate : R.hero ? GF.COMBO_RULES.heroRate : GF.COMBO_RULES.weaponRate);
export const comboFee = (R) => (R.goat ? GF.COMBO_RULES.goatFee : R.hero ? GF.COMBO_RULES.heroFee : Math.round((GF.WEAPONS[R.ta].cost + GF.WEAPONS[R.tb].cost) * GF.COMBO_RULES.weaponFee));
