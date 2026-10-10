// 게임 시작점: 3D 화면, 카메라, 조명, 마우스·키보드
// 카메라: 시안처럼 비스듬히 내려다보는 3D 원근 시점. 각도는 하나로 고정, 전투 구역이 화면을 꽉 채우도록 맞춤.
// 확대·축소는 같은 각도 그대로 카메라만 앞뒤로 움직임(커서 아래 지점이 그대로 유지됨)
import { Saves } from './save.js';
import { buildRecipes } from './codex.js';
import { Cloud } from './cloud.js';
import * as THREE from 'three';
import { City } from './city.js';
import { Game } from './game.js';
import { UI } from './ui.js';
import { Sound } from './audio.js';
import { layout, isTouch, looksFolded } from './layout.js';
import { getTower } from './models.js';
import { makeHero, HEROES, HERO_IDS, registerHeroes } from './heroes.js';
import { Look } from './look.js';
import { Backdrop, exportGuide } from './backdrop.js';
import { TitleScene } from './titlescene.js';

// 도시를 바꿀 때 이전 도시가 쓰던 GPU 자원을 모두 풂. 다른 곳에서 같은 재질을 다시 쓰면 three.js 가 다시 올림
function disposeTree(root) {
  const mats = new Set(), tex = new Set();
  root.traverse((o) => {
    if (o.geometry) o.geometry.dispose();
    if (o.material) [].concat(o.material).forEach((m) => mats.add(m));
  });
  for (const m of mats) {
    for (const k in m) { const v = m[k]; if (v && v.isTexture) tex.add(v); }
    m.dispose();
  }
  for (const t of tex) t.dispose();
}

