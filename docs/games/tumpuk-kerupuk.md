# Tumpuk Kerupuk: arah desain

> Arah dari pemilik (4 November 2026): game browser orisinal untuk Bermudaku Games. Tampak samping, piring di
> meja warung, capit membawa kerupuk dari atas, kerupuk ditumpuk setinggi mungkin. Nama, gambar, teks, dan kode
> dibuat sendiri; semua gambar digambar dengan Canvas 2D, tanpa berkas gambar.

## Identitas

Game kasual satu layar dengan suasana warung: dinding berlambris kayu, meja kayu, dan **piring seng** putih
berlis biru. Kerupuk diambil dengan capit seperti yang dipakai penjual untuk mengambil kerupuk dari kaleng.

Motif identitas: **lis biru piring seng**. Garis biru di bibir piring diulang di tepi lembar hasil, tepi dialog
Cara main, tombol "Tumpuk lagi", label "Jatuh di sini", dan penanda rekor di dinding. Semuanya momen penting
(aba-aba awal, kegagalan, mulai lagi, rekor); di tempat lain biru tidak dipakai.

Detail kecil yang sengaja: email piring gempil di dekat bibir, sambungan papan lambris, serat kayu meja.

## Kepribadian

Hangat dan apa adanya. Kegagalan selalu menyebut kerupuk mana yang jatuh, sebabnya, dan satu saran
("Tumpukan condong ke kanan ... taruh kerupuk berikutnya agak ke kiri"), bukan sekadar "Game over".

## Palet

| Peran | Terang (warung siang) | Gelap (warung malam) |
|---|---|---|
| Dinding / latar | `#F5EAD6` krem kapur | `#1C1611` cokelat malam |
| Lambris | `#EBDCC0` | `#241C16` |
| Tinta | `#2E2017` kopi tua | `#F4E8D6` krem |
| Tinta pendamping | `#65503F` | `#CDB89F` |
| Lembar (hasil, dialog) | `#FFFCF6` putih email | `#2A211B` |
| Aksen tunggal | `#1E4F8F` biru lis seng | `#93B8EC` biru muda |

Alasan: krem dan cokelat kopi adalah warna dinding kapur dan kayu warung; putih email dan biru diambil dari piring
seng. Biru menjadi satu-satunya aksen karena ia sudah hidup di benda utama (piring), sehingga antarmuka dan dunia
memakai bahasa yang sama. Dua tema karena portal mengisi `data-theme` dan game ini juga dimainkan malam hari di HP;
tema mengikuti `prefers-color-scheme` dan dikalahkan oleh `data-theme="light|dark"` pada `<html>`.

Warna kerupuk adalah isi dunia, bukan warna antarmuka: udang `#F3A584` (oranye merah muda), rengginang `#EFE5CD`
(putih nasi), kulit `#EBC167` (keemasan), bawang `#DCE09A` (hijau kekuningan dengan serpih daun bawang). Semua
diberi garis tinta tebal supaya terbaca di kedua tema.

### Kontras (dihitung dengan rumus WCAG lewat Node)

| Pasangan | Terang | Gelap |
|---|---|---|
| Tinta di dinding | 13,20:1 | 14,81:1 |
| Tinta pendamping di dinding (label skor, penggaris) | 6,36:1 | 9,34:1 |
| Tinta pendamping di lambris (penggaris) | 5,60:1 | 8,74:1 |
| Tinta di lembar | 15,36:1 | 13,04:1 |
| Tinta pendamping di lembar (saran) | 7,40:1 | 8,22:1 |
| Teks tombol utama, petunjuk, "Jatuh di sini" di biru | 8,17:1 | 8,05:1 |
| Label rekor biru di dinding / lambris | 6,86 / 6,04:1 | 8,79 / 8,23:1 |
| Teks "Rekor baru" biru di lembar | 7,98:1 | 7,74:1 |
| Garis tombol vs dinding / lembar (min 3:1) | 3,75 / 4,36:1 | 5,44 / 4,79:1 |
| Cincin fokus tinta vs dinding / lembar (min 3:1) | 13,20 / 15,36:1 | 14,81 / 13,04:1 |

## Tipografi

- Judul, angka skor, tombol utama: **Lilita One**. Huruf tebal padat yang mirip tulisan cat tangan di kaca gerobak
  dan papan warung; angkanya besar dan jelas untuk tinggi dalam cm.
- Teks: **Plus Jakarta Sans**, dirancang untuk identitas kota Jakarta dan nyaman untuk bahasa Indonesia; sama dengan
  keluarga app lain di D:\Claude.

## Tata letak

Satu kanvas memenuhi seluruh layar, tanpa gulir. Panel skor menindih kanvas dengan latar padat:

- HP potret (375x690): pita atas berisi judul, Cara main, jumlah kerupuk, tinggi, rekor, dan pratinjau kerupuk
  berikutnya. Sisa layar adalah meja.
