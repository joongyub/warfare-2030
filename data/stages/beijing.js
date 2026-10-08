// 스테이지 9: 베이징 (네모난 환로 미로 · 자금성 방어)
// 좌표: x = 동(+)·서(-), z = 남(+)·북(-). 전투 구역 x -42~42, z -28~28
// 베이징의 겹겹이 네모난 순환도로(4환·3환·2환)를 미로로 씀. 바깥 4환로를 한 방향으로 돌다가 틈으로 안쪽 3환로에 들어가
//   반대 방향으로 돌고, 다시 틈으로 2환로에 들어가 또 반대로 돈 뒤 가운데 자금성(지휘부)으로 들어감. 틈은 서로 어긋나 있음.
// 갈래 길: 장안가(서쪽 끝 → 4환로 북변, 본 도로 입구에서 합류), 징카이 고속도로(남), 징퉁 고속도로(동, 늦게 열림)
window.GF = window.GF || {};
GF.STAGES = GF.STAGES || {};

(function () {
  // 웨이브 늘리기: 20웨이브 짜임새를 N웨이브로 늘리고 뒤로 갈수록 적 수를 늘림 (적 체력 곡선은 game.js 가 N에 맞춰 늘림)
  const stretch = (w, N) => {
    const out = [];
    for (let i = 0; i < N - 1; i++) {
      const src = w[Math.floor(i * (w.length - 1) / (N - 1))], k = 1 + 0.35 * i / (N - 2);
      out.push(src.replace(/(\d+)/g, (n) => String(Math.round(+n * k))));
    }
    out.push(w[w.length - 1].replace(/(\b(?!boss)[a-z]+ )(\d+)/g, (m, a, n) => a + Math.round(+n * 1.35)));
    return out;
  };
  // 환로 반폭 [x, z]: 4환(바깥) · 3환 · 2환(안쪽). 줄 사이 8
  const R4 = [37, 23], R3 = [29, 15], R2 = [21, 7];
  // 본 도로: 북쪽 입구 → 4환로 북변 동쪽으로 → 시계 방향(동→남→서)으로 거의 한 바퀴 → 서변 z=-9 틈으로 3환로
  //   → 3환로를 반대로(남→동→북→서) → 북변 x=-15 틈으로 2환로 → 2환로를 다시 반대로(동→남→서) → 서변에서 가운데 길로 자금성
  const trunk = [
    [20, -28], [20, -R4[1]],
    [R4[0], -R4[1]], [R4[0], R4[1]], [-R4[0], R4[1]], [-R4[0], -9],     // 4환로
    [-R3[0], -9], [-R3[0], R3[1]], [R3[0], R3[1]], [R3[0], -R3[1]], [-15, -R3[1]],   // 3환로
    [-15, -R2[1]], [R2[0], -R2[1]], [R2[0], R2[1]], [-R2[0], R2[1]], [-R2[0], 0],   // 2환로
    [-1, 0]                                                              // 자금성 앞 길
  ];

  GF.STAGES.beijing = {
    id: 'beijing', no: 9,
    name: '베이징', nameEn: 'BEIJING', alias: '연경시', title: '자금성 방어전',
    briefing: '부카니스탄 원정군이 4환로 북쪽, 장안가, 징카이·징퉁 고속도로로 베이징에 몰려온다. 네모난 4환·3환·2환로를 번갈아 거꾸로 돌며 파고드는 적을 막아 자금성의 연합 지휘부를 지켜라.',
    seed: 'beijing-2030',
    lives: 20, startMoney: 800, hpScale: 0.36, hpQuad: 0.0155, bossHp: 0.4,
    bounds: { x0: -42, x1: 42, z0: -28, z1: 28 },
    gate: trunk[0], base: [0, 0],
    theme: { city: 'beijing', ground: 'plaza', groundTint: 0xd6d3cc, edge: 0xb4aea2, hedge: 0x4d7034 },
    parkTrees: 110,
    route: [{ id: 'R', name: '4환로', sharp: true, pts: trunk }],
    branches: [
      { id: 'CA', name: '장안가', sharp: true, fromWave: 4, gate: [-42, -R4[1]], pts: [[-42, -R4[1]], [20, -R4[1]]] },
      { id: 'JK', name: '징카이 고속도로', sharp: true, fromWave: 9, gate: [-10, 28], pts: [[-10, 28], [-10, R4[1]]] },
      { id: 'JT', name: '징퉁 고속도로', sharp: true, fromWave: 14, gate: [42, 0], pts: [[42, 0], [R4[0], 0]] }
    ],
    airEntry: 'withGround',
    blockers: [
      { kind: 'landmark', id: 'bjtiananmen', label: '천안문', x: 2, z: 19, w: 5.6, d: 3.4, y: 3.2 },
      { kind: 'landmark', id: 'bjtemplehall', label: '천단 기년전', x: 11, z: 0, w: 5, d: 5, y: 4.2 },
      { kind: 'landmark', id: 'bjdrum', label: '고루', x: -26, z: -18.5, w: 3.4, d: 3.2, y: 3.6 },
      { kind: 'landmark', id: 'bjhutong', label: '후퉁 사합원', x: 33, z: 1, w: 3.6, d: 5.2, y: 1.8 }
    ],
    river: { z: -40, w: 6, kind: 'beijing' },
    landmarks: [
      { id: 'bjwall', label: '만리장성', x: -55, z: -66, y: 12 },
      { id: 'bjcctv', label: 'CCTV 본사', x: 54, z: -18, y: 14 },
      { id: 'bjzun', label: '중국존', x: 64, z: -30, y: 31 },
      { id: 'bjnest', label: '냐오차오', x: -56, z: -14, y: 5 },
      { id: 'river', label: '퉁후이강', x: -24, z: -37.6, y: 0.3 }
    ],
    waves: stretch([
      'apc 22', 'inf 49', 'apc 24 drone 19', 'apc 27 inf 38', 'drone 41 apc 22',
      'tank 10 apc 33', 'inf 76 drone 35', 'tank 15 apc 38', 'drone 65 apc 35', 'heli 8 tank 12 apc 38',
      'apc 68 inf 65', 'drone 82 tank 16', 'tank 24 apc 52', 'heli 14 drone 65', 'apc 82 tank 16',
      'inf 131 heli 11', 'drone 114 apc 65', 'tank 33 heli 15', 'apc 109 drone 95 tank 22', 'boss 1 tank 27 apc 82 drone 68'
    ], 30),   // 사용자 요청: 베이징 30웨이브
    autoNextSec: 10
  };
})();
