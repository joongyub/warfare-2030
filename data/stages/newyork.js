// 스테이지 2: 뉴욕 (맨해튼 미드타운 격자 + 브로드웨이 대각선)
// 좌표: x = 동(+)·서(-), z = 남(+)·북(-). 전투 구역 x -32~32, z -21.6~21.6 (서울과 같은 크기)
// 본 도로: 서쪽 링컨 터널에서 42번가(맨 윗줄)로 들어와 애비뉴·스트리트 격자를 4줄 지그재그 → 남서쪽 지휘부
// 갈래 길(입구는 모두 지휘부에서 먼 북쪽·동쪽): 브로드웨이(북서→남동 대각선, 타임스스퀘어에서 42번가와 교차),
//   퀸즈보로 다리(동), 할렘 5번가(북). 끝점이 본 도로 위에 닿으면 거기서 합류해 본 도로를 끝까지 따라감
window.GF = window.GF || {};
GF.STAGES = GF.STAGES || {};

(function () {
  GF.STAGES.newyork = {
    id: 'newyork', no: 2,
    name: '뉴욕', nameEn: 'NEW YORK', alias: '허드슨시', title: '맨해튼 방어전',
    briefing: '부카니스탄 원정군이 링컨 터널, 브로드웨이, 퀸즈보로 다리, 할렘에서 맨해튼으로 몰려온다. 브로드웨이가 격자를 비스듬히 가르는 타임스스퀘어 교차로가 첫 고비다. 모든 길은 미드타운 격자를 지나 남쪽 지휘부로 이어진다.',
    seed: 'newyork-2030',
    lives: 20, startMoney: 750, hpScale: 0.17, hpQuad: 0.0066, bossHp: 0.42,
    bounds: { x0: -32, x1: 32, z0: -21.6, z1: 21.6 },
    gate: [-32, -16], base: [-30.4, 16],
    theme: { city: 'newyork', ground: 'plaza', groundTint: 0xd9dde2, edge: 0xb8b4aa, hedge: 0x3f6a32 },
    streetFront: { depth: 0.55, gap: [5, 9] },
    // 본 도로: 42번가 → 애비뉴 → 스트리트 … 4줄 지그재그 (줄 사이 10~11)
    route: [
      { id: 'L', sharp: true, pts: [[-32, -16], [24, -16], [24, -5], [-22, -5], [-22, 6], [24, 6], [24, 16], [-29.4, 16]] }
    ],
    branches: [
      { id: 'BW', name: '브로드웨이', sharp: true, fromWave: 4, gate: [-26, -21.6], pts: [[-26, -21.6], [-6, -5]] },
      { id: 'Q', name: '퀸즈보로 다리', sharp: true, fromWave: 8, gate: [32, -11], pts: [[32, -11], [24, -11]] },
      { id: 'H', name: '할렘', sharp: true, fromWave: 12, gate: [10, -21.6], pts: [[10, -21.6], [10, -16]] }
    ],
    airEntry: 'withGround',
    blockers: [
      { kind: 'landmark', id: 'timesq', label: '타임스스퀘어', x: -22.5, z: -10.5, w: 4.4, d: 3.6, y: 4 },
      { kind: 'landmark', id: 'flatiron', label: '플랫아이언 빌딩', x: 2, z: -10.5, w: 3.4, d: 3.6, y: 3.8 },
      { kind: 'landmark', id: 'rockefeller', label: '록펠러 센터', x: -8, z: 0.5, w: 3.6, d: 3.2, y: 6 },
      { kind: 'landmark', id: 'grandcentral', label: '그랜드 센트럴', x: 10, z: 0.5, w: 5, d: 3.6, y: 4.8 },
      { kind: 'landmark', id: 'msg', label: '매디슨 스퀘어 가든', x: -8, z: 11, w: 4, d: 3.6, y: 2.2 },
      { kind: 'landmark', id: 'nyse', label: '뉴욕증권거래소', x: 10, z: 11, w: 4, d: 3.4, y: 2.6 }
    ],
    river: { z: -40, w: 7, kind: 'newyork' },
    landmarks: [
      { id: 'centralpark', label: '센트럴파크', x: -6, z: -27, y: 0.5 },
      { id: 'liberty', label: '자유의 여신상', x: -42, z: 26, y: 9 },
      { id: 'empire', label: '엠파이어 스테이트', x: 38, z: 5, y: 14 },
      { id: 'chrysler', label: '크라이슬러 빌딩', x: 44, z: -18 },
      { id: 'wtc', label: '원 월드 트레이드 센터', x: -40, z: 6, y: 16 },
      { id: 'river', label: '할렘강', x: 30, z: -37.5, y: 0.3 }
    ],
    waves: [
      'apc 14', 'inf 34', 'apc 18 drone 10', 'apc 16 inf 24', 'drone 26 apc 12',
      'tank 6 apc 22', 'inf 50 drone 24', 'tank 10 apc 26', 'drone 44 apc 24', 'heli 5 tank 8 apc 26',
      'apc 46 inf 44', 'drone 56 tank 10', 'tank 16 apc 34', 'heli 9 drone 44', 'apc 66 tank 12',
      'inf 90 heli 7', 'drone 78 apc 44', 'tank 22 heli 10', 'apc 76 drone 66 tank 14', 'boss 1 tank 18 apc 56 drone 46'
    ],
    autoNextSec: 10
  };
})();
