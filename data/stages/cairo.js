// 스테이지 7: 카이로 (나일강 방어전)
// 좌표: x = 동(+)·서(-), z = 남(+)·북(-). 전투 구역 x -40~40, z -26~26
// 본 도로 1구간(부드러운 곡선) = 기자에서 오는 피라미드 사막 도로: 서쪽 입구에서 북쪽 줄을 따라 출렁이며 동쪽 끝까지,
//   크게 U턴해 두 번째 줄로 서쪽까지 되돌아옴
// 본 도로 2구간(직각 골목) = 칸 엘칼릴리 시장 미로: 남북으로 길게 오르내리는 골목 6줄(지그재그) → 남쪽 지휘부
// 갈래 길: 알아즈하르 거리(북쪽, 사막 도로를 가로질러 둘째 줄에 합류, 5웨이브부터),
//   살라딘 성채 길(동쪽, 꺾어 올라가 사막 도로 둘째 줄 동쪽 끝에 합류, 10웨이브부터)
window.GF = window.GF || {};
GF.STAGES = GF.STAGES || {};

(function () {
  // 사막 도로 두 줄: 같은 위상으로 출렁여 줄 사이 간격(9)이 그대로 유지됨
  const XS = [-26, -20, -14, -8, -2, 4, 10, 16, 22, 28];
  const wob = (x) => +(0.9 * Math.sin(Math.PI * (x + 26) / 27)).toFixed(2);
  const R1 = -21, R2 = -12;
  const desert = [[-40, -17], [-36, -18.2], [-31, -20.6]]
    .concat(XS.map((x) => [x, +(R1 + wob(x)).toFixed(2)]))
    .concat([[32.6, -20.2], [35, -16.5], [32.6, -12.8]])
    .concat(XS.slice().reverse().map((x) => [x, +(R2 + wob(x)).toFixed(2)]));
  // 칸 엘칼릴리 골목: 북쪽 끝 -3, 남쪽 끝 21.5 사이를 오르내림 (골목 간격 8)
  const COLS = [-31, -23, -15, -7, 1, 9, 17], TOP = -3, BOT = 21.5;
  // 골목 점: 이전 골목 끝 → 옆 골목 시작 (같은 z) → 옆 골목 끝, 마지막 골목은 지휘부(19.5)에서 끝
  const M2 = [[-26, R2], [-31, R2], [-31, BOT]];
  for (let i = 1; i < COLS.length; i++) {
    const zEnd = i % 2 === 1 ? TOP : BOT, zStart = i % 2 === 1 ? BOT : TOP;
    M2.push([COLS[i], zStart]);
    M2.push([COLS[i], i === COLS.length - 1 ? 19.5 : zEnd]);
  }

  GF.STAGES.cairo = {
    id: 'cairo', no: 7,
    name: '카이로', nameEn: 'CAIRO', alias: '나일시', title: '나일강 방어전',
    briefing: '부카니스탄 사막군이 기자 피라미드 쪽 사막 도로로 몰려와 칸 엘칼릴리 시장의 꼬불꼬불한 골목 미로를 파고든다. 5웨이브부터 북쪽 알아즈하르 거리, 10웨이브부터 동쪽 살라딘 성채 길로도 쳐들어오니 무함마드 알리 모스크 옆 지휘부를 끝까지 지켜라.',
    seed: 'cairo-2030',
    lives: 20, startMoney: 800, hpScale: 0.26, hpQuad: 0.0105, bossHp: 0.38,
    bounds: { x0: -40, x1: 40, z0: -26, z1: 26 },
    gate: desert[0], base: [17, 19.5],
    theme: { city: 'cairo', ground: 'plaza', groundTint: 0xf0dcb2, edge: 0xc9b089, hedge: 0x5d7a3a },
    route: [
      { id: 'D', name: '피라미드 사막 도로', pts: desert },
      { id: 'K', name: '칸 엘칼릴리 골목', sharp: true, pts: M2 }
    ],
    branches: [
      { id: 'A', name: '알아즈하르 거리', sharp: true, fromWave: 5, gate: [22, -26], pts: [[22, -26], [22, R2 + wob(22)]] },
      { id: 'S', name: '살라딘 성채 길', sharp: true, fromWave: 10, gate: [40, -4], pts: [[40, -4], [28, -4], [28, R2]] }
    ],
    airEntry: 'withGround',
    blockers: [
      { kind: 'landmark', id: 'alimosque', label: '무함마드 알리 모스크', x: 33.5, z: 3.5, w: 6, d: 5, y: 6.6 },
      { kind: 'landmark', id: 'egmuseum', label: '이집트 박물관', x: 30.5, z: 16.5, w: 5.6, d: 3.6, y: 2.6 },
      { kind: 'landmark', id: 'khan', label: '칸 엘칼릴리 시장', x: -11, z: 9.5, w: 3.4, d: 8, y: 1.8 },
      { kind: 'landmark', id: 'obelisk', label: '오벨리스크', x: -12, z: -15.6, w: 2.2, d: 2.2, y: 5.2 }
    ],
    river: { z: -39, w: 8, kind: 'cairo' },
    landmarks: [
      { id: 'pyramids', label: '기자 피라미드', x: -62, z: -14, y: 12 },
      { id: 'cairotower', label: '카이로 타워', x: 54, z: -30, y: 21 },
      { id: 'river', label: '나일강', x: -8, z: -36.6, y: 0.3 }
    ],
    waves: [
      'apc 20', 'inf 44', 'apc 22 drone 18', 'apc 25 inf 35', 'drone 37 apc 20',
      'tank 9 apc 30', 'inf 69 drone 32', 'tank 14 apc 35', 'drone 60 apc 32', 'heli 7 tank 11 apc 35',
      'apc 62 inf 60', 'drone 74 tank 15', 'tank 22 apc 47', 'heli 12 drone 60', 'apc 74 tank 15',
      'inf 119 heli 10', 'drone 104 apc 60', 'tank 30 heli 14', 'apc 99 drone 87 tank 20', 'boss 1 tank 25 apc 74 drone 62'
    ],
    autoNextSec: 10
  };
})();
