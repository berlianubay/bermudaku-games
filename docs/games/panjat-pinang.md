# Panjat Pinang: arah desain

> Arah dari pemilik (4 November 2026): game browser orisinal untuk Bermudaku Games. Tampak samping lomba panjat
> pinang 17 Agustus di lapangan kampung: batang tinggi berlumur oli, roda hadiah di puncak, bendera merah putih dan
> umbul-umbul, penonton sederhana. Pemanjat naik dengan irama tangan kiri dan kanan bergantian. Nama, gambar,
> teks, karakter, dan kode dibuat sendiri; semua gambar digambar dengan Canvas 2D, tanpa berkas gambar.

## Identitas

Lomba agustusan di lapangan tanah kampung: rumah bergenteng di kejauhan, pohon kelapa, umbul-umbul bambu
melengkung, tali bendera segitiga, penonton di balik tali rafia. Di tengahnya satu batang pinang yang mengilap
oleh oli dengan roda hadiah bambu di puncak (sepeda, payung, ember, kaus) dan bendera merah putih paling atas.

Pemanjat adalah tokoh rekaan sendiri tanpa nama: dilihat dari belakang, bercelana pendek merah berpinggang putih,
berikat kepala putih, kulit sawo matang belepotan noda oli dengan kilap di punggung. Sudut pandang dari belakang
dipilih karena tangan kirinya ada di kiri layar dan tangan kanannya di kanan, sama dengan tombol dan tombol panah.

Motif identitas: **bendera kecil merah putih**. Ia muncul di judul, di judul lembar hasil saat menang, di judul
dialog Cara main, di puncak penggaris (tanda 8 m), di puncak batang, dan di tangan sebagian penonton. Merah
sebagai warna antarmuka hanya dipakai untuk "sekarang": tombol tangan yang mendapat giliran, kotak Pas yang
menyala saat jarum masuk, tombol "Panjat lagi", tepi lembar hasil dan dialog, serta "Rekor baru".

Detail kecil yang sengaja: tetes oli di tepi batang (makin banyak di ruas licin), genangan oli di pangkal batang,
pita putih penanda batas ruas yang diikat di batang, cincin alami batang pinang, lampu bohlam kecil di tali
bendera pada tema gelap.

## Kepribadian

Riuh tapi sabar. Lapangan ramai, tapi teks bicara pelan dan jelas: kegagalan selalu menyebut sebab yang terjadi
di babak itu (ruas, jarak tarikan, berapa kali tergelincir, berapa meter hilang) dan satu saran, bukan
"Game over".

## Palet antarmuka

| Peran | Terang (lapangan siang) | Gelap (lapangan senja) |
|---|---|---|
| Kertas (pita skor, kendali) | `#FBF4E6` | `#17120F` |
| Lembar (hasil, dialog, tombol, tag) | `#FFFDF8` | `#241D18` |
| Tinta | `#241B15` cokelat oli | `#F4EADB` krem |
| Tinta pendamping | `#5F5045` | `#CDBBA5` |
| Aksen tunggal | `#B01A2E` merah bendera (teks putih di atasnya) | `#F2858F` merah muda (teks `#2B0A0F`) |
| Garis kontrol | `#8E7C6C` | `#A3907C` |
| Jalur bilah | `#EFE4D0` | `#332A22` |

Alasan: krem kertas dan cokelat tua diambil dari spanduk kain dan oli hitam yang menjadi pokok lomba. Merah
bendera menjadi satu-satunya aksen karena ia sudah hidup di dunia game (bendera, umbul-umbul, celana pemanjat),
sehingga antarmuka dan lapangan memakai bahasa yang sama. Merah tidak dipakai untuk peringatan; cengkeraman lemah
ditulis dengan kata ("lemah"), supaya merah tetap berarti "tekan sekarang". Dua tema karena portal mengisi
`data-theme` dan game ini juga dimainkan malam hari di HP; tema mengikuti `prefers-color-scheme` dan dikalahkan
oleh `data-theme="light|dark"` pada `<html>`. Tema gelap bukan sekadar dibalik: lapangan menjadi senja dengan
langit cokelat bara dan lampu bohlam di tali bendera.

