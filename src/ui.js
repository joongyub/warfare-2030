// 화면 위 정보창 (HTML로 만듦). 1920x1080 기준으로 만들고 창 크기에 맞게 확대·축소
// 배치는 서울 시안 그대로: 왼쪽 위 제목, 오른쪽 위 기지·보급·웨이브·배속·일시정지·설정, 아래 카드 줄 + 다음 웨이브
import { Profile } from './profile.js';
import { Cloud } from './cloud.js';
import { layout } from './layout.js';
import { HEROES, HERO_IDS, GACHA } from './heroes.js';
import { Saves } from './save.js';
// 화면 글자·위치가 바뀔 때만 실제로 씀 (매 프레임 다시 쓰면 휴대폰에서 끊김)
const putCache = new WeakMap();
function put(o, k, v) {
  let c = putCache.get(o); if (!c) putCache.set(o, (c = {}));
  if (c[k] !== v) { c[k] = v; o[k] = v; }
}
const won = (n) => '₩' + n.toLocaleString('ko-KR');
const h = (tag, cls, html, parent) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; if (parent) parent.appendChild(e); return e; };

export class UI {
  constructor(app) {
    this.app = app;
    this.root = document.getElementById('hud');
    this.fit(); window.addEventListener('resize', () => this.fit());
    this.floats = [];
    this.labelLayer = h('div', 'labels', null, this.root);
    this.labelEls = [];
  }
  get g() { return this.app.game; }
  cityName() { const S = this.app.stage; return GF.SETTINGS.useCityAlias ? S.alias : S.name; }

  fit() {
    const L = this.L = layout();
    this.scale = L.k; this.BW = L.base.w; this.BH = L.base.h;
    this.root.style.width = L.base.w + 'px'; this.root.style.height = L.base.h + 'px';
    this.root.classList.toggle('mobile', L.mobile);
    document.body.classList.toggle('touch', L.mobile);
    this.root.style.transform = `translate(${L.x}px, ${L.y}px) scale(${L.k})`;
  }

  // ---------- 시작 화면 ----------
  showTitle(icons) {
    this.icons = icons;
    const S = this.app.stage, best = this.best();
    const t = this.title = h('div', 'title-screen', null, this.root);
    // 홈 배경 그림 (settings.homeBg). 없으면 뒤의 3D 전장이 보임
    if (GF.SETTINGS.homeBg) { t.classList.add('has-bg'); t.style.setProperty('--home-bg', `url("${GF.SETTINGS.homeBg}")`); }
    t.innerHTML = `
      <div class="brand"><span>MODERN WAR TOWER DEFENSE</span><h1>2030 Warfare 1</h1><p>부카니스탄이 세계 50개 도시를 침공했다. 연합군 지휘관으로서 도시를 지켜라.</p></div>
      <div class="profile-card">
        <div class="pc-title">지휘관 프로필</div>
        <div class="pc-cloud"></div>
        <div class="pc-row"><input class="pc-name" maxlength="12" placeholder="이름을 정하세요" value=""><button class="pc-save">저장</button></div>
        <div class="pc-stat"><span>보급창</span><b class="pc-cred"></b></div>
        <div class="pc-stat"><span>${S.name} 최고 기록</span><b>${'★'.repeat(best)}${'☆'.repeat(3 - best)}</b></div>
        <button class="pc-shop">🛒 상점 · 보급 충전</button>
        <button class="pc-hero">🎖 전설의 영웅 보기</button>
        <button class="pc-fs">⛶ 전체 화면으로 하기</button>
        <button class="pc-install">📲 앱으로 설치하기</button>
        <label class="pc-gq"><span>그래픽</span>${this.gqSelect()}</label>
        <div class="pc-saves"></div>
      </div>
      <div class="brief home">
        <div class="home-cta">2030 연합방위전선 · 도시 ${this.stageList().length}곳 · 별 ${this.stageList().reduce((n, X) => n + this.best(X.id), 0)}/${this.stageList().length * 3}</div>
        <div class="go-row"><button class="go">⚔ 전투지역</button></div>
        <div class="help">조작: 마우스 끌기·방향키 지도 이동 · 휠 확대·축소 · 오른쪽 버튼 끌기 또는 [ ] 키 시점 회전 · R 기본 시점 · 1~9 무기 · Q W E 작전 카드 · Z ICBM · X 전략핵 · 스페이스 일시정지 · N 다음 웨이브</div>
        <div class="disc">이 게임은 가상의 이야기입니다. 실제 국가·단체·사건과 관계없습니다. · v${GF.SETTINGS.version}</div>
      </div>`;
    t.querySelector('.go').onclick = () => this.openZone();
    t.querySelector('.pc-gq select').onchange = (e) => { GF.SETTINGS.graphics = e.target.value; this.app.applySettings(); this.toastAny('그래픽: ' + e.target.selectedOptions[0].textContent); };
    this.renderSaves();
    const inp = t.querySelector('.pc-name'); inp.value = Profile.data.name || '';
    const saveName = () => { Profile.setName(inp.value); this.toastAny('지휘관 이름 저장: ' + Profile.name); };
    t.querySelector('.pc-save').onclick = saveName;
    inp.onkeydown = (e) => { if (e.key === 'Enter') saveName(); };
    t.querySelector('.pc-shop').onclick = () => this.openShop('charge');
    t.querySelector('.pc-hero').onclick = () => this.openShop('hero');
    t.querySelector('.pc-fs').onclick = () => this.fullscreen();
    t.querySelector('.pc-install').onclick = () => {
      const ip = window.__installPrompt; if (!ip) return;
      ip.prompt(); ip.userChoice.then(() => { window.__installPrompt = null; document.body.classList.remove('can-install'); });
    };
    if (this.L.mobile) t.querySelector('.help').textContent = '조작: 무기 카드 터치 → 회색 공간 터치로 배치 · 한 손가락 끌기 이동 · 두 손가락 벌리기 확대 · 두 손가락 비틀기 회전 · 무기 터치로 강화 · 같은 카드 다시 터치하면 취소';
    this.renderCloud(true);
    this.refreshProfile();
  }
  // 구글 로그인 칸: 로그인하면 어느 기기에서든 같은 저장을 불러옴
  renderCloud(first) {
    const t = this.title; if (!t) return;
    const box = t.querySelector('.pc-cloud'), C = Cloud;
    if (!first && this.cloudBusy && !C.busy) { this.cloudBusy = false; this.hideTitle(); this.showTitle(this.icons); return; }  // 서버 기록 받아 옴 → 화면 새로
    this.cloudBusy = C.busy;
    if (!C.enabled) { box.innerHTML = C.error ? `<div class="cl-err">${C.error}</div>` : ''; return; }
    if (!C.user) {
      box.innerHTML = `<button class="cl-in"><i>G</i>구글로 로그인 <small>어느 기기에서나 이어하기</small></button>${C.error ? `<div class="cl-err">${C.error}</div>` : ''}`;
      box.querySelector('.cl-in').onclick = () => C.signIn();
    } else {
      box.innerHTML = `<div class="cl-on"><span>☁ <b></b> · ${C.busy ? '서버 기록 불러오는 중…' : '서버에 자동 저장'}</span><button class="cl-out">로그아웃</button></div>${C.error ? `<div class="cl-err">${C.error}</div>` : ''}`;
      box.querySelector('b').textContent = C.user.name;
      box.querySelector('.cl-out').onclick = () => C.signOut();
    }
  }
  // 처음 화면: 저장된 게임 목록 + 이어하기 버튼
  renderSaves() {
    const t = this.title; if (!t) return;
    const all = Saves.all();
    const list = this.stageList().filter((X) => all[X.id]);
    const box = t.querySelector('.pc-saves');
    box.innerHTML = `<div class="pc-title sv-t">💾 저장된 게임</div>` + (list.length ? list.map((X) => {
      const d = all[X.id];
      return `<div class="sv" data-id="${X.id}"><div class="sv-i"><b>${X.name}</b><span>웨이브 ${d.wave + 1}/${X.waves.length} · 기지 ${d.lives}/${X.lives} · 보급 ${d.money}</span><small>${Saves.when(d.time)} 저장 · 무기 ${d.towers.length}대</small></div><button class="sv-load">불러오기</button><button class="sv-del" title="삭제">✕</button></div>`;
    }).join('') : '<div class="sv-none">아직 없어요. 전투 중 💾 버튼으로 저장하세요.</div>');
    box.querySelectorAll('.sv').forEach((row) => {
      const id = row.dataset.id;
      row.querySelector('.sv-load').onclick = () => this.app.loadGame(id);
      const del = row.querySelector('.sv-del');
      del.onclick = () => {
        if (!del.classList.contains('ask')) { del.classList.add('ask'); del.textContent = '삭제?'; setTimeout(() => { if (del.isConnected) { del.classList.remove('ask'); del.textContent = '✕'; } }, 2500); return; }
        Saves.remove(id); this.renderSaves(); this.toastAny('저장된 게임을 지웠어요');
      };
    });
  }
  hideTitle() { this.closeZone(); if (this.title) { this.title.remove(); this.title = null; } }

