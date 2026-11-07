// 첫 판 안내 (튜토리얼): 서울 첫 판에서 '무기 고르기 → 설치 → 전투 시작 → 강화 → 작전 카드 → 영웅' 순서로 짧게 안내
//   게임을 멈추지 않고, 해야 할 곳에 노란 테두리를 깜빡임. 해 보면 다음 단계로 넘어감. '건너뛰기' 로 언제든 끔
//   한 번 끝내거나 건너뛰면 이 기기에 기억 (localStorage 'gf_tutorial'). 다시 보려면 주소 끝에 ?tutorial=1
//   단계 바꾸기: 아래 STEPS 의 text(안내 글) · at(가리킬 화면 요소, CSS 선택자) · done(넘어갈 조건) · auto(이 웨이브가 되면 자동으로 넘김)
const KEY = 'gf_tutorial';
const STEPS = [
  { text: '아래 <b>무기 카드</b>를 눌러 설치할 무기를 고르세요. 카드 오른쪽 아래 숫자가 가격이에요.', at: '.cgrid .card', done: (g) => !!g.mode || g.towers.length > 0 },
  { text: '도로 옆 <b>회색 공간</b>을 눌러 무기를 설치하세요. 적은 도로를 따라 기지로 와요.', done: (g) => g.towers.length > 0 },
  { text: '무기를 두세 개 더 놓고, 준비되면 오른쪽 아래 <b>작전 개시</b>를 누르세요.', at: '.nextwave', done: (g) => g.state === 'battle' },
  { text: '설치한 무기를 누르면 정보 창이 열려요. 보급이 모이면 <b>강화</b>를 눌러 더 세게 만드세요.', at: (g) => (g.selected ? '.tpanel .up' : null), done: (g) => g.towers.some((t) => t.level > 1), auto: 4 },
  { text: '오른쪽 <b>작전 카드</b>는 전투 중에 CP가 차면 쓸 수 있어요. 공습·보급 같은 카드를 눌러 써 보세요.', at: '.ops', done: (g, T) => g.cp < T.cp0, auto: 6 },
  { text: '<b>영웅 본부</b>에서 영웅을 모집·편성하면 전투 중 왼쪽 영웅 칸에서 꺼내 배치할 수 있어요. 영웅 곁 무기는 더 강해져요. 행운을 빌어요, 지휘관님!', at: '.tr .hq', end: true }
];

export class Tutorial {
  static wanted(app) {
    const g = app.game;
    if (new URLSearchParams(location.search).get('tutorial') === '1') return true;
    try { if (localStorage.getItem(KEY)) return false; } catch (e) { return false; }
    return app.stage.id === 'seoul' && g.waveNo === 0 && g.towers.length === 0;
  }
  constructor(ui) {
    this.ui = ui; this.i = -1; this.t = 0;
    this.box = document.createElement('div'); this.box.className = 'tut';
    this.box.innerHTML = '<small class="tut-n"></small><p></p><div class="tut-b"><button class="tut-skip">건너뛰기</button><button class="tut-ok">확인</button></div>';
    this.ring = document.createElement('div'); this.ring.className = 'tut-ring';
    ui.hud.append(this.ring, this.box);
    this.box.querySelector('.tut-skip').onclick = () => this.finish();
    this.box.querySelector('.tut-ok').onclick = () => (STEPS[this.i].end ? this.finish() : this.next());
    this.next();
  }
  next() {
    this.i++; this.t = 0;
    if (this.i >= STEPS.length) return this.finish();
    const s = STEPS[this.i];
    this.cp0 = this.ui.g.cp;
    this.box.querySelector('.tut-n').textContent = `첫 판 안내 ${this.i + 1} / ${STEPS.length}`;
    this.box.querySelector('p').innerHTML = s.text;
    this.box.querySelector('.tut-ok').style.display = s.end ? '' : 'none';
    this.box.classList.remove('pop'); void this.box.offsetWidth; this.box.classList.add('pop');
  }
  finish() {
    try { localStorage.setItem(KEY, '1'); } catch (e) { /* 저장 불가 환경 */ }
    this.box.remove(); this.ring.remove(); this.done = true;
    if (this.ui.tut === this) this.ui.tut = null;
  }
  update(dt) {
    if (this.done) return;
    const g = this.ui.g, s = STEPS[this.i];
    if (!this.ui.hud || !this.ui.hud.contains(this.box)) { this.done = true; return; }   // 전투 화면을 나감 (다음에 다시 안내)
    this.t += dt;
    if (s.done && this.t > 0.6 && (s.done(g, this) || (s.auto && g.waveNo >= s.auto))) { this.next(); return; }
    if (g.cp > this.cp0) this.cp0 = g.cp;   // CP가 차오르는 건 따라감 (줄어들면 카드를 쓴 것)
    // 가리킬 곳에 테두리
    const sel = typeof s.at === 'function' ? s.at(g) : s.at, el = sel && this.ui.hud.querySelector(sel);
    if (el && el.offsetParent) {
      const r = el.getBoundingClientRect(), rr = this.ui.root.getBoundingClientRect(), k = this.ui.scale;
      const st = this.ring.style; st.display = 'block';
      st.left = ((r.left - rr.left) / k - 6) + 'px'; st.top = ((r.top - rr.top) / k - 6) + 'px';
      st.width = (r.width / k + 12) + 'px'; st.height = (r.height / k + 12) + 'px';
    } else this.ring.style.display = 'none';
  }
}
