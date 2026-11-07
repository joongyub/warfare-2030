// 실행: node tools/home_render/run.js [--preview 출력폴더]
//   3D 장면을 헤드리스 크롬으로 그려 img/home_bg_public.jpg · img/portrait_leader.png 로 저장
//   구도를 바꾸려면 아래 BG·PORTRAIT 값(카메라 위치 cam, 바라보는 곳 look, 총통 위치 lx/lz 등)을 고치고 다시 실행
const path = require('path'), fs = require('fs');
const { chromium } = require('playwright');
const root = path.join(__dirname, '..', '..');
const BG = { cam: [-2, 4, 32], look: [14, 11, -10], fov: 34, shift: 0.2 };
const PORTRAIT = {};
(async () => {
  const out = process.argv.includes('--preview') ? process.argv[process.argv.indexOf('--preview') + 1] : path.join(root, 'img');
  const tmp = fs.mkdtempSync(path.join(require('os').tmpdir(), 'hr-'));
  require('esbuild').buildSync({ entryPoints: [path.join(__dirname, 'entry.js')], bundle: true, format: 'iife', outfile: path.join(tmp, 'r.js'), absWorkingDir: root, nodePaths: [path.join(root, 'node_modules')] });
  const data = ['settings', 'weapons', 'enemies'].map((n) => `<script src="file://${root}/data/${n}.js"></script>`).join('');
  fs.writeFileSync(path.join(tmp, 'i.html'), `<body style="margin:0">${data}<script src="r.js"></script></body>`);
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--allow-file-access-from-files'] });
  const p = await b.newPage(); p.on('console', (m) => console.log(m.text())); p.on('pageerror', (e) => console.log('ERR', e.message));
  await p.goto('file://' + path.join(tmp, 'i.html'));
  const save = (url, f) => { fs.writeFileSync(path.join(out, f), Buffer.from(url.split(',')[1], 'base64')); console.log('saved', path.join(out, f)); };
  save(await p.evaluate((o) => window.renderBg(o), BG), 'home_bg_public.jpg');
  save(await p.evaluate((o) => window.renderPortrait(o), PORTRAIT), 'portrait_leader.png');
  await b.close();
})();
