// 전투 규칙 (v4 서울): 도로 밖 자유 배치 → 작전 개시 → 웨이브가 자동으로 이어짐 (다음 웨이브 ≫ 로 앞당기기)
import * as THREE from 'three';
import { getTower, getEnemy, getGhost, mat, ghostMat, ghostBad } from './models.js';
import { makeHero, HEROES, HERO_IDS, GACHA, rollHero, makeBuddha, makeElephant } from './heroes.js';
import { RECIPES, Codex, comboRate, comboFee } from './codex.js';
import { VFX } from './vfx.js';
import { Clears, Saves } from './save.js';
import { Maze } from './maze.js';

const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const TOWER_SCALE = 1.6, TOWER_GAP = 1.4, HERO_SCALE = 2.1;
// 효과용 공용 모양 (매번 새로 만들지 않음)
const G = {
  ball: new THREE.SphereGeometry(1, 10, 7),
  puff: new THREE.SphereGeometry(1, 7, 5),
  ring: new THREE.RingGeometry(0.92, 1, 48),
  shell: new THREE.SphereGeometry(0.06, 6, 4),
  rocket: new THREE.ConeGeometry(0.045, 0.24, 6),
  wreck: new THREE.BoxGeometry(1, 0.12, 0.6),
  arrow: new THREE.CylinderGeometry(0.018, 0.018, 0.5, 4)
};

