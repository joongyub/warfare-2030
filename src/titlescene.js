// 처음 화면 배경: 해 질 녘 불타는 도시를 배경으로 한 현대전 전투 장면 (움직이는 3D)
// 아군 자주포·기동전투차·패트리엇이 전진하는 적 전차 행렬과 공격헬기를 맞받아 싸움
import * as THREE from 'three';
import { getTower, getEnemy } from './models.js';
import { glassFacadeHD } from './textures_bldg.js';
import { VFX } from './vfx.js';

const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const R = (a, b) => a + Math.random() * (b - a);

function skyDome() {
  const m = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { sun: { value: V(-0.35, 0.06, -1).normalize() } },
    vertexShader: 'varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: `uniform vec3 sun; varying vec3 vD;
      void main(){
        float h = clamp(vD.y, -0.1, 1.0);
        vec3 top = vec3(0.10, 0.09, 0.13), mid = vec3(0.55, 0.24, 0.12), hor = vec3(1.0, 0.55, 0.24);
        vec3 c = mix(hor, mid, smoothstep(0.0, 0.18, h)); c = mix(c, top, smoothstep(0.15, 0.6, h));
        float s = max(dot(vD, sun), 0.0);
        c += vec3(1.0, 0.6, 0.3) * pow(s, 60.0) * 2.5 + vec3(1.0, 0.45, 0.2) * pow(s, 6.0) * 0.45;
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`
  });
  return new THREE.Mesh(new THREE.SphereGeometry(400, 32, 16), m);
}

function groundTex() {
  const S = 512, c = document.createElement('canvas'); c.width = c.height = S;
  const g = c.getContext('2d'); g.fillStyle = '#2e2a25'; g.fillRect(0, 0, S, S);
  for (let i = 0; i < 9000; i++) { const v = 30 + Math.random() * 50; g.fillStyle = `rgba(${v + 10},${v},${v - 8},${Math.random() * 0.5})`; g.fillRect(Math.random() * S, Math.random() * S, 1 + Math.random() * 4, 1 + Math.random() * 3); }
  for (let i = 0; i < 30; i++) { const x = Math.random() * S, y = Math.random() * S, r = 10 + Math.random() * 40, gr = g.createRadialGradient(x, y, 0, x, y, r); gr.addColorStop(0, 'rgba(12,10,8,0.6)'); gr.addColorStop(1, 'rgba(12,10,8,0)'); g.fillStyle = gr; g.fillRect(x - r, y - r, r * 2, r * 2); }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(42, 42); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  return t;
}

export class TitleScene {
  constructor(renderer) {
    this.r = renderer;
    const s = this.scene = new THREE.Scene();
    s.fog = new THREE.Fog(0x5a3424, 40, 420);
    s.add(skyDome());
    this.cam = new THREE.PerspectiveCamera(38, 16 / 9, 0.1, 900);
    // 빛: 낮게 깔린 노을 역광 + 어두운 하늘빛 + 불빛
    const sun = new THREE.DirectionalLight(0xffa060, 2.6); sun.position.set(-30, 8, -80); s.add(sun);
    s.add(new THREE.HemisphereLight(0x6a5a70, 0x2a1e16, 0.9));
    const front = new THREE.DirectionalLight(0xffc89a, 0.7); front.position.set(20, 15, 30); s.add(front);
    this.fireL = [];
    for (const [x, z] of [[2, -14], [-6, -26], [10, -30]]) { const l = new THREE.PointLight(0xff7a2a, 30, 22, 1.5); l.position.set(x, 1.5, z); s.add(l); this.fireL.push(l); }
    // 땅 + 도로
    const gnd = new THREE.Mesh(new THREE.PlaneGeometry(1200, 1200), new THREE.MeshStandardMaterial({ map: groundTex(), roughness: 1 }));
    gnd.rotation.x = -Math.PI / 2; s.add(gnd);
    // 잔해 더미 (부서진 콘크리트 조각)
    const rub = new THREE.InstancedMesh(new THREE.DodecahedronGeometry(0.5, 0), new THREE.MeshStandardMaterial({ color: 0x6a625a, roughness: 1, flatShading: true }), 260);
    const M = new THREE.Matrix4(), Q = new THREE.Quaternion(), E = new THREE.Euler();
    for (let i = 0; i < 260; i++) {
      const cx = i < 120 ? R(-30, 30) : R(-4, 30), cz = i < 120 ? R(-40, 10) : R(-6, 14), sc = R(0.1, i % 12 === 0 ? 0.8 : 0.35);
      Q.setFromEuler(E.set(R(0, 3), R(0, 3), R(0, 3))); M.compose(V(cx, sc * 0.2, cz), Q, V(sc * R(0.8, 1.6), sc * R(0.5, 1), sc)); rub.setMatrixAt(i, M);
    }
    s.add(rub);
    // 멀리 불타는 도시 실루엣
    const glass = [0, 1, 2].map((v) => { const T = glassFacadeHD(v); return new THREE.MeshStandardMaterial({ map: T.map, emissiveMap: T.emissiveMap, emissive: 0xffffff, emissiveIntensity: 1.2, color: 0x4a4650, roughness: 0.5, metalness: 0.3 }); });
    const dark = new THREE.MeshStandardMaterial({ color: 0x1e1a20, roughness: 0.9 });
    this.burnPts = [];
    for (let i = 0; i < 120; i++) {
      const x = R(-260, 240), z = R(-340, -170), w = R(8, 20), d = R(8, 16), h = R(16, 80);
      const g = new THREE.BoxGeometry(w, h, d); g.translate(0, h / 2, 0);
      const uv = g.attributes.uv; for (let k = 0; k < uv.count; k++) uv.setXY(k, uv.getX(k) * w / 6, uv.getY(k) * h / 6);
      const b = new THREE.Mesh(g, Math.random() < 0.75 ? glass[i % 3] : dark);
      b.position.set(x, 0, z); b.rotation.y = R(-0.3, 0.3); s.add(b);
      if (Math.random() < 0.12 && this.burnPts.length < 8) this.burnPts.push(V(x, h * R(0.4, 1), z + d / 2));
      if (Math.random() < 0.12) { b.rotation.z = R(-0.12, 0.12); }   // 무너져 기운 건물
    }
    // 유닛 배치
    const put = (m, x, z, ry, sc = 1) => { m.root.position.set(x, 0, z); m.root.rotation.y = ry; m.root.scale.setScalar(sc); s.add(m.root); return m; };
    this.k9 = put(getTower('k9'), 9, 3, -2.6, 2.6);
    this.mgs = put(getTower('type16'), 0.5, -2.5, -2.75, 2.4);
    this.pat = put(getTower('patriot'), 17, -5, -2.3, 2.4);
    this.gun = put(getTower('browning'), 5, 7.5, -2.9, 2.6);
    for (const m of [this.k9, this.mgs, this.pat, this.gun]) if (m.pitch) m.pitch.rotation.x = -0.12;
    this.enemies = [];
    for (let i = 0; i < 7; i++) {
      const e = put(getEnemy(i % 3 ? 'apc' : 'tank'), -12 + i * 3.4 + R(-1, 1), -20 - i * 3.6, 0.35 + R(-0.1, 0.1), 2.3);
      e.base = e.root.position.clone(); this.enemies.push(e);
    }
    this.helis = [];
    for (let i = 0; i < 3; i++) { const h = put(getEnemy('heli'), -18 + i * 13, -30 - i * 8, 0.4, 2.2); h.root.position.y = 0; if (h.body) h.body.position.y = 3 + i * 1.2; h.ph = Math.random() * 6; this.helis.push(h); }
    this.spins = [];
    for (const m of [...this.enemies, ...this.helis, this.k9, this.mgs, this.pat, this.gun]) if (m.spin) this.spins.push(...m.spin);
    // 불타는 잔해 (전장)
    this.wrecks = [V(-5, 0.3, -10), V(6, 0.3, -15), V(-12, 0.3, -16), V(12, 0.3, -22), V(20, 0.3, -12)];
    const wm = new THREE.MeshStandardMaterial({ color: 0x141210, roughness: 1 });
    for (const p of this.wrecks) {   // 격파된 적 전차 (검게 탄 채 기울어짐)
      const w = getEnemy('tank'); w.root.traverse((o) => { if (o.isMesh) o.material = wm; });
      w.root.position.copy(p).setY(0); w.root.rotation.set(R(-0.08, 0.08), R(0, 6), R(-0.12, 0.12)); w.root.scale.setScalar(2.2); s.add(w.root);
    }
    this.vfx = new VFX(s, 1);
    for (let i = 0; i < 26; i++) this.vfx.decals.push({ x: R(-25, 25), z: R(-30, 10), s: R(2, 6), r: R(0, 6), t: 0, life: 1e9 });   // 포탄 구덩이
    this.t = 0; this.next = { boom: 0.5, shell: 1.2, missile: 2.5, tracer: 0 };
    // 처음부터 연기가 자욱하도록 미리 돌려 둠
    for (let i = 0; i < 300; i++) this.update(1 / 30, true);
  }

  resize(w, h) { this.cam.aspect = w / h; this.cam.updateProjectionMatrix(); }

  update(dt, warm = false) {
    this.t += dt; const t = this.t, v = this.vfx;
    // 카메라: 낮은 높이에서 천천히 옆으로 흐름 (영화 같은 느낌)
    const a = Math.sin(t * 0.05) * 0.12;
    this.cam.position.set(19 + Math.sin(a) * 4, 2.2 + Math.sin(t * 0.13) * 0.15, 15 + a * 3);
    this.cam.lookAt(1, 4.2, -18);
    for (const [o, ax, sp] of this.spins) o.rotation[ax] += sp * dt;
    for (const e of this.enemies) { e.root.position.z = e.base.z + ((t * 0.6) % 6); }
    for (const h of this.helis) { h.root.position.x += Math.sin(t * 0.3 + h.ph) * dt * 0.8; if (h.body) h.body.position.y += Math.sin(t * 0.8 + h.ph) * dt * 0.3; }
    // 연기 기둥·불
    for (const p of this.wrecks) v.burn(p, 2.4, dt, 1.4);
    for (const p of this.burnPts) {
      if (Math.random() < dt * 9) v.emit(v.smoke, { x: p.x + R(-1, 1), y: p.y, z: p.z, v: [R(1.5, 3), R(5, 8), R(-0.3, 0.3)], life: R(9, 13), s0: 3, s1: R(30, 45), c0: [0.03, 0.025, 0.02], c1: [0.07, 0.06, 0.055], c2: [0.13, 0.11, 0.1], a: 0.85, tile: 0, drag: 0.3, fin: 0.05, rv: R(-0.2, 0.2) });
      if (Math.random() < dt * 8) v.emit(v.glow, { x: p.x + R(-1.5, 1.5), y: p.y, z: p.z, v: [0, R(1, 2.5), 0], life: R(0.5, 0.9), s0: R(2, 3.5), s1: 1, c0: [2, 1.1, 0.4], c1: [1.2, 0.35, 0.08], tile: 1, a: 0.8 });
    }
    // 떠다니는 불티
    if (Math.random() < dt * 25) v.emit(v.glow, { x: R(-15, 20), y: R(0, 3), z: R(-20, 8), v: [R(0.2, 0.8), R(0.4, 1.2), R(-0.2, 0.2)], life: R(2, 4), s0: 0.06, s1: 0.03, c0: [2.2, 1.2, 0.4], c1: [1.4, 0.4, 0.1], tile: 2, drag: 0.2, fout: 0.5 });
    if (warm) { v.update(dt); return; }
    // 주기적 사격·폭발
    const N = this.next;
    if (t > N.boom) {   // 적 행렬 근처 폭발
      const e = this.enemies[Math.floor(Math.random() * this.enemies.length)], p = e.root.position;
      v.explosion(V(p.x + R(-3, 3), 0.4, p.z + R(-2, 2)), R(1.6, 3.2), {});
      N.boom = t + R(0.7, 1.8);
    }
    if (t > N.shell) {   // K9·기동전투차 포격
      for (const m of [this.k9, this.mgs]) if (m.muzzle && Math.random() < 0.7) { m.root.updateMatrixWorld(true); const mz = m.muzzle.getWorldPosition(V()); v.muzzle(mz, V(-0.5, 0.2, -1).normalize(), true); }
      N.shell = t + R(1.6, 2.8);
    }
    if (t > N.missile && this.pat.muzzle) {   // 패트리엇 발사 → 헬기
      this.pat.root.updateMatrixWorld(true);
      const from = this.pat.muzzle.getWorldPosition(V()), h = this.helis[Math.floor(Math.random() * this.helis.length)];
      h.root.updateMatrixWorld(true);
      const to = (h.body || h.root).getWorldPosition(V());
      this.missiles = this.missiles || [];
      this.missiles.push({ p: from.clone(), prev: from.clone(), from, to, k: 0 });
      v.muzzle(from, V(0, 1, 0), true);
      N.missile = t + R(2.5, 4.5);
    }
    if (t > N.tracer && this.gun.muzzle) {
      this.gun.root.updateMatrixWorld(true);
      const mz = this.gun.muzzle.getWorldPosition(V()), h = this.helis[0];
      const to = (h.body || h.root).getWorldPosition(V()).add(V(R(-2, 2), R(-1, 1), R(-2, 2)));
      v.tracer(mz, to, 0xffc870); v.muzzle(mz, to.clone().sub(mz).normalize(), false);
      N.tracer = t + (Math.sin(t * 0.7) > 0 ? 0.09 : 0.6);
    }
    for (const m of this.missiles || []) {
      m.k += dt * 0.6; m.prev.copy(m.p);
      m.p.lerpVectors(m.from, m.to, m.k); m.p.y += Math.sin(m.k * Math.PI) * 6;
      v.trail(m.p, m.prev, true, dt);
      if (m.k >= 1) { v.explosion(m.to.clone(), 1.8, { air: true }); m.done = true; }
    }
    if (this.missiles) this.missiles = this.missiles.filter((m) => !m.done);
    for (const l of this.fireL) l.intensity = 24 + Math.sin(t * 13 + l.position.x) * 6 + Math.random() * 6;
    v.update(dt);
  }

  render() { this.r.render(this.scene, this.cam); }
}
