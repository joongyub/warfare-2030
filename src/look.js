// 실사 화면 품질: 하늘 조명(환경광), 공기 원근감(안개), 구석 그림자(AO), 빛 번짐(블룸), 영화 색감, 가장자리 어둡게
// 그래픽 품질: ultra(고사양 PC, 구석 그림자) / high(PC) / medium(휴대폰) / low(느린 기기: 후처리 없음)
// 자동이면 프레임이 느릴 때 한 단계씩 스스로 낮춤 (main.js)
import * as THREE from 'three';
import { Sky } from 'three/examples/jsm/objects/Sky.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { GTAOPass } from 'three/examples/jsm/postprocessing/GTAOPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';

// 영화 색감: 대비·채도 조절, 그림자는 살짝 푸르게·밝은 곳은 살짝 따뜻하게, 가장자리 어둡게
const GradeShader = {
  uniforms: {
    tDiffuse: { value: null },
    contrast: { value: 1.08 }, saturation: { value: 0.86 },
    shadowTint: { value: new THREE.Vector3(0.94, 0.98, 1.06) },
    lightTint: { value: new THREE.Vector3(1.04, 1.0, 0.95) },
    vignette: { value: 0.28 }, aspect: { value: 16 / 9 }
  },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float contrast, saturation, vignette, aspect;
    uniform vec3 shadowTint, lightTint; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      vec3 col = c.rgb;
      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(l), col, saturation);
      col = (col - 0.5) * contrast + 0.5;
      col *= mix(shadowTint, lightTint, smoothstep(0.15, 0.75, l));
      float rv = length(vUv - 0.5);
      col *= 1.0 - vignette * smoothstep(0.38, 0.78, rv);
      gl_FragColor = vec4(clamp(col, 0.0, 1.0), c.a);
    }`
};

const TOUCH = (navigator.maxTouchPoints || 0) > 0 || 'ontouchstart' in window;
// 터치 기기에서 품질별로 그리는 최대 픽셀 수 (가로×세로 × 배율²)
const TOUCH_PX = { ultra: 2.2e6, high: 1.8e6, medium: 1.4e6, low: 1.1e6 };

export function pickQuality() {
  const q = GF.SETTINGS.graphics;
  if (q && q !== 'auto') return q;
  const touch = matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 1;
  return touch ? 'medium' : 'high';
}

export class Look {
  constructor(renderer, scene, camera, sun) {
    this.r = renderer; this.scene = scene; this.camera = camera; this.sun = sun;
    this.haze = new THREE.Color(0xbfcbd3);
    scene.background = this.haze.clone();
    scene.fog = new THREE.Fog(this.haze, 120, 320);
    this.makeEnvironment();
    this.setQuality(pickQuality());
  }

  // 하늘을 한 번 찍어 사방에서 오는 은은한 빛·반사로 씀 (사진처럼 보이는 핵심)
  makeEnvironment() {
    const sky = new Sky(); sky.scale.setScalar(1000);
    const u = sky.material.uniforms;
    u.turbidity.value = 7; u.rayleigh.value = 1.4; u.mieCoefficient.value = 0.006; u.mieDirectionalG.value = 0.82;
    if (u.cloudCoverage) u.cloudCoverage.value = 0;
    u.sunPosition.value.copy(this.sun.position).normalize();
    const sc = new THREE.Scene(); sc.add(sky);
    const pm = new THREE.PMREMGenerator(this.r);
    this.env = pm.fromScene(sc, 0.03).texture;
    pm.dispose(); sky.geometry.dispose(); sky.material.dispose();
    this.scene.environment = this.env;
    this.scene.environmentIntensity = GF.SETTINGS.envLight ?? 0.12;
  }

  setQuality(q) {
    this.q = q;
    if (this.composer) { this.composer.dispose(); this.composer = null; }
    const r = this.r;
    this.scale = 1; this.fastN = 0; this.hitchN = 0; this.govT = 0; this.govN = 0; this.settle = 3;
    r.setPixelRatio(this.pixelRatio());
    // 그림자 지도 크기 (도시 그림자는 멈춰 있어 바뀔 때만 다시 그림)
    const ms = { ultra: 4096, high: 4096, medium: 2048, low: 1024 }[q] || 2048;
    if (this.sun.shadow.mapSize.x !== ms) { this.sun.shadow.mapSize.set(ms, ms); if (this.sun.shadow.map) { this.sun.shadow.map.dispose(); this.sun.shadow.map = null; } }
    if (q === 'low') return;
    const size = r.getDrawingBufferSize(new THREE.Vector2());
    const msaa = q === 'ultra' ? 4 : q === 'high' ? 2 : 0;
    const rt = new THREE.WebGLRenderTarget(size.x, size.y, { type: THREE.HalfFloatType, samples: msaa });
    const c = this.composer = new EffectComposer(r, rt);
    c.addPass(new RenderPass(this.scene, this.camera));
    if (q === 'ultra' && !this.noAO) {
      const ao = this.ao = new GTAOPass(this.scene, this.camera, size.x, size.y);
      ao.updateGtaoMaterial({ radius: 0.9, distanceExponent: 1.4, thickness: 1.2, scale: 1.1, samples: 12 });
      ao.blendIntensity = 0.85;
      c.addPass(ao);
    } else this.ao = null;
    this.bloom = new UnrealBloomPass(new THREE.Vector2(size.x / 2, size.y / 2), 0.38, 0.45, 0.96);
    c.addPass(this.bloom);
    c.addPass(new OutputPass());
    this.grade = new ShaderPass(GradeShader); c.addPass(this.grade);
    if (!msaa) { this.fxaa = new ShaderPass(FXAAShader); c.addPass(this.fxaa); } else this.fxaa = null;
    this.resize();
  }

  // 화면 픽셀 수: 품질별 최대 배율 × 자동 조절 배율(scale). 터치 기기(휴대폰·폴드)는 그리는 픽셀 수 상한을 둠
  // 폴드 펼친 화면은 거의 정사각형이라 16:9 휴대폰보다 픽셀이 1.5배 넘게 많아 최고 화질이면 버벅임 (v0.48.0)
  pixelRatio() {
    const r = this.r, s = r.getSize(new THREE.Vector2());
    let pr = Math.min(window.devicePixelRatio, { ultra: 2, high: 1.5, medium: 1.25, low: 1 }[this.q] || 1);
    if (TOUCH && s.x * s.y > 0) pr = Math.min(pr, Math.sqrt(TOUCH_PX[this.q] / (s.x * s.y)));
    return Math.max(0.6, pr * this.scale);
  }

  // 자동 성능 조절 (그래픽 설정과 상관없이 늘 켜짐): 1.5초 평균이 45fps 아래면 한 단계씩 낮추고,
  // 55fps 넘게 여유가 3번 이어지면 한 단계 올림. 단계: 구석 그림자(AO) 끄기 → 해상도 85% → 72% → 60%
  governor(dt) {
    if (this.settle > 0) { this.settle -= Math.min(dt, 0.25); return; }
    // 도시 짓기·탭 전환 같은 한 번의 멈춤은 셈하지 않음. 다만 아주 느린 프레임(4fps 미만)이 6번 이어지면 바로 낮춤
    if (dt > 0.25) { if (++this.hitchN >= 6) { this.hitchN = 0; this.step(-1); } return; }
    this.hitchN = 0;
    this.govT += dt; this.govN++;
    if (this.govT < 1.5) return;
    const avg = this.govT / this.govN; this.govT = 0; this.govN = 0;
    if (avg > 1 / 45) { this.fastN = 0; this.step(-1); }
    else if (avg < 1 / 55 && ++this.fastN >= 3) { this.fastN = 0; this.step(1); }
  }
  // 단계 0 = AO 켬·해상도 100%, 1 = AO 끔, 2~4 = 해상도 85·72·60%.
  // 올렸다가 바로 다시 느려지면 그 단계를 상한으로 고정 (화질이 왔다 갔다 하며 끊기지 않게)
  step(dir) {
    const S = [1, 0.85, 0.72, 0.6];
    const lv = (this.noAO || this.q !== 'ultra' ? 1 : 0) + S.indexOf(this.scale);
    const min = this.q === 'ultra' ? 0 : 1;
    let to = lv - dir;
    if (dir < 0 && this.lastUp) this.lockLv = Math.max(this.lockLv ?? 0, to);
    if (dir > 0) to = Math.max(to, this.lockLv ?? 0, min);
    to = Math.max(min, Math.min(4, to));
    this.lastUp = dir > 0;
    if (to === lv) return;
    const ao = to === 0, sc = S[Math.max(0, to - 1)];
    if (ao !== !this.noAO && this.q === 'ultra') { this.noAO = !ao; this.setQuality(this.q); this.scale = sc; }
    else this.scale = sc;
    this.r.setPixelRatio(this.pixelRatio()); this.resize(); this.settle = 2;
  }

  resize() {
    const r = this.r, s = r.getSize(new THREE.Vector2());
    const pr0 = this.pixelRatio(); if (Math.abs(r.getPixelRatio() - pr0) > 0.01) r.setPixelRatio(pr0);
    if (!this.composer) return;
    this.composer.setPixelRatio(r.getPixelRatio());
    this.composer.setSize(s.x, s.y);
    const pr = r.getPixelRatio();
    if (this.fxaa) this.fxaa.material.uniforms.resolution.value.set(1 / (s.x * pr), 1 / (s.y * pr));
    this.grade.uniforms.aspect.value = s.x / s.y;
  }

  // 카메라가 멀수록 먼 곳이 뿌옇게 (공기 원근감)
  update(dist) {
    this.scene.fog.near = dist * 1.05;
    this.scene.fog.far = dist * 3.4;
  }

  render() {
    if (this.composer) this.composer.render(); else this.r.render(this.scene, this.camera);
  }
}
