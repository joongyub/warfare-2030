// 앱 저장 도우미(서비스 워커): 한 번 열면 게임 파일을 휴대폰에 저장 → 다음부터 인터넷 없이도 실행
// 게임을 고친 뒤에는 VERSION 숫자를 올려야 새 파일로 바뀜
const VERSION = 'w2030-v0.13.0';
const FILES = [
  './', './index.html', './manifest.webmanifest', './dist/game.js',
  './data/settings.js', './data/weapons.js', './data/enemies.js', './data/cards.js', './data/shop.js', './data/stages/seoul.js',
  './icons/icon-192.png', './icons/icon-512.png', './icons/icon-180.png'
];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(VERSION).then((c) => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
// 인터넷이 되면 새 파일, 안 되면 저장된 파일
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request).then((r) => {
    if (r.ok && new URL(e.request.url).origin === location.origin) { const cp = r.clone(); caches.open(VERSION).then((c) => c.put(e.request, cp)); }
    return r;
  }).catch(() => caches.match(e.request, { ignoreSearch: true })));
});
