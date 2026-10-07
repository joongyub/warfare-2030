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
    r.setPixelRatio(Math.min(window.devicePixelRatio, { ultra: 2, high: 1.5, medium: 1.25, low: 1 }[q] || 1));
    // 그림자 지도 크기 (도시 그림자는 멈춰 있어 바뀔 때만 다시 그림)
    const ms = { ultra: 4096, high: 4096, medium: 2048, low: 1024 }[q] || 2048;
    if (this.sun.shadow.mapSize.x !== ms) { this.sun.shadow.mapSize.set(ms, ms); if (this.sun.shadow.map) { this.sun.shadow.map.dispose(); this.sun.shadow.map = null; } }
    if (q === 'low') return;
    const size = r.getDrawingBufferSize(new THREE.Vector2());
    const msaa = q === 'ultra' ? 4 : q === 'high' ? 2 : 0;
    const rt = new THREE.WebGLRenderTarget(size.x, size.y, { type: THREE.HalfFloatType, samples: msaa });
    const c = this.composer = new EffectComposer(r, rt);
    c.addPass(new RenderPass(this.scene, this.camera));
    if (q === 'ultra') {
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

  resize() {
    const r = this.r, s = r.getSize(new THREE.Vector2());
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
