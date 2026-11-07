import * as THREE from 'three';
import { buildScene } from './scene.js';
import { getEnemy } from '../../src/models.js';

// 배경: 1672x941 (예전 홈 그림과 같은 크기 → 오른쪽 정렬 cover)
window.renderBg = (o = {}) => {
  const W = o.w || 1672, H = o.h || 941;
  const r = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
  r.setPixelRatio(1); r.setSize(W, H); r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = o.exp || 0.95;
  document.body.appendChild(r.domElement);
  const s = buildScene(o);
  const cam = new THREE.PerspectiveCamera(o.fov || 34, W / H, 0.1, 1200);
  cam.position.set(...(o.cam || [-2, 4, 32])); cam.lookAt(...(o.look || [14, 11, -10]));
  // 화면 왼쪽 35%는 메뉴 자리 → 카메라를 옮겨 장면이 오른쪽에 오게
  cam.setViewOffset(W, H, -(o.shift ?? 0.2) * W, 0, W, H);
  r.render(s, cam);
  return r.domElement.toDataURL('image/jpeg', 0.9);
};
// 총통 초상 (투명 배경 PNG): 방송 자막 연출에 씀
window.renderPortrait = (o = {}) => {
  const W = o.w || 470, H = o.h || 640;
  const r = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
  r.setPixelRatio(1); r.setSize(W, H); r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = 1.0; r.setClearColor(0, 0);
  document.body.appendChild(r.domElement);
  const s = new THREE.Scene();
  s.add(new THREE.HemisphereLight(0x8a7a90, 0x3a2418, 1.2));
  const k = new THREE.DirectionalLight(0xffe0c0, 2.4); k.position.set(4, 5, 6); s.add(k);
  const rim = new THREE.DirectionalLight(0xff4020, 3); rim.position.set(-5, 3, -4); s.add(rim);
  const L = getEnemy('leader'); L.root.rotation.y = o.ry ?? -1.25; s.add(L.root);
  const cam = new THREE.PerspectiveCamera(o.fov || 22, W / H, 0.01, 100);
  cam.position.set(...(o.cam || [0.3, 1.45, 4.2])); cam.lookAt(...(o.look || [0, 1.25, 0]));
  r.render(s, cam);
  return r.domElement.toDataURL('image/png');
};
