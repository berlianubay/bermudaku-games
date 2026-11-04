# Tambal Ban: arah desain

> Arah dari pemilik (4 November 2026): game browser orisinal untuk Bermudaku Games. Bengkel tambal ban pinggir jalan:
> pelanggan menyerahkan ban dalam motor yang bocor, pemain mencari bocor di baskom air, mengamplas, mengoles lem,
> menempel dan menekan tambalan, lalu menguji. Nama, gambar, teks, karakter, dan kode dibuat sendiri; semua gambar
> digambar dengan Canvas 2D, tanpa berkas gambar.

## Identitas

Bengkel tambal ban di tepi jalan: dinding plester krem, terpal biru yang melengkung di antara tali, lantai semen bernoda
oli, bangku kayu tempat pelanggan menunggu, skuternya terparkir dengan roda belakang kempes, dan ban bekas yang
digantung di dinding dengan tulisan cat putih TAMBAL BAN. Di tengahnya baskom seng berisi air dan ban dalam yang
dipegang dua tangan tukang (sudut pandang pemain sebagai tukang).

Lima pelanggan rekaan tanpa hubungan dengan orang sungguhan: Mas Yoga (pengojek), Bu Ratih (penjual sayur keliling),
Pak Harun (kurir paket), Mbak Sari (mahasiswi), Bang Udin (penjual roti keliling). Tiap orang punya rupa dan bawaan
sendiri di motornya (keranjang sayur, kardus paket, kotak roti, tas) dan satu kalimat yang memberi petunjuk
("kempes pelan-pelan" untuk bocor kecil, "ada paku nancap" untuk paku).

Motif identitas: **tambalan bundar bertepi oranye**. Ia muncul sebagai tanda di depan judul, di label langkah aktif,
di judul lembar hasil dan dialog, di daftar langkah layar lebar (langkah sekarang), dan tentu saja di ban itu sendiri.
Oranye sebagai warna antarmuka berarti "lakukan sekarang": tombol utama, pita Pas/Siap/Cukup yang menyala saat jarum
di dalamnya, tepi lembar hasil dan dialog, serta "Rekor baru".

Detail kecil yang sengaja: tanda kapur digambar sebagai lingkaran tangan yang tidak rata (bentuknya tetap per tanda),
pentil kuningan di sisi dalam ban sebagai patokan putaran, garis cetakan karet supaya putaran terlihat, kikir dengan
gigi miring, kuas yang berputar kecil saat mengoles, rol penekan, lidah tambalan yang terangkat saat lem basah, tang
yang menjepit paku, dan pelanggan yang pindah pose sesuai kesabaran (tangan di lutut, memegang ponsel, bersedekap,
melambai saat puas). Bangku kosong saat pelanggan pergi.

## Kepribadian

Sabar dan telaten, seperti tukang tambal yang sudah hafal urutan kerjanya. Teks bicara pendek dan konkret. Kegagalan
selalu menyebut sebab yang terjadi pada ban itu (berapa detik lem baru kering, berapa persen amplas, berapa cm tanda
meleset, di mana lubang yang terlewat dihitung dari pentil) dan satu saran, bukan "Game over".

## Palet antarmuka

| Peran | Terang (siang) | Gelap (malam) |
|---|---|---|
| Kertas (pita info, panel alat) | `#F2EBDD` krem semen | `#151413` |
| Lembar (hasil, dialog, tombol, ucapan) | `#FFFBF2` | `#221F1C` |
| Tinta | `#201C19` hitam karet | `#F2EBDF` krem |
| Tinta pendamping | `#5A5048` | `#C3B8AA` |
| Aksen tunggal | `#B4430D` oranye tepi tambalan (teks putih) | `#F28C4E` (teks `#2A1206`) |
| Inti ketiga: biru terpal (isi bilah kesabaran, cakupan, tekan; langkah selesai) | `#1F4F8F` | `#86AEE6` |
| Garis kontrol | `#8A7B6D` | `#8F857A` |
| Jalur bilah | `#E9DFCD` | `#2D2A26` |

