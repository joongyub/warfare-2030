// 스테이지 8: 리우데자네이루 (코르코바두 산길 지그재그 + 코파카바나 해변 대로)
// 좌표: x = 동(+)·서(-), z = 남(+)·북(-). 전투 구역 x -40~40, z -27~27
// 본 도로(코르코바두 길): 북서쪽 산에서 내려와 굽이굽이 머리핀 커브 4번(산타테레자 언덕 같은 뱀길) →
//   맨 아래에서 남쪽 해변을 따라 활처럼 휘는 아틀란치카 해변 대로 → 동남쪽 코파카바나 요새 지휘부
// 갈래 길(입구는 모두 지휘부에서 먼 서쪽·북쪽): 헤보사스 터널(서, 5웨이브), 산타테레자 전차길(북, 11웨이브)
window.GF = window.GF || {};
GF.STAGES = GF.STAGES || {};

(function () {
  const R = 4.75, ROWS = [-21.5, -12, -2.5, 7], XW = -30, XE = 30;
  const r2 = (v) => +v.toFixed(2);
  // 물결치는 산허리 길: x0 → x1 로 가며 z 가 살짝 출렁임 (양 끝 4 는 곧게 → 머리핀이 매끈)
  const wave = (z, x0, x1, amp, ph, out) => {
    const s = Math.sign(x1 - x0), n = Math.round(Math.abs(x1 - x0) / 8);
    out.push([r2(x0 + s * 4), z]);
    for (let i = 1; i < n; i++) {
      const x = x0 + s * 4 + (x1 - x0 - s * 8) * i / n;
      out.push([r2(x), r2(z + amp * Math.sin(x / 40 * Math.PI * 2 + ph))]);
    }
    out.push([r2(x1 - s * 4), z], [x1, z]);
  };
  // 머리핀 커브: (xe, za) → (xe, za + 2R) 반원, s = 바깥쪽(+1 동, -1 서)
  const pin = (xe, za, s, out) => { const zc = za + R; for (const d of [-60, -30, 0, 30, 60, 90]) { const a = d * Math.PI / 180; out.push([r2(xe + s * R * Math.cos(a)), r2(zc + R * Math.sin(a))]); } };

  const L = [[-30, -27], [-29.6, -24.6], [-27.6, -22.2], [-24.5, -21.5]];
  wave(ROWS[0], -24.5, XE, 0.8, 0.0, L);
  pin(XE, ROWS[0], 1, L);
  wave(ROWS[1], XE, XW, 0.8, 2.2, L); pin(XW, ROWS[1], -1, L);
  wave(ROWS[2], XW, XE, 0.8, 4.1, L); pin(XE, ROWS[2], 1, L);
  wave(ROWS[3], XE, XW, 0.8, 1.0, L);
  // 마지막 서쪽 머리핀은 해변 대로로 이어짐 (아래 끝이 z 15.5)
  { const zc = ROWS[3] + 4.25; for (const d of [-60, -30, 0, 30, 60]) { const a = d * Math.PI / 180; L.push([r2(XW - 4.25 * Math.cos(a)), r2(zc + 4.25 * Math.sin(a))]); } }
  // 아틀란치카 해변 대로: 코파카바나 해변처럼 남쪽으로 불룩한 활 모양
  L.push([-28, 15.6], [-20, 18.2], [-10, 20.2], [0, 21], [10, 20.6], [20, 19.2], [28, 17.6], [35.5, 16.6]);
  const pinW = L.find(([x, z]) => x === r2(XW - R) && z === r2(ROWS[1] + R));    // 서쪽 머리핀 꼭짓점 (헤보사스 터널 합류)
  const row1 = L.find(([x, z]) => z !== ROWS[0] && Math.abs(z - ROWS[0]) < 1 && x > 4 && x < 14);   // 첫 줄 가운데 (전차길 합류)

  GF.STAGES.rio = {
    id: 'rio', no: 8,
    name: '리우', nameEn: 'RIO DE JANEIRO', alias: '과나바라시', title: '코파카바나 방어전',
    briefing: '부카니스탄 원정군이 코르코바두 산길, 헤보사스 터널, 산타테레자 전차길로 리우에 내려온다. 굽이굽이 머리핀 커브를 지나 아틀란치카 해변 대로를 따라 코파카바나 요새의 연합 지휘부로 몰려오는 적을 막아라.',
    seed: 'rio-2030',
    lives: 20, startMoney: 850, hpScale: 0.27, hpQuad: 0.0125, bossHp: 0.5,
    bounds: { x0: -40, x1: 40, z0: -27, z1: 27 },
    gate: L[0], base: [35.5, 16.6],
    theme: { city: 'rio', ground: 'plaza', groundTint: 0xf3e6cf, edge: 0xd9cbb0, hedge: 0x3f7a34 },
    parkTrees: 100,
    route: [{ id: 'C', name: '코르코바두 길', pts: L }],
    branches: [
      { id: 'RB', name: '헤보사스 터널', fromWave: 5, gate: [-40, pinW[1]], pts: [[-40, pinW[1]], [-37.4, pinW[1]], pinW] },
      { id: 'ST', name: '산타테레자 전차길', fromWave: 11, gate: [row1[0], -27], pts: [[row1[0], -27], [row1[0], -24.6], row1] }
    ],
    airEntry: 'withGround',
    blockers: [
      { kind: 'landmark', id: 'maracana', label: '마라카낭 경기장', x: -8, z: -16.75, w: 6.4, d: 4.4, y: 2.4 },
      { kind: 'landmark', id: 'rio_cathedral', label: '메트로폴리타나 대성당', x: 20, z: -7.25, w: 4.4, d: 4.4, y: 4.8 },
      { kind: 'landmark', id: 'lapa', label: '라파 아치', x: -10, z: 2.25, w: 7.2, d: 2.2, y: 2.6 },
      { kind: 'landmark', id: 'selaron', label: '셀라론 계단', x: 10, z: 13.6, w: 3.8, d: 3.2, y: 2.2 }
    ],
    river: { z: -42, w: 10, kind: 'rio' },
    landmarks: [
      { id: 'corcovado', label: '코르코바두 구세주 그리스도상', x: -53, z: -37, y: 23 },
      { id: 'sugarloaf', label: '빵산 (팡지아수카르)', x: 66, z: -12, y: 17 },
      { id: 'favela', label: '파벨라 언덕', x: 58, z: 18, y: 7 },
      { id: 'river', label: '과나바라만', x: -12, z: -38.5, y: 0.3 }
    ],
    waves: [
      'apc 21', 'inf 47', 'apc 23 drone 18', 'apc 26 inf 36', 'drone 39 apc 21',
      'tank 9 apc 31', 'inf 73 drone 34', 'tank 14 apc 36', 'drone 62 apc 34', 'heli 8 tank 12 apc 36',
      'apc 65 inf 62', 'drone 78 tank 16', 'tank 23 apc 49', 'heli 13 drone 62', 'apc 78 tank 16',
      'inf 125 heli 10', 'drone 109 apc 62', 'tank 31 heli 14', 'apc 104 drone 91 tank 21', 'boss 1 tank 26 apc 78 drone 65'
    ],
    autoNextSec: 10
  };
})();
