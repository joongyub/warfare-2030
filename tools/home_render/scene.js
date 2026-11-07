// 공개판 홈 배경 그림 만들기 (3D로 그려서 사진 한 장으로 저장)
//   장면: 노을 진 불타는 도시 앞 부카니스탄 열병식. 단상 전차 위 '총통'(게임 속 최종 보스와 같은 모델),
//         가상 국기, 줄지어 가는 전차·장갑차·보병, 하늘의 헬기. 실존 인물·실제 국기 없음
//   실행: node tools/home_render/run.js  →  img/home_bg_public.jpg · img/portrait_leader.png
import * as THREE from 'three';
import { getEnemy } from '../../src/models.js';
import { glassFacadeHD } from '../../src/textures_bldg.js';
import { VFX } from '../../src/vfx.js';

const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
let seed = 7; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
const R = (a, b) => a + rnd() * (b - a);

// 부카니스탄 국기 (가상): 진홍 바탕 + 깃대 쪽 검은 삼각형 + 금색 톱니바퀴 속 별
export function flagCanvas(W = 1024, H = 640) {
  const c = document.createElement('canvas'); c.width = W; c.height = H; const g = c.getContext('2d');
  g.fillStyle = '#a8141c'; g.fillRect(0, 0, W, H);
  g.fillStyle = '#d8aa45'; g.fillRect(0, H * 0.78, W, H * 0.05);
  g.fillStyle = '#141414'; g.beginPath(); g.moveTo(0, 0); g.lineTo(W * 0.36, H / 2); g.lineTo(0, H); g.closePath(); g.fill();
  const cx = W * 0.6, cy = H * 0.42, r = H * 0.24;
  g.fillStyle = '#e2b54c';
  g.beginPath(); for (let i = 0; i < 32; i++) { const a = (i / 32) * Math.PI * 2, rr = i % 2 ? r : r * 1.13; g.lineTo(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr); } g.closePath(); g.fill();
  g.fillStyle = '#a8141c'; g.beginPath(); g.arc(cx, cy, r * 0.8, 0, 7); g.fill();
  g.fillStyle = '#e2b54c'; g.beginPath();
  for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + (i / 10) * Math.PI * 2, rr = i % 2 ? r * 0.28 : r * 0.68; g.lineTo(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr); }
  g.closePath(); g.fill();
  // 천 질감
  for (let i = 0; i < 4000; i++) { g.fillStyle = `rgba(0,0,0,${Math.random() * 0.05})`; g.fillRect(Math.random() * W, Math.random() * H, 2, 1); }
  return c;
}

