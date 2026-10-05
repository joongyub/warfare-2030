// 적(아케론 연방군, 붉은 도색). speed: 1초에 움직이는 거리 / armor 0.4면 피해 40% 감소 / leak 기지에 닿으면 깎는 체력
// air: 공중 유닛(한강 위에서 나타나 공원 위를 지그재그로 비행) / gap: 다음 적이 나오기까지 초
window.GF = window.GF || {};

GF.ENEMIES = {
  inf:   { name: '아케론 보병',     hp: 38,   speed: 1.8, armor: 0,   reward: 3,   leak: 1,  gap: 0.22 },
  apc:   { name: '차륜 장갑차',     hp: 90,   speed: 2.6, armor: 0.1, reward: 5,   leak: 1,  gap: 0.4 },
  tank:  { name: '주력 전차',       hp: 420,  speed: 1.6, armor: 0.4, reward: 18,  leak: 2,  gap: 1.0 },
  drone: { name: '자폭 드론',       hp: 34,   speed: 3.0, armor: 0,   reward: 4,   leak: 1,  gap: 0.28, air: true },
  heli:  { name: '공격 헬기',       hp: 320,  speed: 2.0, armor: 0.2, reward: 20,  leak: 2,  gap: 1.8,  air: true },
  boss:  { name: '중전차 "티탄"',   hp: 4200, speed: 1.0, armor: 0.5, reward: 300, leak: 12, gap: 2,    boss: true }
};
