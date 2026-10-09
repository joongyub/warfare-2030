// 게임 전체 설정 (메모장으로 고쳐도 됩니다)
window.GF = window.GF || {};

GF.SETTINGS = {
  version: '0.48.0 (베타 · 12개 도시)',
  // true: 실제 무기 이름 (K9 썬더, 재블린 …) / false: 살짝 바꾼 이름 (K9-X 썬더, 재블런스 …)
  // 출시 직전 상표 검토 후 결정 (문서 10번 2장 참고)
  useRealWeaponNames: true,
  // 구글 로그인한 사람만: 웨이브의 적을 모두 물리칠 때마다 자동 저장
  autoSave: true,
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
  graphics: 'ultra',        // 그래픽 품질 기본 = 최고 (2026-10-08 사용자 요청). 'auto'(느리면 자동으로 낮춤) / 'ultra' / 'high' / 'medium' / 'low'. 사용자가 바꾸면 gf_prefs 에 기억
  foldScreen: null,         // 폴드7·폴드8 울트라 펼친 화면 꽉 채우기 (null = 처음 열 때 펼친 폴드처럼 보이면 자동으로 켬). 설정에서 체크
  lockStages: true,         // 도시 잠금: 서울부터 순서대로 방어완료해야 다음 도시가 열림 (false 면 모두 열림)
  difficulty: 'easy',       // 난이도 기본값 (전투지역 화면에서 고름, gf_prefs 에 기억)
  comboWindow: 2.5,         // 이 시간(초) 안에 연속으로 처치하면 연쇄 격파 보너스
  homeBg: 'img/home_bg.jpg',
  // 전투 시작 자막 (3초). {name} 지휘관 이름, {city} 도시 이름, {ga} 받침에 맞춰 이/가
  introLine: '{name}님! {city}{ga} 빨갱이새끼들한테 다 넘어갈지경입니다. 방어해주세요!', // 홈 화면 배경 그림 (지우면 3D 전장이 보임)
  // 구글 로그인 저장 (Firebase 웹 앱 설정). null 이면 이 기기에만 저장
  // 안내서: tower-defense/06_구글로그인_저장_설정가이드.md
  firebase: {
    apiKey: 'AIzaSyDjZ1cJFXwQHd14G1a8Fhxfe-1KiFwrN2U',
    authDomain: 'warfare-2030.firebaseapp.com',
    projectId: 'warfare-2030',
    storageBucket: 'warfare-2030.firebasestorage.app',
    messagingSenderId: '257635768085',
    appId: '1:257635768085:web:f33d48119ebc338947bb1c'
  }
};

// 난이도: hp = 적 체력 배수, cnt = 웨이브 적 수 배수(보스 제외)
GF.DIFF = {
  // v0.37.0 사용자 요청 '너무 쉬움' → 세 단계 모두 적 체력·수를 올림 (예전: 쉬움 1·1 / 보통 1.5·1.5 / 어려움 2·2)
  // v0.42.0 사용자 요청 '정확히 1.5배' → 적 체력을 세 단계 모두 1.5배 (v0.41: 1.35 / 2.1 / 3, 적 수는 그대로)
  easy:   { name: '쉬움',   hp: 2.025, cnt: 1.2 },
  normal: { name: '보통',   hp: 3.15,  cnt: 1.7 },
  hard:   { name: '어려움', hp: 4.5,   cnt: 2.2 }
};
GF.NO_EASY_FROM = 5;   // 사용자 요청: 스테이지 5부터는 쉬움 없이 보통·어려움만
// 이 스테이지에서 고를 수 있는 난이도 / 실제로 쓸 난이도 (쉬움을 골라 뒀어도 5스테이지부터는 보통)
GF.diffsFor = (S) => Object.keys(GF.DIFF).filter((k) => !(k === 'easy' && S && S.no >= GF.NO_EASY_FROM));
GF.diffFor = (S, want) => { const ok = GF.diffsFor(S); return ok.includes(want) ? want : ok[0]; };
// 사용자가 바꾼 설정(그래픽·난이도·효과음 등)은 이 기기에 기억
GF.PREF_KEYS = ['graphics', 'difficulty', 'foldScreen', 'sound', 'shadows', 'showLandmarkLabels', 'useRealWeaponNames'];
try { Object.assign(GF.SETTINGS, JSON.parse(localStorage.getItem('gf_prefs') || '{}')); } catch (e) { /* 저장 불가 환경 */ }
GF.savePrefs = () => { try { const o = {}; GF.PREF_KEYS.forEach((k) => { o[k] = GF.SETTINGS[k]; }); localStorage.setItem('gf_prefs', JSON.stringify(o)); } catch (e) { /* 저장 불가 환경 */ } };
