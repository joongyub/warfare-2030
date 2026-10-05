// 화면 배치: 어떤 기기든 가로 16:9 상자 안에서 게임 (남는 곳은 검은 띠)
// 휴대폰(터치 + 작은 화면)은 정보창을 1280x720 기준으로 만들어 버튼·글자를 1.5배 크게
export const isTouch = () => (navigator.maxTouchPoints || 0) > 0 || 'ontouchstart' in window;

export function layout() {
  const iw = window.innerWidth, ih = window.innerHeight;
  const w = Math.min(iw, ih * 16 / 9), h = w * 9 / 16;
  const mobile = isTouch() && h < 620;
  // base: 정보창 기준 크기 / top·bottom: 그 기준에서 전투 화면이 보이는 위·아래 (정보줄과 카드 줄 사이)
  const base = mobile ? { w: 1280, h: 720, top: 58, bottom: 720 - 122 } : { w: 1920, h: 1080, top: 84, bottom: 1080 - 180 };
  return { x: Math.round((iw - w) / 2), y: Math.round((ih - h) / 2), w: Math.round(w), h: Math.round(h), portrait: ih > iw, mobile, base, k: w / base.w };
}
