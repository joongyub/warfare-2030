// 스테이지 12: 부산 (특별 맵 · 길 만들기)
// 좌표: x = 동(+)·서(-), z = 남(+)·북(-). 전투 구역 x -42~42, z -27~27 (모스크바만큼 큼)
// 사용자 요청: 정해진 도로가 없다. 전투 구역 전체가 2×2 칸 바둑판(42×27칸)이고, 무기를 칸에 놓아 벽을 쌓으면
//   적은 그 사이 빈 칸으로 지휘부까지 가장 짧은 길을 찾아 따라간다 (src/maze.js). 길을 완전히 막는 칸에는 못 놓음.
//   적 입구는 서쪽 가운데 1곳, 연합 지휘부는 반대편 동쪽 가운데 1곳.
// 칸 사이사이 랜드마크(부산타워·부산역·자갈치시장·영화의전당·감천문화마을)는 놓을 수도 지나갈 수도 없는 칸.
// 북쪽 바다(수영만) 위에 광안대교, 북동쪽에 해운대 엘시티·마린시티, 남서쪽 부산항 크레인
window.GF = window.GF || {};
GF.STAGES = GF.STAGES || {};

(function () {
  // 웨이브 늘리기: 처음엔 적 수를 g0배로 적게(길을 만들 시간), 끝에서 grow배
  const stretch = (w, N, grow, g0) => {
    const out = [];
    for (let i = 0; i < N - 1; i++) {
      const src = w[Math.floor(i * (w.length - 1) / (N - 1))], k = g0 + (grow - g0) * i / (N - 2);
      out.push(src.replace(/(\d+)/g, (n) => String(Math.round(+n * k))));
    }
    out.push(w[w.length - 1].replace(/(\b(?!boss)[a-z]+ )(\d+)/g, (m, a, n) => a + Math.round(+n * grow)));
    return out;
  };

  GF.STAGES.busan = {
    id: 'busan', no: 12,
    name: '부산', nameEn: 'BUSAN', alias: '항구도시', title: '부산 길 만들기 작전',
    briefing: '특별 작전. 부산에는 정해진 도로가 없다. 전투 구역 전체가 바둑판 칸이고, 무기를 놓는 자리가 곧 벽이 된다. 서쪽에서 들어오는 부카니스탄군은 무기 사이 빈 칸으로 가장 짧은 길을 찾아 동쪽 연합 지휘부로 간다. 무기로 길을 굽이굽이 만들어 적을 오래 붙잡아라. 단, 길을 완전히 막을 수는 없다.',
    seed: 'busan-2030',
    lives: 20, startMoney: 2000, hpScale: 0.185, hpQuad: 0.0075, bossHp: 0.8,
    bounds: { x0: -42, x1: 42, z0: -27, z1: 27 },
    // 길 만들기: 칸 크기 2. 입구 칸 = 서쪽 끝 가운데, 목표 = 지휘부 칸
    maze: { cell: 2 },
    gate: [-52, 0], base: [41, 0],
    theme: { city: 'busan', ground: 'plaza', groundTint: 0xcfd3d6, edge: 0xa9b0b6, hedge: 0x3f6e34 },
    parkTrees: 0,
    // 입구 터널에서 첫 칸까지 짧은 진입로 (이 뒤로는 칸 위를 걸음)
    route: [{ id: 'G', name: '중앙대로', sharp: true, pts: [[-52, 0], [-41, 0]] }],
    branches: [],
    airEntry: 'withGround',
    // 전투 구역 안 랜드마크: 칸 경계(x 짝수, z 홀수)에 딱 맞게 (놓을 수도 지나갈 수도 없는 칸)
    blockers: [
      { kind: 'landmark', id: 'busantower', label: '부산타워 (용두산공원)', x: -14, z: -11, w: 4, d: 4, y: 9 },
      { kind: 'landmark', id: 'gamcheon', label: '감천문화마을', x: -27, z: 15, w: 6, d: 4, y: 3 },
      { kind: 'landmark', id: 'jagalchi', label: '자갈치시장', x: -4, z: 15, w: 8, d: 4, y: 2.6 },
      { kind: 'landmark', id: 'busanstation', label: '부산역', x: 14, z: 9, w: 8, d: 4, y: 3 },
      { kind: 'landmark', id: 'bifc', label: '영화의전당', x: 23, z: -13, w: 6, d: 4, y: 3.4 }
    ],
    river: { z: -40, w: 18, kind: 'busan' },
    landmarks: [
      { id: 'gwangan', label: '광안대교', x: 0, z: -40, y: 8 },
      { id: 'lct', label: '해운대 엘시티', x: 62, z: -40, y: 34 },
      { id: 'marinecity', label: '마린시티', x: 44, z: -54, y: 22 },
      { id: 'portcranes', label: '부산항 신항 크레인', x: -66, z: 22, y: 10 },
      { id: 'river', label: '수영만', x: -24, z: -40, y: 0.3 }
    ],
    waves: stretch([
      'apc 22', 'inf 50', 'apc 26 inf 24', 'apc 28 inf 40', 'inf 46 apc 22 drone 10',
      'tank 10 apc 34', 'inf 78 drone 26', 'tank 12 apc 38', 'drone 36 apc 40 heli 3', 'heli 8 tank 13 apc 40',
      'apc 70 inf 68', 'drone 70 tank 17', 'tank 26 apc 54', 'heli 12 drone 56', 'apc 84 tank 17',
      'inf 135 heli 10', 'drone 98 apc 68', 'tank 34 heli 14', 'apc 112 drone 82 tank 23', 'boss 1 tank 30 apc 86 drone 60'
    ], 40, 1.35, 0.35),   // 처음엔 길이 짧아서(직선 82) 적게 시작
    autoNextSec: 10
  };
})();