- Layar lebar (lanskap, lebar minimal 700 px): kolom kiri `clamp(250px, 25vw, 320px)` berisi panel yang sama plus
  petunjuk papan ketik. Meja di kanan.
- Kamera hanya memakai area yang tidak tertutup panel. Lembar hasil muncul di bawah pada HP (pita skor
  disembunyikan) dan di kolom kiri pada layar lebar, lalu kamera memperkecil tampilan supaya piring, tumpukan,
  dan kerupuk yang jatuh terlihat bersama di sisa area.
- Seluruh layar adalah area ketuk/klik untuk melepas kerupuk, kecuali tombol, dialog, dan lembar hasil.
- Penggaris di tepi kiri area meja, penanda tinggi tumpukan (label putih dengan garis putus-putus ke kerupuk teratas),
  dan penanda rekor biru yang digambar di dinding di belakang benda.

Dial: ENERGY 2 / RHYTHM 1 / MOTION 2

RHYTHM 1 disengaja: satu layar permainan, satu fokus (tumpukan). MOTION 2 karena gerak adalah isi permainan.

## Gerak

- Inti (tidak pernah dimatikan): capit bergerak, fisika kerupuk, kamera naik mengikuti tumpukan, kamera memperkecil
  saat gagal.
- Hias (dimatikan oleh `prefers-reduced-motion`): remah kerupuk saat mendarat keras, goyangan lengan capit setelah
  melepas, guncangan layar saat kerupuk menyentuh meja, dan kerupuk baru yang muncul pelan di capit (langsung
  muncul bila gerak dikurangi).

## Aturan permainan

1. Capit bergerak bolak-balik di rel dari -18 cm sampai 18 cm (0 = tengah piring) membawa satu kerupuk.
2. Klik, ketuk, `Spasi`, `Enter`, atau `panah bawah` melepas kerupuk. Garis putus-putus di bawah capit menunjukkan
   permukaan tempat kerupuk akan mendarat. Kerupuk dilepas tanpa kecepatan mendatar.
3. Setelah melepas, capit kosong. Kerupuk berikutnya dimuat bila kerupuk tadi sudah mendarat dan tenang, atau 1,6
   detik lewat; paling cepat 0,55 detik. Menekan saat capit kosong hanya memunculkan petunjuk "Sebentar, capit sedang
   mengambil kerupuk berikutnya", jadi kerupuk tidak bisa diborong. `Spasi` yang ditahan hanya melepas satu.
4. Gagal bila ada kerupuk yang menyentuh meja (di luar piring). Kerupuk itu dilingkari biru dengan label
   "Jatuh di sini"; lembar hasil menyebut sebab dan satu saran.
5. Skor: **kerupuk bertahan** (mendarat dan tidak jatuh) dan **tinggi** dalam cm dari permukaan piring sampai titik
   tertinggi kerupuk, diukur hanya saat semua kerupuk tenang. Lembar hasil memakai tumpukan tertinggi selama babak.
6. Rekor: `localStorage` kunci `tumpuk-kerupuk:rekor` berisi `{ tinggi, jumlah }` (tinggi tertinggi dan jumlah
   kerupuk saat itu), dibungkus `try/catch`. Bila penyimpanan diblokir, game tetap jalan dan lembar hasil
   memberitahu bahwa rekor tidak tersimpan.
7. Dialog Cara main menjeda capit dan fisika; `Escape` atau klik di luar kotak menutupnya.

### Sebab kegagalan

| Sebab | Kapan | Saran |
|---|---|---|
| Meleset dari piring | kerupuk terbaru menyentuh meja tanpa pernah menyentuh piring atau kerupuk lain | lepas saat capit di atas piring, lihat garis putus-putus |
| Meluncur dari bibir piring | kerupuk terbaru mendarat pertama kali di piring lalu ke meja | incar bagian datar di tengah piring |
| Kerupuknya meluncur | kerupuk terbaru mendarat pertama kali di kerupuk lain lalu ke meja | lepas saat capit sejajar tengah kerupuk teratas |
| Menggelinding ke meja | kerupuk terbaru jenis rengginang atau kulit, berputar lebih dari 1,3 rad setelah mendarat | saran khusus rengginang atau kulit |
| Tertimpa lalu jatuh | kerupuk lama jatuh dalam 2,5 detik setelah kerupuk terbaru mendarat, dan titik berat tumpukan masih kurang dari 3 cm dari tengah | jangan menaruh beban di ujung yang menjorok |
| Tumpukannya condong | kerupuk lama jatuh di luar kasus di atas | taruh kerupuk berikutnya ke sisi berlawanan arah condong |

## Fisika dan angka kalibrasi

