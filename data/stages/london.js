// 스테이지 5: 런던 (웨스트민스터 · 구불구불한 옛 런던 거리)
// 좌표: x = 동(+)·서(-), z = 남(+)·북(-). 전투 구역 x -38~38, z -25~25
// 본 도로: 북쪽 킹스웨이로 들어와 스트랜드(맨 윗줄)를 따라 서쪽 → 트래펄가 광장 로터리(넬슨 기념탑)를 3/4 바퀴 돌고
//   팰맬 → 템스강 굽이처럼 S자로 휘는 거리 4줄(플리트 스트리트·더 몰·화이트홀)을 지그재그로 내려와 남서쪽 웨스트민스터 지휘부
// 갈래 길: 하이드 파크 코너(북서, 피커딜리 → 서쪽 굽이에서 합류), 시티 오브 런던(동, 플리트 스트리트 → 팰맬에 합류)
window.GF = window.GF || {};
GF.STAGES = GF.STAGES || {};

(function () {
  const r2 = (v) => +v.toFixed(2);
  const pts = [];
  const put = (x, z) => { const l = pts[pts.length - 1]; if (!l || Math.hypot(l[0] - x, l[1] - z) > 0.3) pts.push([r2(x), r2(z)]); };
  // 곧은 길 (1.6 간격으로 점), 호(a0→a1 도, 반지름 r)
  const line = (x0, z0, x1, z1, f) => { const n = Math.max(1, Math.ceil(Math.hypot(x1 - x0, z1 - z0) / 1.6)); for (let i = 1; i <= n; i++) { const t = i / n, x = x0 + (x1 - x0) * t; put(x, z0 + (z1 - z0) * t + (f ? f(x) : 0)); } };
  const arc = (cx, cz, r, a0, a1) => { const n = Math.max(2, Math.ceil(Math.abs(a1 - a0) / 10)); for (let i = 1; i <= n; i++) { const a = (a0 + (a1 - a0) * i / n) * Math.PI / 180; put(cx + Math.cos(a) * r, cz + Math.sin(a) * r); } };
  // 템스강 굽이 같은 S자 흔들림: 양 끝(x=±28.5)에서 0, 모든 줄이 같은 위상 → 줄 사이 간격은 그대로
  const XE = 28.5, wig = (x) => 1.25 * Math.sin(2 * Math.PI * (x + 4) / 22) * Math.sin(Math.PI * (x + XE) / (2 * XE));
  const ZA = -20, LC = [-22, -14], LR = 6, ZB = -13.5, ZC = -1.5, ZD = 9.5, ZE = 21;
  // 킹스웨이 → 스트랜드
  put(14, -25); put(14, -23.6); arc(11, -23, 3, 0, 90); line(11, ZA, 2, ZA); line(2, ZA, LC[0] + 1.6, ZA);
  // 트래펄가 광장: 북쪽 점에서 반시계(화면) 방향으로 서→남→동 3/4 바퀴 (-90° → -360°)
  arc(LC[0], LC[1], LR, -90, -320);
  // 광장을 빠져나와 반대로 휘며 동쪽 팰맬로 (접선이 이어지는 역방향 호)
  const ex = -320 * Math.PI / 180, ux = Math.cos(ex), uz = Math.sin(ex), PX = LC[0] + LR * ux, PZ = LC[1] + LR * uz;
  const rho = (PZ - ZB) / (1 - uz), qx = PX + rho * ux, qz = PZ + rho * uz;
  arc(qx, qz, rho, 180 + 40, 270);
  line(qx, ZB, XE, ZB);                             // 팰맬
  arc(XE, (ZB + ZC) / 2, (ZC - ZB) / 2, -90, 90);   // 동쪽 굽이
  line(XE, ZC, -XE, ZC, wig);                       // 플리트 스트리트 (S자)
  arc(-XE, (ZC + ZD) / 2, (ZD - ZC) / 2, -90, -270);
  line(-XE, ZD, XE, ZD, wig);                       // 더 몰 (S자)
  arc(XE, (ZD + ZE) / 2, (ZE - ZD) / 2, -90, 90);
  line(XE, ZE, -28, ZE, (x) => wig(x) * 0.7);        // 화이트홀 → 웨스트민스터
  const main = pts.slice();

  // 갈래 길 1: 하이드 파크 코너 → 피커딜리 (북서 가장자리에서 남쪽으로, 서쪽 굽이 가장 바깥 점에서 합류)
  const cw = [-XE, (ZC + ZD) / 2], rw = (ZD - ZC) / 2, joinW = [r2(cw[0] - rw), r2(cw[1])];
  const hyde = [[-34.6, -25], [-34.6, -21], [-34.4, -16], [-34.7, -10], [-34.6, -5], [-34.4, -1], joinW];
  // 갈래 길 2: 시티 오브 런던 → 플리트 스트리트 (동쪽 가장자리에서 서쪽으로, 팰맬에 합류)
  const joinE = main.reduce((b, p) => (Math.abs(p[1] - ZB) < 0.05 && Math.abs(p[0] - 19) < Math.abs(b[0] - 19) ? p : b), [999, 0]);
  const city = [[38, -21], [34, -21], [29.5, -20.6], [25.5, -18.8], [22, -16.2], joinE];

  GF.STAGES.london = {
    id: 'london', no: 5,
    name: '런던', nameEn: 'LONDON', alias: '템스시', title: '웨스트민스터 방어전',
    briefing: '부카니스탄 원정군이 킹스웨이, 하이드 파크 코너, 시티 오브 런던의 플리트 스트리트로 쳐들어온다. 스트랜드에서 트래펄가 광장 로터리를 돌아 템스강처럼 굽이치는 거리를 내려오는 적을 막아 웨스트민스터 지휘부를 지켜라.',
    seed: 'london-2030',
    lives: 20, startMoney: 850, hpScale: 0.13, hpQuad: 0.0046, bossHp: 0.3,
    bounds: { x0: -38, x1: 38, z0: -25, z1: 25 },
    gate: main[0], base: [-29.6, 21],
    theme: { city: 'london', ground: 'plaza', groundTint: 0xcfc8bc, edge: 0xb9b2a4, hedge: 0x3d6634 },
    streetFront: { depth: 0.55, gap: [6, 11] },
    parkTrees: 40,
    route: [{ id: 'S', name: '스트랜드', pts: main }],
    branches: [
      { id: 'P', name: '피커딜리', fromWave: 4, gate: hyde[0], pts: hyde },
      { id: 'F', name: '플리트 스트리트', fromWave: 10, gate: city[0], pts: city }
    ],
    airEntry: 'withGround',
    blockers: [
      { kind: 'landmark', id: 'nelson', label: '트래펄가 광장', x: LC[0], z: LC[1], w: 3.4, d: 3.4, y: 5.6 },
      { kind: 'landmark', id: 'buckingham', label: '버킹엄 궁전', x: 6, z: -7.6, w: 7.6, d: 3.4, y: 2.6 },
      { kind: 'landmark', id: 'stpauls', label: '세인트 폴 대성당', x: 13, z: r2(4 + wig(13)), w: 5.6, d: 3.8, y: 6.2 },
      { kind: 'landmark', id: 'piccadilly', label: '피커딜리 서커스', x: -9, z: r2(15.25 + wig(-9)), w: 5, d: 3.6, y: 2.6 }
    ],
    river: { z: -44, w: 8, kind: 'london' },
    landmarks: [
      { id: 'westminster', label: '빅벤 · 국회의사당', x: -6, z: -34, y: 13 },
      { id: 'towerbridge', label: '타워 브리지', x: 28, z: -44, y: 9 },
      { id: 'londoneye', label: '런던 아이', x: -54, z: -12, y: 15 },
      { id: 'shard', label: '더 샤드', x: 54, z: -6, y: 27 },
      { id: 'river', label: '템스강', x: 14, z: -41.4, y: 0.3 }
    ],
    // 파리 웨이브 × 약 1.12
    waves: [
      'apc 18', 'inf 40', 'apc 20 drone 16', 'apc 22 inf 31', 'drone 34 apc 18',
      'tank 8 apc 27', 'inf 63 drone 29', 'tank 12 apc 31', 'drone 54 apc 29', 'heli 7 tank 10 apc 31',
      'apc 56 inf 54', 'drone 67 tank 13', 'tank 20 apc 43', 'heli 11 drone 54', 'apc 67 tank 13',
      'inf 108 heli 9', 'drone 94 apc 54', 'tank 27 heli 12', 'apc 90 drone 78 tank 18', 'boss 1 tank 22 apc 67 drone 56'
    ],
    autoNextSec: 10
  };
})();
