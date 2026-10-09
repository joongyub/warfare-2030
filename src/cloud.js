// 구글 로그인 + 서버 저장 (Firebase). 사람마다 자기 구글 계정 칸(players/<uid>)에 저장
// GF.SETTINGS.firebase 에 Firebase 웹 앱 설정을 넣어야 켜짐. 없으면 지금처럼 이 기기에만 저장
// 서버에 올리는 것: 저장한 게임(스테이지별), 지운 기록, 별 기록, 지휘관 이름·보급창
const SDK = 'https://www.gstatic.com/firebasejs/10.14.1/';
const load = (f) => import(SDK + f);   // 주소를 변수로 넘겨 빌드에 넣지 않고 필요할 때만 받음
const K = { saves: 'gf_saves', del: 'gf_saves_del', progress: 'gf_progress', profile: 'gf_profile', codex: 'gf_codex' };
const read = (k) => { try { return JSON.parse(localStorage.getItem(k) || '{}') || {}; } catch (e) { return {}; } };
const write = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* 저장 불가 환경 */ } };

export const Cloud = {
  enabled: !!(GF.SETTINGS.firebase && GF.SETTINGS.firebase.apiKey),
  user: null, busy: false, error: '', fb: null, timer: 0, subs: [],
  onChange(fn) { this.subs.push(fn); },
  emit() { this.subs.forEach((fn) => { try { fn(this); } catch (e) { console.warn(e); } }); },

  async init() {
    if (!this.enabled) return;
    try {
      const [app, auth, fs] = await Promise.all([load('firebase-app.js'), load('firebase-auth.js'), load('firebase-firestore.js')]);
      const a = app.initializeApp(GF.SETTINGS.firebase);
      this.fb = { auth, fs, A: auth.getAuth(a), db: fs.getFirestore(a) };
      auth.getRedirectResult(this.fb.A).catch(() => {});
      auth.onAuthStateChanged(this.fb.A, (u) => {
        this.user = u ? { uid: u.uid, name: u.displayName || u.email || '지휘관', email: u.email || '' } : null;
        this.emit();
        if (u) this.pull();
      });
    } catch (e) { this.enabled = false; this.error = '서버에 연결할 수 없어요'; console.warn('cloud', e); this.emit(); }
  },
  async signIn() {
    if (!this.fb) return;
    const { auth, A } = this.fb, p = new auth.GoogleAuthProvider();
    p.setCustomParameters({ prompt: 'select_account' });
    try { await auth.signInWithPopup(A, p); } catch (e) {
      // 팝업이 막힌 기기는 페이지를 넘겨서 로그인
      if (/popup-blocked|operation-not-supported/.test(e.code || '')) return auth.signInWithRedirect(A, p);
      if (!/popup-closed|cancelled-popup/.test(e.code || '')) { this.error = '로그인 실패: ' + (e.code || e.message); this.emit(); }
    }
  },
  async signOut() { if (this.fb) await this.fb.auth.signOut(this.fb.A); },

  // 서버 기록과 이 기기 기록을 합침: 스테이지마다 더 나중에 저장(또는 삭제)한 쪽, 별은 큰 쪽
  merge(remote) {
    const saves = read(K.saves), del = read(K.del), rs = remote.saves || {}, rd = remote.del || {};
    const ids = new Set([...Object.keys(saves), ...Object.keys(del), ...Object.keys(rs), ...Object.keys(rd)]);
    const outS = {}, outD = {};
    ids.forEach((id) => {
      const c = [[saves[id], (saves[id] || {}).time || 0], [rs[id], (rs[id] || {}).time || 0], [null, del[id] || 0], [null, rd[id] || 0]];
      let best = c[0]; c.forEach((x) => { if (x[1] > best[1]) best = x; });
      if (best[0]) outS[id] = best[0]; else if (best[1]) outD[id] = best[1];
    });
    const prog = read(K.progress), rp = remote.progress || {};
    Object.keys(rp).forEach((id) => { prog[id] = Math.max(prog[id] || 0, rp[id] || 0); });
    const prof = read(K.profile), rf = remote.profile || {};
    if ((rf.t || 0) > (prof.t || 0)) Object.assign(prof, { name: rf.name || prof.name || '', credits: rf.credits || 0, t: rf.t });   // 더 나중에 바뀐 쪽
    if (!prof.purchases) prof.purchases = [];
    const cx = read(K.codex), rc = remote.codex || {};   // 무기도감: 발견한 조합은 양쪽 모두 합침
    Object.keys(rc).forEach((k) => { cx[k] = Math.min(cx[k] || Infinity, rc[k]); });
    write(K.codex, cx);
    write(K.saves, outS); write(K.del, outD); write(K.progress, prog); write(K.profile, prof);
  },
  async pull() {
    if (!this.fb || !this.user) return;
    const { fs, db } = this.fb;
    this.busy = true; this.emit();
    try {
      const snap = await fs.getDoc(fs.doc(db, 'players', this.user.uid));
      if (snap.exists()) this.merge(snap.data());
      if (GF.Profile) GF.Profile.load();
      this.error = '';
      await this.upload();
    } catch (e) { this.error = '서버 저장을 불러오지 못했어요'; console.warn('cloud pull', e); }
    this.busy = false; this.emit();
  },
  async upload() {
    if (!this.fb || !this.user) return;
    const { fs, db } = this.fb, prof = read(K.profile);
    await fs.setDoc(fs.doc(db, 'players', this.user.uid), {
      saves: read(K.saves), del: read(K.del), progress: read(K.progress), codex: read(K.codex),
      profile: { name: prof.name || '', credits: prof.credits || 0, t: prof.t || 0 }, updated: Date.now()
    });
  },
  // 저장할 때마다 부름 (잠깐 모았다가 한 번에 올림)
  push() {
    if (!this.user) return;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => { this.upload().then(() => { if (this.error) { this.error = ''; this.emit(); } }).catch((e) => { this.error = '서버 저장 실패 (이 기기에는 저장됨)'; console.warn('cloud push', e); this.emit(); }); }, 1200);
  }
};
GF.cloudPush = () => Cloud.push();
GF.Cloud = Cloud;   // 게임 쪽에서 로그인 여부 확인용 (웨이브 자동 저장)
