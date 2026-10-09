// 홈 화면 움직이는 배경: 홈 그림(settings.homeBg)을 조각내 열병식 장면으로 움직임
// - 두 캐릭터: 숨쉬기·고개 끄덕임·눈 깜빡임 (팔은 그리지 않음: 사용자 요청으로 뺌)
// - 깃발 펄럭임, 탐조등, 축포, 헬기 편대, 행진하는 병사 대열, 불씨
// 좌표는 모두 원본 그림(1672x941) 기준. 그림은 CSS 'cover · 오른쪽 정렬'과 같은 방식으로 화면에 맞춤
const IW = 1672, IH = 941;

// 캐릭터 조각 (그림 기준 다각형) · pivot: 움직임 중심
const PARTS = {
  kimBody: { pts: [[560, 330], [690, 318], [800, 345], [905, 336], [940, 380], [955, 430], [985, 520], [995, 640], [560, 640]], pivot: [790, 640] },
  kimHead: { pts: [[650, 140], [668, 88], [720, 52], [800, 44], [882, 52], [928, 95], [944, 150], [940, 232], [918, 292], [872, 322], [800, 334], [728, 322], [688, 292], [664, 240], [652, 190]], pivot: [800, 332] },
  girlBody: { pts: [[955, 440], [1060, 452], [1160, 448], [1212, 468], [1242, 540], [1262, 640], [1262, 720], [985, 720], [978, 520]], pivot: [1110, 720] },
  girlHead: { pts: [[932, 330], [948, 282], [990, 250], [1060, 236], [1122, 244], [1164, 282], [1192, 332], [1202, 400], [1218, 462], [1192, 488], [1150, 458], [1100, 462], [1040, 456], [990, 446], [952, 424]], pivot: [1080, 462] }
};
const FLAG = [[600, 0], [1240, 0], [1240, 420], [600, 420]];
// 눈 (깜빡임): 가운데 x,y · 반폭 · 반높이 · 기울기
const EYES = { kim: [[812, 162, 24, 9, 0.05], [884, 170, 22, 9, 0.08]], girl: [[1088, 342, 20, 13, 0.05], [1146, 348, 18, 12, 0.1]] };

function poly(ctx, pts) { ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.closePath(); }
function canvas(w = IW, h = IH) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }
// 그림에서 다각형 모양으로 오려 냄 (가장자리는 흐리게)
function cut(img, pts, feather = 6, minus = []) {
  const c = canvas(), g = c.getContext('2d');
  g.filter = `blur(${feather}px)`; g.fillStyle = '#000'; poly(g, pts); g.fill();
  g.globalCompositeOperation = 'destination-out';
  for (const m of minus) { poly(g, m); g.fill(); }
  g.filter = 'none'; g.globalCompositeOperation = 'source-in'; g.drawImage(img, 0, 0);
  return c;
}
const R = (a, b) => a + Math.random() * (b - a);

