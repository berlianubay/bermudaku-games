# Bermudaku Games: arah desain

> Arah dari pemilik (4 November 2026): "cek halaman https://www.zounoashi.com dan buat duplikasinya".
> Zounoashi Games adalah portal game milik TomozoP. Yang diikuti hanya tata letak dan perilakunya:
> bilah atas dengan menu, pencarian, kategori, urutan, kisi kartu bergambar, halaman main dengan
> game dalam bingkai, laci menu, dan pilihan bahasa. Logo, nama, gambar, teks, dan game mereka
> tidak disalin. Isinya game Bermuda Lentera sendiri.

## Identitas

Rak game kecil dari Bermuda Lentera (bermudaku.com). Semua game jalan di peramban, tanpa unduh dan tanpa akun.
Lambang memakai tanda Bermudaku yang sudah ada: matahari emas yang terbenam di garis laut pada ubin navy
(sama dengan favicon bermudaku.com). Tidak ada logo baru.

## Palet

| Peran | Terang | Gelap |
|---|---|---|
| Latar | `#FBF8F1` krem kertas | `#0C1B2F` navy malam |
| Kartu | `#FFFFFF` | `#13263F` |
| Tinta | `#0F2A4A` navy Bermudaku | `#F2ECDF` krem |
| Tinta pendamping | `#4B5D75` | `#AEBBCD` |
| Aksen tunggal | `#C2A158` emas Bermudaku | `#D4B46A` |

Emas hanya muncul di dua tempat: tanda matahari pada lambang, dan bayangan kartu saat kartu disorot
atau difokus (saat pemain memilih game). Emas tidak dipakai untuk teks karena kontrasnya di atas krem cuma ~2,3:1.

## Tipografi

- Antarmuka: **Onest**, huruf bermudaku.com, supaya portal terasa satu keluarga dengan situs induknya.
- Suara game (tagar, tahun, jumlah game, judul game di bilah atas): **DotGothic16**. Huruf piksel ini
  memberi tanda "ini tempat main", mengikuti pasangan huruf polos + huruf piksel di rujukan.

## Tata letak

Mengikuti rujukan: bilah atas lengket (menu kiri, lambang tengah, bahasa kanan), lalu deret kontrol
(cari, kategori, jumlah, urutan), lalu kisi kartu persegi yang dirata tengah. Kartu bergaris tinta 2px,
sudut 10px, bayangan keras 3px. Di HP kisi dua kolom (rujukan tiga kolom karena gamenya 61; di sini gamenya
sedikit sehingga gambar dibuat lebih besar). Halaman main: bingkai game mengisi sisa layar, dengan bilah
bawah berisi "Semua game" dan "Buka penuh".

Dial: ENERGY 2 / RHYTHM 1 / MOTION 1

RHYTHM 1 disengaja: ini katalog, kartu seragam membuat gambar game yang jadi pembeda.
MOTION 1: hanya keadaan sorot, laci menu yang bergeser, dan matahari yang naik-turun saat game dimuat
(berhenti bila `prefers-reduced-motion`).
