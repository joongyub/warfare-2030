// 전설의 영웅 (영웅 모집으로 뽑아 배치하는 특수 무기)
//   무기와 같은 규칙(사거리·피해·연사·강화)으로 싸우지만 DPS가 훨씬 높고, 장군마다 고유 몸짓(제스처)과 공격 방식이 있음
//   모델은 코드로 만든 작은 인물상: 받침대 + 사람(어깨·팔꿈치 관절) + 모자·소품 + 뒤 깃발. 얼굴은 +x 쪽을 봄
import * as THREE from 'three';

// shot: bombrun 폭격기 융단폭격 / volley 총통 일제 포격 / musket 조총 일제 사격(여러 명) / broadside 전열함 현측 포격
//       carrier 함재기 유도탄(여러 명, 공중 포함) / finest 중포 일격 + 주변 감속
export const HEROES = {
  // legend: 최상위 등급(빛나는 테두리·무지개 받침 고리). DPS 가장 높음
  limbaegeun: { name: '임배근', short: '임배근', nation: '대한민국', title: '비숑을 품은 무적의 사나이', color: '#ffffff', legend: true,
    shot: 'bark', range: 10.5, dmg: 300, rate: 1.2, salvo: 8, splash: 3.0, hits: ['ground', 'air'],
    role: '비숑 음파 짖기', desc: '근육질 팔에 하얀 비숑을 안고 있음. 비숑을 적 쪽으로 내밀면 왈왈! 짖는 음파가 날아가 목표 주변 적 8명에게 큰 피해를 주고 잠깐 멈춰 세움(공중 포함)', gesture: '비숑을 품에 안고 있다가 두 팔로 번쩍 내밀면 비숑이 왈왈 짖음' },
  leejunhak: { name: '이준학', short: '이준학', nation: '대한민국', title: '벨트 하나로 전선을 지키는 키다리', color: '#3a6ea5', legend: true,
    shot: 'belt', range: 9.5, dmg: 300, rate: 1.2, salvo: 8, splash: 3.0, hits: ['ground', 'air'],
    role: '바지 벨트 채찍', desc: '흰 티셔츠에 청바지를 입은 키 큰 동양 남자. 바지 벨트를 풀어 머리 위로 휘두르면 짝! 찰싹! 두 번 내리쳐 목표 주변 적 8명에게 큰 피해를 주고 잠깐 멈춰 세움(공중 포함). 공격력은 임배근과 같음', gesture: '한 손으로 흘러내리는 바지를 붙잡고, 다른 손으로 벨트를 머리 위로 돌렸다가 내리침' },
  kimdeokhun: { name: '김덕훈', short: '김덕훈', nation: '대한민국', title: '길리슈트 속에 숨은 특수부대 저격수', color: '#5b6b2e', legend: true,
    shot: 'snipe', range: 16, dmg: 300, rate: 1.2, salvo: 8, hits: ['ground', 'air'],
    role: 'Kar98 관통 저격', desc: '풀잎 가닥이 덮인 길리슈트와 두건, 조준경 달린 Kar98 볼트액션 소총. 아주 먼 거리에서 한 발을 쏘면 총알이 일직선으로 날아가 줄 선 적 8명까지 관통(공중 포함). 공격력은 임배근·이준학과 같음', gesture: '소총을 어깨에 견착해 조준경을 들여다보다 쏘고, 반동 뒤 노리쇠를 당겨 장전' },
  simjaegwan: { name: '심재관', short: '심재관', nation: '대한민국', title: '뿔테 너머로 모든 걸 꿰뚫어 보는 키다리', color: '#222222', legend: true,
    shot: 'glasses', range: 10.5, dmg: 300, rate: 1.2, salvo: 8, splash: 3.0, hits: ['ground', 'air'],
    role: '뿔테안경 섬광 광선', desc: '검정 뿔테안경을 쓴 키 큰 동양 남자. 검지로 안경을 쓱 올리면 렌즈가 번쩍이며 두 줄기 광선이 날아가 목표 주변 적 8명을 두 번 태우고 잠깐 눈부시게 해 멈춰 세움(공중 포함). 공격력은 임배근·이준학과 같음', gesture: '검지로 뿔테안경을 밀어 올리면 렌즈가 번쩍임' },
  macarthur: { name: '더글러스 맥아더', short: '맥아더', nation: '미국', title: '인천상륙작전의 지휘관', color: '#c9a24a',
    shot: 'bombrun', range: 10, dmg: 120, rate: 0.55, salvo: 5, splash: 1.9, hits: ['ground'],
    role: '폭격기 융단 폭격', desc: '선글라스와 옥수수 파이프. 손끝으로 가리킨 곳에 폭격기 편대가 폭탄 5발을 줄지어 떨어뜨림', gesture: '파이프를 물다가 손을 뻗어 목표를 가리킴' },
  yisunsin: { name: '이순신', short: '이순신', nation: '조선', title: '23전 23승 불패의 수군통제사', color: '#c0392b',
    shot: 'arrows', range: 10, dmg: 100, rate: 0.9, salvo: 3, splash: 0.9, hits: ['ground', 'air'],
    role: '각궁 불화살 연사', desc: '투구와 두정갑, 각궁과 화살통. 시위를 끝까지 당겼다 놓으면 불화살 3발이 서로 다른 적 3명에게 꽂혀 불붙음(공중 포함)', gesture: '각궁을 앞으로 뻗고 시위를 뺨까지 당겼다가 놓음' },
  hideyoshi: { name: '도요토미 히데요시', short: '히데요시', nation: '일본', title: '전국시대를 통일한 천하인', color: '#d4a017',
    shot: 'musket', range: 7.8, dmg: 38, rate: 2.2, salvo: 5, hits: ['ground', 'air'],
    role: '조총 부대 일제 사격', desc: '금빛 햇살 투구와 군배 부채. 부채를 휘두를 때마다 조총 일제 사격으로 적 5명을 동시에 맞힘(공중 포함)', gesture: '군배 부채를 머리 위로 들어 좌우로 휘두름' },
  nelson: { name: '허레이쇼 넬슨', short: '넬슨 제독', nation: '영국', title: '트라팔가르 해전의 제독', color: '#1f3a6e',
    shot: 'broadside', range: 11, dmg: 62, rate: 0.5, salvo: 8, splash: 1.3, hits: ['ground'],
    role: '전열함 현측 일제 포격', desc: '이각모와 금색 견장, 비어 있는 오른 소매. 망원경으로 살피다 가리키면 포탄 8발이 연달아 쏟아짐', gesture: '외팔로 망원경을 눈에 대고 살피다 망원경으로 목표를 가리킴' },
  nimitz: { name: '체스터 니미츠', short: '니미츠 제독', nation: '미국', title: '태평양 함대 사령관', color: '#2c4f86',
    shot: 'carrier', range: 12, dmg: 140, rate: 0.75, salvo: 4, splash: 0.8, hits: ['ground', 'air'],
    role: '항모 함재기 유도탄', desc: '흰 정모와 쌍안경. 쌍안경으로 적을 찾은 뒤 경례하면 유도탄 4발이 서로 다른 적 4명을 노림(공중 포함)', gesture: '쌍안경으로 살피다 거수경례 후 손을 뻗음' },
  churchill: { name: '윈스턴 처칠', short: '처칠', nation: '영국', title: '결코 항복하지 않는 전시 총리', color: '#7a1f2b',
    shot: 'finest', range: 9, dmg: 300, rate: 0.42, salvo: 1, splash: 3.0, slow: 0.25, hits: ['ground'],
    role: '중포 일격 + 결의의 연설', desc: '중절모·나비넥타이·시가·지팡이. V자 승리 손짓마다 거대한 포탄 한 발, 사거리 안 적은 늘 25% 느려짐', gesture: '시가를 피우다 오른손을 번쩍 들어 V자 승리 손짓' }
};
export const HERO_IDS = Object.keys(HEROES);
// 뽑기 확률: 전설(legend) 영웅은 일반 영웅의 절반 (2026-10-08 사용자 요청)
export const heroWeight = (id) => (HEROES[id].legend ? 0.5 : 1);
export const heroChance = (id) => heroWeight(id) / HERO_IDS.reduce((s, x) => s + heroWeight(x), 0);
export function rollHero() {
  let r = Math.random() * HERO_IDS.reduce((s, x) => s + heroWeight(x), 0);
  for (const id of HERO_IDS) { r -= heroWeight(id); if (r < 0) return id; }
  return HERO_IDS[HERO_IDS.length - 1];
}
// 뽑기 규칙. lucky = [받는 보급, 확률 %]
export const GACHA = {
  heroCost: 600,                // 영웅 모집 1회 (10명 중 무작위 1명, 전설 영웅은 일반의 절반 확률. 이미 있는 영웅이면 강화)
  heroMaxRefund: 250,           // 이미 최대 강화된 영웅이 또 나오면 돌려주는 보급
  luckyCost: 100, luckyPerWave: 3,
  lucky: [[30, 20], [60, 25], [100, 25], [150, 18], [300, 10], [600, 2]]
};

