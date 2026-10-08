// 게임 시작점: 3D 화면, 카메라, 조명, 마우스·키보드
// 카메라: 시안처럼 비스듬히 내려다보는 3D 원근 시점. 각도는 하나로 고정, 전투 구역이 화면을 꽉 채우도록 맞춤.
// 확대·축소는 같은 각도 그대로 카메라만 앞뒤로 움직임(커서 아래 지점이 그대로 유지됨)
import { Saves } from './save.js';
import { Cloud } from './cloud.js';
import * as THREE from 'three';
import { City } from './city.js';
import { Game } from './game.js';
import { UI } from './ui.js';
import { Sound } from './audio.js';
import { layout, isTouch } from './layout.js';
import { getTower } from './models.js';
import { makeHero, HERO_IDS, registerHeroes } from './heroes.js';
import { Look } from './look.js';
import { Backdrop, exportGuide } from './backdrop.js';
import { TitleScene } from './titlescene.js';

class App {
  constructor() {
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
    // AZ: 옆으로 돌린 각도(기본 살짝 대각선). 사용자가 오른쪽 드래그·두 손가락 비틀기·회전 버튼으로 바꿀 수 있음
    this.AZ = GF.SETTINGS.camAzimuth ?? -0.32;
    this.cam = { target: new THREE.Vector3(0, 0, 0), zoom: 1, zoomGoal: 1, shake: 0, anchor: null, az: this.AZ, el: this.EL, spin: 0 };

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
    for (const id of GF.LOADOUT) {
      const m = getTower(id);
      m.yaw.rotation.y = 0.5;
      sc.add(m.root);
      r.render(sc, cam);
      out[id] = r.domElement.toDataURL();
      sc.remove(m.root);
    }
    // 영웅 얼굴 그림 (몸 위쪽을 크게)
    const hc = new THREE.OrthographicCamera(-0.42, 0.42, 0.42, -0.42, 0.1, 20);
    hc.position.set(2.4, 1.6, 1.1); hc.lookAt(0, 0.62, 0);
    for (const id of HERO_IDS) {
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
  }
  // 저장한 게임 이어하기 (처음 화면에서)
  loadGame(id) {
    const d = Saves.get(id); if (!d) return;
    if (GF.STAGES[id] !== this.stage) this.selectStage(id);
    this.startGame();
    this.game.restore(d);
  }
  // 전투 중 저장 (exit = 저장하고 처음 화면으로)
  saveGame(exit) {
    const d = this.game.serialize();
    if (!d) { this.ui.toast('지금은 저장할 수 없습니다'); return false; }
    if (!Saves.put(d)) { this.ui.toast('저장 실패: 브라우저 저장 공간을 쓸 수 없습니다', '#FF8A8E'); return false; }
    if (exit) { this.paused = false; this.toTitle(); this.ui.toastAny(`저장 완료 · ${this.stage.name} 웨이브 ${d.wave + 1}부터 이어하기`); }
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
    this.city.group.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
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
    const f = { top: f0.top + (f0.bottom - f0.top) * 0.1, bottom: f0.bottom };   // 위쪽 10%는 구역 너머 도시·한강이 보이게 비움
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
      d *= Math.max(span / want, bw / (this.W * 1.12));   // 가까운 쪽 모서리는 화면 밖으로 살짝 나가도 됨 (시안처럼 꽉 차게)
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

  setupInput() {
    const el = this.renderer.domElement;
    let drag = null;
    const pts = new Map();
    el.addEventListener('pointerdown', (e) => {
      this.sound.unlock();
      if (e.button === 2) { drag = { rot: true, x: e.clientX, y: e.clientY, moved: false }; el.setPointerCapture(e.pointerId); return; }   // 오른쪽 드래그 = 시점 회전, 그냥 클릭 = 취소
      pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
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
      if (!drag) return;
      if (drag.rot) {
        const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
        if (!drag.moved && Math.abs(dx) + Math.abs(dy) > 5) drag.moved = true;
        if (drag.moved) { this.rotateView(-(e.clientX - (drag.lx ?? drag.x)) * 0.006, (e.clientY - (drag.ly ?? drag.y)) * 0.004); drag.lx = e.clientX; drag.ly = e.clientY; }
        return;
      }
      if (drag.pinch) {
        const [a, b] = [...pts.values()];
        if (a && b) {
          const want = drag.z0 * Math.hypot(a.x - b.x, a.y - b.y) / Math.max(20, drag.pinch);
          this.zoomAt((a.x + b.x) / 2, (a.y + b.y) / 2, want / this.cam.zoomGoal);
          // 두 손가락 비틀기 = 옆으로 회전, 두 손가락 함께 위아래 = 기울기
          let da = Math.atan2(b.y - a.y, b.x - a.x) - drag.ang; da = Math.atan2(Math.sin(da), Math.cos(da));
          const my = (a.y + b.y) / 2;
          this.rotateView(-da, (my - drag.my) * 0.004);
          drag.ang += da; drag.my = my;
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
      this.keys[e.code] = true;
      const g = this.game;
      if (g.state === 'title') { if (e.code === 'Enter') this.startGame(); return; }
      const n = parseInt(e.key, 10);
      if (n >= 1 && n <= GF.LOADOUT.length) g.setMode(GF.LOADOUT[n - 1]);
      if (e.code === 'KeyZ') g.pickStrat('icbm');
      if (e.code === 'KeyX') g.pickStrat('nuke');
      if (e.code === 'KeyQ') g.pickCard(0);
      if (e.code === 'KeyW') g.pickCard(1);
      if (e.code === 'KeyE') g.pickCard(2);
      if (e.code === 'Escape') g.cancelMode();
      if (e.code === 'KeyH') this.ui.openShop('hero');
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
    const spinK = (k.BracketRight || k.Period ? 1 : 0) - (k.BracketLeft || k.Comma ? 1 : 0) + this.cam.spin;   // [ ] 또는 , . 키, 화면 회전 버튼
    if (spinK) this.rotateView(spinK * 1.4 * real);
    this.clampTarget();

    const dt = this.paused ? 0 : real * this.game.speed;
    this.city.update(real, this.time);
    this.game.update(dt, this.time);
    this.updateCamera(real);
    this.look.update(this.cam.dist);
    if (this.game.state === 'title') {   // 처음 화면: 서울 맵 대신 전투 장면
      if (!this.title) { this.title = new TitleScene(this.renderer); this.title.resize(this.W, this.H); }
      this.title.update(real); this.title.render();
    } else {
      if (this.city.shadowDirty) { this.renderer.shadowMap.needsUpdate = true; this.city.shadowDirty = false; }
      this.look.render();
    }
    this.autoQuality(real);
    this.ui.update(dt || 0);
  }
}

new App();