Alasan: hitam karet dan krem semen adalah dua bahan paling banyak di bengkel tambal ban; antarmuka memakai keduanya
sehingga terasa satu dunia dengan panggung. Biru diambil dari terpal plastik biru yang hampir selalu menaungi bengkel
pinggir jalan, dipakai untuk "kemajuan" (bilah yang terisi, langkah yang sudah lewat). Oranye diambil dari tepi
tambalan karet, satu-satunya warna terang di meja tukang, jadi ia menjadi aksen tunggal untuk "lakukan sekarang".
Oranye tidak dipakai untuk peringatan; pelanggan yang kesal ditulis dengan kata ("kesal") dan pose, supaya oranye
tetap berarti "tombol ini".

Dua tema karena portal mengisi `data-theme` dan bengkel tambal ban memang buka sampai malam. Tema mengikuti
`prefers-color-scheme` dan dikalahkan oleh `data-theme="light|dark"` pada `<html>`. Tema gelap bukan sekadar dibalik:
warna dunia tetap sama, lalu kanvas ditimpa lapisan `multiply` yang terang di meja kerja dan gelap kebiruan di tepi,
dengan satu bohlam tergantung dari terpal. Hasilnya bengkel malam yang diterangi satu lampu, dan baskom tetap jelas.

Warna dunia (dinding, terpal, lantai, kayu, karet, seng, air, kapur, kuningan, lem, rupa pelanggan) adalah isi
bengkel, bukan warna antarmuka. Benda diberi garis tinta gelap supaya terbaca di kedua tema. Gelembung digambar putih
bergaris putih di atas air teal gelap dan karet hitam, jadi tetap terlihat walau kecil.

### Kontras (dihitung dengan rumus WCAG lewat Node, di skrip uji)

| Pasangan | Terang | Gelap |
|---|---|---|
| Tinta di kertas (pita info, panel alat) | 14,26:1 | 15,53:1 |
| Tinta pendamping di kertas (label, petunjuk) | 6,62:1 | 9,42:1 |
| Tinta di lembar (hasil, dialog, tombol, ucapan) | 16,38:1 | 13,84:1 |
| Tinta pendamping di lembar (saran, kunci) | 7,60:1 | 8,40:1 |
| Teks di oranye (tombol utama, pita aktif) | 5,60:1 | 7,27:1 |
| Oranye di lembar ("Rekor baru") | 5,42:1 | 6,74:1 |
| Tinta di jalur bilah (Pas, Siap, Cukup) | 12,81:1 | 12,05:1 |
| Tinta pendamping di jalur (licin, basah, tipis) | 5,94:1 | 7,31:1 |
| Tinta pendamping di garis arsiran | 5,11:1 | 6,14:1 |
| Garis tombol vs kertas / lembar (min 3:1) | 3,45 / 3,96:1 | 5,09 / 4,53:1 |
| Garis bilah vs jalur (min 3:1) | 3,10:1 | 3,95:1 |
| Isi bilah biru vs jalur (min 3:1) | 6,18:1 | 6,26:1 |
| Jarum tinta vs jalur (min 3:1) | 12,81:1 | 12,05:1 |
| Tepi oranye vs kertas (min 3:1) | 4,72:1 | 7,57:1 |
| Cincin fokus tinta vs kertas (min 3:1) | 14,26:1 | 15,53:1 |

Satu-satunya teks di kanvas adalah ucapan pelanggan, selalu di atas pelat lembar dengan tinta, jadi kontrasnya sama
dengan baris "tinta di lembar". Tulisan TAMBAL BAN pada papan nama adalah hiasan dunia, bukan informasi.

## Tipografi

- Judul, tombol utama, judul lembar hasil dan dialog: **Permanent Marker**. Huruf spidol tangan ini meniru tulisan cat
  di papan tambal ban pinggir jalan dan coretan kapur tukang. Dipilih berbeda dari game lain di portal (Titan One,
  Bungee, Lilita One, Shrikhand, Alfa Slab One, Fredoka, Pixelify Sans).
