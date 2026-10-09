// 전투 진입 연출 (약 3초): 도시의 대표 모습을 캐리커처로 그리고, 북한군이 미사일을 쏘며 쳐들어오는 장면
//   전투지역 화면에서 [전투시작]·[이어하기]를 누르면 재생 → 끝나면 게임으로. 화면을 누르면 건너뜀
//   2D 캔버스(1920x1080 기준)에 굵은 외곽선 만화풍으로 그림. 도시마다 SCENES[id] 를 추가하면 됨 (2026-10-09 서울 먼저)
const W = 1920, H = 1080, INK = '#1d1a26';
const DUR = 3.2;   // 마지막 0.4초는 화면이 어두워지며 게임으로

// 같은 모양이 매번 나오도록 고정 난수
function rng(seed) { let a = seed >>> 0; return () => { a = (a + 0x6d2b79f5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
const ease = (k) => k * k * (3 - 2 * k);
const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));

function shape(g, pts, fill, lw = 4) {
  g.beginPath(); pts.forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y))); g.closePath();
  g.fillStyle = fill; g.fill(); if (lw) { g.lineWidth = lw; g.strokeStyle = INK; g.lineJoin = 'round'; g.stroke(); }
}
function box(g, x, y, w, h, fill, lw = 4) { shape(g, [[x, y], [x + w, y], [x + w, y + h], [x, y + h]], fill, lw); }
function star(g, x, y, r, fill = '#e8302a') {
  g.beginPath();
  for (let k = 0; k < 10; k++) { const a = -Math.PI / 2 + k * Math.PI / 5, rr = k % 2 ? r * 0.42 : r; g.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr); }
  g.closePath(); g.fillStyle = fill; g.fill();
}