  // ---------- 전투지역: 도시별 진행 상황 + 맵 모양 썸네일 → 전투시작 ----------
  openZone() {
    if (this.zone || !this.title) return;
    this.title.style.display = 'none';
    const z = this.zone = h('div', 'zone-screen' + (GF.SETTINGS.homeBg ? ' has-bg' : ''), null, this.root);
    if (GF.SETTINGS.homeBg) z.style.setProperty('--home-bg', `url("${GF.SETTINGS.homeBg}")`);
    const all = Saves.all(), list = this.stageList();
    z.innerHTML = `<div class="zn-head"><button class="zn-back">← 홈</button><div><b>전투지역</b><span>지킬 도시를 고르고 전투시작을 누르세요</span></div></div>
      <div class="zn-grid">${list.map((X) => `<button class="zn-card" data-id="${X.id}"><canvas width="228" height="176"></canvas><div class="zn-n"><small>${X.no}</small><b>${GF.SETTINGS.useCityAlias ? X.alias : X.name}</b><i>${this.stars(this.best(X.id))}</i></div>${this.zoneStatus(X, all[X.id])}</button>`).join('')}</div>
      <div class="zn-side"></div>`;
    z.querySelectorAll('.zn-card').forEach((b) => {
      this.drawMap(b.querySelector('canvas'), GF.STAGES[b.dataset.id]);
      b.onclick = () => this.zonePick(b.dataset.id);
    });
    z.querySelector('.zn-back').onclick = () => this.closeZone();
    this.zonePick(this.app.stage.id);
  }
  closeZone() { if (!this.zone) return; this.zone.remove(); this.zone = null; if (this.title) this.title.style.display = ''; }
  stars(n) { return '★'.repeat(n) + '☆'.repeat(3 - n); }
  // 도시 카드 아래 진행 상황: 저장된 전투 / 방어 성공(별) / 미출격
  zoneStatus(X, d) {
    const best = this.best(X.id);
    if (d) { const p = Math.round(100 * d.wave / X.waves.length); return `<div class="zn-st run"><span>교전 중 · 웨이브 ${d.wave + 1}/${X.waves.length}</span><div class="zn-bar"><i style="width:${p}%"></i></div></div>`; }
    if (best) return `<div class="zn-st win"><span>방어 성공 · 최고 ${this.stars(best)}</span><div class="zn-bar"><i style="width:100%"></i></div></div>`;
    return `<div class="zn-st new"><span>미출격 · 적 점령 위기</span><div class="zn-bar"><i style="width:0"></i></div></div>`;
  }
  zonePick(id) {
    const z = this.zone; if (!z) return;
    const X = GF.STAGES[id], d = Saves.get(id);
    this.zoneSel = id;
    z.querySelectorAll('.zn-card').forEach((b) => b.classList.toggle('on', b.dataset.id === id));
    const side = z.querySelector('.zn-side');
    side.innerHTML = `<canvas class="zn-big" width="600" height="340"></canvas>
      <div class="zn-no">STAGE ${X.no} · ${X.nameEn}</div>
      <div class="zn-city">${GF.SETTINGS.useCityAlias ? X.alias : X.name}<em>${X.title}</em></div>
      <p>${X.briefing}</p>
      <div class="zn-meta">웨이브 ${X.waves.length} · 기지 체력 ${X.lives} · 적 진입로 ${1 + (X.branches || []).length}곳 · 최고 기록 <b>${this.stars(this.best(id))}</b></div>
      <div class="zn-legend"><span class="lg-r"></span>본 도로 <span class="lg-b"></span>갈래 길 <span class="lg-g"></span>적 입구 <span class="lg-h"></span>연합 지휘부</div>
      <div class="zn-diff"><span>난이도</span>${Object.entries(GF.DIFF).map(([k, D]) => `<button data-d="${k}" class="${GF.SETTINGS.difficulty === k ? 'on' : ''}">${D.name}<small>${D.hp === 1 ? '기본 적' : `체력·수 ×${D.hp}`}</small></button>`).join('')}</div>
      <div class="zn-go">${d ? `<button class="zn-cont">▶ 이어하기<small>웨이브 ${d.wave + 1}부터${GF.DIFF[d.diff] ? ' · ' + GF.DIFF[d.diff].name : ''}</small></button>` : ''}<button class="zn-start">${d ? '새로 전투시작' : '⚔ 전투시작'}</button></div>`;
    this.drawMap(side.querySelector('.zn-big'), X);
    side.querySelector('.zn-start').onclick = () => this.zoneStart(false);
    side.querySelectorAll('.zn-diff button').forEach((b) => { b.onclick = () => { GF.SETTINGS.difficulty = b.dataset.d; GF.savePrefs(); side.querySelectorAll('.zn-diff button').forEach((x) => x.classList.toggle('on', x === b)); }; });
    const c = side.querySelector('.zn-cont'); if (c) c.onclick = () => this.zoneStart(true);
  }
  zoneStart(cont) {
    const id = this.zoneSel || this.app.stage.id;
    if (cont && Saves.get(id)) { this.app.loadGame(id); return; }
    this.app.selectStage(id);
    this.app.startGame();
  }
  // 맵 모양 썸네일: 도로(본 도로·갈래 길), 랜드마크, 강, 적 입구, 지휘부를 위에서 본 그림으로
  drawMap(cv, S) {
    const c = cv.getContext('2d'), W = cv.width, H = cv.height, B = S.bounds;
    const k = Math.min((W - 16) / (B.x1 - B.x0), (H - 16) / (B.z1 - B.z0));
    const ox = (W - (B.x1 - B.x0) * k) / 2, oz = (H - (B.z1 - B.z0) * k) / 2;
    const X = (x) => ox + (x - B.x0) * k, Z = (z) => oz + (z - B.z0) * k;
    c.clearRect(0, 0, W, H);
    c.save();
    const round = S.id === 'paris';
    c.beginPath();
    if (round) c.arc(X(0), Z(0), (B.x1 - B.x0) / 2 * k, 0, Math.PI * 2); else c.rect(X(B.x0), Z(B.z0), (B.x1 - B.x0) * k, (B.z1 - B.z0) * k);
    c.fillStyle = '#2b3a33'; c.fill(); c.clip();
    // 바둑판 블록 느낌
    c.strokeStyle = 'rgba(255,255,255,.05)'; c.lineWidth = 1;
    for (let x = Math.ceil(B.x0 / 4) * 4; x < B.x1; x += 4) { c.beginPath(); c.moveTo(X(x), Z(B.z0)); c.lineTo(X(x), Z(B.z1)); c.stroke(); }
    for (let z = Math.ceil(B.z0 / 4) * 4; z < B.z1; z += 4) { c.beginPath(); c.moveTo(X(B.x0), Z(z)); c.lineTo(X(B.x1), Z(z)); c.stroke(); }
    if (S.river && S.river.z != null) { c.fillStyle = '#2f6f9a'; c.fillRect(X(B.x0), Z(S.river.z - S.river.w / 2), (B.x1 - B.x0) * k, S.river.w * k); }
    for (const b of S.blockers || []) { c.fillStyle = b.kind === 'landmark' ? '#8c7a5a' : '#556'; c.fillRect(X(b.x - b.w / 2), Z(b.z - b.d / 2), b.w * k, b.d * k); }
    const line = (pts, col, w) => {
      if (!pts || pts.length < 2) return;
      c.beginPath(); c.moveTo(X(pts[0][0]), Z(pts[0][1])); for (const [x, z] of pts.slice(1)) c.lineTo(X(x), Z(z));
      c.strokeStyle = col; c.lineWidth = Math.max(2.5, 2.2 * k); c.lineJoin = 'round'; c.lineCap = 'round'; c.stroke();
    };
    for (const br of S.branches || []) line(br.pts, '#f2a33a', 0);
    for (const seg of S.route || []) { if (seg.choice) seg.choice.forEach((ch) => line(ch.pts, '#e8dcc0', 0)); else line(seg.pts, '#e8dcc0', 0); }
    const dot = (p, col, r) => { if (!p) return; c.beginPath(); c.arc(X(p[0]), Z(p[1]), r, 0, Math.PI * 2); c.fillStyle = col; c.fill(); c.lineWidth = 2; c.strokeStyle = '#fff'; c.stroke(); };
    dot(S.gate, '#ff4d4d', Math.max(4, 1.6 * k));
    for (const br of S.branches || []) dot(br.gate, '#ff4d4d', Math.max(3.5, 1.3 * k));
    c.restore();
    const hq = S.base; if (hq) { const s = Math.max(9, 3 * k); c.fillStyle = '#3aa0ff'; c.strokeStyle = '#fff'; c.lineWidth = 2; c.fillRect(X(hq[0]) - s / 2, Z(hq[1]) - s / 2, s, s); c.strokeRect(X(hq[0]) - s / 2, Z(hq[1]) - s / 2, s, s); }
  }

