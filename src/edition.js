// 판(에디션) 고르기: 공개판(스토어·공개 주소용) / 친구판(예전 그림·대사)
//   data/settings.js 의 edition 과 editions 표를 읽어 GF.SETTINGS 에 덮어씀 (homeBg, 자막, 초상 그림 …)
//   주소 끝에 ?edition=friends 를 붙이면 친구판으로 바뀌고 이 기기에 기억됨 (?edition=public 으로 되돌림)
const KEY = 'gf_edition';
export function applyEdition(S = GF.SETTINGS) {
  const E = S.editions || {};
  let want = new URLSearchParams(location.search).get('edition');
  try {
    if (want && E[want]) localStorage.setItem(KEY, want);
    else want = localStorage.getItem(KEY);
  } catch (e) { /* 저장 불가 환경 */ }
  const id = E[want] ? want : (E[S.edition] ? S.edition : Object.keys(E)[0]);
  if (id) Object.assign(S, E[id], { edition: id });
  return id;
}
