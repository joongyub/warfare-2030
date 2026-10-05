// 작전 카드 (클래시 로얄식: 지휘 포인트 CP로 사용, 손에 3장, 쓰면 맨 뒤로)
//   radius 효과 반경
window.GF = window.GF || {};

GF.CARDS = {
  airstrike: { name: '공습',      cost: 4, target: true,  radius: 4,   power: 260, desc: '지상 적 범위 피해 260' },
  supply:    { name: '긴급 보급', cost: 3, target: false,              power: 150, desc: '보급 +150' },
  emp:       { name: 'EMP 충격',  cost: 3, target: true,  radius: 4.5, power: 3,   desc: '범위 안 적 3초 정지' },
  barrage:   { name: '일제 포격', cost: 5, target: true,  radius: 4.2, power: 120, desc: '포탄 12발 낙하' },
  smoke:     { name: '연막탄',    cost: 2, target: true,  radius: 4,   power: 8,   desc: '8초간 적 속도 -50%' }
};
GF.CARD_DECK = ['airstrike', 'supply', 'emp', 'barrage', 'smoke'];
GF.HAND_SIZE = 3;

// 전략 무기 (작전 카드 옆 특수 슬롯). CP가 아니라 "충전 횟수"로 사용
//   unlockStage: 이 스테이지부터 사용 가능 (베타: 서울에서 둘 다 체험. 정식: ICBM 3, 전략핵 10 권장)
//   every: 이 웨이브마다 1발 재보급(리스폰) / max: 최대 보유 / start: 시작 보유
//   radius 피해 반경 / power 피해 (지상·공중 모두)
GF.STRATEGIC = {
  icbm: { name: 'ICBM', key: 'Z', unlockStage: 1, every: 5,  max: 1, start: 0, radius: 6.5, power: 2200, desc: '대륙간 탄도미사일. 넓은 범위 초토화' },
  nuke: { name: '전략핵미사일', key: 'X', unlockStage: 1, every: 10, max: 1, start: 0, radius: 15, power: 9000, desc: '화면 대부분을 쓸어버리는 최후의 수단' }
};