  // ---------- 출격 자막: 홈 화면 캐릭터가 아래로 작아지며 3초 동안 지휘관에게 보고 ----------
  playIntro() {
    this.intro?.remove(); clearTimeout(this.introT);
    const S = this.app.stage, city = GF.SETTINGS.useCityAlias ? S.alias : S.name;
    const last = city.charCodeAt(city.length - 1), batchim = last >= 0xac00 && last <= 0xd7a3 && (last - 0xac00) % 28 !== 0;
    const text = (GF.SETTINGS.introLine || '{name}님! {city}{ga} 빨갱이새끼들한테 다 넘어갈지경입니다. 방어해주세요!')
      .replace('{name}', Profile.name).replace('{city}', city).replace('{ga}', batchim ? '이' : '가');
    const o = this.intro = h('div', 'intro wait', `<div class="in-chars"></div><div class="in-box"><small>긴급 보고 · ${S.nameEn}</small><p></p></div>`, this.root);
    const ch = o.querySelector('.in-chars');
    if (GF.SETTINGS.homeBg) ch.style.backgroundImage = `url("${GF.SETTINGS.homeBg}")`; else ch.remove();
    const p = o.querySelector('p');
    // 새 도시를 처음 그릴 때 몇 초 멈출 수 있어 화면이 부드럽게 돌기 시작한 뒤에 3초를 셈
    let prev = performance.now(), smooth = 0;
    const t0 = prev;
    const wait = (now) => {
      smooth = now - prev < 80 ? smooth + 1 : 0; prev = now;
      if (this.intro !== o) return;
      if (smooth < 3 && now - t0 < 8000) { requestAnimationFrame(wait); return; }
      o.classList.remove('wait');
      let i = 0;
      const tick = setInterval(() => { p.textContent = text.slice(0, ++i); if (i >= text.length) clearInterval(tick); }, Math.max(18, 1700 / text.length));
      if (this.app.sound) this.app.sound.play('wave');
      this.introT = setTimeout(() => { clearInterval(tick); o.classList.add('out'); setTimeout(() => { o.remove(); if (this.intro === o) this.intro = null; }, 350); }, 3000);
    };
    requestAnimationFrame(wait);
  }
  best(id = this.app.stage.id) { try { return JSON.parse(localStorage.getItem('gf_progress') || '{}')[id] || 0; } catch (e) { return 0; } }
  stageList() { return Object.values(GF.STAGES).sort((a, b) => a.no - b.no); }
  resetLabels() { for (const { e } of this.labelEls) e.remove(); this.labelEls = []; }