export class Game {
  constructor(app) {
    this.app = app;
    this.scene = app.scene;
    this.city = app.city;
    this.S = app.stage;
    this.fxGroup = new THREE.Group(); this.scene.add(this.fxGroup);
    this.unitGroup = new THREE.Group(); this.scene.add(this.unitGroup);
    this.flash = new THREE.PointLight(0xffa040, 0, 8, 1.6); this.scene.add(this.flash);
    this.vfx = new VFX(this.scene);
    this.rangeDisc = new THREE.Group();
    const disc = new THREE.Mesh(new THREE.CircleGeometry(1, 64), new THREE.MeshBasicMaterial({ color: 0x7fe9ff, transparent: true, opacity: 0.13, depthWrite: false }));
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.98, 1, 96), new THREE.MeshBasicMaterial({ color: 0xaaf4ff, transparent: true, opacity: 0.85, depthWrite: false }));
    disc.rotation.x = ring.rotation.x = -Math.PI / 2;
    this.rangeDisc.add(disc, ring); this.rangeDisc.visible = false; this.rangeDisc.position.y = 0.07;
    this.rangeMats = [disc.material, ring.material];
    this.scene.add(this.rangeDisc);
    this.ghosts = {};
    this.state = 'title';
    this.speed = 1;
    this.enemies = []; this.towers = []; this.shots = []; this.fx = []; this.zones = []; this.timers = []; this.fires = [];
  }

  ui() { return this.app.ui; }
  snd(name, vol) { if (this.app.sound && !this.quiet) this.app.sound.play(name, vol); }

  // ---------- 새 판 시작 ----------
  start() {
    const S = this.S, SET = GF.SETTINGS;
    for (const t of this.towers) this.unitGroup.remove(t.model.root);
    if (this.city.labels.some((L) => L.kind === 'hero')) { this.city.labels = this.city.labels.filter((L) => L.kind !== 'hero'); this.ui().resetLabels(); }
    for (const e of this.enemies) this.removeEnemy(e);
    this.fxGroup.clear(); this.vfx.clear();
    this.city.resetRoutes(); this.city.resetTrees();
    this.money = S.startMoney; this.lives = S.lives;
    this.diffId = GF.diffFor(S, SET.difficulty); this.diff = GF.DIFF[this.diffId];
    this.cp = SET.cpStart; this.cpT = 0;
    this.speed = 1;
    this.waveNo = 0; this.kills = 0;
    this.queue = []; this.clock = 0; this.nextT = 0;
    this.combo = 0; this.comboT = 0; this.bestCombo = 0; this.autoWave = 0; this.fused = 0; this.halfDone = false;
    this.enemies = []; this.towers = []; this.shots = []; this.fx = []; this.zones = []; this.timers = []; this.fires = [];
    this.mode = null; this.cardSel = -1; this.selected = null;
    this.deck = GF.CARD_DECK.slice().sort(() => Math.random() - 0.5);
    this.hand = this.deck.splice(0, GF.HAND_SIZE);
    this.strat = {}; for (const [id, C] of Object.entries(GF.STRATEGIC)) this.strat[id] = { charges: this.stratOpen(id) ? C.start : 0 };
    this.stratSel = null;
    this.comboReady = []; this.comboKeys = [];
    this.heroBench = []; this.heroBonus = {}; this.heroSel = null; this.luckyLeft = GACHA.luckyPerWave;
    this.computeSynergy();
    this.updateRemain();
    // 길 만들기 스테이지(부산): 바둑판 칸 + 길찾기
    this.maze = S.maze ? new Maze(S, this.city) : null;
    if (this.maze) this.city.showMazePath(this.maze);
    this.state = 'ready';
    this.ui().toast(this.maze ? `난이도 ${this.diff.name} · 특별 작전: 칸에 무기를 놓아 벽을 쌓으면 적은 빈 칸으로 길을 찾아요. 길을 길게 만드세요!` : `난이도 ${this.diff.name} · 도로 밖 어디든 무기를 놓고 "작전 개시"를 누르세요`, '#8FF3FF', this.maze ? 6000 : 4200);
  }

  computeSynergy() {
    const L = GF.LOADOUT.map((id) => GF.WEAPONS[id]);
    const us = L.filter((w) => w.nation.indexOf('미국') >= 0).length;
    const ground = L.filter((w) => w.hits.includes('ground')).length, air = L.filter((w) => w.hits.includes('air')).length;
    this.syn = { usSet: us >= 3, slowSplash: L.some((w) => w.slow) && L.some((w) => w.splash), balance: ground >= 2 && air >= 2 };
    this.synList = [];
    if (this.syn.usSet) this.synList.push('미국 세트 · 미국 무기 공속 +5%');
    if (this.syn.slowSplash) this.synList.push('감속 + 범위 · 감속된 적 범위 피해 +20%');
    if (this.syn.balance) this.synList.push('지상·공중 균형 · 처치 보상 +5%');
  }

  // 각 구간 뒤에 남은 길이 (어느 적이 사령부에 가장 가까운지 계산용)
  updateRemain() {
    const opts = this.city.activeOpts();
    this.remainAfter = opts.map((_, i) => opts.slice(i + 1).reduce((s, o) => s + o.len, 0));
    // 갈래 길: 합류점 뒤로 남은 길이
    const after = (br) => {
      const r = br.joinRef;
      if (r.branch) return r.branch.len - br.joinCum + after(r.branch);
      return opts[r.step].len - br.joinCum + this.remainAfter[r.step];
    };
    for (const br of this.city.branches) br.after = after(br);
  }
  // 이번 웨이브에 열린 진입로: null = 본 도로, 나머지 = 갈래 길
  openLanes(wave) { return [null].concat(this.city.branches.filter((b) => b.fromWave <= wave)); }

  // ---------- 웨이브 ----------
  // 첫 웨이브 시작 또는 다음 웨이브 앞당기기
  callNext() {
    if (this.isOver()) return;
    if (this.waveNo >= this.S.waves.length) return;
    if (this.state === 'ready') { this.state = 'battle'; this.launchWave(0); return; }
    if (this.queue.length) { this.ui().toast('아직 이번 웨이브 적이 나오는 중입니다'); return; }
    const bonus = Math.ceil(this.nextT) * 3;
    this.launchWave(bonus);
  }

  launchWave(early) {
    this.waveNo++;
    // 보급 수송 트럭: 웨이브 시작마다 보급
    for (const tw of this.towers) if (tw.W.income) {
      const add = Math.round(tw.W.income * (1 + 0.35 * (tw.level - 1)));
      this.money += add;
      this.ui().floatText(tw.pos.clone().setY(1.4), `보급 +${add}`, '#FFD36A');
    }
    const tok = this.waveTokens(this.waveNo);
    let t = this.clock + 0.2;
    // 진입로가 여러 개면 적을 번갈아 나눠 보냄 (무리마다 시작 입구를 바꿔서)
    const lanes = this.openLanes(this.waveNo);
    for (let i = 0; i < tok.length; i += 2) {
      const type = tok[i], cnt = parseInt(tok[i + 1], 10);
      for (let k = 0; k < cnt; k++) { this.queue.push({ t, type, wave: this.waveNo, lane: GF.ENEMIES[type].boss ? null : lanes[(k + i / 2) % lanes.length] }); t += GF.ENEMIES[type].gap; }   // 보스는 늘 본 도로(가장 긴 길)
      t += 1.2;
    }
    for (const br of this.city.branches) if (br.fromWave === this.waveNo && br.fromWave > 1) {
      this.timers.push({ t: 1.6, fn: () => { this.ui().toast(`새 진입로 개방! ${br.name} 방면에서도 적이 옵니다`, '#FF8A8E', 3600); this.snd('siren'); } });
    }
    this.queue.sort((a, b) => a.t - b.t);
    const bonus = this.waveNo > 1 ? 40 + this.waveNo * 8 : 0;
    this.money += bonus + early;
    const total = tok.reduce((s, x, i) => (i % 2 ? s + parseInt(x, 10) : s), 0);
    let msg = `웨이브 ${this.waveNo} · 적 ${total}`;
    if (bonus) msg += ` · 보급 +${bonus}`;
    if (early) msg += ` · 조기 투입 +${early}`;
    this.ui().toast(msg, tok.some((x) => GF.ENEMIES[x] && GF.ENEMIES[x].boss) ? '#FF8A8E' : '#ffffff');
    this.snd('wave');
    if (tok.includes('kim')) this.timers.push({ t: 2.2, fn: () => { this.ui().toast('최종 웨이브! 최종 보스 김정은 출현', '#FF4A3D', 4200); this.snd('siren'); } });
    // 전략 무기 재보급
    for (const [id, C] of Object.entries(GF.STRATEGIC)) {
      const st = this.strat[id];
      if (this.stratOpen(id) && this.waveNo % C.every === 0 && st.charges < C.max) {
        st.charges++;
        this.timers.push({ t: 1.2, fn: () => { this.ui().toast(`${C.name} 재보급 완료! (${C.key} 키)`, '#FF8A8E', 3000); this.snd('siren'); } });
      }
    }
    this.luckyLeft = GACHA.luckyPerWave;   // 보급 뽑기 횟수는 웨이브마다 다시 참
    this.nextT = 0;
  }

  // 웨이브 적 목록 [종류, 수, ...]: 난이도만큼 수를 늘리고(보스 제외), 마지막 웨이브 끝에 최종 보스 김정은
  waveTokens(n) {
    const tok = this.S.waves[n - 1].trim().split(/\s+/), m = this.diff ? this.diff.cnt : 1;
    for (let i = 1; i < tok.length; i += 2) if (!GF.ENEMIES[tok[i - 1]].boss) tok[i] = String(Math.round(parseInt(tok[i], 10) * m));
    if (n === this.S.waves.length) tok.push('kim', '1');
    return tok;
  }

  finish(won) {
    if (this.isOver()) return;
    this.state = won ? 'won' : 'lost';
    this.cancelMode();
    let stars = 0;
    if (won) {
      const r = this.lives / this.S.lives;
      stars = r >= 0.9 ? 3 : r >= 0.5 ? 2 : 1;
      try { const p = JSON.parse(localStorage.getItem('gf_progress') || '{}'); p[this.S.id] = Math.max(p[this.S.id] || 0, stars); localStorage.setItem('gf_progress', JSON.stringify(p)); } catch (e) { /* 저장 불가 환경 */ }
    }
    // 성과 기록: 결과 화면에 보여 주고, 이기면 도시·난이도별 완료 기록으로 남김 (전투지역 화면 표시)
    const mvp = this.towers.filter((t) => t.dmgTotal > 0).sort((a, b) => b.dmgTotal - a.dmgTotal)[0];
    const rec = {
      stars, kills: this.kills, lives: this.lives, time: Math.round(this.clock), combo: Math.max(this.bestCombo, this.combo),
      towers: this.towers.filter((t) => !t.W.hero).length, heroes: this.towers.filter((t) => t.W.hero).length, fused: this.fused || 0,
      mvp: mvp ? { name: mvp.W.hero ? HEROES[mvp.W.hero].name : GF.wname(mvp.type), dmg: Math.round(mvp.dmgTotal) } : null, at: Date.now()
    };
    const saved = won ? Clears.add(this.S.id, this.diffId, rec) : null;
    if (won && Saves.get(this.S.id, this.diffId)) Saves.remove(this.S.id, this.diffId);   // 그 난이도 작전 끝: 진행중 저장은 지움 (다른 난이도 저장은 그대로)
    if (won && GF.cloudPush) GF.cloudPush();
    this.ui().showResult(won, stars, rec, saved);
    this.snd(won ? 'win' : 'lose');
    if (won) { this.snd('applause'); setTimeout(() => this.snd('applause', 0.8), 1500); }
  }

  // ---------- 저장 · 불러오기 ----------
  // 웨이브 도중에 저장하면 그 웨이브를 처음부터 다시 함 (그 웨이브 시작 보급·재보급은 빼고 저장)
  serialize() {
    if (this.state !== 'ready' && this.state !== 'battle') return null;
    const mid = this.state === 'battle' && (this.queue.length > 0 || this.enemies.some((e) => !e.dead));   // 방금 쓰러진 적(정리 전)은 빼고
    const wave = mid ? this.waveNo - 1 : this.waveNo;
    let money = this.money;
    const strat = {};
    for (const [id, C] of Object.entries(GF.STRATEGIC)) {
      let c = this.strat[id].charges;
      if (mid && this.stratOpen(id) && this.waveNo % C.every === 0 && c > 0) c--;
      strat[id] = c;
    }
    if (mid && this.waveNo > 1) money -= 40 + this.waveNo * 8;
    return {
      v: 1, stage: this.S.id, time: Date.now(), diff: this.diffId,
      wave, money: Math.max(0, Math.floor(money)), lives: this.lives, kills: this.kills, cp: this.cp, bestCombo: this.bestCombo, fused: this.fused || 0, halfDone: !!this.halfDone,
      towers: this.towers.map((t) => ({ type: t.type, x: +t.pos.x.toFixed(2), z: +t.pos.z.toFixed(2), level: t.level, invested: t.invested, dmg: Math.round(t.dmgTotal), kills: t.kills })),
      detours: this.city.steps.map((st, i) => (st.open ? i : -1)).filter((i) => i >= 0),
      deck: this.deck.slice(), hand: this.hand.slice(), strat,
      heroBench: this.heroBench.slice(), heroBonus: Object.assign({}, this.heroBonus), lucky: this.luckyLeft
    };
  }
  restore(d) {
    this.start();
    if (GF.DIFF[d.diff]) { this.diffId = d.diff; this.diff = GF.DIFF[d.diff]; }   // 저장할 때 난이도 그대로 (예전 저장은 지금 설정)
    this.quiet = true;
    for (const i of d.detours || []) this.city.openDetour(i);
    this.updateRemain();
    for (const s of d.towers || []) {
      if (!GF.WEAPONS[s.type]) continue;
      const tw = this.addTower(s.type, s.x, s.z);
      tw.invested = s.invested; tw.dmgTotal = s.dmg || 0; tw.kills = s.kills || 0;
      if (tw.W.hero) {
        tw.level = s.level;
        tw.model.root.scale.setScalar(this.heroScale(tw));
        tw.label = { text: '★ ' + HEROES[tw.W.hero].short, pos: V(s.x, 2.5, s.z), kind: 'hero' };
        this.city.labels.push(tw.label);
      } else {
        this.money = 1e12;
        while (tw.level < s.level && this.upgradeTower(tw, true));
      }
    }
    this.ui().resetLabels();
    this.money = d.money; this.lives = d.lives; this.kills = d.kills || 0; this.cp = d.cp ?? this.cp; this.bestCombo = d.bestCombo || 0; this.fused = d.fused || 0; this.halfDone = !!d.halfDone;
    this.waveNo = Math.min(d.wave || 0, this.S.waves.length - 1);
    const known = (id) => GF.CARDS[id];
    if (Array.isArray(d.hand) && d.hand.length === this.hand.length && d.hand.every(known)) { this.hand = d.hand.slice(); this.deck = (d.deck || []).filter(known); }
    for (const id of Object.keys(this.strat)) if (d.strat && d.strat[id] != null) this.strat[id].charges = d.strat[id];
    this.heroBench = (d.heroBench || []).filter((id) => HEROES[id]); this.heroBonus = Object.assign({}, d.heroBonus || {});
    this.luckyLeft = d.lucky ?? this.luckyLeft;
    this.autoWave = this.waveNo;
    this.quiet = false;
    this.refreshCombos(true);
    this.ui().toast(`저장한 게임을 불러왔습니다 · 웨이브 ${this.waveNo + 1}부터`, '#8FF3FF', 4200);
  }

  // 웨이브 하나를 다 물리칠 때마다: 절반 지점 연출(한 번) + 자동 저장(구글 로그인한 사람만, 마지막 웨이브는 승리 화면이 대신함)
  checkAutoSave() {
    let low = Infinity;
    for (const q of this.queue) if (q.wave < low) low = q.wave;
    for (const e of this.enemies) if (!e.dead && e.wave < low) low = e.wave;
    const done = low === Infinity ? this.waveNo : low - 1, N = this.S.waves.length;
    if (done <= this.autoWave) return;
    this.autoWave = done;
    const save = () => { if (GF.SETTINGS.autoSave && GF.Cloud && GF.Cloud.user && done < N && this.lives > 0 && !this.isOver()) this.app.saveGame(false, true); };
    if (!this.halfDone && done >= Math.floor(N / 2) && done < N && this.lives > 0) { this.halfDone = true; this.halfStrike(save); return; }
    save();
  }
  // 웨이브 절반: 7초 방송 연출 → 부카니스탄 대포동·로동 미사일이 내 무기 하나에 떨어져 파괴
  halfStrike(after) {
    const app = this.app, was = app.paused;
    app.paused = true; this.cancelMode();
    this.snd('siren');
    this.ui().playHalfTaunt(() => { app.paused = was; this.missileStrike(after); });
  }
  missileStrike(after) {
    const ok = (t) => !t.fusing, weapons = this.towers.filter((t) => ok(t) && !t.W.hero), pool = weapons.length ? weapons : this.towers.filter(ok);
    if (!pool.length || this.isOver()) { if (after) after(); return; }
    const tw = pool[Math.floor(Math.random() * pool.length)], p = tw.pos.clone(), name = tw.W.hero ? HEROES[tw.W.hero].short : GF.wname(tw.type);
    this.ui().toast(`⚠ 대포동·로동 미사일 발사! ${name} 쪽으로 떨어진다!`, '#FF5A5A', 3000);
    this.spawnRing(p, 1.8, 0xff2a2a, 1.6); this.spawnRing(p, 1.0, 0xffffff, 1.2);
    // 미사일: 흰 몸통 + 붉은 탄두 + 꼬리 불꽃. 하늘에서 비스듬히 내리꽂힘
    const m = new THREE.Group();
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.26, 2.6, 12), mat(0xe8e6de)); m.add(body);
    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.7, 12), mat(0xc0262e)); tip.position.y = -1.65; tip.rotation.x = Math.PI; m.add(tip);
    for (let i = 0; i < 4; i++) { const f = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.5, 0.5), mat(0x4a4f44)); f.position.y = 1.1; f.rotation.y = i * Math.PI / 4; m.add(f); }
    const fire = new THREE.Mesh(new THREE.ConeGeometry(0.2, 1.2, 10), new THREE.MeshBasicMaterial({ color: 0xffa040, transparent: true, opacity: 0.85 })); fire.position.y = 1.9; m.add(fire);
    m.traverse((o) => { if (o.material) o.material.shared = true; });
    const from = p.clone().add(V(-12, 26, -8)), dir = p.clone().sub(from).normalize();
    m.quaternion.setFromUnitVectors(V(0, -1, 0), dir); m.scale.setScalar(1.4);
    this.pushFx(m, 1.5, (o, k) => { o.position.copy(from).lerp(p, k * k); fire.scale.setScalar(0.8 + Math.random() * 0.5); });
    this.snd('missile', 1.2);
    this.timers.push({ t: 1.5, fn: () => {
      if (this.towers.includes(tw)) {
        if (tw.label) { const i = this.city.labels.indexOf(tw.label); if (i >= 0) this.city.labels.splice(i, 1); this.ui().resetLabels(); }
        this.unitGroup.remove(tw.model.root);
        this.towers.splice(this.towers.indexOf(tw), 1);
        if (this.selected === tw) this.select(null);
      }
      this.explodeFx(p.clone().setY(0.8), 2.2); this.explodeFx(p.clone().add(V(0.8, 0.6, -0.5)), 1.4); this.explodeFx(p.clone().add(V(-0.7, 0.5, 0.6)), 1.4);
      this.spawnRing(p, 3.4, 0xff6a2a, 1.2); this.spawnPuff(p.clone().setY(0.6), 0x3a3430, 10, 0.6, 2.2);
      this.app.shake(0.6); this.snd('nuke', 1.2);
      this.ui().toast(`💥 미사일 피격! ${name} 파괴됨`, '#FF5A5A', 3600);
      this.refreshCombos(true);
      if (after) after();
    } });
  }

  isOver() { return this.state === 'won' || this.state === 'lost' || this.state === 'title'; }

  // ---------- 입력 ----------
  setMode(m) {
    if (this.isOver()) return;
    if (this.mode === m) { this.cancelMode(); return; }
    this.cancelMode();
    if (m === 'detour') {
      if (!this.city.steps.some((s) => s.choice && !s.open)) { this.ui().toast('개통할 우회로가 더 없습니다'); return; }
      if (this.money < this.S.detourCost) { this.ui().toast('보급이 부족합니다'); return; }
      this.mode = m; return;
    }
    if (this.money < GF.WEAPONS[m].cost) { this.ui().toast('보급이 부족합니다'); return; }
    this.mode = m;
    const gh = this.ghosts[m] || (this.ghosts[m] = getGhost(m));
    gh.root.scale.setScalar(HERO_SCALE); gh.root.visible = false;
    this.scene.add(gh.root);
    this.ghost = gh;
  }
  pickCard(i) {
    if (this.isOver() || !this.hand[i]) return;
    const c = GF.CARDS[this.hand[i]];
    if (this.cp < c.cost) { this.ui().toast('지휘 포인트(CP)가 부족합니다'); return; }
    if (!c.target) { this.useCard(i, V()); return; }
    this.cancelMode();
    this.mode = 'card'; this.cardSel = i;
  }
  // ---------- 전략 무기 ----------
  stratOpen(id) { return this.S.no >= GF.STRATEGIC[id].unlockStage; }
  stratNext(id) { const C = GF.STRATEGIC[id]; return (Math.floor(this.waveNo / C.every) + 1) * C.every; }
  pickStrat(id) {
    if (this.isOver()) return;
    const C = GF.STRATEGIC[id];
    if (!this.stratOpen(id)) { this.ui().toast(`${C.name}: 스테이지 ${C.unlockStage}부터 사용 가능`); this.snd('deny'); return; }
    if (this.state !== 'battle') { this.ui().toast('전투가 시작된 뒤 사용할 수 있습니다'); return; }
    if (!this.strat[id].charges) { this.ui().toast(`${C.name}: 웨이브 ${this.stratNext(id)}에 재보급`); this.snd('deny'); return; }
    if (this.mode === 'strat' && this.stratSel === id) { this.cancelMode(); return; }
    this.cancelMode();
    this.mode = 'strat'; this.stratSel = id;
  }
  useStrat(id, p) {
    const C = GF.STRATEGIC[id], g = V(p.x, 0, p.z), nuke = id === 'nuke';
    this.strat[id].charges--;
    this.mode = null; this.stratSel = null; this.rangeDisc.visible = false;
    this.ui().toast(nuke ? '전략핵미사일 발사!' : 'ICBM 발사!', '#FF8A8E', 2500);
    this.snd('siren');
    // 경고 원 + 하늘에서 떨어지는 탄두
    this.spawnRing(g, C.radius, 0xff3b30, 2.2);
    const war = new THREE.Group();
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 2.2, 12), mat(0xe8e8e2)); war.add(body);
    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.7, 12), mat(nuke ? 0xd8b02a : 0x9a2a24)); tip.position.y = -1.45; tip.rotation.x = Math.PI; war.add(tip);
    war.scale.setScalar(nuke ? 1.6 : 1.1);
    const from = g.clone().add(V(-6, 40, -10)), fall = nuke ? 2.2 : 1.6;
    war.position.copy(from); war.lookAt(g); war.rotateX(Math.PI / 2);
    this.pushFx(war, fall, (o, k) => { o.position.copy(from).lerp(g, k * k); this.vfx.trail(o.position, o.userData.prev || o.position, true); (o.userData.prev ||= V()).copy(o.position); });
    this.timers.push({ t: fall, fn: () => this.detonate(g, C, nuke) });
  }
  detonate(g, C, nuke) {
    this.explode(g, C.radius, C.power, null, false, false);
    this.explode(g, C.radius, C.power, null, false, true);
    this.snd(nuke ? 'nuke' : 'bigboom', 1.6);
    this.app.shake(nuke ? 1.4 : 0.7);
    if (nuke) this.ui().whiteFlash();
    // 불덩이 + 충격파 고리
    const fire = new THREE.Mesh(G.ball, new THREE.MeshBasicMaterial({ color: 0xfff1b0, transparent: true }));
    fire.position.copy(g);
    const R = C.radius;
    this.pushFx(fire, nuke ? 2.5 : 1.2, (o, k) => { o.scale.setScalar(R * (0.2 + 0.7 * Math.sqrt(k))); o.material.opacity = 1 - k; o.material.color.setHSL(0.12 - k * 0.1, 1, 0.75 - k * 0.4); });
    for (let i = 0; i < (nuke ? 3 : 1); i++) this.timers.push({ t: i * 0.25, fn: () => this.spawnRing(g, R * 1.1, 0xffe0a0, 1.2) });
    for (let i = 0; i < (nuke ? 40 : 16); i++) {
      const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()) * R * 0.9;
      this.spawnPuff(g.clone().add(V(Math.cos(a) * r, 0.2, Math.sin(a) * r)), 0x4a4038, 1, 0.5 + Math.random() * 0.8, 3);
    }
    if (nuke) {
      // 버섯구름: 기둥 + 머리
      const cloud = new THREE.Group(); cloud.position.copy(g);
      const cm = new THREE.MeshStandardMaterial({ color: 0xd88a4a, emissive: 0x6a2a00, transparent: true, roughness: 1 });
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 1.4, 1, 16), cm); cloud.add(stem);
      const cap = new THREE.Mesh(new THREE.SphereGeometry(1, 20, 12), cm); cap.scale.set(1, 0.55, 1); cloud.add(cap);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1, 0.35, 10, 24), cm); ring.rotation.x = Math.PI / 2; cloud.add(ring);
      this.pushFx(cloud, 7, (o, k) => {
        const h = 2 + 12 * Math.min(1, k * 2.2), w = 2 + 5 * Math.min(1, k * 1.8);
        stem.scale.set(1 + k, h, 1 + k); stem.position.y = h / 2;
        cap.position.y = h; cap.scale.set(w, w * 0.55, w);
        ring.position.y = h * 0.62; ring.scale.setScalar(w * 0.7);
        cm.opacity = k < 0.7 ? 0.95 : 0.95 * (1 - (k - 0.7) / 0.3);
        cm.color.setHSL(0.07, 0.6 - k * 0.5, 0.55 - k * 0.15); cm.emissiveIntensity = 1 - k;
      });
    }
  }

  cancelMode() {
    this.mode = null; this.cardSel = -1; this.stratSel = null; this.select(null);
    this.rangeDisc.visible = false;
    if (this.ghost) { this.scene.remove(this.ghost.root); this.ghost = null; }
    this.tip = null;
    if (this.maze && this.mzPrev != null) { this.mzPrev = null; this.city.showMazePath(this.maze); }
  }

  // 놓을 수 없는 이유 (없으면 null)
  placeReason(x, z) {
    if (this.maze) return this.mazeReason(x, z);
    const r = this.city.blockReason(x, z);
    if (r) return r;
    for (const t of this.towers) if ((t.pos.x - x) ** 2 + (t.pos.z - z) ** 2 < TOWER_GAP * TOWER_GAP) return '다른 무기와 너무 가까움';
    return null;
  }

  // 길 만들기: 칸 판정. 지상 적이 서 있거나 향하는 칸, 길을 끊는 칸은 못 놓음
  mazeReason(x, z) {
    const M = this.maze; M.sync(this.towers);
    const busy = new Set(), from = [];
    for (const e of this.enemies) {
      if (e.air || e.dead || !e.mz) continue;
      const k = M.cellOf(e.pos.x, e.pos.z);
      if (k >= 0) { busy.add(k); from.push(k); }
      busy.add(e.tk); from.push(e.tk);
    }
    return M.reason(M.cellOf(x, z), busy, from);
  }
  // 무기·영웅을 놓을 때는 칸 가운데로 맞춤
  snapCell(p) {
    if (!this.maze || !this.mode || this.mode === 'card' || this.mode === 'strat' || this.mode === 'detour') return p;
    const k = this.maze.cellOf(p.x, p.z); if (k < 0) return p;
    const [x, z] = this.maze.center(k); return V(x, p.y || 0, z);
  }

  hoverAt(p) {
    p = this.snapCell(p);
    this.hoverP = p;
    this.tip = null;
    if (this.mode === 'card') { this.showRange(V(p.x, 0, p.z), GF.CARDS[this.hand[this.cardSel]].radius, 0x8fc3ff); return; }
    if (this.mode === 'strat') { this.showRange(V(p.x, 0, p.z), GF.STRATEGIC[this.stratSel].radius, 0xff5a4a); return; }
    if (this.mode === 'detour') {
      const d = this.city.detourNear(p);
      this.tip = d != null ? { ok: true, text: `우회로 개통 (${this.S.detourCost}) · 적이 더 오래 머뭅니다` } : { ok: false, text: '빛나는 점선 우회로를 클릭하세요' };
      return;
    }
    if (!this.mode) { if (!this.selected) this.rangeDisc.visible = false; return; }
    const why = this.placeReason(p.x, p.z), ok = !why;
    this.ghost.root.visible = true;
    this.ghost.root.position.set(p.x, 0, p.z);
    this.ghost.setOk(ok);
    this.showRange(V(p.x, 0, p.z), GF.WEAPONS[this.mode === 'hero' ? 'hero_' + this.heroSel : this.mode].range, ok ? 0x7fe9ff : 0xff7a7a);
    this.tip = ok ? { ok: true, text: this.maze ? '이 칸에 배치 가능 · 화살표가 바뀐 길이에요' : '자유 배치 가능' } : { ok: false, text: why };
    // 길 만들기: 놓으면 바뀔 적의 길을 화살표로 미리 보여 줌
    if (this.maze) { const k = this.maze.cellOf(p.x, p.z); if (ok && k !== this.mzPrev) { this.city.showMazePath(this.maze, this.maze.preview(k)); this.mzPrev = k; } else if (!ok && this.mzPrev != null) { this.city.showMazePath(this.maze); this.mzPrev = null; } }
  }

  showRange(pos, r, color) {
    this.rangeDisc.position.set(pos.x, 0.07, pos.z);
    this.rangeDisc.scale.setScalar(r);
    this.rangeMats.forEach((m) => m.color.set(color));
    this.rangeDisc.visible = true;
  }

  click(p) {
    if (this.isOver()) return;
    p = this.snapCell(p);
    if (this.mode === 'card') { this.useCard(this.cardSel, p); return; }
    if (this.mode === 'strat') { this.useStrat(this.stratSel, p); return; }
    if (this.mode === 'detour') { this.clickDetour(p); return; }
    if (this.mode === 'hero') { this.clickHero(p); return; }
    if (this.mode) { this.clickPlace(p); return; }
    // 무기 선택
    let best = null, bd = 1.2;
    for (const t of this.towers) { const d = Math.hypot(t.pos.x - p.x, t.pos.z - p.z); if (d < bd) { bd = d; best = t; } }
    this.select(best);
  }

  clickDetour(p) {
    const i = this.city.detourNear(p);
    if (i == null) { this.ui().toast('빛나는 점선 우회로를 클릭하세요'); return; }
    if (this.money < this.S.detourCost) { this.ui().toast('보급이 부족합니다'); this.cancelMode(); return; }
    // 우회로 위에 놓인 무기가 있으면 개통 불가
    const o = this.city.steps[i].opts[1];
    for (const t of this.towers) for (const s of o.samples) if (Math.hypot(s.p.x - t.pos.x, s.p.z - t.pos.z) < 1.3) { this.ui().toast('우회로 자리에 무기가 있어 개통할 수 없습니다'); return; }
    this.money -= this.S.detourCost;
    this.city.openDetour(i);
    this.updateRemain();
    for (const s of o.samples) if (Math.random() < 0.12) this.spawnPuff(s.p.clone().setY(0.1), 0xc8c4b8, 1, 0.3);
    this.ui().toast(`우회로 개통! 적 이동 거리 +${Math.round(o.len - this.city.steps[i].opts[0].len)}`, '#8FF3FF');
    this.cancelMode();
  }

  clickPlace(p) {
    const W = GF.WEAPONS[this.mode];
    const why = this.placeReason(p.x, p.z);
    if (why) { this.ui().toast(why); return; }
    if (this.money < W.cost) { this.ui().toast('보급이 부족합니다'); this.cancelMode(); return; }
    this.money -= W.cost;
    this.addTower(this.mode, p.x, p.z);
    if (this.money < W.cost) this.cancelMode();
  }

  select(tw) {
    this.selected = tw;
    if (tw) this.showRange(tw.pos, this.stats(tw).range, 0xf2c14e);
    else if (!this.mode) this.rangeDisc.visible = false;
  }

  // ---------- 무기 ----------
  addTower(type, x, z) {
    const m = GF.WEAPONS[type].hero ? makeHero(GF.WEAPONS[type].hero) : getTower(type);
    const pos = V(x, 0, z);
    m.root.position.copy(pos);
    m.root.scale.setScalar(m.hero ? HERO_SCALE : TOWER_SCALE * (GF.WEAPONS[type].parts ? 1.15 : 1));
    // 처음엔 가장 가까운 도로를 바라봄
    const ang = -Math.PI / 2;
    m.yaw.rotation.y = -ang;
    this.unitGroup.add(m.root);
    const tw = { type, W: GF.WEAPONS[type], pos, model: m, level: 1, invested: GF.WEAPONS[type].hero ? Math.round(GACHA.heroCost * 0.4) : GF.WEAPONS[type].cost, cd: 0.3, dmgTotal: 0, kills: 0, ang, pulse: 0, marks: [] };
    this.towers.push(tw);
    this.city.clearTreesAt(x, z);
    if (!this.quiet) this.spawnPuff(pos, 0xcdb68a, 6);
    this.snd('place');
    return tw;
  }

  // ---------- 영웅 모집 · 보급 뽑기 ----------
  canGacha() { return this.state === 'ready' || this.state === 'battle'; }
  // 무기별 최대 강화 단계 (영웅 10강, 일반 무기 4강)
  maxLevel(tw) { return tw.W.hero ? GF.SETTINGS.heroMaxLevel : GF.SETTINGS.maxTowerLevel; }
  // 영웅 모집: 20명 중 1명 무작위. 같은 영웅이 또 나와도 한 명 더 배치 대기열에 추가 (여러 명 출전 가능)
  pullHero() {
    if (!this.canGacha()) return null;
    if (this.money < GACHA.heroCost) { this.snd('deny'); return { fail: '보급이 부족합니다 (영웅 모집 ' + GACHA.heroCost + ')' }; }
    this.money -= GACHA.heroCost;
    const id = rollHero();
    const owned = this.towers.filter((t) => t.W.hero === id).length + this.heroBench.filter((x) => x === id).length;
    this.heroBench.push(id);
    const result = { id, count: owned + 1 };
    this.snd('upgrade');
    return result;
  }
  pullLucky() {
    if (!this.canGacha()) return null;
    if (this.luckyLeft <= 0) { this.snd('deny'); return { fail: '이번 웨이브 보급 뽑기를 다 썼습니다 (다음 웨이브에 다시 ' + GACHA.luckyPerWave + '번)' }; }
    if (this.money < GACHA.luckyCost) { this.snd('deny'); return { fail: '보급이 부족합니다 (보급 뽑기 ' + GACHA.luckyCost + ')' }; }
    this.money -= GACHA.luckyCost; this.luckyLeft--;
    let r = Math.random() * 100, amt = GACHA.lucky[0][0];
    for (const [a, p] of GACHA.lucky) { if (r < p) { amt = a; break; } r -= p; }
    this.money += amt;
    this.snd('coin');
    return { amount: amt };
  }
  // 대기 중인 영웅을 배치 모드로
  pickHero(id) {
    if (this.isOver() || !this.heroBench.includes(id)) return;
    if (this.mode === 'hero' && this.heroSel === id) { this.cancelMode(); return; }
    this.cancelMode();
    this.mode = 'hero'; this.heroSel = id;
    const gh = makeHero(id);
    gh.root.traverse((o) => { if (o.isMesh) { o.material = ghostMat; o.castShadow = false; } });
    gh.setOk = (ok) => gh.root.traverse((o) => { if (o.isMesh) o.material = ok ? ghostMat : ghostBad; });
    gh.root.scale.setScalar(TOWER_SCALE); gh.root.visible = false;
    this.scene.add(gh.root);
    this.ghost = gh;
  }
  clickHero(p) {
    const id = this.heroSel, why = this.placeReason(p.x, p.z);
    if (why) { this.ui().toast(why); return; }
    const tw = this.addTower('hero_' + id, p.x, p.z);
    const bonus = this.heroBonus[id] || 0;
    tw.level = Math.min(this.maxLevel(tw), 1 + bonus); delete this.heroBonus[id];
    tw.model.root.scale.setScalar(this.heroScale(tw));
    this.heroBench.splice(this.heroBench.indexOf(id), 1);
    this.spawnRing(tw.pos, 2.2, 0xffd36a, 1.2); this.spawnRing(tw.pos, 1.2, 0xffffff, 0.8);
    tw.model.fire();
    tw.label = { text: '★ ' + HEROES[id].short, pos: V(p.x, 2.5, p.z), kind: 'hero' };
    this.city.labels.push(tw.label); this.ui().resetLabels();
    this.ui().toast(HEROES[id].legend ? `레전더리 영웅 ${HEROES[id].name} 출전! 비숑도 함께!` : `전설의 영웅 ${HEROES[id].name} 출전!`, '#FFD36A', 2600);
    this.cancelMode();
    this.refreshCombos();
  }
  heroScale(tw) { return HERO_SCALE * (tw.W.big || 1) * (1 + 0.06 * (tw.level - 1)); }

  // ---------- 조합 (📖 무기도감에서 이중엽이 조합) ----------
  // 조합할 수 있는 짝: 영웅은 Lv.1부터, 일반 무기는 둘 다 Lv.4. 두 재료가 dist 안에 가까이 있어야 함
  comboPairs() {
    const out = [], top = GF.SETTINGS.maxTowerLevel;
    for (const R of RECIPES) {
      const ok = (t, id) => t.type === id && !t.fusing && (R.hero || t.level >= top);
      const A = this.towers.filter((t) => ok(t, R.ta)), B = this.towers.filter((t) => ok(t, R.tb));
      let best = null;
      for (const a of A) for (const b of B) {
        if (a === b) continue;
        const d = a.pos.distanceTo(b.pos);
        if (d <= R.dist && (!best || d < best.d)) best = { R, a, b, d };
      }
      if (best) out.push(best);
    }
    return out;
  }
  // 조합 가능 목록을 새로 계산. 새 짝이 생기면 알려 주고 도감 버튼을 반짝임
  refreshCombos(quiet) {
    const list = this.comboPairs(), keys = list.map((p) => p.R.key);
    this.ui().codexReady(list.length);
    const fresh = keys.filter((k) => !(this.comboKeys || []).includes(k));
    this.comboReady = list; this.comboKeys = keys;
    if (fresh.length && !quiet && !this.isOver()) {
      const R = list.find((p) => p.R.key === fresh[0]).R;
      this.ui().toast(Codex.has(R.key) ? `📖 ${R.name} 조합 가능! 무기도감에서 조합하세요` : '📖 무언가 조합할 수 있을 것 같아요! 무기도감을 열어 보세요', '#FFD36A', 3600);
      this.snd('glint');
    }
  }
  // 이중엽에게 조합 맡기기: 수수료를 내고 성공 여부를 정함 (화면 연출은 ui.js openCodex)
  tryCombo(key) {
    if (this.isOver()) return null;
    const p = (this.comboReady || []).find((x) => x.R.key === key && this.towers.includes(x.a) && this.towers.includes(x.b));
    if (!p) return { fail: '조합할 재료가 가까이 없습니다' };
    const fee = comboFee(p.R);
    if (this.money < fee) { this.snd('deny'); return { fail: `보급이 부족합니다 (조합 수수료 ${fee})` }; }
    this.money -= fee;
    const rate = comboRate(p.R), roll = Math.random();
    return { pair: p, fee, rate, roll, ok: roll < rate };
  }
  // 조합 성공: 연출(조합 이름 + 폭죽) 뒤 두 재료가 사라지고 가운데에 조합 결과 등장
  fuse(a, b, R, img) {
    a.fusing = b.fusing = true;
    const mid = this.maze ? a.pos.clone() : a.pos.clone().add(b.pos).multiplyScalar(0.5), app = this.app;   // 길 만들기 맵은 첫 재료 칸에
    const wasPaused = app.paused; app.paused = true;
    this.snd('fanfare');
    const into = GF.WEAPONS[R.into], monk = R.into === 'hero_monk';
    this.ui().playCombo(R.title || R.name + ' 조합 성공', () => {
      for (const t of [a, b]) {
        if (t.label) { const i = this.city.labels.indexOf(t.label); if (i >= 0) this.city.labels.splice(i, 1); }
        this.unitGroup.remove(t.model.root);
        const i = this.towers.indexOf(t); if (i >= 0) this.towers.splice(i, 1);
        if (this.selected === t) this.select(null);
      }
      const nt = this.addTower(R.into, mid.x, mid.z);
      nt.invested = a.invested + b.invested; nt.dmgTotal = a.dmgTotal + b.dmgTotal; nt.kills = a.kills + b.kills;
      if (into.hero) {
        nt.level = Math.min(this.maxLevel(nt), Math.max(a.level, b.level));
        nt.model.root.scale.setScalar(this.heroScale(nt));
        nt.label = { text: '★ ' + HEROES[into.hero].short, pos: V(mid.x, 3.2, mid.z), kind: 'hero' };
        this.city.labels.push(nt.label); this.ui().resetLabels();
      }
      this.spawnRing(mid, 3.2, 0xffd36a, 1.6); this.spawnRing(mid, 2.0, 0xffffff, 1.2); this.spawnRing(mid, 1.0, 0xffb0e8, 1.0);
      this.explodeFx(mid.clone().setY(1.2), 0.8);
      if (nt.model.fire) nt.model.fire();
      if (monk) this.snd('moktak');
      this.ui().toast(`조합 성공! ${R.name} 출현`, '#FFD36A', 3600);
      this.fused = (this.fused || 0) + 1;
      app.paused = wasPaused;
      this.refreshCombos(true);
    }, monk ? null : img);
  }

  stats(tw) {
  return this.statsAt(tw, tw.level);
  }
  // 강화 단계별 능력치: 피해·연사(DPS)와 사거리가 함께 오름
  statsAt(tw, level) {
    const U = tw.W.hero ? GF.SETTINGS.heroUpgrade : GF.SETTINGS.upgrade, i = Math.min(level, U.dmg.length) - 1;
    let rate = tw.W.rate;
    if (this.syn.usSet && tw.W.nation.indexOf('미국') >= 0) rate *= 1.05;
    const bf = tw.buff || { range: 0, dmg: 0 };   // 레이더 기지 범위 안이면 사거리·피해 +
    const dmg = tw.W.dmg * U.dmg[i] * (1 + bf.dmg), r = rate * U.rate[i];
    return { dmg, range: tw.W.range * U.range[i] * (1 + bf.range), rate: r, dps: (dmg || 0) * r * (tw.W.salvo || 1), mul: U.dmg[i] };
  }
  upgradeCost(tw) { return Math.round(tw.W.cost * 0.75 * tw.level); }
  upgradeTower(tw, quiet) {
    if (!tw || tw.level >= this.maxLevel(tw)) return false;
    const c = this.upgradeCost(tw);
    if (this.money < c) { if (!quiet) { this.ui().toast('보급이 부족합니다'); this.snd('deny'); } return false; }
    this.money -= c; tw.invested += c; tw.level++;
    const mark = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.03, 0.05), mat(0xf2c14e, { emissive: 0x7a5a00 }));
    mark.position.set(0.3, 0.09, 0.3 - tw.marks.length * 0.08);
    tw.model.root.add(mark); tw.marks.push(mark);
    tw.model.yaw.scale.setScalar(1 + (tw.W.hero ? 0.03 : 0.07) * (tw.level - 1));
    if (this.selected === tw) this.select(tw);
    this.spawnRing(tw.pos, 0.8, 0xf2c14e);
    this.snd('upgrade');
    return true;
  }
  bulkList(type) { return this.towers.filter((x) => x.type === type && x.level < this.maxLevel(x)); }
  bulkCost(type) { return this.bulkList(type).reduce((s, x) => s + this.upgradeCost(x), 0); }
  upgradeAll(type) {
    const list = this.bulkList(type), cost = this.bulkCost(type);
    if (!list.length) return;
    if (this.money < cost) { this.ui().toast('일괄 강화에 보급 ' + cost + ' 필요'); return; }
    list.forEach((x) => this.upgradeTower(x, true));
    this.ui().toast(GF.wname(type) + ' ' + list.length + '대 강화 완료', '#F2C14E');
  }
  sellTower(tw) {
    if (tw.label) { this.city.labels.splice(this.city.labels.indexOf(tw.label), 1); this.ui().resetLabels(); }
    this.money += Math.round(tw.invested * GF.SETTINGS.sellRefund);
    this.unitGroup.remove(tw.model.root);
    this.towers.splice(this.towers.indexOf(tw), 1);
    this.select(null);
    this.snd('sell');
  }

  // ---------- 적 ----------
  spawnEnemy(type, wave, lane = null) {
    const E = GF.ENEMIES[type];
    // 웨이브가 20보다 긴 도시(베이징 30·모스크바 40)는 체력 곡선을 늘려서 마지막 웨이브 체력이 예전 20웨이브 때와 같게
    const N = this.S.waves.length, w = N > 20 ? 1 + (wave - 1) * 19 / (N - 1) : wave;
    const hp = E.hp * (1 + this.S.hpScale * (w - 1) + (this.S.hpQuad || 0) * (w - 1) ** 2) * (E.boss ? this.S.bossHp ?? 1 : 1) * (this.diff ? this.diff.hp : 1);   // bossHp: 길이 짧은 스테이지는 보스 체력을 줄임
    const model = getEnemy(type);
    const sc = E.final ? 2.6 : E.boss ? 2.4 : type === "inf" ? 1.6 : 1.85;
    model.root.scale.setScalar(sc);
    const e = { type, wave, E, hp, maxHp: hp, d: 0, air: !!E.air, off: E.boss ? 0 : (Math.random() - 0.5) * 0.9, wob: Math.random() * 10, stun: 0, slowMul: 1, dead: false, model, pos: V(), sc, si: 0, k: 0, rem: 1e9 };
    if (e.air) {
      const pts = this.airPath(lane);
      e.fly = { pts, segs: [] }; e.len = 0;
      for (let i = 0; i < pts.length - 1; i++) { const l = pts[i].distanceTo(pts[i + 1]); e.fly.segs.push({ a: pts[i], b: pts[i + 1], l, c: e.len }); e.len += l; }
    } else if (this.maze) {
      // 길 만들기: 입구 터널에서 첫 칸으로 들어와 칸을 따라 걸음
      const [gx, gz] = this.S.route[0].pts[0];
      e.mz = true; e.gx = gx; e.gz = gz; e.tk = this.maze.entry; e.pk = -1; e.ga = 0;
    } else if (lane) {
      e.br = lane; e.opt = lane;
    } else {
      e.opt = this.city.steps[0].opts[this.city.steps[0].open];
    }
    const bw = E.boss ? 1.6 : 0.7;
    e.hpBg = new THREE.Sprite(this.hpBgMat || (this.hpBgMat = new THREE.SpriteMaterial({ color: 0x1a0000, depthTest: false })));
    e.hpFg = new THREE.Sprite(new THREE.SpriteMaterial({ color: E.boss ? 0xff8a8e : 0xff4a3d, depthTest: false }));
    e.hpBg.scale.set(bw + 0.05, 0.11, 1); e.hpFg.scale.set(bw, 0.07, 1); e.bw = bw;
    e.hpBg.renderOrder = 10; e.hpFg.renderOrder = 11;
    e.hpBg.visible = e.hpFg.visible = false;
    this.unitGroup.add(model.root, e.hpBg, e.hpFg);
    this.enemies.push(e);
    this.placeEnemy(e, 0);
  }

  // 공중 적 진입로. stage.airEntry:
  //   'withGround' (초반 스테이지): 지상군과 같은 입구에서 들어와 도로를 따라 날아옴
  //   'allSides'   (후반 스테이지): 동·서·남·북 아무 가장자리에서 나타나 지휘부로 곧장 날아옴
  airPath(lane) {
    const S = this.S, b = S.bounds, base = this.city.base.clone().add(V(-1.5, 0, 0)), j = () => (Math.random() - 0.5) * 1.6;
    if ((S.airEntry || 'withGround') === 'allSides') {
      const side = Math.floor(Math.random() * 4), m = 3;
      const rx = b.x0 + Math.random() * (b.x1 - b.x0), rz = b.z0 + Math.random() * (b.z1 - b.z0);
      const start = [V(rx, 0, b.z0 - m), V(b.x1 + m, 0, rz), V(rx, 0, b.z1 + m), V(b.x0 - m, 0, rz)][side];
      const mid = start.clone().lerp(base, 0.5).add(V(j() * 4, 0, j() * 4));
      return [start, mid, base];
    }
    // 갈래 길 입구: 그 길을 따라 합류점까지, 이후 본 도로를 따라 (5마다 한 점)
    if (lane) {
      const pts = [], walk = (o, from) => { for (let d = from; d < o.len; d += 5) { const s = o.samples.find((q) => q.cum >= d) || o.samples[o.samples.length - 1]; pts.push(V(s.p.x + j(), 0, s.p.z + j())); } };
      let o = lane, from = 0;
      for (;;) {
        walk(o, from);
        const r = o.joinRef; if (!r) break;
        from = o.joinCum;
        if (r.branch) { o = r.branch; continue; }
        for (let si = r.step; si < this.city.steps.length; si++) { const st = this.city.steps[si]; walk(st.opts[st.open], si === r.step ? from : 0); }
        break;
      }
      const [x0, z0] = lane.pts[0], [x1, z1] = lane.pts[1], l = Math.hypot(x1 - x0, z1 - z0);
      pts[0].x -= (x1 - x0) / l * 2; pts[0].z -= (z1 - z0) / l * 2;
      pts.push(base);
      return pts;
    }
    // 길 만들기 맵: 공중 적도 지금 만들어진 칸 길을 따라 날아옴 (2칸마다 한 점)
    if (this.maze) {
      const M = this.maze, pts = [V(S.route[0].pts[0][0] - 2, 0, S.route[0].pts[0][1])];
      M.path.forEach((k, i) => { if (i % 2 === 0 || i === M.path.length - 1) { const [x, z] = M.center(k); pts.push(V(x + j() * 0.6, 0, z + j() * 0.6)); } });
      pts.push(base);
      return pts;
    }
    // 지상군과 같은 입구: 도로 꺾임점을 따라 (조금씩 흩어져서)
    const pts = [];
    for (const st of S.route) for (const [x, z] of (st.choice ? st.choice[0] : st).pts) {
      const p = V(x + j(), 0, z + j());
      if (!pts.length || pts[pts.length - 1].distanceTo(p) > 1) pts.push(p);
    }
    pts[0].x -= 2;
    pts.push(base);
    return pts;
  }

  removeEnemy(e) { this.unitGroup.remove(e.model.root, e.hpBg, e.hpFg); e.hpFg.material.dispose(); }

  // 지상 적: 구간 끝에 닿으면 다음 구간으로 (그때 열려 있는 길을 고름)
  advanceGround(e) {
    while (e.d >= e.opt.len) {
      if (e.br) {   // 갈래 길 끝 → 합류한 길의 그 지점부터 이어서
        const br = e.br, r = br.joinRef;
        e.d = e.d - br.len + br.joinCum; e.k = 0;
        if (r.branch) { e.br = e.opt = r.branch; continue; }
        e.br = null; e.si = r.step;
        const st = this.city.steps[e.si]; e.opt = st.opts[st.open];
        continue;
      }
      e.d -= e.opt.len;
      e.si++; e.k = 0;
      const st = this.city.steps[e.si];
      if (!st) return true;
      e.opt = st.opts[st.open];
    }
    return false;
  }

  // 길 만들기: 다음 칸 가운데로 걸어가고, 닿으면 거리가 가장 줄어드는 이웃 칸을 고름. 지휘부 칸에 닿으면 true
  moveMaze(e, step) {
    const M = this.maze;
    if (M.tower[e.tk] || M.wall[e.tk]) { const k = M.cellOf(e.gx, e.gz); if (k >= 0 && M.open(k)) e.tk = k; }   // 혹시 가던 칸이 막히면 지금 칸으로
    for (let g = 0; g < 6; g++) {
      const [tx, tz] = M.center(e.tk), dx = tx - e.gx, dz = tz - e.gz, L = Math.hypot(dx, dz);
      if (L > step) { if (L > 1e-6) { e.gx += dx / L * step; e.gz += dz / L * step; e.ga = Math.atan2(dz, dx); } return false; }
      e.gx = tx; e.gz = tz; step -= L;
      if (e.tk === M.goal) return true;
      const n = M.next(e.tk, e.pk); if (n < 0) return false;
      e.pk = e.tk; e.tk = n;
    }
    return false;
  }

  placeEnemy(e, dt) {
    let x, z, ang;
    if (e.air) {
      const segs = e.fly.segs; let sg = segs[segs.length - 1];
      for (const q of segs) if (e.d <= q.c + q.l) { sg = q; break; }
      const k = Math.min(1, (e.d - sg.c) / sg.l), side = Math.sin(e.d * 0.6 + e.wob) * 1.2;
      ang = Math.atan2(sg.b.z - sg.a.z, sg.b.x - sg.a.x);
      x = sg.a.x + (sg.b.x - sg.a.x) * k - Math.sin(ang) * side;
      z = sg.a.z + (sg.b.z - sg.a.z) * k + Math.cos(ang) * side;
      e.rem = e.len - e.d;
    } else if (e.mz) {
      const M = this.maze, [tx, tz] = M.center(e.tk);
      ang = e.ga;
      x = e.gx - Math.sin(ang) * e.off; z = e.gz + Math.cos(ang) * e.off;
      e.rem = M.dist[e.tk] * M.C + Math.hypot(tx - e.gx, tz - e.gz);
    } else {
      const s = e.opt.samples;
      while (e.k < s.length - 2 && s[e.k + 1].cum < e.d) e.k++;
      const a = s[e.k], b = s[e.k + 1], f = Math.min(1, Math.max(0, (e.d - a.cum) / Math.max(1e-6, b.cum - a.cum)));
      ang = Math.atan2(b.p.z - a.p.z, b.p.x - a.p.x);
      x = a.p.x + (b.p.x - a.p.x) * f - Math.sin(ang) * e.off;
      z = a.p.z + (b.p.z - a.p.z) * f + Math.cos(ang) * e.off;
      e.rem = e.opt.len - e.d + (e.br ? e.br.after : this.remainAfter[e.si]);
    }
    e.pos.set(x, 0, z);
    const r = e.model.root;
    r.position.set(x, 0, z);
    let diff = -ang - r.rotation.y; diff = Math.atan2(Math.sin(diff), Math.cos(diff));
    r.rotation.y += dt ? diff * Math.min(1, dt * 8) : diff;
    if (e.type === 'inf') e.model.body.position.y = Math.abs(Math.sin(e.d * 9)) * 0.04;
    if (e.hp < e.maxHp) {
      const top = e.model.hpY * e.sc + 0.1;
      e.hpBg.visible = e.hpFg.visible = true;
      e.hpBg.position.set(x, top, z); e.hpFg.position.set(x, top, z);
      const ratio = Math.max(0.001, e.hp / e.maxHp);
      e.hpFg.scale.x = e.bw * ratio; e.hpFg.center.set(0.5 / ratio, 0.5);
    }
  }

  // ---------- 매 프레임 ----------
  update(dt, time) {
    if (this.maze && this.maze.sync(this.towers)) { this.mzPrev = null; this.city.showMazePath(this.maze); }   // 무기를 놓거나 팔면 적의 길이 바로 바뀜
    for (const e of this.enemies) for (const [o, ax, sp] of e.model.spin) o.rotation[ax] += sp * dt;
    for (const tw of this.towers) {
      if (tw.model.animate) tw.model.animate(dt, time);
      for (const [o, ax, sp] of tw.model.spin) o.rotation[ax] += sp * dt;
      for (const g of tw.model.glow) g.material.emissiveIntensity = 1 + Math.sin(time * 3) * 0.5;
    }
    this.updateFx(dt);
    if (this.isOver()) return;
    this.comboScanT = (this.comboScanT || 0) - dt;
    if (this.comboScanT <= 0) { this.comboScanT = 0.4; this.refreshCombos(); }
    if (this.comboT > 0) { this.comboT -= dt; if (this.comboT <= 0) this.endCombo(); }

    if (this.state === 'battle') {
      this.clock += dt;
      while (this.queue.length && this.queue[0].t <= this.clock) { const q = this.queue.shift(); this.spawnEnemy(q.type, q.wave, q.lane); }
      this.cpT += dt;
      while (this.cpT >= GF.SETTINGS.cpEverySec) { this.cpT -= GF.SETTINGS.cpEverySec; this.cp = Math.min(GF.SETTINGS.cpMax, this.cp + 1); }
      if (this.cp >= GF.SETTINGS.cpMax) this.cpT = 0;
      // 자동 다음 웨이브
      if (!this.queue.length && this.waveNo < this.S.waves.length) {
        if (this.nextT <= 0) this.nextT = this.S.autoNextSec;
        else { this.nextT -= dt; if (this.nextT <= 0.001) { this.nextT = 0; this.launchWave(0); } }
      }
    }

    if (this.state === 'battle') this.checkAutoSave();   // 웨이브 처리(절반 연출·자동 저장)

    for (const tm of this.timers) { tm.t -= dt; if (tm.t <= 0) { tm.fn(); tm.done = true; } }
    this.timers = this.timers.filter((tm) => !tm.done);

    // 감속·교란
    for (const e of this.enemies) e.slowMul = 1;
    // 레이더 기지: 범위 안 아군 무기 강화 (가장 센 레이더 하나만)
    const radars = this.towers.filter((t) => t.W.buff);
    for (const tw of this.towers) {
      tw.buff = null;
      if ((tw.W.buff && !tw.W.hero) || tw.W.shot === 'aura') continue;
      for (const rd of radars) {
        if (rd === tw) continue;
        const rr = rd.W.buffR ? rd.W.buffR * (1 + 0.04 * (rd.level - 1)) : this.stats(rd).range;   // 잔 다르크: 곁 5칸
        if (rd.pos.distanceToSquared(tw.pos) > rr * rr) continue;
        const k = 1 + (rd.W.hero ? 0.1 : 0.25) * (rd.level - 1), b = { range: rd.W.buff.range * k, dmg: rd.W.buff.dmg * k };
        if (!tw.buff || b.range > tw.buff.range) tw.buff = b;
      }
    }
    for (const rd of radars) { rd.pulse -= dt; if (rd.pulse <= 0) { rd.pulse = 2.2; this.spawnRing(rd.pos, rd.W.buffR ? rd.W.buffR * (1 + 0.04 * (rd.level - 1)) : this.stats(rd).range, rd.W.hero ? 0xfff2b0 : 0x9cff8a, 1.2); } }
    // 화염 지대 (TOS-1A): 안에 있는 지상 적이 계속 탐
    for (const f of this.fires) {
      f.t -= dt;
      for (const e of this.enemies) if (!e.dead && !e.air && (e.pos.x - f.pos.x) ** 2 + (e.pos.z - f.pos.z) ** 2 <= f.r * f.r) this.hurt(e, f.dps * dt, f.tw, { pierce: true });
      this.vfx.burn(f.pos, f.r * 1.2, dt, 1.4);
      f.mesh.material.opacity = 0.55 * Math.min(1, f.t / 0.6) * (0.8 + Math.random() * 0.2);
    }
    this.fires = this.fires.filter((f) => { if (f.t <= 0) { this.fxGroup.remove(f.mesh); return false; } return true; });
    for (const tw of this.towers) {
      if (tw.W.shot !== 'aura' || !tw.W.slow) continue;
      const st = this.stats(tw), r = st.range, lvMul = st.mul;
      tw.pulse -= dt;
      let any = false;
      for (const e of this.enemies) {
        if (e.dead || e.pos.distanceToSquared(tw.pos) > r * r) continue;
        any = true;
        e.slowMul = Math.min(e.slowMul, 1 - tw.W.slow * (e.type === 'drone' ? 1.35 : 1));
        if (e.air && tw.W.airDps) this.hurt(e, tw.W.airDps * lvMul * dt, tw, { pierce: true });
      }
      if (tw.pulse <= 0 && any) { tw.pulse = 1.3; this.spawnRing(tw.pos, r, 0x6fd3ff, 0.9); }
    }
    for (const tw of this.towers) {   // 영웅 처칠: 사거리 안 적 감속
      if (!tw.W.hero || !tw.W.slow) continue;
      const r = this.stats(tw).range;
      for (const e of this.enemies) if (!e.dead && e.pos.distanceToSquared(tw.pos) <= r * r) e.slowMul = Math.min(e.slowMul, 1 - tw.W.slow);
    }
    for (const z of this.zones) {
      z.t -= dt;
      for (const e of this.enemies) if (!e.air && e.pos.distanceTo(z.pos) <= z.r) e.slowMul = Math.min(e.slowMul, 0.5);
      z.mesh.material.opacity = Math.min(0.45, z.t / 2);
    }
    this.zones = this.zones.filter((z) => { if (z.t <= 0) { this.fxGroup.remove(z.mesh); return false; } return true; });

    // 적 이동
    for (const e of this.enemies) {
      if (e.dead) continue;
      let step = 0;
      if (e.stun > 0) e.stun -= dt; else { step = e.E.speed * e.slowMul * dt; e.d += step; }
      if (e.air ? e.d >= e.len : e.mz ? this.moveMaze(e, step) : this.advanceGround(e)) { this.leak(e); continue; }
      this.placeEnemy(e, dt);
    }
    this.enemies = this.enemies.filter((e) => !e.dead);

    // 무기 사격
    for (const tw of this.towers) {
      if (tw.W.shot === 'aura') continue;
      const st = this.stats(tw);
      tw.cd -= dt;
      if (tw.cd > 0.25 && tw.lastT && !tw.lastT.dead) { this.aim(tw, tw.lastT, dt); continue; }
      const tg = this.findTarget(tw, st.range);
      tw.lastT = tg;
      if (!tg) continue;
      const diff = this.aim(tw, tg, dt);
      if (tw.cd <= 0 && Math.abs(diff) < 0.5) { tw.cd = 1 / st.rate; this.fire(tw, tg, st); }
    }

    for (const s of this.shots) this.moveShot(s, dt);
    this.shots = this.shots.filter((s) => !s.done);

    if (this.state === 'battle' && this.waveNo >= this.S.waves.length && !this.queue.length && !this.enemies.length) this.finish(true);
  }

  aim(tw, tg, dt) {
    const want = Math.atan2(tg.pos.z - tw.pos.z, tg.pos.x - tw.pos.x);
    let diff = want - tw.ang; diff = Math.atan2(Math.sin(diff), Math.cos(diff));
    tw.ang += Math.sign(diff) * Math.min(Math.abs(diff), 7 * dt);
    tw.model.yaw.rotation.y = -tw.ang;
    return diff;
  }

  findTarget(tw, range) {
    let best = null, br = 1e9;
    const r2 = range * range, hits = tw.W.hits;
    for (const e of this.enemies) {
      if (e.dead || !hits.includes(e.air ? 'air' : 'ground')) continue;
      if (e.pos.distanceToSquared(tw.pos) > r2) continue;
      if (e.rem < br) { br = e.rem; best = e; }
    }
    return best;
  }

  targetPoint(e) { return e.pos.clone().setY(e.air ? e.model.body.position.y * e.sc : 0.3); }

  fire(tw, e, st) {
    const W = tw.W;
    if (W.hero) { this.fireHero(tw, e, st); return; }
    tw.model.root.updateMatrixWorld(true);
    const mz = tw.model.muzzle.getWorldPosition(V());
    const tp = this.targetPoint(e);
    this.snd(W.sfx || (W.heavy ? 'cruise' : W.pierce ? 'javelin' : W.shot));
    if (W.shot === 'bullet') {
      this.hurt(e, st.dmg, tw);
      const hit = tp.add(V((Math.random() - 0.5) * 0.2, 0, (Math.random() - 0.5) * 0.2));
      this.vfx.muzzle(mz, hit.clone().sub(mz).normalize(), false);
      this.tracer(mz, hit);
      this.vfx.impact(hit, e.air);
    } else if (W.shot === 'cannon') {
      this.vfx.muzzle(mz, tp.clone().sub(mz).normalize(), true);
      this.tracer(mz, tp, 0xffc46a);
      if (W.pierce) { this.hurt(e, st.dmg * 0.5, tw, { pierce: true }); this.explode(tp.clone().setY(0), W.splash, st.dmg * 0.5, tw, true); }   // 조합 K2: 목표는 장갑 무시
      else this.explode(tp.clone().setY(0), W.splash, st.dmg, tw, true);
    } else if (W.shot === 'shell') {
      this.addShot('shell', mz, { to: tp.setY(0), speed: 9, arc: 1.5 + mz.distanceTo(tp) * 0.18, dmg: st.dmg, splash: W.splash, tw });
      this.vfx.muzzle(mz, V(0, 1, 0), true);
    } else if (W.shot === 'missile') {
      this.vfx.muzzle(mz, V(0, 1, 0), !!W.heavy);
      this.addShot('missile', mz, { target: e, speed: e.air ? 10 : 7, dmg: st.dmg, tw, pierce: !!W.pierce, splash: W.splash || 0, heavy: !!W.heavy });
    } else if (W.shot === 'intercept') {
      for (let i = 0; i < (W.salvo || 1); i++) this.timers.push({ t: i * 0.05, fn: () => this.addShot('missile', mz, { target: e, speed: W.salvo ? 18 : 12, dmg: st.dmg, tw, pierce: true, splash: 0, small: true }) });
    } else if (W.shot === 'rockets') {
      for (let i = 0; i < W.salvo; i++) {
        const off = V((Math.random() - 0.5) * 2.2, 0, (Math.random() - 0.5) * 2.2);
        this.timers.push({ t: i * 0.12, fn: () => this.addShot('rocket', mz, { to: tp.clone().setY(0).add(off), speed: 11, arc: 3, dmg: st.dmg, splash: W.splash, tw, burn: W.burn }) });
      }
    } else if (W.shot === 'drone') {
      // 무인기 출격: FPV는 목표에 그대로 자폭, TB2는 목표 위로 날아가 폭탄 투하
      const fpv = W.drone === 'fpv', n = W.salvo || 1;
      const list = n > 1 ? [e].concat(this.enemies.filter((x) => x !== e && !x.dead && !x.air && x.pos.distanceToSquared(tw.pos) <= st.range * st.range).sort((a, b) => a.rem - b.rem).slice(0, n - 1)) : [e];
      for (let i = 0; i < n; i++) {
        const x = list[i % list.length];
        this.timers.push({ t: i * 0.12, fn: () => this.addShot('missile', mz.clone().setY(mz.y + 0.2), { target: x, speed: fpv ? 7.5 : 6, dmg: st.dmg, tw, pierce: !!W.pierce, splash: W.splash || 0, mesh: this.droneMesh(W.drone), drone: true }) });
      }
    } else if (W.shot === 'laser') {
      // 레이저: 즉시 명중, 붉은 빛줄기가 잠깐 남음
      this.hurt(e, st.dmg, tw, { pierce: true });
      this.beam(mz, tp, 0xff3a2a, 0.035, 0.12);
      this.vfx.impact(tp, e.air);
    } else if (W.shot === 'rail') {
      // 레일건: 목표 방향 일직선 위의 모든 지상 적을 꿰뚫음
      const dir = tp.clone().sub(mz).setY(0).normalize(), end = mz.clone().add(dir.clone().multiplyScalar(st.range * 1.15)).setY(0.3);
      for (const x of this.enemies) {
        if (x.dead || x.air) continue;
        const rel = x.pos.clone().sub(mz).setY(0), along = rel.dot(dir);
        if (along < 0 || along > st.range * 1.15) continue;
        if (rel.clone().sub(dir.clone().multiplyScalar(along)).lengthSq() <= 0.55 * 0.55) { this.hurt(x, st.dmg, tw, { pierce: true }); this.vfx.impact(this.targetPoint(x), false); }
      }
      this.beam(mz, end, 0x8fe8ff, 0.07, 0.35);
      this.vfx.muzzle(mz, dir, true); this.app.shake(0.08);
    }
  }

  // 영웅 공격: 몸짓(act)을 먼저 시작하고 몸짓 절정에 맞춰 공격이 나감
  fireHero(tw, e, st) {
    const W = tw.W, m = tw.model;
    m.fire();
    m.root.updateMatrixWorld(true);
    const mz = m.muzzle.getWorldPosition(V()), tp = this.targetPoint(e), g0 = tp.clone().setY(0);
    const near = (n, air) => this.enemies.filter((x) => !x.dead && (air || !x.air) && W.hits.includes(x.air ? 'air' : 'ground') && x.pos.distanceToSquared(tw.pos) <= st.range * st.range).sort((a, b) => a.rem - b.rem).slice(0, n);
    if (W.shot === 'bombrun') {
      // 폭격기 편대가 목표 위를 지나가며 폭탄 5발을 적 진행 방향으로 줄지어
      const dir = e.fly ? V(1, 0, 0) : (() => { const a = Math.random() * Math.PI; return V(Math.cos(a), 0, Math.sin(a)); })();
      this.timers.push({ t: 0.35, fn: () => { this.flyJet(g0); this.snd('airstrike'); } });
      for (let i = 0; i < W.salvo; i++) {
        const p = g0.clone().addScaledVector(dir, (i - 2) * 1.1).add(V((Math.random() - 0.5) * 0.4, 0, (Math.random() - 0.5) * 0.4));
        this.timers.push({ t: 1.0 + i * 0.09, fn: () => { this.explode(p, W.splash, st.dmg, tw); if (i === 2) this.app.shake(0.2); } });
      }
    } else if (W.shot === 'volley') {
      // 칼을 내리치는 순간 불붙은 포탄 3발
      this.timers.push({ t: 0.5, fn: () => {
        this.snd('cannon');
        for (let i = 0; i < W.salvo; i++) {
          const to = g0.clone().add(V((Math.random() - 0.5) * 1.4, 0, (Math.random() - 0.5) * 1.4));
          this.addShot('shell', mz, { to, speed: 10, arc: 1.2 + mz.distanceTo(to) * 0.14, dmg: st.dmg, splash: W.splash, tw });
          this.vfx.muzzle(mz, to.clone().sub(mz).normalize(), true);
        }
        this.spawnPuff(mz, 0xd9d4c8, 4, 0.22);
      } });
    } else if (W.shot === 'arrows') {
      // 시위를 놓는 순간 불화살이 서로 다른 적에게 (최대 3명)
      this.timers.push({ t: 0.5, fn: () => {
        const list = near(W.salvo, true); if (!list.length) return;
        this.snd('intercept', 0.6);
        list.forEach((x, i) => this.timers.push({ t: i * 0.07, fn: () => this.addShot('arrow', mz, { target: x, speed: 13, dmg: st.dmg, tw, pierce: false, splash: x.air ? 0 : W.splash, arrow: true }) }));
      } });
    } else if (W.shot === 'musket') {
      // 조총 일제 사격: 가장 앞선 적 5명 동시에
      this.timers.push({ t: 0.15, fn: () => {
        this.snd('bullet', 1);
        for (const x of near(W.salvo, true)) {
          const hit = this.targetPoint(x);
          this.hurt(x, st.dmg, tw, { pierce: true });
          this.tracer(mz, hit, 0xffd08a); this.vfx.impact(hit, x.air);
        }
        this.spawnPuff(mz, 0xe8e4da, 5, 0.2, 1.2);
      } });
    } else if (W.shot === 'broadside') {
      for (let i = 0; i < W.salvo; i++) {
        this.timers.push({ t: 0.45 + i * 0.08, fn: () => {
          const to = g0.clone().add(V((Math.random() - 0.5) * 2.4, 0, (Math.random() - 0.5) * 2.4));
          this.addShot('shell', mz, { to, speed: 11, arc: 2 + mz.distanceTo(to) * 0.12, dmg: st.dmg, splash: W.splash, tw });
          this.vfx.muzzle(mz, V(0, 1, 0), true); if (i % 3 === 0) this.snd('shell', 0.7);
        } });
      }
    } else if (W.shot === 'carrier') {
      // 경례 뒤 손을 뻗는 순간 유도탄 4발이 서로 다른 적에게
      this.timers.push({ t: 0.5, fn: () => {
        const list = near(W.salvo, true); if (!list.length) return;
        this.snd('missile');
        for (let i = 0; i < W.salvo; i++) {
          const x = list[i % list.length];
          this.timers.push({ t: i * 0.1, fn: () => this.addShot('missile', mz, { target: x, speed: x.air ? 11 : 8, dmg: st.dmg, tw, pierce: true, splash: x.air ? 0 : W.splash }) });
        }
      } });
    } else if (W.shot === 'fighters') {
      // 손짓 한 번에 F-15K 편대: 서로 다른 적(공중·지상) 3곳으로 날아가 미사일을 꽂음
      const list = near(W.salvo, true); if (!list.length) return;
      this.timers.push({ t: 0.25, fn: () => this.snd('airstrike') });
      list.forEach((x, i) => {
        this.timers.push({ t: 0.3 + i * 0.16, fn: () => {
          if (x.dead) return;
          const p = x.pos.clone().setY(0);
          this.flyJet(p, { color: 0x5d6670, from: tw.pos, scale: 1.25 });
          this.timers.push({ t: 0.55, fn: () => {
            if (x.dead) return;
            const from = x.pos.clone().add(V(-3.5, 6.5, 2.5));
            this.addShot('missile', from, { target: x, speed: 18, dmg: st.dmg, tw, pierce: true, splash: x.air ? 0 : W.splash });
          } });
        } });
      });
    } else if (W.shot === 'bark') {
      // 비숑이 왈왈 두 번 짖음: 음파 고리가 목표까지 날아가 주변 적들에게 피해 + 잠깐 멈춤
      for (let b = 0; b < 2; b++) {
        this.timers.push({ t: 0.32 + b * 0.2, fn: () => {
          this.snd('bark');
          const from = m.muzzle.getWorldPosition(V()), to = this.targetPoint(e);
          for (let k = 1; k <= 4; k++) this.timers.push({ t: k * 0.04, fn: () => {
            const p = from.clone().lerp(to, k / 4);
            this.spawnRing(p, 0.5 + k * 0.25, 0xffffff, 0.35); this.spawnSpark(p, 0xfff4d0, 0.12, 0.15);
          } });
          this.timers.push({ t: 0.18, fn: () => {
            const c = e.dead ? to : this.targetPoint(e), r2 = W.splash * W.splash;
            const list = this.enemies.filter((x) => !x.dead && (x.pos.x - c.x) ** 2 + (x.pos.z - c.z) ** 2 <= r2).sort((a, b2) => a.rem - b2.rem).slice(0, W.salvo);
            for (const x of list) { this.hurt(x, st.dmg / 2, tw, { pierce: true }); if (!x.E.boss) x.stun = Math.max(x.stun, 0.35); this.vfx.impact(this.targetPoint(x), x.air); }
            this.spawnRing(c, W.splash, 0xfff0c8, 0.5); this.spawnRing(c, W.splash * 0.6, 0xffb0e8, 0.4);
            if (b === 0) this.ui().floatText(c.clone().setY(1.6), '왈!', '#FFFFFF');
          } });
        } });
      }
    } else if (W.shot === 'belt') {
      // 바지 벨트를 풀어 휘두름: 짝! 짝! 두 번. 벨트 끝 충격파가 목표 주변 적들에게 피해 + 잠깐 멈춤 (임배근과 같은 공격력)
      for (let b = 0; b < 2; b++) {
        this.timers.push({ t: 0.42 + b * 0.24, fn: () => {
          this.snd('whip');
          const from = m.muzzle.getWorldPosition(V()), c = e.dead ? g0 : this.targetPoint(e), r2 = W.splash * W.splash;
          this.tracer(from, c, 0xc89a5a);
          for (let k = 1; k <= 3; k++) this.spawnSpark(from.clone().lerp(c, k / 3), 0xffe2b0, 0.14, 0.12);
          const list = this.enemies.filter((x) => !x.dead && (x.pos.x - c.x) ** 2 + (x.pos.z - c.z) ** 2 <= r2).sort((a2, b2) => a2.rem - b2.rem).slice(0, W.salvo);
          for (const x of list) { this.hurt(x, st.dmg / 2, tw, { pierce: true }); if (!x.E.boss) x.stun = Math.max(x.stun, 0.35); this.vfx.impact(this.targetPoint(x), x.air); }
          this.spawnRing(c, W.splash, 0xffd6a0, 0.4); this.spawnRing(c, W.splash * 0.5, 0xffffff, 0.3);
          this.ui().floatText(c.clone().setY(1.6), b ? '찰싹!' : '짝!', '#FFE2B0');
        } });
      }
    } else if (W.shot === 'moktak') {
      // 목탁을 똑! 똑! 두 번: 두드릴 때마다 금빛 부처님이 날아가 목표 주변 적들에게 피해 + 잠깐 멈춤
      for (let b = 0; b < 2; b++) {
        this.timers.push({ t: 0.18 + b * 0.3, fn: () => {
          this.snd('moktak');
          const from = m.muzzle.getWorldPosition(V()), to = e.dead ? g0.clone() : this.targetPoint(e);
          this.spawnRing(from, 0.6, 0xffe08a, 0.35);
          const bud = makeBuddha(); bud.scale.setScalar(2.2);
          this.addShot('shell', from.clone().setY(from.y + 0.4), { to, speed: 9, arc: 1.4 + from.distanceTo(to) * 0.12, dmg: 0, splash: 0, tw, mesh: bud, onHit: (p) => {
            const r2 = W.splash * W.splash;
            const list = this.enemies.filter((x) => !x.dead && (x.pos.x - p.x) ** 2 + (x.pos.z - p.z) ** 2 <= r2).sort((a2, b2) => a2.rem - b2.rem).slice(0, W.salvo);
            for (const x of list) { this.hurt(x, st.dmg / 2, tw, { pierce: true }); if (!x.E.boss) x.stun = Math.max(x.stun, 0.4); this.vfx.impact(this.targetPoint(x), x.air); }
            this.spawnRing(p.clone().setY(0.2), W.splash, 0xffd36a, 0.5); this.spawnRing(p.clone().setY(0.2), W.splash * 0.5, 0xffffff, 0.4);
            this.explodeFx(p.clone().setY(0.4), 0.5);
            if (b === 0) this.ui().floatText(p.clone().setY(1.8), '나무아미타불', '#FFE08A');
          } });
        } });
      }
    } else if (W.shot === 'glasses') {
      // 뿔테안경 번쩍: 두 줄기 광선이 목표로 → 주변 적 8명을 두 번 태우고 잠깐 멈춤 (임배근과 같은 공격력)
      for (let b = 0; b < 2; b++) {
        this.timers.push({ t: 0.4 + b * 0.22, fn: () => {
          this.snd('glint');
          const from = m.muzzle.getWorldPosition(V()), c = e.dead ? g0 : this.targetPoint(e), r2 = W.splash * W.splash;
          for (const dz of [-0.06, 0.06]) this.tracer(from.clone().add(V(0, 0, dz)), c, 0x9fe8ff);
          this.spawnSpark(from, 0xffffff, 0.3, 0.15);
          const list = this.enemies.filter((x) => !x.dead && (x.pos.x - c.x) ** 2 + (x.pos.z - c.z) ** 2 <= r2).sort((a2, b2) => a2.rem - b2.rem).slice(0, W.salvo);
          for (const x of list) { this.hurt(x, st.dmg / 2, tw, { pierce: true }); if (!x.E.boss) x.stun = Math.max(x.stun, 0.35); this.vfx.impact(this.targetPoint(x), x.air); }
          this.spawnRing(c, W.splash, 0x9fe8ff, 0.4); this.spawnRing(c, W.splash * 0.5, 0xffffff, 0.3);
          if (b === 0) this.ui().floatText(c.clone().setY(1.6), '번쩍!', '#BFF0FF');
        } });
      }
    } else if (W.shot === 'snipe') {
      // Kar98 저격: 한 발이 영웅 → 목표 방향 일직선으로 사거리 끝까지 날아가며 줄 선 적들을 모두 관통
      this.timers.push({ t: 0.28, fn: () => {
        this.snd('snipe');
        const from = m.muzzle.getWorldPosition(V()), c = e.dead ? tp : this.targetPoint(e);
        const dir = V(c.x - tw.pos.x, 0, c.z - tw.pos.z); if (dir.lengthSq() < 1e-6) dir.set(1, 0, 0); dir.normalize();
        const reach = st.range + 1.5, end = tw.pos.clone().addScaledVector(dir, reach).setY(c.y);
        const hit = [];
        for (const x of this.enemies) {
          if (x.dead || !W.hits.includes(x.air ? 'air' : 'ground')) continue;
          const dx = x.pos.x - tw.pos.x, dz = x.pos.z - tw.pos.z, along = dx * dir.x + dz * dir.z;
          if (along < 0 || along > reach) continue;
          if (Math.abs(dx * dir.z - dz * dir.x) <= 0.75 + (x.E.boss ? 0.6 : 0)) hit.push([along, x]);
        }
        hit.sort((p, q) => p[0] - q[0]);
        if (!hit.some(([, x]) => x === e) && !e.dead) hit.unshift([0, e]);
        hit.slice(0, W.salvo).forEach(([, x]) => { this.hurt(x, st.dmg, tw, { pierce: true }); this.vfx.impact(this.targetPoint(x), x.air); });
        this.tracer(from, end, 0xfff6c8); this.tracer(from.clone().setY(from.y + 0.02), end, 0xffffff);
        this.vfx.muzzle(from, dir.clone(), true); this.spawnPuff(from, 0xcfd2c4, 2, 0.16);
        if (hit.length >= 3) this.ui().floatText(c.clone().setY(1.6), `${Math.min(hit.length, W.salvo)}명 관통!`, '#FFF6C8');
      } });
    } else if (W.shot === 'flood') {
      // 살수 물벼락: 목표 자리에 강물이 터져 주변 적 피해 + 뒤로 밀어냄 (보스 제외)
      this.timers.push({ t: 0.42, fn: () => {
        this.snd('shell', 0.8);
        const c = e.dead ? g0 : this.targetPoint(e).setY(0), r2 = W.splash * W.splash, push = W.salvo > 8 ? 3.2 : 2.2;
        const list = this.enemies.filter((x) => !x.dead && !x.air && (x.pos.x - c.x) ** 2 + (x.pos.z - c.z) ** 2 <= r2).sort((a2, b2) => a2.rem - b2.rem).slice(0, W.salvo);
        for (const x of list) {
          this.hurt(x, st.dmg, tw, { pierce: true });
          if (!x.E.boss && !x.dead) { x.d = Math.max(0, x.d - push); x.k = 0; x.stun = Math.max(x.stun, 0.25); this.placeEnemy(x, 0); }
        }
        for (let k = 0; k < 3; k++) this.timers.push({ t: k * 0.08, fn: () => this.spawnRing(c.clone().setY(0.15), W.splash * (0.4 + k * 0.3), k === 1 ? 0xffffff : 0x4fb4ff, 0.6) });
        this.spawnPuff(c.clone().setY(0.3), 0x8fd0ff, 8, 0.3, 0.8);
        this.ui().floatText(c.clone().setY(1.6), '살수!', '#8FD0FF');
      } });
    } else if (W.shot === 'arrowrain') {
      // 귀주대첩 화살비: 목표 주변에 화살이 하늘에서 쏟아짐
      this.timers.push({ t: 0.4, fn: () => {
        this.snd('intercept', 0.7);
        const c = e.dead ? g0 : this.targetPoint(e).setY(0);
        for (let i = 0; i < W.salvo; i++) this.timers.push({ t: 0.25 + i * 0.05, fn: () => {
          const a2 = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()) * W.splash, p = c.clone().add(V(Math.cos(a2) * r, 0, Math.sin(a2) * r));
          this.tracer(p.clone().add(V(-0.8, 3.5, 0)), p.clone().setY(0.1), 0xd9c08a);
          for (const x of this.enemies) if (!x.dead && W.hits.includes(x.air ? 'air' : 'ground') && (x.pos.x - p.x) ** 2 + (x.pos.z - p.z) ** 2 <= 0.9) { this.hurt(x, st.dmg, tw); break; }
          this.spawnSpark(p.clone().setY(0.1), 0xffe2b0, 0.1, 0.12);
        } });
      } });
    } else if (W.shot === 'grandbattery') {
      // 대포병대: 대포 여러 문이 목표를 가로지르는 줄로 포탄을 떨어뜨림
      const a2 = Math.random() * Math.PI, dir = V(Math.cos(a2), 0, Math.sin(a2));
      for (let i = 0; i < W.salvo; i++) {
        this.timers.push({ t: 0.35 + i * 0.07, fn: () => {
          const to = g0.clone().addScaledVector(dir, (i - (W.salvo - 1) / 2) * 0.9);
          this.addShot('shell', mz, { to, speed: 11, arc: 1.6 + mz.distanceTo(to) * 0.12, dmg: st.dmg, splash: W.splash, tw });
          if (i % 2 === 0) { this.snd('cannon', 0.6); this.spawnPuff(mz, 0xe8e4da, 2, 0.2); }
        } });
      }
    } else if (W.shot === 'holylight') {
      // 성스러운 빛기둥: 하늘에서 목표로 빛이 내리꽂힘 (공중 포함)
      this.timers.push({ t: 0.45, fn: () => {
        this.snd('glint');
        const c = e.dead ? tp : this.targetPoint(e), base = c.clone().setY(0.1);
        this.beam(base.clone().setY(6), base, 0xfff2b0, 0.18, 0.45); this.beam(base.clone().setY(6), base, 0xffffff, 0.07, 0.45);
        const r2 = W.splash * W.splash;
        for (const x of this.enemies) if (!x.dead && (x.pos.x - c.x) ** 2 + (x.pos.z - c.z) ** 2 <= r2) { this.hurt(x, st.dmg, tw, { pierce: true }); this.vfx.impact(this.targetPoint(x), x.air); }
        this.spawnRing(base, W.splash, 0xfff2b0, 0.6); this.spawnRing(base, W.splash * 0.5, 0xffffff, 0.4);
      } });
    } else if (W.shot === 'horsearrows') {
      // 기마 궁수 속사: 서로 다른 적들에게 화살이 차례로
      this.timers.push({ t: 0.3, fn: () => {
        const list = near(W.salvo, true); if (!list.length) return;
        this.snd('intercept', 0.6);
        for (let i = 0; i < W.salvo; i++) { const x = list[i % list.length]; this.timers.push({ t: i * 0.06, fn: () => this.addShot('arrow', mz, { target: x, speed: 15, dmg: st.dmg, tw, pierce: false, splash: 0, arrow: true }) }); }
      } });
    } else if (W.shot === 'phalanx') {
      // 팔랑크스 장창 돌격: 창끝 충격이 일직선으로 뻗어 줄 선 지상 적을 꿰뚫음
      this.timers.push({ t: 0.42, fn: () => {
        this.snd('whip');
        const c = e.dead ? tp : this.targetPoint(e);
        const dir = V(c.x - tw.pos.x, 0, c.z - tw.pos.z); if (dir.lengthSq() < 1e-6) dir.set(1, 0, 0); dir.normalize();
        const reach = st.range + 1, hit = [];
        for (const x of this.enemies) {
          if (x.dead || x.air) continue;
          const dx = x.pos.x - tw.pos.x, dz = x.pos.z - tw.pos.z, along = dx * dir.x + dz * dir.z;
          if (along >= 0 && along <= reach && Math.abs(dx * dir.z - dz * dir.x) <= 1.0) hit.push([along, x]);
        }
        hit.sort((p, q) => p[0] - q[0]);
        hit.slice(0, W.salvo).forEach(([, x]) => { this.hurt(x, st.dmg, tw, { pierce: true }); this.vfx.impact(this.targetPoint(x), false); });
        const from = tw.pos.clone().setY(0.4), end = from.clone().addScaledVector(dir, reach);
        this.beam(from, end, 0xffd36a, 0.12, 0.3);
        for (let k = 1; k <= 5; k++) this.spawnSpark(from.clone().lerp(end, k / 5), 0xfff0b0, 0.16, 0.18);
        if (hit.length >= 3) this.ui().floatText(c.clone().setY(1.6), `${Math.min(hit.length, W.salvo)}명 돌파!`, '#FFE08A');
      } });
    } else if (W.shot === 'elephant') {
      // 전투 코끼리: 코끼리가 날아들어 쿵! 주변 지상 적 피해 + 잠깐 멈춤
      this.timers.push({ t: 0.5, fn: () => {
        this.snd('bark');
        const to = e.dead ? g0.clone() : this.targetPoint(e).setY(0), el = makeElephant(); el.scale.setScalar(2.4);
        el.rotation.y = -Math.atan2(to.z - tw.pos.z, to.x - tw.pos.x);
        this.addShot('shell', mz.clone().setY(mz.y + 0.3), { to, speed: 8, arc: 2 + mz.distanceTo(to) * 0.1, dmg: 0, splash: 0, tw, mesh: el, onHit: (p) => {
          const r2 = W.splash * W.splash;
          for (const x of this.enemies) if (!x.dead && !x.air && (x.pos.x - p.x) ** 2 + (x.pos.z - p.z) ** 2 <= r2) { this.hurt(x, st.dmg, tw, { pierce: true }); if (!x.E.boss) x.stun = Math.max(x.stun, 0.8); }
          this.explodeFx(p.clone().setY(0.3), 1.0); this.spawnRing(p.clone().setY(0.15), W.splash, 0xc9c3b8, 0.6); this.app.shake(0.22); this.snd('bigboom', 0.8);
          this.ui().floatText(p.clone().setY(1.8), '쿵!', '#E8E0D0');
        } });
      } });
    } else if (W.shot === 'pilum') {
      // 로마 군단 투창: 서로 다른 지상 적에게 창이 포물선으로 꽂힘
      this.timers.push({ t: 0.42, fn: () => {
        const list = near(W.salvo, false); if (!list.length) return;
        this.snd('whip');
        list.forEach((x, i) => this.timers.push({ t: i * 0.06, fn: () => {
          const to = this.targetPoint(x).setY(0), sp = new THREE.Mesh(G.arrow, this.pilumM || (this.pilumM = mat(0xb0b8c0, { metalness: 0.7 })));
          sp.scale.set(1.6, 1.6, 1.6);
          this.addShot('shell', mz, { to, speed: 11, arc: 1.2 + mz.distanceTo(to) * 0.1, dmg: st.dmg, splash: W.splash, tw, mesh: sp, orient: true });
        } }));
      } });
    } else if (W.shot === 'scimitar') {
      // 초승달 검기: 몸을 돌려 베면 주변 사거리 안 적들이 베임 (공중 포함)
      this.timers.push({ t: 0.5, fn: () => {
        this.snd('whip');
        const list = near(W.salvo, true);
        for (const x of list) { this.hurt(x, st.dmg, tw, { pierce: true }); this.vfx.impact(this.targetPoint(x), x.air); }
        const c = tw.pos.clone().setY(0.4);
        for (let k = 0; k < 3; k++) this.timers.push({ t: k * 0.07, fn: () => this.spawnRing(c, st.range * (0.4 + k * 0.3), k === 1 ? 0xffffff : 0x9fffd0, 0.4) });
        if (list.length >= 3) this.ui().floatText(c.clone().setY(1.8), `${list.length}명 베기!`, '#BFFFE0');
      } });
    } else if (W.shot === 'finest') {
      // V자 손짓 → 거대한 중포탄 한 발
      this.timers.push({ t: 0.45, fn: () => {
        this.snd('cruise');
        this.addShot('shell', mz, { to: g0, speed: 8, arc: 3 + mz.distanceTo(g0) * 0.15, dmg: st.dmg, splash: W.splash, tw, big: true });
        this.spawnRing(tw.pos, st.range, 0xffd36a, 1.0);
      } });
    }
  }

  addShot(kind, from, o) {
    const s = Object.assign({ kind, done: false, t: 0, from: from.clone(), pos: from.clone() }, o);
    s.mesh = o.mesh ? o.mesh : kind === 'arrow' ? new THREE.Mesh(G.arrow, this.arrowM || (this.arrowM = mat(0x8a6a3a, { emissive: 0xff6a00, emissiveIntensity: 0.6 })))
      : new THREE.Mesh(kind === 'shell' ? G.shell : G.rocket, kind === 'shell' ? (this.shellM || (this.shellM = mat(0xffe08a, { emissive: 0xff9a00 }))) : (this.rocketM || (this.rocketM = mat(0xdfe3e6))));
    if (kind === 'arrow') s.kind = 'missile';
    if (o.small) s.mesh.scale.setScalar(0.7);
    if (o.heavy) s.mesh.scale.setScalar(2.2);
    if (o.big) s.mesh.scale.setScalar(3);
    s.mesh.position.copy(from);
    this.fxGroup.add(s.mesh);
    if (s.to) s.dur = Math.max(0.25, from.distanceTo(s.to) / s.speed);
    this.shots.push(s);
  }

  moveShot(s, dt) {
    const prev = s.pos.clone();
    if (s.kind === 'missile') {
      if (!s.target.dead) s.aim = this.targetPoint(s.target);
      const aim = s.aim || this.targetPoint(s.target);
      const dir = aim.clone().sub(s.pos), dist = dir.length(), step = s.speed * dt;
      s.t += dt;
      if (dist <= step + 0.08) {
        s.done = true; this.fxGroup.remove(s.mesh);
        if (s.splash) this.explode(aim, s.splash, s.dmg, s.tw, false, s.target.air);
        if (s.heavy) { this.snd('bigboom', 1); this.app.shake(0.18); this.explodeFx(aim.clone().setY(0.3), 1.6); }
        else { if (!s.target.dead) this.hurt(s.target, s.dmg, s.tw, { pierce: s.pierce }); this.explodeFx(aim, s.small ? 0.3 : 0.55); }
        return;
      }
      s.pos.add(dir.multiplyScalar(step / dist));
      s.pos.y += Math.sin(Math.min(1, s.t * 2) * Math.PI) * dt * (s.heavy ? 7 : 2);
    } else {
      s.t += dt;
      const k = Math.min(1, s.t / s.dur);
      s.pos.copy(s.from).lerp(s.to, k);
      s.pos.y = s.from.y * (1 - k) + s.to.y * k + s.arc * 4 * k * (1 - k);
      if (k >= 1 && s.onHit) { s.done = true; this.fxGroup.remove(s.mesh); s.onHit(s.to); return; }
      if (s.mesh.userData.spinY !== false && s.onHit) s.mesh.rotation.y += dt * 6;   // 날아가는 부처님은 빙글
      if (k >= 1) { s.done = true; this.fxGroup.remove(s.mesh); this.explode(s.to, s.splash, s.dmg, s.tw); if (s.burn) this.addFire(s.to, s.burn, s.tw); if (s.big) { this.snd('bigboom', 1); this.app.shake(0.3); this.explodeFx(s.to.clone().setY(0.3), 2); } return; }
    }
    s.mesh.position.copy(s.pos);
    if (s.kind !== 'shell') {
      const d = s.pos.clone().sub(prev);
      if (d.lengthSq() > 0) s.mesh.quaternion.setFromUnitVectors(V(0, 1, 0), d.normalize());
      if (s.arrow) this.vfx.emit(this.vfx.glow, { x: s.pos.x, y: s.pos.y, z: s.pos.z, life: 0.18, s0: 0.14, s1: 0.04, c0: [2, 0.9, 0.3], tile: 2 });
      else if (!s.drone) this.vfx.trail(s.pos, prev, !!s.heavy, dt);
    } else if (s.orient) {   // 투창: 날아가는 방향으로 기울임
      const d = s.pos.clone().sub(prev);
      if (d.lengthSq() > 0) s.mesh.quaternion.setFromUnitVectors(V(0, -1, 0), d.normalize());
    } else this.vfx.emit(this.vfx.glow, { x: s.pos.x, y: s.pos.y, z: s.pos.z, life: 0.08, s0: 0.12, c0: [2, 1.4, 0.6], tile: 2 });
  }

  // 범위 피해. air=true 면 공중 적만, 아니면 지상 적만
  explode(p, r, dmg, src, small, air = false) {
    const r2 = r * r;
    for (const e of this.enemies) {
      if (e.dead || e.air !== air) continue;
      const d2 = (e.pos.x - p.x) ** 2 + (e.pos.z - p.z) ** 2;
      if (d2 <= r2) this.hurt(e, dmg * (d2 < r2 * 0.16 ? 1 : 0.65), src, { splash: true });
    }
    this.explodeFx(p, small ? r * 0.6 : r);
    this.snd('boom', small ? 0.5 : 0.8);
  }

  hurt(e, amount, src, o = {}) {
    if (e.dead) return;
    let mul = o.pierce ? 1 : 1 - e.E.armor;
    if (o.splash && this.syn.slowSplash && e.slowMul < 1) mul *= 1.2;
    const dmg = Math.min(e.hp, amount * mul);
    e.hp -= dmg;
    if (src && src.dmgTotal !== undefined) src.dmgTotal += dmg;
    if (e.hp <= 0.001) this.kill(e, src);
  }

  kill(e, src) {
    e.dead = true; this.kills++;
    if (src && src.kills !== undefined) src.kills++;
    const reward = Math.round(e.E.reward * (this.syn.balance ? 1.05 : 1));
    this.money += reward;
    this.removeEnemy(e);
    const big = e.E.boss ? 2 : e.type === 'tank' || e.type === 'heli' ? 0.9 : 0.5;
    this.explodeFx(e.pos.clone().setY(e.air ? e.model.body.position.y * e.sc : 0.25), big);
    if (big >= 0.9) this.snd('bigboom', e.E.boss ? 1.4 : 0.8); else if (e.type !== 'inf') this.snd('boom', 0.45);
    if (!e.air && e.type !== 'inf') this.wreck(e);
    if (e.air) this.fallDebris(e);
    if (reward >= 10) this.ui().floatText(e.pos.clone().setY(1), '+' + reward, '#F2C14E');
    if (e.E.boss) { this.app.shake(e.E.final ? 0.9 : 0.5); this.ui().toast(e.E.final ? '최종 보스 김정은 격파!' : '보스 "티탄" 격파!', '#7FE0A8', e.E.final ? 4200 : undefined); }
    // 연쇄 격파
    this.combo++; this.comboT = GF.SETTINGS.comboWindow;
    if (this.combo >= 10 && this.combo % 10 === 0) { this.ui().combo(this.combo); this.snd('combo'); }
  }

  endCombo() {
    if (this.combo >= 10) {
      const bonus = Math.round(this.combo * 1.5);
      this.money += bonus;
      this.ui().toast(`연쇄 격파 ${this.combo}! 보너스 보급 +${bonus}`, '#FFD45A');
    }
    this.bestCombo = Math.max(this.bestCombo, this.combo);
    this.combo = 0;
  }

  leak(e) {
    e.dead = true;
    this.removeEnemy(e);
    this.lives = Math.max(0, this.lives - e.E.leak);
    this.app.shake(0.2);
    this.ui().flashDamage();
    this.snd('leak');
    this.explodeFx(this.city.base.clone().add(V(-1, 0.6, 0)), 0.7);
    if (this.lives <= 0) this.finish(false);
  }

  // ---------- 작전 카드 ----------
  useCard(i, p) {
    const id = this.hand[i], c = GF.CARDS[id];
    if (this.cp < c.cost) { this.ui().toast('지휘 포인트(CP)가 부족합니다'); return; }
    this.cp -= c.cost;
    this.hand[i] = this.deck.shift(); this.deck.push(id);
    this.mode = null; this.cardSel = -1; this.rangeDisc.visible = false;
    this.snd({ airstrike: 'airstrike', emp: 'emp', supply: 'coin', barrage: 'airstrike', smoke: 'missile' }[id] || 'click');
    const g = V(p.x, 0, p.z);
    if (id === 'supply') { this.money += c.power; this.ui().toast('긴급 보급 도착 · 보급 +' + c.power, '#7FE0A8'); }
    if (id === 'airstrike') {
      this.flyJet(g);
      this.spawnRing(g, c.radius, 0xe5484d);
      this.timers.push({ t: 0.9, fn: () => { this.explode(g, c.radius, c.power, null); this.explodeFx(g.clone().add(V(1, 0, 0.5)), 1.4); this.explodeFx(g.clone().add(V(-0.9, 0, -0.6)), 1.4); this.app.shake(0.35); } });
    }
    if (id === 'emp') {
      this.spawnRing(g, c.radius, 0x8fc3ff, 0.8); this.vfx.pulse(g.clone().setY(0.5), c.radius, 0x8fc3ff);
      for (const e of this.enemies) if (e.pos.distanceTo(g) <= c.radius) e.stun = c.power;
    }
    if (id === 'barrage') {
      this.spawnRing(g, c.radius, 0xf2a33a);
      for (let k = 0; k < 12; k++) {
        const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()) * c.radius;
        const q = g.clone().add(V(Math.cos(a) * r, 0, Math.sin(a) * r));
        this.timers.push({ t: 0.4 + k * 0.13, fn: () => this.explode(q, 1.5, c.power, null) });
      }
    }
    if (id === 'smoke') {
      const mesh = new THREE.Mesh(new THREE.CylinderGeometry(c.radius, c.radius, 0.7, 32), new THREE.MeshStandardMaterial({ color: 0xd0d4d8, transparent: true, opacity: 0.45, depthWrite: false }));
      mesh.position.set(g.x, 0.35, g.z); this.fxGroup.add(mesh);
      this.zones.push({ pos: g, r: c.radius, t: c.power, mesh });
      for (let k = 0; k < 16; k++) this.spawnPuff(g.clone().add(V((Math.random() - 0.5) * c.radius * 1.6, 0.3, (Math.random() - 0.5) * c.radius * 1.6)), 0xe6e8ea, 1, 0.6, 2.5);
    }
  }

  // ---------- 효과 ----------
  pushFx(obj, life, fn) { this.fxGroup.add(obj); this.fx.push({ obj, t: 0, life, fn }); }
  updateFx(dt) {
    for (const f of this.fx) {
      f.t += dt; const k = Math.min(1, f.t / f.life);
      f.fn(f.obj, k, dt);
      if (k >= 1) { this.fxGroup.remove(f.obj); if (f.obj.material && f.obj.material.dispose && !f.obj.material.shared) f.obj.material.dispose(); f.done = true; }
    }
    this.fx = this.fx.filter((f) => !f.done);
    this.vfx.q = { ultra: 1, high: 1, medium: 0.7, low: 0.45 }[this.app.look && this.app.look.q] || 1;
    this.vfx.update(dt);
    if (this.flash.intensity > 0) this.flash.intensity = Math.max(0, this.flash.intensity - dt * 70);
  }
  explodeFx(p, r) {
    this.vfx.explosion(p.clone().setY(Math.max(0.1, p.y)), r, { air: p.y > 0.8 });
    this.flash.position.copy(p).setY(Math.max(1, p.y + 0.6)); this.flash.intensity = Math.max(this.flash.intensity, 10 + r * 14); this.flash.distance = 4 + r * 5;
  }
  spawnPuff(p, color, n = 1, size = 0.18, life = 0.9) {
    const c = new THREE.Color(color);
    for (let i = 0; i < n; i++) this.vfx.emit(this.vfx.smoke, { x: p.x + (Math.random() - 0.5) * 0.2, y: p.y, z: p.z + (Math.random() - 0.5) * 0.2, v: [0, 0.3 + Math.random() * 0.4, 0], life, s0: size * 1.2, s1: size * 4, c0: [c.r, c.g, c.b], a: 0.6, tile: 0, fin: 0.08 });
  }
  spawnSpark(p, color, size, life = 0.12) {
    const c = new THREE.Color(color);
    this.vfx.emit(this.vfx.glow, { x: p.x, y: p.y, z: p.z, life, s0: size * 2, s1: size * 4, c0: [c.r * 1.8, c.g * 1.8, c.b * 1.8], tile: 2 });
  }
  spawnRing(p, r, color, life = 0.6) {
    const m = new THREE.Mesh(G.ring, new THREE.MeshBasicMaterial({ color, transparent: true, depthWrite: false, side: THREE.DoubleSide }));
    m.rotation.x = -Math.PI / 2; m.position.set(p.x, 0.08, p.z);
    this.pushFx(m, life, (o, k) => { o.scale.setScalar(r * (0.3 + 0.7 * k)); o.material.opacity = 0.9 * (1 - k); });
  }
  tracer(a, b, color = 0xffe08a) { this.vfx.tracer(a, b, color); }
  // 빛줄기 (레이저·레일건): 두 점을 잇는 빛나는 원기둥이 잠깐 남았다 사라짐
  beam(a, b, color, r, life) {
    const d = b.clone().sub(a), L = d.length();
    const m = new THREE.Mesh(G.beam || (G.beam = new THREE.CylinderGeometry(1, 1, 1, 8, 1, true)), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false }));
    m.position.copy(a).addScaledVector(d, 0.5); m.quaternion.setFromUnitVectors(V(0, 1, 0), d.normalize());
    const core = new THREE.Mesh(G.beam, new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false })); core.scale.set(0.4, 1, 0.4); m.add(core);
    m.scale.set(r, L, r);
    this.pushFx(m, life, (o, k) => { o.material.opacity = 0.95 * (1 - k); o.children[0].material.opacity = 1 - k; o.scale.x = o.scale.z = r * (1 - 0.5 * k); });
  }
  // 날아가는 무인기 (+y 방향이 앞)
  droneMesh(kind) {
    const key = 'drone_' + kind;
    if (!this[key]) {
      const g = new THREE.Group(), body = mat(kind === 'fpv' ? 0x2b2d2a : 0xd9dcd6), dk = mat(0x222222);
      const box = (w, h, d, m, x, y, z) => { const o = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); o.position.set(x, y, z); g.add(o); return o; };
      if (kind === 'fpv') {
        box(0.12, 0.12, 0.05, body, 0, 0, 0);
        for (const [x, y] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) { const a = box(0.2, 0.02, 0.02, dk, x * 0.07, y * 0.07, 0); a.rotation.z = Math.atan2(y, x); box(0.11, 0.11, 0.005, mat(0x9fb4c0, { transparent: true, opacity: 0.5 }), x * 0.13, y * 0.13, 0.03); }
        box(0.07, 0.1, 0.06, mat(0x6b5a3a), 0, 0.03, -0.05);   // 매단 폭탄
        g.scale.setScalar(1.6);
      } else {
        box(0.07, 0.62, 0.08, body, 0, 0, 0);                    // 동체
        box(1.0, 0.1, 0.015, body, 0, 0.04, 0.02);              // 긴 날개
        for (const s of [-1, 1]) { const t = box(0.16, 0.06, 0.012, body, s * 0.07, -0.3, 0.05); t.rotation.y = s * 0.7; }  // V꼬리
        box(0.02, 0.02, 0.04, dk, 0, -0.33, 0);                  // 프로펠러 축
        box(0.18, 0.012, 0.01, dk, 0, -0.34, 0);
        box(0.05, 0.08, 0.05, dk, 0, 0.2, -0.05);                // 카메라 볼
        g.scale.setScalar(1.3);
      }
      this[key] = g;
    }
    return this[key].clone(true);
  }
  addFire(p, B, tw) {
    const m = new THREE.Mesh(G.fireDisc || (G.fireDisc = new THREE.CircleGeometry(1, 24)), new THREE.MeshBasicMaterial({ color: 0xff6a1a, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false }));
    m.rotation.x = -Math.PI / 2; m.position.set(p.x, 0.07, p.z); m.scale.setScalar(B.r); this.fxGroup.add(m);
    const lv = tw ? 1 + 0.3 * (tw.level - 1) : 1;
    this.fires.push({ pos: p.clone().setY(0.1), r: B.r, dps: B.dps * lv, t: B.t, tw, mesh: m });
  }
  // 부서진 차량: 검게 탄 차체가 한동안 불타며 연기를 뿜다가 가라앉음
  wreck(e) {
    const m = e.model.root;
    const s = e.E.boss ? 1.8 : e.type === 'tank' ? 1.1 : 0.8;
    const w = new THREE.Group();
    const hull = new THREE.Mesh(G.wreck, this.wreckM || (this.wreckM = mat(0x1d1c1a, { roughness: 1 })));
    hull.scale.set(s, 1.4, s); hull.position.y = 0.08; w.add(hull);
    const top = new THREE.Mesh(G.wreck, this.wreckM2 || (this.wreckM2 = mat(0x2b2620, { roughness: 1 })));
    top.scale.set(s * 0.5, 1.2, s * 0.6); top.position.set(-0.05 * s, 0.22, 0); top.rotation.set(0.15, 0.4, -0.2); w.add(top);
    const ember = new THREE.Mesh(G.wreck, this.emberM || (this.emberM = mat(0x1a0f08, { emissive: 0xff4a10, emissiveIntensity: 1.4 })));
    ember.scale.set(s * 0.7, 0.3, s * 0.4); ember.position.y = 0.17; w.add(ember);
    w.traverse((o) => { if (o.material) o.material.shared = true; });
    w.position.copy(e.pos).setY(0); w.rotation.y = m.rotation.y + (Math.random() - 0.5) * 0.5;
    const life = e.E.boss ? 9 : 6, fire = V();
    this.pushFx(w, life, (o, k, dt) => {
      ember.visible = k < 0.6;
      if (k > 0.85) o.position.y = -(k - 0.85) * 2;
      fire.copy(o.position).setY(0.25);
      this.vfx.burn(fire, s, dt, k < 0.5 ? 1 : 1.6 * (1 - k));
    });
  }
  // 격추된 헬기·드론: 불붙어 연기를 끌며 떨어지고 땅에서 한 번 더 폭발
  fallDebris(e) {
    const m = new THREE.Mesh(G.wreck, this.wreckM || (this.wreckM = mat(0x1d1c1a, { roughness: 1 })));
    m.material.shared = true;
    const s = e.type === 'heli' ? 0.7 : 0.4;
    m.scale.set(s, 2, s);
    m.position.copy(e.pos).setY(e.model.body.position.y * e.sc);
    const vx = (Math.random() - 0.5) * 2, vz = (Math.random() - 0.5) * 2, h0 = m.position.y, T = Math.max(0.5, Math.sqrt(h0 / 4.5));
    let landed = false;
    this.pushFx(m, T, (o, k, dt) => {
      o.position.x += vx * dt; o.position.z += vz * dt; o.position.y = Math.max(0.05, h0 * (1 - k * k));
      o.rotation.x += dt * 6; o.rotation.z += dt * 4;
      this.vfx.fallTrail(o.position, dt);
      if (k >= 0.99 && !landed) { landed = true; this.vfx.explosion(o.position.clone().setY(0.15), e.type === 'heli' ? 0.9 : 0.5, {}); }
    });
  }
  // o: { color, from(출발 쪽 지점: 그쪽에서 목표 위를 지나감), scale }
  flyJet(target, o = {}) {
    const jet = new THREE.Group();
    const c = o.color || 0x8a9097;
    const b = new THREE.Mesh(new THREE.ConeGeometry(0.22, 1.5, 6), mat(c)); b.rotation.z = -Math.PI / 2; jet.add(b);
    const w = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.04, 1.5), mat(0x7a8087)); w.position.x = -0.15; jet.add(w);
    const t = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.34, 0.04), mat(0x7a8087)); t.position.set(-0.6, 0.16, 0); jet.add(t);
    if (o.color) for (const s of [-1, 1]) { const t2 = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.3, 0.04), mat(c)); t2.position.set(-0.6, 0.16, s * 0.14); jet.add(t2); }   // F-15 쌍수직꼬리
    if (o.scale) jet.scale.setScalar(o.scale);
    const dir = o.from ? target.clone().sub(o.from).setY(0).normalize() : V(1, 0, -0.5).normalize();
    const from = target.clone().addScaledVector(dir, -20).setY(6), to = target.clone().addScaledVector(dir, 20).setY(6);
    jet.position.copy(from); jet.lookAt(to); jet.rotateY(-Math.PI / 2);
    jet.traverse((o) => { if (o.material) o.material.shared = true; });
    this.pushFx(jet, 1.8, (o, k) => { o.position.copy(from).lerp(to, k); });
  }
}