Warna dunia (langit, rumah, rumput, tanah, bambu, batang, kulit, baju penonton, hadiah) adalah isi lapangan,
bukan warna antarmuka. Semua benda diberi garis tinta gelap supaya terbaca di kedua tema. Latar (kampung,
umbul-umbul, penonton) ditutup kabut tipis warna langit, sehingga batang, pemanjat, dan roda hadiah yang tajam
menjadi satu-satunya fokus.

### Kontras (dihitung dengan rumus WCAG lewat Node, di skrip uji)

| Pasangan | Terang | Gelap |
|---|---|---|
| Tinta di kertas (pita skor, kendali) | 15,44:1 | 15,61:1 |
| Tinta pendamping di kertas (label) | 7,05:1 | 9,95:1 |
| Tinta di lembar (hasil, dialog, tag, tombol tangan) | 16,62:1 | 13,96:1 |
| Tinta pendamping di lembar (saran, petunjuk kunci) | 7,59:1 | 8,90:1 |
| Teks di merah (tombol giliran, Panjat lagi, kotak Pas menyala) | 6,92:1 | 7,40:1 |
| Merah di lembar ("Rekor baru", "8 m") | 6,81:1 | 6,75:1 |
| Tinta di jalur bilah (teks Pas) | 13,42:1 | 11,80:1 |
| Tinta pendamping di arsiran (cepat, melorot) | 5,38:1 | 6,96:1 |
| Lembar di tinta (label "tergelincir") | 16,62:1 | 13,96:1 |
| Garis tombol vs kertas / lembar (min 3:1) | 3,65 / 3,93:1 | 6,05 / 5,41:1 |
| Garis bilah vs jalur (min 3:1) | 3,18:1 | 4,57:1 |
| Isi cengkeraman (tinta) vs jalur (min 3:1) | 13,42:1 | 11,80:1 |
| Lingkar jarum (lembar) vs merah menyala (min 3:1) | 6,81:1 | 6,75:1 |
| Tepi merah vs kertas (min 3:1) | 6,32:1 | 7,55:1 |
| Cincin fokus tinta vs kertas (min 3:1) | 15,44:1 | 15,61:1 |

Teks di kanvas (penggaris, tag ruas, penanda tinggi, label umpan balik) selalu digambar di atas pelat lembar
atau tinta, jadi kontrasnya sama dengan baris lembar dan tinta di atas, apa pun warna langit di belakangnya.

## Tipografi

- Judul, angka waktu dan tinggi, tombol utama: **Titan One**. Huruf gemuk membulat seperti tulisan cat di spanduk
  lomba agustusan kampung; angkanya besar dan jelas untuk hitungan detik yang terus turun. Dipilih berbeda dari
  game lain di portal (Bungee dipakai Parkir Angkot, Lilita One dipakai Tumpuk Kerupuk).
- Teks: **Plus Jakarta Sans**, dirancang untuk identitas kota Jakarta dan nyaman untuk bahasa Indonesia; sama
  dengan keluarga game lain di portal.

## Tata letak

Kisi tiga bagian tanpa gulir: pita skor, panggung kanvas, panel kendali. Kanvas hanya mengisi sel panggung.

- HP potret (375x690): pita atas berisi judul, Cara main, sisa waktu (dengan rekor di bawahnya), dan tinggi.
  Panggung di tengah (375x363). Panel kendali di bawah: meteran cengkeraman, bilah irama, lalu dua tombol besar
  "Tangan kiri" dan "Tangan kanan" berdampingan (171x86 px).
- Layar lebar (lanskap, lebar minimal 700 px): kolom kiri `clamp(250px, 23vw, 310px)` berisi judul, Cara main,
  waktu, tinggi, info ruas sekarang (nama oli dan jarak tarikan), dan petunjuk papan ketik. Panel kendali di bawah
  panggung: tombol kiri di kiri, meteran di tengah, tombol kanan di kanan (210x92 px).