  // ---------- 전투 화면 ----------
  buildHud() {
    if (this.hud) this.hud.remove();
    const S = this.app.stage, g = this.g;
    const hud = this.hud = h('div', 'hud-layer', null, this.root);
    h('div', 'tl', `<div class="logo">2030 Warfare 1</div><div class="sub">${GF.SETTINGS.useCityAlias ? this.cityName() + ' 방어전' : S.nameEn + ' · ' + S.title}</div>`, hud);
    // 내 프로필 바 (작게)
    const pb = h('div', 'pbar', `<span class="pb-ava"></span><b class="pb-name"></b><span class="pb-cred"></span><button class="pb-shop">＋ 충전</button>`, hud);
    pb.querySelector('.pb-shop').onclick = () => this.openShop('charge');
    this.eKills = h('div', 'kills', '', hud);
    const tr = h('div', 'tr', null, hud);
    const hq = h('button', 'sq hq', '<span>🎖</span><b>영웅 · 뽑기</b>', tr); hq.title = '영웅 모집 · 보급 뽑기 · 보급 충전 (H 키)'; hq.onclick = () => this.openShop('hero');
    this.bench = h('div', 'hbench', '', hud); this.benchKey = null;
    this.eLives = h('div', 'pill lives', '', tr);
    this.eMoney = h('div', 'pill money', '', tr);
    this.eWave = h('div', 'pill wave', '', tr);
    this.bSpeed = h('button', 'sq speed', '', tr); this.bSpeed.onclick = () => { g.speed = g.speed >= 3 ? 1 : g.speed + 1; };
    this.bPause = h('button', 'sq', '', tr); this.bPause.onclick = () => this.app.togglePause();
    h('button', 'sq fs-btn', '⛶', tr).onclick = () => this.fullscreen();
    const sv = h('button', 'sq save-btn', '💾', tr); sv.title = '저장하기 · 저장하고 나가기'; sv.onclick = () => this.toggleSaveBox();
    h('button', 'sq gear', '⚙', tr).onclick = () => this.toggleSettings();
    // 시점 회전 버튼 (누르고 있으면 계속 돌아감) · 가운데는 기본 시점
    const rv = h('div', 'rotv', null, hud);
    const spinBtn = (txt, dir, tip) => {
      const b = h('button', 'sq', txt, rv); b.title = tip;
      const stop = () => { this.app.cam.spin = 0; };
      b.onpointerdown = (e) => { e.preventDefault(); this.app.cam.spin = dir; };
      b.onpointerup = stop; b.onpointerleave = stop; b.onpointercancel = stop;
    };
    spinBtn('⟲', -1, '왼쪽으로 돌리기 ([ 키)');
    const rb = h('button', 'sq home-v', '⌂', rv); rb.title = '기본 시점 (R 키)'; rb.onclick = () => this.app.resetView();
    spinBtn('⟳', 1, '오른쪽으로 돌리기 (] 키)');

    // 아래 카드 줄: 무기 8
    const bar = h('div', 'bar', null, hud);
    this.cards = GF.LOADOUT.map((id, i) => {
      const c = h('div', 'card', `<img src="${this.icons[id]}"><div class="txt"><b class="wn"></b><span>${GF.WEAPONS[id].role}</span></div><div class="cost">${GF.WEAPONS[id].cost}</div><i>${i + 1}</i>`, bar);
      c.onclick = () => g.setMode(id);
      return { id, c, n: c.querySelector('.wn') };
    });
    this.bNext = h('button', 'nextwave', '', hud);
    this.bNext.onclick = () => g.callNext();

    // 작전 카드 (오른쪽)
    const ops = h('div', 'ops', '<div class="ops-title">작전 카드 <small>CP는 전투 중에 참</small></div>', bar);
    this.ops = [0, 1, 2].map((i) => {
      const o = h('div', 'op', '', ops);
      o.onclick = () => g.pickCard(i);
      return o;
    });
    this.eNext = h('div', 'op-next', '', ops);
    // 전략 무기 (ICBM · 전략핵) : 다음 웨이브 버튼 위
    const sp = h('div', 'strat', '', hud);
    this.strats = Object.entries(GF.STRATEGIC).map(([id, C]) => {
      const o = h('div', 'sb ' + id, '', sp);
      o.onclick = () => g.pickStrat(id);
      return { id, C, o };
    });
    const cpb = h('div', 'cpbar', '', ops);
    this.cpSegs = [];
    for (let i = 0; i < GF.SETTINGS.cpMax; i++) this.cpSegs.push(h('div', 'seg', '<div></div>', cpb));
    this.eCp = h('div', 'cp-num', '', ops);

    // 무기 정보 창
    this.panel = h('div', 'tpanel', '', hud);
    this.panel.innerHTML = `<b class="pt"></b><div class="pi"></div><button class="up"></button><button class="all"></button><div class="row"><button class="sell"></button><button class="close">닫기</button></div>`;
    this.panel.querySelector('.up').onclick = () => g.upgradeTower(g.selected);
    this.panel.querySelector('.all').onclick = () => g.upgradeAll(g.selected.type);
    this.panel.querySelector('.sell').onclick = () => g.sellTower(g.selected);
    this.panel.querySelector('.close').onclick = () => g.select(null);

    // 저장 창
    this.saveBox = h('div', 'settings savebox', '', hud);
    // 설정 창
    this.settings = h('div', 'settings', '', hud);
    this.renderSettings();

    this.eTip = h('div', 'tip', '', hud);
    this.eToast = h('div', 'toast', '', hud);
    this.eCombo = h('div', 'combo', '', hud);
    this.eHint = h('div', 'hint', '', hud);
    this.eDmg = h('div', 'dmgflash', '', hud);
    this.ePaused = h('div', 'paused', '일시정지', hud);
    this.refreshProfile();
  }

  // 그래픽 품질 고르기 (홈 프로필 칸·게임 안 설정에서 같이 씀)
  gqSelect() {
    const SET = GF.SETTINGS, cur = SET.graphics === 'auto' ? 'auto' : this.app.look.q;
    return `<select class="gq">${[['ultra', '최고 (기본)'], ['high', '높음'], ['medium', '보통'], ['low', '낮음 (느린 기기)'], ['auto', '자동 (느리면 낮춤)']].map(([v, n]) => `<option value="${v}" ${cur === v ? 'selected' : ''}>${n}</option>`).join('')}</select>`;
  }
  renderSettings() {
    const SET = GF.SETTINGS, s = this.settings;
    s.innerHTML = `<b>설정</b>
      <label><input type="checkbox" data-k="showLandmarkLabels" ${SET.showLandmarkLabels ? 'checked' : ''}> 랜드마크 이름표</label>
      <label><input type="checkbox" data-k="useRealWeaponNames" ${SET.useRealWeaponNames ? 'checked' : ''}> 무기 실제 이름 <small>(끄면 살짝 바꾼 이름)</small></label>
      <label><input type="checkbox" data-k="sound" ${SET.sound ? 'checked' : ''}> 효과음</label>
      <label><input type="checkbox" data-k="shadows" ${SET.shadows ? 'checked' : ''}> 그림자 <small>(느리면 끄기)</small></label>
      <label>그래픽 ${this.gqSelect()}</label>
      <div class="row"><button class="save">💾 저장하기</button><button class="savex">저장하고 나가기</button></div>
      <div class="row"><button class="home">저장 안 하고 나가기</button><button class="close">닫기</button></div>`;
    s.querySelectorAll('input').forEach((inp) => { inp.onchange = () => { SET[inp.dataset.k] = inp.checked; this.app.applySettings(); }; });
    s.querySelector('.gq').onchange = (e) => { SET.graphics = e.target.value; this.app.applySettings(); };
    s.querySelector('.save').onclick = () => { if (this.app.saveGame(false)) this.toggleSettings(false); };
    s.querySelector('.savex').onclick = () => { this.toggleSettings(false); this.app.saveGame(true); };
    s.querySelector('.home').onclick = () => { this.toggleSettings(false); this.app.toTitle(); };
    s.querySelector('.close').onclick = () => this.toggleSettings(false);
  }
  toggleSaveBox(on) {
    const b = this.saveBox, show = on == null ? b.style.display !== 'block' : on;
    if (show) {
      const g = this.g, S = this.app.stage, d = g.serialize(), old = Saves.get(S.id);
      this.toggleSettings(false);
      b.innerHTML = `<b>게임 저장</b>
        <div class="sv-now">${d ? `지금 저장하면 <em>웨이브 ${d.wave + 1}</em>부터 이어서 해요.<br>기지 ${d.lives}/${S.lives} · 보급 ${d.money} · 무기 ${d.towers.length}대` : '지금은 저장할 수 없어요.'}</div>
        ${d && d.wave < g.waveNo ? '<small>웨이브 도중이라 이 웨이브는 처음부터 다시 시작해요.</small>' : ''}
        ${old ? `<small>이전 저장(${Saves.when(old.time)}, 웨이브 ${old.wave + 1})은 덮어써요.</small>` : ''}
        <div class="row"><button class="save">💾 저장하기</button><button class="savex">저장하고 나가기</button></div>
        <div class="row"><button class="close">계속하기</button></div>`;
      b.querySelector('.save').onclick = () => { if (this.app.saveGame(false)) this.toggleSaveBox(false); };
      b.querySelector('.savex').onclick = () => { this.toggleSaveBox(false); this.app.saveGame(true); };
      b.querySelector('.close').onclick = () => this.toggleSaveBox(false);
    }
    b.style.display = show ? 'block' : 'none';
  }
  toggleSettings(on) {
    const show = on == null ? this.settings.style.display !== 'block' : on;
    if (show && this.saveBox) this.saveBox.style.display = 'none';
    this.settings.style.display = show ? 'block' : 'none';
  }

