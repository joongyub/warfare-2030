// 파일 하나짜리 게임 만들기: index.html + data/*.js + dist/game.js 를 한 HTML 안에 넣음
// 실행: node tools/build_single.js  →  2030Warfare1.html
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
let html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
html = html.replace(/<script src="([^"]+)"><\/script>/g, (m, src) => {
  const code = fs.readFileSync(path.join(root, src), 'utf8').replace(/<\/script/gi, '<\\/script');
  return `<script>/* ${src} */\n${code}\n</script>`;
});
const icon = 'data:image/png;base64,' + fs.readFileSync(path.join(root, 'icons/icon-192.png')).toString('base64');
html = html.replace(/<link rel="manifest"[^>]*>\n?/, '').replace(/href="icons\/icon-1(92|80)\.png"/g, `href="${icon}"`);
// 홈 배경 그림도 파일 안에 넣음
const bgPath = path.join(root, 'img/home_bg.jpg');
if (fs.existsSync(bgPath)) html = html.split("'img/home_bg.jpg'").join(`'data:image/jpeg;base64,${fs.readFileSync(bgPath).toString('base64')}'`);
fs.writeFileSync(path.join(root, '2030Warfare1.html'), html);
console.log('2030Warfare1.html', Math.round(html.length / 1024) + 'KB');
