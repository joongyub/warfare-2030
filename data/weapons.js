// 무기(타워) 데이터. 거리 단위: 도로 폭 ≈ 2
//   name: 실제 이름 / altName: 살짝 바꾼 이름 (게임 안 설정 ⚙ 에서 바꿀 수 있음)
//   cost 가격 / range 사거리 / dmg 1발 피해 / rate 1초에 쏘는 횟수
//   hits: 'ground' 지상, 'air' 공중 / shot: bullet 기관총, cannon 직사포, shell 포탄, missile 유도탄, intercept 요격탄, rockets 다연장, aura 주변 효과
//   splash 폭발 반경 / pierce 장갑 무시 / slow 감속 비율 / airDps 드론 교란 초당 피해
window.GF = window.GF || {};

GF.WEAPONS = {
  browning: { name: 'M2 브라우닝', altName: 'B-50 브로닝', nation: '미국', role: '연사 · 지상+공중', rarity: '일반',
    cost: 70, range: 4.4, dmg: 7, rate: 6, hits: ['ground', 'air'], shot: 'bullet', desc: '12.7mm 중기관총. 싸고 빠름, 지상·공중 모두' },
  k9: { name: 'K9 자주포', altName: 'K9-X 썬더', nation: '한국', role: '넓은 범위 포격', rarity: '희귀',
    cost: 120, range: 9, dmg: 50, rate: 0.5, hits: ['ground'], shot: 'shell', splash: 1.9, desc: '155mm 자주포. 줄지어 오는 행렬에 포탄 비' },
  type16: { name: '16식 기동전투차', altName: '16-MCV 기동포', nation: '일본', role: '빠른 직사', rarity: '희귀',
    cost: 160, range: 6.2, dmg: 44, rate: 1.4, hits: ['ground'], shot: 'cannon', splash: 0.9, desc: '105mm 차륜형 전차포. 빠르게 연속 직사' },
  patriot: { name: '패트리엇', altName: '페이트리어트', nation: '미국', role: '장거리 대공', rarity: '영웅',
    cost: 180, range: 12, dmg: 160, rate: 0.45, hits: ['air'], shot: 'missile', splash: 1.4, desc: 'MIM-104 지대공 미사일. 헬기 격추, 드론 무리 폭파' },
  irondome: { name: '아이언돔', altName: '아이언쉴드', nation: '이스라엘', role: '드론 떼 요격', rarity: '희귀',
    cost: 140, range: 7.5, dmg: 34, rate: 3, hits: ['air'], shot: 'intercept', desc: '요격탄 연속 발사. 드론 떼 전문' },
  ewcar: { name: '전자전 차량', altName: 'EW 교란 차량', nation: '한국', role: '감속 + 드론 교란', rarity: '희귀',
    cost: 100, range: 4.6, dmg: 0, rate: 1, hits: ['ground', 'air'], shot: 'aura', slow: 0.4, airDps: 12, desc: '범위 안 적 속도 -40%, 드론은 초당 12 피해' },
  javelin: { name: '재블린', altName: '재블런스', nation: '미국', role: '장갑 무시 대전차', rarity: '희귀',
    cost: 150, range: 6.8, dmg: 150, rate: 0.5, hits: ['ground'], shot: 'missile', pierce: true, desc: 'FGM-148 대전차 유도탄. 전차 장갑 무시' },
  himars: { name: '하이마스', altName: '하이마크스', nation: '미국', role: '광역 로켓 일제 사격', rarity: '영웅',
    cost: 260, range: 10.5, dmg: 48, rate: 0.25, hits: ['ground'], shot: 'rockets', splash: 1.6, salvo: 6, desc: 'M142 다연장 로켓. 6발 일제 사격' },
  hyunmoo: { name: '현무-3', altName: '현무-X', nation: '한국', role: '초장거리 강력 미사일', rarity: '전설',
    cost: 300, range: 13.5, dmg: 520, rate: 0.15, hits: ['ground'], shot: 'missile', splash: 2.4, heavy: true, desc: '현무-3 순항미사일. 느리지만 한 발에 전차 행렬을 날림' }
};

GF.LOADOUT = ['browning', 'k9', 'type16', 'patriot', 'irondome', 'ewcar', 'javelin', 'himars', 'hyunmoo'];

GF.wname = (id) => (GF.SETTINGS.useRealWeaponNames ? GF.WEAPONS[id].name : GF.WEAPONS[id].altName);