  toast(msg, color, ms = 2100) {
    if (!this.eToast) return;
    this.eToast.textContent = msg; this.eToast.style.color = color || '#fff';
    this.eToast.classList.add('on');
    clearTimeout(this.toastT); this.toastT = setTimeout(() => this.eToast.classList.remove('on'), ms);
  }
  combo(n) {
    if (!this.eCombo) return;
    this.eCombo.innerHTML = `<b>${n}</b> 연쇄 격파!`;
    this.eCombo.classList.remove('on'); void this.eCombo.offsetWidth; this.eCombo.classList.add('on');
  }
  flashDamage() { if (!this.eDmg) return; this.eDmg.classList.remove('on'); void this.eDmg.offsetWidth; this.eDmg.classList.add('on'); }

  // 3D 위치 → 화면 좌표(1920x1080 기준). 카메라 뒤면 null
  project(v) {
    const p = v.clone().project(this.app.camera);
    if (p.z > 1) return null;
    const r = this.app.renderer.domElement.getBoundingClientRect();
    const sx = (p.x + 1) / 2 * r.width + r.left, sy = (1 - p.y) / 2 * r.height + r.top;
    const rr = this.root.getBoundingClientRect();
    return { x: (sx - rr.left) / this.scale, y: (sy - rr.top) / this.scale };
  }

  floatText(v, text, color) {
    if (!this.hud || this.floats.length > 30) return;
    const e = h('div', 'float', text, this.hud);
    e.style.color = color;
    this.floats.push({ e, v: v.clone(), t: 0 });
  }

  // 랜드마크 이름표
  updateLabels() {
    const city = this.app.city;
    if (!this.labelEls.length) {
      for (const L of city.labels) this.labelEls.push({ L, e: h('div', 'lm ' + L.kind, L.text, this.labelLayer) });
    }
    const inGame = this.g && this.g.state !== 'title';
    for (const { L, e } of this.labelEls) {
      const vis = inGame && (L.kind !== 'landmark' || GF.SETTINGS.showLandmarkLabels);
      const p = vis ? this.project(L.pos) : null;
      if (!p || p.x < -100 || p.x > 2020 || p.y < -50 || p.y > 1130 || (L.kind === 'landmark' && p.y < this.L.base.top + 34)) { put(e.style, 'display', 'none'); continue; }   // 위쪽 정보줄 밑에 깔리는 이름표는 숨김
      put(e.style, 'display', 'block');
      put(e.style, 'left', Math.max(70, Math.min(this.BW - 70, p.x)) + 'px'); put(e.style, 'top', Math.max(40, p.y) + 'px');
    }
  }