Pustaka: **planck.js 1.5.1** (port Box2D, lisensi MIT), disalin ke `public/games/tumpuk-kerupuk/planck.min.js`
dengan header lisensi dan dimuat dengan path relatif. Brief menyarankan matter-js; matter-js 0.20.0 sudah dicoba
dulu dan ditinggalkan karena tumpukan yang rapi merayap lalu roboh sendiri saat didiamkan. Uji tanpa tampilan yang
sama (15 kerupuk pipih, geser acak kecil, diam 60 detik, 10 benih): matter-js 120 Hz roboh 10 dari 10, 240 Hz roboh
1 dari 10 (7 dari 10 untuk urutan campuran); planck.js roboh 0 dari 10 pada 60 Hz maupun 120 Hz.

| Besaran | Nilai |
|---|---|
| Satuan fisika | 1 satuan planck = 10 cm |
| Langkah fisika | 1/120 detik, iterasi kecepatan 10, posisi 8 |
| Gravitasi | 260 cm/s² (sekitar seperempat gravitasi bumi supaya jatuhnya terbaca) |
| Jarak lepas | dasar kerupuk 9 cm di atas puncak tumpukan yang tenang |
| Laju capit | 14 cm/s x (1 + 0,045 x jumlah dilepas), maksimal 34 cm/s |
| Tenang | laju < 3 cm/s dan putaran < 0,6 rad/s |
| Piring | bagian datar 17,6 cm, bibir naik 1,8 cm sampai lebar 27,6 cm; statis, tidak bisa bergeser |
| Meja | permukaan 2,2 cm di bawah permukaan piring |

| Kerupuk | Ukuran (cm) | Bentuk fisika | Massa jenis | Gesek | Redaman udara |
|---|---|---|---|---|---|
| Kerupuk udang | 12 x 2,2 (lebar ±6%) | segi delapan, atas-bawah datar | 0,6 | 0,9 | 0,6 |
| Kerupuk bawang | 15 x 1,6 (±5%) | persegi panjang bersudut tumpul | 1,0 | 0,6 | 0,3 |
| Rengginang | 6,4 x 3,4 (±5%) | cakram bersudut bulat besar (12 titik) | 1,6 | 0,7 | 0,2 |
| Kerupuk kulit | sekitar 5 x 3,6 | segi tujuh acak (selalu cembung) | 0,9 | 0,8 | 0,4 |

Kerupuk pipih sengaja bertepi atas-bawah datar di fisika; gelombang tepi kerupuk udang, butir nasi rengginang,
pori kulit, dan serpih daun bawang hanya digambar, rata-ratanya mengikuti bentuk fisika.

Urutan: kantong acak berisi 6 (udang 2, bawang 2, rengginang 1, kulit 1). Kerupuk pertama selalu kerupuk udang.

### Skala layar

Dunia memakai cm; layar menggambar dengan skala `s = min(lebar area / 42, tinggi area / 60)` px per cm, dengan
"area" = layar dikurangi panel skor. Hasil terukur: **11,17 px/cm** di 1280x670 (area 960x670) dan
**8,93 px/cm** di 375x690 (area di bawah pita skor). Pada ujung jangkauan capit di HP, sebagian kerupuk panjang
boleh keluar tepi layar; pusat capit selalu terlihat.

### Hasil kalibrasi (uji puppeteer, waktu dimajukan lewat kait)

- 12 kerupuk udang/bawang tepat di tengah, diam 60 detik: geser 0,000 cm.
- 16 kerupuk pipih dengan geser acak sampai 0,8 cm, diam 60 detik: geser 0,058 cm, tidak ada yang jatuh.
- Campuran dengan rengginang dan kulit di atas alas lebar, diam 45 detik: geser 0,000 cm.
- Urutan acak biasa, semua dilepas tepat di tengah, 20 benih: 4 babak bertahan 15 kerupuk, tinggi tertinggi rerata
  28,6 cm. Kerupuk bundar dan menggumpal membuat pemain perlu menggeser posisi lepas, bukan sekadar menunggu tengah.

## Kait uji

`window.__tumpukKerupuk`:

- `keadaan()`: status (`main`, `gagal`, `hasil`), jumlah, tinggi, tinggiTertinggi, dilepas, capitX, laju, siap,
  memegang, berikutnya, penyebab, rekor, skalaPxPerCm, gerakHias, partikel, fokus, dan daftar kerupuk
  (jenis, x, y, sudut, mendarat, jatuh, laju).
- `jatuhkan()`, `aturCapit(xCm)`, `bekukanCapit(bool)`, `maju(detik)`, `pegang(jenis)`, `urutan([jenis...])`,
  `mulaiUlang(benih, [jenis...])`, `bangun([[jenis atau null, xCm], ...], detikTunggu)`, `modeKartu(bool)`,
  `contohKartu()`.
- Gambar kartu 480x480: buka di viewport 480x480 (tema terang), panggil `window.__tumpukKerupuk.contohKartu()`,
  tunggu satu bingkai, lalu tangkap layar. Hasilnya tumpukan 12 kerupuk setinggi 26,2 cm yang agak condong ke
  kanan, dengan capit membawa rengginang di kiri atas dan penggaris di tepi kiri.
