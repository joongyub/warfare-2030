// 도시 키트: 베를린 (스테이지 6)
// 배경: 알트바우 둘레형 블록(5층, 파스텔·황토색 회벽, 낮은 기와 지붕, 안뜰), 동쪽은 동독 플라텐바우(조립식 판넬 아파트),
//       서쪽 포츠다머 플라츠는 유리 고층 빌딩, 공원 블록(티어가르텐) 사이사이
// 전투 구역 안: 브란덴부르크 문 · 전승기념탑(그로서 슈테른) · 베를린 대성당 · 체크포인트 찰리(+장벽 조각)
// 가장자리: 베를린 TV 타워(동) · 독일 국회의사당(북) · 오버바움 다리(슈프레강, 동쪽)
import * as THREE from 'three';
import { makeRng } from '../textures.js';
import { cv, mk, once, pane, grime, bricks, signBoard } from '../textures_world.js';
import { ashlarMat, sbox, std, adder, canvasTex, uvMul, facadeMat, fluteMat, roofMat, gold, cornice, columns, trees, lamps, shade, reliefMat, pediment } from '../landmarks_world.js';
import { mansardGeo } from '../world_city.js';
import { emis, towerTex } from './common.js';

// =================== 외벽 그림 ===================
const ALT = ['#d8b779', '#e3d2a6', '#d6a58c', '#b8c8ad', '#cfc8b9', '#a9b8c3', '#e0bfa0', '#c4a77e'];
const ALT_WORDS = ['BÄCKEREI', 'APOTHEKE', 'CAFÉ', 'SPÄTI', 'KNEIPE', 'IMBISS', 'BUCHHANDLUNG', 'DÖNER', 'BLUMEN', 'KONDITOREI'];
const ALT_SIGN = [['#1f2b38', '#f0d78a'], ['#7a1f22', '#ffffff'], ['#24543f', '#f2ead2'], ['#f1ede4', '#202020'], ['#2b4b80', '#ffffff']];
// 알트바우: 5층 (1층 가게·대문 + 위 4층), 가로 4칸. 한 장 = 가로 1.6 × 세로 1.5
function altbauHD(v) {
  return once('berlinAlt' + v, () => {
    const W = 256, H = 384, fh = H / 5, cw = W / 4, [c, g] = cv(W, H), [ce, e] = cv(W, H), rnd = makeRng('berlinAlt' + v);
    const wall = ALT[v % ALT.length];
    e.fillStyle = '#000'; e.fillRect(0, 0, W, H);
    g.fillStyle = wall; g.fillRect(0, 0, W, H);
    for (let i = 0; i < 2500; i++) { g.fillStyle = `rgba(${rnd() < 0.5 ? '0,0,0' : '255,255,255'},${rnd() * 0.05})`; g.fillRect(rnd() * W, rnd() * H, 2, 2); }   // 회벽 거친 면
    grime(g, W, H, rnd, 600, 0.05);
    const light = 'rgba(255,250,235,0.55)', dark = 'rgba(60,45,30,0.28)';
    for (let f = 0; f < 4; f++) {
      const y = f * fh + fh * 0.2, wh = fh * (f === 3 ? 0.66 : 0.6), ww = cw * 0.42;
      for (let i = 0; i < 4; i++) {
        const x = i * cw + (cw - ww) / 2;
        // 회반죽 창틀 장식 (밝은 테두리 + 그림자)
        g.fillStyle = light; g.fillRect(x - 6, y - 6, ww + 12, wh + 12);
        g.fillStyle = dark; g.fillRect(x - 6, y + wh + 6, ww + 12, 3);
        if (f === 3 || f === 2) {   // 아래층 창 위 처마(박공·평 처마)
          g.fillStyle = light; g.fillRect(x - 9, y - 14, ww + 18, 6);
          if (f === 3 && i % 2 === 0) { g.beginPath(); g.moveTo(x - 9, y - 14); g.lineTo(x + ww / 2, y - 24); g.lineTo(x + ww + 9, y - 14); g.fill(); }
          g.fillStyle = dark; g.fillRect(x - 9, y - 8, ww + 18, 2);
        }
        pane(g, e, x, y, ww, wh, rnd, { frame: '#f3efe6', lit: 0.14, sky: '#9db1c2' });
        g.fillStyle = light; g.fillRect(x - 8, y + wh + 2, ww + 16, 5);   // 창턱
      }
      // 가운데 철제 발코니 (2·3층)
      if ((f === 1 || f === 2) && v % 2 === 0) {
        const bx = cw * 1.12, bw = cw * 1.76, by = y + wh * 0.62;
        g.fillStyle = 'rgba(0,0,0,0.25)'; g.fillRect(bx, by + wh * 0.38, bw, 4);
        g.strokeStyle = '#26282a'; g.lineWidth = 1.5; g.strokeRect(bx, by, bw, wh * 0.38);
        for (let k = bx; k < bx + bw; k += 5) { g.beginPath(); g.moveTo(k, by); g.lineTo(k, by + wh * 0.38); g.stroke(); }
      }
      g.fillStyle = 'rgba(255,255,255,0.3)'; g.fillRect(0, (f + 1) * fh - 5, W, 3);   // 층 띠
      g.fillStyle = 'rgba(0,0,0,0.12)'; g.fillRect(0, (f + 1) * fh - 2, W, 2);
    }
    // 맨 위 처마 돌림띠 + 치형 장식
    g.fillStyle = shade(parseInt(wall.slice(1), 16), 0.8); g.fillRect(0, 0, W, 9);
    g.fillStyle = 'rgba(255,255,255,0.4)'; for (let x = 0; x < W; x += 8) g.fillRect(x, 9, 4, 5);
    // 1층: 거친 돌 줄눈(루스티카) + 가게 또는 아치 대문
    const gy = 4 * fh;
    g.fillStyle = shade(parseInt(wall.slice(1), 16), 0.86); g.fillRect(0, gy, W, fh);
    g.fillStyle = 'rgba(0,0,0,0.18)'; for (let y = gy + 8; y < H; y += 11) g.fillRect(0, y, W, 2);
    if (v % 3 !== 2) {
      const [bg, fg] = ALT_SIGN[Math.floor(rnd() * ALT_SIGN.length)];
      signBoard(g, e, 8, gy + fh * 0.1, cw * 2.6, fh * 0.2, ALT_WORDS[Math.floor(rnd() * ALT_WORDS.length)], bg, fg, 'Arial,Helvetica,sans-serif');
      const sg = g.createLinearGradient(0, gy + fh * 0.35, 0, H); sg.addColorStop(0, '#f2d9a0'); sg.addColorStop(1, '#8c6a40');
      for (let i = 0; i < 2; i++) { const x = 12 + i * cw * 1.3; g.fillStyle = '#2a2622'; g.fillRect(x - 3, gy + fh * 0.36 - 3, cw * 1.15 + 6, fh * 0.64); g.fillStyle = sg; g.fillRect(x, gy + fh * 0.36, cw * 1.15, fh * 0.6); e.fillStyle = '#5a4424'; e.fillRect(x, gy + fh * 0.36, cw * 1.15, fh * 0.6); }
    } else {
      for (let i = 0; i < 4; i++) { const x = i * cw + cw * 0.25, w = cw * 0.5; pane(g, e, x, gy + fh * 0.25, w, fh * 0.45, rnd, { frame: '#efe9dc', lit: 0.2 }); }
    }
    // 아치 대문 (안뜰로 들어가는 문)
    const dx = cw * 3.05, dw = cw * 0.8;
    g.fillStyle = '#3a2c22'; g.beginPath(); g.moveTo(dx, H); g.lineTo(dx, gy + fh * 0.42); g.arc(dx + dw / 2, gy + fh * 0.42, dw / 2, Math.PI, 0); g.lineTo(dx + dw, H); g.fill();
    g.strokeStyle = 'rgba(255,250,235,0.6)'; g.lineWidth = 3; g.stroke();
    g.fillStyle = 'rgba(0,0,0,0.3)'; g.fillRect(dx + dw / 2 - 1, gy + fh * 0.45, 2, fh * 0.55);
    return { map: mk(c), emissiveMap: mk(ce) };
  });
}
// 동독 플라텐바우 (WBS 70): 콘크리트 판넬 격자, 판넬마다 창 하나, 세로 줄 로지아(색 난간). 가로 4칸 × 6층
const PLATTE = ['#c9c4b8', '#b8b8b1', '#d4cab3', '#aeb4b6'], LOGGIA = ['#d9873a', '#79a36a', '#5b8db8', '#c9b04a'];
function plattenHD(v) {
  return once('berlinPlatte' + v, () => {
    const W = 256, H = 256, cw = W / 4, rh = H / 6, [c, g] = cv(W, H), [ce, e] = cv(W, H), rnd = makeRng('berlinPlatte' + v);
    e.fillStyle = '#000'; e.fillRect(0, 0, W, H);
    g.fillStyle = PLATTE[v % 4]; g.fillRect(0, 0, W, H);
    for (let i = 0; i < 3000; i++) { g.fillStyle = `rgba(${rnd() < 0.5 ? '0,0,0' : '255,255,255'},${rnd() * 0.08})`; g.fillRect(rnd() * W, rnd() * H, 1.5, 1.5); }   // 자갈 노출 콘크리트
    grime(g, W, H, rnd, 400, 0.06);
    for (let r = 0; r < 6; r++) for (let k = 0; k < 4; k++) {
      const x = k * cw, y = r * rh, loggia = k === (v % 2 ? 1 : 2);
      g.fillStyle = `rgba(0,0,0,${0.02 + rnd() * 0.05})`; g.fillRect(x + 2, y + 2, cw - 4, rh - 4);   // 판넬마다 색 차이
      if (loggia) {
        g.fillStyle = '#2e3134'; g.fillRect(x + 4, y + 4, cw - 8, rh * 0.6);
        pane(g, e, x + 10, y + 8, cw - 20, rh * 0.5, rnd, { frame: '#ddd', lit: 0.18, mull: false });
        g.fillStyle = LOGGIA[(v + r) % 4]; g.fillRect(x + 3, y + rh * 0.58, cw - 6, rh * 0.38);
        g.fillStyle = 'rgba(255,255,255,0.25)'; for (let s = x + 6; s < x + cw - 6; s += 8) g.fillRect(s, y + rh * 0.6, 3, rh * 0.34);
      } else pane(g, e, x + cw * 0.2, y + rh * 0.24, cw * 0.6, rh * 0.42, rnd, { frame: '#e6e3dc', lit: 0.13, mull: true });
    }
    g.fillStyle = 'rgba(30,30,30,0.35)';
    for (let k = 0; k <= 4; k++) g.fillRect(k * cw - 1.5, 0, 3, H);   // 판넬 이음
    for (let r = 0; r <= 6; r++) g.fillRect(0, r * rh - 1.5, W, 3);
    return { map: mk(c), emissiveMap: mk(ce) };
  });
}
// 낮은 붉은 기와 지붕 (가로 줄)
function tileRoofMat(base = 0x9a5038) {
  const t = canvasTex('berlinTile' + base, 128, 128, (g, w, h) => {
    const rnd = makeRng('berlinTile' + base);
    g.fillStyle = shade(base, 0.9); g.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 8) for (let x = (y / 8) % 2 ? -6 : 0; x < w; x += 12) {
      g.fillStyle = shade(base, 0.8 + rnd() * 0.35); g.fillRect(x + 1, y + 1, 11, 6);
      g.fillStyle = 'rgba(0,0,0,0.3)'; g.fillRect(x + 1, y + 6, 11, 2);
    }
    for (let i = 0; i < 20; i++) { g.fillStyle = 'rgba(40,40,40,0.12)'; g.fillRect(rnd() * w, rnd() * h, 6 + rnd() * 12, 3 + rnd() * 8); }
  });
  return new THREE.MeshStandardMaterial({ map: t, bumpMap: t, bumpScale: 0.6, roughness: 0.85, side: THREE.DoubleSide });
}
function brickMat(key, base, rough = 0.9) {
  const t = canvasTex('berlinBrick' + key, 128, 128, (g, w, h) => bricks(g, w, h, base, makeRng('berlinBrick' + key)));
  return new THREE.MeshStandardMaterial({ map: t, bumpMap: t, bumpScale: 0.5, roughness: rough });
}
const D2R = Math.PI / 180;