// ---------- 서울 ----------
// 북한산 능선 · 남산과 N서울타워 · 63빌딩 · 롯데월드타워 · 광화문 · 아파트 단지 · 한강과 반포대교
function seoulCity() {
  const r = rng(2030), apts = [];
  for (let x = 120; x < W; x += 52 + r() * 30) {
    if (x > 820 && x < 1010) continue;   // 광화문 자리
    apts.push({ x, w: 40 + r() * 26, h: 70 + r() * 120, c: ['#f2e6cf', '#e8d8f0', '#d6e8f2', '#f2d8c8', '#e2efd6'][Math.floor(r() * 5)] });
  }
  return {
    // 맞을 곳 (미사일 목표)
    targets: [[1650, 420], [1460, 520], [1250, 470], [700, 640], [1090, 650]],
    draw(g, t, fires) {
      // 북한산 능선
      shape(g, [[0, 700], [0, 520], [120, 470], [210, 500], [330, 400], [420, 455], [520, 380], [600, 430], [700, 470], [820, 430], [960, 500], [1100, 470], [1200, 520], [1400, 540], [1600, 500], [1780, 540], [W, 510], [W, 700]], '#4b5a7a', 5);
      shape(g, [[310, 420], [330, 400], [352, 418], [342, 440]], '#c8d2e6', 0);   // 바위 봉우리 빛
      shape(g, [[500, 398], [520, 380], [540, 400]], '#c8d2e6', 0);
      // 남산 + N서울타워
      shape(g, [[1060, 700], [1140, 600], [1250, 560], [1360, 600], [1440, 700]], '#3f7a4a', 5);
      box(g, 1240, 390, 20, 175, '#f4f4f4');
      shape(g, [[1222, 380], [1278, 380], [1272, 402], [1228, 402]], '#d9dde6');
      g.beginPath(); g.ellipse(1250, 370, 38, 16, 0, 0, Math.PI * 2); g.fillStyle = '#f4f4f4'; g.fill(); g.lineWidth = 4; g.strokeStyle = INK; g.stroke();
      box(g, 1246, 300, 8, 56, '#e83a3a', 3);
      g.fillStyle = 'rgba(255,240,170,' + (0.6 + Math.sin(t * 12) * 0.3) + ')'; g.beginPath(); g.arc(1250, 298, 6, 0, 7); g.fill();
      // 63빌딩 (금빛 유리)
      const gr = g.createLinearGradient(1420, 0, 1500, 0); gr.addColorStop(0, '#f6d36a'); gr.addColorStop(0.5, '#fff1b0'); gr.addColorStop(1, '#d9a63a');
      shape(g, [[1420, 700], [1428, 470], [1460, 440], [1492, 470], [1500, 700]], gr);
      g.strokeStyle = 'rgba(120,80,20,.4)'; g.lineWidth = 2; for (let y = 480; y < 700; y += 14) { g.beginPath(); g.moveTo(1428, y); g.lineTo(1494, y); g.stroke(); }
      // 롯데월드타워 (위로 갈수록 가늘어지는 붓끝)
      const lg = g.createLinearGradient(1610, 0, 1690, 0); lg.addColorStop(0, '#9fc4e6'); lg.addColorStop(0.5, '#e8f4ff'); lg.addColorStop(1, '#7aa4cc');
      shape(g, [[1608, 700], [1630, 330], [1646, 200], [1650, 150], [1654, 200], [1670, 330], [1692, 700]], lg);
      g.strokeStyle = 'rgba(40,60,90,.35)'; g.lineWidth = 2; g.beginPath(); g.moveTo(1650, 160); g.lineTo(1650, 700); g.stroke();
      // 아파트 단지
      for (const a of apts) {
        const y = 720 - a.h; box(g, a.x, y, a.w, a.h, a.c, 3);
        g.fillStyle = '#5a6a86'; for (let wy = y + 10; wy < 708; wy += 16) for (let wx = a.x + 6; wx < a.x + a.w - 8; wx += 12) g.fillRect(wx, wy, 6, 8);
      }
      // 광화문: 석축 + 홍예문 + 2층 기와지붕
      box(g, 830, 600, 170, 110, '#d8cdb8');
      g.beginPath(); g.moveTo(895, 710); g.lineTo(895, 660); g.arc(915, 660, 20, Math.PI, 0); g.lineTo(935, 710); g.fillStyle = '#3a2e2a'; g.fill();
      box(g, 860, 560, 110, 40, '#b8352e');
      shape(g, [[812, 572], [840, 540], [990, 540], [1018, 572], [990, 562], [840, 562]], '#2e3440');
      box(g, 878, 512, 74, 28, '#b8352e');
      shape(g, [[848, 522], [872, 494], [958, 494], [982, 522], [958, 514], [872, 514]], '#2e3440');
      // 한강 + 반포대교
      const rv = g.createLinearGradient(0, 720, 0, 870); rv.addColorStop(0, '#3a6fa8'); rv.addColorStop(1, '#22476e');
      g.fillStyle = rv; g.fillRect(0, 718, W, 152);
      g.strokeStyle = 'rgba(255,190,120,.55)'; g.lineWidth = 3;
      for (let i = 0; i < 14; i++) { const y = 740 + (i % 7) * 18, x = ((i * 233 + t * 60) % (W + 200)) - 100; g.beginPath(); g.moveTo(x, y); g.lineTo(x + 70, y); g.stroke(); }
      box(g, 0, 770, W, 16, '#c9c2b2');
      for (let x = 60; x < W; x += 160) { g.beginPath(); g.moveTo(x, 786); g.quadraticCurveTo(x + 80, 840, x + 160, 786); g.lineWidth = 4; g.strokeStyle = INK; g.stroke(); }
      // 무지개 분수 (반포대교 명물)
      for (let x = 100; x < W; x += 120) { g.strokeStyle = `hsla(${(x / 6 + t * 120) % 360},90%,65%,.75)`; g.lineWidth = 3; g.beginPath(); g.moveTo(x, 786); g.quadraticCurveTo(x + 22, 812, x + 34, 850); g.stroke(); }
      // 불타는 곳
      for (const f of fires) {
        const k = Math.sin(t * 20 + f.x) * 0.15 + 1;
        g.fillStyle = 'rgba(255,120,30,.85)'; g.beginPath(); g.ellipse(f.x, f.y, 26 * k, 34 * k, 0, 0, 7); g.fill();
        g.fillStyle = 'rgba(255,230,120,.9)'; g.beginPath(); g.ellipse(f.x, f.y + 6, 12 * k, 18 * k, 0, 0, 7); g.fill();
      }
    },
    name: '서울', en: 'SEOUL'
  };
}
const SCENES = { seoul: seoulCity };
export const hasInvasion = (id) => !!SCENES[id];

