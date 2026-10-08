// 스테이지 10: 모스크바 (크렘린 · 고리 + 방사 도로)
// 좌표: x = 동(+)·서(-), z = 남(+)·북(-). 전투 구역 x -42~42, z -28~28 (가장 큰 맵)
// 모스크바의 고리 + 방사 도시 구조. 고리는 북쪽(모스크바강)으로 열린 말굽(C) 모양, 중심 = 크렘린
//   본 도로: 동쪽 강변에서 들어와 사도보예 고리(바깥 고리, 반지름 37)를 동→남→서로 한 바퀴 돈 뒤,
//   서쪽 끝에서 안으로 꺾어 불바르 고리(반지름 30)와 안쪽 고리(반지름 17) 사이를 방사 대로로 8번 지그재그(서→동),
//   마지막에 크렘린 성벽 고리(반지름 10.5)를 동→남→서로 돌아 크렘린 안 지휘부로
// 갈래 길(입구는 모두 지휘부에서 먼 남·서 가장자리): 레닌스키 대로(남서, 4웨이브), 볼고그라드 대로(남동, 10웨이브),
//   쿠투조프스키 대로(서, 13웨이브). 모두 바깥 사도보예 고리에 합류
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
  const CX = 0, CZ = -16, RA = 37, RB = 30, RC = 17, RK = 10.5, A0 = -14, A1 = 194, SECT = 9;
  const P = (r, a) => [+(CX + Math.cos(a * Math.PI / 180) * r).toFixed(2), +(CZ + Math.sin(a * Math.PI / 180) * r).toFixed(2)];
  // 고리 길: 모서리 바로 옆(약 0.8)에 점을 하나 더 찍어 꺾이는 곳은 날카롭게, 고리 부분은 부드럽게
  const arc = (r, a0, a1, out, k0 = 0.8, k1 = 0.8) => {
    const s = Math.sign(a1 - a0), d0 = s * k0 / r * 180 / Math.PI, d1 = s * k1 / r * 180 / Math.PI;
    const n = Math.max(1, Math.ceil(Math.abs(a1 - a0 - d0 - d1) / 8));
    if (k0) out.push(P(r, a0 + d0));
    for (let i = 1; i < n; i++) out.push(P(r, a0 + d0 + (a1 - a0 - d0 - d1) * i / n));
    if (k1) out.push(P(r, a1 - d1)); out.push(P(r, a1));
  };
  const radial = (r0, r1, a, out) => { const k = Math.sign(r1 - r0) * 0.8; out.push(P(r0 + k, a), P(r1 - k, a), P(r1, a)); };

  const tip = P(RA, A0), trunk = [[42, tip[1]], [38.8, tip[1]]];
  trunk.push(tip);
  arc(RA, A0, A1, trunk);                       // 사도보예 고리 (동 → 남 → 서)
  radial(RA, RB, A1, trunk);                    // 서쪽 끝: 안쪽으로
  const step = (A1 - A0) / SECT;
  let a = A1;
  for (let i = 0; i < SECT; i++) {              // 불바르 고리 ↔ 안쪽 고리 사이 방사 대로 지그재그 (서 → 동)
    const r = i % 2 ? RC : RB, b = a - step;
    arc(r, a, b, trunk);
    radial(r, i === SECT - 1 ? RK : (i % 2 ? RB : RC), b, trunk);
    a = b;
  }
  arc(RK, A0, A1, trunk);                       // 크렘린 성벽 고리 (동 → 남 → 서)
  trunk.push(P(RK - 0.8, A1), P(3.2, A1), P(1.6, A1));

  GF.STAGES.moscow = {
    id: 'moscow', no: 10,
    name: '모스크바', nameEn: 'MOSCOW', alias: '붉은광장시', title: '크렘린 방어전',
    briefing: '부카니스탄 최정예 친위군이 모스크바강 강변로, 레닌스키·볼고그라드·쿠투조프스키 대로로 모스크바에 들이닥친다. 사도보예 고리와 불바르 고리, 트베르스카야 같은 방사 대로를 굽이굽이 지나 붉은광장 옆 크렘린 지휘부를 끝까지 지켜라.',
    seed: 'moscow-2030',
    lives: 20, startMoney: 1000, hpScale: 0.19, hpQuad: 0.0085, bossHp: 0.5,
    bounds: { x0: -42, x1: 42, z0: -28, z1: 28 },
    gate: trunk[0], base: [0, -16],
    theme: { city: 'moscow', ground: 'plaza', groundTint: 0xc9c7c4, edge: 0x9a5a48, hedge: 0x3c6232 },
    parkTrees: 80,
    route: [{ id: 'M', name: '모스크바강 강변로', pts: trunk }],
    branches: [
      { id: 'L', name: '레닌스키 대로', sharp: true, fromWave: 4, gate: [-16, 28], pts: [[-16, 28], [-16, 24.5], [-39, 24.5], [-39, 18], [-27, 18], P(RA, 180 - Math.acos(27 / RA) * 180 / Math.PI)] },
      { id: 'V', name: '볼고그라드 대로', sharp: true, fromWave: 10, gate: [16, 28], pts: [[16, 28], [16, 24.5], [39, 24.5], [39, 18], [27, 18], P(RA, Math.acos(27 / RA) * 180 / Math.PI)] },
      { id: 'W', name: '쿠투조프스키 대로', sharp: true, fromWave: 13, gate: [-42, -3], pts: [[-42, -3], P(RA, 180 - Math.asin(13 / RA) * 180 / Math.PI)] }
    ],
    airEntry: 'withGround',
    // 전투 구역 안 랜드마크: 고리 사이 빈 땅(방사 대로 사이 주머니)과 지휘부 뒤(북쪽)
    blockers: [
      { kind: 'landmark', id: 'kremlin', label: '크렘린 스파스카야 탑', x: 1.5, z: -24.6, w: 8.6, d: 3.2, y: 7.2 },
      { kind: 'landmark', id: 'basil', label: '성 바실리 대성당', x: 26.2, z: -6.2, w: 4.4, d: 4.4, y: 5.4 },
      { kind: 'landmark', id: 'bolshoi', label: '볼쇼이 극장', x: -26.2, z: -6.2, w: 4.4, d: 4.0, y: 3.4 },
      { kind: 'landmark', id: 'gum', label: '굼 백화점', x: 0, z: 9, w: 5.0, d: 3.0, y: 2.6 }
    ],
    river: { z: -40, w: 7, kind: 'moscow' },
    landmarks: [
      { id: 'msu', label: '모스크바 국립대학교', x: 54, z: -18, y: 31 },
      { id: 'mcity', label: '모스크바 시티', x: -53, z: -20, y: 30 },
      { id: 'ostankino', label: '오스탄키노 타워', x: 30, z: -58, y: 43 },
      { id: 'saviour', label: '구세주 그리스도 대성당', x: -16, z: -50, y: 11 },
      { id: 'river', label: '모스크바강', x: 20, z: -37.8, y: 0.3 }
    ],
    waves: stretch([
      'apc 19', 'inf 43', 'apc 22 inf 20', 'apc 24 inf 34', 'inf 40 apc 19',
      'tank 8 apc 29', 'inf 67 drone 22', 'tank 9 apc 32', 'drone 30 apc 34', 'heli 6 tank 11 apc 34',
      'apc 60 inf 58', 'drone 60 tank 14', 'tank 22 apc 46', 'heli 10 drone 48', 'apc 72 tank 14',
      'inf 115 heli 8', 'drone 84 apc 58', 'tank 29 heli 11', 'apc 96 drone 70 tank 19', 'boss 1 tank 24 apc 72 drone 50'
    ], 40),   // 사용자 요청: 모스크바 40웨이브
    autoNextSec: 10
  };
})();