  update(dt) {
    this.updateLabels();
    const g = this.g;
    if (!this.hud || !g) return;
    const S = this.app.stage;
    put(this.eLives, 'innerHTML', `<i class="shield"></i><span>기지</span>${g.lives}/${S.lives}`);
    put(this.eMoney, 'innerHTML', `<i class="box"></i><span>보급</span>${Math.floor(g.money)}`);
    put(this.eWave, 'innerHTML', `<span>웨이브</span>${Math.max(1, g.waveNo + (g.state === 'ready' ? 1 : 0))}/${S.waves.length}`);
    put(this.eKills, 'innerHTML', `격파 <b>${g.kills}</b>${g.combo >= 5 ? ` <em>연쇄 ${g.combo}</em>` : ''} · 남은 적 ${g.enemies.length + g.queue.length}`);
    put(this.bSpeed, 'innerHTML', `▶▶<small>${g.speed}x</small>`);
    put(this.bPause, 'textContent', this.app.paused ? '▶' : '❚❚');
    put(this.ePaused.style, 'display', this.app.paused ? 'block' : 'none');
    this.cards.forEach(({ id, c, n }) => {
      put(n, 'textContent', GF.wname(id));
      c.classList.toggle('sel', g.mode === id);
      c.classList.toggle('off', g.money < GF.WEAPONS[id].cost);
    });

    // 대기 중인 영웅 (눌러서 배치)
    const bk = g.heroBench.map((id) => id + (g.heroBonus[id] || 0) + (g.mode === 'hero' && g.heroSel === id ? '*' : '')).join(','), cnt = {};
    g.heroBench.forEach((id) => { cnt[id] = (cnt[id] || 0) + 1; });
    if (this.benchKey !== bk) {
      this.benchKey = bk;
      this.bench.innerHTML = g.heroBench.length ? '<div class="hb-t">배치 대기 영웅</div>' + Object.keys(cnt).map((id) => `<button class="hb${HEROES[id].legend ? ' lg' : ''}${g.mode === 'hero' && g.heroSel === id ? ' sel' : ''}" data-id="${id}"><img src="${this.icons['hero_' + id]}"><b>${HEROES[id].short}${cnt[id] > 1 ? ' ×' + cnt[id] : ''}</b><small>Lv.${1 + (g.heroBonus[id] || 0)} · 눌러 배치</small></button>`).join('') : '';
      this.bench.querySelectorAll('.hb').forEach((b) => { b.onclick = () => g.pickHero(b.dataset.id); });
    }
    if (this.shopEl) { const m = this.shopEl.querySelector('.sh-money'); if (m) put(m, 'textContent', Math.floor(g.money).toLocaleString('ko-KR')); }

    // 다음 웨이브 버튼
    let nb = '', cls = 'nextwave';
    if (g.state === 'ready') nb = `<b>작전 개시 ≫</b><small>${g.waveNo ? `웨이브 ${g.waveNo + 1} 출격` : '첫 웨이브 출격'}</small>`;
    else if (g.waveNo >= S.waves.length) { nb = `<b>마지막 웨이브</b><small>남은 적 ${g.enemies.length + g.queue.length}</small>`; cls += ' busy'; }
    else if (g.queue.length) { nb = `<b>다음 웨이브 ≫</b><small>적 출현 중 · ${g.queue.length}</small>`; cls += ' busy'; }
    else nb = `<b>다음 웨이브 ≫</b><small>${Math.ceil(g.nextT)}초 후 자동 · 지금 누르면 +${Math.ceil(g.nextT) * 3}</small>`;
    put(this.bNext, 'innerHTML', nb);
    put(this.bNext, 'className', cls);

    this.ops.forEach((o, i) => {
      const id = g.hand[i], C = GF.CARDS[id];
      const html = `<i>${'QWE'[i]}</i><b>${C.name}</b><span>${C.desc}</span><em>${C.cost}</em>`;
      put(o, 'innerHTML', html);
      o.classList.toggle('off', g.cp < C.cost);
      o.classList.toggle('sel', g.cardSel === i);
    });
    put(this.eNext, 'textContent', '다음 카드: ' + GF.CARDS[g.deck[0]].name);
    for (const { id, C, o } of this.strats) {
      const st = g.strat[id], open = g.stratOpen(id);
      const sub = !open ? `스테이지 ${C.unlockStage}부터` : st.charges ? `사용 가능 ${st.charges}/${C.max}` : `웨이브 ${g.stratNext(id)}에 재보급`;
      const html = `<i>${C.key}</i><b>${id === 'nuke' ? '☢ ' : '🚀 '}${C.name}</b><span>${sub}</span>`;
      put(o, 'innerHTML', html);
      o.classList.toggle('ready', open && st.charges > 0);
      o.classList.toggle('sel', g.mode === 'strat' && g.stratSel === id);
    }
    const part = g.cp < GF.SETTINGS.cpMax ? g.cpT / GF.SETTINGS.cpEverySec : 0;
    this.cpSegs.forEach((s, i) => { put(s.firstChild.style, 'width', (i < g.cp ? 100 : i === g.cp ? part * 100 : 0) + '%'); });
    put(this.eCp, 'textContent', 'CP ' + g.cp + ' / ' + GF.SETTINGS.cpMax);

    // 무기 정보 창
    const tw = g.selected;
    put(this.panel.style, 'display', tw ? 'block' : 'none');
    if (tw) {
      const st = g.stats(tw), top = g.maxLevel(tw), max = tw.level >= top;
      const sp = this.project(tw.pos.clone().setY(0.6)) || { x: 900, y: 500 };
      put(this.panel.style, 'left', Math.max(20, Math.min(this.BW - 420, sp.x + 60)) + 'px'); put(this.panel.style, 'top', Math.max(this.L.mobile ? 60 : 110, Math.min(this.BH - (this.L.mobile ? 400 : 520), sp.y - 160)) + 'px');
      put(this.panel.querySelector('.pt'), 'textContent', GF.wname(tw.type) + '  Lv.' + tw.level);
      put(this.panel.querySelector('.pi'), 'innerHTML', `${tw.W.hero ? '<span style="color:' + (tw.W.legend ? '#fff4c8' : '#ffd36a') + '">' + (tw.W.legend ? '★★ 레전더리 영웅 · ' : '★ 전설의 영웅 · ') + tw.W.title + '</span><br>' : ''}${tw.W.nation} · ${tw.W.role}<br>${this.upLine(g, tw, st, max)}누적 피해 <b>${fmt(tw.dmgTotal)}</b> · 격파 <b>${tw.kills}</b><br><small>${tw.W.desc}</small>`);
      const up = this.panel.querySelector('.up'), all = this.panel.querySelector('.all');
      put(up, 'textContent', max ? `최대 강화 (Lv.${top})` : `강화 Lv.${tw.level + 1}/${top}  (${g.upgradeCost(tw)})`);
      up.disabled = max || g.money < g.upgradeCost(tw);
      const n = g.bulkList(tw.type).length, bc = g.bulkCost(tw.type);
      put(all, 'textContent', n ? `같은 무기 ${n}대 모두 강화  (${bc})` : '같은 무기 모두 최대 강화');
      all.disabled = !n || g.money < bc;
      put(this.panel.querySelector('.sell'), 'textContent', (tw.W.hero ? '영웅 귀환 +' : '판매 +') + Math.round(tw.invested * GF.SETTINGS.sellRefund));
    }

    // 커서 옆 안내 (자유 배치 가능 / 도로 배치 불가)
    if (g.tip && this.app.mouse) {
      const m = this.app.mouse, rr = this.root.getBoundingClientRect();
      put(this.eTip.style, 'display', 'block');
      put(this.eTip, 'className', 'tip ' + (g.tip.ok ? 'ok' : 'bad'));
      put(this.eTip, 'textContent', (g.tip.ok ? '✓ ' : '✕ ') + g.tip.text);
      put(this.eTip.style, 'left', ((m.x - rr.left) / this.scale + 24) + 'px'); put(this.eTip.style, 'top', ((m.y - rr.top) / this.scale + 18) + 'px');
    } else put(this.eTip.style, 'display', 'none');

    for (const f of this.floats) {
      f.t += dt;
      const p = this.project(f.v);
      if (p) { put(f.e.style, 'left', p.x + 'px'); put(f.e.style, 'top', (p.y - f.t * 50) + 'px'); }
      put(f.e.style, 'opacity', 1 - f.t / 0.9);
      if (f.t > 0.9) { f.e.remove(); f.done = true; }
    }
    this.floats = this.floats.filter((f) => !f.done);

    let hint = '';
    const M = this.L.mobile, tap = M ? '터치' : '클릭', esc = M ? '버튼 다시 누르면 취소' : 'ESC 취소';
    if (g.mode === 'strat') hint = GF.STRATEGIC[g.stratSel].name + `: 떨어뜨릴 곳을 ${tap} · ${esc}`;
    else if (g.mode === 'card') hint = GF.CARDS[g.hand[g.cardSel]].name + `: 지도에서 위치 ${tap} · ${esc}`;
    else if (g.mode === 'hero') hint = HEROES[g.heroSel].name + ` 배치: 회색 공간 아무 곳이나 ${tap} · ${M ? '영웅 버튼 다시 누르면 취소' : '오른쪽 클릭/ESC 취소'}`;
    else if (g.mode) hint = GF.wname(g.mode) + ` 설치: 회색 공간 아무 곳이나 ${tap} · ${M ? '카드 다시 누르면 취소' : '오른쪽 클릭/ESC 취소'}`;
    else if (g.state === 'ready') hint = this.L.mobile ? '무기 카드를 누르고 회색 공간을 터치해 배치 · 두 손가락 벌리기 확대·비틀기 회전 · 한 손가락 끌기로 이동' : '적이 오는 도심 거리·건물·랜드마크만 빼고 회색 공간 어디든 무기를 놓으세요. 거리 사이 회색 공간에 놓으면 위아래 거리를 동시에 공격합니다 · 휠: 확대 · 오른쪽 버튼 끌기: 시점 회전 · R: 기본 시점';
    put(this.eHint, 'textContent', hint);
  }

