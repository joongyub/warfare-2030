// 스테이지 4: 도쿄 (신주쿠·시부야 격자 + 야마노테선 고리 + 시부야 스크램블 교차로)
// 좌표: x = 동(+)·서(-), z = 남(+)·북(-). 전투 구역 x -36~36, z -24~24
// 본 도로: 서쪽 신주쿠에서 야스쿠니도리(맨 윗줄)로 들어와 동쪽 끝에서 꺾어 신주쿠도리로 되돌아옴 →
//   서쪽에서 야마노테선을 따라 크게 휘어(반타원) 남쪽 아오야마도리로 → 동쪽 끝에서 메이지도리로 올라가
//   시부야 스크램블 교차로를 지나고 → 가부키초 골목 격자를 톱니처럼 꺾어 돌아 → 고리 안쪽 연합 지휘부
// 갈래 길: 도겐자카(동쪽, 비스듬히 스크램블 교차로를 X자로 가로지른 뒤 아오야마도리에 합류),
//   오모테산도(북쪽, 야스쿠니도리를 가로질러 신주쿠도리에 합류)
window.GF = window.GF || {};
GF.STAGES = GF.STAGES || {};

(function () {
  // 야마노테선 반타원: 중심 (-14, 2.5), 가로 반지름 19, 세로 반지름 14.5 (위 → 서쪽 → 아래)
  const loop = [];
  for (let a = -90 - 15; a >= -270 + 15; a -= 15) {
    const r = a * Math.PI / 180;
    loop.push([+(-14 + Math.cos(r) * 19).toFixed(2), +(2.5 + Math.sin(r) * 14.5).toFixed(2)]);
  }
  const main = [
    [-36, -21], [30, -21], [30, -12], [-14, -12],          // 야스쿠니도리 → 신주쿠도리
    ...loop,                                                // 야마노테선 고리 (서쪽으로 크게 휨)
    [-14, 17], [30, 17], [30, -2],                          // 아오야마도리 → 메이지도리 (스크램블 교차로)
    [22, -2], [22, 8], [14, 8], [14, -2], [6, -2], [6, 8], [-2, 8], [-2, -2], [-10, -2], [-10, 6]   // 가부키초 골목 톱니 → 지휘부
  ];

  GF.STAGES.tokyo = {
    id: 'tokyo', no: 4,
    name: '도쿄', nameEn: 'TOKYO', alias: '에도시', title: '시부야 방어전',
    briefing: '부카니스탄 기동군이 신주쿠 야스쿠니도리, 도겐자카, 오모테산도 세 입구로 도쿄 도심에 몰려온다. 적은 야마노테선 고리를 돌아 시부야 스크램블 교차로와 가부키초 골목을 지나 고리 안쪽 연합 지휘부로 향한다.',
    seed: 'tokyo-2030',
    lives: 20, startMoney: 750, hpScale: 0.28, hpQuad: 0.011, bossHp: 0.4,
    bounds: { x0: -36, x1: 36, z0: -24, z1: 24 },
    gate: main[0], base: [-10, 7.2],
    theme: { city: 'tokyo', ground: 'plaza', groundTint: 0xdfe0e2, edge: 0xb4b6b8, hedge: 0x3f6a3a },
    streetFront: { depth: 0.55, gap: [5, 9] },
    parkTrees: 70,
    route: [
      { id: 'Y', name: '야스쿠니도리', sharp: true, pts: main }
    ],
    branches: [
      // 도겐자카: 동쪽 입구 → 비스듬히 메이지도리를 X자로 가로지름(스크램블 교차로 (30,9)) → 아오야마도리 합류
      { id: 'D', name: '도겐자카', sharp: true, fromWave: 4, gate: [36, 3], pts: [[36, 3], [22, 17]] },
      // 오모테산도: 북쪽 입구 → 야스쿠니도리를 가로질러 신주쿠도리에 합류
      { id: 'O', name: '오모테산도', sharp: true, fromWave: 9, gate: [8, -24], pts: [[8, -24], [8, -12]] }
    ],
    airEntry: 'withGround',
    blockers: [
      { kind: 'landmark', id: 'shibuya109', label: '시부야 109', x: 26, z: 2.9, w: 3.4, d: 4.0, y: 4.4 },
      { kind: 'landmark', id: 'tokyostation', label: '도쿄역', x: -20, z: 10.2, w: 7.0, d: 3.0, y: 3.0 },
      { kind: 'landmark', id: 'sensoji', label: '센소지 · 가미나리몬', x: -20, z: -16.5, w: 5.0, d: 4.2, y: 5.6 },
      { kind: 'landmark', id: 'kabukiza', label: '가부키자', x: 17, z: -16.5, w: 4.6, d: 3.6, y: 2.6 }
    ],
    river: { z: -35, w: 7, kind: 'tokyo' },
    landmarks: [
      { id: 'tokyotower', label: '도쿄 타워', x: 47, z: -6, y: 17 },
      { id: 'skytree', label: '도쿄 스카이트리', x: 22, z: -60, y: 34 },
      { id: 'tocho', label: '도쿄도청', x: -48, z: -10, y: 13 },
      { id: 'fuji', label: '후지산', x: -120, z: -150, y: 42 },
      { id: 'river', label: '스미다강', x: -30, z: -31.8, y: 0.3 }
    ],
    waves: [
      'apc 17', 'inf 38', 'apc 19 drone 15', 'apc 21 inf 30', 'drone 32 apc 17',
      'tank 7 apc 25', 'inf 59 drone 28', 'tank 12 apc 30', 'drone 51 apc 28', 'heli 6 tank 10 apc 30',
      'apc 53 inf 51', 'drone 64 tank 13', 'tank 19 apc 40', 'heli 11 drone 51', 'apc 64 tank 13',
      'inf 102 heli 8', 'drone 89 apc 51', 'tank 25 heli 12', 'apc 85 drone 74 tank 17', 'boss 1 tank 21 apc 64 drone 53'
    ],
    autoNextSec: 10
  };
})();
