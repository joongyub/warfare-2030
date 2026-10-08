// 소리: 음원 파일 없이 브라우저(Web Audio)로 직접 만들어 내는 효과음 + 배경 음악
// 나중에 진짜 녹음 파일(.ogg)로 바꿀 때는 play(name) 안에서 파일을 재생하도록 바꾸면 됨
export class Sound {
  constructor() {
    this.ctx = null;
    this.last = {};          // 같은 소리가 너무 겹치지 않게 (이름 → 마지막 재생 시각)
    this.musicOn = false;
  }

  // 브라우저는 사용자가 한 번 클릭해야 소리를 켜 줌 → 첫 클릭 때 호출
  unlock() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
    const c = this.ctx = new AC();
    this.master = c.createGain(); this.master.connect(c.destination);
    this.sfx = c.createGain(); this.sfx.connect(this.master);
    this.bgm = c.createGain(); this.bgm.connect(this.master);
    // 공통 잡음(폭발·총성 재료)
    const len = c.sampleRate * 1.5, buf = c.createBuffer(1, len, c.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    this.noise = buf;
    this.apply();
  }

  apply() {
    if (!this.ctx) return;
    const S = GF.SETTINGS;
    this.sfx.gain.value = S.sound ? S.sfxVolume : 0;
    this.bgm.gain.value = S.music ? S.musicVolume : 0;
    if (S.music && !this.musicOn) this.startMusic();
  }

  // ---------- 재료 ----------
  env(g, t, a, peak, dec) { g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(peak, t + a); g.gain.exponentialRampToValueAtTime(0.0001, t + a + dec); }
  noiseHit(t, { dur = 0.2, f = 1200, q = 0.8, type = 'lowpass', vol = 0.5, fEnd, out = this.sfx }) {
    const c = this.ctx, s = c.createBufferSource(); s.buffer = this.noise;
    const fl = c.createBiquadFilter(); fl.type = type; fl.frequency.setValueAtTime(f, t); fl.Q.value = q;
    if (fEnd) fl.frequency.exponentialRampToValueAtTime(fEnd, t + dur);
    const g = c.createGain(); this.env(g, t, 0.004, vol, dur);
    s.connect(fl); fl.connect(g); g.connect(out);
    s.start(t, Math.random() * 1.0, dur + 0.05);
  }
  tone(t, { f = 440, fEnd, dur = 0.2, type = 'sine', vol = 0.3, a = 0.005, out = this.sfx }) {
    const c = this.ctx, o = c.createOscillator(); o.type = type; o.frequency.setValueAtTime(f, t);
    if (fEnd) o.frequency.exponentialRampToValueAtTime(fEnd, t + dur);
    const g = c.createGain(); this.env(g, t, a, vol, dur);
    o.connect(g); g.connect(out); o.start(t); o.stop(t + a + dur + 0.05);
  }

