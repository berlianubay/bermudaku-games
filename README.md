# Bermudaku Games

Rak game kecil dari Bermuda Lentera. Semua game jalan langsung di peramban, tanpa unduh dan tanpa akun.

Tata letak portal mengikuti [Zounoashi Games](https://www.zounoashi.com) (bilah atas, pencarian, kategori,
kisi kartu, halaman main dengan game dalam bingkai). Kode, merek, gambar, teks, dan gamenya milik sendiri.
Arah desain ada di [DESIGN.md](DESIGN.md).

## Isi

| Game | Folder |
|---|---|
| Es Krim Putar | `public/games/es-krim-putar/` |
| Batas Rimba | `public/games/batas-rimba/` |

## Struktur

```
public/                 yang dilayani Cloudflare
  index.html            kerangka portal
  404.html              halaman alamat tidak ada
  _headers              header keamanan dan cache
  assets/app.js         rute (#/, #/game/<id>, #/tentang), filter, laci menu, bahasa, tema
  assets/games.js       daftar game
  assets/style.css
  games/<id>/index.html game
  games/<id>/thumb.png  gambar kartu 480x480
scripts/
  layani.mjs            server pratinjau lokal
  bungkus-game.mjs      mengubah game berformat Artifact Claude menjadi halaman utuh
wrangler.jsonc          konfigurasi Worker aset statis
```

## Jalankan di komputer

```bash
node scripts/layani.mjs 8800
```

Buka http://127.0.0.1:8800.

## Menambah game

1. Taruh game di `public/games/<id>/index.html`. Kalau game dibuat sebagai Artifact Claude (tanpa `<!doctype>`), bungkus dulu:
   `node scripts/bungkus-game.mjs <berkas-sumber.html> <id>`
2. Simpan gambar kartu persegi 480x480 di `public/games/<id>/thumb.png`.
3. Tambahkan entri di `public/assets/games.js` (judul, tanggal rilis, kategori, deskripsi ID dan EN).

## Deploy ke Cloudflare

```bash
npx wrangler@4 login
npx wrangler@4 deploy
```

Situs tayang di https://games.bmdku.com. Domain kustom diatur di `routes` pada `wrangler.jsonc`
(zonanya harus ada di akun Cloudflare yang sama); karena itu alamat bawaan workers.dev ikut mati.

© 2026 Bermuda Lentera
