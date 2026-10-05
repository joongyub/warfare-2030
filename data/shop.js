// 보급 상점 (과금). 보급창 = 계정에 쌓아 두는 보급. 전투 중 꺼내 쓸 수 있음
//   price: 원(KRW) / amount: 받는 보급 / bonus: 표시용 보너스 문구
//   testMode: true 이면 실제 결제 없이 바로 지급 (Google Play·Steam 결제 연결 전 테스트용)
window.GF = window.GF || {};

GF.SHOP = {
  testMode: true,
  packs: [
    { id: 'p3000',  price: 3000,  amount: 1000,  bonus: '' },
    { id: 'p7000',  price: 7000,  amount: 2500,  bonus: '+7%' },
    { id: 'p10000', price: 10000, amount: 3800,  bonus: '+14%', tag: '인기' },
    { id: 'p20000', price: 20000, amount: 8000,  bonus: '+20%' },
    { id: 'p30000', price: 30000, amount: 12500, bonus: '+25%', tag: '최고 혜택' }
  ],
  // 전투 중 보급창 → 전투 보급으로 한 번에 옮기는 양
  withdrawSteps: [300, 1000]
};
