// 스테이지 3: 파리 (개선문 로터리 + 굽은 대로)
// 좌표: x = 동(+)·서(-), z = 남(+)·북(-). 전투 구역 x -32~32, z -21.6~21.6
// 본 도로: 서쪽 라데팡스에서 들어와 개선문 로터리를 3/4 돌고, 굽이굽이 동쪽 지휘부로.
// 갈래 길: 북쪽 몽마르트르(로터리 북쪽에 합류), 남서쪽 몽파르나스(남쪽 대로에 합류), 남동쪽 벵센(동쪽 대로에 합류)
window.GF = window.GF || {};
GF.STAGES = GF.STAGES || {};

(function () {
  // 개선문 로터리: 중심 (-10, 0), 반지름 6. 서쪽에서 들어와 북→동→남으로 3/4 바퀴 돈 뒤 남쪽으로 나감
  const ring = [];
  for (let a = 180; a <= 450; a += 30) ring.push([+(-10 + Math.cos(a * Math.PI / 180) * 6).toFixed(2), +(Math.sin(a * Math.PI / 180) * 6).toFixed(2)]);
  GF.STAGES.paris = {
    id: 'paris', no: 3,
    name: '파리', nameEn: 'PARIS', alias: '센강시', title: '파리 방어전',
    briefing: '부카니스탄 기갑군이 라데팡스, 몽마르트르, 몽파르나스, 벵센 네 방향에서 파리로 진입한다. 모든 길은 개선문 로터리와 굽은 대로로 모인다. 합류 지점을 지켜라.',
    seed: 'paris-2030',
    lives: 20, startMoney: 900, hpScale: 0.15, hpQuad: 0.0055, bossHp: 0.38,
    bounds: { x0: -32, x1: 32, z0: -21.6, z1: 21.6 },
    gate: [-32, -2], base: [30.4, 2],
    theme: { city: 'paris', ground: 'plaza', groundTint: 0xf1e7d2, edge: 0xd8ccb2, hedge: 0x46703a },
    streetFront: { depth: 0.55, gap: [6, 10] },
    route: [
      { id: 'D', pts: [[-32, -2], [-24, -1.5], [-19.5, 0], ...ring, [-10, 11], [-4, 16], [6, 15], [10, 8], [9, -2], [12, -12], [20, -15], [26, -8], [29.4, 2]] }
    ],
    branches: [
      { id: 'M', name: '몽마르트르', fromWave: 3, gate: [-10, -21.6], pts: [[-10, -21.6], [-11, -14], [-10, -6]] },
      { id: 'P', name: '몽파르나스', fromWave: 7, gate: [-32, 16], pts: [[-32, 16], [-22, 17], [-15, 13.5], [-10, 11]] },
      { id: 'V', name: '벵센', fromWave: 12, gate: [14, 21.6], pts: [[14, 21.6], [14, 15], [10, 8]] }
    ],
    airEntry: 'withGround',
    blockers: [
      { kind: 'landmark', id: 'arc', label: '개선문', x: -10, z: 0, w: 3.0, d: 3.0, y: 2.8 },
      { kind: 'landmark', id: 'louvre', label: '루브르 박물관', x: 1, z: 6, w: 4.6, d: 3.4, y: 2 },
      { kind: 'landmark', id: 'notredame', label: '노트르담 대성당', x: 20, z: -5, w: 3.4, d: 4.4, y: 3.4 },
      { kind: 'landmark', id: 'opera', label: '오페라 가르니에', x: 0, z: -10, w: 4, d: 3.4, y: 2.6 },
      { kind: 'landmark', id: 'pantheon', label: '팡테옹', x: 22, z: 10, w: 3.6, d: 3.6, y: 3.4 },
      { kind: 'landmark', id: 'moulinrouge', label: '물랭루주', x: -22, z: -12, w: 3.2, d: 2.8, y: 3 }
    ],
    river: { z: -29, w: 6, kind: 'paris' },
    landmarks: [
      { id: 'eiffel', label: '에펠탑', x: -30, z: -40, y: 22 },
      { id: 'sacrecoeur', label: '사크레쾨르', x: 30, z: -44, y: 12 },
      { id: 'montparnasse', label: '몽파르나스 타워', x: -40, z: 14, y: 12 },
      { id: 'defense', label: '라데팡스 그랑드 아르슈', x: -48, z: -6, y: 6 },
      { id: 'river', label: '센강', x: 8, z: -26.8, y: 0.3 }
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
