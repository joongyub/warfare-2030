// 전투 규칙 (v4 서울): 도로 밖 자유 배치 → 작전 개시 → 웨이브가 자동으로 이어짐 (다음 웨이브 ≫ 로 앞당기기)
import * as THREE from 'three';
import { getTower, getEnemy, getGhost, mat } from './models.js';
import { VFX } from './vfx.js';

const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const TOWER_SCALE = 1.6, TOWER_GAP = 1.4;
// 효과용 공용 모양 (매번 새로 만들지 않음)
const G = {
  ball: new THREE.SphereGeometry(1, 10, 7),
  puff: new THREE.SphereGeometry(1, 7, 5),
  ring: new THREE.RingGeometry(0.92, 1, 48),
  shell: new THREE.SphereGeometry(0.06, 6, 4),
  rocket: new THREE.ConeGeometry(0.045, 0.24, 6),
  wreck: new THREE.BoxGeometry(1, 0.12, 0.6)
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
    this.enemies = []; this.towers = []; this.shots = []; this.fx = []; this.zones = []; this.timers = [];
  }

  ui() { return this.app.ui; }
  snd(name, vol) { if (this.app.sound) this.app.sound.play(name, vol); }

  // ---------- 새 판 시작 ----------
  start() {
    const S = this.S, SET = GF.SETTINGS;
    for (const t of this.towers) this.unitGroup.remove(t.model.root);
    for (const e of this.enemies) this.removeEnemy(e);
    this.fxGroup.clear(); this.vfx.clear();
    this.city.resetRoutes(); this.city.resetTrees();
    this.money = S.startMoney; this.lives = S.lives;
    this.cp = SET.cpStart; this.cpT = 0;
    this.speed = 1;
    this.waveNo = 0; this.kills = 0;
    this.queue = []; this.clock = 0; this.nextT = 0;
    this.combo = 0; this.comboT = 0; this.bestCombo = 0;
    this.enemies = []; this.towers = []; this.shots = []; this.fx = []; this.zones = []; this.timers = [];
    this.mode = null; this.cardSel = -1; this.selected = null;
    this.deck = GF.CARD_DECK.slice().sort(() => Math.random() - 0.5);
    this.hand = this.deck.splice(0, GF.HAND_SIZE);
    this.strat = {}; for (const [id, C] of Object.entries(GF.STRATEGIC)) this.strat[id] = { charges: this.stratOpen(id) ? C.start : 0 };
    this.stratSel = null;
    this.computeSynergy();
    this.updateRemain();
    this.state = 'ready';
    this.ui().toast('도로 밖 어디든 무기를 놓고 "작전 개시"를 누르세요', '#8FF3FF', 4200);
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
  }

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
    const tok = this.S.waves[this.waveNo - 1].trim().split(/\s+/);
    let t = this.clock + 0.2;
    for (let i = 0; i < tok.length; i += 2) {
      const type = tok[i], cnt = parseInt(tok[i + 1], 10);
      for (let k = 0; k < cnt; k++) { this.queue.push({ t, type, wave: this.waveNo }); t += GF.ENEMIES[type].gap; }
      t += 1.2;
    }
    this.queue.sort((a, b) => a.t - b.t);
    const bonus = this.waveNo > 1 ? 40 + this.waveNo * 8 : 0;
    this.money += bonus + early;
    const total = tok.reduce((s, x, i) => (i % 2 ? s + parseInt(x, 10) : s), 0);
    let msg = `웨이브 ${this.waveNo} · 적 ${total}`;
    if (bonus) msg += ` · 보급 +${bonus}`;
    if (early) msg += ` · 조기 투입 +${early}`;
    this.ui().toast(msg, this.S.waves[this.waveNo - 1].includes('boss') ? '#FF8A8E' : '#ffffff');
    this.snd('wave');
    // 전략 무기 재보급
    for (const [id, C] of Object.entries(GF.STRATEGIC)) {
      const st = this.strat[id];
      if (this.stratOpen(id) && this.waveNo % C.every === 0 && st.charges < C.max) {
        st.charges++;
        this.timers.push({ t: 1.2, fn: () => { this.ui().toast(`${C.name} 재보급 완료! (${C.key} 키)`, '#FF8A8E', 3000); this.snd('siren'); } });
      }
    }
    this.nextT = 0;
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
    this.ui().showResult(won, stars);
    this.snd(won ? 'win' : 'lose');
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
    gh.root.scale.setScalar(TOWER_SCALE); gh.root.visible = false;
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
  }

  // 놓을 수 없는 이유 (없으면 null)
  placeReason(x, z) {
    const r = this.city.blockReason(x, z);
    if (r) return r;
    for (const t of this.towers) if ((t.pos.x - x) ** 2 + (t.pos.z - z) ** 2 < TOWER_GAP * TOWER_GAP) return '다른 무기와 너무 가까움';
    return null;
  }

  hoverAt(p) {
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
    this.showRange(V(p.x, 0, p.z), GF.WEAPONS[this.mode].range, ok ? 0x7fe9ff : 0xff7a7a);
    this.tip = ok ? { ok: true, text: '자유 배치 가능' } : { ok: false, text: why };
  }

  showRange(pos, r, color) {
    this.rangeDisc.position.set(pos.x, 0.07, pos.z);
    this.rangeDisc.scale.setScalar(r);
    this.rangeMats.forEach((m) => m.color.set(color));
    this.rangeDisc.visible = true;
  }

  click(p) {
    if (this.isOver()) return;
    if (this.mode === 'card') { this.useCard(this.cardSel, p); return; }
    if (this.mode === 'strat') { this.useStrat(this.stratSel, p); return; }
    if (this.mode === 'detour') { this.clickDetour(p); return; }
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
    const m = getTower(type);
    const pos = V(x, 0, z);
    m.root.position.copy(pos);
    m.root.scale.setScalar(TOWER_SCALE);
    // 처음엔 가장 가까운 도로를 바라봄
    const ang = -Math.PI / 2;
    m.yaw.rotation.y = -ang;
    this.unitGroup.add(m.root);
    const tw = { type, W: GF.WEAPONS[type], pos, model: m, level: 1, invested: GF.WEAPONS[type].cost, cd: 0.3, dmgTotal: 0, kills: 0, ang, pulse: 0, marks: [] };
    this.towers.push(tw);
    this.city.clearTreesAt(x, z);
    this.spawnPuff(pos, 0xcdb68a, 6);
    this.snd('place');
    return tw;
  }

  stats(tw) {
  return this.statsAt(tw, tw.level);
  }
  // 강화 단계별 능력치: 피해·연사(DPS)와 사거리가 함께 오름
  statsAt(tw, level) {
    const U = GF.SETTINGS.upgrade, i = Math.min(level, U.dmg.length) - 1;
    let rate = tw.W.rate;
    if (this.syn.usSet && tw.W.nation.indexOf('미국') >= 0) rate *= 1.05;
    const dmg = tw.W.dmg * U.dmg[i], r = rate * U.rate[i];
    return { dmg, range: tw.W.range * U.range[i], rate: r, dps: (dmg || 0) * r * (tw.W.salvo || 1), mul: U.dmg[i] };
  }
  upgradeCost(tw) { return Math.round(tw.W.cost * 0.75 * tw.level); }
  upgradeTower(tw, quiet) {
    if (!tw || tw.level >= GF.SETTINGS.maxTowerLevel) return false;
    const c = this.upgradeCost(tw);
    if (this.money < c) { if (!quiet) { this.ui().toast('보급이 부족합니다'); this.snd('deny'); } return false; }
    this.money -= c; tw.invested += c; tw.level++;
    const mark = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.03, 0.05), mat(0xf2c14e, { emissive: 0x7a5a00 }));
    mark.position.set(0.3, 0.09, 0.3 - tw.marks.length * 0.08);
    tw.model.root.add(mark); tw.marks.push(mark);
    tw.model.yaw.scale.setScalar(1 + 0.07 * (tw.level - 1));
    if (this.selected === tw) this.select(tw);
    this.spawnRing(tw.pos, 0.8, 0xf2c14e);
    this.snd('upgrade');
    return true;
  }
  bulkList(type) { return this.towers.filter((x) => x.type === type && x.level < GF.SETTINGS.maxTowerLevel); }
  bulkCost(type) { return this.bulkList(type).reduce((s, x) => s + this.upgradeCost(x), 0); }
  upgradeAll(type) {
    const list = this.bulkList(type), cost = this.bulkCost(type);
    if (!list.length) return;
    if (this.money < cost) { this.ui().toast('일괄 강화에 보급 ' + cost + ' 필요'); return; }
    list.forEach((x) => this.upgradeTower(x, true));
    this.ui().toast(GF.wname(type) + ' ' + list.length + '대 강화 완료', '#F2C14E');
  }
  sellTower(tw) {
    this.money += Math.round(tw.invested * GF.SETTINGS.sellRefund);
    this.unitGroup.remove(tw.model.root);
    this.towers.splice(this.towers.indexOf(tw), 1);
    this.select(null);
    this.snd('sell');
  }

  // ---------- 적 ----------
  spawnEnemy(type, wave) {
    const E = GF.ENEMIES[type];
    const hp = E.hp * (1 + this.S.hpScale * (wave - 1) + (this.S.hpQuad || 0) * (wave - 1) ** 2);
    const model = getEnemy(type);
    const sc = E.boss ? 2.4 : type === "inf" ? 1.6 : 1.85;
    model.root.scale.setScalar(sc);
    const e = { type, E, hp, maxHp: hp, d: 0, air: !!E.air, off: E.boss ? 0 : (Math.random() - 0.5) * 0.9, wob: Math.random() * 10, stun: 0, slowMul: 1, dead: false, model, pos: V(), sc, si: 0, k: 0, rem: 1e9 };
    if (e.air) {
      const pts = this.airPath();
      e.fly = { pts, segs: [] }; e.len = 0;
      for (let i = 0; i < pts.length - 1; i++) { const l = pts[i].distanceTo(pts[i + 1]); e.fly.segs.push({ a: pts[i], b: pts[i + 1], l, c: e.len }); e.len += l; }
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
  airPath() {
    const S = this.S, b = S.bounds, base = this.city.base.clone().add(V(-1.5, 0, 0)), j = () => (Math.random() - 0.5) * 1.6;
    if ((S.airEntry || 'withGround') === 'allSides') {
      const side = Math.floor(Math.random() * 4), m = 3;
      const rx = b.x0 + Math.random() * (b.x1 - b.x0), rz = b.z0 + Math.random() * (b.z1 - b.z0);
      const start = [V(rx, 0, b.z0 - m), V(b.x1 + m, 0, rz), V(rx, 0, b.z1 + m), V(b.x0 - m, 0, rz)][side];
      const mid = start.clone().lerp(base, 0.5).add(V(j() * 4, 0, j() * 4));
      return [start, mid, base];
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
      e.d -= e.opt.len;
      e.si++; e.k = 0;
      const st = this.city.steps[e.si];
      if (!st) return true;
      e.opt = st.opts[st.open];
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
    } else {
      const s = e.opt.samples;
      while (e.k < s.length - 2 && s[e.k + 1].cum < e.d) e.k++;
      const a = s[e.k], b = s[e.k + 1], f = Math.min(1, Math.max(0, (e.d - a.cum) / Math.max(1e-6, b.cum - a.cum)));
      ang = Math.atan2(b.p.z - a.p.z, b.p.x - a.p.x);
      x = a.p.x + (b.p.x - a.p.x) * f - Math.sin(ang) * e.off;
      z = a.p.z + (b.p.z - a.p.z) * f + Math.cos(ang) * e.off;
      e.rem = e.opt.len - e.d + this.remainAfter[e.si];
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
    for (const e of this.enemies) for (const [o, ax, sp] of e.model.spin) o.rotation[ax] += sp * dt;
    for (const tw of this.towers) {
      for (const [o, ax, sp] of tw.model.spin) o.rotation[ax] += sp * dt;
      for (const g of tw.model.glow) g.material.emissiveIntensity = 1 + Math.sin(time * 3) * 0.5;
    }
    this.updateFx(dt);
    if (this.isOver()) return;
    if (this.comboT > 0) { this.comboT -= dt; if (this.comboT <= 0) this.endCombo(); }

    if (this.state === 'battle') {
      this.clock += dt;
      while (this.queue.length && this.queue[0].t <= this.clock) { const q = this.queue.shift(); this.spawnEnemy(q.type, q.wave); }
      this.cpT += dt;
      while (this.cpT >= GF.SETTINGS.cpEverySec) { this.cpT -= GF.SETTINGS.cpEverySec; this.cp = Math.min(GF.SETTINGS.cpMax, this.cp + 1); }
      if (this.cp >= GF.SETTINGS.cpMax) this.cpT = 0;
      // 자동 다음 웨이브
      if (!this.queue.length && this.waveNo < this.S.waves.length) {
        if (this.nextT <= 0) this.nextT = this.S.autoNextSec;
        else { this.nextT -= dt; if (this.nextT <= 0.001) { this.nextT = 0; this.launchWave(0); } }
      }
    }

    for (const tm of this.timers) { tm.t -= dt; if (tm.t <= 0) { tm.fn(); tm.done = true; } }
    this.timers = this.timers.filter((tm) => !tm.done);

    // 감속·교란
    for (const e of this.enemies) e.slowMul = 1;
    for (const tw of this.towers) {
      if (tw.W.shot !== 'aura') continue;
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
    for (const z of this.zones) {
      z.t -= dt;
      for (const e of this.enemies) if (!e.air && e.pos.distanceTo(z.pos) <= z.r) e.slowMul = Math.min(e.slowMul, 0.5);
      z.mesh.material.opacity = Math.min(0.45, z.t / 2);
    }
    this.zones = this.zones.filter((z) => { if (z.t <= 0) { this.fxGroup.remove(z.mesh); return false; } return true; });

    // 적 이동
    for (const e of this.enemies) {
      if (e.dead) continue;
      if (e.stun > 0) e.stun -= dt; else e.d += e.E.speed * e.slowMul * dt;
      if (e.air ? e.d >= e.len : this.advanceGround(e)) { this.leak(e); continue; }
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
    tw.model.root.updateMatrixWorld(true);
    const mz = tw.model.muzzle.getWorldPosition(V());
    const tp = this.targetPoint(e);
    this.snd(W.heavy ? 'cruise' : W.pierce ? 'javelin' : W.shot);
    if (W.shot === 'bullet') {
      this.hurt(e, st.dmg, tw);
      const hit = tp.add(V((Math.random() - 0.5) * 0.2, 0, (Math.random() - 0.5) * 0.2));
      this.vfx.muzzle(mz, hit.clone().sub(mz).normalize(), false);
      this.tracer(mz, hit);
      this.vfx.impact(hit, e.air);
    } else if (W.shot === 'cannon') {
      this.vfx.muzzle(mz, tp.clone().sub(mz).normalize(), true);
      this.tracer(mz, tp, 0xffc46a);
      this.explode(tp.clone().setY(0), W.splash, st.dmg, tw, true);
    } else if (W.shot === 'shell') {
      this.addShot('shell', mz, { to: tp.setY(0), speed: 9, arc: 1.5 + mz.distanceTo(tp) * 0.18, dmg: st.dmg, splash: W.splash, tw });
      this.vfx.muzzle(mz, V(0, 1, 0), true);
    } else if (W.shot === 'missile') {
      this.vfx.muzzle(mz, V(0, 1, 0), !!W.heavy);
      this.addShot('missile', mz, { target: e, speed: e.air ? 10 : 7, dmg: st.dmg, tw, pierce: !!W.pierce, splash: W.splash || 0, heavy: !!W.heavy });
    } else if (W.shot === 'intercept') {
      this.addShot('missile', mz, { target: e, speed: 12, dmg: st.dmg, tw, pierce: true, splash: 0, small: true });
    } else if (W.shot === 'rockets') {
      for (let i = 0; i < W.salvo; i++) {
        const off = V((Math.random() - 0.5) * 2.2, 0, (Math.random() - 0.5) * 2.2);
        this.timers.push({ t: i * 0.12, fn: () => this.addShot('rocket', mz, { to: tp.clone().setY(0).add(off), speed: 11, arc: 3, dmg: st.dmg, splash: W.splash, tw }) });
      }
    }
  }

  addShot(kind, from, o) {
    const s = Object.assign({ kind, done: false, t: 0, from: from.clone(), pos: from.clone() }, o);
    s.mesh = new THREE.Mesh(kind === 'shell' ? G.shell : G.rocket, kind === 'shell' ? (this.shellM || (this.shellM = mat(0xffe08a, { emissive: 0xff9a00 }))) : (this.rocketM || (this.rocketM = mat(0xdfe3e6))));
    if (o.small) s.mesh.scale.setScalar(0.7);
    if (o.heavy) s.mesh.scale.setScalar(2.2);
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
      if (k >= 1) { s.done = true; this.fxGroup.remove(s.mesh); this.explode(s.to, s.splash, s.dmg, s.tw); return; }
    }
    s.mesh.position.copy(s.pos);
    if (s.kind !== 'shell') {
      const d = s.pos.clone().sub(prev);
      if (d.lengthSq() > 0) s.mesh.quaternion.setFromUnitVectors(V(0, 1, 0), d.normalize());
      this.vfx.trail(s.pos, prev, !!s.heavy, dt);
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
    if (e.E.boss) { this.app.shake(0.5); this.ui().toast('보스 "티탄" 격파!', '#7FE0A8'); }
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
  flyJet(target) {
    const jet = new THREE.Group();
    const b = new THREE.Mesh(new THREE.ConeGeometry(0.22, 1.5, 6), mat(0x8a9097)); b.rotation.z = -Math.PI / 2; jet.add(b);
    const w = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.04, 1.5), mat(0x7a8087)); w.position.x = -0.15; jet.add(w);
    const t = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.34, 0.04), mat(0x7a8087)); t.position.set(-0.6, 0.16, 0); jet.add(t);
    const from = target.clone().add(V(-18, 6, 9)), to = target.clone().add(V(18, 6, -9));
    jet.position.copy(from); jet.lookAt(to); jet.rotateY(-Math.PI / 2);
    jet.traverse((o) => { if (o.material) o.material.shared = true; });
    this.pushFx(jet, 1.8, (o, k) => { o.position.copy(from).lerp(to, k); });
  }
}
