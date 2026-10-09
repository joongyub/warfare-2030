// 화면 위 정보창 (HTML로 만듦). 1920x1080 기준으로 만들고 창 크기에 맞게 확대·축소
// 배치는 서울 시안 그대로: 왼쪽 위 제목, 오른쪽 위 기지·보급·웨이브·배속·일시정지·설정, 아래 카드 줄 + 다음 웨이브
import { Profile } from './profile.js';
import { Cloud } from './cloud.js';
import { layout, isTouch } from './layout.js';
// 안드로이드 APK(앱 껍데기)·아이폰 판별, APK 다운로드 주소 (.github/workflows/apk.yml 이 올림)
const APK_URL = 'https://github.com/joongyub/warfare-2030/releases/download/apk/warfare-2030.apk';
const isApk = () => /W2030App/.test(navigator.userAgent);
const isIOS = () => /iPhone|iPad|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
import { HEROES, HERO_IDS, GACHA, heroChance, heroTier } from './heroes.js';
import { Saves, Clears } from './save.js';
import { RECIPES, RECIPE_CATS, Codex, comboRate, comboFee } from './codex.js';
import { HomeAnim } from './homeanim.js';
// 화면 글자·위치가 바뀔 때만 실제로 씀 (매 프레임 다시 쓰면 휴대폰에서 끊김)
const putCache = new WeakMap();
function put(o, k, v) {
  let c = putCache.get(o); if (!c) putCache.set(o, (c = {}));
  if (c[k] !== v) { c[k] = v; o[k] = v; }
}
const won = (n) => '₩' + n.toLocaleString('ko-KR');
const h = (tag, cls, html, parent) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; if (parent) parent.appendChild(e); return e; };

