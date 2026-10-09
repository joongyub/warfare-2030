// 저장한 게임: 도시 × 난이도마다 한 칸 (브라우저 localStorage 'gf_saves' = { 'moscow:normal': data, ... })
// 예전 저장(키가 도시 이름만)은 읽을 때 그 저장의 난이도 칸으로 옮김
const KEY = 'gf_saves';
const DEL = 'gf_saves_del';
export const saveKey = (stage, diff) => stage + ':' + diff;
const legacyDiff = (id, d) => (GF.diffFor && GF.STAGES[id] ? GF.diffFor(GF.STAGES[id], d.diff || 'normal') : d.diff || 'normal');
function all() {
  let o; try { o = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { return {}; }
  let moved = false;
  Object.keys(o).forEach((k) => {
    if (k.includes(':')) return;
    const d = o[k], nk = saveKey(k, legacyDiff(k, d || {}));
    if (d) { d.diff = nk.split(':')[1]; if (!o[nk] || (o[nk].time || 0) < (d.time || 0)) o[nk] = d; }
    delete o[k]; moved = true;
  });
  if (moved) write(o);
  return o;
}
function del() { try { return JSON.parse(localStorage.getItem(DEL) || '{}') || {}; } catch (e) { return {}; } }
const push = () => { if (GF.cloudPush) GF.cloudPush(); };   // 구글 로그인 중이면 서버에도 올림 (cloud.js)
function write(o) { try { localStorage.setItem(KEY, JSON.stringify(o)); return true; } catch (e) { return false; } }
export const Saves = {
  all,
  key: saveKey,
  get(stage, diff) { return all()[saveKey(stage, diff)] || null; },
  // 한 도시의 난이도별 저장 { normal: data, hard: data }
  of(stage) { const o = all(), r = {}; Object.keys(o).forEach((k) => { const [s, d] = k.split(':'); if (s === stage) r[d] = o[k]; }); return r; },
  put(d) { const o = all(); o[saveKey(d.stage, d.diff)] = d; const ok = write(o); push(); return ok; },
  // 지운 시각도 남겨 다른 기기와 합칠 때 되살아나지 않게 함
  remove(stage, diff) { const k = saveKey(stage, diff), o = all(); delete o[k]; write(o); const x = del(); x[k] = Date.now(); try { localStorage.setItem(DEL, JSON.stringify(x)); } catch (e) { /* 저장 불가 환경 */ } push(); },
  when(t) { const d = new Date(t), p = (n) => String(n).padStart(2, '0'); return `${d.getMonth() + 1}/${d.getDate()} ${p(d.getHours())}:${p(d.getMinutes())}`; }
};

// 도시별·난이도별 방어 완료 기록 (localStorage 'gf_clears' = { stage: { easy|normal|hard: { stars, kills, lives, time, at } } })
const CKEY = 'gf_clears';
function clears() { try { return JSON.parse(localStorage.getItem(CKEY) || '{}') || {}; } catch (e) { return {}; } }
export const Clears = {
  all: clears,
  get(stage) { return clears()[stage] || {}; },
  // 더 좋은 기록(별이 많거나 같으면 남은 기지가 많은 쪽)만 남김. 처음 완료면 true
  add(stage, diff, rec) {
    const o = clears(), s = o[stage] || (o[stage] = {}), old = s[diff];
    if (!old || rec.stars > old.stars || (rec.stars === old.stars && rec.lives > old.lives)) s[diff] = rec;
    try { localStorage.setItem(CKEY, JSON.stringify(o)); } catch (e) { /* 저장 불가 환경 */ }
    push();
    return { first: !old, best: !old || s[diff] === rec };
  }
};
