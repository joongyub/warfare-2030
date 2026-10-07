// 스테이지 3: 파리 (센강 강변길 + 에펠탑 앞 이에나 다리 교차로 + 개선문 로터리 + 샹젤리제)
// 좌표: x = 동(+)·서(-), z = 남(+)·북(-). 전투 구역 x -32~32, z -21.6~21.6
// 본 도로: 서쪽에서 센강 강변길(케 브랑리)로 들어와 에펠탑 북쪽을 지나 동쪽으로 → 남쪽으로 꺾어 에펠탑 남쪽 길로 되돌아옴
//   → 개선문 로터리를 3/4 바퀴 → 샹젤리제를 따라 동쪽 콩코르드 광장 → 남동쪽 지휘부(루브르)
// 갈래 길(입구는 모두 지휘부에서 먼 쪽): 트로카데로(북, 이에나 다리로 내려와 에펠탑 바로 앞 교차로에서 합류),
//   북역(북동), 몽파르나스(남, 샹젤리제를 가로질러 올라가 에펠탑 남쪽 길에 합류)
window.GF = window.GF || {};
GF.STAGES = GF.STAGES || {};

(function () {
  // 개선문 로터리: 중심 (-12, 8), 반지름 5.5. 북쪽(클레베르 대로)에서 들어와 서→남→동으로 3/4 바퀴 돌아 동쪽 샹젤리제로 나감
  const C = [-12, 8], R = 5.5, ring = [];
  for (let a = 210; a >= 0; a -= 30) ring.push([+(C[0] + Math.cos(a * Math.PI / 180) * R).toFixed(2), +(C[1] + Math.sin(a * Math.PI / 180) * R).toFixed(2)]);
  GF.STAGES.paris = {
    id: 'paris', no: 3,
    name: '파리', nameEn: 'PARIS', alias: '센강시', title: '파리 방어전',
    briefing: '부카니스탄 기갑군이 센강 강변길, 트로카데로, 북역, 몽파르나스에서 파리로 들어온다. 에펠탑 앞 이에나 다리 교차로와 개선문 로터리를 지나 샹젤리제를 타고 루브르의 연합 지휘부로 향한다.',
    seed: 'paris-2030',
    lives: 20, startMoney: 800, hpScale: 0.175, hpQuad: 0.0066, bossHp: 0.55,
    bounds: { x0: -32, x1: 32, z0: -21.6, z1: 21.6 },
    gate: [-32, -17], base: [30.4, 17],
    theme: { city: 'paris', ground: 'plaza', groundTint: 0xf1e7d2, edge: 0xd8ccb2, hedge: 0x46703a },
    streetFront: { depth: 0.55, gap: [6, 10] },
    route: [
      { id: 'Q', pts: [[-32, -17], [-24, -17], [-14, -17], [-2, -17], [6, -16.4], [8.6, -13], [8.6, -9], [6, -6], [-4, -6], [-9.5, -4.6], [-14.4, 0.4], ...ring, [-2, 8], [8, 8], [14, 8.4], [16.6, 11], [16.6, 14.4], [19, 17], [29.4, 17]] }
    ],
    branches: [
      { id: 'T', name: '트로카데로', fromWave: 3, gate: [-14, -21.6], pts: [[-14, -21.6], [-14, -19.4], [-14, -17]] },
      { id: 'N', name: '북역', fromWave: 7, gate: [24, -21.6], pts: [[24, -21.6], [23, -15], [16, -11], [8.6, -11]] },
      { id: 'M', name: '몽파르나스', fromWave: 12, gate: [-2, 21.6], pts: [[-2, 21.6], [-2, 14], [-2, 2], [-2, -6]] }
    ],
    airEntry: 'withGround',
    blockers: [
      { kind: 'landmark', id: 'eiffel', label: '에펠탑', x: -14, z: -11.5, w: 5.4, d: 5.4, y: 5.5 },
      { kind: 'landmark', id: 'arc', label: '개선문', x: -12, z: 8, w: 3.0, d: 3.0, y: 2.8 },
      { kind: 'landmark', id: 'opera', label: '오페라 가르니에', x: 0, z: -11.5, w: 4, d: 3.4, y: 2.6 },
      { kind: 'landmark', id: 'notredame', label: '노트르담 대성당', x: 23, z: -1, w: 3.4, d: 4.4, y: 3.4 },
      { kind: 'landmark', id: 'pantheon', label: '팡테옹', x: 7, z: 14, w: 3.6, d: 3.6, y: 3.4 },
      { kind: 'landmark', id: 'louvre', label: '루브르 박물관', x: 25.5, z: 9, w: 5, d: 3.6, y: 2 },
      { kind: 'landmark', id: 'moulinrouge', label: '물랭루주', x: -25, z: 15, w: 3.2, d: 2.8, y: 3 }
    ],
    river: { z: -26, w: 6, kind: 'paris' },
    landmarks: [
      { id: 'sacrecoeur', label: '사크레쾨르', x: 30, z: -44, y: 12 },
      { id: 'montparnasse', label: '몽파르나스 타워', x: -46, z: -40, y: 12 },
      { id: 'defense', label: '라데팡스 그랑드 아르슈', x: -48, z: -6, y: 6 },
      { id: 'trocadero', label: '트로카데로 궁', x: -14, z: -33, y: 2 },
      { id: 'river', label: '센강', x: 8, z: -23.8, y: 0.3 }
    ],
    waves: [
      'apc 16', 'inf 36', 'apc 18 drone 14', 'apc 20 inf 28', 'drone 30 apc 16',
      'tank 7 apc 24', 'inf 56 drone 26', 'tank 11 apc 28', 'drone 48 apc 26', 'heli 6 tank 9 apc 28',
      'apc 50 inf 48', 'drone 60 tank 12', 'tank 18 apc 38', 'heli 10 drone 48', 'apc 70 tank 14',
      'inf 96 heli 8', 'drone 84 apc 48', 'tank 24 heli 11', 'apc 80 drone 70 tank 16', 'boss 1 tank 20 apc 60 drone 50'
    ],
    autoNextSec: 10
  };
})();