class App {
  constructor() {
    if (GF.SETTINGS.foldScreen == null) GF.SETTINGS.foldScreen = looksFolded();   // 처음 열 때 펼친 폴드면 꽉 채우기
    // 스테이지: 주소의 ?stage=newyork 또는 마지막으로 고른 스테이지, 없으면 서울
    let want = new URLSearchParams(location.search).get('stage');
    if (!want) try { want = localStorage.getItem('gf_stage'); } catch (e) { /* 저장 불가 환경 */ }
    this.stage = GF.STAGES[want] || GF.STAGES.seoul;
    const r = this.renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });   // 계단 현상은 후처리(MSAA·FXAA)가 처리
    r.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    r.setSize(window.innerWidth, window.innerHeight);
    r.shadowMap.enabled = GF.SETTINGS.shadows;
    r.shadowMap.type = THREE.PCFShadowMap;
    r.shadowMap.autoUpdate = false;   // 도시 그림자는 바뀔 때만 (city.shadowDirty)
    r.toneMapping = THREE.ACESFilmicToneMapping;
    r.toneMappingExposure = 0.82;
    document.getElementById('view').appendChild(r.domElement);

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(34, 16 / 9, 0.5, 900);
    // EL: 내려다보는 각도(고정) / zoom: 1 = 전투 구역 전체가 화면에 꽉 참, 최대 3배
    this.EL = 0.6;   // 약 34도: 시안처럼 비스듬히 내려다보며 멀리 한강·스카이라인이 보이는 각도 (고정)
    // AZ: 옆으로 돌린 각도(기본 살짝 대각선). 오른쪽 위 각도 버튼으로만 바꿀 수 있음 (v0.39.0 사용자 요청)
    this.AZ = GF.SETTINGS.camAzimuth ?? -0.32;
    this.cam = { target: new THREE.Vector3(0, 0, 0), zoom: 1, zoomGoal: 1, shake: 0, anchor: null, az: this.AZ, el: this.EL, spin: 0, tilt: 0 };

    // 조명: 하늘빛 + 해 (그림자). 사방에서 오는 하늘 반사광은 look.js 환경광이 담당
    this.scene.add(new THREE.HemisphereLight(0xd6ebff, 0x6b6450, 0.4));
    const sun = this.sun = new THREE.DirectionalLight(0xffe6c4, 2.3);
    sun.position.set(-34, 40, 18);   // 낮은 해 → 긴 그림자로 입체감
    sun.target.position.set(0, 0, 0); this.scene.add(sun.target);
    sun.castShadow = true;
    Object.assign(sun.shadow.camera, { left: -48, right: 48, top: 40, bottom: -40, near: 1, far: 180 });
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.bias = -0.0005; sun.shadow.normalBias = 0.04; sun.shadow.radius = 2.5;
    this.scene.add(sun);
    this.look = new Look(r, this.scene, this.camera, sun);

    registerHeroes();   // 영웅을 무기 목록(GF.WEAPONS)에 등록
    buildRecipes();     // 📖 무기도감 조합법 목록
    this.city = new City(this.scene, this.stage);
    this.sound = new Sound();
    this.ui = new UI(this);
    this.game = new Game(this);
    this.paused = false;
    // 그림 배경이 있는 스테이지는 코드로 만든 도시 대신 그림을 깔고 그 위에 3D 무기·적만 그림
    if (this.stage.backdrop && GF.SETTINGS.useBackdrop !== false) this.backdrop = new Backdrop(this, this.stage.backdrop);
    this.exportGuide = (w, h) => exportGuide(this, w, h);

    this.icons = this.makeIcons();
    this.ui.showTitle(this.icons);
    // 구글 로그인 저장: 상태가 바뀌면 처음 화면의 로그인 칸을 다시 그림 (서버 기록을 받아 오면 화면 전체 새로)
    Cloud.onChange(() => { if (this.game.state === 'title') this.ui.renderCloud(); });
    Cloud.init();
    this.setupInput();
    window.addEventListener('resize', () => this.resize());
    // 휴대폰: 주소창이 숨거나 화면을 돌리거나 폴드를 펼치면 보이는 크기가 늦게 바뀜 → 조금 뒤에 한 번 더 맞춤
    const later = () => { this.resize(); this.ui.fit(); setTimeout(() => { this.resize(); this.ui.fit(); }, 350); };
    if (window.visualViewport) window.visualViewport.addEventListener('resize', later);
    window.addEventListener('orientationchange', later);
    document.addEventListener('fullscreenchange', later); document.addEventListener('webkitfullscreenchange', later);
    // 휴대폰은 처음 화면을 터치하면 자동으로 전체 화면 + 가로 고정 (브라우저 규칙상 터치가 있어야 켤 수 있음)
    if (isTouch()) window.addEventListener('pointerdown', () => this.ui.autoFullscreen(), true);
    this.resize();
    this.last = performance.now();
    this.time = 0;
    this.renderer.setAnimationLoop(() => this.frame());
    window.__GF = this;
  }

  // 카드에 쓰는 무기 그림을 3D 모델로 찍어 둠
  makeIcons() {
    const out = {};
    const r = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
    r.setSize(160, 160); r.toneMapping = THREE.ACESFilmicToneMapping;
    const sc = new THREE.Scene();
    sc.add(new THREE.HemisphereLight(0xffffff, 0x7a6a50, 1.6));
    const d = new THREE.DirectionalLight(0xffffff, 2.2); d.position.set(-3, 5, 4); sc.add(d);
    const cam = new THREE.OrthographicCamera(-0.75, 0.75, 0.75, -0.75, 0.1, 20);
    cam.position.set(2.2, 2.2, 2.6); cam.lookAt(0.1, 0.25, 0);
    for (const id of GF.LOADOUT.concat(Object.keys(GF.COMBO_WEAPONS || {}))) {   // 조합 무기 그림도 (무기도감용)
      const m = getTower(id);
      m.yaw.rotation.y = 0.5;
      if (GF.WEAPONS[id].parts) m.root.scale.setScalar(0.7);
      sc.add(m.root);
      r.render(sc, cam);
      out[id] = r.domElement.toDataURL();
      sc.remove(m.root);
    }
    // 영웅 얼굴 그림 (몸 위쪽을 크게)
    const hc = new THREE.OrthographicCamera(-0.42, 0.42, 0.42, -0.42, 0.1, 20);
    hc.position.set(2.4, 1.6, 1.1); hc.lookAt(0, 0.62, 0);
    for (const id of Object.keys(HEROES)) {
      const m = makeHero(id); m.yaw.rotation.y = -0.45; m.fire(); m.animate(0.45, 0.5);
      sc.add(m.root); r.render(sc, hc); out['hero_' + id] = r.domElement.toDataURL(); sc.remove(m.root);
    }
    r.dispose(); r.forceContextLoss();
    return out;
  }

  startGame() {
    this.ui.hideTitle(); this.ui.clearResult();
    this.paused = false;
    this.cam.zoom = this.cam.zoomGoal = 1; this.fitView();
    this.game.start();
    this.ui.buildHud();
    this.ui.playIntro();
  }
  // 저장한 게임 이어하기: 도시 × 난이도 칸 (diff 없으면 지금 고른 난이도)
  loadGame(id, diff) {
    const S = GF.STAGES[id]; if (!S) return;
    const k = GF.diffFor(S, diff || GF.SETTINGS.difficulty), d = Saves.get(id, k); if (!d) return;
    GF.SETTINGS.difficulty = k; GF.savePrefs();
    if (GF.STAGES[id] !== this.stage) this.selectStage(id);
    this.startGame();
    this.game.restore(d);
  }
  // 전투 중 저장 (exit = 저장하고 처음 화면으로)
  saveGame(exit, auto) {
    const d = this.game.serialize();
    if (!d) { if (!auto) this.ui.toast('지금은 저장할 수 없습니다'); return false; }
    if (!Saves.put(d)) { this.ui.toast('저장 실패: 브라우저 저장 공간을 쓸 수 없습니다', '#FF8A8E'); return false; }
    if (exit) { this.paused = false; this.toTitle(); this.ui.toastAny(`저장 완료 · ${this.stage.name} 웨이브 ${d.wave + 1}부터 이어하기`); }
    else if (auto) this.ui.toast(`💾 자동 저장 · 웨이브 ${d.wave} 완료`, '#8FF3FF', 2400);
    else this.ui.toast(`저장 완료 · 웨이브 ${d.wave + 1}부터 이어할 수 있어요`, '#8FF3FF', 3000);
    return true;
  }
  // 처음 화면에서 스테이지 바꾸기: 도시를 새로 지음
  selectStage(id) {
    const S = GF.STAGES[id];
    if (!S || S === this.stage || this.game.state !== 'title') return;
    this.stage = S;
    try { localStorage.setItem('gf_stage', id); } catch (e) { /* 저장 불가 환경 */ }
    this.scene.remove(this.city.group);
    disposeTree(this.city.group);   // 이전 도시의 모양·재질·그림(텍스처)까지 GPU에서 비움 (도시를 여러 번 바꾸면 메모리가 쌓여 버벅이던 문제)
    this.city = new City(this.scene, S);
    this.game.city = this.city; this.game.S = S;
    this.ui.resetLabels();
    this.city.shadowDirty = true;
    this.fitView();
    this.ui.hideTitle(); this.ui.showTitle(this.icons);
  }
  toTitle() {
    this.game.state = 'title'; this.paused = false;
    this.game.cancelMode();
    this.ui.clearHud(); this.ui.clearResult();
    this.ui.showTitle(this.icons);
  }
  applySettings() {
    GF.savePrefs();
    this.sound.apply();
    const q = GF.SETTINGS.graphics === 'auto' ? this.look.q : GF.SETTINGS.graphics;
    if (q && q !== this.look.q) { this.look.setQuality(q); this.resize(); this.city.shadowDirty = true; }
    const on = GF.SETTINGS.shadows;
    if (this.renderer.shadowMap.enabled !== on) {
      this.renderer.shadowMap.enabled = on;
      this.scene.traverse((o) => { if (o.material) [].concat(o.material).forEach((m) => { m.needsUpdate = true; }); });
      this.city.shadowDirty = true;
    }
  }
  togglePause() { if (!this.game.isOver()) this.paused = !this.paused; }
  shake(s) { this.cam.shake = Math.max(this.cam.shake, s); }

  resize() {
    const L = this.L = layout(), w = L.w, h = L.h;
    const v = document.getElementById('view');
    Object.assign(v.style, { left: L.x + 'px', top: L.y + 'px', width: w + 'px', height: h + 'px' });
    document.body.classList.toggle('portrait', L.portrait && isTouch());
    this.renderer.setSize(w, h);
    this.look.resize();
    this.W = w; this.H = h;
    // 폴드 펼친 넓적한 화면은 더 위에서 내려다봐서 맵이 세로로도 크게 보이게
    const el = L.fold ? 0.92 : 0.6;
    if (el !== this.EL) { this.EL = el; if (this.cam) { this.cam.el = el; } }
    this.camera.aspect = w / h; this.camera.updateProjectionMatrix();
    if (this.title) this.title.resize(w, h);
    this.fitView();
  }

  // 화면에서 전투가 보이는 영역(위 정보줄과 아래 카드 줄 사이, 실제 픽셀)
  fieldRect() {
    const L = this.L;
    return { top: L.base.top * L.k, bottom: L.base.bottom * L.k };
  }
  pose(t = this.cam.target, d = this.cam.dist, az = this.cam.az, el = this.cam.el) {
    const c = this.camera, h = Math.cos(el) * d;
    c.position.set(t.x + Math.sin(az) * h, t.y + Math.sin(el) * d, t.z + Math.cos(az) * h);
    c.lookAt(t); c.updateMatrixWorld(true);
  }
  toPx(x, y, z) { const v = new THREE.Vector3(x, y, z).project(this.camera); return { x: (v.x + 1) / 2 * this.W, y: (1 - v.y) / 2 * this.H }; }
  groundAt(px, py) {
    const ray = new THREE.Raycaster(); ray.setFromCamera(new THREE.Vector2((px - this.L.x) / this.W * 2 - 1, -((py - this.L.y) / this.H) * 2 + 1), this.camera);   // px,py = 브라우저 화면 좌표
    const p = new THREE.Vector3();
    return ray.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), p) ? p : null;
  }
  // 줌 1: 전투 구역 위·아래 끝이 전투 영역 위·아래에 딱 맞고, 가까운 쪽 가로가 화면을 넘지 않는 거리와 위치를 계산
  fitView() {
    if (!this.W) return;
    const b = this.stage.bounds, f0 = this.fieldRect(), cx = (b.x0 + b.x1) / 2, cz = (b.z0 + b.z1) / 2;
    // 여백 줄임 (2026-10-08 사용자 요청): 위쪽 빈 띠 10%→5%, 아래 카드 줄 쪽으로 4% 더 씀
    const f = { top: f0.top + (f0.bottom - f0.top) * 0.05, bottom: f0.bottom + (f0.bottom - f0.top) * 0.04 };
    // 적 입구·지휘부·도로는 반드시 화면 안에 (가로 맞춤 기준)
    const keyPts = [];
    const grab = (v) => { if (Array.isArray(v)) { if (v.length === 2 && typeof v[0] === 'number') keyPts.push(v); else v.forEach(grab); } else if (v && typeof v === 'object') Object.values(v).forEach(grab); };
    grab([this.stage.gate, this.stage.base, this.stage.route, this.stage.branches || []]);
    const az = this.AZ, el = this.EL;
    const fwd = new THREE.Vector3(-Math.sin(az), 0, -Math.cos(az));            // 화면 위쪽 = 땅 위 앞 방향
    const right = new THREE.Vector3(Math.cos(az), 0, -Math.sin(az));
    const t = new THREE.Vector3(cx, 0, cz);
    const corners = [[b.x0, b.z0], [b.x1, b.z0], [b.x0, b.z1], [b.x1, b.z1]];
    let d = 70;
    for (let i = 0; i < 80; i++) {
      this.pose(t, d, az, el);
      const ps = corners.map(([x, z]) => this.toPx(x, 0, z));
      const top = Math.min(...ps.map((p) => p.y)), bot = Math.max(...ps.map((p) => p.y));
      const xl = Math.min(...ps.map((p) => p.x)), xr = Math.max(...ps.map((p) => p.x)), bw = xr - xl;
      const span = bot - top, want = f.bottom - f.top;
      const kp = keyPts.map(([x, z]) => this.toPx(x, 0, z)), kw = 2 * Math.max(...kp.map((p) => Math.abs(p.x - (xl + xr) / 2))) + 160;
      d *= Math.max(span / want, bw / (this.W * 1.3), kw / (this.W * 0.96));   // 가까운 쪽 빈 모서리는 화면 밖으로 나가도 됨, 도로·입구·지휘부는 화면 안
      const k = ((top + bot) / 2 - (f.top + f.bottom) / 2) * (b.z1 - b.z0) / span;
      t.addScaledVector(fwd, -k);
      t.addScaledVector(right, ((xl + xr) / 2 - this.W / 2) * (b.x1 - b.x0) / bw * 0.5);   // 좌우 가운데 맞춤
    }
    this.fit = { d, t: t.clone() };
    this.cam.target.copy(t);
    this.cam.dist = this.cam.distGoal = d / this.cam.zoom;
    this.pose();
  }
  // 시점 돌리기 (az: 옆으로, el: 위아래 기울기). resetView = 기본 대각선 시점
  rotateView(daz, del = 0) {
    const c = this.cam;
    c.az += daz;
    c.el = Math.max(0.42, Math.min(1.35, c.el + del));
    c.anchor = null;
  }
  resetView() { this.cam.az = this.AZ; this.cam.el = this.EL; this.cam.zoomGoal = 1; this.cam.anchor = null; }
  zoomAt(px, py, factor) {
    const c = this.cam, nz = Math.min(3, Math.max(0.7, c.zoomGoal * factor));
    if (nz === c.zoomGoal) return;
    c.zoomGoal = nz;
    c.anchor = { px, py, g: this.groundAt(px, py) };
  }

  updateCamera(dt) {
    const c = this.cam;
    if (!this.fit) return;
    const prev = c.zoom;
    c.zoom += (c.zoomGoal - c.zoom) * Math.min(1, dt * 10);
    if (Math.abs(c.zoom - c.zoomGoal) < 0.001) c.zoom = c.zoomGoal;
    c.dist = this.fit.d / c.zoom;
    this.pose();
    // 커서 아래 지점이 그대로 커서 아래에 남도록
    if (c.anchor && c.anchor.g && prev !== c.zoom) {
      const g2 = this.groundAt(c.anchor.px, c.anchor.py);
      if (g2) { c.target.x += c.anchor.g.x - g2.x; c.target.z += c.anchor.g.z - g2.z; }
    }
    if (c.zoom === c.zoomGoal) c.anchor = null;
    this.clampTarget();
    const sh = c.shake > 0 ? (Math.random() - 0.5) * c.shake : 0;
    c.shake = Math.max(0, c.shake - dt);
    this.pose(c.target.clone().add(new THREE.Vector3(sh, 0, sh)));
  }

  // 화면 좌표 → 땅 위 점
  pick(clientX, clientY) {
    const r = this.renderer.domElement.getBoundingClientRect();
    const ndc = new THREE.Vector2((clientX - r.left) / r.width * 2 - 1, -((clientY - r.top) / r.height) * 2 + 1);
    const ray = new THREE.Raycaster(); ray.setFromCamera(ndc, this.camera);
    const p = new THREE.Vector3();
    if (!ray.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), p)) return null;
    return p;
  }

  // 설치할 것을 고른 상태 (무기 카드·영웅·작전 카드·전략 무기·우회로)
  placing() { const g = this.game; return !!g.mode && !g.isOver() && g.state !== 'title'; }
  setupInput() {
    const el = this.renderer.domElement;
    let drag = null;
    const pts = new Map();
    el.addEventListener('pointerdown', (e) => {
      this.sound.unlock();
      if (e.button === 2) { drag = { rot: true, x: e.clientX, y: e.clientY, moved: false }; el.setPointerCapture(e.pointerId); return; }   // 오른쪽 클릭 = 취소 (시점 각도는 화면 오른쪽 위 각도 버튼으로만 바꿈)
      pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      // 휴대폰에서 무기·영웅·카드를 고른 상태면 지도를 고정: 손가락으로 끌면 지도 대신 설치 미리보기가 따라오고, 떼는 곳에 설치
      if (e.pointerType === 'touch' && this.placing()) {
        if (pts.size > 1) return;
        drag = { aim: true, x: e.clientX, y: e.clientY, moved: false, touch: true };
        this.mouse = { x: e.clientX, y: e.clientY };
        const p = this.pick(e.clientX, e.clientY); if (p) this.game.hoverAt(p);
        el.setPointerCapture(e.pointerId); return;
      }
      if (pts.size === 2) { const [a, b] = [...pts.values()]; drag = { pinch: Math.hypot(a.x - b.x, a.y - b.y), z0: this.cam.zoomGoal, ang: Math.atan2(b.y - a.y, b.x - a.x), my: (a.y + b.y) / 2, moved: true }; return; }
      drag = { x: e.clientX, y: e.clientY, moved: false, touch: e.pointerType === 'touch' };
      if (e.pointerType === 'touch') this.mouse = { x: e.clientX, y: e.clientY };
      el.setPointerCapture(e.pointerId);
    });
    el.addEventListener('pointermove', (e) => {
      this.mouse = { x: e.clientX, y: e.clientY };
      if (pts.has(e.pointerId)) pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      const p = this.pick(e.clientX, e.clientY);
      if (p && this.game.state !== 'title') this.game.hoverAt(p);
      if (!drag || drag.aim) return;
      if (drag.rot) {
        const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
        if (!drag.moved && Math.abs(dx) + Math.abs(dy) > 5) drag.moved = true;
        return;
      }
      if (drag.pinch) {
        const [a, b] = [...pts.values()];
        if (a && b) {
          const want = drag.z0 * Math.hypot(a.x - b.x, a.y - b.y) / Math.max(20, drag.pinch);
          this.zoomAt((a.x + b.x) / 2, (a.y + b.y) / 2, want / this.cam.zoomGoal);
          // 두 손가락은 확대·축소만 (각도는 각도 버튼으로만: 사용자 요청으로 고정)
        }
        return;
      }
      const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      if (!drag.moved && Math.abs(dx) + Math.abs(dy) > (drag.touch ? 14 : 7)) drag.moved = true;
      if (drag.moved) {
        const g1 = this.groundAt(drag.lx ?? drag.x, drag.ly ?? drag.y), g2 = this.groundAt(e.clientX, e.clientY);
        if (g1 && g2) { this.cam.target.x += g1.x - g2.x; this.cam.target.z += g1.z - g2.z; }
        this.cam.anchor = null;
        this.clampTarget(); this.pose();
        drag.lx = e.clientX; drag.ly = e.clientY;
      }
    });
    const up = (e) => {
      pts.delete(e.pointerId);
      const d = drag; if (!pts.size) drag = null;
      if (d && d.rot) { if (!d.moved) this.game.cancelMode(); return; }
      if (d && d.aim) {
        if (pts.size) return;
        const p = this.pick(e.clientX, e.clientY);
        if (p && this.placing()) {
          const g = this.game, n = g.towers.length;
          this.mouse = { x: e.clientX, y: e.clientY }; g.hoverAt(p); g.click(p);
          if (g.towers.length > n && g.mode) g.cancelMode();   // 설치가 끝나면 지도 고정 풀림
        }
        return;
      }
      if (!d || d.moved || e.button !== 0) return;
      const p = this.pick(e.clientX, e.clientY);
      if (p && this.game.state !== 'title') {
        if (e.pointerType === 'touch') { this.mouse = { x: e.clientX, y: e.clientY }; this.game.hoverAt(p); }   // 터치: 손가락 위치에 미리보기·안내
        this.game.click(p);
      }
    };
    el.addEventListener('pointerup', up);
    el.addEventListener('pointercancel', (e) => { pts.delete(e.pointerId); drag = null; });
    el.addEventListener('pointerleave', () => { this.mouse = null; });
    el.addEventListener('contextmenu', (e) => e.preventDefault());
    el.addEventListener('wheel', (e) => { e.preventDefault(); this.zoomAt(e.clientX, e.clientY, e.deltaY > 0 ? 1 / 1.15 : 1.15); }, { passive: false });

    this.keys = {};
    window.addEventListener('pointerdown', () => this.sound.unlock());
    window.addEventListener('keydown', (e) => {
      this.sound.unlock();
      if (e.target && e.target.tagName === 'INPUT') return;   // 이름 입력 중에는 단축키 무시
      if (this.ui.shopEl && e.code === 'Escape') { this.ui.closeShop(); return; }
      if (this.ui.codexEl) { if (e.code === 'Escape') this.ui.closeCodex(); return; }
      this.keys[e.code] = true;
      const g = this.game;
      if (g.state === 'title') { if (e.code === 'Enter') { if (this.ui.zone) this.ui.zoneStart(); else this.ui.openZone(); } if (e.code === 'Escape') this.ui.closeZone(); return; }
      // 무기 단축키: 윗줄 1~9·0, 아랫줄 Shift + 1~9·0
      const dg = /^Digit(\d)$/.exec(e.code);
      if (dg) { const d = +dg[1], i = (d === 0 ? 9 : d - 1) + (e.shiftKey ? 10 : 0); if (GF.LOADOUT[i]) g.setMode(GF.LOADOUT[i]); }
      if (e.code === 'KeyZ') g.pickStrat('icbm');
      if (e.code === 'KeyX') g.pickStrat('nuke');
      if (e.code === 'KeyQ') g.pickCard(0);
      if (e.code === 'KeyW') g.pickCard(1);
      if (e.code === 'KeyE') g.pickCard(2);
      if (e.code === 'Escape') g.cancelMode();
      if (e.code === 'KeyH') this.ui.openShop('hero');
      if (e.code === 'KeyC') this.ui.openCodex();
      if (e.code === 'Space') { e.preventDefault(); this.togglePause(); }
      if (e.code === 'KeyN' || e.code === 'Enter') g.callNext();
      if (e.code === 'Equal' || e.code === 'NumpadAdd') this.zoomAt(this.L.x + this.W / 2, this.L.y + this.H / 2, 1.25);
      if (e.code === 'Minus' || e.code === 'NumpadSubtract') this.zoomAt(this.L.x + this.W / 2, this.L.y + this.H / 2, 0.8);
      if (e.code === 'Digit0' || e.code === 'Home' || e.code === 'KeyR') this.resetView();
    });
    window.addEventListener('keyup', (e) => { this.keys[e.code] = false; });
  }

  // 확대했을 때 보이는 영역이 전투 구역 밖으로 나가지 않게. 줌 1이면 맞춤 위치로 고정
  clampTarget() {
    const c = this.cam, t = c.target, F = this.fit;
    if (!F) return;
    const k = Math.max(0, Math.min(1, (c.zoom - 1) / 0.05));
    // 허용 범위: 줌이 클수록 넓어짐 (구역 크기 × (1 - 1/줌))
    const b = this.stage.bounds, z = c.zoom;
    const hx = (b.x1 - b.x0) / 2 * (1 - 1 / z), hz = (b.z1 - b.z0) / 2 * (1 - 1 / z);
    const cxm = F.t.x, czm = F.t.z;
    t.x = Math.max(cxm - hx, Math.min(cxm + hx, t.x));
    t.z = Math.max(czm - hz, Math.min(czm + hz, t.z));
    if (k === 0) { t.x = cxm; t.z = czm; }
  }

  // 자동 그래픽: 4초 동안 평균 프레임이 느리면(약 40fps 미만) 한 단계 낮춤
  autoQuality(dt) {
    if (GF.SETTINGS.graphics !== 'auto' || document.hidden) return;
    this.fpsT = (this.fpsT || 0) + dt; this.fpsN = (this.fpsN || 0) + 1;
    if (this.fpsT < 4) return;
    const avg = this.fpsT / this.fpsN; this.fpsT = 0; this.fpsN = 0;
    const next = { ultra: 'high', high: 'medium', medium: 'low' }[this.look.q];
    if (avg > 1 / 40 && next) { this.look.setQuality(next); this.resize(); this.city.shadowDirty = true; }
  }

  frame() {
    const now = performance.now(); const real = Math.min((now - this.last) / 1000, 0.1); this.last = now;
    this.time += real;
    const k = this.keys || {}, sp = 30 * real / this.cam.zoom, az = this.cam.az;   // 방향키 이동 (보는 방향 기준)
    const mx = (k.ArrowRight ? 1 : 0) - (k.ArrowLeft ? 1 : 0), mz = (k.ArrowDown ? 1 : 0) - (k.ArrowUp ? 1 : 0);
    this.cam.target.x += (mx * Math.cos(az) + mz * Math.sin(az)) * sp;
    this.cam.target.z += (-mx * Math.sin(az) + mz * Math.cos(az)) * sp;
    // 시점 각도는 오른쪽 위 각도 버튼(누르고 있는 동안)으로만 바뀜: 좌우 spin, 위아래 tilt
    if (this.cam.spin || this.cam.tilt) this.rotateView(this.cam.spin * 1.4 * real, this.cam.tilt * 0.7 * real);
    this.clampTarget();

    const dt = this.paused ? 0 : real * this.game.speed;
    this.city.update(real, this.time);
    this.game.update(dt, this.time);
    this.updateCamera(real);
    this.look.update(this.cam.dist);
    if (this.game.state === 'title') {   // 처음 화면: 서울 맵 대신 전투 장면
      // 홈 그림(움직이는 열병식)이나 전투지역 화면이 화면을 다 가리면 뒤의 3D 장면은 그리지 않음 (v0.49.0: 홈 화면 렉)
      const T = this.ui.title, Z = this.ui.zone;
      if ((T && T.classList.contains('has-bg')) || (Z && Z.classList.contains('has-bg'))) { this.ui.update(dt || 0); return; }
      if (!this.title) { this.title = new TitleScene(this.renderer); this.title.resize(this.W, this.H); }
      this.title.update(real); this.title.render();
    } else {
      if (this.city.shadowDirty) { this.renderer.shadowMap.needsUpdate = true; this.city.shadowDirty = false; }
      this.look.render();
      if (!document.hidden) this.look.governor(real);   // 느리면 해상도 자동으로 낮춤 (폴드 큰 화면 렉 대응)
    }
    this.autoQuality(real);
    this.ui.update(dt || 0);
  }
}

new App();