// ---------- 북한군 (모든 도시 공통) ----------
function tel(g, x, y, ang) {   // 이동식 발사대 트럭: 녹색 차체 + 붉은 별 + 비스듬히 선 미사일
  box(g, x, y - 46, 230, 46, '#4d5e2e');
  box(g, x + 170, y - 86, 64, 44, '#5a6d36');
  box(g, x + 184, y - 78, 34, 18, '#a8c4d8', 3);
  star(g, x + 60, y - 23, 14);
  for (const wx of [30, 90, 150, 205]) { g.beginPath(); g.arc(x + wx, y, 20, 0, 7); g.fillStyle = '#222'; g.fill(); g.lineWidth = 4; g.strokeStyle = INK; g.stroke(); g.fillStyle = '#777'; g.beginPath(); g.arc(x + wx, y, 7, 0, 7); g.fill(); }
  g.save(); g.translate(x + 40, y - 50); g.rotate(-ang);
  box(g, 0, -12, 170, 24, '#6e7f46');
  return () => g.restore();
}
function missileBody(g, x, y, a, s = 1) {
  g.save(); g.translate(x, y); g.rotate(a); g.scale(s, s);
  shape(g, [[-40, -9], [26, -9], [44, 0], [26, 9], [-40, 9]], '#e8e8e0', 3);
  shape(g, [[-40, -9], [-52, -20], [-30, -9]], '#c0392b', 3); shape(g, [[-40, 9], [-52, 20], [-30, 9]], '#c0392b', 3);
  box(g, 0, -9, 6, 18, '#c0392b', 0);
  g.restore();
}
function tank(g, x, y, s, t) {
  g.save(); g.translate(x, y); g.scale(s, s);
  box(g, -70, -26, 140, 30, '#556a32');
  g.beginPath(); g.ellipse(0, -36, 46, 22, 0, 0, 7); g.fillStyle = '#617a3a'; g.fill(); g.lineWidth = 4; g.strokeStyle = INK; g.stroke();
  box(g, 30, -44, 92, 10, '#4a5c2c', 3);   // 포신 (도시 쪽 오른쪽)
  star(g, -6, -38, 11);
  shape(g, [[-80, 4], [80, 4], [70, 26], [-70, 26]], '#2a2a26');
  for (let i = -3; i <= 3; i++) { g.fillStyle = '#6a6a60'; g.beginPath(); g.arc(i * 20 + ((t * 40) % 20) - 10, 15, 6, 0, 7); g.fill(); }
  g.restore();
}
function soldier(g, x, y, s, ph) {
  g.save(); g.translate(x, y); g.scale(s, s);
  const sw = Math.sin(ph) * 0.5;
  g.lineCap = 'round'; g.strokeStyle = '#3d4a24'; g.lineWidth = 10;
  g.beginPath(); g.moveTo(0, -30); g.lineTo(Math.sin(sw) * 18, 0); g.moveTo(0, -30); g.lineTo(-Math.sin(sw) * 18, 0); g.stroke();
  box(g, -13, -66, 26, 38, '#56683a', 3);
  g.strokeStyle = '#2a2a2a'; g.lineWidth = 5; g.beginPath(); g.moveTo(10, -60); g.lineTo(22, -94); g.stroke();   // 어깨에 멘 소총
  g.beginPath(); g.arc(0, -78, 12, 0, 7); g.fillStyle = '#e3b48f'; g.fill(); g.lineWidth = 3; g.strokeStyle = INK; g.stroke();
  shape(g, [[-15, -84], [15, -84], [12, -96], [-12, -96]], '#56683a', 3);   // 모자
  star(g, 0, -88, 5);
  g.restore();
}
function nkFlag(g, x, y, t) {   // 비슷한 깃발: 파랑·흰·빨강 띠 + 흰 원 안 붉은 별
  g.fillStyle = '#5a4a3a'; g.fillRect(x - 3, y, 6, 150);
  g.save(); g.translate(x + 3, y);
  const wv = (u) => Math.sin(t * 8 + u * 6) * 6 * u;
  const band = (y0, y1, c) => { g.beginPath(); g.moveTo(0, y0); for (let u = 0; u <= 1.001; u += 0.1) g.lineTo(u * 120, y0 + wv(u)); for (let u = 1; u >= -0.001; u -= 0.1) g.lineTo(u * 120, y1 + wv(u)); g.closePath(); g.fillStyle = c; g.fill(); };
  band(0, 12, '#2a4fa8'); band(12, 15, '#fff'); band(15, 57, '#d8282a'); band(57, 60, '#fff'); band(60, 72, '#2a4fa8');
  g.beginPath(); g.arc(38, 36 + wv(0.32), 15, 0, 7); g.fillStyle = '#fff'; g.fill(); star(g, 38, 36 + wv(0.32), 13);
  g.restore();
}
function jet(g, x, y, s) {
  g.save(); g.translate(x, y); g.scale(s, s);
  shape(g, [[-60, 0], [40, -6], [64, 0], [40, 6]], '#7d8a90', 3);
  shape(g, [[-10, -4], [10, -4], [-24, -34], [-34, -34]], '#6a767c', 3); shape(g, [[-10, 4], [10, 4], [-24, 30], [-34, 30]], '#6a767c', 3);
  shape(g, [[-60, 0], [-48, -22], [-40, -2]], '#6a767c', 3);
  star(g, -20, -14, 6);
  g.restore();
}

