// 전투 이펙트 (입자): 섬광·불덩이·연기·불꽃·파편·미사일 연기 꼬리·예광탄·그을음 자국
// 입자 수천 개를 "판 1장 × 인스턴스"로 한 번에 그림 → 그리기 2~3번으로 끝 (예전엔 연기 한 덩이마다 1번)
import * as THREE from 'three';

// ---- 입자 그림 (코드로 그린 2x2 아틀라스: 0 연기, 1 불, 2 둥근 빛, 3 섬광 별) ----
function atlas() {
  const S = 128, c = document.createElement('canvas'); c.width = c.height = S * 2;
  const g = c.getContext('2d');
  // 아틀라스 칸 위치: tile t → 캔버스 (col, 1-row). (텍스처는 위아래가 뒤집혀 올라감)
  const at = (t) => [(t % 2) * S, (1 - Math.floor(t / 2)) * S];
  const noise = (x, y, s) => { const n = Math.sin(x * 12.9898 * s + y * 78.233 * s) * 43758.5453; return n - Math.floor(n); };
  const smooth = (x, y, s) => {
    const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
    const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
    const a = noise(xi, yi, s), b = noise(xi + 1, yi, s), cc = noise(xi, yi + 1, s), d = noise(xi + 1, yi + 1, s);
    return a + (b - a) * u + (cc - a) * v + (a - b - cc + d) * u * v;
  };
  const fbm = (x, y, s) => { let v = 0, a = 0.5, f = 1; for (let i = 0; i < 5; i++) { v += a * smooth(x * f, y * f, s + i); f *= 2; a *= 0.5; } return v; };
  const blob = (t, hard, seed, rgbAt) => {
    const [ox, oy] = at(t), img = g.createImageData(S, S);
    for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
      const dx = (x + 0.5) / S * 2 - 1, dy = (y + 0.5) / S * 2 - 1, r = Math.hypot(dx, dy);
      const n = fbm(x / S * 4, y / S * 4, seed);
      const edge = Math.max(0, 1 - r / (0.55 + n * 0.45));
      const a = Math.pow(edge, hard) * (0.55 + n * 0.6);
      const [R, G, B] = rgbAt(n, r);
      const i = (y * S + x) * 4; img.data[i] = R; img.data[i + 1] = G; img.data[i + 2] = B; img.data[i + 3] = Math.min(255, a * 255);
    }
    g.putImageData(img, ox, oy);
  };
  // 연기: 작은 뭉게구름 여러 개를 겹쳐 그림. 위왼쪽이 밝고 아래가 어두워 입체감
  { const [ox, oy] = at(0), cx = ox + S / 2, cy = oy + S / 2;
    g.save(); g.beginPath(); g.rect(ox, oy, S, S); g.clip();
    const puffs = [];
    for (let i = 0; i < 16; i++) { const a = i * 2.39996, d = Math.sqrt(i / 16) * S * 0.24; puffs.push([cx + Math.cos(a) * d, cy + Math.sin(a) * d * 0.9, S * (0.2 - i * 0.004) + (i % 3) * 2]); }
    for (const [x, y, r] of puffs) {   // 아래 그림자 층
      const gr = g.createRadialGradient(x, y, 0, x, y, r); gr.addColorStop(0, 'rgba(120,120,120,0.9)'); gr.addColorStop(0.7, 'rgba(110,110,110,0.55)'); gr.addColorStop(1, 'rgba(100,100,100,0)');
      g.fillStyle = gr; g.beginPath(); g.arc(x, y, r, 0, 7); g.fill();
    }
    for (const [x, y, r] of puffs) {   // 위쪽 빛 받은 면
      const lx = x - r * 0.3, ly = y - r * 0.35, gr = g.createRadialGradient(lx, ly, 0, lx, ly, r * 0.8);
      gr.addColorStop(0, 'rgba(255,255,255,0.55)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = gr; g.beginPath(); g.arc(x, y, r, 0, 7); g.fill();
    }
    // 가장자리 부드럽게
    g.globalCompositeOperation = 'destination-in';
    const m = g.createRadialGradient(cx, cy, S * 0.3, cx, cy, S * 0.5); m.addColorStop(0, 'rgba(0,0,0,1)'); m.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = m; g.fillRect(ox, oy, S, S);
    g.restore(); }
  // 불: 거친 가장자리, 안쪽이 밝음
  blob(1, 0.9, 7, (n, r) => { const v = 255 * Math.min(1, 1.25 - r * 0.6 + n * 0.3); return [v, v * 0.92, v * 0.8]; });
  // 둥근 빛
  { const [ox, oy] = at(2), gr = g.createRadialGradient(ox + S / 2, oy + S / 2, 0, ox + S / 2, oy + S / 2, S / 2);
    gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.25, 'rgba(255,255,255,0.75)'); gr.addColorStop(0.6, 'rgba(255,255,255,0.18)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(ox, oy, S, S); }
  // 섬광 별 (총구·폭발 순간)
  { const [ox, oy] = at(3), cx = ox + S / 2, cy = oy + S / 2;
    g.save(); g.beginPath(); g.rect(ox, oy, S, S); g.clip();
    const gr = g.createRadialGradient(cx, cy, 0, cx, cy, S * 0.3); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr; g.fillRect(ox, oy, S, S);
    g.translate(cx, cy);
    for (let i = 0; i < 6; i++) {
      g.rotate(Math.PI / 3 + (i % 2) * 0.2);
      const L = S * (i % 2 ? 0.32 : 0.48), lg = g.createLinearGradient(0, 0, L, 0);
      lg.addColorStop(0, 'rgba(255,255,255,0.95)'); lg.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = lg; g.beginPath(); g.moveTo(0, -S * 0.035); g.lineTo(L, 0); g.lineTo(0, S * 0.035); g.fill();
    }
    g.restore(); }
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.NoColorSpace;
  return tex;
}

// 그을음 자국 (땅에 남는 검은 얼룩)
function scorchTex() {
  const S = 128, c = document.createElement('canvas'); c.width = c.height = S;
  const g = c.getContext('2d');
  for (let i = 0; i < 26; i++) {
    const a = Math.random() * Math.PI * 2, r = Math.random() * S * 0.22, x = S / 2 + Math.cos(a) * r, y = S / 2 + Math.sin(a) * r, R = S * (0.12 + Math.random() * 0.2);
    const gr = g.createRadialGradient(x, y, 0, x, y, R); gr.addColorStop(0, 'rgba(18,15,12,0.32)'); gr.addColorStop(1, 'rgba(18,15,12,0)');
    g.fillStyle = gr; g.fillRect(0, 0, S, S);
  }
  // 바깥으로 튄 줄무늬
  g.strokeStyle = 'rgba(20,16,12,0.25)';
  for (let i = 0; i < 18; i++) { const a = Math.random() * Math.PI * 2, r0 = S * 0.18, r1 = S * (0.32 + Math.random() * 0.16); g.lineWidth = 1 + Math.random() * 3; g.beginPath(); g.moveTo(S / 2 + Math.cos(a) * r0, S / 2 + Math.sin(a) * r0); g.lineTo(S / 2 + Math.cos(a) * r1, S / 2 + Math.sin(a) * r1); g.stroke(); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

const VS = `
attribute vec3 iPos; attribute vec4 iCol; attribute vec4 iMisc; attribute vec3 iVel;
varying vec2 vUv; varying vec4 vCol;
void main() {
  vec4 mv = modelViewMatrix * vec4(iPos, 1.0);
  vec2 c = position.xy; float size = iMisc.x;
  if (iMisc.w > 0.0) {                      // 속도 방향으로 늘린 판 (불꽃 줄기·예광탄)
    vec2 d = (modelViewMatrix * vec4(iVel, 0.0)).xy; float L = length(d);
    vec2 dir = L > 1e-4 ? d / L : vec2(1.0, 0.0), nrm = vec2(-dir.y, dir.x);
    mv.xy += dir * c.x * (size + L * iMisc.w) + nrm * c.y * size;
  } else {
    float cs = cos(iMisc.y), sn = sin(iMisc.y);
    mv.xy += vec2(c.x * cs - c.y * sn, c.x * sn + c.y * cs) * size;
  }
  gl_Position = projectionMatrix * mv;
  float t = iMisc.z;
  vUv = (uv + vec2(mod(t, 2.0), floor(t / 2.0))) * 0.5;
  vCol = iCol;
}`;
const FS = `
uniform sampler2D map; varying vec2 vUv; varying vec4 vCol;
void main() {
  vec4 t = texture2D(map, vUv);
  gl_FragColor = vec4(vCol.rgb * t.rgb, vCol.a * t.a);
  #include <colorspace_fragment>
}`;

// 입자 한 층 (additive=빛나는 것, 아니면 연기·파편)
class Layer {
  constructor(max, tex, additive) {
    this.max = max; this.n = 0;
    const q = new THREE.PlaneGeometry(1, 1), g = new THREE.InstancedBufferGeometry();
    g.index = q.index; g.setAttribute('position', q.attributes.position); g.setAttribute('uv', q.attributes.uv);
    const A = (k, s) => { const a = new THREE.InstancedBufferAttribute(new Float32Array(max * s), s); a.setUsage(THREE.DynamicDrawUsage); g.setAttribute(k, a); return a; };
    this.aPos = A('iPos', 3); this.aCol = A('iCol', 4); this.aMisc = A('iMisc', 4); this.aVel = A('iVel', 3);
    g.instanceCount = 0;
    this.mat = new THREE.ShaderMaterial({
      uniforms: { map: { value: tex } }, vertexShader: VS, fragmentShader: FS,
      transparent: true, depthWrite: false, blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending
    });
    this.mesh = new THREE.Mesh(g, this.mat); this.mesh.frustumCulled = false; this.mesh.renderOrder = additive ? 3 : 2;
    this.geo = g;
    // CPU 쪽 입자 상태
    this.P = [];
  }
  add(p) { if (this.P.length >= this.max) return false; this.P.push(p); return true; }
  update(dt) {
    const P = this.P; let w = 0;
    const pos = this.aPos.array, col = this.aCol.array, misc = this.aMisc.array, vel = this.aVel.array;
    for (let i = 0; i < P.length; i++) {
      const p = P[i]; p.age += dt;
      if (p.age >= p.life) continue;
      const k = p.age / p.life;
      const dr = Math.exp(-p.drag * dt);
      p.vx *= dr; p.vy = p.vy * dr - p.grav * dt; p.vz *= dr;
      p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
      if (p.y < p.floor) { p.y = p.floor; p.vy = -p.vy * 0.3; p.vx *= 0.6; p.vz *= 0.6; }
      p.rot += p.rv * dt;
      // 크기: 처음엔 빨리 커지고 천천히 (ease-out)
      const ke = 1 - (1 - k) * (1 - k);
      const s = p.s0 + (p.s1 - p.s0) * ke;
      // 색: c0 → c1 → c2(있으면) / 투명도: 처음 fadeIn 후 끝으로 갈수록
      let r, gg, b;
      if (p.c2 && k > 0.5) { const m = (k - 0.5) * 2; r = p.c1[0] + (p.c2[0] - p.c1[0]) * m; gg = p.c1[1] + (p.c2[1] - p.c1[1]) * m; b = p.c1[2] + (p.c2[2] - p.c1[2]) * m; }
      else { const m = p.c2 ? k * 2 : k; r = p.c0[0] + (p.c1[0] - p.c0[0]) * m; gg = p.c0[1] + (p.c1[1] - p.c0[1]) * m; b = p.c0[2] + (p.c1[2] - p.c0[2]) * m; }
      const a = p.a * Math.min(1, k / p.fin) * Math.pow(1 - k, p.fout);
      pos[w * 3] = p.x; pos[w * 3 + 1] = p.y; pos[w * 3 + 2] = p.z;
      col[w * 4] = r; col[w * 4 + 1] = gg; col[w * 4 + 2] = b; col[w * 4 + 3] = a;
      misc[w * 4] = s; misc[w * 4 + 1] = p.rot; misc[w * 4 + 2] = p.tile; misc[w * 4 + 3] = p.stretch;
      vel[w * 3] = p.vx; vel[w * 3 + 1] = p.vy; vel[w * 3 + 2] = p.vz;
      P[w++] = p;
    }
    P.length = w;
    this.geo.instanceCount = w;
    if (w) for (const a of [this.aPos, this.aCol, this.aMisc, this.aVel]) { a.clearUpdateRanges(); a.addUpdateRange(0, w * a.itemSize); a.needsUpdate = true; }
  }
  clear() { this.P.length = 0; this.geo.instanceCount = 0; }
}

const C = (hex, k = 1) => { const c = new THREE.Color(hex); return [c.r * k, c.g * k, c.b * k]; };
const R = (a, b) => a + Math.random() * (b - a);

export class VFX {
  constructor(scene, q = 1) {
    this.q = q;   // 품질(입자 수 배율): 휴대폰·낮음은 줄임
    const tex = atlas();
    this.glow = new Layer(2600, tex, true);
    this.smoke = new Layer(2600, tex, false);
    this.group = new THREE.Group();
    this.group.add(this.smoke.mesh, this.glow.mesh);
    // 그을음 자국
    this.decalMax = 80;
    this.decal = new THREE.InstancedMesh(new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ map: scorchTex(), transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }), this.decalMax);
    this.decal.count = 0; this.decal.renderOrder = 1; this.decal.frustumCulled = false;
    this.decals = [];
    this.group.add(this.decal);
    scene.add(this.group);
    this._m = new THREE.Matrix4(); this._q = new THREE.Quaternion(); this._s = new THREE.Vector3(); this._p = new THREE.Vector3();
  }
  setQuality(q) { this.q = q; }
  clear() { this.glow.clear(); this.smoke.clear(); this.decals.length = 0; this.decal.count = 0; }
  get load() { return (this.glow.P.length + this.smoke.P.length) / 5200; }

  // 입자 하나. o: x,y,z, v[3], life, s0,s1, c0,c1,c2, a, tile, drag, grav, stretch, fin, fout
  emit(layer, o) {
    return layer.add({
      x: o.x, y: o.y, z: o.z, vx: o.v ? o.v[0] : 0, vy: o.v ? o.v[1] : 0, vz: o.v ? o.v[2] : 0,
      age: 0, life: o.life || 1, s0: o.s0 ?? 0.2, s1: o.s1 ?? o.s0 ?? 0.2,
      c0: o.c0 || [1, 1, 1], c1: o.c1 || o.c0 || [1, 1, 1], c2: o.c2 || null, a: o.a ?? 1,
      tile: o.tile ?? 0, rot: o.rot ?? Math.random() * 6.28, rv: o.rv ?? R(-1, 1),
      drag: o.drag ?? 1, grav: o.grav ?? 0, stretch: o.stretch ?? 0, floor: o.floor ?? -10,
      fin: o.fin ?? 0.05, fout: o.fout ?? 1
    });
  }
  n(k) { return Math.max(1, Math.round(k * this.q)); }

  update(dt) {
    this.glow.update(dt); this.smoke.update(dt);
    // 그을음: 천천히 흐려짐(크기 줄이며 사라짐)
    let w = 0;
    for (const d of this.decals) {
      d.t += dt; if (d.t >= d.life) continue;
      const k = d.t / d.life, s = d.s * (k > 0.75 ? 1 - (k - 0.75) * 4 : Math.min(1, d.t * 8));
      this._q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), d.r); this._s.set(s, 1, s); this._p.set(d.x, 0.035 + w * 0.0002, d.z);
      this._m.compose(this._p, this._q, this._s); this.decal.setMatrixAt(w, this._m);
      this.decals[w++] = d;
    }
    this.decals.length = w; this.decal.count = w;
    if (w) this.decal.instanceMatrix.needsUpdate = true;
  }

  scorch(x, z, r) {
    if (this.decals.length >= this.decalMax) this.decals.shift();
    this.decals.push({ x, z, s: r, r: Math.random() * 6.28, t: 0, life: 14 });
  }

  // ---- 조합 이펙트 ----
  // 폭발. r = 반경, o.air(공중), o.ground(그을음), o.big(대형)
  explosion(p, r, o = {}) {
    const { x, y, z } = p, big = r >= 1.2;
    // 1) 순간 섬광
    this.emit(this.glow, { x, y: y + 0.15, z, life: 0.1, s0: r * 1.4, s1: r * 2.2, c0: C(0xfff3d0, 1.6), a: 0.8, tile: 3, fout: 1.5 });
    this.emit(this.glow, { x, y: y + 0.1, z, life: 0.22, s0: r * 2, s1: r * 3, c0: C(0xff9a40, 1), a: 0.4, tile: 2 });
    // 2) 불덩이: 노랑 → 주황 → 검붉게
    for (let i = 0; i < this.n(4 + r * 6); i++) {
      const a = Math.random() * 6.28, sp = R(0.6, 2.2) * r, up = R(0.4, 1.4) * r;
      this.emit(this.glow, { x: x + R(-0.15, 0.15) * r, y: y + R(0, 0.25) * r, z: z + R(-0.15, 0.15) * r, v: [Math.cos(a) * sp, up, Math.sin(a) * sp],
        life: R(0.35, 0.65) * (big ? 1.4 : 1), s0: r * R(0.35, 0.6), s1: r * R(0.8, 1.2), c0: C(0xffd27a, 1.3), c1: C(0xff6a10, 1.0), c2: C(0x501404, 0.5), a: 0.55, tile: 1, drag: 3.2, fout: 1.2 });
    }
    // 3) 연기: 진한 검회색이 피어오르며 커짐
    for (let i = 0; i < this.n(3 + r * 5); i++) {
      const a = Math.random() * 6.28, sp = R(0.3, 1.2) * r;
      this.emit(this.smoke, { x: x + R(-0.2, 0.2) * r, y: y + R(0.1, 0.4) * r, z: z + R(-0.2, 0.2) * r, v: [Math.cos(a) * sp, R(0.8, 1.6) * (big ? 1.6 : 1), Math.sin(a) * sp],
        life: R(1.6, 2.8) * (big ? 1.5 : 1), s0: r * 0.6, s1: r * R(1.4, 2.0), c0: C(0x2a2420), c1: C(0x5a554f), c2: C(0xa09b95), a: 0.9, tile: 0, drag: 1.8, fin: 0.06, fout: 1.6, rv: R(-0.4, 0.4) });
    }
    // 4) 불꽃 줄기 (빠르게 튀며 떨어짐)
    for (let i = 0; i < this.n(5 + r * 10); i++) {
      const a = Math.random() * 6.28, el = R(0.2, 1.2), sp = R(3, 8) * Math.sqrt(r);
      this.emit(this.glow, { x, y: y + 0.1, z, v: [Math.cos(a) * Math.cos(el) * sp, Math.sin(el) * sp, Math.sin(a) * Math.cos(el) * sp],
        life: R(0.3, 0.7), s0: 0.03, s1: 0.015, c0: C(0xffe2a0, 2), c1: C(0xff7a20, 1.4), tile: 2, drag: 1.2, grav: 9, stretch: 0.05, floor: 0.02 });
    }
    // 5) 파편 (어두운 조각, 땅에 튐)
    if (!o.air || big) for (let i = 0; i < this.n(3 + r * 5); i++) {
      const a = Math.random() * 6.28, sp = R(1.5, 4) * Math.sqrt(r);
      this.emit(this.smoke, { x, y: y + 0.15, z, v: [Math.cos(a) * sp, R(2, 5) * Math.sqrt(r), Math.sin(a) * sp], life: R(0.8, 1.4), s0: R(0.04, 0.08) * (big ? 1.6 : 1), c0: C(0x1e1b18), tile: 2, grav: 12, drag: 0.4, floor: 0.03, fout: 0.3, rv: R(-8, 8), a: 1 });
    }
    // 6) 땅 쪽: 먼지 링 + 그을음
    if (!o.air && y < 0.8) {
      for (let i = 0; i < this.n(6 + r * 4); i++) {
        const a = i / (6 + r * 4) * 6.28 + R(-0.2, 0.2), sp = R(2, 3.5) * r;
        this.emit(this.smoke, { x, y: 0.12, z, v: [Math.cos(a) * sp, R(0.05, 0.3), Math.sin(a) * sp], life: R(0.9, 1.5), s0: r * 0.25, s1: r * 0.8, c0: C(0x8a7f70), c1: C(0xb0a898), a: 0.5, tile: 0, drag: 3.5, fin: 0.1 });
      }
      this.scorch(x, z, r * 1.9);
    }
    if (big) {   // 대형: 버섯 모양 연기 기둥 + 오래 남는 불
      for (let i = 0; i < this.n(10); i++) this.emit(this.smoke, { x: x + R(-0.3, 0.3) * r, y: y + 0.3, z: z + R(-0.3, 0.3) * r, v: [R(-0.3, 0.3), R(1.6, 3.2), R(-0.3, 0.3)], life: R(2.5, 4), s0: r * 0.5, s1: r * R(1.6, 2.4), c0: C(0x2c2622), c1: C(0x4a443f), c2: C(0x7c7670), a: 0.8, tile: 0, drag: 1.1, fin: 0.1, rv: R(-0.3, 0.3) });
      for (let i = 0; i < this.n(6); i++) this.emit(this.glow, { x: x + R(-0.4, 0.4) * r, y: y + 0.2, z: z + R(-0.4, 0.4) * r, v: [0, R(1, 2.2), 0], life: R(0.8, 1.3), s0: r * 0.6, s1: r * 0.9, c0: C(0xffc070, 1.5), c1: C(0xff5a10, 1), c2: C(0x401008, 0.4), tile: 1, drag: 1.4 });
    }
  }

  // 총구 섬광. big: 포
  muzzle(p, dir, big = false) {
    const s = big ? 0.55 : 0.22;
    this.emit(this.glow, { x: p.x, y: p.y, z: p.z, life: big ? 0.09 : 0.05, s0: s, s1: s * 1.3, c0: C(0xfff2c0, 2.2), tile: 3 });
    if (dir) this.emit(this.glow, { x: p.x, y: p.y, z: p.z, v: [dir.x * 6, dir.y * 6, dir.z * 6], life: big ? 0.08 : 0.05, s0: s * 0.35, c0: C(0xffc060, 2), tile: 2, stretch: 0.03, drag: 8 });
    if (big) for (let i = 0; i < this.n(5); i++) this.emit(this.smoke, { x: p.x, y: p.y, z: p.z, v: dir ? [dir.x * R(0.8, 2) + R(-0.3, 0.3), dir.y * R(0.8, 2) + R(0.1, 0.4), dir.z * R(0.8, 2) + R(-0.3, 0.3)] : [0, 0.4, 0], life: R(0.9, 1.6), s0: 0.12, s1: R(0.45, 0.7), c0: C(0x9a948c), c1: C(0xc4c0ba), a: 0.55, tile: 0, drag: 2.2, fin: 0.08 });
    else if (Math.random() < 0.3) this.emit(this.smoke, { x: p.x, y: p.y, z: p.z, v: [0, 0.3, 0], life: 0.6, s0: 0.05, s1: 0.18, c0: C(0xb8b4ae), a: 0.35, tile: 0 });
  }

  // 미사일·로켓 꼬리 (매 프레임): 불꽃 + 남는 흰 연기
  trail(p, prev, heavy = false, dt = 1 / 60) {
    const k = heavy ? 1.8 : 1;
    this.emit(this.glow, { x: p.x, y: p.y, z: p.z, life: 0.06, s0: 0.14 * k, c0: C(0xffd890, 2), tile: 2 });
    const steps = Math.max(1, Math.min(heavy ? 10 : 5, Math.ceil(p.distanceTo(prev) / 0.12)));
    for (let i = 0; i < steps; i++) {
      if (Math.random() > 0.9 * this.q + 0.1) continue;
      const t = i / steps, x = prev.x + (p.x - prev.x) * t, y = prev.y + (p.y - prev.y) * t, z = prev.z + (p.z - prev.z) * t;
      this.emit(this.smoke, { x, y, z, v: [R(-0.08, 0.08), R(0.05, 0.2), R(-0.08, 0.08)], life: R(1.2, 2) * (heavy ? 1.6 : 1), s0: 0.12 * k, s1: R(0.4, 0.6) * k, c0: C(0xe4e2de), c1: C(0xc8c6c2), a: 0.5, tile: 0, drag: 1.5, fin: 0.04, rv: R(-0.5, 0.5) });
    }
  }

  // 예광탄: 총구 → 목표로 날아가는 밝은 줄
  tracer(a, b, color = 0xffd890) {
    const d = b.clone().sub(a), L = d.length(), sp = 60, life = Math.max(0.03, L / sp);
    d.multiplyScalar(sp / Math.max(L, 1e-3));
    this.emit(this.glow, { x: a.x, y: a.y, z: a.z, v: [d.x, d.y, d.z], life, s0: 0.035, c0: C(color, 2.2), tile: 2, stretch: 0.012, drag: 0, fin: 0.01, fout: 0.2 });
  }
  // 총알이 맞은 자리: 작은 불꽃·먼지
  impact(p, air) {
    for (let i = 0; i < this.n(3); i++) { const a = Math.random() * 6.28; this.emit(this.glow, { x: p.x, y: p.y, z: p.z, v: [Math.cos(a) * R(1, 3), R(0.5, 2.5), Math.sin(a) * R(1, 3)], life: R(0.12, 0.25), s0: 0.025, c0: C(0xffe0a0, 2), tile: 2, stretch: 0.04, grav: 8, drag: 1 }); }
    if (!air && Math.random() < 0.5) this.emit(this.smoke, { x: p.x, y: 0.1, z: p.z, v: [0, 0.25, 0], life: 0.7, s0: 0.06, s1: 0.22, c0: C(0x9c9284), a: 0.4, tile: 0 });
  }

  // 불타는 잔해 (매 프레임 조금씩)
  burn(p, s, dt, k = 1) {
    if (Math.random() < dt * 14 * k * this.q) this.emit(this.glow, { x: p.x + R(-0.15, 0.15) * s, y: p.y + 0.05, z: p.z + R(-0.15, 0.15) * s, v: [R(-0.1, 0.1), R(0.5, 1.1), R(-0.1, 0.1)], life: R(0.35, 0.6), s0: 0.16 * s, s1: 0.05 * s, c0: C(0xffd070, 1.7), c1: C(0xff6010, 1.2), tile: 1, drag: 1 });
    if (Math.random() < dt * 6 * k * this.q) this.emit(this.smoke, { x: p.x + R(-0.1, 0.1) * s, y: p.y + 0.25, z: p.z + R(-0.1, 0.1) * s, v: [R(-0.05, 0.15), R(0.6, 1.0), R(-0.1, 0.05)], life: R(2, 3.2), s0: 0.15 * s, s1: R(0.7, 1.1) * s, c0: C(0x2a2522), c1: C(0x55504b), c2: C(0x7c7873), a: 0.6, tile: 0, drag: 0.6, fin: 0.1, rv: R(-0.3, 0.3) });
  }

  // 떨어지는 공중 적: 불붙은 채 연기를 끌며 추락
  fallTrail(p, dt) {
    this.burn(p, 0.9, dt, 2);
  }

  // 빛나는 둥근 파동 (EMP 등)
  pulse(p, r, color) {
    this.emit(this.glow, { x: p.x, y: p.y, z: p.z, life: 0.5, s0: r * 0.5, s1: r * 2.4, c0: C(color, 1.6), tile: 2, fout: 1.5 });
  }
}
