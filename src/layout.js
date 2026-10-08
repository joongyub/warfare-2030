// 화면 배치: 기본은 어떤 기기든 가로 16:9 상자 안에서 게임 (남는 곳은 검은 띠)
// 휴대폰(터치 + 작은 화면)은 정보창을 1280x720 기준으로 만들어 버튼·글자를 1.5배 크게
// 폴드 모드(설정 GF.SETTINGS.foldScreen): 갤럭시 폴드7·폴드8 울트라를 펼친 넓적한 화면을 여백 없이 꽉 채움
export const isTouch = () => (navigator.maxTouchPoints || 0) > 0 || 'ontouchstart' in window;

// 실제로 보이는 화면 크기: 휴대폰 브라우저는 주소창·도구막대 때문에 innerHeight 가 실제보다 클 때가 있어 visualViewport 를 씀
// 아이폰 가로 화면의 노치(안전 영역)도 뺌
let probe = null;
function safeArea() {
  if (!probe) {
    probe = document.createElement('div');
    probe.style.cssText = 'position:fixed;left:0;top:0;width:0;height:0;visibility:hidden;pointer-events:none;padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)';
    document.body.appendChild(probe);
  }
  const s = getComputedStyle(probe), n = (v) => parseFloat(v) || 0;
  return { t: n(s.paddingTop), r: n(s.paddingRight), b: n(s.paddingBottom), l: n(s.paddingLeft) };
}
export function viewSize() {
  const vv = window.visualViewport;
  const W = vv ? Math.min(window.innerWidth, vv.width) : window.innerWidth, H = vv ? Math.min(window.innerHeight, vv.height) : window.innerHeight;
  const sa = isTouch() ? safeArea() : { t: 0, r: 0, b: 0, l: 0 };
  return { ox: (vv ? vv.offsetLeft : 0) + sa.l, oy: (vv ? vv.offsetTop : 0) + sa.t, iw: W - sa.l - sa.r, ih: H - sa.t - sa.b, W, H };
}
// 펼친 폴드처럼 거의 정사각형인 터치 화면 (가로/세로 0.8~1.5)
export const looksFolded = () => { const { iw, ih } = viewSize(); const a = iw / ih; return isTouch() && a > 0.8 && a < 1.5 && Math.min(iw, ih) > 520; };

export function layout() {
  const { ox, oy, iw, ih } = viewSize();
  const fold = !!GF.SETTINGS.foldScreen && isTouch() && iw / ih < 1.6;   // 접었을 때(긴 바깥 화면)는 보통 16:9 로
  if (fold) {
    // 화면 전체 사용. 정보창은 가로 1280 기준(큰 버튼), 세로는 화면 비율만큼 늘림
    const bw = 1280, bh = Math.round(bw * ih / iw);
    const base = { w: bw, h: bh, top: 58, bottom: bh - 122 };
    return { x: Math.round(ox), y: Math.round(oy), w: Math.round(iw), h: Math.round(ih), portrait: ih > iw * 1.3, mobile: true, fold, base, k: iw / bw };
  }
  const w = Math.min(iw, ih * 16 / 9), h = w * 9 / 16;
  const mobile = isTouch() && h < 620;
  // base: 정보창 기준 크기 / top·bottom: 그 기준에서 전투 화면이 보이는 위·아래 (정보줄과 카드 줄 사이)
  const base = mobile ? { w: 1280, h: 720, top: 58, bottom: 720 - 122 } : { w: 1920, h: 1080, top: 84, bottom: 1080 - 180 };
  return { x: Math.round(ox + (iw - w) / 2), y: Math.round(oy + (ih - h) / 2), w: Math.floor(w), h: Math.floor(h), portrait: ih > iw, mobile, fold: false, base, k: Math.floor(w) / base.w };
}