- Teks dan angka: **Plus Jakarta Sans**, dirancang untuk identitas kota Jakarta dan nyaman untuk bahasa Indonesia;
  sama dengan keluarga game lain di portal. Angka nilai dan kesabaran memakai bobot 800 dan `tabular-nums` supaya
  tidak bergoyang saat berubah.

## Tata letak

Kisi tiga bagian tanpa gulir: pita info, panggung kanvas, panel alat. Kanvas hanya mengisi sel panggung.

- HP potret (375x690): pita atas berisi judul, Cara main, lalu tiga sel: pelanggan (urutan, nama, pekerjaan),
  kesabaran (detik, bilah, kata suasana hati), nilai hari ini (dan rekor). Panggung di tengah (375x341 sampai 375x348).
  Panel alat di bawah: label langkah ("1/5 Cari bocor") dan petunjuk dua baris, satu meteran, tiga tombol
  (kiri, utama oranye, kanan; 97x54, 141x54, 97x54 px) dan tombol lanjut selebar panel (351x46 px).
- Layar lebar (lanskap, lebar minimal 540 px): kolom kiri `clamp(200px, 23vw, 310px)` berisi judul, Cara main,
  pelanggan, nilai, kesabaran, ucapan pelanggan, daftar lima langkah (sudah lewat biru, sekarang bertanda tambalan),
  dan petunjuk papan ketik. Panel alat di bawah panggung; pada lebar 1100 px ke atas satu baris: meteran, kiri,
  utama, kanan, lanjut (104x60, 230x60, 104x60, 210x60 px).
- Lanskap sempit (sampai 999 px): info di kolom kiri bertumpuk supaya nama pelanggan tidak terpotong. Lanskap pendek
  (tinggi sampai 520 px): ucapan dan petunjuk papan ketik disembunyikan; sampai 420 px daftar langkah diganti label
  langkah di panel alat. Diuji 690x375, 812x375, dan 568x320.
- Lembar hasil muncul di bawah, menutupi panel alat, pada HP; di tengah panggung pada layar lebar.
- Panggung punya dua sudut pandang. **Baskom** (cari bocor dan uji): latar bengkel di atas, baskom seng terpotong di
  bawah supaya bagian ban yang tercelup dan gelembungnya terlihat, pita kapur penanda di tengah baskom, dua tangan
  memegang ban. **Meja kerja** (amplas, lem, tempel dan tekan): potongan ban terbentang di meja kayu dengan lingkaran
  kapur di tengah, kaleng lem di kiri, lembar tambalan di kanan. Meja dimulai di bawah garis lantai supaya pelanggan
  di bangku tetap terlihat utuh (pose pelanggan adalah petunjuk kesabaran); di panggung pendek meja dinaikkan
  supaya area kerja paling sedikit 120 px.
- Papan nama TAMBAL BAN di tengah atas bila ruang di atas ban cukup, di atas motor bila tidak, di kanan atas pada
  layar lebar.

Dial: ENERGY 2 / RHYTHM 1 / MOTION 2

RHYTHM 1 disengaja: satu layar kerja dengan satu fokus (ban di baskom, lalu lingkaran kapur di meja). MOTION 2 karena
putaran ban, gelembung, dan alat yang bergerak adalah isi permainan.

## Gerak

- Inti (tidak pernah dimatikan): putaran ban, gelembung naik dari lubang (tetap tampil walau gerak dikurangi, hanya
  tanpa liuk), paku tercabut, kikir mengikuti gosokan, kuas berputar selama lem dioles, tambalan jatuh ke tempatnya,
  rol penekan selama ditahan, pose pelanggan sesuai kesabaran.
- Hias (dimatikan oleh `prefers-reduced-motion`): liuk gelembung, letupan gelembung di permukaan, riak air, napas dan
  kaki pelanggan yang menghentak saat kesal, lambaian tangan saat puas, pudar singkat saat berpindah dari baskom ke
  meja, dan tombol yang turun saat ditekan.

## Aturan permainan

1. Satu sesi = lima pelanggan berurutan. Kesabaran tiap pelanggan berjalan sejak bannya diterima dan berhenti selama
   dialog Cara main terbuka atau tab tersembunyi.