  // 무기 창: 강화 단계(1~4) + 현재 → 다음 단계 DPS·사거리
  upLine(g, tw, st, max) {
    const dps = (x) => Math.round(tw.W.shot === 'aura' ? (tw.W.airDps || 0) * x.mul : x.dps);
    const top = g.maxLevel(tw), pw = top > 4 ? 8 : 18;
    const pips = Array.from({ length: top }, (_, k) => `<span style="display:inline-block;width:${pw}px;height:7px;margin-right:${top > 4 ? 2 : 3}px;border-radius:2px;background:${k < tw.level ? '#f2c14e' : 'rgba(255,255,255,.18)'}"></span>`).join('');
    let line = `강화 ${pips} Lv.${tw.level}/${top}<br>DPS <b>${dps(st)}</b> · 사거리 <b>${st.range.toFixed(1)}</b>`;
    if (!max) { const nx = g.statsAt(tw, tw.level + 1); line += ` <span style="color:#7ff0a0">→ DPS ${dps(nx)} · 사거리 ${nx.range.toFixed(1)}</span>`; }
    return line + '<br>';
  }

  // ---------- 프로필 · 상점 ----------
  refreshProfile() {
    const r = this.root;
    r.querySelectorAll('.pc-cred').forEach((e) => { e.textContent = Profile.credits.toLocaleString('ko-KR'); });
    r.querySelectorAll('.pb-name').forEach((e) => { e.textContent = Profile.name; });
    r.querySelectorAll('.pb-ava').forEach((e) => { e.textContent = Profile.name.slice(0, 1); });
    r.querySelectorAll('.pb-cred').forEach((e) => { e.textContent = '보급창 ' + Profile.credits.toLocaleString('ko-KR'); });
    if (this.shopEl) this.shopEl.querySelector('.sh-cred').textContent = Profile.credits.toLocaleString('ko-KR');
  }
  toastAny(msg, color) { if (this.hud && this.eToast) this.toast(msg, color); else { const t = h('div', 'toast lobby', msg, this.root); t.style.opacity = 1; setTimeout(() => t.remove(), 1800); } }
  // 작전 본부 창: 영웅 모집 · 보급 뽑기 · 보급 충전(상점) 탭
  openShop(tab = 'hero') {
    if (this.shopEl) { this.shopTab(tab); return; }
    const g = this.g, inBattle = !!(g && g.canGacha && g.canGacha());
    if (inBattle && !this.app.paused && g.state === 'battle') { this.app.togglePause(); this.shopPaused = true; }
    const el = this.shopEl = h('div', 'shop', '', this.root);
    el.innerHTML = `<div class="sh-box">
      <div class="sh-head"><b>작전 본부</b>${inBattle ? '<span>전투 보급 <b class="sh-money"></b></span>' : ''}<span>보급창 <b class="sh-cred"></b></span><button class="sh-x">✕</button></div>
      <div class="sh-tabs"><button data-t="hero">🎖 영웅 모집</button><button data-t="lucky">🎲 보급 뽑기</button><button data-t="charge">🛒 보급 충전</button></div>
      <div class="sh-body"></div>
    </div>`;
    el.querySelector('.sh-x').onclick = () => this.closeShop();
    el.onclick = (e) => { if (e.target === el) this.closeShop(); };
    el.querySelectorAll('.sh-tabs button').forEach((b) => { b.onclick = () => this.shopTab(b.dataset.t); });
    this.shopTab(tab);
    this.refreshProfile();
    if (inBattle) el.querySelector('.sh-money').textContent = Math.floor(g.money).toLocaleString('ko-KR');
  }
  shopTab(t) {
    const el = this.shopEl, g = this.g, inBattle = !!(g && g.canGacha && g.canGacha()), body = el.querySelector('.sh-body');
    el.querySelectorAll('.sh-tabs button').forEach((b) => b.classList.toggle('on', b.dataset.t === t));
    clearInterval(this.spinT);
    const snd = (n) => { if (this.app.sound) this.app.sound.play(n); };
    if (t === 'hero') {
      const dps = (H) => Math.round(H.dmg * H.rate * (H.salvo || 1));
      body.innerHTML = `<div class="hr-wrap">
        <div class="hr-grid">${HERO_IDS.map((id) => { const H = HEROES[id]; return `<div class="hr${H.legend ? ' lg' : ''}" data-id="${id}">${H.legend ? '<i class="lg-tag">LEGENDARY</i>' : ''}<img src="${this.icons['hero_' + id]}"><b>${H.name}</b><em>${H.title}</em><span>${H.role} · DPS ${dps(H)}</span><small>몸짓: ${H.gesture}</small></div>`; }).join('')}</div>
        <div class="hr-side">
          <div class="hr-stage"><div class="hr-q">?</div></div>
          <div class="hr-res">${HERO_IDS.length}명 중 1명 무작위 (각 ${(100 / HERO_IDS.length).toFixed(1)}%)</div>
          <button class="hr-pull" ${inBattle ? '' : 'disabled'}>${inBattle ? `영웅 모집 <small>보급 ${GACHA.heroCost}</small>` : '전투 중에 모집할 수 있어요'}</button>
          <button class="hr-place" style="display:none"></button>
          <div class="hr-note">뽑을 때마다 영웅이 한 명씩 늘어납니다 (같은 영웅도 여러 명 배치 가능). 배치한 영웅은 보급으로 Lv.10까지 강화. 일반 무기 최고 DPS는 약 80</div>
        </div></div>`;
      const pull = body.querySelector('.hr-pull'), stage = body.querySelector('.hr-stage'), res = body.querySelector('.hr-res'), place = body.querySelector('.hr-place');
      pull.onclick = () => {
        const r = g.pullHero();
        if (!r) return;
        if (r.fail) { res.innerHTML = `<span class="bad">${r.fail}</span>`; return; }
        pull.disabled = true; place.style.display = 'none'; stage.classList.remove('got');
        let i = 0;
        this.spinT = setInterval(() => {
          const id = HERO_IDS[i++ % HERO_IDS.length];
          stage.innerHTML = `<img src="${this.icons['hero_' + id]}">`; snd('click');
          if (i > 18) {
            clearInterval(this.spinT);
            const H = HEROES[r.id];
            stage.innerHTML = `<img src="${this.icons['hero_' + r.id]}"><div class="hr-name">${H.name}</div>`; stage.classList.add('got'); stage.classList.toggle('lg', !!H.legend);
            res.innerHTML = r.count > 1 ? `<b>${H.short}</b> 한 명 더! (${r.count}번째) 배치하면 함께 싸웁니다` : `전설의 영웅 <b>${H.name}</b> 획득!`;
            snd('win');
            pull.disabled = false;
            if (g.heroBench.includes(r.id)) { place.style.display = 'block'; place.textContent = `${H.short} 지금 배치하기 ▶`; place.onclick = () => { this.closeShop(); g.pickHero(r.id); }; }
            this.benchKey = null;
          }
        }, 70);
      };
    } else if (t === 'lucky') {
      body.innerHTML = `<div class="lk-wrap">
        <div class="lk-slot"><div class="lk-num">?</div><small>받는 보급</small></div>
        <div class="lk-side">
          <div class="lk-odds">${GACHA.lucky.map(([a, p]) => `<div><b>+${a}</b><span>${p}%</span></div>`).join('')}</div>
          <button class="lk-pull" ${inBattle ? '' : 'disabled'}>${inBattle ? `보급 뽑기 <small>보급 ${GACHA.luckyCost}</small>` : '전투 중에 뽑을 수 있어요'}</button>
          <div class="lk-left"></div>
          <div class="hr-note">보급 ${GACHA.luckyCost}을 걸고 30~600을 받습니다. 평균은 조금 이득이지만 손해 볼 때도 있어요. 웨이브마다 ${GACHA.luckyPerWave}번까지.</div>
        </div></div>`;
      const pull = body.querySelector('.lk-pull'), num = body.querySelector('.lk-num'), left = body.querySelector('.lk-left'), slot = body.querySelector('.lk-slot');
      const showLeft = () => { if (inBattle) left.textContent = `이번 웨이브 남은 횟수 ${g.luckyLeft} / ${GACHA.luckyPerWave}`; };
      showLeft();
      pull.onclick = () => {
        const r = g.pullLucky();
        if (!r) return;
        if (r.fail) { left.innerHTML = `<span class="bad">${r.fail}</span>`; return; }
        pull.disabled = true; slot.className = 'lk-slot';
        let i = 0;
        this.spinT = setInterval(() => {
          num.textContent = '+' + GACHA.lucky[i++ % GACHA.lucky.length][0]; snd('click');
          if (i > 14) {
            clearInterval(this.spinT);
            num.textContent = '+' + r.amount;
            slot.className = 'lk-slot ' + (r.amount >= 300 ? 'jack' : r.amount > GACHA.luckyCost ? 'win' : 'lose');
            snd(r.amount > GACHA.luckyCost ? 'coin' : 'deny');
            pull.disabled = false; showLeft();
            this.toast(`보급 뽑기 +${r.amount}${r.amount >= 300 ? ' 대박!' : ''}`, r.amount > GACHA.luckyCost ? '#F2C14E' : '#ffffff');
          }
        }, 60);
      };
    } else {
      body.innerHTML = `<div class="sh-packs">${GF.SHOP.packs.map((p) => `<div class="pk" data-id="${p.id}">${p.tag ? `<em>${p.tag}</em>` : ''}<div class="pk-ico">📦</div><b>보급 ${p.amount.toLocaleString('ko-KR')}</b><small>${p.bonus ? '보너스 ' + p.bonus : '기본'}</small><button>${won(p.price)}</button></div>`).join('')}</div>
      ${inBattle ? `<div class="sh-wd"><span>보급창 → 이번 전투 보급으로 꺼내기</span>${GF.SHOP.withdrawSteps.map((n) => `<button data-n="${n}">+${n.toLocaleString('ko-KR')}</button>`).join('')}</div>` : ''}
      <div class="sh-note">${GF.SHOP.testMode ? '⚠ 테스트 모드: 실제 결제는 일어나지 않고 보급이 바로 지급됩니다. 출시 때 Google Play·Steam 결제로 연결합니다.' : '결제는 스토어 계정으로 진행됩니다.'}</div>`;
      body.querySelectorAll('.pk button').forEach((b) => {
        b.onclick = () => {
          const p = GF.SHOP.packs.find((x) => x.id === b.parentElement.dataset.id);
          if (!GF.SHOP.testMode) return;   // 실제 결제 연결 자리
          Profile.addCredits(p.amount, won(p.price) + ' 충전(테스트)');
          this.refreshProfile(); snd('coin');
          b.textContent = '충전 완료 ✓'; setTimeout(() => { b.textContent = won(p.price); }, 900);
        };
      });
      body.querySelectorAll('.sh-wd button').forEach((b) => {
        b.onclick = () => {
          const n = +b.dataset.n;
          if (!Profile.spend(n)) { b.textContent = '보급창 부족'; setTimeout(() => { b.textContent = '+' + n.toLocaleString('ko-KR'); }, 900); return; }
          g.money += n; this.refreshProfile(); snd('coin');
          this.toast(`보급창에서 보급 +${n} 투입`, '#F2C14E');
        };
      });
    }
  }
  closeShop() {
    if (!this.shopEl) return;
    clearInterval(this.spinT);
    this.shopEl.remove(); this.shopEl = null;
    if (this.shopPaused) { this.shopPaused = false; if (this.app.paused) this.app.togglePause(); }
  }
  // 전체 화면 + 가로 고정 (안드로이드 크롬. 아이폰은 '홈 화면에 추가'로 전체 화면)
  fullscreen() {
    const d = document.documentElement, fs = document.fullscreenElement || document.webkitFullscreenElement;
    if (fs) { (document.exitFullscreen || document.webkitExitFullscreen).call(document); return; }
    const req = d.requestFullscreen || d.webkitRequestFullscreen;
    if (!req) { this.toastAny('이 브라우저는 전체 화면을 지원하지 않아요. 공유 → 홈 화면에 추가로 열어 주세요'); return; }
    Promise.resolve(req.call(d, { navigationUI: 'hide' })).then(() => { try { screen.orientation.lock('landscape').catch(() => {}); } catch (e) { /* 미지원 */ } }).catch(() => {});
  }
  whiteFlash() {
    const f = h('div', 'wflash', '', this.root);
    setTimeout(() => f.classList.add('go'), 30); setTimeout(() => f.remove(), 2600);
  }