- HP mendatar (tinggi maksimal 520 px): panel dirapatkan, tombol tangan 140 px.
- Lembar hasil muncul di bawah pada HP (kamera menggeser adegan ke bagian panggung yang masih terlihat) dan di
  kolom kiri pada layar lebar. Penggaris dan tag ruas disembunyikan saat lembar hasil tampil.
- Di kanvas: penggaris ukur di tepi kiri (0 sampai 8 m, jalur ruas yang makin pekat makin licin, bendera kecil
  di 8 m), penanda tinggi pemanjat, tag "Ruas n: oli ..." di batas tiap ruas, dan label umpan balik di atas kepala
  pemanjat ("Terlalu cepat, tergelincir", "Tangan kiri dua kali, tergelincir", "Melorot, tarik lagi").

Dial: ENERGY 2 / RHYTHM 1 / MOTION 2

RHYTHM 1 disengaja: satu layar permainan dengan satu fokus (pemanjat di batang). MOTION 2 karena irama dan kamera
adalah isi permainan.

## Gerak

- Inti (tidak pernah dimatikan): tarikan tangan, badan naik, tergelincir, melorot, jarum irama, kamera mengikuti
  pemanjat naik, kamera ke roda hadiah saat menang.
- Hias (dimatikan oleh `prefers-reduced-motion`): kibaran bendera puncak, bendera penonton, kain umbul-umbul,
  penonton bergoyang dan melompat bersorak, awan berarak, hadiah berayun, ujung ikat kepala berkibar, percikan
  oli saat tergelincir, debu saat sampai tanah, dan tombol yang turun saat ditekan.

## Aturan permainan

1. Pemanjat naik dengan tarikan tangan kiri dan kanan bergantian. Tarikan pertama boleh tangan mana saja; waktu
   60 detik mulai berjalan sejak tarikan itu.
2. Bilah "Berikutnya" mengukur jarak sejak tarikan terakhir (0 sampai 1,4 detik). Jarum harus masuk kotak Pas.
   Kotak Pas menyala merah saat jarum di dalamnya, dan tombol tangan yang mendapat giliran menyala merah.
3. Tergelincir: menekan sebelum jarum masuk kotak Pas (asal pencet), atau menekan tangan yang sama dua kali.
   Pemanjat meluncur turun selama 0,5 detik; tekanan selama itu diabaikan. Sesudahnya irama dimulai ulang:
   tarikan berikutnya boleh tangan mana saja dan tanpa batas cepat.
4. Melorot: jarum lewat kotak Pas. Pemanjat turun pelan, makin cepat sampai laju penuh dalam 0,4 detik, dan
   cengkeraman terkuras. Tarikan berikutnya menghentikan melorot.
5. Cengkeraman (0 sampai 100%, awal 70%): naik 10 tiap tarikan yang pas, turun 25 tiap tergelincir, terkuras
   pelan oleh oli, dan terkuras 22 per detik selama melorot. Jarak tiap tarikan = jarak dasar x (0,5 + 0,5 x
   cengkeraman). Saat cengkeraman 0, melorot 1,8 kali lebih cepat.
6. Menang: kaki sampai 8 m (tangan meraih roda hadiah). Hadiah menurut waktu tempuh: sampai 23 detik sepeda,
   sampai 32 detik payung, sampai 44 detik ember, selebihnya kaus.
7. Gagal: waktu habis, atau pemanjat sampai tanah setelah sempat naik 1 m. Di bawah 1 m, sampai tanah hanya
   berarti mulai lagi dari bawah.
8. Rekor: waktu tercepat sampai puncak, `localStorage` kunci `panjat-pinang:rekor` berisi `{ waktu, hadiah }`,
   dibungkus `try/catch`. Bila penyimpanan diblokir, game tetap jalan dan lembar hasil memberi tahu.
