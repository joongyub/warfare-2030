// 그림 배경 모드: 고정 카메라에서 본 맵 전체를 한 장의 고화질 그림(실사풍 일러스트)으로 깔고,
// 그 위에서 3D 무기·적만 움직임. 시중 모바일 디펜스 게임이 고퀄리티 배경을 쓰는 방식.
// 그림은 "기준 카메라"에서 찍은 것이므로, 같은 카메라 행렬로 땅에 되비춰(투영) 붙임 → 확대·이동해도 위치가 맞음.
import * as THREE from 'three';

export class Backdrop {
  // info = { image: '그림 경로', projView: [16개 숫자] } (가이드 그림을 뽑을 때 함께 저장됨)
  constructor(app, info) {
    this.app = app;
    const m = new THREE.Matrix4().fromArray(info.projView);
    const tex = new THREE.TextureLoader().load(info.image, () => { this.ready = true; app.city.group.visible = false; });
    tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 8;
    tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
    tex.generateMipmaps = true; tex.minFilter = THREE.LinearMipmapLinearFilter;
    this.mat = new THREE.ShaderMaterial({
      uniforms: { map: { value: tex }, projView: { value: m } },
      vertexShader: `varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
      fragmentShader: `uniform sampler2D map; uniform mat4 projView; varying vec3 vW;
        void main(){ vec4 c = projView * vec4(vW, 1.0); vec2 uv = c.xy / c.w * 0.5 + 0.5;
          gl_FragColor = texture2D(map, clamp(uv, 0.001, 0.999));
          #include <colorspace_fragment>
        }`,
      depthWrite: true, toneMapped: false
    });
    const g = new THREE.PlaneGeometry(400, 400); g.rotateX(-Math.PI / 2);
    this.mesh = new THREE.Mesh(g, this.mat); this.mesh.position.y = -0.01; this.mesh.renderOrder = -1;
    app.scene.add(this.mesh);
  }
}

// 가이드 그림 뽑기: 기준 카메라(전체 보기)에서 UI·적·무기 없이 맵만 찍음 + 그 카메라 행렬
// 사용: 브라우저 콘솔에서 __GF.exportGuide(3840, 2160)
export function exportGuide(app, w = 3840, h = 2160) {
  const r = app.renderer, cam = app.camera.clone();
  cam.aspect = 16 / 9; cam.updateProjectionMatrix();
  const f = app.fit;
  const hz = Math.cos(app.EL) * f.d;
  cam.position.set(f.t.x + Math.sin(app.AZ) * hz, f.t.y + Math.sin(app.EL) * f.d, f.t.z + Math.cos(app.AZ) * hz); cam.lookAt(f.t); cam.updateMatrixWorld(true);
  const hidden = [];
  for (const o of [app.game.unitGroup, app.game.fxGroup, app.game.rangeDisc, app.city.chev].filter(Boolean)) { if (o.visible) { o.visible = false; hidden.push(o); } }
  const rt = new THREE.WebGLRenderTarget(w, h, { samples: 4 });
  const prevSize = r.getSize(new THREE.Vector2()), prevPR = r.getPixelRatio();
  r.setRenderTarget(rt); r.render(app.scene, cam);
  const px = new Uint8Array(w * h * 4); r.readRenderTargetPixels(rt, 0, 0, w, h, px);
  r.setRenderTarget(null); rt.dispose(); r.setPixelRatio(prevPR); r.setSize(prevSize.x, prevSize.y);
  hidden.forEach((o) => { o.visible = true; });
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const ctx = c.getContext('2d'), img = ctx.createImageData(w, h);
  for (let y = 0; y < h; y++) img.data.set(px.subarray((h - 1 - y) * w * 4, (h - y) * w * 4), y * w * 4);   // 위아래 뒤집기
  ctx.putImageData(img, 0, 0);
  const projView = new THREE.Matrix4().multiplyMatrices(cam.projectionMatrix, cam.matrixWorldInverse).toArray();
  return { png: c.toDataURL('image/png'), projView };
}