2. **Cari bocor.** Ban dalam dicelup; busur 30 sampai 150 derajat (sepertiga bawah) terendam. Lubang yang terendam
   mengeluarkan gelembung dari permukaan karet. Pemain memutar ban sampai gelembung naik di pita kapur, lalu
   menandai. Tanda kena bila selisihnya paling banyak 6 derajat dari lubang (sekitar 3 cm di ban ber-keliling 170 cm).
   Tanda yang meleset tidak menambal apa-apa; menaruh pita kapur di atas tanda yang ada mengganti tombol menjadi
   Hapus tanda.
3. **Paku.** Paku menyumbat lubangnya: tidak ada gelembung selama paku menancap. Saat paku di pita kapur (9 derajat),
   tombol utama menjadi "Tahan: cabut paku"; tahan 0,7 detik. Paku yang tertinggal membuat ban gagal saat diserahkan.
4. **Amplas.** Tiap gosokan yang berganti arah menambah 12%; gosokan ke arah yang sama tidak menambah. Seret
   menambah 12% per jarak 1 jari-jari lingkaran kapur, paling banyak 1,25 jari-jari per arah. Warna karet berubah dari
   hitam mengilap ke abu-abu kusam sampai 100%, lalu ke cokelat pucat bila lewat 150% (menipis).
5. **Lem.** Tahan: tebal naik 42% per detik. Lepas: lem mulai mengering. Lama sampai setengah kering =
   1,5 + 2,4 x tebal/100 detik, ditambah 4,5 detik per 25% di atas 75%. Jendela "Siap" berlangsung 6 detik; sesudahnya
   terlalu kering. Tambah lem mengulang hitungan kering dari nol.
6. **Tempel dan tekan.** Tempel tersedia setelah lem dilepas (diabaikan 0,35 detik sesudah lepas supaya tekan ganda
   tidak menempel). Tekan: tahan sampai 2 detik; bila dilepas, bilah turun 1,4 detik per detik.
7. **Uji.** Ban dicelup lagi, cakupan dihitung ulang dari nol. Tanda di atas tambalan berarti tambalan itu dicopot dan
   diulang. Serahkan ban kapan saja; ban yang masih bocor gagal.
8. **Mutu tambalan** (0 sampai 100) = 0,4 amplas + 0,3 tebal lem + 0,3 waktu tempel.
   Amplas: 60% ke 100% naik dari 50 ke 100; 100 sampai 150% = 100; lewat 150% turun 1 per persen (paling rendah 70).
   Tebal lem: di bawah 45% = 70, 45 sampai 75% = 100, di atas 75% = 88. Waktu tempel: di jendela Siap = 100,
   sesudahnya turun 5 per detik (paling rendah 60).
   Tambalan gagal (mutu 0) bila ditempel saat lem basah, lem di bawah 30%, atau amplas di bawah 60%.
9. **Nilai pelanggan** (paling tinggi 100) = 0,7 x mutu rata-rata tambalan yang menutup lubang (dikurangi 8 per
   tambalan sia-sia) + 0,3 x persen sisa kesabaran. Gagal = 0. Nilai hari ini = jumlah lima pelanggan.
10. **Rekor**: nilai hari ini tertinggi, `localStorage` kunci `tambal-ban:rekor` berisi `{ nilai, lulus }`, dibungkus
    `try/catch`. Bila penyimpanan diblokir, game tetap jalan dan lembar mulai serta lembar sesi memberi tahu.

### Pelanggan

| Urut | Pelanggan | Bocor | Kesabaran |
|---|---|---|---|
| 1 | Mas Yoga, pengojek | 1 besar | 60 detik |
| 2 | Bu Ratih, penjual sayur keliling | 1 kecil | 65 detik |
| 3 | Pak Harun, kurir paket | 1 sedang + 1 kecil | 90 detik |
| 4 | Mbak Sari, mahasiswi | paku (lubang sedang) + 1 kecil | 90 detik |
| 5 | Bang Udin, penjual roti keliling | 1 sedang + 2 kecil | 115 detik |

