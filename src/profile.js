// 내 프로필: 지휘관 이름, 보급창(충전한 보급), 구매 기록. 브라우저에 저장
const KEY = 'gf_profile';
export const Profile = {
  data: { name: '', credits: 0, purchases: [] },
  load() {
    try { Object.assign(this.data, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) { /* 저장 불가 환경 */ }
    return this;
  },
  save() { this.data.t = Date.now(); try { localStorage.setItem(KEY, JSON.stringify(this.data)); } catch (e) { /* 저장 불가 환경 */ } if (GF.cloudPush) GF.cloudPush(); },
  get name() { return this.data.name || '지휘관'; },
  setName(n) { this.data.name = String(n || '').trim().slice(0, 12); this.save(); },
  get credits() { return this.data.credits || 0; },
  addCredits(n, memo) { this.data.credits = this.credits + n; if (memo) this.data.purchases.push({ t: Date.now(), memo, n }); this.save(); },
  spend(n) { if (this.credits < n) return false; this.data.credits -= n; this.save(); return true; }
};
GF.Profile = Profile;