// =================== 배경 도시 ===================
function build(C, H) {
  const { free, B, rnd, boxWalls, roofKit, mat } = H, S = C.S, b = S.bounds, R = S.river;
  const M = {
    alt: ALT.map((_, v) => emis(altbauHD(v), { emissiveIntensity: 0.3, roughness: 0.85 })),
    platte: [0, 1, 2, 3].map((v) => emis(plattenHD(v), { emissiveIntensity: 0.3, roughness: 0.9 })),
    kollhoff: emis(towerTex('berlinKoll', { wall: '#6e3427', cols: 5, rows: 8, frame: '#c9b48c', ww: 0.4, wh: 0.6, lit: 0.12 }), { roughness: 0.8 }),
    tile: [tileRoofMat(0x9a5038), tileRoofMat(0x7c4c3a), tileRoofMat(0x62666c), tileRoofMat(0xa8603e), tileRoofMat(0x575049)], flat: mat(0x6c6f72, { roughness: 0.95 }), rim: mat(0xe3dccb, { roughness: 0.9 }), rimDark: C.M.rimDark, mech: C.M.mech,
    glass: C.M.glass, chim: mat(0x8a5a46, { roughness: 0.9 })
  };
  const plotM = mat(0xb4b6b8), lawn = mat(0x5f8a45, { roughness: 1 }), gravel = mat(0xcfc6b0, { roughness: 1 });
  const tree = (x, z, s) => (C.cityTrees = C.cityTrees || []).push([x, z, s]);
  // 알트바우 한 동: 회벽 + 처마 + 낮은 기와 지붕 + 굴뚝
  const alt = (x, z, w, d, ry, floors) => {
    const h = floors * 0.3, m = M.alt[rnd.int(0, ALT.length - 1)];
    boxWalls(B, x, 0, z, w, h, d, ry, m, null, 1.6, 1.5);
    roofKit(B, x, z, w + 0.06, d + 0.06, h, ry, M.rim, { t: 0.06, rh: 0.07 });
    B.push(M.tile[rnd.int(0, 4)], mansardGeo(x, h + 0.07, z, w, d, 0.3, ry, 1.6));
    if (rnd() < 0.6) { const c = new THREE.BoxGeometry(0.14, 0.26, 0.14); c.translate(x + rnd.range(-w * 0.3, w * 0.3), h + 0.3, z + rnd.range(-0.2, 0.2)); B.push(M.chim, c); }
  };
  // 둘레형 블록 (네 변 건물 + 가운데 안뜰)
  const perimeter = (cx, cz, fl, L = 7.2, dep = 1.6) => {
    for (const [ox, oz, ry, len] of [[0, L / 2 - dep / 2, 0, L], [0, -L / 2 + dep / 2, Math.PI, L], [L / 2 - dep / 2, 0, Math.PI / 2, L - dep * 2], [-L / 2 + dep / 2, 0, -Math.PI / 2, L - dep * 2]]) {
      const n = len > 5 ? 3 : 2;
      for (let k = 0; k < n; k++) {
        const w = len / n, off = (k + 0.5) * w - len / 2;
        alt(cx + ox + Math.cos(ry) * off, cz + oz - Math.sin(ry) * off, w - 0.04, dep, ry, fl - (rnd() < 0.2 ? 1 : 0));
      }
    }
    const yard = new THREE.PlaneGeometry(L - dep * 2, L - dep * 2); yard.rotateX(-Math.PI / 2); yard.translate(cx, 0.012, cz); B.push(gravel, yard);
    if (rnd() < 0.6) tree(cx + rnd.range(-1, 1), cz + rnd.range(-1, 1), rnd.range(0.8, 1.1));
  };
  // 플라텐바우 판상형 (긴 판) / 점상형 (탑)
  const slab = (x, z, w, d, floors, ry = 0) => {
    const h = floors * 0.28;
    boxWalls(B, x, 0, z, w, h, d, ry, M.platte[rnd.int(0, 3)], M.flat, 1.4, 1.68);
    roofKit(B, x, z, w, d, h, ry, M.rimDark, { t: 0.06, rh: 0.12, mech: [[w * 0.3, 0, 0.5, 0.3, 0.5], [-w * 0.3, 0, 0.5, 0.3, 0.5]], mechM: M.mech });
  };
  const glassTower = (x, z, w, d, h) => {
    boxWalls(B, x, 0, z, w, h, d, 0, M.glass[rnd.int(0, 3)], M.flat, 2, 2);
    roofKit(B, x, z, w, d, h, 0, M.rimDark, { t: 0.08, rh: 0.15, house: [w * 0.4, 0.4, d * 0.4], houseM: M.mech });
  };
  for (let bx = -150; bx < 150; bx += 9) for (let bz = -90; bz < 90; bz += 9) {
    const cx = bx + 4.5, cz = bz + 4.5, dist = Math.hypot(cx, cz);
    if (dist > 150 || !free(cx, cz, 4)) continue;
    const pg = new THREE.PlaneGeometry(7.6, 7.6); pg.rotateX(-Math.PI / 2); pg.translate(cx, 0.006, cz); B.push(plotM, pg);
    const front = cz > b.z1 - 6 && cz < b.z1 + 34 && cx > b.x0 - 30 && cx < b.x1 + 30;
    const across = R && cz < R.z;
    const east = !front && cx > b.x1 + 6;
    const potsdam = !front && !across && cx < b.x0 - 4 && cx > b.x0 - 44 && cz > b.z0 - 12 && cz < 6;
    const r = rnd();
    if (potsdam) {
      // 포츠다머 플라츠: 유리 고층 + 붉은 벽돌 콜호프 타워
      const n = rnd.int(1, 2);
      for (let k = 0; k < n; k++) {
        const w = rnd.range(2.8, 4), d = rnd.range(2.8, 4), h = rnd.range(6, 15) * (cx > b.x0 - 14 ? 0.6 : 1);
        const x = cx + (n > 1 ? (k ? 1.8 : -1.8) : rnd.range(-1, 1)), z = cz + rnd.range(-1, 1);
        if (rnd() < 0.3) { boxWalls(B, x, 0, z, w, h, d, 0, M.kollhoff, M.flat, 1.6, 2.2); roofKit(B, x, z, w, d, h, 0, M.rim, { t: 0.1, rh: 0.2, house: [w * 0.6, 0.6, d * 0.6], houseM: M.kollhoff }); }
        else glassTower(x, z, w, d, h);
      }
    } else if (east || (across && cx > 20)) {
      // 동베를린 플라텐바우 단지 (판 사이 잔디·나무)
      const g1 = new THREE.PlaneGeometry(7.2, 7.2); g1.rotateX(-Math.PI / 2); g1.translate(cx, 0.01, cz); B.push(lawn, g1);
      const near = Math.abs(cx - b.x1) < 16 && cz > b.z0 - 6;
      if (r < 0.6) {
        slab(cx, cz - 1.9, 7.0, 1.5, near ? rnd.int(5, 6) : rnd.int(10, 11));
        if (rnd() < 0.6) slab(cx, cz + 2.2, 7.0, 1.5, near ? 4 : rnd.int(5, 6));
      } else if (r < 0.85) slab(cx, cz, 1.6, 7.0, near ? 6 : rnd.int(8, 11));
      else slab(cx, cz, 3.2, 3.2, near ? 7 : rnd.int(16, 20));
      for (let k = 0; k < 3; k++) tree(cx + rnd.range(-3.2, 3.2), cz + (rnd() < 0.5 ? 0.2 : 3.6), rnd.range(0.8, 1.1));
    } else if (!front && r < 0.13) {
      // 공원 (티어가르텐 숲)
      const g1 = new THREE.PlaneGeometry(7.4, 7.4); g1.rotateX(-Math.PI / 2); g1.translate(cx, 0.01, cz); B.push(lawn, g1);
      for (let k = 0; k < 9; k++) tree(cx + rnd.range(-3.3, 3.3), cz + rnd.range(-3.3, 3.3), rnd.range(0.9, 1.3));
    } else {
      perimeter(cx, cz, front ? 3 : 5 + (rnd() < 0.2 ? 1 : 0));
      if (rnd() < 0.6) for (let k = 0; k < 4; k++) tree(cx - 3 + k * 2, cz + 4.25, rnd.range(0.7, 0.9));   // 가로수
    }
  }
  // 슈프레강 건너편 강둑 알트바우 줄
  if (R) for (let x = -150; x < 150; x += 5) {
    const z = R.z - R.w / 2 - 3.2;
    if (!free(x, z, 2.4)) continue;
    alt(x, z, 4.8, 2, Math.PI, 5);
  }
}

