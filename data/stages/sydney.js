// 스테이지 11: 시드니 (가장 큰 맵 · 가장 긴 길 · 70웨이브)
// 좌표: x = 동(+)·서(-), z = 남(+)·북(-). 전투 구역 x -50~50, z -32~32 (모든 도시 중 가장 큼)
// 본 도로(조지 스트리트 행군로): 남서쪽 끝에서 들어와 시내를 동서로 7줄 지그재그(머리핀 6번)로 훑으며 북쪽으로 올라가
//   마지막 줄(서큘러 키 앞)을 따라 시드니 항구 앞 연합 지휘부로. 길이 약 660 (모스크바 약 460보다 훨씬 김)
// 갈래 길(입구는 모두 지휘부에서 먼 남·동·서 가장자리): 안작 퍼레이드(남, 10웨이브), 이스턴 디스트리뷰터(동, 25웨이브),
//   옥스퍼드 스트리트(남, 40웨이브), 파라마타 로드(서, 55웨이브)
window.GF = window.GF || {};
GF.STAGES = GF.STAGES || {};

(function () {
  // 웨이브 늘리기: 20웨이브 짜임새를 N웨이브로 늘리고 뒤로 갈수록 적 수를 늘림 (끝에서 grow 배). 적 체력 곡선은 game.js 가 N에 맞춰 늘림
  const stretch = (w, N, grow) => {
    const out = [];
    for (let i = 0; i < N - 1; i++) {
      const src = w[Math.floor(i * (w.length - 1) / (N - 1))], k = 1 + (grow - 1) * i / (N - 2);
      out.push(src.replace(/(\d+)/g, (n) => String(Math.round(+n * k))));
    }
    out.push(w[w.length - 1].replace(/(\b(?!boss)[a-z]+ )(\d+)/g, (m, a, n) => a + Math.round(+n * grow)));
    return out;
  };
  const R = 4.5, XW = -44, XE = 44, ROWS = [27, 18, 9, 0, -9, -18, -27];
  const r2 = (v) => +v.toFixed(2);
  // 살짝 출렁이는 시내 대로: x0 → x1 (양 끝 4 는 곧게 → 머리핀이 매끈)
  const wave = (z, x0, x1, amp, ph, out) => {
    const s = Math.sign(x1 - x0), n = Math.max(1, Math.round(Math.abs(x1 - x0) / 8));
    out.push([r2(x0 + s * 4), z]);
    for (let i = 1; i < n; i++) {
      const x = x0 + s * 4 + (x1 - x0 - s * 8) * i / n;
      out.push([r2(x), r2(z + amp * Math.sin(x / 44 * Math.PI * 2 + ph))]);
    }
    out.push([r2(x1 - s * 4), z], [x1, z]);
  };
  // 북쪽(z 감소)으로 꺾는 머리핀: (xe, za) → (xe, za - 2R), s = 바깥쪽(+1 동, -1 서)
  const pin = (xe, za, s, out) => { const zc = za - R; for (const d of [60, 30, 0, -30, -60, -90]) { const a = d * Math.PI / 180; out.push([r2(xe + s * R * Math.cos(a)), r2(zc + R * Math.sin(a))]); } };

  const T = [[-50, ROWS[0]]];
  wave(ROWS[0], -50, XE, 0.8, 0.0, T);
  for (let i = 1; i < ROWS.length - 1; i++) {
    const east = i % 2 === 1;                                  // 1·3·5번째 머리핀은 동쪽, 나머지는 서쪽
    pin(east ? XE : XW, ROWS[i - 1], east ? 1 : -1, T);
    wave(ROWS[i], east ? XE : XW, east ? XW : XE, 0.8, i * 1.7, T);
  }
  pin(XW, ROWS[ROWS.length - 2], -1, T);
  T.push([-36, -27], [-20, -27], [-8, -27], [-2.4, -27], [0, -27]);   // 서큘러 키 앞 마지막 길

  const row0 = T.slice(0, 16);
  const near = (x) => row0.reduce((b, p) => (Math.abs(p[0] - x) < Math.abs(b[0] - x) ? p : b));
  const pinApex = (xe, zc) => T.find(([x, z]) => x === xe && Math.abs(z - zc) < 0.01);
  const az = near(-22), ox = near(20), ed = pinApex(XE + R, ROWS[0] - R), pr = pinApex(XW - R, ROWS[1] - R);

  GF.STAGES.sydney = {
    id: 'sydney', no: 11,
    name: '시드니', nameEn: 'SYDNEY', alias: '하버시티', title: '시드니 항구 대방어전',
    briefing: '부카니스탄 총공세. 사상 최대 병력이 조지 스트리트를 따라 시드니 시내를 굽이굽이 훑으며 올라오고, 안작 퍼레이드·이스턴 디스트리뷰터·옥스퍼드 스트리트·파라마타 로드로도 쏟아진다. 70웨이브를 버텨 오페라하우스와 하버브리지가 보이는 서큘러 키 연합 지휘부를 지켜라.',
    seed: 'sydney-2030',
    lives: 20, startMoney: 1200, hpScale: 0.24, hpQuad: 0.011, bossHp: 0.65,
    bounds: { x0: -50, x1: 50, z0: -32, z1: 32 },
    gate: T[0], base: [0, -27],
    theme: { city: 'sydney', ground: 'plaza', groundTint: 0xd8d2c4, edge: 0xb8ad98, hedge: 0x3f6e34 },
    parkTrees: 110,
    route: [{ id: 'G', name: '조지 스트리트', pts: T }],
    branches: [
      { id: 'AZ', name: '안작 퍼레이드', fromWave: 10, gate: [az[0], 32], pts: [[az[0], 32], [az[0], 29.6], az] },
      { id: 'ED', name: '이스턴 디스트리뷰터', fromWave: 25, gate: [50, ed[1]], pts: [[50, ed[1]], ed] },
      { id: 'OX', name: '옥스퍼드 스트리트', fromWave: 40, gate: [ox[0], 32], pts: [[ox[0], 32], [ox[0], 29.6], ox] },
      { id: 'PR', name: '파라마타 로드', fromWave: 55, gate: [-50, pr[1]], pts: [[-50, pr[1]], pr] }
    ],
    airEntry: 'withGround',
    // 전투 구역 안 랜드마크: 지그재그 길 사이 빈 줄 (줄 간격 9, 길과 겹치지 않게 깊이 3.4 이하)
    blockers: [
      { kind: 'landmark', id: 'sydtower', label: '시드니 타워 아이', x: 24, z: -25.5, w: 3.4, d: 3.4, y: 10 },
      { kind: 'landmark', id: 'qvb', label: '퀸 빅토리아 빌딩', x: 10, z: -4.5, w: 7.2, d: 3.2, y: 2.8 },
      { kind: 'landmark', id: 'townhall', label: '시드니 타운홀', x: -16, z: 4.5, w: 4.6, d: 3.2, y: 3.6 },
      { kind: 'landmark', id: 'stmarys', label: '세인트 메리 대성당', x: 22, z: 13.5, w: 5.2, d: 3.2, y: 4.6 }
    ],
    river: { z: -46, w: 14, kind: 'sydney' },
    landmarks: [
      { id: 'opera', label: '시드니 오페라하우스', x: 30, z: -40, y: 6 },
      { id: 'harbourbridge', label: '시드니 하버브리지', x: -18, z: -46, y: 14 },
      { id: 'lunapark', label: '루나파크', x: -44, z: -60, y: 6 },
      { id: 'crown', label: '크라운 시드니 (바랑가루)', x: -66, z: -28, y: 30 },
      { id: 'river', label: '시드니 항구', x: 8, z: -46, y: 0.3 }
    ],
    waves: stretch([
      'apc 22', 'inf 50', 'apc 26 inf 24', 'apc 28 inf 40', 'inf 46 apc 22 drone 10',
      'tank 10 apc 34', 'inf 78 drone 26', 'tank 12 apc 38', 'drone 36 apc 40 heli 3', 'heli 8 tank 13 apc 40',
      'apc 70 inf 68', 'drone 70 tank 17', 'tank 26 apc 54', 'heli 12 drone 56', 'apc 84 tank 17',
      'inf 135 heli 10', 'drone 98 apc 68', 'tank 34 heli 14', 'apc 112 drone 82 tank 23', 'boss 1 tank 30 apc 86 drone 60'
    ], 70, 1.6),   // 사용자 요청: 시드니 70웨이브
    autoNextSec: 10
  };
})();