9. Dialog Cara main menjeda babak; `Escape` atau klik di luar kotak menutupnya, lalu irama dimulai ulang.

### Kontrol

- Papan ketik: `panah kiri` atau `A` tangan kiri, `panah kanan` atau `D` tangan kanan. Tombol yang ditahan
  (ulang otomatis) tidak dihitung. `Tab` ke Cara main, Tangan kiri, Tangan kanan; `Enter`/`Spasi` pada tombol
  tangan juga menarik. Setelah babak selesai fokus pindah ke "Panjat lagi".
- Tetikus dan sentuh: dua tombol tangan (dibaca saat `pointerdown`, jadi dua jempol bisa bergantian cepat), atau
  ketuk sisi kiri/kanan lapangan. Petunjuk huruf kunci disembunyikan pada layar sentuh (`pointer: coarse`).

### Sebab kegagalan

| Judul | Kapan | Isi sebab | Saran |
|---|---|---|---|
| Tergelincir sampai tanah | tanah tersentuh saat meluncur karena terlalu cepat | jarak tarikan terakhir, ruas, batasnya, jumlah tergelincir | tunggu jarum masuk kotak Pas; makin licin, makin lama |
| Tergelincir sampai tanah | tanah tersentuh saat meluncur karena tangan sama | tangan mana, ruas berapa | ganti tangan tiap tarikan, ikuti tombol yang menyala |
| Melorot sampai tanah | tanah tersentuh saat melorot | berapa detik berhenti menarik, di ruas mana | tarik selagi jarum di kotak Pas, batas lama ruas itu |
| Waktu habis | kehilangan terbesar karena melorot (total hilang 0,8 m atau lebih) | tinggi akhir, sisa ke puncak, meter hilang, ruas terbanyak | tarik begitu jarum masuk kotak Pas |
| Waktu habis | kehilangan terbesar karena terlalu cepat | jumlah tergelincir, meter hilang, ruas tersering | tunggu kotak Pas, batas cepat ruas itu |
| Waktu habis | kehilangan terbesar karena tangan sama | jumlah, meter hilang | ganti tangan tiap tarikan |
| Waktu habis | kehilangan kecil | cengkeraman sering lemah, rata-rata jarak tarikan | jaga irama ajek di dalam kotak Pas |

Saat menang, lembar hasil menyebut waktu dan hadiah, lalu satu saran: batas waktu hadiah berikutnya dan kesalahan
terbesar babak itu.

## Angka kalibrasi

Batang 10,45 m, roda hadiah di 10,05 m (jari-jari 1,25 m), puncak permainan 8 m (tinggi kaki). Lima ruas
masing-masing 1,6 m.

| Ruas | Tinggi | Oli |
|---|---|---|
| 1 | 0 sampai 1,6 m | tipis |
| 2 | 1,6 sampai 3,2 m | sedang |
| 3 | 3,2 sampai 4,8 m | tebal |
| 4 | 4,8 sampai 6,4 m | sedang |
| 5 | 6,4 sampai 8 m | tebal |

| Oli | Kotak Pas (detik) | Lebar | Naik per tarikan | Melorot | Tergelincir | Kuras cengkeraman |
|---|---|---|---|---|---|---|
| Tipis | 0,22 sampai 0,62 | 0,40 | 0,24 m | 0,22 m/s | 0,6 m | 4 per detik |
| Sedang | 0,40 sampai 0,78 | 0,38 | 0,22 m | 0,32 m/s | 0,8 m | 6 per detik |
| Tebal | 0,62 sampai 0,94 | 0,32 | 0,20 m | 0,45 m/s | 1,0 m | 9 per detik |