  // ---------- 효과음 ----------
  // gap: 같은 소리 최소 간격(초). 수십 대가 동시에 쏴도 귀가 아프지 않게
  play(name, vol = 1) {
    if (!this.ctx || !GF.SETTINGS.sound) return;
    const c = this.ctx, t = c.currentTime;
    const gaps = { bullet: 0.07, cannon: 0.09, shell: 0.12, missile: 0.15, intercept: 0.08, rockets: 0.2, boom: 0.06, bigboom: 0.15, kill: 0.05, hit: 0.05 };
    if (t - (this.last[name] || -9) < (gaps[name] || 0.03)) return;
    this.last[name] = t;
    const v = vol;
    switch (name) {
      case 'bullet': // 기관총 따다닥
        for (let i = 0; i < 3; i++) this.noiseHit(t + i * 0.045, { dur: 0.05, f: 3200, type: 'bandpass', q: 1.2, vol: 0.22 * v });
        break;
      case 'cannon': // 전차포 쾅
        this.noiseHit(t, { dur: 0.35, f: 900, fEnd: 120, vol: 0.55 * v }); this.tone(t, { f: 110, fEnd: 45, dur: 0.3, vol: 0.4 * v }); break;
      case 'shell': // 자주포 둥-
        this.noiseHit(t, { dur: 0.6, f: 500, fEnd: 80, vol: 0.6 * v }); this.tone(t, { f: 70, fEnd: 35, dur: 0.5, vol: 0.5 * v }); break;
      case 'missile': // 미사일 쉬익
        this.noiseHit(t, { dur: 0.7, f: 600, fEnd: 3500, type: 'bandpass', q: 2, vol: 0.35 * v }); break;
      case 'rockets': // 로켓 연속 발사
        for (let i = 0; i < 6; i++) this.noiseHit(t + i * 0.09, { dur: 0.35, f: 700, fEnd: 2600, type: 'bandpass', q: 1.5, vol: 0.22 * v });
        break;
      case 'intercept': // 요격 퓨웅
        this.tone(t, { f: 1400, fEnd: 500, dur: 0.18, type: 'triangle', vol: 0.14 * v }); this.noiseHit(t, { dur: 0.25, f: 2500, type: 'bandpass', q: 3, vol: 0.15 * v }); break;
      case 'cruise': // 현무 발사: 묵직한 점화 + 긴 분사음
        this.tone(t, { f: 80, fEnd: 40, dur: 0.6, vol: 0.5 * v }); this.noiseHit(t, { dur: 1.4, f: 300, fEnd: 2500, type: 'bandpass', q: 0.8, vol: 0.5 * v }); break;
      case 'nuke':
        this.tone(t, { f: 50, fEnd: 22, dur: 3.5, vol: 0.9 * v, a: 0.02 }); this.noiseHit(t, { dur: 3.2, f: 2500, fEnd: 50, vol: 0.9 * v });
        this.noiseHit(t + 0.4, { dur: 2.8, f: 400, fEnd: 60, vol: 0.6 * v }); break;
      case 'siren':
        this.tone(t, { f: 500, fEnd: 900, dur: 0.6, type: 'sawtooth', vol: 0.1 * v, a: 0.05 }); this.tone(t + 0.65, { f: 900, fEnd: 500, dur: 0.6, type: 'sawtooth', vol: 0.1 * v, a: 0.05 }); break;
      case 'javelin':
        this.noiseHit(t, { dur: 0.4, f: 400, fEnd: 2000, type: 'bandpass', q: 1.5, vol: 0.4 * v }); this.tone(t, { f: 220, fEnd: 90, dur: 0.15, vol: 0.2 * v }); break;
      case 'boom': // 작은 폭발
        this.noiseHit(t, { dur: 0.45, f: 1400, fEnd: 150, vol: 0.4 * v }); break;
      case 'bigboom': // 큰 폭발 (전차·헬기·보스)
        this.noiseHit(t, { dur: 1.1, f: 900, fEnd: 60, vol: 0.75 * v }); this.tone(t, { f: 60, fEnd: 28, dur: 0.9, vol: 0.6 * v }); break;
      case 'airstrike':
        this.noiseHit(t, { dur: 1.2, f: 300, fEnd: 4000, type: 'bandpass', q: 0.7, vol: 0.4 * v });
        for (let i = 0; i < 5; i++) this.noiseHit(t + 0.9 + i * 0.13, { dur: 0.8, f: 800, fEnd: 70, vol: 0.6 * v });
        break;
      case 'emp':
        this.tone(t, { f: 90, fEnd: 1800, dur: 0.5, type: 'sawtooth', vol: 0.18 * v }); this.tone(t + 0.1, { f: 1800, fEnd: 60, dur: 0.6, type: 'square', vol: 0.08 * v }); break;
      case 'place': // 설치 철컥
        this.noiseHit(t, { dur: 0.06, f: 2500, type: 'bandpass', q: 2, vol: 0.4 * v }); this.tone(t + 0.07, { f: 180, fEnd: 120, dur: 0.12, type: 'square', vol: 0.12 * v }); break;
      case 'upgrade': // 강화 띠링
        [523, 659, 784, 1046].forEach((f, i) => this.tone(t + i * 0.06, { f, dur: 0.18, type: 'triangle', vol: 0.18 * v }));
        break;
      case 'sell':
        [784, 523].forEach((f, i) => this.tone(t + i * 0.08, { f, dur: 0.15, type: 'triangle', vol: 0.15 * v }));
        break;
      case 'bark': // 비숑 왈! (짧고 높은 개 짖음)
        this.tone(t, { f: 720, fEnd: 380, dur: 0.09, type: 'square', vol: 0.12 * v }); this.tone(t, { f: 1080, fEnd: 560, dur: 0.07, type: 'sawtooth', vol: 0.05 * v });
        this.noiseHit(t, { dur: 0.08, f: 1500, type: 'bandpass', q: 1.5, vol: 0.18 * v }); break;
      case 'whip': // 벨트 채찍 짝! (휙 바람 소리 + 날카로운 터짐)
        this.noiseHit(t, { dur: 0.12, f: 900, fEnd: 3200, type: 'bandpass', q: 0.8, vol: 0.12 * v });
        this.noiseHit(t + 0.1, { dur: 0.05, f: 4200, type: 'highpass', q: 0.7, vol: 0.4 * v }); this.tone(t + 0.1, { f: 2400, fEnd: 900, dur: 0.04, type: 'square', vol: 0.06 * v }); break;
      case 'moktak': // 목탁 똑! (속이 빈 나무를 두드리는 짧고 맑은 소리)
        this.tone(t, { f: 560, fEnd: 500, dur: 0.16, type: 'sine', vol: 0.5 * v, a: 0.002 }); this.tone(t, { f: 1120, fEnd: 1000, dur: 0.06, type: 'triangle', vol: 0.18 * v, a: 0.001 });
        this.noiseHit(t, { dur: 0.03, f: 1800, type: 'bandpass', q: 3, vol: 0.35 * v }); break;
      case 'fanfare': // 조합 완성: 범종 + 밝은 화음
        this.tone(t, { f: 98, fEnd: 96, dur: 2.6, type: 'sine', vol: 0.45 * v, a: 0.01 }); this.tone(t, { f: 196, dur: 2.0, type: 'sine', vol: 0.2 * v, a: 0.01 }); this.tone(t, { f: 293, dur: 1.6, type: 'sine', vol: 0.12 * v, a: 0.01 });
        [523, 659, 784, 1047].forEach((f, i) => this.tone(t + 1.0 + i * 0.12, { f, dur: 0.7, type: 'triangle', vol: 0.09 * v, a: 0.01 })); break;
      case 'glint': // 안경 번쩍 (반짝 소리 + 짧은 광선 지잉)
        this.tone(t, { f: 2600, fEnd: 3600, dur: 0.08, type: 'sine', vol: 0.08 * v }); this.tone(t + 0.05, { f: 3800, dur: 0.06, type: 'sine', vol: 0.06 * v });
        this.tone(t + 0.08, { f: 900, fEnd: 300, dur: 0.18, type: 'sawtooth', vol: 0.06 * v }); break;
      case 'snipe': // Kar98 한 발 (날카로운 총성 + 긴 울림) 뒤 노리쇠 철컥
        this.noiseHit(t, { dur: 0.06, f: 2600, type: 'highpass', q: 0.7, vol: 0.5 * v }); this.noiseHit(t, { dur: 0.7, f: 260, fEnd: 90, type: 'lowpass', q: 0.8, vol: 0.38 * v });
        this.tone(t + 0.55, { f: 1900, dur: 0.03, type: 'square', vol: 0.05 * v }); this.tone(t + 0.68, { f: 1500, dur: 0.035, type: 'square', vol: 0.05 * v }); break;
      case 'coin':
        this.tone(t, { f: 1318, dur: 0.08, type: 'square', vol: 0.06 * v }); this.tone(t + 0.06, { f: 1760, dur: 0.12, type: 'square', vol: 0.06 * v }); break;
      case 'click':
        this.tone(t, { f: 900, dur: 0.04, type: 'square', vol: 0.06 * v }); break;
      case 'deny':
        this.tone(t, { f: 180, dur: 0.15, type: 'square', vol: 0.08 * v }); break;
      case 'wave': // 경보 나팔
        [0, 0.35].forEach((d) => { this.tone(t + d, { f: 392, dur: 0.25, type: 'sawtooth', vol: 0.12 * v, a: 0.02 }); this.tone(t + d + 0.12, { f: 523, dur: 0.22, type: 'sawtooth', vol: 0.12 * v, a: 0.02 }); });
        break;
      case 'leak': // 기지 피해 경고
        for (let i = 0; i < 2; i++) this.tone(t + i * 0.22, { f: 880, fEnd: 660, dur: 0.18, type: 'square', vol: 0.12 * v });
        break;
      case 'combo':
        [659, 784, 988, 1318].forEach((f, i) => this.tone(t + i * 0.05, { f, dur: 0.14, type: 'square', vol: 0.07 * v }));
        break;
      case 'win':
        [523, 659, 784, 1046, 784, 1046].forEach((f, i) => this.tone(t + i * 0.16, { f, dur: 0.3, type: 'triangle', vol: 0.2 * v }));
        break;
      case 'lose':
        [392, 349, 311, 262].forEach((f, i) => this.tone(t + i * 0.28, { f, dur: 0.4, type: 'sawtooth', vol: 0.12 * v }));
        break;
    }
  }