export class HomeAnim {
  constructor(host, src) {
    this.host = host;
    this.cv = document.createElement('canvas'); this.cv.className = 'home-anim';
    host.prepend(this.cv);
    this.g = this.cv.getContext('2d');
    this.t = 0; this.last = 0; this.parts = null; this.sparks = []; this.fw = []; this.nextFw = 1.2; this.blinkT = { kim: 2, girl: 3.1 }; this.heli = [];
    this.img = new Image();
    this.img.onload = () => { this.prepare(); this.loop(performance.now()); };
    this.img.src = src;
  }
  prepare() {
    const img = this.img, P = {};
    const girl = PARTS.girlHead.pts.concat([]), gb = PARTS.girlBody.pts;
    P.kimBody = cut(img, PARTS.kimBody.pts, 8, [girl, gb]);
    P.kimHead = cut(img, PARTS.kimHead.pts, 5, [girl]);
    P.girlBody = cut(img, PARTS.girlBody.pts, 7);
    P.girlHead = cut(img, PARTS.girlHead.pts, 5);
    P.flag = cut(img, FLAG, 10, Object.values(PARTS).map((p) => p.pts));
    this.parts = P;
    // 피부·옷 색은 그림에서 뽑음 (눈꺼풀·손이 그림과 어울리게)
    const s = canvas(1, 1).getContext('2d', { willReadFrequently: true });
    const pick = (x, y) => { s.clearRect(0, 0, 1, 1); s.drawImage(img, x, y, 1, 1, 0, 0, 1, 1); const d = s.getImageData(0, 0, 1, 1).data; return `rgb(${d[0]},${d[1]},${d[2]})`; };
    this.col = { kimSkin: pick(800, 128), kimLid: pick(812, 140), girlSkin: pick(1110, 395), girlLid: pick(1088, 322) };
    // 행진 병사 대열
    this.troops = [];
    for (let i = 0; i < 3; i++) this.troops.push({ x: -200 - i * 700, row: i % 2 });
  }
  loop(now) {
    if (!this.host.isConnected) return;   // 홈 화면을 닫으면 멈춤
    requestAnimationFrame((n) => this.loop(n));
    const dt = Math.min(0.05, (now - (this.last || now)) / 1000); this.last = now;
    if (document.hidden) return;
    this.t += dt;
    this.draw(dt);
  }
  fit() {
    const r = this.host.getBoundingClientRect(), dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const W = Math.max(2, Math.round(r.width * dpr)), H = Math.max(2, Math.round(r.height * dpr));
    if (this.cv.width !== W || this.cv.height !== H) { this.cv.width = W; this.cv.height = H; }
    const s = Math.max(W / IW, H / IH);
    return { W, H, s, ox: W - IW * s, oy: (H - IH * s) / 2 };
  }
  draw(dt) {
    if (!this.parts) return;
    const g = this.g, { W, H, s, ox, oy } = this.fit(), t = this.t, P = this.parts;
    g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, W, H);
    g.setTransform(s, 0, 0, s, ox, oy);
    g.drawImage(this.img, 0, 0);
    // 깃발 펄럭임: 세로 띠마다 물결
    for (let x = 600; x < 1240; x += 6) {
      const k = (x - 600) / 640, dy = Math.sin(x * 0.018 - t * 2.6) * 6 * k + Math.sin(x * 0.041 - t * 4.1) * 2 * k;
      g.drawImage(P.flag, x, 0, 6, 420, x, dy, 6.5, 420);
    }
    this.lights(g, t);
    this.fireworks(g, dt);
    this.helis(g, dt);
    // 왼쪽 캐릭터: 몸 → 머리
    const br1 = Math.sin(t * 1.6) * 0.006, br2 = Math.sin(t * 1.9 + 1) * 0.007;
    this.part(g, P.kimBody, PARTS.kimBody.pivot, 0, 1 + br1, 0, 0);
    const nod1 = Math.sin(t * 0.7) * 0.012;
    this.part(g, P.kimHead, PARTS.kimHead.pivot, nod1, 1, 0, -br1 * 120);
    this.blink(g, 'kim', PARTS.kimHead.pivot, nod1, -br1 * 120, dt);
    // 오른쪽 캐릭터
    this.part(g, P.girlBody, PARTS.girlBody.pivot, 0, 1 + br2, 0, 0);
    const nod2 = Math.sin(t * 0.9 + 2) * 0.015;
    this.part(g, P.girlHead, PARTS.girlHead.pivot, nod2, 1, 0, -br2 * 80);
    this.blink(g, 'girl', PARTS.girlHead.pivot, nod2, -br2 * 80, dt);
    this.march(g, dt, t);
    this.embers(g, dt);
  }
  part(g, c, [px, py], rot, sy, dx, dy) {
    g.save(); g.translate(px + dx, py + dy); g.rotate(rot); g.scale(1, sy); g.translate(-px, -py);
    g.drawImage(c, 0, 0); g.restore();
  }
  blink(g, who, [px, py], rot, dy, dt) {
    this.blinkT[who] -= dt;
    if (this.blinkT[who] < -0.16) this.blinkT[who] = R(2.2, 4.6);
    if (this.blinkT[who] > 0) return;
    const k = Math.sin((-this.blinkT[who] / 0.16) * Math.PI);   // 0→1→0
    g.save(); g.translate(px, py + dy); g.rotate(rot); g.translate(-px, -py);
    for (const [x, y, w, h, a] of EYES[who]) {
      g.save(); g.translate(x, y); g.rotate(a);
      g.fillStyle = this.col[who + 'Lid'];
      g.beginPath(); g.ellipse(0, -h * (1 - k), w * 1.15, h * 1.25 * k + 0.5, 0, 0, Math.PI * 2); g.fill();
      g.strokeStyle = 'rgba(40,24,18,.9)'; g.lineWidth = 2.6; g.lineCap = 'round';
      g.beginPath(); g.moveTo(-w, h * 0.2 * k - h * (1 - k) * 0.6); g.quadraticCurveTo(0, h * 0.75 * k - h * (1 - k) * 0.3, w, h * 0.2 * k - h * (1 - k) * 0.6); g.stroke();
      g.restore();
    }
    g.restore();
  }
  // 탐조등: 도시에서 하늘로 흔들리는 빛기둥 (밝게 더함)
  lights(g, t) {
    g.save(); g.globalCompositeOperation = 'lighter';
    for (const [x, ph] of [[1290, 0], [1440, 1.7], [1600, 3.1]]) {
      const a = -Math.PI / 2 + Math.sin(t * 0.45 + ph) * 0.45, L = 900;
      const gr = g.createLinearGradient(x, 760, x + Math.cos(a) * L, 760 + Math.sin(a) * L);
      gr.addColorStop(0, 'rgba(255,236,190,.22)'); gr.addColorStop(1, 'rgba(255,236,190,0)');
      g.fillStyle = gr; g.beginPath(); g.moveTo(x, 760);
      g.lineTo(x + Math.cos(a - 0.05) * L, 760 + Math.sin(a - 0.05) * L); g.lineTo(x + Math.cos(a + 0.05) * L, 760 + Math.sin(a + 0.05) * L); g.closePath(); g.fill();
    }
    g.restore();
  }
  // 축포: 하늘 오른쪽에서 터지는 불꽃
  fireworks(g, dt) {
    this.nextFw -= dt;
    if (this.nextFw <= 0) {
      this.nextFw = R(0.7, 1.6);
      const x = R(1250, 1640), y = R(40, 330), hue = [0, 45, 200, 120, 300][Math.floor(Math.random() * 5)];
      for (let i = 0; i < 60; i++) { const a = Math.random() * Math.PI * 2, v = R(60, 190); this.fw.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, life: 1, hue: hue + R(-15, 15) }); }
    }
    g.save(); g.globalCompositeOperation = 'lighter';
    for (const p of this.fw) {
      p.x += p.vx * dt; p.y += p.vy * dt; p.vy += 60 * dt; p.vx *= 1 - dt * 1.2; p.vy *= 1 - dt * 1.2; p.life -= dt * 0.75;
      if (p.life <= 0) continue;
      g.fillStyle = `hsla(${p.hue},100%,${55 + p.life * 30}%,${p.life})`;
      g.beginPath(); g.arc(p.x, p.y, 1.5 + p.life * 2.5, 0, 7); g.fill();
    }
    g.restore();
    this.fw = this.fw.filter((p) => p.life > 0);
  }
  // 헬기 편대: 하늘을 오른쪽에서 왼쪽으로
  helis(g, dt) {
    if (!this.heli.length || this.heli[this.heli.length - 1].x < 1300) if (Math.random() < dt * 0.25 || !this.heli.length) {
      const y = R(150, 260); for (let i = 0; i < 3; i++) this.heli.push({ x: 1760 + i * 70, y: y + i * 26, s: R(0.8, 1) - i * 0.08 });
    }
    for (const h of this.heli) {
      h.x -= dt * 70;
      g.save(); g.translate(h.x, h.y + Math.sin(this.t * 2 + h.x * 0.01) * 2); g.scale(h.s, h.s); g.fillStyle = 'rgba(28,24,26,.92)';
      g.beginPath(); g.ellipse(0, 0, 26, 9, 0, 0, Math.PI * 2); g.fill();
      g.fillRect(16, -3, 34, 4); g.fillRect(46, -10, 4, 12);
      g.fillRect(-12, 9, 26, 2); g.fillRect(-4, -12, 3, 4);
      g.fillStyle = 'rgba(200,200,210,.35)'; const r = 30 + Math.sin(this.t * 60) * 8; g.fillRect(-r, -13, r * 2, 2);
      g.fillStyle = 'rgba(255,60,40,.9)'; g.fillRect(48, -11, 3, 3);
      g.restore();
    }
    this.heli = this.heli.filter((h) => h.x > 560);
  }
  // 행진하는 병사 대열: 도로 위를 왼쪽에서 오른쪽으로 (발맞춰 걸음)
  march(g, dt, t) {
    for (const tr of this.troops) {
      tr.x += dt * 38;
      if (tr.x > IW + 120) tr.x = 520 - Math.random() * 200;
      const baseY = tr.row ? 905 : 872, sc = tr.row ? 1.12 : 0.95;
      for (let r = 0; r < 3; r++) for (let c = 0; c < 7; c++) {
        const x = tr.x - c * 22 * sc - r * 9, y = baseY + r * 9 * sc;
        if (x < 600 || x > IW + 20) continue;
        const ph = t * 5 + (c % 2) * 0; this.soldier(g, x, y, sc * (0.85 + r * 0.08), ph, c === 0 && r === 0);
      }
    }
  }
  soldier(g, x, y, s, ph, flag) {
    const step = Math.sin(ph * Math.PI), lift = Math.max(0, step) * 9;
    g.save(); g.translate(x, y); g.scale(s, s);
    g.fillStyle = 'rgba(20,18,18,.92)'; g.strokeStyle = 'rgba(20,18,18,.92)'; g.lineCap = 'round';
    g.lineWidth = 4; g.beginPath(); g.moveTo(0, -14); g.lineTo(6 + lift * 0.6, -lift * 0.4); g.moveTo(0, -14); g.lineTo(-5 - (-Math.min(0, step) * 6), 0); g.stroke();   // 다리
    g.beginPath(); g.roundRect(-5, -32, 10, 19, 3); g.fill();                                   // 몸통
    g.beginPath(); g.arc(0, -36, 4.5, 0, 7); g.fill();                                          // 머리
    g.beginPath(); g.ellipse(0, -39, 6, 3, 0, Math.PI, 0); g.fill();                              // 철모
    g.lineWidth = 2; g.beginPath(); g.moveTo(3, -30); g.lineTo(9, -44); g.stroke();             // 총
    g.fillStyle = 'rgba(200,40,40,.9)'; g.fillRect(-5, -28, 2, 4);
    if (flag) { g.strokeStyle = '#2a2018'; g.lineWidth = 1.6; g.beginPath(); g.moveTo(-3, -30); g.lineTo(-3, -70); g.stroke(); g.fillStyle = '#c0392b'; g.beginPath(); g.moveTo(-3, -70); g.quadraticCurveTo(10, -66 + Math.sin(this.t * 6) * 2, 22, -70); g.lineTo(22, -56); g.quadraticCurveTo(10, -52 + Math.sin(this.t * 6 + 1) * 2, -3, -56); g.closePath(); g.fill(); }
    g.restore();
  }
  // 불씨: 아래에서 위로 떠오르는 주황 불티
  embers(g, dt) {
    if (this.sparks.length < 70 && Math.random() < dt * 30) this.sparks.push({ x: R(600, IW), y: IH + 5, vx: R(-12, 12), vy: R(-50, -20), life: R(3, 6) });
    g.save(); g.globalCompositeOperation = 'lighter';
    for (const p of this.sparks) {
      p.x += (p.vx + Math.sin(this.t + p.y * 0.02) * 10) * dt; p.y += p.vy * dt; p.life -= dt;
      g.fillStyle = `rgba(255,${120 + Math.random() * 60 | 0},40,${Math.min(1, p.life / 2) * 0.8})`; g.fillRect(p.x, p.y, 2.4, 2.4);
    }
    g.restore();
    this.sparks = this.sparks.filter((p) => p.life > 0 && p.y > -10);
  }
}