// 게임 규칙에 끼워 넣기: GF.WEAPONS['hero_<id>'] 로 등록 (강화·정보창·사거리를 무기와 똑같이 씀)
export function registerHeroes() {
  for (const [id, H] of Object.entries(HEROES)) {
    GF.WEAPONS['hero_' + id] = Object.assign({ name: H.name, altName: H.name, rarity: '전설', cost: GACHA.heroCost, hero: id }, H);
  }
}

// ---------- 모델 ----------
const cache = {};
const M = (c, o = {}) => cache[c + JSON.stringify(o)] || (cache[c + JSON.stringify(o)] = new THREE.MeshStandardMaterial(Object.assign({ color: c, roughness: 0.7 }, o)));
function canvasTex(key, w, h, draw) {
  if (cache['t' + key]) return cache['t' + key];
  const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  return (cache['t' + key] = t);
}
function mesh(parent, geo, m, x = 0, y = 0, z = 0) { const o = new THREE.Mesh(geo, m); o.position.set(x, y, z); o.castShadow = true; parent.add(o); return o; }

// 사람 뼈대: 다리·몸통·머리 + 팔(어깨 → 팔꿈치 → 손). 팔은 아래(-y)로 늘어진 상태가 0, rotation.z(+) 로 앞으로 듦
function humanoid(o) {
  const fig = new THREE.Group();
  const skin = M(0xe3b48f), coat = M(o.coat), pants = M(o.pants), boots = M(o.boots || 0x1d1b19, { roughness: 0.4 });
  for (const s of [-1, 1]) {
    mesh(fig, new THREE.CylinderGeometry(0.036, 0.032, 0.28, 8), pants, 0, 0.17, s * 0.055);
    mesh(fig, new THREE.BoxGeometry(0.1, 0.05, 0.06), boots, 0.015, 0.025, s * 0.055);
  }
  if (o.skirt) mesh(fig, new THREE.CylinderGeometry(0.12, o.skirt, 0.16, 12), M(o.skirtColor || o.coat), 0, 0.3, 0);
  const torso = mesh(fig, new THREE.BoxGeometry(0.15, 0.27, o.wide || 0.25), coat, 0, 0.455, 0);
  if (o.belt) mesh(fig, new THREE.BoxGeometry(0.155, 0.03, (o.wide || 0.25) + 0.005), M(o.belt, { roughness: 0.4 }), 0, 0.345, 0);
  mesh(fig, new THREE.CylinderGeometry(0.035, 0.04, 0.05, 8), skin, 0, 0.605, 0);
  const head = new THREE.Group(); head.position.set(0, 0.67, 0); fig.add(head);
  mesh(head, new THREE.SphereGeometry(0.068, 14, 10), skin, 0, 0, 0).scale.set(1, 1.08, 0.95);
  mesh(head, new THREE.SphereGeometry(0.014, 6, 4), skin, 0.066, -0.005, 0);   // 코
  for (const s of [-1, 1]) mesh(head, new THREE.SphereGeometry(0.008, 6, 4), M(0x1a1410), 0.06, 0.018, s * 0.024);   // 눈
  const arm = (s) => {
    const sh = new THREE.Group(); sh.position.set(0, 0.575, s * 0.155); fig.add(sh);
    mesh(sh, new THREE.SphereGeometry(0.042, 8, 6), coat, 0, 0, 0);
    mesh(sh, new THREE.CylinderGeometry(0.032, 0.03, 0.17, 8), coat, 0, -0.085, 0);
    const el = new THREE.Group(); el.position.y = -0.17; sh.add(el);
    mesh(el, new THREE.CylinderGeometry(0.029, 0.026, 0.15, 8), coat, 0, -0.075, 0);
    mesh(el, new THREE.CylinderGeometry(0.03, 0.03, 0.02, 8), M(o.cuff || o.coat), 0, -0.14, 0);
    const hand = new THREE.Group(); hand.position.y = -0.165; el.add(hand);
    mesh(hand, new THREE.SphereGeometry(0.028, 8, 6), o.gloves ? M(o.gloves) : skin, 0, 0, 0);
    return { sh, el, hand };
  };
  return { fig, torso, head, R: arm(1), L: arm(-1), coat };
}
const set = (j, z, x = 0, ez = 0) => { j.sh.rotation.set(x, 0, z); j.el.rotation.set(0, 0, ez); };
const lerp = (a, b, k) => a + (b - a) * k;
const ease = (k) => k * k * (3 - 2 * k);

// 연기 한 줄기 (파이프·시가)
function smoke(parent, x, y, z) {
  const m = new THREE.MeshBasicMaterial({ color: 0xdddddd, transparent: true, opacity: 0.5, depthWrite: false });
  const puffs = [0, 1, 2].map((i) => { const p = new THREE.Mesh(new THREE.SphereGeometry(0.02, 6, 4), m.clone()); p.position.set(x, y, z); parent.add(p); return p; });
  return (t) => puffs.forEach((p, i) => { const k = (t * 0.6 + i / 3) % 1; p.position.set(x + k * 0.04, y + k * 0.18, z + Math.sin(k * 6 + i) * 0.02); p.scale.setScalar(0.6 + k * 2.2); p.material.opacity = 0.45 * (1 - k); });
}