  // ---------- 배경 음악: 낮은 드론 + 군악 북 리듬 (반복) ----------
  startMusic() {
    if (!this.ctx || this.musicOn) return;
    this.musicOn = true;
    const c = this.ctx, bpm = 96, beat = 60 / bpm;
    // 지속음 (낮은 화음)
    [55, 82.4, 110].forEach((f, i) => {
      const o = c.createOscillator(); o.type = i ? 'triangle' : 'sawtooth'; o.frequency.value = f;
      const fl = c.createBiquadFilter(); fl.type = 'lowpass'; fl.frequency.value = 260;
      const g = c.createGain(); g.gain.value = i ? 0.05 : 0.04;
      const lfo = c.createOscillator(); lfo.frequency.value = 0.07 + i * 0.03; const lg = c.createGain(); lg.gain.value = 0.025;
      lfo.connect(lg); lg.connect(g.gain); lfo.start();
      o.connect(fl); fl.connect(g); g.connect(this.bgm); o.start();
    });
    // 북: 16박 패턴을 미리 예약하며 반복
    const pat = 'K.s.K.ssK.s.KKs.';
    let next = c.currentTime + 0.1, step = 0;
    const tick = () => {
      while (next < c.currentTime + 0.6) {
        const ch = pat[step % pat.length];
        if (ch === 'K') { this.tone(next, { f: 120, fEnd: 45, dur: 0.22, vol: 0.35, out: this.bgm }); }
        if (ch === 's') { this.noiseHit(next, { dur: 0.09, f: 1800, type: 'bandpass', q: 0.9, vol: 0.12, out: this.bgm }); }
        next += beat / 2; step++;
      }
    };
    this.musicTimer = setInterval(tick, 150);
  }
}
