// 스테이지: 서울 (1단계 시제품)
// 좌표: x = 동(+)·서(-), z = 남(+)·북(-). 1 = 도로 폭의 약 절반. 전투 구역은 x -28~28, z -17~17
// 도로는 직각으로 꺾이는 지그재그 한 줄 (sharp: true)
window.GF = window.GF || {};
GF.STAGES = GF.STAGES || {};

(function () {
  const Z = [-17, -8.5, 0, 8.5, 17];   // 도로 줄 높이 (줄 사이 8.5 = 무기 공간)

  GF.STAGES.seoul = {
    id: 'seoul', no: 1,
    name: '서울', nameEn: 'SEOUL', alias: '한강시', title: '서울 방어전',
    briefing: '부카니스탄 기갑 사단이 서쪽 터널을 뚫고 강남으로 밀려온다. 한강 남쪽의 긴 지그재그 도로가 유일한 진격로다. 도로 밖 어디든 무기를 놓아 행렬을 통째로 섬멸하라.',
    seed: 'seoul-2030',
    lives: 20, startMoney: 650, hpScale: 0.16, hpQuad: 0.006,
    // 전투 구역 = 화면 전체. 이 사각형이 화면을 꽉 채우도록 카메라가 맞춰짐
    bounds: { x0: -32, x1: 32, z0: -21.6, z1: 21.6 },
    gate: [-32, -17], base: [30.4, 17],
    // 도시 테마: 전투 구역 바닥과 가장자리 장식 (도시마다 다르게)
    theme: { ground: 'plaza', laneCenter: 4.25, crosswalkX: [-21, -2, 21], groundColor: 0x8fbf5a, edge: 0xc9c4b6, road: 'asphalt' },
    // 적 침투로 = 도심 거리: 보도 바깥으로 상가 건물(깊이 depth)이 줄지어 섬. 무기 배치는 그 바깥 대로에서
    streetFront: { depth: 0.55 },
    // 직각으로 꺾이는 지그재그 도로 하나 (우회로 없음)
    route: [
      { id: 'R', sharp: true, pts: [[-32, Z[0]], [27, Z[0]], [27, Z[1]], [-27, Z[1]], [-27, Z[2]], [27, Z[2]], [27, Z[3]], [-27, Z[3]], [-27, Z[4]], [29.4, Z[4]]] }
    ],
    // 공중 적 진입: 'withGround' = 지상군과 같은 입구(초반 스테이지) / 'allSides' = 동서남북 사방(후반 스테이지)
    airEntry: 'withGround',
    // 배치 불가 구역 = 도로 + 무기 공간 중간중간의 서울 랜드마크 건물 (w×d 바닥 크기)
    blockers: [
      { kind: 'landmark', id: 'namdaemun', label: '숭례문', x: -12, z: -12.75, w: 4.2, d: 2.6 },
      { kind: 'landmark', id: 'yisunsin', label: '이순신 장군상', x: 14, z: -12.75, w: 2.2, d: 2.2, y: 2.7 },
      { kind: 'landmark', id: 'cheongwadae', label: '청와대', x: -18, z: -4.25, w: 4.2, d: 3.0, y: 2 },
      { kind: 'landmark', id: 'ntower', label: 'N서울타워', x: 6, z: -4.25, w: 3.2, d: 2.8, y: 5.4 },
      { kind: 'landmark', id: 'gyeongbok', label: '경복궁', x: -8, z: 4.25, w: 4.4, d: 3.2 },
      { kind: 'landmark', id: 'cityhall', label: '서울시청', x: 16, z: 4.25, w: 3.8, d: 3.0, y: 2.4 },
      { kind: 'landmark', id: 'ddp', label: 'DDP', x: 4, z: 12.75, w: 5.0, d: 3.2, y: 1.6 }
    ],
    // 화면 위 가장자리에 살짝 보이는 한강, 좌우 가장자리의 랜드마크
    river: { z: -27.2, w: 6 },
    landmarks: [
      { id: 'namsan', x: 8, z: -38 },
      { id: 'b63', label: '63빌딩', x: -34.4, z: 5, y: 10 },
      { id: 'lotte', label: '롯데월드타워', x: 34.6, z: -4, y: 7 },
      { id: 'river', label: '한강', x: -18, z: -24.8, y: 0.3 }
    ],
    // 웨이브: "종류 수" 반복. 같은 웨이브 안의 무리는 차례로 나옴
    waves: [
      'apc 12', 'inf 30', 'apc 16 inf 20', 'drone 20', 'apc 24 drone 12',
      'tank 4 apc 20', 'inf 50 drone 20', 'tank 8 apc 24', 'drone 40 apc 20', 'heli 4 tank 6 apc 24',
      'apc 40 inf 40', 'drone 50 tank 8', 'tank 14 apc 30', 'heli 8 drone 40', 'apc 60 tank 10',
      'inf 80 heli 6', 'drone 70 apc 40', 'tank 20 heli 8', 'apc 70 drone 60 tank 12', 'boss 1 tank 16 apc 50 drone 40'
    ],
    autoNextSec: 10   // 한 웨이브가 다 나온 뒤 다음 웨이브까지 초
  };
})();
