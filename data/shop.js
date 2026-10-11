// 상점 (과금). 2026-10-10 총평 문서의 상품표를 따름. 구매는 전투 밖(홈·전투지역 화면)에서만
//   price: 원(KRW). give: 받는 것 { medals 훈장, tickets 모집권, monthly 월정액 일수, noAds 광고 제거 }
//   once: 계정당 1번만 / soon: 아직 준비 중(버튼 막힘)
//   testMode: true 이면 실제 결제 없이 바로 지급 (Google Play·Steam 결제 연결 전 테스트용). 출시 빌드에서는 false
window.GF = window.GF || {};

GF.SHOP = {
  testMode: true,
  items: [
    { id: 'starter', name: '신병 보급팩', price: 1200, give: { medals: 300, tickets: 1 }, once: true, tag: '1회 한정', desc: '훈장 300 + 모집권 1장' },
    { id: 'noads', name: '광고 제거', price: 4900, give: { noAds: true }, once: true, desc: '강제 광고 영구 제거 + 보상형 광고 보상 자동 수령' },
    { id: 'monthly', name: '월정액 보급', price: 5500, give: { monthly: 30 }, desc: '30일 동안 매일 훈장 60 (총 1,800)' },
    { id: 'pass', name: '작전 패스 (4주)', price: 9900, give: {}, soon: true, desc: '30단계 보상: 훈장 1,500 · 모집권 10 · 시즌 스킨' },
    { id: 'skin', name: '도시 테마 스킨 세트', price: 3300, give: {}, soon: true, desc: '무기 색·효과 외관 (능력치 변화 없음)' }
  ],
  // 훈장 묶음
  medals: [
    { id: 'm120', price: 1200, amount: 120 },
    { id: 'm650', price: 5900, amount: 650 },
    { id: 'm1400', price: 12000, amount: 1400, tag: '인기' },
    { id: 'm4000', price: 33000, amount: 4000 },
    { id: 'm7500', price: 59000, amount: 7500, tag: '최고 혜택' }
  ]
};
