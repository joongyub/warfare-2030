// 스테이지 2: 뉴욕 (맨해튼 격자 도로)
// 좌표: x = 동(+)·서(-), z = 남(+)·북(-). 전투 구역 x -32~32, z -21.6~21.6 (서울과 같은 크기)
// 입구 3곳: 서쪽 링컨 터널(본 도로), 북쪽 할렘(웨이브 4부터), 남서쪽 브루클린(웨이브 8부터).
// 갈래 길(branches)은 끝점이 본 도로 위에 있고, 거기서 본 도로를 따라 지휘부로 감
window.GF = window.GF || {};
GF.STAGES = GF.STAGES || {};

(function () {
  GF.STAGES.newyork = {
    id: 'newyork', no: 2,
    name: '뉴욕', nameEn: 'NEW YORK', alias: '허드슨시', title: '맨해튼 방어전',
    briefing: '부카니스탄 원정군이 링컨 터널, 할렘, 브루클린 세 방향에서 맨해튼으로 몰려온다. 격자 도로를 따라 갈라졌다 합쳐지는 행렬을 교차로에서 끊어라.',
    seed: 'newyork-2030',
    lives: 20, startMoney: 750, hpScale: 0.17, hpQuad: 0.0062, bossHp: 0.5,
    bounds: { x0: -32, x1: 32, z0: -21.6, z1: 21.6 },
    gate: [-32, -15], base: [30.4, 18],
    theme: { city: 'newyork', ground: 'plaza', groundTint: 0xd9dde2, edge: 0xb8b4aa, hedge: 0x3f6a32 },
    streetFront: { depth: 0.55, gap: [5, 9] },
    // 본 도로: 서쪽 링컨 터널 → 격자를 지그재그로 → 남동쪽 지휘부
    route: [
      { id: 'L', sharp: true, pts: [[-32, -15], [20, -15], [20, -3], [-20, -3], [-20, 9], [12, 9], [12, 18], [29.4, 18]] }
    ],
    // 갈래 길: 북쪽 할렘에서 내려와 첫 줄을 가로지른 뒤 둘째 줄에 합류 / 남서쪽 브루클린에서 셋째 줄에 합류
    branches: [
      { id: 'H', name: '할렘', sharp: true, fromWave: 4, gate: [4, -21.6], pts: [[4, -21.6], [4, -3]] },
      { id: 'B', name: '브루클린', sharp: true, fromWave: 8, gate: [-32, 18], pts: [[-32, 18], [-6, 18], [-6, 9]] }
    ],
    airEntry: 'withGround',
    blockers: [
      { kind: 'landmark', id: 'timesq', label: '타임스스퀘어', x: -14, z: -9, w: 4.6, d: 3.4, y: 3 },
      { kind: 'landmark', id: 'flatiron', label: '플랫아이언 빌딩', x: 12, z: -9, w: 3.2, d: 3.2, y: 3.4 },
      { kind: 'landmark', id: 'grandcentral', label: '그랜드 센트럴', x: -6, z: 3, w: 5, d: 3.4, y: 2.4 },
      { kind: 'landmark', id: 'nyse', label: '뉴욕증권거래소', x: 26, z: 3, w: 4, d: 3.2, y: 2.4 },
      { kind: 'landmark', id: 'rockefeller', label: '록펠러 센터', x: 2, z: 13.5, w: 3.6, d: 2.8, y: 4.2 },
      { kind: 'pond', label: '센트럴파크', x: -26, z: 3, rx: 2.4, rz: 3.2 }
    ],
    river: { z: -30, w: 7, kind: 'newyork' },
    landmarks: [
      { id: 'liberty', label: '자유의 여신상', x: -40, z: -31, y: 9 },
      { id: 'empire', label: '엠파이어 스테이트', x: 36, z: -6, y: 14 },
      { id: 'chrysler', label: '크라이슬러 빌딩', x: 44, z: -14 },
      { id: 'wtc', label: '원 월드 트레이드 센터', x: -38, z: 8, y: 16 },
      { id: 'river', label: '이스트강', x: 12, z: -27.5, y: 0.3 }
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
