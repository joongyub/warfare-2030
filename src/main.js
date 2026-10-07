// 게임 시작점: 3D 화면, 카메라, 조명, 마우스·키보드
// 카메라: 시안처럼 비스듬히 내려다보는 3D 원근 시점. 각도는 하나로 고정, 전투 구역이 화면을 꽉 채우도록 맞춤.
// 확대·축소는 같은 각도 그대로 카메라만 앞뒤로 움직임(커서 아래 지점이 그대로 유지됨)
import * as THREE from 'three';
import { City } from './city.js';
import { Game } from './game.js';
import { UI } from './ui.js';
import { Sound } from './audio.js';
import { layout, isTouch } from './layout.js';
import { getTower } from './models.js';
import { Look } from './look.js';
import { Backdrop, exportGuide } from './backdrop.js';

class App {
  constructor() {
    this.stage = GF.STAGES.seoul;
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
    this.camera = new THREE.PerspectiveCamera(32, 16 / 9, 0.5, 900);
    // EL: 내려다보는 각도(고정, 약 48도) / zoom: 1 = 전투 구역 전체가 화면에 꽉 참, 최대 3배
    this.EL = 0.84;
    this.cam = { target: new THREE.Vector3(0, 0, 0), zoom: 1, zoomGoal: 1, shake: 0, anchor: null };

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
  toTitle() {
    this.game.state = 'title';
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
    this.fitView();
  }

  // 화면에서 전투가 보이는 영역(위 정보줄과 아래 카드 줄 사이, 실제 픽셀)
  fieldRect() {
    const L = this.L;
    return { top: L.base.top * L.k, bottom: L.base.bottom * L.k };
  }
  pose(t = this.cam.target, d = this.cam.dist) {
    const c = this.camera;
    c.position.set(t.x, t.y + Math.sin(this.EL) * d, t.z + Math.cos(this.EL) * d);
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
    const b = this.stage.bounds, f = this.fieldRect(), cx = (b.x0 + b.x1) / 2;
    const t = new THREE.Vector3(cx, 0, (b.z0 + b.z1) / 2);
    let d = 70;
    for (let i = 0; i < 80; i++) {
      this.pose(t, d);
      const top = this.toPx(cx, 0, b.z0).y, bot = this.toPx(cx, 0, b.z1).y;
      const bw = this.toPx(b.x1, 0, b.z1).x - this.toPx(b.x0, 0, b.z1).x;
      const span = bot - top, want = f.bottom - f.top;
      d *= Math.max(span / want, bw / (this.W * 0.995));
      t.z += ((top + bot) / 2 - (f.top + f.bottom) / 2) * (b.z1 - b.z0) / span;
    }
    this.fit = { d, t: t.clone() };
    this.cam.target.copy(t);
    this.cam.dist = this.cam.distGoal = d / this.cam.zoom;
    this.pose();
  }
  zoomAt(px, py, factor) {
    const c = this.cam, nz = Math.min(3, Math.max(1, c.zoomGoal * factor));
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
      if (e.button === 2) { this.game.cancelMode(); return; }
      pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pts.size === 2) { const [a, b] = [...pts.values()]; drag = { pinch: Math.hypot(a.x - b.x, a.y - b.y), z0: this.cam.zoomGoal, moved: true }; return; }
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
      if (drag.pinch) { const [a, b] = [...pts.values()]; if (a && b) { const want = drag.z0 * Math.hypot(a.x - b.x, a.y - b.y) / Math.max(20, drag.pinch); this.zoomAt((a.x + b.x) / 2, (a.y + b.y) / 2, want / this.cam.zoomGoal); } return; }
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
      if (e.code === 'Space') { e.preventDefault(); this.togglePause(); }
      if (e.code === 'KeyN' || e.code === 'Enter') g.callNext();
      if (e.code === 'Equal' || e.code === 'NumpadAdd') this.zoomAt(this.L.x + this.W / 2, this.L.y + this.H / 2, 1.25);
      if (e.code === 'Minus' || e.code === 'NumpadSubtract') this.zoomAt(this.L.x + this.W / 2, this.L.y + this.H / 2, 0.8);
      if (e.code === 'Digit0' || e.code === 'Home') { this.cam.zoomGoal = 1; this.cam.anchor = null; }
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
    const k = this.keys || {}, sp = 30 * real / this.cam.zoom;   // 방향키 이동
    if (k.ArrowLeft) this.cam.target.x -= sp;
    if (k.ArrowRight) this.cam.target.x += sp;
    if (k.ArrowUp) this.cam.target.z -= sp;
    if (k.ArrowDown) this.cam.target.z += sp;
    this.clampTarget();

    const dt = this.paused ? 0 : real * this.game.speed;
    this.city.update(real, this.time);
    this.game.update(dt, this.time);
    this.updateCamera(real);
    this.look.update(this.cam.dist);
    if (this.city.shadowDirty) { this.renderer.shadowMap.needsUpdate = true; this.city.shadowDirty = false; }
    this.look.render();
    this.autoQuality(real);
    this.ui.update(dt || 0);
  }
}

new App();