// 깃발 그림
const FLAGS = {
  limbaegeun: (g, w, h) => { const gr = g.createLinearGradient(0, 0, w, h); gr.addColorStop(0, '#fff6d8'); gr.addColorStop(0.5, '#ffd36a'); gr.addColorStop(1, '#ffb0e0'); g.fillStyle = gr; g.fillRect(0, 0, w, h); g.fillStyle = '#fff'; const paw = (x, y) => { g.beginPath(); g.ellipse(x, y + 6, 11, 9, 0, 0, 7); g.fill(); for (const [dx, dy] of [[-11, -6], [-4, -12], [4, -12], [11, -6]]) { g.beginPath(); g.arc(x + dx, y + dy, 4.5, 0, 7); g.fill(); } }; g.strokeStyle = '#c99a2e'; g.lineWidth = 3; paw(w / 2, h / 2 + 2); g.strokeRect(2, 2, w - 4, h - 4); },
  leejunhak: (g, w, h) => { g.fillStyle = '#2f5d8f'; g.fillRect(0, 0, w, h); g.fillStyle = '#8fb6dc'; for (let x = 0; x < w; x += 6) g.fillRect(x, 0, 2, h); g.fillStyle = '#5a3418'; g.fillRect(0, h * 0.42, w, h * 0.18); g.fillStyle = '#e8c14a'; g.fillRect(w * 0.4, h * 0.36, w * 0.2, h * 0.3); g.fillStyle = '#5a3418'; g.fillRect(w * 0.45, h * 0.44, w * 0.1, h * 0.14); },
  kimdeokhun: (g, w, h) => { g.fillStyle = '#3e4a22'; g.fillRect(0, 0, w, h); for (let i = 0; i < 40; i++) { g.fillStyle = ['#5f6b34', '#2c3618', '#76713f', '#4a5a2a'][i % 4]; g.fillRect((i * 37) % w, (i * 23) % h, 10, 6); } g.strokeStyle = '#f2f2e8'; g.lineWidth = 3; g.beginPath(); g.arc(w / 2, h / 2, h * 0.3, 0, 7); g.moveTo(w / 2 - h * 0.42, h / 2); g.lineTo(w / 2 + h * 0.42, h / 2); g.moveTo(w / 2, h * 0.08); g.lineTo(w / 2, h * 0.92); g.stroke(); },
  simjaegwan: (g, w, h) => { g.fillStyle = '#f4f1e8'; g.fillRect(0, 0, w, h); g.strokeStyle = '#111'; g.lineWidth = 7; for (const cx of [w * 0.3, w * 0.7]) { g.beginPath(); g.ellipse(cx, h / 2, w * 0.16, h * 0.24, 0, 0, 7); g.stroke(); } g.beginPath(); g.moveTo(w * 0.46, h / 2 - 3); g.lineTo(w * 0.54, h / 2 - 3); g.stroke(); g.fillStyle = 'rgba(120,200,255,.55)'; for (const cx of [w * 0.3, w * 0.7]) { g.beginPath(); g.ellipse(cx, h / 2, w * 0.13, h * 0.2, 0, 0, 7); g.fill(); } },
  macarthur: (g, w, h) => { for (let i = 0; i < 7; i++) { g.fillStyle = i % 2 ? '#f4f4f4' : '#b8262e'; g.fillRect(0, i * h / 7, w, h / 7 + 1); } g.fillStyle = '#2b3a78'; g.fillRect(0, 0, w * 0.45, h * 4 / 7); g.fillStyle = '#fff'; for (let y = 0; y < 3; y++) for (let x = 0; x < 4; x++) g.fillRect(6 + x * 13, 6 + y * 12, 3, 3); },
  yisunsin: (g, w, h) => { g.fillStyle = '#efe6cf'; g.fillRect(0, 0, w, h); g.strokeStyle = '#7a1c1c'; g.lineWidth = 8; g.strokeRect(4, 4, w - 8, h - 8); g.fillStyle = '#111'; g.font = `bold ${h * 0.62}px serif`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('帥', w / 2, h / 2 + 3); },
  hideyoshi: (g, w, h) => { g.fillStyle = '#7a1a1a'; g.fillRect(0, 0, w, h); g.fillStyle = '#e8b830'; const gourd = (cx, cy, s) => { g.beginPath(); g.arc(cx, cy, s, 0, 7); g.fill(); g.beginPath(); g.arc(cx, cy - s * 1.3, s * 0.65, 0, 7); g.fill(); }; gourd(w / 2, h * 0.62, h * 0.2); },
  nelson: (g, w, h) => { const c = ['#d0312d', '#f2c14e', '#1f3d8f', '#f4f4f4']; for (let y = 0; y < 2; y++) for (let x = 0; x < 3; x++) { g.fillStyle = c[(x + y * 2) % 4]; g.fillRect(x * w / 3, y * h / 2, w / 3 + 1, h / 2 + 1); } g.strokeStyle = '#111'; g.lineWidth = 2; g.strokeRect(1, 1, w - 2, h - 2); },
  nimitz: (g, w, h) => { g.fillStyle = '#1d2f5a'; g.fillRect(0, 0, w, h); g.fillStyle = '#fff'; for (let i = 0; i < 4; i++) { const cx = w * (0.2 + i * 0.2), cy = h * 0.5; g.beginPath(); for (let k = 0; k < 10; k++) { const a = -Math.PI / 2 + k * Math.PI / 5, r = k % 2 ? 4 : 10; g.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r); } g.fill(); } },
  churchill: (g, w, h) => { g.fillStyle = '#1f3d8f'; g.fillRect(0, 0, w, h); g.strokeStyle = '#fff'; g.lineWidth = 12; g.beginPath(); g.moveTo(0, 0); g.lineTo(w, h); g.moveTo(w, 0); g.lineTo(0, h); g.stroke(); g.strokeStyle = '#d0312d'; g.lineWidth = 5; g.stroke(); g.lineWidth = 16; g.strokeStyle = '#fff'; g.beginPath(); g.moveTo(w / 2, 0); g.lineTo(w / 2, h); g.moveTo(0, h / 2); g.lineTo(w, h / 2); g.stroke(); g.lineWidth = 9; g.strokeStyle = '#d0312d'; g.stroke(); }
};