| Ukuran lubang | Gelembung per detik | Jari-jari gelembung |
|---|---|---|
| Besar | 7 | 0,034 sampai 0,054 R |
| Sedang | 3,2 | 0,022 sampai 0,034 R |
| Kecil | 1,15 | 0,013 sampai 0,020 R (paling kecil 1,5 px) |
| Tambalan gagal (di tepinya) | 2,4 | seperti sedang |

Letak lubang diacak dengan benih per sesi: paling sedikit 55 derajat antar lubang, 14 derajat dari pentil, dan tidak
ada yang berada di dekat pita kapur (35 derajat) saat ban pertama dicelup.

### Kontrol

- Papan ketik: `panah kiri`/`A` dan `panah kanan`/`D` memutar ban (ketuk 1,5 derajat; tahan: diam 0,18 detik, lalu 32
  naik ke 115 derajat per detik dalam 0,55 detik) dan menggosok amplas (satu tekan satu gosokan). `Spasi`/`Enter`
  untuk tombol oranye (tahan untuk lem, tekan, cabut paku). `L` untuk tombol paling kanan (Tambal, Serahkan, Tambah
  lem, Lewati tanda ini). Tombol yang ditahan (ulang otomatis) tidak dihitung. `Tab` berpindah: Cara main, kiri,
  utama, kanan, lanjut. Bila fokus ada di tombol kiri atau kanan, `Spasi` menjalankan tombol itu. Setelah tiap
  pelanggan fokus pindah ke tombol lembar hasil.
- Tetikus dan sentuh: seret melingkar di sekitar ban untuk memutar (dekat pusat: seret mendatar), seret bolak-balik di
  atas karet untuk mengamplas, tahan di atas karet untuk mengoles lem dan menekan, atau pakai tombol. Tombol tahan
  dibaca saat `pointerdown`/`pointerup` dengan penangkapan penunjuk. Petunjuk huruf kunci disembunyikan pada layar
  sentuh (`pointer: coarse`).
- Dialog Cara main menjeda; dibuka dari atas (fokus di judul), `Escape` atau klik di luar kotak menutupnya.

### Sebab kegagalan

| Judul | Kapan | Isi sebab | Saran |
|---|---|---|---|
| Ban ... kempes lagi | paku masih menancap | paku menancap, ban kempes begitu dipakai | putar paku ke pita kapur, tahan Cabut paku |
| Ban ... kempes lagi | tambalan ditempel saat lem basah | "Tambalan mengelupas karena lem masih basah saat ditempel": detik lem saat ditempel dan detik yang dibutuhkan | tunggu pita Siap dan lem tidak mengilap |
| Ban ... kempes lagi | lem di bawah 30% | tebal lem, batas pita Pas | tahan oles sampai pita Pas |
| Ban ... kempes lagi | amplas di bawah 60% | persen amplas | gosok sampai pita Cukup |
| Ban ... kempes lagi | tambalan meleset (dalam 25 derajat dari lubang) | berapa cm meleset, ukuran dan letak lubang dari pentil | tandai saat gelembung di dalam pita kapur |
| Ban ... kempes lagi | lubang tidak pernah ditandai | ukuran dan letak dari pentil; bocor kecil disebut jarang | putar sampai 100% keliling saat uji |
| ... pergi | kesabaran habis | lama menunggu, kegiatan yang paling banyak makan waktu dan detiknya | saran khusus kegiatan itu (lem tebal disebut dengan lama keringnya) |

Bila ada lebih dari satu bocor, yang disebut adalah sebab paling menentukan (urutan seperti tabel) dan jumlah bocor
lainnya. Saat berhasil, lembar hasil menyebut mutu dan sisa kesabaran, lalu satu saran dari kelemahan terbesar
(tambalan sia-sia, lem tebal, amplas kurang atau berlebih, lem terlalu kering, lem kurang). Lembar sesi memberi satu
saran dari sebab gagal terbanyak hari itu.

## Angka kalibrasi