function skyDome() {
  const m = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { sun: { value: V(0.55, 0.05, -1).normalize() } },
    vertexShader: 'varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: `uniform vec3 sun; varying vec3 vD;
      void main(){
        float h = clamp(vD.y, -0.1, 1.0);
        vec3 top = vec3(0.07, 0.06, 0.10), mid = vec3(0.50, 0.17, 0.10), hor = vec3(1.0, 0.50, 0.20);
        vec3 c = mix(hor, mid, smoothstep(0.0, 0.16, h)); c = mix(c, top, smoothstep(0.14, 0.55, h));
        float s = max(dot(vD, sun), 0.0);
        c += vec3(1.0, 0.6, 0.3) * pow(s, 80.0) * 2.5 + vec3(1.0, 0.45, 0.2) * pow(s, 5.0) * 0.5;
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`
  });
  return new THREE.Mesh(new THREE.SphereGeometry(500, 32, 16), m);
}

function groundTex() {
  const S = 512, c = document.createElement('canvas'); c.width = c.height = S;
  const g = c.getContext('2d'); g.fillStyle = '#26221f'; g.fillRect(0, 0, S, S);
  for (let i = 0; i < 9000; i++) { const v = 25 + Math.random() * 40; g.fillStyle = `rgba(${v + 10},${v},${v - 8},${Math.random() * 0.5})`; g.fillRect(Math.random() * S, Math.random() * S, 1 + Math.random() * 4, 1 + Math.random() * 3); }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(60, 60); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  return t;
}

// 젖은 열병식 광장 (불빛이 비침)
function plaza() {
  const m = new THREE.MeshStandardMaterial({ map: groundTex(), roughness: 0.55, metalness: 0.25, color: 0x8a8580 });
  const p = new THREE.Mesh(new THREE.PlaneGeometry(1200, 1200), m); p.rotation.x = -Math.PI / 2; return p;
}

// 이동식 미사일 발사차 (가상 모델): 8륜 트럭 + 기울어 선 미사일 (붉은 띠)
function tel(x, z, ry, tilt) {
  const g = new THREE.Group(), cm = new THREE.MeshStandardMaterial({ color: 0x3e4430, roughness: 0.7, metalness: 0.2 });
  const dk = new THREE.MeshStandardMaterial({ color: 0x15140f, roughness: 0.9 }), red = new THREE.MeshStandardMaterial({ color: 0xa8141c, roughness: 0.6 });
  const box = (w, h, d, m, px, py, pz) => { const o = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); o.position.set(px, py, pz); g.add(o); return o; };
  box(12, 1.6, 3.2, cm, 0, 2.2, 0); box(2.8, 2.4, 3.2, cm, 5.4, 3.6, 0); box(0.1, 1.0, 2.6, new THREE.MeshStandardMaterial({ color: 0x223040, metalness: 0.6, roughness: 0.2 }), 6.85, 4.1, 0);
  for (let i = 0; i < 4; i++) for (const sd of [-1, 1]) { const w = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.85, 0.6, 16), dk); w.rotation.x = Math.PI / 2; w.position.set(4.2 - i * 2.6, 0.85, sd * 1.5); g.add(w); }
  for (const sd of [-1, 1]) { const l = new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffd890 })); l.position.set(6.85, 2.6, sd * 1.2); g.add(l); }
  const m = new THREE.Group(); m.position.set(-5, 3, 0); m.rotation.z = tilt; g.add(m);
  const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 13, 20), new THREE.MeshStandardMaterial({ color: 0x4a4e3c, roughness: 0.5, metalness: 0.3 })); tube.rotation.z = -Math.PI / 2; tube.position.x = 6.5; m.add(tube);
  const cone = new THREE.Mesh(new THREE.ConeGeometry(0.8, 3, 20), new THREE.MeshStandardMaterial({ color: 0x2a2c24, roughness: 0.5, metalness: 0.3 })); cone.rotation.z = -Math.PI / 2; cone.position.x = 14.5; m.add(cone);
  const band = new THREE.Mesh(new THREE.CylinderGeometry(0.82, 0.82, 0.7, 20), red); band.rotation.z = -Math.PI / 2; band.position.x = 11.5; m.add(band);
  g.position.set(x, 0, z); g.rotation.y = ry; g.scale.setScalar(0.7);
  return g;
}

export function buildScene(opt = {}) {
  const s = new THREE.Scene();
  s.fog = new THREE.Fog(0x5a2a1c, 120, 900);
  s.add(skyDome());
  const sun = new THREE.DirectionalLight(0xff9a50, 2.4); sun.position.set(80, 10, -120); s.add(sun);
  s.add(new THREE.HemisphereLight(0x5a4a66, 0x2a1810, 0.8));
  const key = new THREE.DirectionalLight(0xffd0a0, 1.6); key.position.set(-30, 25, 40); s.add(key);
  const rim = new THREE.DirectionalLight(0xff5030, 2.2); rim.position.set(40, 12, -30); s.add(rim);
  s.add(plaza());

  // 도시 스카이라인 (불 켜진 유리 빌딩 + 검은 실루엣)
  const glass = [0, 1, 2].map((v) => { const T = glassFacadeHD(v); return new THREE.MeshStandardMaterial({ map: T.map, emissiveMap: T.emissiveMap, emissive: 0xffc890, emissiveIntensity: 1.1, color: 0x3a3640, roughness: 0.5, metalness: 0.3 }); });
  const dark = new THREE.MeshStandardMaterial({ color: 0x1a1618, roughness: 0.9 });
  const burn = [];
  for (let i = 0; i < 160; i++) {
    const x = R(-320, 420), z = R(-460, -260), w = R(8, 18), d = R(8, 16), h = i % 9 === 0 ? R(90, 140) : R(18, 75);
    const g = new THREE.BoxGeometry(w, h, d); g.translate(0, h / 2, 0);
    const uv = g.attributes.uv; for (let k = 0; k < uv.count; k++) uv.setXY(k, uv.getX(k) * w / 6, uv.getY(k) * h / 6);
    const b = new THREE.Mesh(g, rnd() < 0.7 ? glass[i % 3] : dark); b.position.set(x, 0, z); b.rotation.y = R(-0.3, 0.3); s.add(b);
    if (i % 14 === 0) { const sp = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 1.2, 30, 6), dark); sp.position.set(x, h + 15, z); s.add(sp); }
    if (rnd() < 0.1 && burn.length < 10) burn.push(V(x, h * R(0.5, 1), z + d / 2));
  }

  // 거대한 국기 (깃대 + 물결 천)
  const ft = new THREE.CanvasTexture(flagCanvas()); ft.colorSpace = THREE.SRGBColorSpace; ft.anisotropy = 8;
  const fg = new THREE.PlaneGeometry(34, 21, 60, 30), pos = fg.attributes.position;
  for (let i = 0; i < pos.count; i++) { const x = pos.getX(i), y = pos.getY(i), k = (x + 17) / 34; pos.setZ(i, Math.sin(x * 0.32 + y * 0.08) * 1.6 * k + Math.sin(x * 0.7) * 0.4 * k); pos.setY(i, y - k * k * 1.2); }
  fg.computeVertexNormals();
  const flag = new THREE.Mesh(fg, new THREE.MeshStandardMaterial({ map: ft, side: THREE.DoubleSide, roughness: 0.8 }));
  flag.position.set(opt.flagX ?? 8, opt.flagY ?? 30, opt.flagZ ?? -60); flag.rotation.y = -0.25; s.add(flag);
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.45, 44, 10), new THREE.MeshStandardMaterial({ color: 0xc8a050, metalness: 0.8, roughness: 0.3 }));
  pole.position.set(flag.position.x - 17 * Math.cos(0.25), 22, flag.position.z - 17 * Math.sin(0.25)); s.add(pole);

  // 단상 전차 위 총통 (화면 쪽을 보게 돌림: 모델 앞 = +x)
  const L = getEnemy('leader');
  L.root.position.set(opt.lx ?? 4, 0, opt.lz ?? 6); L.root.rotation.y = opt.lry ?? -1.35; L.root.scale.setScalar(opt.ls ?? 6); s.add(L.root);
  // 열병식 행렬: 전차·장갑차 줄, 보병 대열
  const put = (t, x, z, ry, sc) => { const m = getEnemy(t); m.root.position.set(x, 0, z); m.root.rotation.y = ry; m.root.scale.setScalar(sc); s.add(m.root); return m; };
  // 대각선으로 다가오는 행렬 (뒤 왼쪽 → 앞 오른쪽): 전차 두 줄 + 보병 대열
  for (let i = 0; i < 10; i++) { const k = i / 9; put(i % 3 === 2 ? 'apc' : 'tank', 14 + k * 30, -70 + k * 62, -0.55, 5); put(i % 2 ? 'apc' : 'tank', 24 + k * 30, -74 + k * 62, -0.55, 5); }
  for (let r = 0; r < 3; r++) for (let c = 0; c < 22; c++) { const k = c / 21; put('inf', 6 + k * 26 - r * 1.6, -60 + k * 56 + r * 1.0, -0.55, 5); }
  // 이동식 미사일 발사차 (가상): 앞 오른쪽에 비스듬히 세운 큰 미사일
  for (let i = 0; i < 3; i++) s.add(tel(16 + i * 9, -2 - i * 12, -0.35, 0.62 + i * 0.05));
  const helis = [];
  for (let i = 0; i < 5; i++) { const h = put('heli', 30 + i * 14, -70 - i * 12, Math.PI, 5); h.root.position.y = 18 + i * 3; helis.push(h); }

  // 연기·불
  const v = new VFX(s, 1);
  for (let k = 0; k < 400; k++) {
    for (const p of burn) {
      if (rnd() < 0.3) v.emit(v.smoke, { x: p.x + R(-2, 2), y: p.y, z: p.z, v: [R(2, 4), R(5, 8), 0], life: R(10, 14), s0: 4, s1: R(40, 60), c0: [0.03, 0.025, 0.02], c1: [0.07, 0.06, 0.055], c2: [0.13, 0.11, 0.1], a: 0.8, tile: 0, drag: 0.3, fin: 0.05, rv: R(-0.2, 0.2) });
      if (rnd() < 0.25) v.emit(v.glow, { x: p.x + R(-3, 3), y: p.y, z: p.z, v: [0, R(1, 3), 0], life: R(0.5, 0.9), s0: R(4, 7), s1: 2, c0: [2, 1.1, 0.4], c1: [1.2, 0.35, 0.08], tile: 1, a: 0.8 });
    }
    v.update(1 / 30);
  }
  return s;
}