// =================== 전투 구역 안 랜드마크 ===================
const SAND = 0xd9c7a0;
// 말 한 마리 (+x 쪽을 봄). s = 크기
function horse(add, m, x, y, z, s, rear) {
  add(new THREE.BoxGeometry(0.3 * s, 0.12 * s, 0.09 * s), m, x, y + 0.24 * s, z);
  const neck = add(new THREE.BoxGeometry(0.07 * s, 0.18 * s, 0.07 * s), m, x + 0.15 * s, y + 0.36 * s, z); neck.rotation.z = -0.5;
  const head = add(new THREE.BoxGeometry(0.13 * s, 0.06 * s, 0.06 * s), m, x + 0.22 * s, y + 0.44 * s, z); head.rotation.z = -0.4;
  for (const [lx, lz] of [[0.11, 0.03], [0.11, -0.03], [-0.11, 0.03], [-0.11, -0.03]]) {
    const up = rear && lx > 0;
    const l = add(new THREE.BoxGeometry(0.035 * s, 0.2 * s, 0.035 * s), m, x + lx * s + (up ? 0.05 * s : 0), y + (up ? 0.2 : 0.1) * s, z + lz * s);
    if (up) l.rotation.z = 1.1;
  }
  const tail = add(new THREE.BoxGeometry(0.03 * s, 0.14 * s, 0.03 * s), m, x - 0.16 * s, y + 0.2 * s, z); tail.rotation.z = 0.4;
}
// 승리의 여신 (날개 + 들어 올린 팔). 몸 높이 약 0.5 × s
function victoria(add, m, x, y, z, s, staff) {
  add(new THREE.CylinderGeometry(0.05 * s, 0.13 * s, 0.42 * s, 10), m, x, y + 0.21 * s, z);
  add(new THREE.SphereGeometry(0.055 * s, 10, 8), m, x, y + 0.48 * s, z);
  for (const sd of [-1, 1]) {
    const w = add(new THREE.BoxGeometry(0.04 * s, 0.34 * s, 0.16 * s), m, x - 0.05 * s, y + 0.46 * s, z + sd * 0.1 * s);
    w.rotation.x = sd * 0.5; w.rotation.z = 0.25;
  }
  const arm = add(new THREE.CylinderGeometry(0.018 * s, 0.022 * s, 0.3 * s, 6), m, x + 0.06 * s, y + 0.55 * s, z); arm.rotation.z = -0.35;
  if (staff) {
    add(new THREE.CylinderGeometry(0.012 * s, 0.012 * s, 0.6 * s, 6), m, x + 0.1 * s, y + 0.6 * s, z);
    add(new THREE.TorusGeometry(0.07 * s, 0.015 * s, 6, 14), m, x + 0.1 * s, y + 0.92 * s, z).rotation.y = Math.PI / 2;
    add(new THREE.BoxGeometry(0.06 * s, 0.06 * s, 0.14 * s), m, x + 0.1 * s, y + 1.02 * s, z);   // 독수리
  } else add(new THREE.TorusGeometry(0.06 * s, 0.014 * s, 6, 14), m, x + 0.11 * s, y + 0.72 * s, z).rotation.y = Math.PI / 2;   // 월계관
}
// 도리스식 세 줄 홈(트리글리프) 띠
function triglyphMat() {
  const t = canvasTex('berlinTrig', 256, 32, (g, w, h) => {
    g.fillStyle = shade(SAND, 0.98); g.fillRect(0, 0, w, h);
    for (let x = 4; x < w; x += 32) { g.fillStyle = shade(SAND, 0.78); g.fillRect(x, 3, 14, h - 6); g.fillStyle = shade(SAND, 1.08); g.fillRect(x + 4, 3, 2, h - 6); g.fillRect(x + 9, 3, 2, h - 6); g.fillStyle = 'rgba(0,0,0,0.12)'; g.fillRect(x + 20, 8, 8, h - 16); }
    g.fillStyle = 'rgba(0,0,0,0.2)'; g.fillRect(0, h - 2, w, 2);
  });
  return new THREE.MeshStandardMaterial({ map: t, bumpMap: t, bumpScale: 0.6, roughness: 0.85 });
}
// 브란덴부르크 문: 도리스식 기둥 6개 × 앞뒤 + 통로 벽 + 엔타블러처 + 계단식 아틱 + 구리 녹색 콰드리가(말 4마리 전차)
function brandenburg(G, k) {
  const add = adder(G), W = k.w, D = k.d, y0 = 0.06;
  const stone = ashlarMat('berlinTor', SAND), flute = fluteMat(SAND), trim = std(0xd7c7a2, { roughness: 0.8 }), copper = std(0x5c9a83, { metalness: 0.35, roughness: 0.5 });
  const cs = W * 0.36, ch = 1.7, cy = y0 + 0.14;
  add(sbox(W * 0.8, 0.14, D * 0.9, 0.8, 0.8), stone, 0, y0 + 0.07, 0);   // 기단
  for (const z of [D * 0.32, -D * 0.32]) columns(add, flute, trim, 6, -cs, cs, z, cy, ch, 0.095);
  for (let i = 0; i < 6; i++) add(sbox(0.16, ch, D * 0.5, 0.8, 0.8), stone, -cs + i * cs * 2 / 5, cy + ch / 2, 0);   // 통로 사이 벽
  const ey = cy + ch;
  add(sbox(cs * 2 + 0.4, 0.14, D * 0.86, 0.8, 0.8), stone, 0, ey + 0.07, 0);   // 아키트레이브
  const trig = triglyphMat();
  add(uvMul(new THREE.BoxGeometry(cs * 2 + 0.4, 0.18, D * 0.86), 4, 1), trig, 0, ey + 0.23, 0);
  cornice(add, trim, cs * 2 + 0.4, D * 0.86, ey + 0.32, 0, 0, 0.06);
  // 아틱 (계단식) + 앞면 부조
  const ay = ey + 0.5;
  add(sbox(cs * 2 * 0.72, 0.36, D * 0.62, 0.8, 0.8), stone, 0, ay + 0.18, 0);
  const rel = reliefMat('berlinTor', SAND);
  for (const sz of [1, -1]) { const p = add(new THREE.PlaneGeometry(cs * 2 * 0.62, 0.26), rel, 0, ay + 0.18, sz * (D * 0.31 + 0.005)); if (sz < 0) p.rotation.y = Math.PI; }
  add(sbox(cs * 2 * 0.36, 0.16, D * 0.5, 0.8, 0.8), stone, 0, ay + 0.44, 0);
  add(new THREE.BoxGeometry(cs * 2 * 0.4, 0.04, D * 0.54), trim, 0, ay + 0.38, 0);
  // 콰드리가 (동쪽 +x 를 봄 → 카메라에서 옆모습)
  const qy = ay + 0.52, s = 1.25;
  for (let i = 0; i < 4; i++) horse(add, copper, 0.12, qy, (i - 1.5) * 0.11, s, i === 1 || i === 2);
  add(new THREE.BoxGeometry(0.22, 0.16, 0.3), copper, -0.22, qy + 0.14, 0);
  for (const sz of [-1, 1]) add(new THREE.CylinderGeometry(0.1, 0.1, 0.03, 12).rotateX(Math.PI / 2), copper, -0.24, qy + 0.1, sz * 0.16);
  victoria(add, copper, -0.24, qy + 0.2, 0, 1.15, true);
  // 양옆 문지기 집 (작은 신전 모양)
  for (const sx of [-1, 1]) {
    const x = sx * (W / 2 - 0.32);
    add(sbox(0.56, 1.05, D * 0.8, 0.8, 0.8), stone, x, y0 + 0.525, 0);
    columns(add, flute, trim, 2, x - 0.17, x + 0.17, D * 0.4 + 0.02, y0, 0.9, 0.05);
    cornice(add, trim, 0.56, D * 0.8, y0 + 1.05, x, 0, 0.04);
    add(pediment(0.6, 0.16, 0.06), trim, x, y0 + 1.13, D * 0.4);
  }
  lamps(add, [[-W * 0.46, D * 0.46], [W * 0.46, D * 0.46]]);
}
// 전승기념탑: 잔디 섬 + 붉은 화강암 받침 + 둥근 기둥 회랑 + 금빛 대포 띠 3줄의 홈 파인 기둥 + 금빛 빅토리아
function siegessaeule(G, k) {
  const add = adder(G), y0 = 0.06, R = Math.min(k.w, k.d) / 2;
  const granite = ashlarMat('berlinGranit', 0x9a5f52), sand = fluteMat(0xd8c49c), trim = std(0xd0c0a0, { roughness: 0.75 }), G0 = gold();
  add(new THREE.CylinderGeometry(R * 0.98, R * 0.98, 0.04, 40), std(0xc9c0aa, { roughness: 1 }), 0, y0 + 0.02, 0);
  add(new THREE.CylinderGeometry(R * 0.86, R * 0.86, 0.05, 40), std(0x5d8a43, { roughness: 1 }), 0, y0 + 0.03, 0);
  add(sbox(1.3, 0.42, 1.3, 0.8, 0.8), granite, 0, y0 + 0.21, 0);
  cornice(add, std(0x8a5246), 1.3, 1.3, y0 + 0.42, 0, 0, 0.04);
  // 기둥 회랑 (원형)
  const hy = y0 + 0.5;
  add(new THREE.CylinderGeometry(0.42, 0.42, 0.62, 20), std(0xb08a3a, { metalness: 0.5, roughness: 0.4 }), 0, hy + 0.31, 0);   // 금빛 모자이크 벽
  for (let i = 0; i < 14; i++) { const a = i / 14 * Math.PI * 2; add(new THREE.CylinderGeometry(0.03, 0.035, 0.62, 8), trim, Math.cos(a) * 0.55, hy + 0.31, Math.sin(a) * 0.55); }
  add(new THREE.CylinderGeometry(0.62, 0.62, 0.08, 24), trim, 0, hy + 0.66, 0);
  // 기둥 몸통 (세 마디) + 금빛 대포 띠
  let y = hy + 0.7;
  for (let i = 0; i < 3; i++) {
    const h = 1.05, r0 = 0.27 - i * 0.02;
    add(uvMul(new THREE.CylinderGeometry(r0 - 0.01, r0, h, 16), 3, 2), sand, 0, y + h / 2, 0);
    y += h;
    add(new THREE.CylinderGeometry(r0 + 0.05, r0 + 0.05, 0.18, 16), G0, 0, y + 0.09, 0);
    for (let j = 0; j < 10; j++) { const a = j / 10 * Math.PI * 2; add(new THREE.CylinderGeometry(0.022, 0.03, 0.2, 6), G0, Math.cos(a) * (r0 + 0.07), y + 0.09, Math.sin(a) * (r0 + 0.07)); }
    y += 0.18;
  }
  add(new THREE.BoxGeometry(0.5, 0.12, 0.5), trim, 0, y + 0.06, 0);   // 기둥머리
  add(new THREE.CylinderGeometry(0.26, 0.3, 0.14, 14), trim, 0, y + 0.19, 0);   // 전망대
  victoria(add, G0, 0, y + 0.26, 0, 1.5, false);
}
// 베를린 대성당: 아치 창 석조 본당 + 앞 기둥 현관 + 큰 녹색 구리 돔(드럼·랜턴·금 십자가) + 네 모서리 작은 돔 탑
function berlinerdom(G, k) {
  const add = adder(G), W = Math.min(k.w, 4.2), D = Math.min(k.d, 3.6), y0 = 0.06;
  const base = 0xa79b84;
  const fac = facadeMat('berlinDom', { wall: base, cols: 3, rows: 2, win: 'arch', ww: 0.42, wh: 0.66, pilaster: true, glass: '#3c4652', lit: 0.1 });
  const stone = ashlarMat('berlinDom', base), trim = std(0xb8ad97, { roughness: 0.8 }), cu = roofMat('copper'), flute = fluteMat(0xb3a78f), G0 = gold();
  const bw = W * 0.86, bd = D * 0.72, bh = 1.5;
  add(sbox(bw + 0.1, 0.2, bd + 0.1, 0.8, 0.8), stone, 0, y0 + 0.1, 0);
  add(sbox(bw, bh, bd, 1.4, 1.5), fac, 0, y0 + 0.2 + bh / 2, -0.05);
  cornice(add, trim, bw, bd, y0 + 0.2 + bh, 0, -0.05, 0.06);
  // 앞 현관: 짝기둥 6개 + 큰 아치 + 박공
  const fz = bd / 2 - 0.05 + 0.18;
  add(sbox(bw * 0.5, bh + 0.25, 0.36, 0.8, 0.8), stone, 0, y0 + 0.2 + (bh + 0.25) / 2, fz - 0.1);
  columns(add, flute, trim, 6, -bw * 0.22, bw * 0.22, fz + 0.12, y0 + 0.2, bh * 0.95, 0.06);
  const arch = new THREE.Shape(); arch.moveTo(-0.28, 0); arch.lineTo(-0.28, 0.75); arch.absarc(0, 0.75, 0.28, Math.PI, 0, true); arch.lineTo(0.28, 0); arch.closePath();
  add(new THREE.ShapeGeometry(arch, 12), std(0x2d2a26), 0, y0 + 0.2, fz + 0.085);
  add(pediment(bw * 0.52, 0.32, 0.3), trim, 0, y0 + 0.2 + bh + 0.25, fz - 0.1);
  // 큰 돔
  const dy = y0 + 0.2 + bh + 0.08;
  const drum = facadeMat('berlinDomDrum', { wall: base, cols: 8, rows: 1, win: 'arch', ww: 0.5, wh: 0.6, glass: '#39434e', band: false });
  add(uvMul(new THREE.CylinderGeometry(0.88, 0.92, 0.62, 24), 2, 1), drum, 0, dy + 0.31, -0.05);
  add(new THREE.CylinderGeometry(0.96, 0.96, 0.06, 24), trim, 0, dy + 0.64, -0.05);
  const dome = add(uvMul(new THREE.SphereGeometry(0.9, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), 4, 2), cu, 0, dy + 0.66, -0.05); dome.scale.y = 1.25;
  for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2, rib = add(new THREE.TorusGeometry(0.9, 0.025, 4, 12, Math.PI / 2), trim, 0, dy + 0.66, -0.05); rib.rotation.set(0, a, 0); rib.scale.set(1, 1.25, 1); }
  add(new THREE.CylinderGeometry(0.14, 0.17, 0.32, 10), trim, 0, dy + 1.88, -0.05);
  add(new THREE.SphereGeometry(0.15, 10, 8, 0, Math.PI * 2, 0, Math.PI / 2), cu, 0, dy + 2.04, -0.05).scale.y = 1.4;
  add(new THREE.BoxGeometry(0.03, 0.3, 0.03), G0, 0, dy + 2.4, -0.05);
  add(new THREE.BoxGeometry(0.16, 0.03, 0.03), G0, 0, dy + 2.44, -0.05);
  // 모서리 탑 4개
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const x = sx * (bw / 2 - 0.22), z = sz * (bd / 2 - 0.22) - 0.05, ty = y0 + 0.2 + bh;
    add(sbox(0.48, 0.55, 0.48, 0.8, 0.8), stone, x, ty + 0.275, z);
    add(new THREE.CylinderGeometry(0.2, 0.22, 0.2, 12), trim, x, ty + 0.65, z);
    add(new THREE.SphereGeometry(0.22, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), cu, x, ty + 0.75, z).scale.y = 1.5;
    add(new THREE.ConeGeometry(0.04, 0.22, 6), G0, x, ty + 1.18, z);
  }
  trees(G, [[-W * 0.46, D * 0.44], [W * 0.46, D * 0.44]], 1);
}
// 체크포인트 찰리: 흰 초소 + 지붕 간판 + 모래주머니 벽 + 성조기 + 경고판 + 그라피티 그린 베를린 장벽 조각
function graffitiMat(v) {
  const t = canvasTex('berlinGraf' + v, 256, 128, (g, w, h) => {
    const rnd = makeRng('berlinGraf' + v);
    g.fillStyle = '#c9c6bd'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 1500; i++) { g.fillStyle = `rgba(0,0,0,${rnd() * 0.08})`; g.fillRect(rnd() * w, rnd() * h, 2, 2); }
    const cols = ['#e2342b', '#f2c12e', '#2a7de1', '#25a55a', '#e84aa0', '#ff8a1c', '#7b3fd1', '#111111', '#ffffff'];
    for (let i = 0; i < 14; i++) {   // 덩어리 색 (스프레이 배경)
      g.fillStyle = cols[Math.floor(rnd() * 7)]; g.globalAlpha = 0.75;
      g.beginPath(); g.ellipse(rnd() * w, h * (0.35 + rnd() * 0.6), 14 + rnd() * 30, 10 + rnd() * 22, rnd() * 3, 0, 7); g.fill();
    }
    g.globalAlpha = 1;
    for (let i = 0; i < 9; i++) {   // 굵은 낙서 선
      g.strokeStyle = cols[Math.floor(rnd() * cols.length)]; g.lineWidth = 3 + rnd() * 5; g.lineCap = 'round';
      g.beginPath(); let x = rnd() * w, y = h * (0.3 + rnd() * 0.6); g.moveTo(x, y);
      for (let s = 0; s < 5; s++) { x += rnd() * 30 - 8; y += rnd() * 24 - 12; g.lineTo(x, y); }
      g.stroke();
    }
    g.font = 'bold 30px Impact,Arial Black,sans-serif'; g.textAlign = 'center';
    const words = ['FREIHEIT', 'BERLIN', 'LOVE', 'PEACE'];
    g.lineWidth = 5; g.strokeStyle = '#111'; g.strokeText(words[v % 4], w / 2, h * 0.7); g.fillStyle = cols[v % 6]; g.fillText(words[v % 4], w / 2, h * 0.7);
    g.fillStyle = 'rgba(0,0,0,0.25)'; for (let x = 0; x < w; x += 64) g.fillRect(x, 0, 2, h);   // 판 이음
  });
  return new THREE.MeshStandardMaterial({ map: t, roughness: 0.9 });
}
function wallSegment(add, m, top, x, z, ry) {
  const s = add(new THREE.BoxGeometry(0.42, 0.95, 0.1), m, x, 0.06 + 0.475, z); s.rotation.y = ry;
  const f = add(new THREE.BoxGeometry(0.42, 0.06, 0.34), top, x, 0.09, z - 0.1 * Math.cos(ry)); f.rotation.y = ry;   // L자 발
  const p = add(new THREE.CylinderGeometry(0.07, 0.07, 0.42, 10).rotateZ(Math.PI / 2), top, x, 0.06 + 0.98, z); p.rotation.y = ry;   // 둥근 머리 관
}
function checkpoint(G, k) {
  const add = adder(G), W = k.w, D = k.d, y0 = 0.06;
  // 차선 표시가 있는 아스팔트 섬
  add(new THREE.BoxGeometry(W * 0.95, 0.03, D * 0.6), std(0x4a4c50, { roughness: 0.95 }), 0, y0 + 0.015, D * 0.12);
  // 초소: 흰 판자 벽 + 창
  const booth = canvasTex('berlinBooth', 128, 128, (g, w, h) => {
    g.fillStyle = '#f2f0ea'; g.fillRect(0, 0, w, h);
    g.fillStyle = 'rgba(0,0,0,0.12)'; for (let y = 0; y < h; y += 10) g.fillRect(0, y, w, 1.5);
    g.fillStyle = '#2d3c48'; g.fillRect(14, 24, 40, 44); g.fillRect(74, 24, 40, 44);
    g.fillStyle = 'rgba(255,255,255,0.3)'; g.fillRect(14, 24, 16, 44); g.fillRect(74, 24, 16, 44);
    g.strokeStyle = '#e8e4da'; g.lineWidth = 3; g.strokeRect(14, 24, 40, 44); g.strokeRect(74, 24, 40, 44);
    g.fillStyle = '#d9d4c6'; g.fillRect(0, h - 20, w, 20);
  });
  const bm = new THREE.MeshStandardMaterial({ map: booth, roughness: 0.8 });
  add(new THREE.BoxGeometry(0.62, 0.55, 0.5), bm, 0, y0 + 0.03 + 0.275, D * 0.12);
  add(new THREE.BoxGeometry(0.72, 0.05, 0.6), std(0xe9e6de), 0, y0 + 0.62, D * 0.12);
  const sign = canvasTex('berlinCPsign', 256, 64, (g, w, h) => {
    g.fillStyle = '#f7f6f0'; g.fillRect(0, 0, w, h); g.strokeStyle = '#222'; g.lineWidth = 4; g.strokeRect(2, 2, w - 4, h - 4);
    g.fillStyle = '#1a1a1a'; g.font = 'bold 30px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('미군 검문소', w / 2, h / 2 + 2);
  });
  add(new THREE.BoxGeometry(0.62, 0.15, 0.03), new THREE.MeshStandardMaterial({ map: sign, roughness: 0.7 }), 0, y0 + 0.73, D * 0.12 + 0.2);
  // 모래주머니 (초소 앞 ㄷ자)
  const bag = canvasTex('berlinBag', 128, 32, (g, w, h) => {
    const rnd = makeRng('berlinBag');
    g.fillStyle = '#6f6346'; g.fillRect(0, 0, w, h);
    for (let r = 0; r < 2; r++) for (let x = r ? -10 : 0; x < w; x += 21) { g.fillStyle = shade(0xb9a77c, 0.85 + rnd() * 0.25); g.beginPath(); g.ellipse(x + 10, r * 16 + 8, 10, 7, 0, 0, 7); g.fill(); g.fillStyle = 'rgba(0,0,0,0.2)'; g.fillRect(x + 4, r * 16 + 12, 12, 2); }
  });
  const bagM = new THREE.MeshStandardMaterial({ map: bag, bumpMap: bag, bumpScale: 1, roughness: 1 });
  add(uvMul(new THREE.BoxGeometry(1.1, 0.22, 0.2), 4, 1), bagM, 0, y0 + 0.11, D * 0.12 + 0.48);
  for (const sx of [-1, 1]) add(uvMul(new THREE.BoxGeometry(0.2, 0.22, 0.7), 2.5, 1), bagM, sx * 0.55, y0 + 0.11, D * 0.12 + 0.2);
  // 성조기
  const flag = canvasTex('berlinUS', 128, 80, (g, w, h) => {
    for (let i = 0; i < 13; i++) { g.fillStyle = i % 2 ? '#f4f4f4' : '#b8262e'; g.fillRect(0, i * h / 13, w, h / 13 + 1); }
    g.fillStyle = '#2b3a78'; g.fillRect(0, 0, w * 0.42, h * 7 / 13);
  });
  add(new THREE.CylinderGeometry(0.012, 0.015, 1.2, 6), std(0xd9d9d9, { metalness: 0.6 }), -W * 0.32, y0 + 0.6, D * 0.2);
  add(new THREE.PlaneGeometry(0.36, 0.22), new THREE.MeshStandardMaterial({ map: flag, side: THREE.DoubleSide }), -W * 0.32 + 0.18, y0 + 1.06, D * 0.2);
  // 경고판 (네 언어 표지판 느낌: 굵은 한글 + 작은 줄)
  const warn = canvasTex('berlinWarn', 256, 160, (g, w, h) => {
    g.fillStyle = '#fbfaf4'; g.fillRect(0, 0, w, h); g.strokeStyle = '#111'; g.lineWidth = 6; g.strokeRect(3, 3, w - 6, h - 6);
    g.fillStyle = '#111'; g.textAlign = 'center'; g.font = 'bold 26px sans-serif'; g.fillText('여기서부터', w / 2, 40); g.fillText('미국 구역을 벗어납니다', w / 2, 74);
    for (let i = 0; i < 3; i++) g.fillRect(30, 96 + i * 18, w - 60, 8);
  });
  for (const sx of [-1, 1]) add(new THREE.CylinderGeometry(0.015, 0.015, 0.7, 6), std(0x333333), W * 0.3 + sx * 0.2, y0 + 0.35, D * 0.28);
  add(new THREE.BoxGeometry(0.62, 0.38, 0.02), new THREE.MeshStandardMaterial({ map: warn, roughness: 0.7 }), W * 0.3, y0 + 0.72, D * 0.28);
  // 그라피티 장벽 조각 (뒤쪽 한 줄)
  const top = std(0xbdb9ae, { roughness: 0.9 });
  for (let i = 0; i < 6; i++) wallSegment(add, graffitiMat(i), top, -W * 0.45 + 0.21 + i * 0.43, -D * 0.4, 0);
}

