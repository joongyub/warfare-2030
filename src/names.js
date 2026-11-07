// 무기 이름: 실제 이름(name) ↔ 가상 이름(altName)
//   공개판은 가상 이름이 기본 (방산업체 상표 문제를 피함), 친구판은 실제 이름. 설정 ⚙ 에서 바꾸면 그 값이 우선 (gf_prefs realNames)
//   desc 안의 {무기id} 는 지금 쓰는 이름으로 바꿔 넣음
export const useRealNames = (S = GF.SETTINGS) => (S.realNames == null ? S.weaponNames === 'real' : !!S.realNames);
export function applyWeaponNames(real = useRealNames()) {
  const W = GF.WEAPONS;
  for (const id in W) {
    const w = W[id];
    if (w._real == null) { w._real = w.name; w._desc = w.desc; }
    w.name = real || !w.altName ? w._real : w.altName;
  }
  for (const id in W) { const w = W[id]; if (w._desc) w.desc = w._desc.replace(/\{(\w+)\}/g, (m, k) => (W[k] ? W[k].name : m)); }
  return real;
}
