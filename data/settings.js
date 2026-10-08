// 게임 전체 설정 (메모장으로 고쳐도 됩니다)
window.GF = window.GF || {};

GF.SETTINGS = {
  version: '0.27.0 (베타 · 10개 도시)',
  // true: 실제 무기 이름 (K9 썬더, 재블린 …) / false: 살짝 바꾼 이름 (K9-X 썬더, 재블런스 …)
  // 출시 직전 상표 검토 후 결정 (문서 10번 2장 참고)
  useRealWeaponNames: true,
  // true 로 바꾸면 실제 도시 이름 대신 가명을 보여 줌
  useCityAlias: false,
  // 지휘 포인트(CP): 전투 중 몇 초마다 1씩 차는지, 최대치, 시작값
  cpEverySec: 2.8,
  cpMax: 10,
  cpStart: 4,
  maxTowerLevel: 4,   // 무기 강화 최대 단계 (1~4)
  // 단계별 배율 (1단계 = 기본). 피해·연사 → DPS(초당 피해), 사거리
  upgrade: { dmg: [1, 1.35, 1.8, 2.4], rate: [1, 1.1, 1.2, 1.35], range: [1, 1.1, 1.2, 1.32] },
  // 영웅 강화: 최대 단계와 단계별 배율 (1~10강)
  heroMaxLevel: 10,
  heroUpgrade: { dmg: [1, 1.25, 1.5, 1.75, 2, 2.3, 2.6, 2.95, 3.3, 3.7], rate: [1, 1.04, 1.08, 1.12, 1.16, 1.2, 1.24, 1.28, 1.32, 1.36], range: [1, 1.03, 1.06, 1.09, 1.12, 1.15, 1.18, 1.21, 1.25, 1.3] },
  sellRefund: 0.7,    // 판매 시 돌려받는 비율
  showLandmarkLabels: true, // 랜드마크 이름표 (게임 안 설정에서도 바꿀 수 있음)
  sound: true,              // 효과음 켜기/끄기
  sfxVolume: 0.6,           // 효과음 크기 (0~1)
  music: false,             // 배경 음악 없음 (2026-10-07 사용자 요청으로 뺌, 효과음만)
  musicVolume: 0.35,        // 배경 음악 크기 (0~1)
  shadows: true,            // 그림자 (느린 컴퓨터는 false)
  graphics: 'auto',         // 그래픽 품질: 'auto'(PC 높음·휴대폰 보통) / 'high' / 'medium' / 'low'(느린 기기)
  comboWindow: 2.5,         // 이 시간(초) 안에 연속으로 처치하면 연쇄 격파 보너스
  homeBg: 'img/home_bg.jpg', // 홈 화면 배경 그림 (지우면 3D 전장이 보임)
  // 구글 로그인 저장 (Firebase 웹 앱 설정). null 이면 이 기기에만 저장
  // 안내서: tower-defense/06_구글로그인_저장_설정가이드.md
  firebase: null
};