export function makeHero(id) {
  const H = HEROES[id];
  const root = new THREE.Group(), yaw = new THREE.Group(); root.add(yaw);
  const glow = [], spin = [], beams = [];
  // 받침대: 검은 대리석 + 금테 + 빛나는 고리 (전설 등급 표시)
  mesh(root, new THREE.CylinderGeometry(0.34, 0.38, 0.1, 28), M(0x2a2c30, { roughness: 0.35, metalness: 0.3 }), 0, 0.05, 0);
  mesh(root, new THREE.CylinderGeometry(0.35, 0.35, 0.02, 28), M(0xd8aa45, { metalness: 0.9, roughness: 0.25 }), 0, 0.1, 0);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.018, 6, 40), new THREE.MeshStandardMaterial({ color: 0xffd36a, emissive: 0xffb020, emissiveIntensity: 1.2 }));
  ring.rotation.x = -Math.PI / 2; ring.position.y = 0.03; root.add(ring); glow.push(ring);
  if (H.legend) {   // 최상위 등급: 흰빛 고리 하나 더 + 빛기둥
    ring.material = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff0c0, emissiveIntensity: 1.6 });
    const r2 = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.014, 6, 44), new THREE.MeshStandardMaterial({ color: 0xffb0e8, emissive: 0xff8ad8, emissiveIntensity: 1.4 }));
    r2.rotation.x = -Math.PI / 2; r2.position.y = 0.05; root.add(r2); glow.push(r2);
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.42, 1.3, 24, 1, true), new THREE.MeshBasicMaterial({ color: 0xfff2c8, alphaMap: canvasTex('beamA', 4, 64, (g, w, h) => { const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#000'); gr.addColorStop(1, '#fff'); g.fillStyle = gr; g.fillRect(0, 0, w, h); }), transparent: true, opacity: 0.13, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending }));
    beam.position.y = 0.7; root.add(beam); beams.push(beam);
  }
  // 뒤 깃발 (영웅을 따라 돌지 않음)
  const pole = mesh(root, new THREE.CylinderGeometry(0.008, 0.01, 0.9, 6), M(0xb9a46a, { metalness: 0.7, roughness: 0.3 }), -0.26, 0.55, -0.2);
  mesh(root, new THREE.SphereGeometry(0.018, 8, 6), M(0xd8aa45, { metalness: 0.9, roughness: 0.25 }), -0.26, 1.0, -0.2);
  const flag = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.2, 6, 1), new THREE.MeshStandardMaterial({ map: canvasTex('hflag' + id, 96, 64, FLAGS[id]), side: THREE.DoubleSide, roughness: 0.9 }));
  flag.geometry.translate(0.15, 0, 0); flag.position.set(-0.26, 0.86, -0.2); flag.rotation.y = 0.6; root.add(flag);
  const flagPos = flag.geometry.attributes.position, flag0 = flagPos.array.slice();
  void pole;

  const body = new THREE.Group(); body.position.y = 0.11; yaw.add(body);
  const gold = M(0xd8aa45, { metalness: 0.85, roughness: 0.3 });
  let pose = () => {}, pre = null;
  const P = { act: 0, idle: Math.random() * 10 };

  if (id === 'limbaegeun') {
    const skin = M(0xd9a47c);
    const h = humanoid({ coat: 0x18181c, pants: 0x3e4434, belt: 0x111111, boots: 0x222018, wide: 0.33 });
    body.add(h.fig);
    h.torso.scale.set(1.35, 1.04, 1);   // 두꺼운 가슴
    h.fig.traverse((o) => { if (o.isMesh && o.material === M(0xe3b48f)) o.material = skin; });
    // 민소매: 팔은 맨살, 굵은 팔뚝·어깨
    for (const [j, s] of [[h.R, 1], [h.L, -1]]) {
      j.sh.position.z = s * 0.2; j.sh.scale.set(1.45, 1, 1.45);
      j.sh.traverse((o) => { if (o.isMesh && o.material === h.coat) o.material = skin; });
      mesh(j.sh, new THREE.SphereGeometry(0.05, 10, 8), skin, 0, -0.07, 0).scale.set(1, 1.3, 1);   // 이두
    }
    for (const s of [-1, 1]) {
      mesh(h.fig, new THREE.SphereGeometry(0.075, 10, 8), skin, -0.005, 0.56, s * 0.12).scale.set(0.8, 0.55, 1);   // 승모근·어깨
      mesh(h.torso, new THREE.BoxGeometry(0.03, 0.08, 0.12), M(0x222228), 0.1, 0.06, s * 0.065);   // 가슴 근육
    }
    mesh(h.fig, new THREE.CylinderGeometry(0.05, 0.06, 0.05, 10), skin, 0, 0.6, 0);   // 굵은 목
    // 짧은 검은 머리 + 눈썹
    mesh(h.head, new THREE.SphereGeometry(0.071, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2.2), M(0x141210, { roughness: 0.9 }), -0.006, 0.012, 0);
    for (const s of [-1, 1]) mesh(h.head, new THREE.BoxGeometry(0.008, 0.008, 0.026), M(0x141210), 0.064, 0.034, s * 0.024);
    mesh(h.head, new THREE.BoxGeometry(0.006, 0.006, 0.03), M(0x8a4a3a), 0.068, -0.03, 0);   // 입
    // 하얀 비숑 (몸에 붙어 있고 팔이 감싸 안음). 얼굴은 +x
    const dog = new THREE.Group(); dog.position.set(0.15, 0.43, 0); body.add(dog);
    const fur = new THREE.MeshStandardMaterial({ color: 0xfbfbf7, roughness: 1 }), dark = M(0x0d0d0d, { roughness: 0.3 });
    const puff = (par, r, x, y, z) => mesh(par, new THREE.SphereGeometry(r, 10, 8), fur, x, y, z);
    puff(dog, 0.075, 0, 0, 0).scale.set(1.25, 0.9, 0.95);
    for (const [x, y, z] of [[0.05, 0.03, 0.04], [-0.05, 0.03, -0.04], [0.04, -0.04, -0.05], [-0.06, -0.02, 0.05], [0, 0.05, 0]]) puff(dog, 0.045, x, y, z);
    for (const s of [-1, 1]) puff(dog, 0.028, 0.07, -0.07, s * 0.035);   // 앞발
    puff(dog, 0.035, -0.1, 0.05, 0);   // 꼬리 털뭉치
    const dh = new THREE.Group(); dh.position.set(0.085, 0.085, 0); dog.add(dh);
    puff(dh, 0.068, 0, 0.01, 0);   // 둥근 솜사탕 머리
    for (const [x, y, z] of [[0.02, 0.05, 0.03], [0.02, 0.05, -0.03], [-0.02, 0.06, 0]]) puff(dh, 0.04, x, y, z);
    for (const s of [-1, 1]) puff(dh, 0.035, -0.005, -0.015, s * 0.06).scale.set(0.8, 1.3, 0.8);   // 처진 귀
    const snout = puff(dh, 0.032, 0.06, -0.012, 0);
    for (const s of [-1, 1]) mesh(dh, new THREE.SphereGeometry(0.011, 8, 6), dark, 0.058, 0.018, s * 0.026);   // 까만 눈
    mesh(dh, new THREE.SphereGeometry(0.012, 8, 6), dark, 0.093, -0.005, 0);   // 코
    const jaw = new THREE.Group(); jaw.position.set(0.06, -0.03, 0); dh.add(jaw);
    mesh(jaw, new THREE.BoxGeometry(0.035, 0.008, 0.026), M(0xe07a8a), 0.012, -0.004, 0);   // 혀
    puff(jaw, 0.018, 0.01, -0.01, 0).scale.set(1.3, 0.6, 1);
    const mouthIn = mesh(dh, new THREE.SphereGeometry(0.016, 8, 6), M(0x3a1010), 0.08, -0.03, 0); mouthIn.scale.set(1, 0.4, 1.3);
    void snout;
    // 굵은 금 목걸이
    mesh(h.torso, new THREE.TorusGeometry(0.06, 0.006, 6, 16), M(0xd8aa45, { metalness: 0.9, roughness: 0.25 }), 0.07, 0.11, 0).rotation.y = Math.PI / 2;
    pose = (t, a) => {
      // a: 1 → 0. 1~0.75 비숑을 앞으로 내밈 / 0.75~0.35 왈왈 두 번 짖음 / 이후 다시 품에
      const push = a > 0.75 ? ease((1 - a) / 0.25) : a > 0.35 ? 1 : ease(a / 0.35);
      const bark = a <= 0.75 && a > 0.35 ? Math.abs(Math.sin((0.75 - a) / 0.4 * Math.PI * 2)) : 0;
      const breathe = Math.sin(t * 1.6) * 0.012;
      // 품에 안기: 팔을 앞으로 굽혀 비숑 밑을 받침. 내밀기: 팔을 펴고 비숑을 앞·위로
      for (const [j, s] of [[h.R, 1], [h.L, -1]]) { j.sh.rotation.set(s * lerp(0.12, 0.1, push), s * lerp(0.75, 0.4, push), lerp(0.35, 1.35, push)); j.el.rotation.set(0, 0, lerp(1.35, 0.3, push)); }
      dog.position.set(lerp(0.15, 0.3, push), lerp(0.43, 0.55, push) + breathe + bark * 0.015, 0);
      dog.rotation.z = Math.sin(t * 2) * 0.04 + bark * 0.12;
      dh.rotation.z = bark * 0.35; dh.rotation.y = Math.sin(t * 0.9) * 0.3 * (1 - push);
      jaw.rotation.z = -bark * 0.7; mouthIn.visible = bark > 0.15;
      body.rotation.z = lerp(0, -0.08, push) + breathe; h.head.rotation.z = lerp(0.05, 0.18, push);
      h.torso.scale.y = 1.04 + breathe;
    };
  } else if (id === 'leejunhak') {
    // 키 큰 동양 남자: 흰 티셔츠 + 청바지. 왼손은 흘러내리는 바지를 잡고, 오른손에 푼 가죽 벨트 (마디 8개 사슬이라 채찍처럼 휨)
    const h = humanoid({ coat: 0xf2f2ee, pants: 0x34557f, boots: 0xeeeeee, wide: 0.25 });
    body.add(h.fig);
    h.fig.scale.set(1, 1.18, 1);   // 키다리
    const skin = M(0xe8be98);
    h.fig.traverse((o) => { if (o.isMesh && o.material === M(0xe3b48f)) o.material = skin; });
    for (const j of [h.R, h.L]) j.el.traverse((o) => { if (o.isMesh && o.material === h.coat) o.material = skin; });   // 반팔: 아래팔은 맨살
    mesh(h.fig, new THREE.BoxGeometry(0.152, 0.035, 0.255), M(0xa9c8e8), 0, 0.33, 0);   // 바지가 내려가 살짝 보이는 하늘색 속옷 밴드
    mesh(h.fig, new THREE.BoxGeometry(0.16, 0.07, 0.26), M(0x34557f), 0, 0.29, 0);    // 청바지 허리
    // 검은 머리 (앞머리 내림) + 가는 눈 + 입
    mesh(h.head, new THREE.SphereGeometry(0.072, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2.1), M(0x111111, { roughness: 0.8 }), -0.004, 0.01, 0);
    mesh(h.head, new THREE.BoxGeometry(0.02, 0.03, 0.11), M(0x111111, { roughness: 0.8 }), 0.058, 0.04, 0);
    for (const s of [-1, 1]) mesh(h.head, new THREE.BoxGeometry(0.006, 0.006, 0.024), M(0x111111), 0.065, 0.024, s * 0.026);
    mesh(h.head, new THREE.BoxGeometry(0.006, 0.006, 0.03), M(0x8a4a3a), 0.067, -0.032, 0);
    // 벨트: 오른손에서 늘어진 가죽 마디 + 끝에 금색 버클
    const leather = M(0x5a3418, { roughness: 0.5 }), segs = [];
    let par = h.R.hand;
    for (let i = 0; i < 8; i++) {
      const sg = new THREE.Group(); sg.position.y = i ? -0.05 : -0.02; par.add(sg); segs.push(sg);
      mesh(sg, new THREE.BoxGeometry(0.008, 0.052, 0.028), leather, 0, -0.025, 0);
      par = sg;
    }
    const buckle = mesh(par, new THREE.BoxGeometry(0.012, 0.04, 0.045), M(0xe8c14a, { metalness: 0.85, roughness: 0.25 }), 0, -0.065, 0);
    void buckle;
    pose = (t, a) => {
      // a: 1 → 0. 1~0.72 벨트를 머리 위로 / 0.72~0.3 앞으로 두 번 내리침 / 이후 내림
      const up = a > 0.72 ? ease((1 - a) / 0.28) : a > 0.3 ? 1 : ease(a / 0.3);
      const lash = a <= 0.72 && a > 0.3 ? Math.sin((0.72 - a) / 0.42 * Math.PI * 2) : 0;
      const sway = Math.sin(t * 1.8) * 0.06;
      set(h.R, lerp(0.3, 2.6, up) - Math.max(0, lash) * 1.6 + Math.max(0, -lash) * 0.3, lerp(0.15, -0.2, up), lerp(0.25, 0.1, up));
      set(h.L, 0.25, 0.25, 1.55);   // 왼손은 허리춤에서 바지를 꽉
      segs.forEach((sg, i) => { sg.rotation.z = up < 0.05 ? sway * (i + 1) * 0.3 : (lash * 0.55 - up * 0.25) * (1 + i * 0.12) + Math.sin(t * 9 - i * 0.7) * 0.12 * up; });
      body.rotation.z = lerp(0, -0.06, up) - Math.max(0, lash) * 0.08; h.head.rotation.z = lerp(0.03, 0.15, up);
    };
  } else if (id === 'kimdeokhun') {
    // 특수부대 저격수: 길리슈트(풀잎 가닥 덮개) + 두건 + Kar98 볼트액션 소총(나무 개머리·조준경). 소총은 +x 를 겨눔
    const h = humanoid({ coat: 0x4a5a2a, pants: 0x3e4a22, boots: 0x2a2418, gloves: 0x2c2c22, wide: 0.27 });
    body.add(h.fig);
    h.fig.traverse((o) => { if (o.isMesh && o.material === M(0xe3b48f)) o.material = M(0x8a6a4a); });   // 위장 크림 바른 얼굴
    const greens = [0x4a5a2a, 0x5f6b34, 0x3b4a22, 0x76713f, 0x2f3a1a].map((c) => M(c, { roughness: 1 }));
    let seed = 7; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    const tuft = (par, n, sx, sy, sz, oy = 0) => {
      for (let i = 0; i < n; i++) {
        const u = rnd() * Math.PI * 2, v = rnd() * 2 - 1;
        const f = mesh(par, new THREE.BoxGeometry(0.006, 0.05 + rnd() * 0.05, 0.022), greens[i % greens.length], Math.cos(u) * sx, oy + v * sy, Math.sin(u) * sz);
        f.rotation.set(rnd() - 0.5, u, (rnd() - 0.5) * 1.2);
      }
    };
    tuft(h.torso, 46, 0.085, 0.13, 0.14);
    for (const j of [h.R, h.L]) { tuft(j.sh, 8, 0.04, 0.08, 0.04, -0.08); tuft(j.el, 6, 0.035, 0.07, 0.035, -0.07); }
    for (const s of [-1, 1]) { const leg = new THREE.Group(); leg.position.set(0, 0.17, s * 0.055); h.fig.add(leg); tuft(leg, 10, 0.045, 0.12, 0.045); }
    // 두건 (얼굴만 보이게) + 풀잎
    mesh(h.head, new THREE.SphereGeometry(0.082, 14, 10, Math.PI * 0.25, Math.PI * 1.5), M(0x3e4a22, { roughness: 1 }), -0.008, 0.008, 0).rotation.y = Math.PI;
    tuft(h.head, 22, 0.075, 0.06, 0.08, 0.03);
    for (const s of [-1, 1]) mesh(h.head, new THREE.BoxGeometry(0.004, 0.012, 0.03), M(0x2a2a1a), 0.066, -0.01 + s * 0.0, s * 0.026).rotation.x = s * 0.3;   // 위장 크림 줄
    // Kar98: 나무 개머리·총몸 + 긴 총열 + 조준경 + 노리쇠 손잡이 (몸에 붙여 어깨 견착)
    const rifle = new THREE.Group(); rifle.position.set(0.05, 0.56, 0.07); body.add(rifle);
    const wood = M(0x7a4a24, { roughness: 0.55 }), steel = M(0x22252a, { metalness: 0.7, roughness: 0.35 });
    mesh(rifle, new THREE.BoxGeometry(0.2, 0.05, 0.03), wood, -0.02, -0.02, 0);                   // 개머리
    mesh(rifle, new THREE.BoxGeometry(0.06, 0.07, 0.03), wood, -0.1, -0.035, 0).rotation.z = 0.2;
    mesh(rifle, new THREE.BoxGeometry(0.34, 0.032, 0.026), wood, 0.24, -0.006, 0);                // 총몸·덮개
    mesh(rifle, new THREE.CylinderGeometry(0.008, 0.009, 0.24, 8), steel, 0.48, 0.006, 0).rotation.z = Math.PI / 2;   // 총열
    mesh(rifle, new THREE.CylinderGeometry(0.013, 0.013, 0.11, 10), steel, 0.13, 0.04, 0).rotation.z = Math.PI / 2;   // 조준경
    for (const x of [0.07, 0.19]) mesh(rifle, new THREE.CylinderGeometry(0.017, 0.017, 0.02, 10), steel, x, 0.04, 0).rotation.z = Math.PI / 2;
    const bolt = new THREE.Group(); bolt.position.set(0.09, 0.015, 0.016); rifle.add(bolt);
    mesh(bolt, new THREE.CylinderGeometry(0.004, 0.004, 0.035, 6), steel, 0, 0, 0.016).rotation.x = Math.PI / 2;
    mesh(bolt, new THREE.SphereGeometry(0.008, 8, 6), steel, 0, 0, 0.035);
    pose = (t, a) => {
      // a: 1 → 0. 쏜 순간 반동(총이 뒤·위로) → 0.65~0.35 노리쇠 뒤로 당겼다 밀기 → 다시 조준
      const kick = a > 0.85 ? (a - 0.85) / 0.15 : 0;
      const cyc = a <= 0.65 && a > 0.35 ? Math.sin((0.65 - a) / 0.3 * Math.PI) : 0;
      const breathe = Math.sin(t * 1.3) * 0.004;
      rifle.position.set(0.05 - kick * 0.05, 0.56 + breathe, 0.07); rifle.rotation.z = kick * 0.25;
      bolt.rotation.x = -cyc * 1.2; bolt.position.x = 0.09 - cyc * 0.03;
      set(h.R, 1.25 + kick * 0.2, -0.35, 1.1);            // 오른손: 손잡이·방아쇠
      set(h.L, 1.5 + kick * 0.25, 0.3 - cyc * 0.4, 0.15 + cyc * 0.9);   // 왼손: 앞 덮개 받침 → 장전할 때 노리쇠로
      h.head.rotation.z = -0.12 + kick * 0.1; h.head.position.x = 0.02;
      body.rotation.z = -0.05 + kick * 0.04;
    };
  } else if (id === 'simjaegwan') {
    // 키 큰 동양 남자: 남색 니트 가디건 + 흰 셔츠 + 베이지 바지 + 검정 뿔테안경. 오른손 검지로 안경을 밀어 올림
    const h = humanoid({ coat: 0x1f2c4a, pants: 0xb9a888, boots: 0x2a2018, belt: 0x3a2a1a, wide: 0.25 });
    body.add(h.fig);
    h.fig.scale.set(1, 1.2, 1);   // 키다리
    const skin = M(0xe6bc96);
    h.fig.traverse((o) => { if (o.isMesh && o.material === M(0xe3b48f)) o.material = skin; });
    mesh(h.torso, new THREE.BoxGeometry(0.02, 0.2, 0.07), M(0xf4f4f0), 0.068, 0.02, 0);   // 셔츠 앞섶
    mesh(h.torso, new THREE.BoxGeometry(0.04, 0.03, 0.1), M(0xf4f4f0), 0.05, 0.125, 0);   // 셔츠 깃
    for (let i = 0; i < 4; i++) mesh(h.torso, new THREE.SphereGeometry(0.007, 6, 4), M(0xd8d0b0), 0.077, 0.08 - i * 0.05, 0.04);   // 가디건 단추
    // 단정한 검은 머리 (가르마 + 앞머리 살짝)
    mesh(h.head, new THREE.SphereGeometry(0.073, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2.1), M(0x121212, { roughness: 0.8 }), -0.004, 0.012, 0);
    mesh(h.head, new THREE.BoxGeometry(0.03, 0.025, 0.09), M(0x121212, { roughness: 0.8 }), 0.05, 0.05, 0.012).rotation.x = 0.2;
    mesh(h.head, new THREE.BoxGeometry(0.006, 0.006, 0.03), M(0x8a4a3a), 0.067, -0.035, 0);   // 입
    // 검정 뿔테안경: 두꺼운 테 두 개 + 코다리 + 다리, 렌즈는 공격할 때 번쩍임
    const frame = M(0x0a0a0a, { roughness: 0.35 }), glasses = new THREE.Group(); glasses.position.set(0.07, 0.015, 0); h.head.add(glasses);
    const lensM = new THREE.MeshStandardMaterial({ color: 0x9fc8e8, emissive: 0xbfe8ff, emissiveIntensity: 0, transparent: true, opacity: 0.55, roughness: 0.1 });
    for (const s of [-1, 1]) {
      const rim = mesh(glasses, new THREE.TorusGeometry(0.022, 0.0055, 6, 16), frame, 0, 0, s * 0.027); rim.rotation.y = Math.PI / 2; rim.scale.set(1, 0.82, 1);
      const lens = mesh(glasses, new THREE.CircleGeometry(0.021, 14), lensM, 0.001, 0, s * 0.027); lens.rotation.y = Math.PI / 2; lens.scale.set(1, 0.82, 1);
      mesh(glasses, new THREE.BoxGeometry(0.075, 0.006, 0.006), frame, -0.04, 0.006, s * 0.05);   // 다리
    }
    mesh(glasses, new THREE.BoxGeometry(0.006, 0.006, 0.014), frame, 0, 0.006, 0);   // 코다리
    for (const s of [-1, 1]) mesh(h.head, new THREE.BoxGeometry(0.005, 0.005, 0.02), M(0x111111), 0.069, 0.016, s * 0.026);   // 렌즈 너머 눈
    pose = (t, a) => {
      // a: 1 → 0. 1~0.7 검지를 안경으로 / 0.7~0.3 안경 밀어 올리고 렌즈 번쩍 / 이후 팔 내림
      const up = a > 0.7 ? ease((1 - a) / 0.3) : a > 0.3 ? 1 : ease(a / 0.3);
      const flash = a <= 0.7 && a > 0.3 ? Math.sin((0.7 - a) / 0.4 * Math.PI) : 0;
      // 오른팔: 굽혀서 손이 얼굴 앞(안경)으로
      h.R.sh.rotation.set(lerp(0.05, -0.55, up), lerp(0, -0.25, up), lerp(0.15, 1.75, up)); h.R.el.rotation.set(0, 0, lerp(0.2, 2.35, up));
      set(h.L, 0.12, -0.05, 0.15);
      h.L.sh.rotation.x = 0.1;
      glasses.position.y = 0.015 + flash * 0.008;
      lensM.emissiveIntensity = flash * 3; lensM.opacity = 0.55 + flash * 0.4;
      h.head.rotation.z = lerp(0.02, 0.1, up) + Math.sin(t * 0.7) * 0.02; h.head.rotation.y = Math.sin(t * 0.5) * 0.15 * (1 - up);
      body.rotation.z = lerp(0, -0.03, up);
    };
  } else if (id === 'macarthur') {
    const h = humanoid({ coat: 0xb59a6a, pants: 0xa98f62, belt: 0x5a3c22, wide: 0.24 });
    body.add(h.fig);
    // 장교 정모 (구겨진 크라운 + 챙 + 금 장식) · 선글라스 · 옥수수 파이프
    mesh(h.head, new THREE.CylinderGeometry(0.085, 0.075, 0.055, 14), M(0x6d6250), 0.005, 0.07, 0);
    mesh(h.head, new THREE.CylinderGeometry(0.095, 0.095, 0.012, 14, 1, false, -Math.PI / 2, Math.PI), M(0x1b1a18, { roughness: 0.4 }), 0.03, 0.045, 0);
    mesh(h.head, new THREE.BoxGeometry(0.01, 0.02, 0.1), gold, 0.08, 0.075, 0);
    mesh(h.head, new THREE.BoxGeometry(0.02, 0.026, 0.11), M(0x111111, { roughness: 0.1, metalness: 0.6 }), 0.066, 0.018, 0);
    const pipe = new THREE.Group(); h.R.hand.add(pipe);
    mesh(pipe, new THREE.CylinderGeometry(0.006, 0.006, 0.09, 6), M(0x3a2a1c), 0.03, 0.02, 0).rotation.z = 1.2;
    mesh(pipe, new THREE.CylinderGeometry(0.022, 0.02, 0.05, 10), M(0xe0c88a), -0.01, 0.0, 0);
    const sm = smoke(pipe, -0.01, 0.03, 0);
    for (const s of [-1, 1]) mesh(h.torso, new THREE.BoxGeometry(0.05, 0.012, 0.06), gold, 0, 0.14, s * 0.11);   // 견장 별
    pose = (t, a) => {
      const k = ease(Math.min(1, a * 1.6));   // 가리키기
      const puff = Math.max(0, Math.sin(t * 0.9)) ** 3;
      set(h.R, lerp(lerp(0.5, 0.75, puff), 1.62, k), lerp(lerp(0.15, 0.55, puff), 0.05, k), lerp(lerp(0.4, 2.15, puff), 0.05, k));
      set(h.L, 0.12, -0.12, 0.35);
      h.head.rotation.z = lerp(0.05, 0.12, k); body.rotation.z = lerp(0, -0.06, k);
      sm(t);
    };
  } else if (id === 'yisunsin') {
    const h = humanoid({ coat: 0x7a1c1c, pants: 0x2a2421, belt: 0xd8aa45, skirt: 0.17, skirtColor: 0x5e1515, cuff: 0x2a2421, wide: 0.26 });
    body.add(h.fig);
    // 두정갑 금 징 무늬 + 투구(둥근 사발 + 차양 + 붉은 상모) + 수염
    const stud = canvasTex('armor', 64, 64, (g, w) => { g.fillStyle = '#7a1c1c'; g.fillRect(0, 0, w, w); g.fillStyle = '#e0b850'; for (let y = 4; y < w; y += 10) for (let x = (y / 10) % 2 ? 9 : 4; x < w; x += 10) { g.beginPath(); g.arc(x, y, 2, 0, 7); g.fill(); } });
    h.torso.material = new THREE.MeshStandardMaterial({ map: stud, roughness: 0.6, metalness: 0.2 });
    mesh(h.head, new THREE.SphereGeometry(0.082, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), M(0x2b2b2e, { metalness: 0.6, roughness: 0.35 }), 0, 0.025, 0);
    mesh(h.head, new THREE.CylinderGeometry(0.11, 0.11, 0.008, 18), M(0x2b2b2e, { metalness: 0.6, roughness: 0.35 }), 0, 0.025, 0);
    mesh(h.head, new THREE.CylinderGeometry(0.006, 0.01, 0.08, 6), gold, 0, 0.13, 0);
    mesh(h.head, new THREE.ConeGeometry(0.03, 0.06, 8), M(0xc0261e, { roughness: 0.9 }), 0, 0.15, 0).rotation.x = Math.PI;
    for (const s of [-1, 1]) mesh(h.head, new THREE.BoxGeometry(0.02, 0.07, 0.04), M(0x2b2b2e, { metalness: 0.5 }), -0.01, -0.04, s * 0.07);
    mesh(h.head, new THREE.ConeGeometry(0.022, 0.06, 6), M(0x1a1714), 0.06, -0.07, 0).rotation.z = Math.PI;
    // 각궁 (왼손): 손 기준 -y 가 앞. 활몸은 앞으로 휜 호, 시위는 두 끝에서 당김점(nock)까지 두 줄
    const bow = new THREE.Group(); h.L.hand.add(bow);
    const BR = 0.22, BA = 2.3;
    const limb = mesh(bow, new THREE.TorusGeometry(BR, 0.009, 5, 20, BA), M(0x5a2e16, { roughness: 0.5 }), 0, BR, 0);
    limb.rotation.z = -Math.PI / 2 - BA / 2;
    mesh(bow, new THREE.CylinderGeometry(0.014, 0.014, 0.05, 6), M(0xc9a96a), 0.0, 0, 0).rotation.z = Math.PI / 2;   // 줌통
    const tipY = BR - Math.cos(BA / 2) * BR, tipX = Math.sin(BA / 2) * BR;
    const strM = M(0xf0ead8, { roughness: 0.9 }), strG = new THREE.CylinderGeometry(0.003, 0.003, 1, 4);
    const str = [mesh(bow, strG, strM), mesh(bow, strG, strM)];
    const arrow = new THREE.Group(); bow.add(arrow);
    mesh(arrow, new THREE.CylinderGeometry(0.004, 0.004, 0.36, 4), M(0xb08a52), 0, 0, 0);
    mesh(arrow, new THREE.ConeGeometry(0.012, 0.035, 5), M(0x2a2a2a, { metalness: 0.6 }), 0, -0.19, 0).rotation.z = Math.PI;
    const flame = mesh(arrow, new THREE.SphereGeometry(0.02, 6, 4), new THREE.MeshBasicMaterial({ color: 0xffa030 }), 0, -0.16, 0);
    const up = new THREE.Vector3(0, 1, 0), d3 = new THREE.Vector3();
    const setString = (draw) => {   // draw 0~1: 당긴 정도
      const ny = tipY + draw * 0.2;
      [[tipX, tipY], [-tipX, tipY]].forEach(([x, y], i) => {
        d3.set(-x, ny - y, 0); const L = d3.length();
        str[i].position.set(x / 2, (y + ny) / 2, 0); str[i].scale.set(1, L, 1); str[i].quaternion.setFromUnitVectors(up, d3.normalize());
      });
      arrow.position.set(0, ny - 0.18, 0);
    };
    // 화살통 (등)
    const quiver = mesh(h.torso, new THREE.CylinderGeometry(0.03, 0.025, 0.24, 8), M(0x3a2414), -0.1, 0.02, 0.05); quiver.rotation.x = 0.4;
    for (let i = 0; i < 4; i++) mesh(quiver, new THREE.BoxGeometry(0.004, 0.05, 0.02), M(0xeeeeee), (i - 1.5) * 0.012, 0.14, 0);
    mesh(h.fig, new THREE.CylinderGeometry(0.012, 0.012, 0.3, 6), M(0x1a1410), -0.02, 0.28, -0.14).rotation.z = 0.9;   // 환도 칼집
    pose = (t, a) => {
      // a: 1 → 0. 1~0.7 활을 들고 시위를 당김 / 0.7~0.56 겨눔 / 0.56 놓음(시위가 튕기고 오른손이 뒤로) / 이후 활을 내림
      let draw = 0, raise = 0, rel = 0;
      if (a > 0.7) { raise = ease((1 - a) / 0.3); draw = raise; }
      else if (a > 0.56) { raise = 1; draw = 1; }
      else if (a > 0.3) { raise = 1; rel = ease((0.56 - a) / 0.1 > 1 ? 1 : (0.56 - a) / 0.1); }
      else if (a > 0) { raise = a / 0.3; rel = 1; }
      const idle = Math.sin(t * 1.2) * 0.04;
      set(h.L, lerp(0.35 + idle, 1.55, raise), lerp(0, -0.12, raise), lerp(0.35, 0.0, raise));
      set(h.R, lerp(0.25, lerp(1.45, 1.35, rel), raise), lerp(0.05, lerp(0.38, 0.05, rel), raise), lerp(0.4, lerp(2.95, 2.4, rel), raise));
      setString(draw * (1 - rel));
      arrow.visible = raise > 0.4 && rel < 0.05; flame.material.color.setHSL(0.08, 1, 0.5 + Math.sin(t * 20) * 0.1);
      body.rotation.y = lerp(0, -0.25, raise);   // 활 쏘는 자세: 몸을 옆으로
      h.head.rotation.y = lerp(0, 0.25, raise);
    };
  } else if (id === 'hideyoshi') {
    const h = humanoid({ coat: 0xb8401f, pants: 0x3b2a1e, belt: 0x1d1d1d, skirt: 0.18, skirtColor: 0x3a2516, cuff: 0x1d1d1d, wide: 0.27 });
    body.add(h.fig);
    const lam = canvasTex('odoshi', 64, 64, (g, w) => { for (let y = 0; y < w; y += 8) { g.fillStyle = (y / 8) % 2 ? '#b8401f' : '#8e2d14'; g.fillRect(0, y, w, 8); g.fillStyle = '#e8c06a'; for (let x = 2; x < w; x += 8) g.fillRect(x, y + 3, 2, 2); } });
    h.torso.material = new THREE.MeshStandardMaterial({ map: lam, roughness: 0.55, metalness: 0.15 });
    for (const s of [-1, 1]) { const so = mesh(h.torso, new THREE.BoxGeometry(0.12, 0.012, 0.1), M(0x8e2d14), 0, 0.12, s * 0.15); so.rotation.x = s * 0.5; }   // 소데
    // 투구: 검은 사발 + 금빛 햇살 살 (히데요시 투구의 상징)
    mesh(h.head, new THREE.SphereGeometry(0.08, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), M(0x1d1d1d, { metalness: 0.5, roughness: 0.3 }), 0, 0.02, 0);
    for (let i = 0; i < 13; i++) { const a = -Math.PI / 2 + (i / 12 - 0.5) * 2.6; const r = mesh(h.head, new THREE.BoxGeometry(0.006, 0.17, 0.012), gold, -0.03, 0.09 + Math.cos(a + Math.PI / 2) * 0.0, 0); r.rotation.x = (i / 12 - 0.5) * 2.6; r.geometry.translate(0, 0.085, 0); r.position.y = 0.06; }
    mesh(h.head, new THREE.ConeGeometry(0.02, 0.05, 6), M(0x1a1714), 0.06, -0.075, 0).rotation.z = Math.PI;
    // 군배 부채
    const fan = new THREE.Group(); h.R.hand.add(fan);
    mesh(fan, new THREE.CylinderGeometry(0.008, 0.008, 0.12, 6), M(0x2a1a10), 0, -0.05, 0);
    const fanTex = canvasTex('gunbai', 64, 64, (g, w) => { g.fillStyle = '#1b1b1b'; g.beginPath(); g.arc(32, 32, 30, 0, 7); g.fill(); g.fillStyle = '#e8b830'; g.beginPath(); g.arc(32, 32, 12, 0, 7); g.fill(); g.strokeStyle = '#e8b830'; g.lineWidth = 3; g.beginPath(); g.arc(32, 32, 28, 0, 7); g.stroke(); });
    const fd = mesh(fan, new THREE.CircleGeometry(0.075, 20), new THREE.MeshStandardMaterial({ map: fanTex, side: THREE.DoubleSide, roughness: 0.5 }), 0, -0.17, 0); fd.rotation.y = Math.PI / 2;
    pose = (t, a) => {
      const k = ease(Math.min(1, a * 2.2));
      const wave = Math.sin(t * 16) * 0.55 * k, fanIdle = Math.sin(t * 2.2) * 0.25;
      set(h.R, lerp(0.7, 2.9, k), lerp(0.2 + fanIdle, wave, k), lerp(1.1, 0.1, k));
      set(h.L, lerp(0.15, 0.4, k), -0.25, 0.5);
      body.rotation.x = Math.sin(t * 16) * 0.04 * k;
    };
  } else if (id === 'nelson') {
    const h = humanoid({ coat: 0x1b2a4e, pants: 0xeeeae0, belt: 0xd8aa45, cuff: 0xd8aa45, skirt: 0.14, skirtColor: 0x1b2a4e, wide: 0.23 });
    body.add(h.fig);
    for (const s of [-1, 1]) { mesh(h.torso, new THREE.BoxGeometry(0.07, 0.02, 0.075), gold, 0, 0.14, s * 0.12); for (let i = 0; i < 4; i++) mesh(h.torso, new THREE.SphereGeometry(0.008, 6, 4), gold, 0.077, 0.08 - i * 0.05, s * 0.035); }
    mesh(h.torso, new THREE.BoxGeometry(0.152, 0.1, 0.06), M(0xf4f2ea), 0.002, 0.07, 0);   // 흰 조끼
    for (let i = 0; i < 3; i++) mesh(h.torso, new THREE.CylinderGeometry(0.012, 0.012, 0.006, 8).rotateZ(Math.PI / 2), [M(0xd8aa45, { metalness: 0.8 }), M(0xc0c4c8, { metalness: 0.8 }), M(0xb8262e)][i], 0.078, 0.02, -0.06 + i * 0.022);   // 훈장
    // 이각모 (가로로 쓴 반달 모자) + 금 코케이드
    const bic = mesh(h.head, new THREE.CylinderGeometry(0.13, 0.13, 0.02, 20, 1, false, 0, Math.PI), M(0x111215, { roughness: 0.5 }), 0, 0.06, 0);
    bic.rotation.set(Math.PI / 2, 0, 0); bic.scale.set(1, 1, 0.55);
    mesh(h.head, new THREE.SphereGeometry(0.016, 8, 6), gold, 0.012, 0.11, 0);
    mesh(h.head, new THREE.BoxGeometry(0.004, 0.024, 0.028), M(0x111111), 0.064, 0.02, 0.025);   // 오른 눈 안대
    // 오른팔 없음: 빈 소매를 가슴에 핀으로 고정
    h.R.sh.visible = false;
    mesh(h.torso, new THREE.CylinderGeometry(0.03, 0.03, 0.12, 8), h.coat, 0.07, 0.03, 0.07).rotation.set(0.9, 0, 1.4);
    // 망원경 (왼손)
    const tel = new THREE.Group(); h.L.hand.add(tel);
    mesh(tel, new THREE.CylinderGeometry(0.014, 0.018, 0.2, 10), M(0x8a6a3a, { metalness: 0.6, roughness: 0.3 }), 0, 0.06, 0);
    mesh(tel, new THREE.CylinderGeometry(0.02, 0.02, 0.03, 10), gold, 0, 0.16, 0);
    pose = (t, a) => {
      const k = ease(Math.min(1, a * 1.8));
      const scan = Math.sin(t * 0.7) * 0.25;
      // 평소: 망원경을 눈에(팔 앞으로 굽힘). 공격: 망원경으로 목표를 가리킴
      set(h.L, lerp(0.95, 1.6, k), lerp(0.55, 0.15, k), lerp(1.75, 0.0, k));
      h.head.rotation.y = lerp(scan * 0.4, 0, k); body.rotation.y = lerp(scan * 0.3, 0, k);
    };
  } else if (id === 'nimitz') {
    const h = humanoid({ coat: 0x1c2a44, pants: 0x1c2a44, belt: 0x111111, cuff: 0xd8aa45, wide: 0.24 });
    body.add(h.fig);
    mesh(h.torso, new THREE.BoxGeometry(0.152, 0.12, 0.05), M(0xf4f4f4), 0.002, 0.07, 0);   // 흰 셔츠
    mesh(h.torso, new THREE.BoxGeometry(0.154, 0.1, 0.012), M(0x111111), 0.002, 0.06, 0);   // 넥타이
    for (const s of [-1, 1]) for (let i = 0; i < 3; i++) mesh(h.torso, new THREE.SphereGeometry(0.008, 6, 4), gold, 0.077, 0.0 - i * 0.05, s * 0.05);
    for (let i = 0; i < 4; i++) mesh(h.torso, new THREE.BoxGeometry(0.004, 0.01, 0.024), [M(0xb8262e), M(0x2b4fa0), M(0xd8aa45), M(0x2e8b57)][i], 0.078, 0.11 - (i >> 1) * 0.014, -0.075 + (i & 1) * 0.026);
    // 흰 정모 + 검은 챙 + 금 휘장
    mesh(h.head, new THREE.CylinderGeometry(0.098, 0.078, 0.045, 16), M(0xf6f6f2, { roughness: 0.5 }), 0.005, 0.075, 0);
    mesh(h.head, new THREE.CylinderGeometry(0.08, 0.08, 0.025, 16), M(0x111111), 0.005, 0.045, 0);
    mesh(h.head, new THREE.CylinderGeometry(0.095, 0.095, 0.01, 14, 1, false, -Math.PI / 2, Math.PI), M(0x0d0d0d, { roughness: 0.2 }), 0.035, 0.035, 0);
    mesh(h.head, new THREE.SphereGeometry(0.015, 8, 6), gold, 0.08, 0.06, 0);
    // 쌍안경 (양손)
    const bino = new THREE.Group(); h.L.hand.add(bino);
    for (const s of [-1, 1]) mesh(bino, new THREE.CylinderGeometry(0.016, 0.018, 0.07, 8), M(0x222222, { roughness: 0.4 }), 0, 0.03, s * 0.022 + 0.04);
    pose = (t, a) => {
      // 공격: 0~0.4 경례 → 0.4~ 손을 뻗어 가리킴. 평소: 쌍안경을 두 손으로 눈에
      const salute = a > 0.6 ? ease(Math.min(1, (1 - a) / 0.25)) : 0, point = a > 0 && a <= 0.6 ? ease(Math.min(1, a / 0.2)) : 0;
      const look = 1 - Math.max(salute, point);
      set(h.L, lerp(0.2, 1.05, look), lerp(-0.2, 0.75, look), lerp(0.4, 1.9, look));
      let rz = lerp(0.2, 1.05, look), rx = lerp(0.2, 0.75, look), re = lerp(0.4, 1.9, look);
      if (salute) { rz = lerp(rz, 1.25, salute); rx = lerp(rx, -0.55, salute); re = lerp(re, 2.3, salute); }
      if (point) { rz = lerp(rz, 1.75, point); rx = lerp(rx, 0.05, point); re = lerp(re, 0.05, point); }
      set(h.R, rz, rx, re);
      h.head.rotation.y = Math.sin(t * 0.5) * 0.2 * look;
    };
  } else if (id === 'churchill') {
    const h = humanoid({ coat: 0x1c1c22, pants: 0x2a2a30, cuff: 0xf2f2f2, wide: 0.29 });
    body.add(h.fig);
    h.torso.scale.set(1.25, 1, 1);   // 풍채
    mesh(h.torso, new THREE.BoxGeometry(0.19, 0.11, 0.05), M(0xf4f4f4), 0, 0.075, 0);
    const bow = canvasTex('bowtie', 32, 16, (g) => { g.fillStyle = '#1f2f6e'; g.fillRect(0, 0, 32, 16); g.fillStyle = '#fff'; for (let y = 2; y < 16; y += 5) for (let x = 2; x < 32; x += 5) g.fillRect(x, y, 2, 2); });
    for (const s of [-1, 1]) { const b = mesh(h.torso, new THREE.ConeGeometry(0.02, 0.035, 4), new THREE.MeshStandardMaterial({ map: bow }), 0.098, 0.125, s * 0.017); b.rotation.x = s * Math.PI / 2; }
    mesh(h.torso, new THREE.CylinderGeometry(0.004, 0.004, 0.06, 4), M(0xd8aa45, { metalness: 0.8 }), 0.096, 0.0, 0.05).rotation.x = 1.2;   // 시곗줄
    h.head.scale.setScalar(1.12);
    // 홈부르크 중절모
    mesh(h.head, new THREE.CylinderGeometry(0.068, 0.074, 0.07, 16), M(0x121214, { roughness: 0.6 }), 0, 0.085, 0);
    mesh(h.head, new THREE.CylinderGeometry(0.11, 0.11, 0.01, 18), M(0x121214, { roughness: 0.6 }), 0, 0.05, 0);
    mesh(h.head, new THREE.CylinderGeometry(0.0705, 0.0745, 0.018, 16), M(0x3a3a40), 0, 0.06, 0);
    // 시가 (입에 문 채)
    mesh(h.head, new THREE.CylinderGeometry(0.009, 0.009, 0.075, 6), M(0x5a3a22), 0.09, -0.03, 0.01).rotation.z = 1.35;
    const sm = smoke(h.head, 0.125, -0.025, 0.01);
    // 지팡이 (왼손)
    mesh(h.L.hand, new THREE.CylinderGeometry(0.007, 0.007, 0.36, 6), M(0x2a1a10, { roughness: 0.4 }), 0.0, -0.17, 0);
    // V자 손가락 (오른손)
    const vv = new THREE.Group(); h.R.hand.add(vv);
    for (const s of [-1, 1]) { const f = mesh(vv, new THREE.CylinderGeometry(0.008, 0.008, 0.06, 6), M(0xe3b48f), 0, -0.035, s * 0.012); f.geometry.translate(0, 0, 0); f.rotation.x = s * 0.35; }
    pose = (t, a) => {
      const k = ease(Math.min(1, a * 1.7));
      set(h.R, lerp(0.15, 2.85, k), lerp(-0.1, -0.35, k), lerp(0.3, 0.05, k));
      set(h.L, 0.35, -0.05, 0.3);
      vv.visible = k > 0.3;
      body.rotation.z = lerp(0, -0.05, k); h.head.rotation.z = lerp(0, 0.12, k);
      sm(t);
    };
  }

  // 공격 순간 몸짓이 크게 보이도록 act 1 → 0 으로 줄어듦 (game.js 가 fire 때 act = 1)
  const muzzle = new THREE.Object3D(); muzzle.position.set(...({ limbaegeun: [0.45, 0.75], leejunhak: [0.35, 1.1], simjaegwan: [0.12, 0.95], kimdeokhun: [0.66, 0.68] }[id] || [0.3, 0.9]), 0); yaw.add(muzzle);
  const animate = (dt, t) => {
    P.act = Math.max(0, P.act - dt * 0.9);
    pose(t + P.idle, P.act);
    for (const b of beams) { b.rotation.y += dt * 0.8; b.material.opacity = 0.1 + Math.sin(t * 3) * 0.05; }
    for (let i = 0; i < flagPos.count; i++) { const x = flag0[i * 3]; flagPos.setZ(i, Math.sin(t * 5 + x * 22) * 0.025 * (x / 0.3)); }
    flagPos.needsUpdate = true;
  };
  pose(0, 0);
  return { root, yaw, pitch: yaw, muzzle, spin, glow, animate, fire: () => { P.act = 1; }, hero: id, P };
}