// =================== 가장자리 큰 랜드마크 ===================
// 베를린 TV 타워: 세 갈래 받침 + 가늘어지는 콘크리트 기둥 + 은빛 구(면 분할·전망창 띠) + 빨강·흰 안테나
function fernsehturm(L, city) {
  const G = new THREE.Group(), add = adder(G);
  const conc = canvasTex('berlinTVconc', 128, 256, (g, w, h) => {
    const rnd = makeRng('berlinTVconc');
    g.fillStyle = '#d3d2cc'; g.fillRect(0, 0, w, h);
    for (let x = 0; x < w; x += 16) { g.fillStyle = `rgba(0,0,0,${0.04 + rnd() * 0.05})`; g.fillRect(x, 0, 2, h); }
    for (let y = 0; y < h; y += 32) { g.fillStyle = 'rgba(0,0,0,0.08)'; g.fillRect(0, y, w, 2); }
    for (let i = 0; i < 1200; i++) { g.fillStyle = `rgba(0,0,0,${rnd() * 0.05})`; g.fillRect(rnd() * w, rnd() * h, 2, 2); }
  });
  const cm = new THREE.MeshStandardMaterial({ map: conc, roughness: 0.85 });
  // 받침 건물 (접힌 지붕 전시관)
  const pav = canvasTex('berlinTVpav', 256, 64, (g, w, h) => { g.fillStyle = '#e8e8e4'; g.fillRect(0, 0, w, h); for (let x = 0; x < w; x += 16) { g.fillStyle = '#3a4550'; g.fillRect(x + 2, 18, 12, 40); g.fillStyle = 'rgba(255,255,255,0.2)'; g.fillRect(x + 2, 18, 5, 40); } });
  const pm = new THREE.MeshStandardMaterial({ map: pav, roughness: 0.6 });
  add(uvMul(new THREE.CylinderGeometry(4.2, 4.4, 1.1, 6, 1, true), 6, 1), pm, 0, 0.55, 0).material.side = THREE.DoubleSide;
  for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2 + Math.PI / 6, r = add(new THREE.ConeGeometry(1.9, 0.9, 3), std(0xb9bcbf, { roughness: 0.6 }), Math.cos(a) * 3.0, 1.4, Math.sin(a) * 3.0); r.rotation.y = -a; }
  // 세 갈래 다리
  for (let i = 0; i < 3; i++) {
    const a = i / 3 * Math.PI * 2 + Math.PI / 2, c = Math.cos(a), s = Math.sin(a);
    const leg = add(new THREE.BoxGeometry(0.6, 6.4, 1.3), cm, c * 1.95, 3.0, s * 1.95);
    leg.lookAt(c * 1.1, 6.1, s * 1.1); leg.rotateX(Math.PI / 2);
  }
  add(uvMul(new THREE.CylinderGeometry(0.85, 1.35, 20, 20), 3, 4), cm, 0, 10, 0);
  // 구
  const ball = canvasTex('berlinTVball', 256, 128, (g, w, h) => {
    g.fillStyle = '#b9c0c6'; g.fillRect(0, 0, w, h);
    const rnd = makeRng('berlinTVball');
    for (let y = 0; y < h; y += 8) for (let x = (y / 8) % 2 ? -8 : 0; x < w; x += 16) {
      g.fillStyle = shade(0xb9c0c6, 0.82 + rnd() * 0.3); g.beginPath(); g.moveTo(x, y + 8); g.lineTo(x + 8, y); g.lineTo(x + 16, y + 8); g.fill();
    }
    g.strokeStyle = 'rgba(60,70,80,0.5)'; g.lineWidth = 1; for (let x = 0; x < w; x += 8) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, h); g.stroke(); }
  });
  add(new THREE.SphereGeometry(2.7, 32, 20), new THREE.MeshStandardMaterial({ map: ball, metalness: 0.65, roughness: 0.3 }), 0, 22, 0);
  const win = canvasTex('berlinTVwin', 256, 32, (g, w, h) => { const rnd = makeRng('berlinTVwin'); g.fillStyle = '#20262c'; g.fillRect(0, 0, w, h); for (let x = 0; x < w; x += 12) { g.fillStyle = rnd() < 0.3 ? '#f2d58a' : '#4c5e70'; g.fillRect(x + 1, 6, 10, h - 12); } });
  add(new THREE.CylinderGeometry(2.73, 2.73, 0.75, 32, 1, true), new THREE.MeshStandardMaterial({ map: win, emissiveMap: win, emissive: 0x887755, roughness: 0.3 }), 0, 22.3, 0);
  add(uvMul(new THREE.CylinderGeometry(0.55, 0.7, 3.4, 14), 2, 1), cm, 0, 25.6, 0);
  const red = std(0xd23a2e, { roughness: 0.5 }), white = std(0xf2f2f0, { roughness: 0.5 });
  for (let i = 0; i < 7; i++) add(new THREE.CylinderGeometry(0.32 - i * 0.03, 0.34 - i * 0.03, 1.0, 10), i % 2 ? white : red, 0, 27.8 + i * 1.0, 0);
  const beacon = add(new THREE.SphereGeometry(0.16, 8, 6), new THREE.MeshBasicMaterial({ color: 0xff3a2e }), 0, 34.5, 0); beacon.castShadow = false;
  return G;
}
// 독일 국회의사당: 석조 본관 + 네 모서리 탑 + 앞 기둥 현관·박공·현판 + 유리 돔(갈빗대·가운데 거울 깔때기) + 독일 국기
function reichstag(L, city) {
  const G = new THREE.Group(), add = adder(G);
  const base = 0xcdbf9c;
  const fac = facadeMat('berlinReich', { wall: base, cols: 4, rows: 2, win: 'arch', ww: 0.4, wh: 0.62, pilaster: true, key: true, glass: '#3e4955', lit: 0.12 });
  const stone = ashlarMat('berlinReich', base), trim = std(0xd9cdb0, { roughness: 0.8 }), flute = fluteMat(base);
  const W = 10, D = 6, H = 2.6;
  add(sbox(W + 0.4, 0.4, D + 0.4, 0.8, 0.8), stone, 0, 0.2, 0);
  add(sbox(W, H, D, 2.5, 1.3), fac, 0, 0.4 + H / 2, 0);
  cornice(add, trim, W, D, 0.4 + H, 0, 0, 0.1);
  add(sbox(W - 0.3, 0.3, D - 0.3, 0.8, 0.8), stone, 0, 0.4 + H + 0.35, 0);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const x = sx * (W / 2 - 0.8), z = sz * (D / 2 - 0.8);
    add(sbox(1.8, H + 1.3, 1.8, 1.3, 1.3), fac, x, 0.4 + (H + 1.3) / 2, z);
    cornice(add, trim, 1.8, 1.8, 0.4 + H + 1.3, x, z, 0.08);
    add(new THREE.BoxGeometry(1.4, 0.3, 1.4), stone, x, 0.4 + H + 1.6, z);
    if (sz > 0) {
      add(new THREE.CylinderGeometry(0.03, 0.03, 1.4, 6), std(0xdddddd), x, 0.4 + H + 2.4, z);
      const fl = canvasTex('berlinDE', 96, 60, (g, w, h) => { ['#111111', '#d0212a', '#f2c230'].forEach((c, i) => { g.fillStyle = c; g.fillRect(0, i * h / 3, w, h / 3 + 1); }); });
      add(new THREE.PlaneGeometry(0.8, 0.5), new THREE.MeshStandardMaterial({ map: fl, side: THREE.DoubleSide }), x + 0.4, 0.4 + H + 2.85, z);
    }
  }
  // 앞(남쪽) 현관
  const pz = D / 2 + 0.55;
  add(sbox(3.6, 0.4, 1.4, 0.8, 0.8), stone, 0, 0.2, pz);
  for (let i = 0; i < 5; i++) add(new THREE.BoxGeometry(3.6, 0.08, 0.25), stone, 0, 0.04 + i * 0.08, pz + 0.7 + 0.6 - i * 0.12);
  columns(add, flute, trim, 6, -1.5, 1.5, pz + 0.45, 0.4, H, 0.13);
  add(sbox(3.6, 0.4, 1.1, 0.8, 0.8), stone, 0, 0.4 + H + 0.2, pz);
  const ins = canvasTex('berlinInscr', 256, 32, (g, w, h) => { g.fillStyle = shade(base, 0.95); g.fillRect(0, 0, w, h); g.fillStyle = '#5a4a30'; g.font = 'bold 20px Georgia,serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('DEM DEUTSCHEN VOLKE', w / 2, h / 2 + 1); });
  add(new THREE.PlaneGeometry(3.2, 0.32), new THREE.MeshStandardMaterial({ map: ins, roughness: 0.8 }), 0, 0.4 + H + 0.2, pz + 0.556);
  add(pediment(3.8, 0.8, 1.1), trim, 0, 0.4 + H + 0.4, pz);
  // 유리 돔
  const dy = 0.4 + H + 0.5;
  add(new THREE.CylinderGeometry(2.0, 2.0, 0.3, 32), trim, 0, dy + 0.15, 0);
  const gl = canvasTex('berlinDomeGlass', 128, 64, (g, w, h) => { g.fillStyle = '#a9c4d6'; g.fillRect(0, 0, w, h); g.strokeStyle = '#e8eef2'; g.lineWidth = 1.5; for (let x = 0; x < w; x += 8) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, h); g.stroke(); } for (let y = 0; y < h; y += 8) { g.beginPath(); g.moveTo(0, y); g.lineTo(w, y); g.stroke(); } });
  const glass = new THREE.MeshStandardMaterial({ map: gl, transparent: true, opacity: 0.55, metalness: 0.4, roughness: 0.1, side: THREE.DoubleSide, depthWrite: false });
  add(new THREE.SphereGeometry(1.9, 28, 14, 0, Math.PI * 2, 0, Math.PI / 2), glass, 0, dy + 0.3, 0).castShadow = false;
  const steel = std(0xdfe4e8, { metalness: 0.7, roughness: 0.3 });
  for (let i = 0; i < 12; i++) { const rib = add(new THREE.TorusGeometry(1.9, 0.035, 4, 16, Math.PI / 2), steel, 0, dy + 0.3, 0); rib.rotation.set(0, i / 12 * Math.PI * 2, 0); }
  for (const t of [0.35, 0.65, 0.88]) add(new THREE.TorusGeometry(1.9 * Math.cos(Math.asin(t)), 0.03, 4, 32).rotateX(Math.PI / 2), steel, 0, dy + 0.3 + 1.9 * t, 0);
  add(new THREE.ConeGeometry(0.75, 1.6, 16).rotateX(Math.PI), std(0xe6eaee, { metalness: 0.9, roughness: 0.15 }), 0, dy + 1.2, 0);
  return G;
}
// 오버바움 다리: 붉은 벽돌 아치 다리 + 위층 지하철 고가 아케이드 + 가운데 성탑 2개 + 노란 U반 열차
function oberbaum(L, city) {
  const G = new THREE.Group(), add = adder(G), Rw = (city.S.river || { w: 7 }).w, len = Rw + 3.2;
  const brick = brickMat('ob', '#a24a32'), trim = std(0xcbbd9e, { roughness: 0.8 }), slate = std(0x4c5560, { roughness: 0.6, metalness: 0.2 });
  // 아래 아치 몸체 (강을 건너는 방향 = z)
  const arches = (h0, h1, n, aw, thick) => {
    const s = new THREE.Shape(); s.moveTo(-len / 2, h0); s.lineTo(len / 2, h0); s.lineTo(len / 2, h1); s.lineTo(-len / 2, h1); s.closePath();
    for (let i = 0; i < n; i++) {
      const c = -len / 2 + (i + 0.5) * len / n, hole = new THREE.Path(), top = h0 + (h1 - h0) * 0.62;
      hole.moveTo(c - aw / 2, h0); hole.lineTo(c - aw / 2, top - aw / 2); hole.absarc(c, top - aw / 2, aw / 2, Math.PI, 0, true); hole.lineTo(c + aw / 2, h0); hole.closePath();
      s.holes.push(hole);
    }
    const g = new THREE.ExtrudeGeometry(s, { depth: thick, bevelEnabled: false, curveSegments: 10 }); g.translate(0, 0, -thick / 2); g.rotateY(Math.PI / 2); uvMul(g, 0.8, 0.8);
    return g;
  };
  add(arches(-0.6, 0.55, 5, 1.3, 3.0), brick, 0, 0, 0);
  add(new THREE.BoxGeometry(3.2, 0.06, len), std(0x55585d), 0, 0.58, 0);
  for (const sx of [-1, 1]) for (let z = -len / 2 + 0.15; z < len / 2; z += 0.3) add(new THREE.BoxGeometry(0.14, 0.14, 0.14), brick, sx * 1.5, 0.62 + (Math.round(z * 10) % 6 ? 0 : 0.06), z);   // 흉벽 톱니
  // 위층 U반 고가 (북쪽 반: +x 쪽)
  add(arches(0.55, 1.75, 11, 0.55, 0.9), brick, 1.05, 0, 0);
  add(new THREE.BoxGeometry(1.0, 0.1, len), trim, 1.05, 1.8, 0);
  const ub = canvasTex('berlinUbahn', 128, 32, (g, w, h) => { g.fillStyle = '#f2c230'; g.fillRect(0, 0, w, h); for (let x = 6; x < w; x += 20) { g.fillStyle = '#2b3138'; g.fillRect(x, 6, 14, 12); } g.fillStyle = '#d9a91c'; g.fillRect(0, h - 6, w, 6); });
  const um = new THREE.MeshStandardMaterial({ map: ub, roughness: 0.5 });
  for (const z of [-1.5, 0.9]) add(new THREE.BoxGeometry(0.5, 0.42, 2.2), um, 1.05, 2.06, z);
  // 성탑 2개 (가운데, 양옆)
  for (const sx of [-1, 1]) {
    const x = sx * 1.85;
    add(sbox(0.75, 3.6, 0.75, 0.8, 0.8), brick, x, 1.2, 0);
    for (let i = 0; i < 4; i++) add(new THREE.PlaneGeometry(0.16, 0.36), std(0x2a2522), x + sx * 0.38 + sx * 0.001, 1.7 + i * 0.5, 0).rotation.y = sx * Math.PI / 2;
    add(new THREE.BoxGeometry(0.9, 0.12, 0.9), trim, x, 3.06, 0);
    for (const [ox, oz] of [[-0.35, -0.35], [0.35, -0.35], [-0.35, 0.35], [0.35, 0.35]]) add(new THREE.BoxGeometry(0.18, 0.22, 0.18), brick, x + ox, 3.23, oz);
    add(new THREE.ConeGeometry(0.5, 1.5, 4).rotateY(Math.PI / 4), slate, x, 3.9, 0);
    add(new THREE.ConeGeometry(0.03, 0.4, 6), gold(), x, 4.8, 0);
  }
  // 강물 속 교각
  for (let i = 1; i < 5; i++) add(new THREE.BoxGeometry(3.3, 0.8, 0.5), trim, 0, -0.5, -len / 2 + i * len / 5);
  return G;
}

export default {
  build,
  field: { brandenburg, siegessaeule, berlinerdom, checkpoint },
  edge: {
    fernsehturm: { r: 7, build: fernsehturm },
    reichstag: { r: 7, build: reichstag },
    oberbaum: { r: 4, build: oberbaum }
  },
  gate: { wall: 0x9a9184, cap: 0xb7ad9c }, water: 0x6f9294, riverWall: 0x928a7a, riverWalk: 0x8e8b84, riverTrees: true,
  bridges: [[-40, 'arch', 0x3f5f7a], [8, 'stone', 0xb9ad94], [74, 'plain', null]]
};
