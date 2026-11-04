// Mengubah game berformat Artifact Claude (tanpa doctype, <html>, <head>, <body>) menjadi halaman utuh
// di public/games/<id>/index.html. Kerangkanya sama dengan yang dipakai penampil Artifact.
// <head> sengaja dibiarkan terbuka: <title>, <meta>, dan <style> dari game ikut masuk ke head,
// lalu elemen tampilan pertama game membuka <body> dengan sendirinya.
// Pakai: node scripts/bungkus-game.mjs <berkas-sumber.html> <id-game>
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const [sumber, id] = process.argv.slice(2);
if (!sumber || !/^[a-z0-9-]+$/.test(id || '')) {
  console.error('Pakai: node scripts/bungkus-game.mjs <berkas-sumber.html> <id-game>');
  process.exit(1);
}

const isi = await readFile(sumber, 'utf8');
if (/^\s*<!doctype/i.test(isi)) {
  console.error('Berkas ini sudah halaman utuh. Salin langsung ke public/games/' + id + '/index.html.');
  process.exit(1);
}

const kepala = '<!doctype html>\n<html lang="id">\n<head>\n<meta charset="utf-8">\n'
  + '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
  + '<link rel="icon" href="/assets/logo.svg" type="image/svg+xml">\n'
  + '<style>:root{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}'
  + 'body{margin:0;font:14px system-ui,sans-serif}img{max-width:100%}[hidden]{display:none!important}</style>\n';

const akar = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'games', id);
await mkdir(akar, { recursive: true });
await writeFile(join(akar, 'index.html'), kepala + isi.trim() + '\n</body>\n</html>\n');
console.log('Tertulis: public/games/' + id + '/index.html');
