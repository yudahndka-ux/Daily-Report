// Menyalin library ke www/lib agar aplikasi bisa jalan offline, lalu membuat www/index.html
const fs = require('fs');
fs.mkdirSync('www/lib', { recursive: true });
const libs = [
  ['node_modules/exceljs/dist/exceljs.min.js', 'exceljs.min.js'],
  ['node_modules/jspdf/dist/jspdf.umd.min.js', 'jspdf.umd.min.js'],
  ['node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.min.js', 'autotable.min.js']
];
libs.forEach(([from, to]) => fs.copyFileSync(from, 'www/lib/' + to));
let html = fs.readFileSync('src/index.html', 'utf8');
html = html
  .replace(/https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/exceljs\/[^"]+/, 'lib/exceljs.min.js')
  .replace(/https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/jspdf\/[^"]+/, 'lib/jspdf.umd.min.js')
  .replace(/https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/jspdf-autotable\/[^"]+/, 'lib/autotable.min.js');
fs.writeFileSync('www/index.html', html);
console.log('www/index.html siap');
