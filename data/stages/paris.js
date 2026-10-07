// 스테이지 3: 파리 (에투알 개선문 광장 · 둥근 맵)
// 좌표: x = 동(+)·서(-), z = 남(+)·북(-). 전투 구역 = 중심 (0,0) 반지름 30 원
// 개선문 광장처럼 6개 대로가 원 가장자리에서 출발. 각 대로는 자기 몫(60°) 안에서 동심원 길을 따라
//   좌우로 꺾이며(미로) 안쪽으로 들어오고, 마지막에 개선문을 감싼 로터리(반지름 6)에 합류.
//   로터리를 거의 한 바퀴 돈 뒤 북쪽에서 개선문 아치 밑의 연합 지휘부로 들어감.
window.GF = window.GF || {};
GF.STAGES = GF.STAGES || {};

(function () {
  const RIM = 30, RING = 6, ROWS = [26, 21, 16, 11], GAP = 3;   // GAP = 이웃 대로 사이 빈 땅(도로 중심 기준 한쪽 거리)
  const P = (r, a) => [+(Math.cos(a * Math.PI / 180) * r).toFixed(2), +(Math.sin(a * Math.PI / 180) * r).toFixed(2)];
  const half = (r) => 30 - GAP / r * 180 / Math.PI;           // 반지름 r 에서 대로 한 몫의 반폭(도)
  // 동심원 길: 모서리 바로 옆(약 0.8)에 점을 하나씩 더 찍어 곡선이 모서리에서 출렁이지 않게
  const arc = (r, a0, a1, out) => {
    const d = Math.sign(a1 - a0) * 0.8 / r * 180 / Math.PI, n = Math.max(1, Math.ceil(Math.abs(a1 - a0 - 2 * d) / 8));
    out.push(P(r, a0 + d)); for (let i = 1; i < n; i++) out.push(P(r, a0 + d + (a1 - a0 - 2 * d) * i / n)); out.push(P(r, a1 - d), P(r, a1));
  };
  const radial = (r0, r1, a, out) => { const k = Math.sign(r1 - r0) * 0.8; out.push(P(r0 + k, a), P(r1 - k, a), P(r1, a)); };
  // 대로 하나: c = 방향(도), s = 처음 꺾는 쪽(+1/-1). 가장자리 → 동심원 3줄 지그재그 → 로터리 도착점
  function avenue(c, s) {
    let side = s, a = c + side * half(ROWS[0]);
    const pts = [P(RIM, a)]; radial(RIM, ROWS[0], a, pts);
    for (let i = 0; i < ROWS.length; i++) {
      const next = ROWS[i + 1] ?? RING, b = c - side * half(next);
      arc(ROWS[i], a, b, pts); radial(ROWS[i], next, b, pts);
      a = b; side = -side;
    }
    return { pts, end: a };
  }
  // 본 도로: 북쪽 바그람 대로 → 로터리를 거의 한 바퀴 → 북쪽 바로 아래에서 개선문 아치 밑 지휘부로
  const W = avenue(-90, -1), trunk = W.pts.slice();
  arc(RING, W.end, 270, trunk); trunk.push([0, -5.2], [0, -3.4], [0, -1.0]);
  const br = (id, name, c, s, fromWave) => { const A = avenue(c, s); return { id, name, fromWave, gate: A.pts[0], pts: A.pts }; };

  GF.STAGES.paris = {
    id: 'paris', no: 3,
    name: '파리', nameEn: 'PARIS', alias: '센강시', title: '파리 방어전',
    briefing: '부카니스탄 기갑군이 에투알 광장의 여섯 대로로 동시에 밀려온다. 골목을 꺾어 돌며 개선문 로터리로 모여드는 적을 막아 개선문 아래 연합 지휘부를 지켜라.',
    seed: 'paris-2030',
    lives: 20, startMoney: 900, hpScale: 0.13, hpQuad: 0.0052, bossHp: 0.3,
    bounds: { x0: -30, x1: 30, z0: -30, z1: 30 },
    round: { x: 0, z: 0, r: RIM },
    gate: trunk[0], base: [0, 0],
    baseArc: true,
    theme: { city: 'paris', ground: 'plaza', groundTint: 0xf1e7d2, edge: 0xd8ccb2, hedge: 0x46703a },
    parkTrees: 150,
    route: [{ id: 'W', name: '바그람', pts: trunk }],
    branches: [
      br('G', '그랑드 아르메', -150, -1, 3),
      br('C', '샹젤리제', 30, -1, 5),
      br('F', '포슈', 150, -1, 8),
      br('R', '프리들랑', -30, -1, 11),
      br('I', '이에나', 90, -1, 14)
    ],
    airEntry: 'withGround',
    blockers: [],
    river: { z: -46, w: 6, kind: 'paris' },
    landmarks: [
      { id: 'eiffel', label: '에펠탑', x: -48, z: -56, y: 28 },
      { id: 'sacrecoeur', label: '사크레쾨르', x: 46, z: -62, y: 12 },
      { id: 'defense', label: '라데팡스 그랑드 아르슈', x: -58, z: -16, y: 6 },
      { id: 'river', label: '센강', x: 8, z: -43.8, y: 0.3 }
    ],
    waves: [
      'apc 16', 'inf 36', 'apc 18 drone 14', 'apc 20 inf 28', 'drone 30 apc 16',
      'tank 7 apc 24', 'inf 56 drone 26', 'tank 11 apc 28', 'drone 48 apc 26', 'heli 6 tank 9 apc 28',
      'apc 50 inf 48', 'drone 60 tank 12', 'tank 18 apc 38', 'heli 10 drone 48', 'apc 60 tank 12',
      'inf 96 heli 8', 'drone 84 apc 48', 'tank 24 heli 11', 'apc 80 drone 70 tank 16', 'boss 1 tank 20 apc 60 drone 50'
    ],
    autoNextSec: 10
  };
})();