Kesabaran disetel kira-kira dua sampai tiga kali waktu pemain otomatis berkecepatan sedang. Pemain otomatis
(`tambalOtomatis`) sudah tahu letak lubang, tapi tetap menyapu satu keliling dulu, membidik dengan kecepatan putar
tetap, menunggu reaksi sebelum tiap tekan, menggosok 9 kali tiap 0,22 detik, mengoles sampai 60%, menempel 0,4 detik
setelah Siap, dan menguji 250 derajat sebelum menyerahkan.

| Pemain otomatis | Yoga (60) | Ratih (65) | Harun (90) | Sari (90) | Udin (115) | Nilai |
|---|---|---|---|---|---|---|
| Cepat (90 derajat/detik, reaksi 0,4) | 17,4 | 16,3 | 27,1 | 30,9 | 39,3 | 90 sampai 92 |
| Sedang (70, reaksi 0,6) | 19,9 | 18,6 | 29,9 | 34,8 | 43,2 | 88 sampai 91 |
| Lambat (45, reaksi 1,0) | 26,1 | 24,0 | 36,7 | 43,9 | 52,3 | 85 sampai 89 |

Uji dengan masukan sungguhan (puppeteer, mesin sedang dipakai bersama): papan ketik saja Mas Yoga lulus nilai 89 sampai
90 dalam sekitar 22 detik nyata; tetikus Bu Ratih (lubang kecil) nilai 91; sentuh Pak Harun (dua lubang) nilai 86 dengan
sisa kesabaran 47 detik.

Waktu lem: tebal 45% setengah kering setelah 2,6 detik, 60% setelah 2,9 detik, 75% setelah 3,3 detik, 95% setelah
7,4 detik.

### Skala layar

Jari-jari ban `R = min(lebar panggung x 0,3, (tinggi panggung - 18) / 2,42, 235)`: **222,7 px** di 1280x670
(panggung 986x557), **112,5 px** di 375x690 (panggung 375x341 sampai 375x348), 81,6 px di 690x375. Lingkaran kapur di
meja kerja: 52 px, 45 px, dan 26 px.

## Kait uji

`window.__tambalBan`:

- `keadaan()`: status (`siap`, `main`, `hasil`, `selesai`), fase (`celup`, `amplas`, `lem`, `tekan`), langkah
  (`cari`, `amplas`, `lem`, `tekan`, `uji`), jeda, pelanggan dan kesabaran, putaran, sudut di penanda, lubang (sudut,
  ukuran, paku, tertutup, sudut layar, tercelup, selisih ke penanda), tanda, tambalan (gagal, mutu, amplas, tebal,
  umur lem), kerja (amplas, tebal, umur, keadaan lem, tekan), cakupan, gelembung, waktu per kegiatan, hasil
  pelanggan, ringkasan sesi, rekor, lembar yang tampil, label tombol, petunjuk, gerakHias, temaGelap, fokus, geo.
- `mulaiSesi(benih, ke)`, `maju(detik)`, `bekukan(bool)`, `aturPutaran(derajat)`, `putarKeLubang(i, geser)`,
  `tekanSlot('kiri'|'utama'|'kanan'|'lanjut', turun)`, `tandai()`, `lanjut()`, `gosok(n)`, `cukup()`,
  `oles(detik)`, `tempel()`, `tekan(detik)`, `cabutPaku()`, `serahkan()`, `lanjutLembar()`,
  `tambalOtomatis({ kecepatan, reaksi, meleset, tandaiN, lewatiPaku, gosok, tebal, tempel: 'basah', tempelLebih, uji, serahkan })`,
  `modeKartu(bool)`, `contohKartu()`.
- Gambar kartu 480x480: buka di viewport 480x480, panggil `window.__tambalBan.contohKartu()`, tunggu satu bingkai,
  lalu tangkap layar. Hasilnya ban dalam di baskom dengan aliran gelembung lubang besar naik tepat di pita kapur, satu
  lubang lain sudah dilingkari kapur di kanan atas, satu tambalan oranye di kiri dekat permukaan air, pentil di kiri
  atas, dua tangan tukang, Pak Harun di bangku, skuter dengan kardus, dan papan TAMBAL BAN di dinding. Tanpa pita
  info, panel, dan ucapan.