  showResult(won, stars) {
    const g = this.g;
    const r = this.result = h('div', 'result', `
      <div class="box ${won ? 'win' : 'lose'}">
        <h2>${won ? this.cityName() + ' 방어 성공' : '방어선 붕괴'}</h2>
        <div class="stars">${won ? '★'.repeat(stars) + '☆'.repeat(3 - stars) : ''}</div>
        <p>격파 ${g.kills} · 최대 연쇄 ${Math.max(g.bestCombo, g.combo)} · 웨이브 ${g.waveNo}/${this.app.stage.waves.length} · 남은 기지 ${g.lives}</p>
        <p class="s">${won ? '보급 상자 획득! (상자 열기는 다음 단계에서 추가됩니다)' : '굽이 사이 공원에 무기를 모으고, 우회로를 열어 적을 더 오래 붙잡아 보세요'}</p>
        <div class="row"><button class="again">다시 하기</button><button class="home">처음 화면</button></div>
      </div>`, this.root);
    r.querySelector('.again').onclick = () => { r.remove(); this.result = null; this.app.startGame(); };
    const sv = !won && Saves.get(this.app.stage.id);
    if (sv) { const b = h('button', 'load', `저장한 곳부터 (웨이브 ${sv.wave + 1})`, r.querySelector('.row')); b.onclick = () => { r.remove(); this.result = null; this.app.loadGame(this.app.stage.id); }; }
    r.querySelector('.home').onclick = () => { r.remove(); this.result = null; this.app.toTitle(); };
  }
  clearResult() { if (this.result) { this.result.remove(); this.result = null; } }
  clearHud() { if (this.hud) { this.hud.remove(); this.hud = null; this.floats = []; } }
}

export const fmt = (n) => (n >= 10000 ? (n / 1000).toFixed(1) + 'k' : String(Math.round(n)));
