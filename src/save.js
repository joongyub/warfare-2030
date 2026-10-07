// 저장한 게임: 스테이지마다 한 칸 (브라우저 localStorage 'gf_saves')
const KEY = 'gf_saves';
function all() { try { return JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { return {}; } }
function write(o) { try { localStorage.setItem(KEY, JSON.stringify(o)); return true; } catch (e) { return false; } }
export const Saves = {
  all,
  get(stage) { return all()[stage] || null; },
  put(d) { const o = all(); o[d.stage] = d; return write(o); },
  remove(stage) { const o = all(); delete o[stage]; write(o); },
  when(t) { const d = new Date(t), p = (n) => String(n).padStart(2, '0'); return `${d.getMonth() + 1}/${d.getDate()} ${p(d.getHours())}:${p(d.getMinutes())}`; }
};
