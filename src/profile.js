// 내 프로필: 지휘관 이름, 훈장(유료 재화)·모집권, 보유 영웅·편성, 구매 기록. 브라우저에 저장
//   v0.51 과금 구조: 보급(크레딧)은 전투 안에서만 쓰는 돈. 계정에 쌓이는 건 훈장·모집권·영웅
import { HEROES, RECRUIT, rollHero, heroTier } from './heroes.js';
const KEY = 'gf_profile';
const today = () => new Date().toISOString().slice(0, 10);
export const Profile = {
  data: { name: '', medals: 0, tickets: 0, heroes: {}, squad: [], pity: 0, perks: {}, purchases: [] },
  load() {
    try { Object.assign(this.data, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) { /* 저장 불가 환경 */ }
    const d = this.data;
    d.heroes = d.heroes || {}; d.squad = (d.squad || []).filter((id) => HEROES[id] && d.heroes[id]); d.perks = d.perks || {}; d.purchases = d.purchases || [];
    for (const id of Object.keys(d.heroes)) if (!HEROES[id]) delete d.heroes[id];   // 삭제된 영웅 정리
    // v0.51 옮기기: 예전 보급창(전투에 꺼내 쓰던 보급)은 훈장으로 10:1 바꿈 + 신병 지원 모집권 3장
    if (!d.v51) {
      d.v51 = 1; d.medals = (d.medals || 0) + Math.floor((d.credits || 0) / 10); d.credits = 0; d.tickets = (d.tickets || 0) + 3;
      this.save(true);
    }
    return this;
  },
  save(local) { this.data.t = Date.now(); try { localStorage.setItem(KEY, JSON.stringify(this.data)); } catch (e) { /* 저장 불가 환경 */ } if (!local && GF.cloudPush) GF.cloudPush(); },
  get name() { return this.data.name || '지휘관'; },
  setName(n) { this.data.name = String(n || '').trim().slice(0, 12); this.save(); },
  get medals() { return this.data.medals || 0; },
  get tickets() { return this.data.tickets || 0; },
  addMedals(n, memo) { this.data.medals = this.medals + n; if (memo) this.data.purchases.push({ t: Date.now(), memo, n }); this.save(); },
  addTickets(n, memo) { this.data.tickets = this.tickets + n; if (memo) this.data.purchases.push({ t: Date.now(), memo, n }); this.save(); },
  // 보유 영웅: { id: 뽑은 횟수 }. 계급 ★ = 중복 수 (최대 ★5)
  owns(id) { return !!this.data.heroes[id]; },
  stars(id) { return Math.min(RECRUIT.starMax, Math.max(0, (this.data.heroes[id] || 0) - 1)); },
  // 영웅 모집: 모집권 먼저, 없으면 훈장 100
  recruit() {
    const d = this.data;
    if (d.tickets > 0) d.tickets--;
    else if (d.medals >= RECRUIT.medalCost) d.medals -= RECRUIT.medalCost;
    else return { fail: `모집권이나 훈장 ${RECRUIT.medalCost}개가 필요합니다` };
    const r = rollHero(d.pity || 0), isNew = !d.heroes[r.id];
    d.pity = r.legend ? 0 : (d.pity || 0) + 1;
    d.heroes[r.id] = (d.heroes[r.id] || 0) + 1;
    if (isNew && d.squad.length < GF.SETTINGS.squadSize) d.squad.push(r.id);   // 빈 편성 칸이 있으면 바로 편성
    this.save();
    return { id: r.id, isNew, stars: this.stars(r.id), tier: heroTier(r.id) };
  },
  // 출격 편성: 최대 squadSize 명. 누르면 넣고 빼기
  toggleSquad(id) {
    const s = this.data.squad, i = s.indexOf(id);
    if (i >= 0) s.splice(i, 1);
    else if (this.owns(id)) { if (s.length >= GF.SETTINGS.squadSize) s.shift(); s.push(id); }
    this.save();
  },
  get squad() { return this.data.squad.filter((id) => HEROES[id]); },
  // 전투 승리 보상 훈장: 도시×난이도 첫 완료는 크게, 그다음부터는 조금
  winMedals(first, diff) { const n = first ? ({ easy: 50, normal: 80, hard: 120 }[diff] || 80) : 15; this.addMedals(n); return n; },
  // 월정액 보급: 30일 동안 하루 한 번 훈장 60
  dailyMonthly() {
    const m = this.data.perks.monthly; if (!m || m.until < today() || m.last === today()) return 0;
    m.last = today(); this.addMedals(60); return 60;
  }
};
GF.Profile = Profile.load();   // 시작할 때 저장된 프로필을 읽어 옴
