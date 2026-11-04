// Server pratinjau lokal untuk folder public/, meniru aturan aset statis Cloudflare:
// folder dilayani lewat index.html-nya, alamat yang tidak ada mendapat 404.html dengan status 404.
// Pakai: node scripts/layani.mjs [port]
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { dirname, join, normalize, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const akar = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');
const port = Number(process.argv[2]) || 8800;
const JENIS = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.json': 'application/json', '.txt': 'text/plain; charset=utf-8'
};

async function cari(jalur) {
  const berkas = normalize(join(akar, decodeURIComponent(jalur)));
  if (berkas !== akar && !berkas.startsWith(akar + sep)) return null;
  try {
    const s = await stat(berkas);
    if (s.isFile()) return berkas;
    if (s.isDirectory()) {
      const idx = join(berkas, 'index.html');
      if ((await stat(idx)).isFile()) return idx;
    }
  } catch (e) { /* tidak ada */ }
  return null;
}

createServer(async (req, res) => {
  const jalur = new URL(req.url, 'http://x').pathname;
  const berkas = await cari(jalur);
  const kirim = async (f, kode) => {
    res.writeHead(kode, { 'content-type': JENIS[extname(f)] || 'application/octet-stream', 'cache-control': 'no-store' });
    res.end(await readFile(f));
  };
  if (berkas) return kirim(berkas, 200);
  return kirim(join(akar, '404.html'), 404);
}).listen(port, '127.0.0.1', () => console.log(`Bermudaku Games: http://127.0.0.1:${port}`));
