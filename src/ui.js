// 화면 위 정보창 (HTML로 만듦). 1920x1080 기준으로 만들고 창 크기에 맞게 확대·축소
// 배치는 서울 시안 그대로: 왼쪽 위 제목, 오른쪽 위 기지·보급·웨이브·배속·일시정지·설정, 아래 카드 줄 + 다음 웨이브
import { Profile } from './profile.js';
import { layout } from './layout.js';
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
    t.innerHTML = `
      <div class="brand"><span>MODERN WAR TOWER DEFENSE</span><h1>2030 Warfare 1</h1><p>2030년, 아케론 연방이 세계 50개 도시를 침공했다. 연합 방위군 지휘관으로서 도시를 지켜라.</p></div>
      <div class="profile-card">
        <div class="pc-title">지휘관 프로필</div>
        <div class="pc-row"><input class="pc-name" maxlength="12" placeholder="이름을 정하세요" value=""><button class="pc-save">저장</button></div>
        <div class="pc-stat"><span>보급창</span><b class="pc-cred"></b></div>
        <div class="pc-stat"><span>서울 최고 기록</span><b>${'★'.repeat(best)}${'☆'.repeat(3 - best)}</b></div>
        <button class="pc-shop">🛒 상점 · 보급 충전</button>
        <button class="pc-fs">⛶ 전체 화면으로 하기</button>
        <button class="pc-install">📲 앱으로 설치하기</button>
      </div>
      <div class="brief">
        <div class="stage-no">STAGE ${S.no} · 2030 연합방위전선</div>
        <div class="city">${this.cityName()}${GF.SETTINGS.useCityAlias ? '' : `<small>${S.nameEn}</small>`}<em>${S.title}</em></div>
        <p>${S.briefing}</p>
        <div class="meta">웨이브 ${S.waves.length} · 기지 체력 ${S.lives} · 최고 기록 <b>${'★'.repeat(best)}${'☆'.repeat(3 - best)}</b></div>
        <div class="label">장착 무기 ${GF.LOADOUT.length} <small>도로·랜드마크만 빼고 어디든 배치</small> · 전략 무기 <small>ICBM · 전략핵미사일 (웨이브마다 재보급)</small></div>
        <div class="loadout">${GF.LOADOUT.map((id) => `<div class="lo"><img src="${icons[id]}"><b>${GF.wname(id)}</b><span>${GF.WEAPONS[id].role}</span></div>`).join('')}</div>
        <button class="go">출격</button>
        <div class="help">조작: 마우스 끌기·방향키 지도 이동 · 휠 확대·축소(커서 쪽으로, 같은 각도) · 0 전체 보기 · 1~9 무기 · Q W E 작전 카드 · Z ICBM · X 전략핵 · 스페이스 일시정지 · N 다음 웨이브</div>
        <div class="disc">이 게임은 가상의 이야기입니다. 실제 국가·단체·사건과 관계없습니다. · v${GF.SETTINGS.version}</div>
      </div>`;
    t.querySelector('.go').onclick = () => this.app.startGame();
    const inp = t.querySelector('.pc-name'); inp.value = Profile.data.name || '';
    const saveName = () => { Profile.setName(inp.value); this.toastAny('지휘관 이름 저장: ' + Profile.name); };
    t.querySelector('.pc-save').onclick = saveName;
    inp.onkeydown = (e) => { if (e.key === 'Enter') saveName(); };
    t.querySelector('.pc-shop').onclick = () => this.openShop();
    t.querySelector('.pc-fs').onclick = () => this.fullscreen();
    t.querySelector('.pc-install').onclick = () => {
      const ip = window.__installPrompt; if (!ip) return;
      ip.prompt(); ip.userChoice.then(() => { window.__installPrompt = null; document.body.classList.remove('can-install'); });
    };
    if (this.L.mobile) t.querySelector('.help').textContent = '조작: 무기 카드 터치 → 회색 공간 터치로 배치 · 한 손가락 끌기 이동 · 두 손가락 확대 · 무기 터치로 강화 · 같은 카드 다시 터치하면 취소';
    this.refreshProfile();
  }
  hideTitle() { if (this.title) { this.title.remove(); this.title = null; } }
  best() { try { return JSON.parse(localStorage.getItem('gf_progress') || '{}')[this.app.stage.id] || 0; } catch (e) { return 0; } }

  // ---------- 전투 화면 ----------
  buildHud() {
    if (this.hud) this.hud.remove();
    const S = this.app.stage, g = this.g;
    const hud = this.hud = h('div', 'hud-layer', null, this.root);
    h('div', 'tl', `<div class="logo">2030 Warfare 1</div><div class="sub">${GF.SETTINGS.useCityAlias ? this.cityName() + ' 방어전' : S.nameEn + ' · ' + S.title}</div>`, hud);
    // 내 프로필 바 (작게)
    const pb = h('div', 'pbar', `<span class="pb-ava"></span><b class="pb-name"></b><span class="pb-cred"></span><button class="pb-shop">＋ 충전</button>`, hud);
    pb.querySelector('.pb-shop').onclick = () => this.openShop();
    this.eKills = h('div', 'kills', '', hud);
    const tr = h('div', 'tr', null, hud);
    this.eLives = h('div', 'pill lives', '', tr);
    this.eMoney = h('div', 'pill money', '', tr);
    this.eWave = h('div', 'pill wave', '', tr);
    this.bSpeed = h('button', 'sq speed', '', tr); this.bSpeed.onclick = () => { g.speed = g.speed >= 3 ? 1 : g.speed + 1; };
    this.bPause = h('button', 'sq', '', tr); this.bPause.onclick = () => this.app.togglePause();
    h('button', 'sq fs-btn', '⛶', tr).onclick = () => this.fullscreen();
    h('button', 'sq gear', '⚙', tr).onclick = () => this.toggleSettings();

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

  renderSettings() {
    const SET = GF.SETTINGS, s = this.settings;
    s.innerHTML = `<b>설정</b>
      <label><input type="checkbox" data-k="showLandmarkLabels" ${SET.showLandmarkLabels ? 'checked' : ''}> 랜드마크 이름표</label>
      <label><input type="checkbox" data-k="useRealWeaponNames" ${SET.useRealWeaponNames ? 'checked' : ''}> 무기 실제 이름 <small>(끄면 살짝 바꾼 이름)</small></label>
      <label><input type="checkbox" data-k="sound" ${SET.sound ? 'checked' : ''}> 효과음</label>
      <label><input type="checkbox" data-k="shadows" ${SET.shadows ? 'checked' : ''}> 그림자 <small>(느리면 끄기)</small></label>
      <label>그래픽 <select class="gq">${[['auto', '자동 (추천)'], ['ultra', '최고 (고사양 PC)'], ['high', '높음'], ['medium', '보통'], ['low', '낮음 (느린 기기)']].map(([v, n]) => `<option value="${v}" ${(SET.graphics === 'auto' ? 'auto' : this.app.look.q) === v ? 'selected' : ''}>${n}</option>`).join('')}</select></label>
      <div class="row"><button class="home">처음 화면</button><button class="close">닫기</button></div>`;
    s.querySelectorAll('input').forEach((inp) => { inp.onchange = () => { SET[inp.dataset.k] = inp.checked; this.app.applySettings(); }; });
    s.querySelector('.gq').onchange = (e) => { SET.graphics = e.target.value; this.app.applySettings(); };
    s.querySelector('.home').onclick = () => { this.toggleSettings(false); this.app.toTitle(); };
    s.querySelector('.close').onclick = () => this.toggleSettings(false);
  }
  toggleSettings(on) {
    const show = on == null ? this.settings.style.display !== 'block' : on;
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
      if (!p || p.x < -100 || p.x > 2020 || p.y < -50 || p.y > 1130) { put(e.style, 'display', 'none'); continue; }
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
    put(this.eWave, 'innerHTML', `<span>웨이브</span>${Math.max(1, g.waveNo)}/${S.waves.length}`);
    put(this.eKills, 'innerHTML', `격파 <b>${g.kills}</b>${g.combo >= 5 ? ` <em>연쇄 ${g.combo}</em>` : ''} · 남은 적 ${g.enemies.length + g.queue.length}`);
    put(this.bSpeed, 'innerHTML', `▶▶<small>${g.speed}x</small>`);
    put(this.bPause, 'textContent', this.app.paused ? '▶' : '❚❚');
    put(this.ePaused.style, 'display', this.app.paused ? 'block' : 'none');
    this.cards.forEach(({ id, c, n }) => {
      put(n, 'textContent', GF.wname(id));
      c.classList.toggle('sel', g.mode === id);
      c.classList.toggle('off', g.money < GF.WEAPONS[id].cost);
    });

    // 다음 웨이브 버튼
    let nb = '', cls = 'nextwave';
    if (g.state === 'ready') nb = '<b>작전 개시 ≫</b><small>첫 웨이브 출격</small>';
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
      const st = g.stats(tw), max = tw.level >= GF.SETTINGS.maxTowerLevel;
      const sp = this.project(tw.pos.clone().setY(0.6)) || { x: 900, y: 500 };
      put(this.panel.style, 'left', Math.max(20, Math.min(this.BW - 420, sp.x + 60)) + 'px'); put(this.panel.style, 'top', Math.max(this.L.mobile ? 60 : 110, Math.min(this.BH - (this.L.mobile ? 400 : 520), sp.y - 160)) + 'px');
      put(this.panel.querySelector('.pt'), 'textContent', GF.wname(tw.type) + '  Lv.' + tw.level);
      put(this.panel.querySelector('.pi'), 'innerHTML', `${tw.W.nation} · ${tw.W.role}<br>${this.upLine(g, tw, st, max)}누적 피해 <b>${fmt(tw.dmgTotal)}</b> · 격파 <b>${tw.kills}</b><br><small>${tw.W.desc}</small>`);
      const up = this.panel.querySelector('.up'), all = this.panel.querySelector('.all');
      put(up, 'textContent', max ? '최대 강화 (Lv.4)' : `강화 Lv.${tw.level + 1}/4  (${g.upgradeCost(tw)})`);
      up.disabled = max || g.money < g.upgradeCost(tw);
      const n = g.bulkList(tw.type).length, bc = g.bulkCost(tw.type);
      put(all, 'textContent', n ? `같은 무기 ${n}대 모두 강화  (${bc})` : '같은 무기 모두 최대 강화');
      all.disabled = !n || g.money < bc;
      put(this.panel.querySelector('.sell'), 'textContent', '판매 +' + Math.round(tw.invested * GF.SETTINGS.sellRefund));
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
    else if (g.mode) hint = GF.wname(g.mode) + ` 설치: 회색 공간 아무 곳이나 ${tap} · ${M ? '카드 다시 누르면 취소' : '오른쪽 클릭/ESC 취소'}`;
    else if (g.state === 'ready') hint = this.L.mobile ? '무기 카드를 누르고 회색 공간을 터치해 배치 · 두 손가락으로 확대 · 한 손가락 끌기로 이동' : '적이 오는 도심 거리·건물·랜드마크만 빼고 회색 공간 어디든 무기를 놓으세요. 거리 사이 회색 공간에 놓으면 위아래 거리를 동시에 공격합니다 · 휠: 커서 쪽 확대 · 0: 전체 보기';
    put(this.eHint, 'textContent', hint);
  }

  // 무기 창: 강화 단계(1~4) + 현재 → 다음 단계 DPS·사거리
  upLine(g, tw, st, max) {
    const dps = (x) => Math.round(tw.W.shot === 'aura' ? (tw.W.airDps || 0) * x.mul : x.dps);
    const pips = [1, 2, 3, 4].map((i) => `<span style="display:inline-block;width:18px;height:7px;margin-right:3px;border-radius:2px;background:${i <= tw.level ? '#f2c14e' : 'rgba(255,255,255,.18)'}"></span>`).join('');
    let line = `강화 ${pips} Lv.${tw.level}/4<br>DPS <b>${dps(st)}</b> · 사거리 <b>${st.range.toFixed(1)}</b>`;
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
  openShop() {
    if (this.shopEl) return;
    const g = this.g, inBattle = g && (g.state === 'ready' || g.state === 'battle');
    if (inBattle && !this.app.paused && g.state === 'battle') { this.app.togglePause(); this.shopPaused = true; }
    const el = this.shopEl = h('div', 'shop', '', this.root);
    el.innerHTML = `<div class="sh-box">
      <div class="sh-head"><b>보급 상점</b><span>보급창 <b class="sh-cred"></b></span><button class="sh-x">✕</button></div>
      <div class="sh-packs">${GF.SHOP.packs.map((p) => `<div class="pk" data-id="${p.id}">${p.tag ? `<em>${p.tag}</em>` : ''}<div class="pk-ico">📦</div><b>보급 ${p.amount.toLocaleString('ko-KR')}</b><small>${p.bonus ? '보너스 ' + p.bonus : '기본'}</small><button>${won(p.price)}</button></div>`).join('')}</div>
      ${inBattle ? `<div class="sh-wd"><span>보급창 → 이번 전투 보급으로 꺼내기</span>${GF.SHOP.withdrawSteps.map((n) => `<button data-n="${n}">+${n.toLocaleString('ko-KR')}</button>`).join('')}</div>` : ''}
      <div class="sh-note">${GF.SHOP.testMode ? '⚠ 테스트 모드: 실제 결제는 일어나지 않고 보급이 바로 지급됩니다. 출시 때 Google Play·Steam 결제로 연결합니다.' : '결제는 스토어 계정으로 진행됩니다.'}</div>
    </div>`;
    el.querySelector('.sh-x').onclick = () => this.closeShop();
    el.onclick = (e) => { if (e.target === el) this.closeShop(); };
    el.querySelectorAll('.pk button').forEach((b) => {
      b.onclick = () => {
        const p = GF.SHOP.packs.find((x) => x.id === b.parentElement.dataset.id);
        if (!GF.SHOP.testMode) return;   // 실제 결제 연결 자리
        Profile.addCredits(p.amount, won(p.price) + ' 충전(테스트)');
        this.refreshProfile();
        if (this.app.sound) this.app.sound.play('coin');
        b.textContent = '충전 완료 ✓'; setTimeout(() => { b.textContent = won(p.price); }, 900);
      };
    });
    el.querySelectorAll('.sh-wd button').forEach((b) => {
      b.onclick = () => {
        const n = +b.dataset.n;
        if (!Profile.spend(n)) { b.textContent = '보급창 부족'; setTimeout(() => { b.textContent = '+' + n.toLocaleString('ko-KR'); }, 900); return; }
        g.money += n; this.refreshProfile();
        if (this.app.sound) this.app.sound.play('coin');
        this.toast(`보급창에서 보급 +${n} 투입`, '#F2C14E');
      };
    });
    this.refreshProfile();
  }
  closeShop() {
    if (!this.shopEl) return;
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
    r.querySelector('.home').onclick = () => { r.remove(); this.result = null; this.app.toTitle(); };
  }
  clearResult() { if (this.result) { this.result.remove(); this.result = null; } }
  clearHud() { if (this.hud) { this.hud.remove(); this.hud = null; this.floats = []; } }
}

export const fmt = (n) => (n >= 10000 ? (n / 1000).toFixed(1) + 'k' : String(Math.round(n)));
