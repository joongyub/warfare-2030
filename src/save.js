// 저장한 게임: 스테이지마다 한 칸 (브라우저 localStorage 'gf_saves')
const KEY = 'gf_saves';
function all() { try { return JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { return {}; } }
const DEL = 'gf_saves_del';
function del() { try { return JSON.parse(localStorage.getItem(DEL) || '{}') || {}; } catch (e) { return {}; } }
const push = () => { if (GF.cloudPush) GF.cloudPush(); };   // 구글 로그인 중이면 서버에도 올림 (cloud.js)
function write(o) { try { localStorage.setItem(KEY, JSON.stringify(o)); return true; } catch (e) { return false; } }
export const Saves = {
  all,
  get(stage) { return all()[stage] || null; },
  put(d) { const o = all(); o[d.stage] = d; const ok = write(o); push(); return ok; },
  // 지운 시각도 남겨 다른 기기와 합칠 때 되살아나지 않게 함
  remove(stage) { const o = all(); delete o[stage]; write(o); const x = del(); x[stage] = Date.now(); try { localStorage.setItem(DEL, JSON.stringify(x)); } catch (e) { /* 저장 불가 환경 */ } push(); },
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
