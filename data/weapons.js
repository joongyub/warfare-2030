// 무기(타워) 데이터. 거리 단위: 도로 폭 ≈ 2
//   name: 실제 이름 / altName: 살짝 바꾼 이름 (게임 안 설정 ⚙ 에서 바꿀 수 있음)
//   cost 가격 / range 사거리 / dmg 1발 피해 / rate 1초에 쏘는 횟수
//   hits: 'ground' 지상, 'air' 공중 / shot: bullet 기관총, cannon 직사포, shell 포탄, missile 유도탄, intercept 요격탄, rockets 다연장, aura 주변 효과
//   splash 폭발 반경 / pierce 장갑 무시 / slow 감속 비율 / airDps 드론 교란 초당 피해
//   shot 추가: drone 무인기 출격(drone: fpv|tb2), laser 레이저, rail 일직선 관통 / burn 화염 지대 / buff 주변 무기 강화 / income 웨이브마다 보급 / sfx 소리
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
    cost: 300, range: 13.5, dmg: 520, rate: 0.15, hits: ['ground'], shot: 'missile', splash: 2.4, heavy: true, desc: '현무-3 순항미사일. 느리지만 한 발에 전차 행렬을 날림' },
  // ---- v0.33 추가 11종 ----
  fpv: { name: 'FPV 자폭 드론', altName: 'FPV 카미카제', nation: '우크라이나', role: '값싼 자폭 · 장갑 무시', rarity: '일반',
    cost: 90, range: 7.5, dmg: 85, rate: 0.6, hits: ['ground'], shot: 'drone', drone: 'fpv', pierce: true, sfx: 'buzz', desc: '조종병이 1인칭 드론을 날려 전차 위에서 자폭. 싸고 장갑 무시' },
  gepard: { name: '게파르트', altName: '게파드 쌍열포', nation: '독일', role: '쌍열 연사 · 공중+지상', rarity: '일반',
    cost: 110, range: 6, dmg: 9, rate: 8, hits: ['air', 'ground'], shot: 'bullet', sfx: 'gepard', desc: '35mm 쌍열 기관포. 드론 떼를 빠르게 갈아냄' },
  chungung: { name: '천궁', altName: 'K-SAM 천궁', nation: '한국', role: '중거리 대공', rarity: '희귀',
    cost: 130, range: 10, dmg: 95, rate: 0.6, hits: ['air'], shot: 'missile', splash: 1.0, desc: '한국형 중거리 지대공 미사일. 패트리엇보다 싸고 빠른 대공' },
  radar: { name: 'TPY-2 레이더', altName: 'TPY 레이더 기지', nation: '미국', role: '지원 · 주변 무기 사거리·피해 +', rarity: '희귀',
    cost: 150, range: 4.2, dmg: 0, rate: 1, hits: [], shot: 'aura', buff: { range: 0.2, dmg: 0.1 }, desc: '범위 안 아군 무기 사거리 +20%, 피해 +10% (강화하면 범위가 넓어짐)' },
  truck: { name: '보급 수송 트럭', altName: '보급 트럭', nation: '공통', role: '경제 · 웨이브마다 보급', rarity: '희귀',
    cost: 160, range: 2.5, dmg: 0, rate: 1, hits: [], shot: 'aura', income: 45, desc: '웨이브가 시작될 때마다 보급 +45 (강화하면 더 많이)' },
  caesar: { name: '카이사르 자주포', altName: '세자르 155', nation: '프랑스', role: '빠른 장거리 포격', rarity: '희귀',
    cost: 170, range: 10.5, dmg: 62, rate: 0.6, hits: ['ground'], shot: 'shell', splash: 1.6, desc: '트럭에 155mm 포를 얹은 차륜형 자주포. K9보다 멀리 자주 쏨' },
  starstreak: { name: '스타스트릭', altName: '스타스트라이크', nation: '영국', role: '초고속 대공 다트 3발', rarity: '영웅',
    cost: 210, range: 9, dmg: 55, rate: 0.75, hits: ['air'], shot: 'intercept', salvo: 3, desc: '마하 3 대공 미사일. 다트 3발이 동시에 날아가 헬기를 꿰뚫음' },
  tos: { name: 'TOS-1A', altName: 'TOS 화염 로켓', nation: '러시아', role: '화염 지대 · 지속 피해', rarity: '영웅',
    cost: 230, range: 8, dmg: 26, rate: 0.22, hits: ['ground'], shot: 'rockets', splash: 1.4, salvo: 8, burn: { dps: 22, t: 3, r: 1.3 }, desc: '열압력 로켓 8발. 떨어진 자리가 3초 동안 불타 지나가는 적을 태움' },
  tb2: { name: '바이락타르 TB2', altName: '바이락타 UAV', nation: '튀르키예', role: '무인기 출격 정밀 폭격', rarity: '영웅',
    cost: 240, range: 12, dmg: 120, rate: 0.35, hits: ['ground'], shot: 'drone', drone: 'tb2', splash: 1.3, sfx: 'buzz', desc: '활주로에서 무인기가 날아가 적 위에 정밀 유도폭탄을 떨어뜨림' },
  ironbeam: { name: '아이언빔 레이저', altName: '아이언 레이저', nation: '이스라엘', role: '레이저 연속 조사 · 공중+지상', rarity: '전설',
    cost: 280, range: 9, dmg: 16, rate: 6, hits: ['air', 'ground'], shot: 'laser', sfx: 'laser', desc: '고출력 레이저. 탄 없이 빛으로 계속 지져 드론·로켓·헬기를 녹임' },
  railgun: { name: '레일건', altName: 'EM 레일캐논', nation: '미국', role: '일직선 관통 초고속탄', rarity: '전설',
    cost: 340, range: 15, dmg: 420, rate: 0.2, hits: ['ground'], shot: 'rail', pierce: true, sfx: 'rail', desc: '전자기 레일건. 마하 7 탄이 일직선 위 모든 적을 꿰뚫음' }
};

// 하단 무기 칸: 가격 순서대로 10개씩 2줄 (같은 가격은 먼저 있던 무기 먼저)
GF.LOADOUT = Object.keys(GF.WEAPONS).map((id, i) => [id, i]).sort((a, b) => GF.WEAPONS[a[0]].cost - GF.WEAPONS[b[0]].cost || a[1] - b[1]).map((x) => x[0]);

GF.wname = (id) => (GF.SETTINGS.useRealWeaponNames ? GF.WEAPONS[id].name : GF.WEAPONS[id].altName);