Makin tebal oli, kotak Pas makin sempit dan bergeser ke kanan: irama harus lebih pelan dan lebih teratur. Kotak
oli tipis dan oli tebal sengaja tidak beririsan, jadi tidak ada satu tempo yang aman di semua ruas: tempo 0,5 detik
yang nyaman di bawah pasti tergelincir di ruas oli tebal. Ruas licin juga terlihat beda: batang makin hitam, garis
kilap putih makin lebar, ada garis kilap kedua, bintik kilau, dan tetes oli lebih banyak.

Hasil bot berirama lewat `panjatOtomatis` (langkah 1/240 detik, tanpa jeda acak):

| Cara menekan | Hasil |
|---|---|
| 0,06 detik setelah kotak Pas terbuka | 20,1 detik, sepeda |
| Tengah kotak Pas | 24,4 detik, payung |
| 0,06 detik sebelum kotak Pas tutup | 28,9 detik, payung |
| Tempo tetap 0,5 detik | waktu habis di 3,1 m, tergelincir 15 kali di ruas oli tebal |
| Tempo tetap 0,7 detik | 26,6 detik, payung (agak melorot di ruas oli tipis) |
| Tempo tetap 0,9 detik | 36,9 detik, ember |
| Tempo tetap 1,0 detik | waktu habis di 7,8 m |
| Tengah kotak, jeda acak simpangan sekitar 0,075 detik (12 benih) | 23,6 sampai 31,2 detik |
| Tengah kotak, jeda acak simpangan sekitar 0,125 detik (12 benih) | 8 dari 12 sampai puncak (27 sampai 58 detik), 4 waktu habis |

Uji dengan masukan sungguhan (puppeteer, menekan di 45% kotak Pas): papan ketik saja 24,0 detik, sentuh 26,1
detik, keduanya payung tanpa tergelincir. Saat mesin uji sedang sibuk, satu putaran sentuh pernah tergelincir 2
kali dan sampai dalam 44,2 detik (kaus): irama diukur dengan jam permainan, dan langkah per bingkai dibatasi 0,1
detik supaya kembali dari tab tersembunyi tidak membuat pemanjat melompat.

### Skala layar

Kamera memakai `s = min(tinggi panggung / 4,9, lebar panggung / 3,2)` px per meter: **112,65 px/m** di 1280x670
(panggung 986x552) dan **74,11 px/m** di 375x690 (panggung 375x363). Kamera menjaga pemanjat sedikit di bawah
tengah, tidak turun di bawah tanah (-0,9 m) dan tidak naik melewati 11,9 m.

## Kait uji

`window.__panjatPinang`:

- `keadaan()`: status (`siap`, `main`, `menang`, `gagal`, `hasil`), waktu, sisa, tinggi, tinggiMaks,
  cengkeraman, ruas, oli, jendela `[min, max]`, sejak (detik sejak tarikan terakhir), bebas, tanganLalu,
  tanganBerikut, melorot, tergelincir, statistik (tarikan, cepat, sama, meter hilang per sebab), hadiah,
  penyebab (judul, sebab, saran), label di kanvas, rekor, skalaPxPerM, kameraY, gerakHias, partikel,
  hasilTerlihat, fokus.
- `tekan('kiri'|'kanan')`, `maju(detik)`, `bekukan(bool)` (jam nyata berhenti; hanya `maju` yang memajukan),
  `mulaiUlang()`, `aturTinggi(m)`, `aturCengkeraman(0..100)`,
  `panjatOtomatis({ jeda: 'awal'|'tengah'|'akhir'|detik|fungsi(oli), sebar, benih, tanganSama })`,
  `modeKartu(bool)`, `contohKartu()`.
- Gambar kartu 480x480: buka di viewport 480x480, panggil `window.__panjatPinang.contohKartu()`, tunggu satu
  bingkai, lalu tangkap layar. Hasilnya pemanjat di 6,3 m (batas ruas oli sedang dan oli tebal yang mengilap),
  tangan kiri meraih ke atas, roda hadiah dengan kaus, payung, ember, dan sepeda di atasnya, bendera merah putih
  di puncak, umbul-umbul dan tali bendera di belakang. Tanpa penggaris, tag, dan panel.
