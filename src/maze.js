// 길 만들기 스테이지 (부산): 전투 구역 전체가 바둑판 칸. 무기가 놓인 칸은 벽이 되고,
// 지상 적은 빈 칸을 따라 지휘부까지 가장 짧은 길로 간다 (8방향, 모서리 끼어 지나가기 없음)
// stage.maze = { cell } · 입구 칸 = 본 도로(진입로) 끝, 목표 칸 = 지휘부
const SQ2 = Math.SQRT2;

export class Maze {
  constructor(S, city) {
    const b = S.bounds, C = S.maze.cell || 2;
    this.S = S; this.city = city; this.C = C;
    this.x0 = b.x0; this.z0 = b.z0;
    this.nx = Math.round((b.x1 - b.x0) / C); this.nz = Math.round((b.z1 - b.z0) / C);
    const N = this.nx * this.nz;
    this.wall = new Uint8Array(N);       // 랜드마크 칸 (못 지나감·못 놓음)
    this.noPut = new Uint8Array(N);      // 지나갈 수는 있지만 무기는 못 놓는 칸 (입구·지휘부 둘레)
    this.tower = new Uint8Array(N);      // 무기가 놓인 칸
    this.dist = new Float64Array(N);
    const end = S.route[0].pts[S.route[0].pts.length - 1];
    this.entry = this.cellOf(end[0], end[1]);
    this.goal = this.cellOf(S.base[0], S.base[1]);
    for (let j = 0; j < this.nz; j++) for (let i = 0; i < this.nx; i++) {
      const k = j * this.nx + i, [x, z] = this.center(k);
      for (const L of S.blockers) if (Math.abs(x - L.x) < L.w / 2 + C / 2 - 0.01 && Math.abs(z - L.z) < L.d / 2 + C / 2 - 0.01) this.wall[k] = 1;
      if (Math.hypot(x - S.base[0], z - S.base[1]) < 2.3 || Math.hypot(x - end[0], z - end[1]) < 0.1) this.noPut[k] = 1;
    }
    this.sig = '';
    this.solve();
  }
  idx(i, j) { return j * this.nx + i; }
  cellOf(x, z) {
    const i = Math.floor((x - this.x0) / this.C), j = Math.floor((z - this.z0) / this.C);
    return i < 0 || j < 0 || i >= this.nx || j >= this.nz ? -1 : this.idx(i, j);
  }
  center(k) { const i = k % this.nx, j = (k - i) / this.nx; return [this.x0 + (i + 0.5) * this.C, this.z0 + (j + 0.5) * this.C]; }
  open(k, extra) { return !this.wall[k] && !this.tower[k] && k !== extra; }

  // 이웃 칸 (8방향). 대각선은 양옆 두 칸이 모두 비어 있어야 함
  each(k, extra, fn) {
    const i = k % this.nx, j = (k - i) / this.nx;
    for (let dj = -1; dj <= 1; dj++) for (let di = -1; di <= 1; di++) {
      if (!di && !dj) continue;
      const a = i + di, c = j + dj;
      if (a < 0 || c < 0 || a >= this.nx || c >= this.nz) continue;
      const n = this.idx(a, c);
      if (!this.open(n, extra)) continue;
      if (di && dj && (!this.open(this.idx(i + di, j), extra) || !this.open(this.idx(i, j + dj), extra))) continue;
      fn(n, di && dj ? SQ2 : 1);
    }
  }
  // 지휘부 칸에서 거꾸로 퍼지는 거리 (Dijkstra). extra = 막아 보는 칸
  field(extra = -1, out = new Float64Array(this.dist.length)) {
    out.fill(Infinity);
    out[this.goal] = 0;
    const heap = [[0, this.goal]];
    const push = (e) => { heap.push(e); let i = heap.length - 1; while (i) { const p = (i - 1) >> 1; if (heap[p][0] <= heap[i][0]) break; [heap[p], heap[i]] = [heap[i], heap[p]]; i = p; } };
    const pop = () => { const top = heap[0], last = heap.pop(); if (heap.length) { heap[0] = last; let i = 0; for (;;) { const l = 2 * i + 1, r = l + 1; let m = i; if (l < heap.length && heap[l][0] < heap[m][0]) m = l; if (r < heap.length && heap[r][0] < heap[m][0]) m = r; if (m === i) break; [heap[m], heap[i]] = [heap[i], heap[m]]; i = m; } } return top; };
    while (heap.length) {
      const [d, k] = pop();
      if (d > out[k]) continue;
      this.each(k, extra, (n, w) => { if (d + w < out[n]) { out[n] = d + w; push([d + w, n]); } });
    }
    return out;
  }
  solve() { this.field(-1, this.dist); this.path = this.pathFrom(this.entry); }

  // 무기 칸이 바뀌었으면 다시 계산 (판매·조합·미사일 등 모두 여기서 잡힘). 바뀌었으면 true
  sync(towers) {
    const ks = towers.map((t) => this.cellOf(t.pos.x, t.pos.z)).filter((k) => k >= 0).sort((a, b) => a - b), sig = ks.join(',');
    if (sig === this.sig) return false;
    this.sig = sig; this.tower.fill(0); for (const k of ks) this.tower[k] = 1;
    this.solve();
    return true;
  }
  // 가장 가까운 다음 칸 (거리가 가장 줄어드는 이웃, 같으면 지금 방향을 이어감)
  next(k, prev = -1, dist = this.dist, extra = -1) {
    let best = -1, bd = dist[k], bs = -1;
    this.each(k, extra, (n, w) => {
      const d = dist[n] + w * 1e-3;
      const straight = prev >= 0 && n - k === k - prev ? 1 : 0;
      if (d < bd - 1e-6 || (Math.abs(d - bd) < 1e-6 && straight > bs)) { bd = d; best = n; bs = straight; }
    });
    return best;
  }
  pathFrom(k, dist = this.dist, extra = -1) {
    const out = [k];
    for (let g = 0; g < dist.length && k >= 0 && k !== this.goal; g++) { const n = this.next(k, out[out.length - 2] ?? -1, dist, extra); if (n < 0) break; out.push(n); k = n; }
    return out;
  }
  // 이 칸에 무기를 놓으면 바뀔 길 (미리 보기)
  preview(k) { return this.pathFrom(this.entry, this.field(k), k); }

  // 무기를 놓을 수 없으면 이유를. busy = 지상 적이 서 있거나 향하는 칸들, from = 지상 적이 있는 칸들 (길이 끊기면 안 됨)
  reason(k, busy, from) {
    if (k < 0) return '작전 구역 밖';
    if (this.wall[k]) return '랜드마크 칸 배치 불가';
    if (this.tower[k]) return '이미 무기가 있는 칸';
    if (k === this.entry) return '적 입구 칸 배치 불가';
    if (this.noPut[k]) return '지휘부 칸 배치 불가';
    if (busy.has(k)) return '적이 지나가는 칸';
    const f = this.field(k);
    if (!isFinite(f[this.entry])) return '길을 완전히 막을 수 없어요 (적이 지나갈 길이 하나는 있어야 해요)';
    for (const c of from) if (!isFinite(f[c])) return '적이 갇히게 돼요 (길을 완전히 막을 수 없음)';
    return null;
  }
}