// 무기도감 제작자 '이중엽': 키 큰 평범한 남자 (회색 티셔츠 + 청바지). 팔은 CSS로 움직임 (.work 망치질 · .win 만세 · .lose 머리 긁기)
// 주식 그래프 모니터 (x, y 왼쪽 위, 62×46). up: 오르는 초록 그래프 / 아니면 떨어지는 빨간 그래프
function monitorSVG(x, y, up, big) {
  const W = 62, H = 46, pts = up ? [[6, 36], [14, 30], [20, 33], [28, 24], [34, 27], [42, 16], [48, 18], [56, 7]] : [[6, 8], [14, 14], [20, 11], [28, 22], [34, 19], [42, 30], [48, 28], [56, 39]];
  const c = up ? '#3ef08a' : '#ff4a4a', line = pts.map(([px, py]) => `${x + px},${y + py}`).join(' ');
  const tip = pts[pts.length - 1], ar = up ? `M${x + tip[0] - 5} ${y + tip[1] + 1} L${x + tip[0] + 2} ${y + tip[1] - 3} L${x + tip[0]} ${y + tip[1] + 5}Z` : `M${x + tip[0] - 5} ${y + tip[1] - 1} L${x + tip[0] + 2} ${y + tip[1] + 3} L${x + tip[0]} ${y + tip[1] - 5}Z`;
  return `<rect x="${x}" y="${y}" width="${W}" height="${H}" rx="4" fill="#20262e" stroke="#9aa4b0" stroke-width="2"/>
    <rect x="${x + 3}" y="${y + 3}" width="${W - 6}" height="${H - 8}" fill="#071018"/>
    ${[1, 2, 3].map((i) => `<line x1="${x + 3}" y1="${y + 3 + i * (H - 8) / 4}" x2="${x + W - 3}" y2="${y + 3 + i * (H - 8) / 4}" stroke="#16303a" stroke-width="1"/>`).join('')}
    <polyline points="${line}" fill="none" stroke="${c}" stroke-width="${big ? 2.6 : 2.2}" stroke-linejoin="round" stroke-linecap="round"/><path d="${ar}" fill="${c}"/>
    <text x="${x + 6}" y="${y + 11}" font-size="6" font-weight="900" fill="${c}">${up ? '▲ +29.9%' : '▼ -29.9%'}</text>
    <rect x="${x + W / 2 - 4}" y="${y + H - 1}" width="8" height="4" fill="#9aa4b0"/>`;
}
const MAKER_SVG = `<svg class="mk" viewBox="0 0 200 330" aria-hidden="true">
  <ellipse cx="100" cy="322" rx="48" ry="7" fill="rgba(0,0,0,.35)"/>
  <g class="mk-body">
    <path d="M78 172 L74 300 L94 300 L99 196 L101 196 L106 300 L126 300 L122 172Z" fill="#33507a"/>
    <path d="M99 196 L101 196 L101 300 L99 300Z" fill="#284068"/>
    <rect x="68" y="298" width="30" height="12" rx="5" fill="#f2f2f2"/><rect x="102" y="298" width="30" height="12" rx="5" fill="#f2f2f2"/>
    <rect x="68" y="306" width="30" height="4" fill="#9aa4b0"/><rect x="102" y="306" width="30" height="4" fill="#9aa4b0"/>
    <path d="M72 86 Q100 78 128 86 L130 176 L70 176Z" fill="#8a96a6"/>
    <path d="M90 84 Q100 94 110 84" fill="none" stroke="#6e7a8a" stroke-width="3"/>
    <rect x="70" y="168" width="60" height="9" rx="3" fill="#2a2a2e"/><rect x="96" y="168" width="9" height="9" fill="#c9a24a"/>
    <rect x="93" y="64" width="14" height="16" fill="#e8bf9a"/>
    <g class="mk-head">
      <ellipse cx="100" cy="46" rx="22" ry="25" fill="#f0c8a2"/>
      <path d="M77 44 Q76 18 100 17 Q125 18 123 44 Q120 30 112 28 Q100 34 84 30 Q79 34 77 44Z" fill="#1a1a1c"/>
      <ellipse cx="91" cy="48" rx="2.6" ry="3" fill="#1a1a1c"/><ellipse cx="109" cy="48" rx="2.6" ry="3" fill="#1a1a1c"/>
      <path d="M86 41 L95 40 M105 40 L114 41" stroke="#1a1a1c" stroke-width="2.4" stroke-linecap="round"/>
      <path class="mk-mouth" d="M93 60 Q100 65 107 60" fill="none" stroke="#9a4a3a" stroke-width="2.4" stroke-linecap="round"/>
      <ellipse cx="78" cy="49" rx="3" ry="6" fill="#e8bf9a"/><ellipse cx="122" cy="49" rx="3" ry="6" fill="#e8bf9a"/>
    </g>
    <g class="mk-arm mk-l"><path d="M70 90 L56 138 L64 160" fill="none" stroke="#8a96a6" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/><path d="M58 138 L64 160" stroke="#f0c8a2" stroke-width="12" stroke-linecap="round"/>
      <g class="mk-mon mk-ml">${monitorSVG(4, 134, false)}</g><circle cx="64" cy="162" r="8" fill="#f0c8a2"/></g>
    <g class="mk-arm mk-r"><path d="M130 90 L144 138 L136 160" fill="none" stroke="#8a96a6" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/><path d="M142 138 L136 160" stroke="#f0c8a2" stroke-width="12" stroke-linecap="round"/>
      <g class="mk-mon mk-mr">${monitorSVG(134, 134, true)}</g><circle cx="136" cy="162" r="8" fill="#f0c8a2"/></g>
  </g>
</svg>`;
// 조합 연출용 금빛 부처님 좌상 (SVG): 광배·빛살·연꽃 받침
const BUDDHA_SVG = `<svg class="cb-buddha" viewBox="0 0 400 400" aria-hidden="true">
  <defs>
    <radialGradient id="cbHalo" cx="50%" cy="42%" r="50%"><stop offset="0" stop-color="#fff7c8" stop-opacity="1"/><stop offset=".45" stop-color="#ffd25a" stop-opacity=".75"/><stop offset="1" stop-color="#ff9a1a" stop-opacity="0"/></radialGradient>
    <linearGradient id="cbGold" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff0a8"/><stop offset=".45" stop-color="#f6c443"/><stop offset="1" stop-color="#b9781a"/></linearGradient>
  </defs>
  <circle cx="200" cy="175" r="190" fill="url(#cbHalo)"/>
  <g class="cb-rays" stroke="#fff3b0" stroke-width="5" stroke-linecap="round" opacity=".7">${Array.from({ length: 24 }, (_, i) => { const a = i * Math.PI / 12; return `<line x1="${200 + Math.cos(a) * 120}" y1="${165 + Math.sin(a) * 120}" x2="${200 + Math.cos(a) * 185}" y2="${165 + Math.sin(a) * 185}"/>`; }).join('')}</g>
  <circle cx="200" cy="150" r="78" fill="none" stroke="#fff3b0" stroke-width="6" opacity=".85"/>
  <g fill="url(#cbGold)" stroke="#8a5410" stroke-width="2.5">
    <path d="M70 352 Q200 300 330 352 Q300 382 200 384 Q100 382 70 352Z" fill="#f2b84a"/>
    ${[-120, -80, -40, 0, 40, 80, 120].map((x) => `<path d="M${200 + x} 360 q-22 -34 0 -58 q22 24 0 58Z" fill="#ffd9e6" stroke="#c96a8a"/>`).join('')}
    <ellipse cx="200" cy="322" rx="128" ry="36"/>
    <path d="M128 214 Q200 192 272 214 L300 318 Q200 340 100 318Z"/>
    <path d="M150 214 Q200 270 250 214" fill="none" stroke="#8a5410" stroke-width="3"/>
    <ellipse cx="200" cy="300" rx="42" ry="17"/>
    <rect x="186" y="182" width="28" height="26" rx="10"/>
    <ellipse cx="200" cy="150" rx="46" ry="52"/>
    <ellipse cx="151" cy="160" rx="9" ry="28"/><ellipse cx="249" cy="160" rx="9" ry="28"/>
    <ellipse cx="200" cy="106" rx="42" ry="22" fill="#6b4a1a"/>
    <circle cx="200" cy="86" r="17" fill="#6b4a1a"/>
  </g>
  <g fill="none" stroke="#7a4a10" stroke-width="3" stroke-linecap="round"><path d="M176 150 q8 5 16 0"/><path d="M208 150 q8 5 16 0"/><path d="M190 178 q10 6 20 0"/><path d="M200 156 v10"/></g>
  <circle cx="200" cy="134" r="3.5" fill="#c0392b"/>
</svg>`;

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
    // 움직이는 홈 배경 (열병식 장면). 그래픽 '낮음'이면 그림만
    if (GF.SETTINGS.homeBg && GF.SETTINGS.graphics !== 'low') t.classList.add('anim');
    t.innerHTML = `
      <div class="brand"><span>MODERN WAR TOWER DEFENSE</span><h1>2030 Warfare 1</h1><p>부카니스탄이 세계 50개 도시를 침공했다. 연합군 지휘관으로서 도시를 지켜라.</p></div>
      <div class="profile-card">
        <div class="pc-pop pc-saves"></div>
        <div class="pc-pop pc-set"><div class="pc-title">⚙ 화면 설정</div><label class="pc-gq"><span>그래픽</span>${this.gqSelect()}</label>${this.foldBox()}</div>
        <div class="pc-head"><span class="pc-title">지휘관 프로필</span><span class="pc-c">보급창 <b class="pc-cred"></b></span></div>
        <div class="pc-cloud"></div>
        <div class="pc-row"><input class="pc-name" maxlength="12" placeholder="이름을 정하세요" value=""><button class="pc-save">저장</button></div>
        <div class="pc-btns">
          <button class="pc-shop">🛒 상점</button><button class="pc-hero">🎖 영웅</button><button class="pc-sv">💾 저장 <i></i></button>
          <button class="pc-cfg">⚙ 설정</button><button class="pc-fs">⛶ 전체</button><button class="pc-install">📲 설치</button><button class="pc-exit">⏻ 나가기</button>
        </div>
      </div>
      <div class="brief home">
        <div class="home-cta">2030 연합방위전선 · 도시 ${this.stageList().length}곳 · 별 ${this.stageList().reduce((n, X) => n + this.best(X.id), 0)}/${this.stageList().length * 3}</div>
        <div class="go-row"><button class="go">⚔ 전투지역</button></div>
        <div class="help">조작: 마우스 끌기·방향키 지도 이동 · 휠 확대·축소 · 시점 각도는 오른쪽 위 ⟲ ⟳ ▲ ▼ 버튼(누르고 있기) · R 기본 시점 · 1~0 무기(Shift+1~0 아랫줄) · Q W E 작전 카드 · Z ICBM · X 전략핵 · 스페이스 일시정지 · N 다음 웨이브</div>
        <div class="disc">이 게임은 가상의 이야기입니다. 실제 국가·단체·사건과 관계없습니다. · v${GF.SETTINGS.version}</div>
      </div>`;
    if (t.classList.contains('anim')) { this.homeAnim = new HomeAnim(t, GF.SETTINGS.homeBg); h('div', 'home-shade', null, t); t.prepend(t.lastChild); t.prepend(this.homeAnim.cv); }
    t.querySelector('.go').onclick = () => this.openZone();
    this.bindFold(t);
    t.querySelector('.pc-gq select').onchange = (e) => { GF.SETTINGS.graphics = e.target.value; this.app.applySettings(); this.toastAny('그래픽: ' + e.target.selectedOptions[0].textContent); };
    this.renderSaves();
    const inp = t.querySelector('.pc-name'); inp.value = Profile.data.name || '';
    const saveName = () => { Profile.setName(inp.value); this.toastAny('지휘관 이름 저장: ' + Profile.name); };
    t.querySelector('.pc-save').onclick = saveName;
    inp.onkeydown = (e) => { if (e.key === 'Enter') saveName(); };
    t.querySelector('.pc-shop').onclick = () => this.openShop('charge');
    t.querySelector('.pc-hero').onclick = () => this.openShop('hero');
    t.querySelector('.pc-fs').onclick = () => this.fullscreen();
    // 저장 목록·화면 설정은 버튼을 누르면 프로필 칸 위로 펼침 (홈 그림 캐릭터를 가리지 않게 평소엔 접어 둠)
    const pop = (cls) => { const p = t.querySelector('.' + cls), open = !p.classList.contains('on'); t.querySelectorAll('.pc-pop').forEach((x) => x.classList.remove('on')); p.classList.toggle('on', open); };
    t.querySelector('.pc-sv').onclick = () => pop('pc-saves');
    t.querySelector('.pc-cfg').onclick = () => pop('pc-set');
    t.querySelector('.pc-exit').onclick = (e) => this.exitGame(e.currentTarget);
    t.querySelector('.pc-install').onclick = () => {
      const ip = window.__installPrompt; if (!ip) { this.appGuide(); return; }
      ip.prompt(); ip.userChoice.then(() => { window.__installPrompt = null; document.body.classList.remove('can-install'); });
    };
    if (this.L.mobile) t.querySelector('.help').textContent = '조작: 무기 카드 터치 → 회색 공간 터치로 배치 · 한 손가락 끌기 이동 · 두 손가락 벌리기 확대 · 시점 각도는 오른쪽 위 ⟲ ⟳ ▲ ▼ 버튼 · 무기 터치로 강화 · 같은 카드 다시 터치하면 취소';
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
  // 영웅 조합 연출: 화면 정중앙에서 부처님이 점 크기에서 전체 화면으로 클로즈업 + 조합 이름 + 빛나는 폭죽 (약 3.6초) → done()
  playCombo(title, done, img) {
    const o = h('div', 'combo-fx', `<canvas></canvas>${img ? `<div class="cb-buddha cb-pic"><img src="${img}"></div>` : BUDDHA_SVG}<div class="cb-title">${title}</div>`, document.body);
    const cv = o.querySelector('canvas'), c = cv.getContext('2d');
    const W = cv.width = window.innerWidth, H = cv.height = window.innerHeight, parts = [];
    const burst = (x, y) => { const hue = Math.random() * 360; for (let i = 0; i < 70; i++) { const a = Math.random() * Math.PI * 2, v = 2 + Math.random() * 6; parts.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, life: 1, hue: hue + Math.random() * 40 }); } };
    let t0 = performance.now(), last = t0, nextB = 0, raf = 0;
    const step = (now) => {
      const t = now - t0, dt = Math.min(0.05, (now - last) / 1000) * 60; last = now;
      if (t > 900 && t > nextB && t < 3200) { burst(W * (0.15 + Math.random() * 0.7), H * (0.12 + Math.random() * 0.45)); nextB = t + 260; if (this.app.sound) this.app.sound.play('boom', 0.25); }
      c.globalCompositeOperation = 'source-over'; c.clearRect(0, 0, W, H); c.globalCompositeOperation = 'lighter';
      for (const p of parts) {
        if (p.life <= 0) continue;
        p.x += p.vx * dt; p.y += p.vy * dt; p.vy += 0.08 * dt; p.vx *= 0.985; p.vy *= 0.985; p.life -= 0.012 * dt;
        c.fillStyle = `hsla(${p.hue},100%,${60 + p.life * 30}%,${Math.max(0, p.life)})`;
        c.beginPath(); c.arc(p.x, p.y, 1.5 + p.life * 3, 0, 7); c.fill();
      }
      if (t < 4200) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    requestAnimationFrame(() => o.classList.add('cb-go'));
    setTimeout(() => o.classList.add('cb-out'), 3600);
    setTimeout(() => { cancelAnimationFrame(raf); o.remove(); if (done) done(); }, 4300);
  }
  // 홈 나가기: 한 번 더 누르면 전체 화면을 끄고 창 닫기 시도. 브라우저가 닫기를 막으면 종료 화면
  exitGame(btn) {
    if (!btn.classList.contains('ask')) { btn.classList.add('ask'); btn.textContent = '한 번 더 누르면 나가기'; setTimeout(() => { if (btn.isConnected) { btn.classList.remove('ask'); btn.textContent = '⏻ 나가기'; } }, 2500); return; }
    this.fsOff = true;
    const fs = document.fullscreenElement || document.webkitFullscreenElement;
    if (fs) try { (document.exitFullscreen || document.webkitExitFullscreen).call(document); } catch (e) { /* 미지원 */ }
    try { window.close(); } catch (e) { /* 막힘 */ }
    setTimeout(() => {
      if (this.app.sound && this.app.sound.ctx) try { this.app.sound.ctx.suspend(); } catch (e) { /* 소리 없음 */ }
      this.app.renderer.setAnimationLoop(null);
      const o = h('div', 'exit-screen', `<b>2030 Warfare 1</b><p>게임을 종료했어요. 진행 상황은 저장돼 있어요.<br>이 탭(창)을 닫거나, 아래 버튼으로 다시 시작하세요.</p><button>다시 시작</button>`, document.body);
      o.querySelector('button').onclick = () => location.reload();
    }, 250);
  }
  // 처음 화면: 저장된 게임 목록 + 이어하기 버튼
  renderSaves() {
    const t = this.title; if (!t) return;
    const all = Saves.all();
    const list = [];
    this.stageList().forEach((X) => ['easy', 'normal', 'hard'].forEach((k) => { if (all[Saves.key(X.id, k)]) list.push([X, k]); }));
    const box = t.querySelector('.pc-saves');
    box.innerHTML = `<div class="pc-title sv-t">💾 저장된 게임</div>` + (list.length ? list.map(([X, k]) => {
      const d = all[Saves.key(X.id, k)];
      return `<div class="sv" data-id="${X.id}" data-d="${k}"><div class="sv-i"><b>${X.name} <em class="sv-d d-${k}">${GF.DIFF[k].name}</em></b><span>웨이브 ${d.wave + 1}/${X.waves.length} · 기지 ${d.lives}/${X.lives} · 보급 ${d.money}</span><small>${Saves.when(d.time)} 저장 · 무기 ${d.towers.length}대</small></div><button class="sv-load">불러오기</button><button class="sv-del" title="삭제">✕</button></div>`;
    }).join('') : '<div class="sv-none">아직 없어요. 전투 중 💾 버튼으로 저장하세요.</div>');
    const cnt = t.querySelector('.pc-sv i'); if (cnt) cnt.textContent = list.length || '';
    box.querySelectorAll('.sv').forEach((row) => {
      const id = row.dataset.id, k = row.dataset.d;
      row.querySelector('.sv-load').onclick = () => this.app.loadGame(id, k);
      const del = row.querySelector('.sv-del');
      del.onclick = () => {
        if (!del.classList.contains('ask')) { del.classList.add('ask'); del.textContent = '삭제?'; setTimeout(() => { if (del.isConnected) { del.classList.remove('ask'); del.textContent = '✕'; } }, 2500); return; }
        Saves.remove(id, k); this.renderSaves(); this.toastAny('저장된 게임을 지웠어요');
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
    const list = this.stageList();
    z.innerHTML = `<div class="zn-head"><button class="zn-back">← 홈</button><div><b>전투지역</b><span>지킬 도시를 고르고 전투시작을 누르세요</span></div></div>
      <div class="zn-grid">${list.map((X) => `<button class="zn-card" data-id="${X.id}"><canvas width="228" height="176"></canvas><div class="zn-n"><small>${X.no}</small><b>${GF.SETTINGS.useCityAlias ? X.alias : X.name}</b><i>${this.stars(this.best(X.id))}</i></div>${this.zoneStatus(X)}</button>`).join('')}</div>
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
  // 도시 × 난이도 미션 상태: done(방어완료) / run(진행중, 저장 있음) / none(진행없음). 완료 뒤 다시 하는 중이면 둘 다
  mission(X, k) {
    const c = Clears.get(X.id)[k] || (k === GF.diffFor(X, 'normal') && this.best(X.id) && !Object.keys(Clears.get(X.id)).length ? { stars: this.best(X.id) } : null);
    return { clear: c, save: Saves.get(X.id, k) };
  }
  // 도시 카드 아래: 난이도별 방어완료 / 진행중 / 진행없음 (5스테이지부터는 보통·어려움만)
  zoneStatus(X) {
    const ks = GF.diffsFor(X), M = ks.map((k) => this.mission(X, k));
    const chip = (k, i) => {
      const D = GF.DIFF[k], m = M[i];
      if (m.save) return `<i class="dc run" title="웨이브 ${m.save.wave + 1}/${X.waves.length}">${D.name} ${m.clear ? '✓ ' : ''}진행중 ${m.save.wave + 1}/${X.waves.length}</i>`;
      if (m.clear) return `<i class="dc done" title="${this.stars(m.clear.stars)}">${D.name} 방어완료</i>`;
      return `<i class="dc">${D.name} 진행없음</i>`;
    };
    const p = Math.round(100 * M.reduce((a, m) => a + (m.clear ? 1 : m.save ? m.save.wave / X.waves.length : 0), 0) / ks.length);
    return `<div class="zn-st${M.some((m) => m.save) ? ' run' : M.some((m) => m.clear) ? ' win' : ' new'}"><div class="zn-dcs">${ks.map(chip).join('')}</div><div class="zn-bar"><i style="width:${p}%"></i></div></div>`;
  }
  zonePick(id) {
    const z = this.zone; if (!z) return;
    const X = GF.STAGES[id];
    this.zoneSel = id;
    z.querySelectorAll('.zn-card').forEach((b) => b.classList.toggle('on', b.dataset.id === id));
    const side = z.querySelector('.zn-side'), sel = GF.diffFor(X, GF.SETTINGS.difficulty);
    // 난이도마다 따로 된 미션 칸: 상태 + 이어하기 / 전투시작
    const row = (k) => {
      const D = GF.DIFF[k], m = this.mission(X, k);
      const st = m.save ? `<b class="ms-run">진행중</b> 웨이브 ${m.save.wave + 1}/${X.waves.length} · 기지 ${m.save.lives}/${X.lives}<small>${Saves.when(m.save.time)} 저장${m.clear ? ' · 이미 방어완료 ' + this.stars(m.clear.stars) : ''}</small>`
        : m.clear ? `<b class="ms-done">방어완료</b> ${this.stars(m.clear.stars)}<small>${m.clear.lives != null ? `남은 기지 ${m.clear.lives}/${X.lives}` : ''}${m.clear.kills ? ` · 격파 ${m.clear.kills.toLocaleString('ko-KR')}` : ''}</small>`
        : `<b class="ms-none">진행없음</b><small>적 체력 ×${D.hp} · 적 수 ×${D.cnt}</small>`;
      const btn = m.save ? `<button class="ms-cont">▶ 이어하기</button><button class="ms-new">새로</button>` : `<button class="ms-start">${m.clear ? '다시 도전' : '⚔ 전투시작'}</button>`;
      return `<div class="ms d-${k}${k === sel ? ' on' : ''}${m.clear ? ' done' : ''}${m.save ? ' run' : ''}" data-d="${k}"><div class="ms-n">${D.name}<i>${m.clear ? '✓' : ''}</i></div><div class="ms-s">${st}</div><div class="ms-b">${btn}</div></div>`;
    };
    side.innerHTML = `<canvas class="zn-big" width="600" height="340"></canvas>
      <div class="zn-no">STAGE ${X.no} · ${X.nameEn}</div>
      <div class="zn-city">${GF.SETTINGS.useCityAlias ? X.alias : X.name}<em>${X.title}</em></div>
      <p>${X.briefing}</p>
      <div class="zn-meta">웨이브 ${X.waves.length} · 기지 체력 ${X.lives} · 적 진입로 ${1 + (X.branches || []).length}곳 · 최고 기록 <b>${this.stars(this.best(id))}</b></div>
      <div class="zn-legend"><span class="lg-r"></span>본 도로 <span class="lg-b"></span>갈래 길 <span class="lg-g"></span>적 입구 <span class="lg-h"></span>연합 지휘부</div>
      <div class="zn-ms"><div class="zn-ms-t">난이도별 작전 <small>난이도마다 진행과 저장이 따로예요</small></div>${GF.diffsFor(X).map(row).join('')}</div>`;
    this.drawMap(side.querySelector('.zn-big'), X);
    side.querySelectorAll('.ms').forEach((r) => {
      const k = r.dataset.d;
      const pick = () => { GF.SETTINGS.difficulty = k; GF.savePrefs(); side.querySelectorAll('.ms').forEach((x) => x.classList.toggle('on', x === r)); };
      r.onclick = pick;
      const go = (cont) => (e) => { e.stopPropagation(); pick(); this.zoneStart(cont); };
      r.querySelectorAll('.ms-start, .ms-new').forEach((b) => { b.onclick = go(false); });
      const c = r.querySelector('.ms-cont'); if (c) c.onclick = go(true);
    });
  }
  // 고른 난이도로 시작. cont = 그 난이도의 저장에서 이어하기 (Enter 키는 저장 있으면 이어하기)
  zoneStart(cont) {
    const id = this.zoneSel || this.app.stage.id, k = GF.diffFor(GF.STAGES[id], GF.SETTINGS.difficulty);
    if (cont == null) cont = !!Saves.get(id, k);
    if (cont && Saves.get(id, k)) { this.app.loadGame(id, k); return; }
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
  // 웨이브 절반 연출 (7초): 화면이 어두워지고 홈 그림의 여자 캐릭터만 떠올라 방송 자막 → 끝나면 done (미사일 공격)
  playHalfTaunt(done) {
    this.halfEl?.remove();
    const line = GF.SETTINGS.halfLine || '미제앞잡이들은 우리 아바이를 괴롭히디 말라!';
    const o = this.halfEl = h('div', 'taunt', `<div class="tn-girl"></div><div class="in-box tn-box"><small>부카니스탄 조선중앙방송 · 긴급 성명</small><p></p></div>`, this.root);
    const girl = o.querySelector('.tn-girl');
    if (GF.SETTINGS.homeBg) girl.style.backgroundImage = `url("${GF.SETTINGS.homeBg}")`; else girl.remove();
    const p = o.querySelector('p');
    if (this.app.sound) this.app.sound.play('wave');
    let i = 0;
    const tick = setTimeout(() => { const iv = setInterval(() => { p.textContent = line.slice(0, ++i); if (i >= line.length) clearInterval(iv); }, 2200 / line.length); o.iv = iv; }, 1200);
    setTimeout(() => { clearTimeout(tick); clearInterval(o.iv); o.classList.add('out'); setTimeout(() => { o.remove(); if (this.halfEl === o) this.halfEl = null; if (done) done(); }, 400); }, 7000);
  }
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
  best(id = this.app.stage.id) { let b = 0; try { b = JSON.parse(localStorage.getItem('gf_progress') || '{}')[id] || 0; } catch (e) { /* 저장 불가 환경 */ } Object.values(Clears.get(id)).forEach((c) => { b = Math.max(b, (c && c.stars) || 0); }); return b; }
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
    this.bCodex = h('button', 'sq cdx-btn', '<span>📖</span><b>무기도감</b><i></i>', tr); this.bCodex.title = '무기도감 · 조합 (C 키)'; this.bCodex.onclick = () => this.openCodex();
    this.bCodexN = this.bCodex.querySelector('i');
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
    // 시점 각도 버튼 (누르고 있으면 계속 돌아감) · ⌂ 는 기본 시점
    const rv = h('div', 'rotv', null, hud);
    // 시점 각도는 이 버튼으로만 바뀜 (지도 끌기·두 손가락·마우스 오른쪽으로는 안 바뀜)
    const spinBtn = (txt, key, dir, tip) => {
      const b = h('button', 'sq', txt, rv); b.title = tip;
      const stop = () => { this.app.cam[key] = 0; };
      b.onpointerdown = (e) => { e.preventDefault(); this.app.cam[key] = dir; };
      b.onpointerup = stop; b.onpointerleave = stop; b.onpointercancel = stop;
    };
    spinBtn('⟲', 'spin', -1, '왼쪽으로 돌리기 (누르고 있기)');
    spinBtn('⟳', 'spin', 1, '오른쪽으로 돌리기 (누르고 있기)');
    spinBtn('▲', 'tilt', 1, '위에서 내려다보기 (누르고 있기)');
    spinBtn('▼', 'tilt', -1, '낮게 눕혀 보기 (누르고 있기)');
    const rb = h('button', 'sq home-v', '⌂', rv); rb.title = '기본 시점 (R 키)'; rb.onclick = () => this.app.resetView();

    // 아래 카드 줄: 무기 20개를 가격 순서대로 10개씩 2줄 (단축키 윗줄 1~0, 아랫줄 Shift+1~0)
    const bar = h('div', 'bar', null, hud);
    const grid = h('div', 'cgrid', null, bar);
    this.cards = GF.LOADOUT.map((id, i) => {
      const key = (i < 10 ? '' : '⇧') + ((i % 10) + 1) % 10;
      const c = h('div', 'card', `<img src="${this.icons[id]}"><div class="txt"><b class="wn"></b><span>${GF.WEAPONS[id].role}</span></div><div class="cost">${GF.WEAPONS[id].cost}</div><i>${key}</i>`, grid);
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
  // 폴드7·폴드8 울트라 펼친 화면 꽉 채우기 체크 (홈 프로필 칸·게임 설정 둘 다)
  foldBox() { return `<label class="fold-opt"><input type="checkbox" class="fold-chk" ${GF.SETTINGS.foldScreen ? 'checked' : ''}> 폴드7·폴드8 울트라 펼친 화면 꽉 채우기</label>`; }
  bindFold(el) {
    const c = el.querySelector('.fold-chk'); if (!c) return;
    c.onchange = () => {
      GF.SETTINGS.foldScreen = c.checked; GF.savePrefs();
      this.app.resize(); this.fit();
      this.toastAny(c.checked ? (isTouch() ? '폴드 화면 꽉 채우기 켬 (펼쳤을 때 적용)' : '폴드 화면 설정을 켰어요. 폴드폰 펼친 화면에서 적용돼요') : '16:9 화면으로 돌아갔어요');
    };
  }
  renderSettings() {
    const SET = GF.SETTINGS, s = this.settings;
    s.innerHTML = `<b>설정</b>
      <label><input type="checkbox" data-k="showLandmarkLabels" ${SET.showLandmarkLabels ? 'checked' : ''}> 랜드마크 이름표</label>
      <label><input type="checkbox" data-k="useRealWeaponNames" ${SET.useRealWeaponNames ? 'checked' : ''}> 무기 실제 이름 <small>(끄면 살짝 바꾼 이름)</small></label>
      <label><input type="checkbox" data-k="sound" ${SET.sound ? 'checked' : ''}> 효과음</label>
      <label><input type="checkbox" data-k="shadows" ${SET.shadows ? 'checked' : ''}> 그림자 <small>(느리면 끄기)</small></label>
      <label>그래픽 ${this.gqSelect()}</label>
      ${this.foldBox()}
      <div class="row"><button class="save">💾 저장하기</button><button class="savex">저장하고 나가기</button></div>
      <div class="row"><button class="home">저장 안 하고 나가기</button><button class="close">닫기</button></div>`;
    s.querySelectorAll('input').forEach((inp) => { inp.onchange = () => { SET[inp.dataset.k] = inp.checked; this.app.applySettings(); }; });
    this.bindFold(s);
    s.querySelector('.gq').onchange = (e) => { SET.graphics = e.target.value; this.app.applySettings(); };
    s.querySelector('.save').onclick = () => { if (this.app.saveGame(false)) this.toggleSettings(false); };
    s.querySelector('.savex').onclick = () => { this.toggleSettings(false); this.app.saveGame(true); };
    s.querySelector('.home').onclick = () => { this.toggleSettings(false); this.app.toTitle(); };
    s.querySelector('.close').onclick = () => this.toggleSettings(false);
  }
  toggleSaveBox(on) {
    const b = this.saveBox, show = on == null ? b.style.display !== 'block' : on;
    if (show) {
      const g = this.g, S = this.app.stage, d = g.serialize(), old = Saves.get(S.id, g.diffId);
      this.toggleSettings(false);
      b.innerHTML = `<b>게임 저장</b>
        <div class="sv-now">${d ? `지금 저장하면 <em>웨이브 ${d.wave + 1}</em>부터 이어서 해요.<br>기지 ${d.lives}/${S.lives} · 보급 ${d.money} · 무기 ${d.towers.length}대` : '지금은 저장할 수 없어요.'}</div>
        ${d && d.wave < g.waveNo ? '<small>웨이브 도중이라 이 웨이브는 처음부터 다시 시작해요.</small>' : ''}
        ${old ? `<small>${GF.DIFF[g.diffId].name} 이전 저장(${Saves.when(old.time)}, 웨이브 ${old.wave + 1})은 덮어써요. 다른 난이도 저장은 그대로예요.</small>` : ''}
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
      if (!p || p.x < -100 || p.x > 2020 || p.y < -50 || p.y > this.BH + 50 || (L.kind === 'landmark' && p.y < this.L.base.top + 34)) { put(e.style, 'display', 'none'); continue; }   // 위쪽 정보줄 밑에 깔리는 이름표는 숨김
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
      const sub = !open ? `스테이지 ${C.unlockStage}부터` : st.charges ? `사용 가능 ${st.charges}/${C.max}` : (this.L.mobile ? `웨이브 ${g.stratNext(id)} 재보급` : `웨이브 ${g.stratNext(id)}에 재보급`);
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
      put(this.panel.style, 'left', Math.max(20, Math.min(this.BW - 420, sp.x + 60)) + 'px');
      put(this.panel.querySelector('.pt'), 'textContent', GF.wname(tw.type) + '  Lv.' + tw.level);
      put(this.panel.querySelector('.pi'), 'innerHTML', `${tw.W.hero ? '<span style="color:' + (tw.W.legend ? '#fff4c8' : '#ffd36a') + '">' + (tw.W.legend ? '★★ 레전더리 영웅 · ' : '★ 전설의 영웅 · ') + tw.W.title + '</span><br>' : ''}${tw.W.nation} · ${tw.W.role}<br>${this.upLine(g, tw, st, max)}누적 피해 <b>${fmt(tw.dmgTotal)}</b> · 격파 <b>${tw.kills}</b><br><small>${tw.W.desc}</small>`);
      const up = this.panel.querySelector('.up'), all = this.panel.querySelector('.all');
      put(up, 'textContent', max ? `최대 강화 (Lv.${top})` : `강화 Lv.${tw.level + 1}/${top}  (${g.upgradeCost(tw)})`);
      up.disabled = max || g.money < g.upgradeCost(tw);
      const n = g.bulkList(tw.type).length, bc = g.bulkCost(tw.type);
      put(all, 'textContent', n ? `같은 무기 ${n}대 모두 강화  (${bc})` : '같은 무기 모두 최대 강화');
      all.disabled = !n || g.money < bc;
      put(this.panel.querySelector('.sell'), 'textContent', (tw.W.hero ? '영웅 귀환 +' : '판매 +') + Math.round(tw.invested * GF.SETTINGS.sellRefund));
      // 실제 창 높이로 위치를 맞춤: 설명이 긴 무기·영웅도 화면 아래로 잘리지 않게
      const ph = this.panel.offsetHeight || 520, top0 = this.L.mobile ? 60 : 110;
      put(this.panel.style, 'top', Math.max(Math.min(top0, this.BH - ph - 8), Math.min(this.BH - ph - 8, sp.y - 160)) + 'px');
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
    else if (g.mode) hint = GF.wname(g.mode) + (GF.WEAPONS[g.mode] && GF.WEAPONS[g.mode].role ? ` (${GF.WEAPONS[g.mode].role})` : '') + ` 설치: 회색 공간 아무 곳이나 ${tap} · ${M ? '카드 다시 누르면 취소' : '오른쪽 클릭/ESC 취소'}`;
    if (g.mode && isTouch() && g.mode !== 'detour') hint = '📌 지도 고정됨 · 손가락을 대고 끌어 위치를 맞춘 뒤 떼면 설치 · ' + hint;
    else if (g.state === 'ready') hint = this.L.mobile ? '무기 카드를 누르고 회색 공간을 터치해 배치 · 두 손가락 벌리기 확대 · 한 손가락 끌기로 이동 · 각도는 오른쪽 위 버튼' : '회색 공간 어디든 무기를 놓으세요 (거리 사이에 놓으면 위아래 거리를 동시에 공격) · 휠: 확대 · 시점 각도: 오른쪽 위 ⟲ ⟳ ▲ ▼ 버튼 · R: 기본 시점';
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
  toastAny(msg, color, ms) { if (typeof color === 'number') { ms = color; color = undefined; } if (this.hud && this.eToast) this.toast(msg, color, ms); else { const t = h('div', 'toast lobby', msg, this.root); t.style.opacity = 1; setTimeout(() => t.remove(), ms || 1800); } }
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
      // 일반 / 레전더리 구분해서 작은 카드로 (필터는 기억)
      // 등급별: 일반·레전더리는 모집, 신화·GOAT 는 📖 무기도감 조합으로만 (발견 전에는 실루엣 + ???)
      const legend = HERO_IDS.filter((id) => heroTier(id) === 'legend'), normal = HERO_IDS.filter((id) => heroTier(id) === 'normal');
      const ofTier = (t) => Object.keys(HEROES).filter((id) => heroTier(id) === t), myth = ofTier('myth'), goat = ofTier('goat');
      const found = (id) => RECIPES.some((R) => R.into === 'hero_' + id && Codex.has(R.key));
      if (!this.heroFilter) this.heroFilter = 'all';
      const card = (id) => {
        const H = HEROES[id], t = heroTier(id), cmb = t === 'myth' || t === 'goat', seen = !cmb || found(id);
        const how = t === 'goat' ? '신화 영웅 + 조합 무기' : '레전더리 영웅 2명';
        return `<div class="hr${H.legend ? ' lg' : ''}${cmb ? ' cmb ' + t : ''}${seen ? '' : ' hid'}" data-id="${id}" title="${seen ? '몸짓: ' + H.gesture : ''}"><img src="${this.icons['hero_' + id]}">${cmb ? `<i class="hr-only">조합 전용</i>` : ''}<b>${seen ? H.name : '???'}</b><em>${seen ? H.title : how + ' 조합으로 탄생'}</em><span>${seen ? `${H.role} · DPS ${dps(H)}` : '📖 무기도감에서 발견'}</span></div>`;
      };
      const sec = (f, label, ids) => `<div class="hr-sec" data-f="${f}"><div class="hr-sec-t${f === 'normal' ? '' : ' lgt ' + f}">${label} <small>${ids.length}명</small></div><div class="hr-cards">${ids.map(card).join('')}</div></div>`;
      body.innerHTML = `<div class="hr-wrap">
        <div class="hr-main">
          <div class="hr-filter">${[['all', '전체', HERO_IDS.length + myth.length + goat.length], ['normal', '일반 영웅', normal.length], ['legend', '레전더리 영웅', legend.length], ['myth', '신화 영웅', myth.length], ['goat', 'GOAT', goat.length]].map(([f, n, c]) => `<button data-f="${f}" class="${f === this.heroFilter ? 'on' : ''}${f === 'normal' || f === 'all' ? '' : ' lgf ' + f}">${n} <small>${c}</small></button>`).join('')}</div>
          <div class="hr-grid">${sec('goat', '🐐 GOAT', goat)}${sec('myth', '✦ 신화 영웅', myth)}${sec('legend', '★ 레전더리 영웅', legend)}${sec('normal', '일반 영웅', normal)}</div>
        </div>
        <div class="hr-side">
          <div class="hr-stage"><div class="hr-q">?</div></div>
          <div class="hr-res">${HERO_IDS.length}명 중 1명 무작위 (모두 ${(heroChance(HERO_IDS[0]) * 100).toFixed(1)}%) · 가까이 두면 합체하는 영웅들이 있어요 · 📖 무기도감</div>
          <button class="hr-pull" ${inBattle ? '' : 'disabled'}>${inBattle ? `영웅 모집 <small>보급 ${GACHA.heroCost}</small>` : '전투 중에 모집할 수 있어요'}</button>
          <button class="hr-place" style="display:none"></button>
          <div class="hr-note">뽑을 때마다 영웅이 한 명씩 늘어납니다 (같은 영웅도 여러 명 배치 가능). 배치한 영웅은 보급으로 Lv.10까지 강화. 일반 무기 최고 DPS는 약 80</div>
        </div></div>`;
      const applyFilter = () => {
        body.querySelectorAll('.hr-filter button').forEach((b) => b.classList.toggle('on', b.dataset.f === this.heroFilter));
        body.querySelectorAll('.hr-sec').forEach((x) => { x.style.display = this.heroFilter === 'all' || this.heroFilter === x.dataset.f ? '' : 'none'; });
      };
      body.querySelectorAll('.hr-filter button').forEach((b) => { b.onclick = () => { this.heroFilter = b.dataset.f; applyFilter(); snd('click'); }; });
      applyFilter();
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
  // ---------- 📖 무기도감: 조합법 목록 + 제작자 이중엽이 조합 ----------
  codexReady(n) {
    if (!this.bCodex) return;
    put(this.bCodex, 'className', 'sq cdx-btn' + (n ? ' ready' : ''));
    put(this.bCodexN, 'textContent', n ? String(n) : '');
  }
  openCodex() {
    if (this.codexEl) return;
    this.closeShop();
    const g = this.g, inBattle = !!(g && g.canGacha && g.canGacha());
    if (inBattle && !this.app.paused && g.state === 'battle') { this.app.togglePause(); this.codexPaused = true; }
    if (inBattle) g.refreshCombos(true);
    const el = this.codexEl = h('div', 'shop cdx', '', this.root);
    el.innerHTML = `<div class="sh-box cdx-box">
      <div class="sh-head"><b>📖 무기도감</b><span>발견 <b class="cdx-cnt"></b></span>${inBattle ? '<span>전투 보급 <b class="sh-money"></b></span>' : ''}<button class="sh-x">✕</button></div>
      <div class="cdx-wrap"><div class="cdx-list"></div>
        <div class="cdx-side">
          <div class="cdx-maker">${MAKER_SVG}<img class="cdx-orb l"><img class="cdx-orb r"><div class="cdx-flash"></div><div class="cdx-zoom"></div><div class="cdx-say">무엇을 합쳐 볼까요?</div><div class="cdx-tag">제작자 <b>이중엽</b></div></div>
          <div class="cdx-meter"><div class="cdx-num">성공 확률 <b>—</b></div><div class="cdx-bar"><i class="ok"></i><em></em></div></div>
          <div class="cdx-sel">왼쪽에서 조합을 고르세요</div>
          <button class="cdx-go" disabled>조합하기</button>
          <div class="hr-note">일반 무기는 <b>둘 다 Lv.4</b>, 영웅은 <b>Lv.1</b>부터 서로 <b>가까이</b> 놓으면 조합할 수 있어요. 신화 영웅은 조합 무기와 합치면 <b>GOAT</b>가 돼요. 성공률 무기 ${Math.round(GF.COMBO_RULES.weaponRate * 100)}% · 영웅 ${Math.round(GF.COMBO_RULES.heroRate * 100)}% · GOAT ${Math.round(GF.COMBO_RULES.goatRate * 100)}%. 실패하면 수수료만 사라지고 재료는 남아요. 처음 성공한 조합은 도감에 영원히 기록돼요.</div>
        </div></div></div>`;
    el.querySelector('.sh-x').onclick = () => this.closeCodex();
    el.onclick = (e) => { if (e.target === el && !this.codexBusy) this.closeCodex(); };
    this.codexSel = null;
    this.renderCodex();
  }
  renderCodex() {
    const el = this.codexEl; if (!el) return;
    const g = this.g, inBattle = !!(g && g.canGacha && g.canGacha());
    const ready = inBattle ? (g.comboReady || []) : [], isReady = (R) => ready.some((p) => p.R.key === R.key);
    el.querySelector('.cdx-cnt').textContent = `${Codex.count()} / ${RECIPES.length}`;
    if (inBattle) el.querySelector('.sh-money').textContent = Math.floor(g.money).toLocaleString('ko-KR');
    const ico = (t) => this.icons[t] || '';
    const nat = (t) => (GF.WEAPONS[t].hero ? HEROES[GF.WEAPONS[t].hero].nation : GF.WEAPONS[t].nation);
    const card = (R) => {
      const known = Codex.has(R.key), rd = isReady(R), rate = Math.round(comboRate(R) * 100);
      const mat = (t) => (known || rd ? `<img src="${ico(t)}" title="${GF.WEAPONS[t].name}">` : '<i class="q">?</i>');
      const names = known || rd ? `${GF.wname(R.ta)} + ${GF.wname(R.tb)}` : `힌트: ${nat(R.ta)} + ${nat(R.tb)}`;
      return `<div class="cdx-c${known ? ' known' : ''}${rd ? ' rd' : ''}${this.codexSel === R.key ? ' sel' : ''}${R.hero ? ' hero' : ''}" data-k="${R.key}">
        ${rd ? '<i class="cdx-badge">조합 가능!</i>' : ''}
        <div class="cdx-row">${mat(R.ta)}<s>+</s>${mat(R.tb)}<s>→</s>${known ? `<img class="res" src="${ico(R.into)}">` : '<i class="q res">?</i>'}</div>
        <div class="cdx-t"><b>${known ? R.name : '???'}</b><small>${names}</small></div><span>${rate}%</span></div>`;
    };
    // 세 갈래: 일반무기 조합 / 레전더리 영웅 조합(영웅 + 영웅) / 신화 영웅 조합(신화 영웅 + 조합 무기 → GOAT)
    const rule = { weapon: `둘 다 Lv.4 · 성공 ${Math.round(GF.COMBO_RULES.weaponRate * 100)}%`, legend: `영웅 Lv.1부터 · 성공 ${Math.round(GF.COMBO_RULES.heroRate * 100)}%`, myth: `신화 영웅 + 조합 무기 → GOAT · 성공 ${Math.round(GF.COMBO_RULES.goatRate * 100)}%` };
    el.querySelector('.cdx-list').innerHTML = RECIPE_CATS.map(([c, label]) => { const L = RECIPES.filter((R) => R.cat === c); return L.length ? `<div class="cdx-h ${c}">${label} <small>${rule[c]} · 발견 ${L.filter((R) => Codex.has(R.key)).length}/${L.length}</small></div><div class="cdx-grid">${L.map(card).join('')}</div>` : ''; }).join('');
    el.querySelectorAll('.cdx-c').forEach((c) => { c.onclick = () => { if (this.codexBusy) return; this.codexSel = c.dataset.k; this.renderCodex(); }; });
    this.codexSide();
  }
  codexSide() {
    const el = this.codexEl, g = this.g, inBattle = !!(g && g.canGacha && g.canGacha());
    const R = RECIPES.find((x) => x.key === this.codexSel), go = el.querySelector('.cdx-go'), sel = el.querySelector('.cdx-sel');
    const ok = el.querySelector('.cdx-bar .ok'), mark = el.querySelector('.cdx-bar em');
    const orbL = el.querySelector('.cdx-orb.l'), orbR = el.querySelector('.cdx-orb.r');
    if (!R) { go.disabled = true; return; }
    const known = Codex.has(R.key), rd = inBattle && (g.comboReady || []).some((p) => p.R.key === R.key), rate = comboRate(R), fee = comboFee(R);
    el.querySelector('.cdx-num').innerHTML = `성공 확률 <b>${Math.round(rate * 100)}%</b>`; ok.style.width = rate * 100 + '%'; mark.style.left = '-20px';
    if (known || rd) { orbL.src = this.icons[R.ta]; orbR.src = this.icons[R.tb]; orbL.style.opacity = orbR.style.opacity = 1; } else { orbL.style.opacity = orbR.style.opacity = 0; }
    sel.innerHTML = known || rd ? `<b>${GF.wname(R.ta)}</b> + <b>${GF.wname(R.tb)}</b> → <b>${known ? R.name : '???'}</b>` : '아직 발견하지 못한 조합이에요';
    if (!inBattle) { go.disabled = true; go.innerHTML = '전투 중에 조합할 수 있어요'; return; }
    if (!rd) { go.disabled = true; go.innerHTML = known || rd ? (R.goat ? '신화 영웅 옆에 조합 무기를 두세요' : R.hero ? '두 영웅을 가까이 배치하세요' : '두 무기를 Lv.4로 만들어 가까이 두세요') : '재료를 찾아 가까이 놓아 보세요'; return; }
    go.disabled = false; go.innerHTML = `이중엽에게 조합 맡기기 <small>수수료 보급 ${fee} · 성공 ${Math.round(rate * 100)}%</small>`;
    go.onclick = () => this.codexRun(R);
  }
  // 조합 연출: 이중엽이 두 재료를 맞부딪혀 망치질 → 판정 바늘이 이리저리 흔들리다 멈춤 (초록 칸이면 성공)
  codexRun(R) {
    const el = this.codexEl, g = this.g, snd = (n, v) => { if (this.app.sound) this.app.sound.play(n, v); };
    const r = g.tryCombo(R.key);
    if (!r) return;
    if (r.fail) { el.querySelector('.cdx-sel').innerHTML = `<span class="bad">${r.fail}</span>`; return; }
    this.codexBusy = true;
    const maker = el.querySelector('.cdx-maker'), say = el.querySelector('.cdx-say'), go = el.querySelector('.cdx-go');
    const mark = el.querySelector('.cdx-bar em'), num = el.querySelector('.cdx-num');
    el.querySelector('.sh-money').textContent = Math.floor(g.money).toLocaleString('ko-KR');
    go.disabled = true; maker.className = 'cdx-maker work'; say.textContent = '자, 합쳐 봅시다!'; maker.querySelector('.cdx-zoom').className = 'cdx-zoom';
    let i = 0;
    const T = 26, spin = setInterval(() => {
      i++;
      const v = i < T ? Math.random() : r.roll;
      mark.style.left = `calc(${v * 100}% - 4px)`;
      num.innerHTML = `판정 <b>${Math.round(v * 100)}</b> <small>(${Math.round(r.rate * 100)} 미만이면 성공)</small>`;
      if (i % 3 === 0) snd('click');
      if (i % 9 === 0) snd('upgrade', 0.5);
      if (i >= T) {
        clearInterval(spin);
        maker.className = 'cdx-maker ' + (r.ok ? 'win' : 'lose');
        say.textContent = r.ok ? '떡상! 완벽하게 합쳐졌어요!' : '앗… 떡락했어요';
        // 성공 = 오른손의 오르는 그래프 모니터, 실패 = 왼손의 떨어지는 그래프 모니터를 크게 확대
        const zm = maker.querySelector('.cdx-zoom');
        zm.className = 'cdx-zoom ' + (r.ok ? 'up' : 'down');
        zm.innerHTML = `<svg viewBox="0 0 62 50">${monitorSVG(0, 0, r.ok, true)}</svg><b>${r.ok ? '성공!' : '실패!'}</b>`;
        num.innerHTML = r.ok ? '<b class="good">조합 성공!</b>' : '<b class="bad">조합 실패</b> <small>재료는 그대로예요</small>';
        snd(r.ok ? 'win' : 'deny');
        setTimeout(() => {
          this.codexBusy = false;
          if (r.ok) {
            const first = Codex.add(R.key), p = r.pair;
            this.closeCodex();
            g.fuse(p.a, p.b, R, this.icons[R.into]);
            if (first) setTimeout(() => this.toast(`📖 새 조합 발견! 무기도감에 ${R.name} 기록`, '#FFD36A', 3200), 4600);
          } else {
            this.toast(`조합 실패… 수수료 보급 ${r.fee}`, '#FF8A8E', 2400);
            g.refreshCombos(true); this.renderCodex();
            if (this.codexEl) {   // 실패 판정 자리를 그대로 보여 줌
              this.codexEl.querySelector('.cdx-bar em').style.left = `calc(${r.roll * 100}% - 4px)`;
              this.codexEl.querySelector('.cdx-num').innerHTML = `<b class="bad">실패</b> <small>판정 ${Math.round(r.roll * 100)} · ${Math.round(r.rate * 100)} 미만이면 성공</small>`;
              this.codexEl.querySelector('.cdx-maker').className = 'cdx-maker lose';
            }
          }
        }, r.ok ? 1700 : 1300);
      }
    }, 90);
  }
  closeCodex() {
    if (!this.codexEl || this.codexBusy) return;
    this.codexEl.remove(); this.codexEl = null;
    if (this.codexPaused) { this.codexPaused = false; if (this.app.paused) this.app.togglePause(); }
  }
  closeShop() {
    if (!this.shopEl) return;
    clearInterval(this.spinT);
    this.shopEl.remove(); this.shopEl = null;
    if (this.shopPaused) { this.shopPaused = false; if (this.app.paused) this.app.togglePause(); }
  }
  // 휴대폰: 터치할 때마다 전체 화면이 아니면 자동으로 켬 (사용자가 ⛶ 로 끈 뒤에는 다시 켜지 않음)
  // 아이폰 사파리는 웹페이지 전체 화면 기능이 없어서 한 번만 '홈 화면에 추가' 안내 (추가한 앱은 manifest 로 전체 화면)
  autoFullscreen() {
    if (this.fsOff) return;
    const d = document.documentElement, fs = document.fullscreenElement || document.webkitFullscreenElement;
    if (fs || isApk()) return;
    const req = d.requestFullscreen || d.webkitRequestFullscreen;
    const app = matchMedia('(display-mode: fullscreen), (display-mode: standalone)').matches || navigator.standalone;
    if (!req) {
      if (!app && !this.iosHinted) {
        this.iosHinted = true;
        let seen = false; try { seen = !!localStorage.getItem('gf_appguide'); localStorage.setItem('gf_appguide', '1'); } catch (e) { /* 저장 불가 */ }
        setTimeout(() => (seen ? this.toastAny('아이폰 전체 화면: 공유(⬆) → "홈 화면에 추가" 후 홈 화면 아이콘으로 실행', 5000) : this.appGuide()), 600);
      }
      return;
    }
    Promise.resolve(req.call(d, { navigationUI: 'hide' })).then(() => { try { screen.orientation.lock('landscape').catch(() => {}); } catch (e) { /* 미지원 */ } }).catch(() => {});
  }
  // 전체 화면 + 가로 고정 (안드로이드 크롬. 아이폰은 '홈 화면에 추가'로 전체 화면)
  fullscreen() {
    const d = document.documentElement, fs = document.fullscreenElement || document.webkitFullscreenElement;
    if (fs) { this.fsOff = true; (document.exitFullscreen || document.webkitExitFullscreen).call(document); return; }
    this.fsOff = false;
    const req = d.requestFullscreen || d.webkitRequestFullscreen;
    if (!req) { this.appGuide(); return; }
    Promise.resolve(req.call(d, { navigationUI: 'hide' })).then(() => { try { screen.orientation.lock('landscape').catch(() => {}); } catch (e) { /* 미지원 */ } }).catch(() => {});
  }
  // 📲 앱처럼 전체 화면으로 하는 법: 아이폰은 '홈 화면에 추가'(APK 는 아이폰에 설치 불가), 안드로이드는 APK 또는 크롬 설치
  //   둘 다 공개 사이트를 열기 때문에 사이트를 배포하면 홈 화면 앱·APK·크롬 링크가 같이 최신이 됨
  appGuide() {
    if (this.guideEl) return;
    const ios = isIOS();
    const el = this.guideEl = h('div', 'ag', null, this.root);
    el.innerHTML = `<div class="ag-box">
      <button class="ag-x">✕</button>
      <b class="ag-t">📲 앱처럼 전체 화면으로 하기</b>
      <div class="ag-cols">
        <div class="ag-col${ios ? ' on' : ''}"><div class="ag-h"> 아이폰 · 아이패드</div>
          <ol><li><b>사파리</b>로 이 게임 주소를 열어요</li><li>아래(아이패드는 위) <b>공유 ⬆</b> 버튼</li><li><b>"홈 화면에 추가"</b> → <b>추가</b></li><li>홈 화면의 <b>2030 Warfare</b> 아이콘으로 실행하면 주소창 없이 전체 화면</li></ol>
          <small>아이폰은 APK 파일을 설치할 수 없어요 (애플이 막아 둠). 홈 화면 앱은 열 때마다 최신 버전으로 자동 업데이트돼요.</small></div>
        <div class="ag-col${ios ? '' : ' on'}"><div class="ag-h">🤖 안드로이드</div>
          <ol><li><a class="ag-apk" href="${APK_URL}" target="_blank" rel="noopener">APK 내려받기</a> → 파일 열어 설치 (처음 한 번 "출처를 알 수 없는 앱 허용")</li><li>또는 크롬 메뉴 ⋮ → <b>"앱 설치"</b> / "홈 화면에 추가"</li></ol>
          <small>APK 앱도 사이트에서 게임을 받아서 업데이트할 때 다시 설치할 필요가 없어요. 구글 로그인(클라우드 저장)은 크롬에서 해 주세요.</small></div>
      </div></div>`;
    const close = () => { el.remove(); this.guideEl = null; };
    el.querySelector('.ag-x').onclick = close;
    el.onclick = (e) => { if (e.target === el) close(); };
  }
  whiteFlash() {
    const f = h('div', 'wflash', '', this.root);
    setTimeout(() => f.classList.add('go'), 30); setTimeout(() => f.remove(), 2600);
  }

  showResult(won, stars, rec = {}, saved = null) {
    const g = this.g, D = g.diff || GF.DIFF.normal, N = this.app.stage.waves.length;
    const mmss = (sec) => `${Math.floor(sec / 60)}분 ${String(sec % 60).padStart(2, '0')}초`;
    // 성과 기록 (승리·패배 모두)
    const stat = [
      ['난이도', D.name], ['웨이브', `${g.waveNo} / ${N}`], ['격파', (rec.kills ?? g.kills).toLocaleString('ko-KR')], ['남은 기지', `${g.lives} / ${this.app.stage.lives}`],
      ['최대 연쇄', rec.combo ?? Math.max(g.bestCombo, g.combo)], ['전투 시간', mmss(rec.time || 0)], ['배치 무기 · 영웅', `${rec.towers ?? 0} · ${rec.heroes ?? 0}`], ['조합 성공', `${rec.fused || 0}회`]
    ];
    const r = this.result = h('div', 'result', `
      ${won ? '<canvas class="rs-fw"></canvas>' : ''}
      <div class="box ${won ? 'win' : 'lose'}">
        <h2>${won ? this.cityName() + ' 방어 성공!' : '방어선 붕괴'}</h2>
        ${won ? `<div class="stars">${'★'.repeat(stars) + '☆'.repeat(3 - stars)}</div><div class="rs-badge">${D.name} 완료${saved && saved.first ? ' · 첫 완료!' : saved && saved.best ? ' · 최고 기록 갱신!' : ''}</div>` : ''}
        <div class="rs-grid">${stat.map(([k, v]) => `<div><small>${k}</small><b>${v}</b></div>`).join('')}</div>
        ${rec.mvp ? `<p class="rs-mvp">최고 활약 <b>${rec.mvp.name}</b> · 누적 피해 ${rec.mvp.dmg.toLocaleString('ko-KR')}</p>` : ''}
        <p class="s">${won ? '전투지역 화면의 도시 카드에 난이도별 완료가 기록됐어요' : '굽이 사이 공원에 무기를 모으고, 우회로를 열어 적을 더 오래 붙잡아 보세요'}</p>
        <div class="row"><button class="again">다시 하기</button><button class="home">처음 화면</button></div>
      </div>`, this.root);
    r.querySelector('.again').onclick = () => { this.clearResult(); this.app.startGame(); };
    const sv = !won && Saves.get(this.app.stage.id, this.g.diffId);
    if (sv) { const b = h('button', 'load', `저장한 곳부터 (웨이브 ${sv.wave + 1})`, r.querySelector('.row')); b.onclick = () => { this.clearResult(); this.app.loadGame(this.app.stage.id, this.g.diffId); }; }
    r.querySelector('.home').onclick = () => { this.clearResult(); this.app.toTitle(); };
    if (won) this.fireworks(r.querySelector('.rs-fw'), 9000);
  }
  // 승리 폭죽: 캔버스에 불꽃이 여기저기 터짐 (ms 동안, 펑 소리 함께)
  fireworks(cv, ms) {
    const c = cv.getContext('2d'), W = cv.width = this.BW, H = cv.height = this.BH, parts = [], rockets = [];
    const burst = (x, y) => { const hue = Math.random() * 360, n = 80 + Math.random() * 50; for (let i = 0; i < n; i++) { const a = Math.random() * Math.PI * 2, v = 2 + Math.random() * 7; parts.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, life: 1, hue: hue + Math.random() * 50 }); } if (this.app.sound) this.app.sound.play('boom', 0.3); };
    let t0 = performance.now(), last = t0, nextR = 0;
    const step = (now) => {
      if (!cv.isConnected) return;
      const t = now - t0, dt = Math.min(0.05, (now - last) / 1000) * 60; last = now;
      if (t < ms && t > nextR) { rockets.push({ x: W * (0.1 + Math.random() * 0.8), y: H, vy: -(13 + Math.random() * 5), top: H * (0.12 + Math.random() * 0.35) }); nextR = t + 220 + Math.random() * 260; }
      c.globalCompositeOperation = 'source-over'; c.clearRect(0, 0, W, H); c.globalCompositeOperation = 'lighter';
      for (const q of rockets) { if (q.done) continue; q.y += q.vy * dt; c.fillStyle = '#ffe9b0'; c.beginPath(); c.arc(q.x, q.y, 3, 0, 7); c.fill(); if (q.y <= q.top) { q.done = true; burst(q.x, q.y); } }
      for (const p of parts) {
        if (p.life <= 0) continue;
        p.x += p.vx * dt; p.y += p.vy * dt; p.vy += 0.07 * dt; p.vx *= 0.985; p.vy *= 0.985; p.life -= 0.01 * dt;
        c.fillStyle = `hsla(${p.hue},100%,${60 + p.life * 30}%,${Math.max(0, p.life)})`;
        c.beginPath(); c.arc(p.x, p.y, 1.6 + p.life * 3.2, 0, 7); c.fill();
      }
      if (t < ms + 2500) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  clearResult() { if (this.result) { this.result.remove(); this.result = null; } }
  clearHud() { if (this.hud) { this.hud.remove(); this.hud = null; this.floats = []; } }
}

export const fmt = (n) => (n >= 10000 ? (n / 1000).toFixed(1) + 'k' : String(Math.round(n)));