// ---------- 재생 ----------
// host: 오버레이를 붙일 곳 (ui.root, 1920x1080 기준). sound(name) 효과음. done() 끝나면 호출
export function playInvasion(host, id, sound, done) {
  const city = SCENES[id] && SCENES[id]();
  if (!city) { done(); return; }
  const el = document.createElement('div'); el.className = 'invasion';
  el.innerHTML = '<canvas></canvas><div class="iv-skip">화면을 누르면 건너뜀</div>';
  host.appendChild(el);
  const cv = el.querySelector('canvas'); cv.width = W; cv.height = H;
  const g = cv.getContext('2d');
  // 미사일: 발사대 끝에서 도시의 목표로 포물선
  const LAUNCH = [0.2, 0.62, 1.04, 1.46, 1.8], FLY = 0.62, from = [200, 712];
  const shots = LAUNCH.map((t0, i) => ({ t0, to: city.targets[i % city.targets.length], hit: false }));
  const fires = [], booms = [], smoke = [];
  let shake = 0, t = 0, last = performance.now(), ended = false;
  const start = last;   // 느린 기기에서도 3초에 끝나도록 실제 시간 기준
  const finish = () => { if (ended) return; ended = true; el.remove(); done(); };
  el.addEventListener('pointerdown', finish);
  if (sound) sound('siren');
  const bez = (a, c, b, k) => [(1 - k) ** 2 * a[0] + 2 * (1 - k) * k * c[0] + k * k * b[0], (1 - k) ** 2 * a[1] + 2 * (1 - k) * k * c[1] + k * k * b[1]];
  const step = (now) => {
    if (ended) return;
    const dt = Math.min(0.1, (now - last) / 1000); last = now; t = (now - start) / 1000;
    if (t >= DUR) { finish(); return; }
    g.setTransform(1, 0, 0, 1, 0, 0);
    // 하늘: 저녁노을이 점점 붉게
    const red = clamp(t / 2);
    const sky = g.createLinearGradient(0, 0, 0, 720);
    sky.addColorStop(0, `rgb(${40 + red * 40},${26 + red * 6},${58 - red * 20})`); sky.addColorStop(1, `rgb(${210 + red * 30},${110 - red * 50},${60 - red * 20})`);
    g.fillStyle = sky; g.fillRect(0, 0, W, H);
    if (shake > 0) { shake -= dt; g.translate((Math.random() - 0.5) * 22 * shake / 0.3, (Math.random() - 0.5) * 22 * shake / 0.3); }
    // 전투기 편대가 하늘을 가로지름
    for (let i = 0; i < 3; i++) jet(g, -200 + (t - 0.4) * 900 - i * 90, 230 + i * 40, 1.1 - i * 0.12);
    city.draw(g, t, fires);
    // 연기
    for (const s of smoke) { s.y -= dt * 60; s.r += dt * 26; s.a -= dt * 0.35; }
    for (const s of smoke) if (s.a > 0) { g.fillStyle = `rgba(40,34,38,${s.a})`; g.beginPath(); g.arc(s.x, s.y, s.r, 0, 7); g.fill(); }
    // 강 건너 쪽(앞)에서 쳐들어오는 북한군: 기슭 + 전차 + 병사 + 깃발
    shape(g, [[0, 870], [W, 870], [W, H], [0, H]], '#5c5a3c', 0);
    g.fillStyle = '#4a4830'; g.fillRect(0, 870, W, 10);
    const adv = ease(clamp(t / DUR));
    for (let i = 0; i < 3; i++) tank(g, 480 + i * 330 + adv * 360, 960 + (i % 2) * 34, 1, t);
    for (let i = 0; i < 14; i++) soldier(g, 380 + i * 95 + adv * 420, 1060 - (i % 2) * 18, 0.95, t * 9 + i);
    nkFlag(g, 560 + adv * 420, 900, t);
    // 발사대: 미사일을 세웠다가 쏨 (발사 직후 화염)
    const restore = tel(g, 60, 900, 0.95);
    const next = shots.find((s) => t < s.t0);
    if (next && next.t0 - t < 0.35) missileBody(g, 150, 0, 0, 1.2);
    restore();
    for (const s of shots) {
      const k = (t - s.t0) / FLY;
      if (k < 0) continue;
      if (!s.fired) { s.fired = true; if (sound) sound('missile'); for (let q = 0; q < 6; q++) smoke.push({ x: from[0] + Math.random() * 60, y: from[1] + Math.random() * 30, r: 20, a: 0.55 }); }
      const ctrl = [(from[0] + s.to[0]) / 2, Math.min(from[1], s.to[1]) - 420];
      if (k < 1) {
        const [x, y] = bez(from, ctrl, s.to, k), [x2, y2] = bez(from, ctrl, s.to, Math.min(1, k + 0.02));
        for (let q = 1; q <= 8; q++) { const [tx, ty] = bez(from, ctrl, s.to, Math.max(0, k - q * 0.03)); g.fillStyle = `rgba(230,220,210,${0.5 - q * 0.05})`; g.beginPath(); g.arc(tx, ty, 6 + q * 2, 0, 7); g.fill(); }
        g.fillStyle = '#ffb347'; g.beginPath(); g.arc(x - (x2 - x) * 2, y - (y2 - y) * 2, 10, 0, 7); g.fill();
        missileBody(g, x, y, Math.atan2(y2 - y, x2 - x), 0.9);
      } else if (!s.hit) {
        s.hit = true; shake = 0.3; if (sound) sound('bigboom');
        booms.push({ x: s.to[0], y: s.to[1], t: 0 }); fires.push({ x: s.to[0] + (Math.random() - 0.5) * 20, y: s.to[1] + 10 });
        for (let q = 0; q < 8; q++) smoke.push({ x: s.to[0] + (Math.random() - 0.5) * 70, y: s.to[1] - Math.random() * 40, r: 24, a: 0.7 });
      }
    }
    // 폭발: 흰 섬광 → 주황 불덩이 → 고리
    for (const b of booms) {
      b.t += dt; const k = b.t / 0.6; if (k > 1) continue;
      g.fillStyle = `rgba(255,250,220,${0.9 * (1 - k)})`; g.beginPath(); g.arc(b.x, b.y, 40 + k * 140, 0, 7); g.fill();
      g.fillStyle = `rgba(255,140,40,${1 - k})`; g.beginPath(); g.arc(b.x, b.y, 30 + k * 90, 0, 7); g.fill();
      g.strokeStyle = `rgba(255,220,150,${1 - k})`; g.lineWidth = 8; g.beginPath(); g.arc(b.x, b.y, 60 + k * 200, 0, 7); g.stroke();
    }
    // 긴급 속보 띠 + 도시 이름
    g.setTransform(1, 0, 0, 1, 0, 0);
    const blink = Math.sin(t * 10) > 0;
    g.fillStyle = blink ? '#d8202a' : '#a8141c'; g.fillRect(0, 40, W, 92);
    g.fillStyle = '#fff'; g.font = '900 56px "Noto Sans KR", sans-serif'; g.textBaseline = 'middle'; g.textAlign = 'left';
    g.fillText(`⚠ 긴급 속보 · 북한군 ${city.name} 침공!`, 60 + Math.max(0, 1 - t * 4) * -900, 88);
    g.textAlign = 'right'; g.font = '900 120px "Noto Sans KR", sans-serif'; g.lineWidth = 10; g.strokeStyle = INK;
    const nk = clamp((t - 0.3) * 3);
    g.globalAlpha = nk; g.strokeText(city.name, W - 60, 230); g.fillStyle = '#ffe9b0'; g.fillText(city.name, W - 60, 230);
    g.font = '800 36px sans-serif'; g.fillStyle = '#fff'; g.fillText(city.en + ' · 2030', W - 64, 310); g.globalAlpha = 1;
    // 끝: 어두워지며 게임으로
    const fade = clamp((t - (DUR - 0.4)) / 0.4);
    if (fade > 0) { g.fillStyle = `rgba(0,0,0,${fade})`; g.fillRect(0, 0, W, H); }
    requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
