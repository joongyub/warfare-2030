// 스테이지 6: 베를린 (티어가르텐 · 6월 17일 거리 · 운터 덴 린덴)
// 좌표: x = 동(+)·서(-), z = 남(+)·북(-). 전투 구역 x -38~38, z -26~26 (서울보다 큼)
// 본 도로: 북서쪽 샤를로텐부르크 입구에서 블록 격자를 5줄 지그재그로 꺾어 내려옴.
//   셋째 줄 = 6월 17일 거리: 그로서 슈테른 로터리(가운데 전승기념탑)를 북쪽으로 반 바퀴 돈 뒤
//   브란덴부르크 문 바로 옆을 지나 운터 덴 린덴으로 → 넷째 줄은 블록 하나를 ㄷ자로 돌아 → 남동쪽 지휘부
// 갈래 길: 베를린 장벽(북동, 날카로운 지그재그, 4웨이브부터) · 쿠담 거리(서, 10웨이브부터, 그로서 슈테른 앞에서 합류)
window.GF = window.GF || {};
GF.STAGES = GF.STAGES || {};

(function () {
  // 꺾인 길 → 모서리 양옆에 점을 하나씩 더 찍어 곡선이 모서리에서 출렁이지 않게 (파리와 같은 방식)
  const PAD = 1.1;
  function poly(corners) {
    const out = [corners[0]];
    for (let i = 1; i < corners.length; i++) {
      const [ax, az] = corners[i - 1], [bx, bz] = corners[i], L = Math.hypot(bx - ax, bz - az), ux = (bx - ax) / L, uz = (bz - az) / L;
      if (i > 1 && L > PAD * 2.5) out.push([+(ax + ux * PAD).toFixed(2), +(az + uz * PAD).toFixed(2)]);
      if (i < corners.length - 1 && L > PAD * 2.5) out.push([+(bx - ux * PAD).toFixed(2), +(bz - uz * PAD).toFixed(2)]);
      out.push([bx, bz]);
    }
    return out;
  }
  // 그로서 슈테른 로터리: 중심 (SX, SZ), 반지름 SR. 서쪽 → 북쪽 → 동쪽으로 반 바퀴
  const SX = -14, SZ = -1, SR = 4.4;
  const star = [];
  for (let a = 180; a <= 360; a += 22.5) star.push([+(SX + Math.cos(a * Math.PI / 180) * SR).toFixed(2), +(SZ + Math.sin(a * Math.PI / 180) * SR).toFixed(2)]);
  const Z1 = -22, Z2 = -11.5, Z3 = -1, Z4 = 12, Z5 = 22;
  const trunk = [].concat(
    poly([[-38, Z1], [4, Z1], [4, Z2], [-33, Z2], [-33, Z3], [SX - SR - 3, Z3]]),
    [[SX - SR - 1.2, Z3]], star, [[SX + SR + 1.2, Z3]],
    poly([[SX + SR + 3, Z3], [33, Z3], [33, Z4], [-2, Z4], [-2, 6], [-12, 6], [-12, Z4], [-33, Z4], [-33, Z5], [28.6, Z5]])
  );

  GF.STAGES.berlin = {
    id: 'berlin', no: 6,
    name: '베를린', nameEn: 'BERLIN', alias: '슈프레시', title: '브란덴부르크 방어전',
    briefing: '부카니스탄 기갑군이 샤를로텐부르크 대로와 쿠담 거리, 옛 베를린 장벽 길을 따라 티어가르텐으로 몰려온다. 그로서 슈테른 로터리를 돌아 브란덴부르크 문 옆 운터 덴 린덴을 지나는 적을 막아 남동쪽 연합 지휘부를 지켜라.',
    seed: 'berlin-2030',
    lives: 20, startMoney: 800, hpScale: 0.26, hpQuad: 0.0105, bossHp: 0.42,
    bounds: { x0: -38, x1: 38, z0: -26, z1: 26 },
    gate: trunk[0], base: [30, Z5],
    theme: { city: 'berlin', ground: 'plaza', groundTint: 0xc9ccd0, edge: 0xa9a7a2, hedge: 0x3d6634 },
    parkTrees: 110,
    route: [{ id: 'S17', name: '6월 17일 거리', pts: trunk }],
    branches: [
      // 베를린 장벽: 북쪽 끝에서 들쭉날쭉 지그재그로 내려와 운터 덴 린덴(셋째 줄)에 합류
      { id: 'MAUER', name: '베를린 장벽', sharp: true, fromWave: 4, gate: [24, -26], pts: [[24, -26], [24, -21.5], [33, -17.5], [14.5, -13], [33, -8.5], [21, Z3]] },
      // 쿠담 거리: 서쪽 끝에서 들어와 그로서 슈테른 바로 앞에서 합류
      { id: 'KUDAMM', name: '쿠담 거리', sharp: true, fromWave: 10, gate: [-38, 5.5], pts: [[-38, 5.5], [-25, 5.5], [-25, Z3]] }
    ],
    airEntry: 'withGround',
    blockers: [
      { kind: 'landmark', id: 'siegessaeule', label: '전승기념탑', x: SX, z: SZ, w: 2.6, d: 2.6, y: 6.6 },
      { kind: 'landmark', id: 'brandenburg', label: '브란덴부르크 문', x: 5, z: -4.6, w: 5, d: 1.8, y: 3.4 },
      { kind: 'landmark', id: 'berlinerdom', label: '베를린 대성당', x: 15, z: 5.5, w: 4.2, d: 3.6, y: 4.6 },
      { kind: 'landmark', id: 'checkpoint', label: '체크포인트 찰리', x: 20, z: -21.5, w: 3, d: 2.4, y: 2.4 }
    ],
    river: { z: -42, w: 7, kind: 'berlin' },
    landmarks: [
      { id: 'reichstag', label: '독일 국회의사당', x: -6, z: -33, y: 7 },
      { id: 'fernsehturm', label: '베를린 TV 타워', x: 52, z: 2, y: 35 },
      { id: 'oberbaum', label: '오버바움 다리', x: 40, z: -42, y: 6 },
      { id: 'river', label: '슈프레강', x: -30, z: -39.6, y: 0.3 }
    ],
    waves: [
      'apc 17', 'inf 39', 'apc 20 drone 15', 'apc 22 inf 31', 'drone 33 apc 18',
      'tank 8 apc 26', 'inf 62 drone 29', 'tank 12 apc 31', 'drone 53 apc 29', 'heli 7 tank 10 apc 31',
      'apc 55 inf 53', 'drone 66 tank 13', 'tank 20 apc 42', 'heli 11 drone 53', 'apc 66 tank 13',
      'inf 106 heli 9', 'drone 92 apc 53', 'tank 26 heli 12', 'apc 88 drone 77 tank 18', 'boss 1 tank 22 apc 66 drone 55'
    ],
    autoNextSec: 10
  };
})();
