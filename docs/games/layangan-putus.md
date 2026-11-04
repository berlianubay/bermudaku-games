# Layangan Putus: arah desain

> Arah dari pemilik (4 November 2026): game browser orisinal untuk Bermudaku Games. Tampak samping langit sore di atas
> atap rumah kampung. Pemain menerbangkan layangan dengan benang gelasan dari atap di kiri bawah; layangan lawan
> diterbangkan dari atap lain. Benang yang bersilangan bergesek: yang ditarik lebih cepat menang, yang diam atau
> mengulur putus. Minimal empat level. Nama, gambar, teks, dan kode dibuat sendiri; semua gambar digambar dengan
> Canvas 2D, tanpa berkas gambar.

Design Read: game adu ketangkasan satu layar untuk pemain portal (laptop dan HP), dengan bahasa visual ilustrasi
kampung sore yang hangat, dial ENERGY 2 / RHYTHM 1 / MOTION 2.

## Identitas

Musim layangan di atap kampung: deret rumah bergenteng tanah liat, pohon mangga, antena TV di bubungan, tiang bambu
berkain, cerobong dapur yang berasap, dan matahari rendah di kanan. Pemain berdiri di atap paling kiri dengan caping
kecil dan kaleng gulungan benang; tiap pelayang lawan berdiri di atapnya sendiri, bajunya sewarna layangannya.

Motif identitas: **benang gelasan biru**. Layanganmu satu-satunya yang biru (kepala krem bertitik biru, badan biru),
dan benangmu biru dengan titik kilau gelasan. Biru yang sama dipakai untuk tombol Tarik, isi meteran Benangmu, chip
"Layanganmu", garis atas lembar hasil dan dialog, serta tepi level yang sedang dimainkan. Semuanya berarti "milikmu"
atau "aksi utamamu"; di tempat lain biru tidak dipakai.

Layangan lawan berbentuk wajik yang sama tetapi bermotif lain supaya tidak hanya dibedakan warna: merah dibelah dua
(merah dan krem), kuning bergaris dua hitam, hijau berbulatan krem. Semua motif rekaan sendiri.

## Kepribadian

Seperti teman di atap sebelah yang ikut berteriak memberi aba-aba. Petunjuk muncul hanya saat perlu dan singkat
("Benang bersilangan! Tahan Tarik sekarang.", "Awas pohon! Tarik menjauh."). Kegagalan menyebut sebab yang spesifik
(siapa yang menarik, siapa yang mengulur, menyangkut di mana) dan satu saran yang bisa langsung dicoba.

## Palet

| Peran | Terang (sore) | Gelap (magrib) |
|---|---|---|
| Panel / latar halaman | `#FCF0E2` krem senja | `#1C1714` cokelat malam |
| Lembar (hasil, dialog, petunjuk, chip) | `#FFFAF3` | `#28201B` |
| Tinta | `#261A12` | `#F6EADB` |
| Tinta pendamping | `#664A3A` | `#CDB8A2` |
| Garis kontrol | `#8F705C` | `#A58A74` |
| Aksen tunggal | `#17577F` biru benang gelasan | `#93CCEC` biru muda |
| Teks di atas aksen | `#FFFFFF` | `#0E2433` |

Alasan: krem dan cokelat diambil dari tembok kapur dan genteng tanah liat, jadi panel terasa satu bahan dengan
kampungnya. Biru dipilih karena ia lawan warna jingga langit sore: benang dan layanganmu selalu yang paling cepat
ditemukan mata di antara benang lawan yang cokelat tua. Dua tema karena portal mengisi `data-theme` dan game ini juga
dimainkan malam hari di HP; tema mengikuti `prefers-color-scheme` dan dikalahkan oleh `data-theme="light|dark"` pada
`<html>`. Tema gelap bukan sekadar dibalik: langit magrib biru tua ke bara jingga, bulan sabit menggantikan matahari,
sebagian jendela menyala, benang lawan menjadi krem.

Warna dunia adalah isi, bukan warna antarmuka: langit sore `#F7E3C3` ke `#F5C99C` ke `#EFA273`, magrib `#172033` ke
`#3A2E2C` ke `#6E3C29`; genteng `#B85A3A`, tembok `#EDCDA6`, daun `#6F8B47`, bambu `#C9A15B`, kain `#C44A3A`; layangan
merah `#C8402F`, kuning `#E6AE34`, hijau `#3E8A4E`, biru `#2A78AE`, motif krem `#F6EAD2`. Semua benda bergaris tinta;
di tema gelap layangan diberi tepi krem tipis supaya garisnya tidak tenggelam di langit magrib.

### Kontras (dihitung dengan rumus WCAG lewat Node, bagian A skrip uji)

| Pasangan | Terang | Gelap |
|---|---|---|
| Tinta di panel | 15,10:1 | 14,98:1 |
| Tinta pendamping di panel (label, papan ketik) | 7,18:1 | 9,28:1 |
| Tinta di lembar, dialog, petunjuk, chip | 16,32:1 | 13,49:1 |
| Tinta pendamping di lembar (saran, status level) | 7,76:1 | 8,36:1 |
| Teks tombol Tarik, tombol utama, chip "Layanganmu" | 7,76:1 | 9,17:1 |
| Garis tombol vs panel / lembar (min 3:1) | 4,03 / 4,36:1 | 5,49 / 4,94:1 |
| Tombol Tarik dan isi meteran biru vs panel / dasar meteran | 6,91 / 7,47:1 | 10,23 / 8,36:1 |
| Cincin fokus tinta vs langit atas / bawah (cincin panggung) | 13,50 / 8,14:1 | 13,72 / 7,56:1 |
| Benangmu biru vs langit atas / bawah | 6,18 / 3,73:1 | 9,37 / 5,16:1 |
| Benangmu di depan tajuk pohon | tepi `#FFFAF3` 3,70:1, biru vs tepinya 7,47:1 | 6,88:1 |
| Benang lawan vs langit atas / bawah | 10,92 / 6,58:1 | 12,02 / 6,63:1 |
| Benang lawan vs tajuk pohon | 3,56:1 | 8,83:1 |
| Garis tepi layangan vs langit bawah | 7,95:1 | tepi krem `#F6EAD2` 13,65:1 |
| Badan layangan merah / kuning / hijau / biru vs langit magrib atas | | 3,28 / 8,11 / 3,83 / 3,41:1 |

Benang biru di tema terang hanya 2,02:1 terhadap tajuk pohon, jadi benangmu diberi garis tepi warna lembar selebar
1 px di kiri-kanannya. Meteran yang tipis diberi isi bergaris dan kata "tipis", tidak hanya berubah warna.

## Tipografi

- Judul, angka waktu dan skor, tombol Tarik dan tombol utama: **Sniglet** 800. Huruf bulat tebal yang ujungnya
  seperti digunting dari kertas minyak; belum dipakai game lain di portal, jadi judulnya langsung terbedakan.
- Teks: **Plus Jakarta Sans**, dirancang untuk identitas kota Jakarta dan nyaman untuk bahasa Indonesia; sama dengan
  keluarga game lain di portal ini.

## Tata letak

Satu kanvas memenuhi layar, tanpa gulir. Panel skor dan tombol kendali menindih kanvas dengan latar padat:

- HP potret (375x690): pita atas berisi judul, tombol Level dan Cara main, nama level, Waktu, Putus, meteran Benangmu,
  dan Angin. Pita bawah berisi tombol Kiri dan Kanan di bawah jempol kiri dan tombol Tarik yang lebar di bawah jempol
  kanan (semua setinggi 58 px). Langit di antaranya sekitar 480 px.
- Layar lebar dan HP mendatar (lanskap, lebar minimal 560 px): kolom kiri `clamp(250px, 23vw, 300px)` berisi panel
  yang sama plus petunjuk papan ketik; tombol kendali di dasar kolom. Langit di kanan setinggi layar. Bila tinggi
  layar di bawah 520 px, skor menjadi kisi 2x2 dan petunjuk papan ketik disembunyikan.
- Kamera selalu menampilkan 37 m tinggi (1 m di bawah tanah sampai 36 m), jadi skalanya ditentukan tinggi area.
  Lebar langit mengikuti lebar area: **29,2 m** di 375x690 (12,85 px/m) dan **54,4 m** di 1280x670 (18,1 px/m),
  dibatasi 22 sampai 64 m. Posisi mendatar (atap lawan, titik jaga, pohon, antena) ditulis sebagai pecahan lebar
  langit, jadi susunan tetap utuh di semua ukuran. Saat layar diputar di tengah permainan, posisi mendatar diskalakan.
- Petunjuk menempel di tepi atas langit, karena bagian bawah berisi atap, orang, dan pohon. Lembar hasil di HP potret
  juga di atas (sebab kegagalan hampir selalu di bawah: genteng, pohon, antena) dan di kolom kiri pada layar lebar.

Dial: ENERGY 2 / RHYTHM 1 / MOTION 2

RHYTHM 1 disengaja: satu layar permainan, satu fokus (titik tempat dua benang bersilang). MOTION 2 karena gerak
layangan, goyangan hidungnya, dan layangan putus yang melayang jatuh adalah isi permainan.

## Gerak

- Inti (tidak pernah dimatikan): gerak dan goyangan hidung layangan, benang yang melengkung saat diulur, percikan di
  titik gesek, layangan putus yang hanyut jatuh dengan sisa benangnya, sisa benang di sisi jangkar yang memudar.
- Hias (dimatikan oleh `prefers-reduced-motion`): awan yang bergeser, kibaran kain di tiang bambu, rumbai kertas di
  sudut layangan, goyangan tajuk pohon, kepulan asap, dan daun yang terbang saat hembusan. Saat gerak dikurangi, kain
  tetap digambar miring sesuai kekuatan angin dan asap digambar sebagai jejak diam yang condong searah angin, jadi
  informasi angin tidak hilang. Uji G memastikan dua tangkapan berselang 0,7 detik sama persis.

## Aturan permainan

1. Tiap level punya sejumlah layangan lawan, target putus, dan batas waktu. Menang bila jumlah putus mencapai target.
2. Gagal bila benangmu putus, layanganmu menyangkut di pohon atau antena, jatuh ke genteng atau gang, atau waktu habis.
3. Permainan dimulai saat kendali pertama ditekan (layangan dan waktu diam sebelum itu).
4. Kendali: tahan **Tarik** (Spasi atau panah atas) untuk menarik, lepas untuk mengulur. Tahan **Kiri** atau **Kanan**
   (panah kiri/kanan) untuk memiringkan hidung. Spasi atau Enter pada tombol kendali yang terfokus menahan kendali
   tombol itu. Sentuhan dan tetikus memakai tombol layar yang sama; tiap jari dicatat terpisah, jadi Tarik dan Kanan
   bisa ditahan bersamaan dengan dua jari.
5. Kemajuan: `localStorage` kunci `layangan-putus:kemajuan` berisi `{ terbuka, terbaik: { level: detik }, terakhir }`,
   dibungkus `try/catch`. Rekor per level adalah waktu menang tercepat. Bila penyimpanan diblokir, game tetap jalan dan
   lembar hasil memberi tahu.
6. Dialog Cara main dan Pilih level menjeda permainan; `Escape` atau klik di luar kotak menutupnya. Memilih level
   yang sedang dimainkan mengulangnya.

## Model layangan dan angka kalibrasi

Satuan meter dan detik, langkah simulasi tetap 1/120 detik, semua acak memakai benih per level (lawan, fase angin),
jadi urutan masukan yang sama selalu memberi hasil yang sama.

**Angin** bertiup ke kanan: `w = max(0,8; w0 * (1 + h * n(t)))`, dengan `n(t)` jumlah tiga gelombang
(0,55 / 0,3 / 0,15) berfrekuensi `f`, 2,3f, dan 5,1f, berfase acak per level. Komponen tegak kecil
`w0 * h * 0,22 * sin(...)`. Di dekat genteng angin lebih lemah: dikali 0,65 di ketinggian 6 m, naik ke 1 di 26 m.
Panel menampilkan Pelan (< 2,6 m/s), Sedang, Kencang (>= 4,2 m/s), ditambah "berhembus" saat hembusan kuat.

**Layangan** (pemain dan lawan memakai aturan yang sama). Laju mendekati laju sasaran secara eksponensial; arah
hidung `th` (0 = tegak, positif = miring kanan) adalah pegas teredam menuju sasaran ditambah goyangan alami.

| Keadaan | Laju sasaran | Sasaran hidung | Respons |
|---|---|---|---|
| Tarik | 7,5 m/s ke arah hidung + 0,35 x angin | miring 0,72 rad (41 derajat) bila Kiri/Kanan ditahan | 2,6 /s |
| Ulur | 0,9 x angin ke kanan, turun 1,6 m/s (+0,4 per m/s angin di bawah 3) | kembali tegak, miring 0,3 rad bila Kiri/Kanan | 1,4 /s |
| Ulur di ujung benang | merosot 0,8 m/s menyusuri busur benang, hembusan kuat mengangkat (`0,8 - 1,2 n`) | sama dengan ulur | 2 /s |
| Putus | 0,95 x angin, turun 1,6 m/s, hidung oleng +-1,25 rad | | 1,1 /s |

- Pegas hidung 14, redaman 6 (kembali ke sasaran dalam sekitar setengah detik). Goyangan alami 0,16 rad saat ditarik,
  0,10 rad saat diulur, dikali `1 + 1,6 h |n|`, jadi makin goyah di level yang anginnya berubah-ubah.
- **Panjang benang**: layangan tidak bisa lebih jauh dari panjang benangnya; laju yang menjauhi jangkar dibuang.
  Benangmu `hypot(0,92 x lebar langit - 3,65; 20)` m (30,6 m di HP potret, 50,5 m di laptop), cukup untuk hampir
  seluruh langit kecuali pojok kanan atas. Tanpa batas ini layangan yang diulur hanyut tanpa akhir, dan lawan tidak
  punya tempat untuk berjaga. Tanpa merosot di ujung benang, layangan yang sudah habis terulur hanya bisa naik
  (versi awal: bot terjebak 90 detik di ujung benang).
- Batas langit: atas 35 m, kiri 0,8 m, kanan lebar langit dikurangi 1,4 m.
- Benang digambar lurus saat ditarik atau tegang di ujung, melengkung sampai 3,5% panjangnya (maks 2,2 m) saat diulur.

## Gesekan benang

1. Benang dihitung sebagai ruas lurus dari tangan pelayang ke layangan. Dua benang mulai **terkait** saat ruasnya
   berpotongan. Setelah terkait, benang yang mundur melewati benang lain digambar tertekuk di titik kait, dan kaitan
   baru lepas bila titik potongnya meleset lebih dari **5 m** melewati ujung salah satu benang. Batas ini membuat
   gesekan tidak berkedip saat layangan menarik melewati benang lawan.
2. Laju benang: benang yang **ditarik** bergerak `6,5 x faktor x (0,5 + 0,5 x min(1,2; laju layangan / 7,5))` m/s;
   benang yang diulur atau diam bergerak 0. Layangan yang sudah melaju saat bergesek punya benang yang lebih cepat.
3. Kikisan per detik (kekuatan benang 100):

| Keadaan | Benang yang kalah | Benang yang menang |
|---|---|---|
| Satu menarik, satu diam/ulur | 20 x laju penarik x gelas penarik | 2 |
| Dua-duanya menarik | 5 + 20 x selisih laju x gelas | 5 |
| Dua-duanya diam | 3 | 3 |

   Contoh: menarik dengan laju penuh terhadap lawan yang diam memutus benang penuh dalam sekitar 0,8 detik.
4. Percikan: 70 per detik bila ada yang menarik, 18 bila dua-duanya diam. Titik gesek ditandai cincin putus-putus dan
   chip "Bergesek"; meteran kecil muncul di atas layangan lawan dan di bawah layanganmu selama 2,5 detik sesudahnya.
5. Benang lawan tidak saling bergesek; hanya benangmu yang beradu dengan mereka.

## Lawan (AI sederhana)

- **Jaga**: tiap lawan berjaga di ujung benangnya (panjang benang = jarak jangkar ke titik jaga) dan berkeliling
  sekitar titik itu (+-2,4 m mendatar, +-1,8 m tegak). Keputusan tiap 0,2 sampai 0,32 detik: sasaran di atas berarti
  tarik dengan hidung miring ke arah sasaran, di bawah berarti ulur, sejajar tapi di kiri berarti tarik miring kiri.
  Lawan selalu menarik menjauh bila kurang dari 7 m di atas genteng, kurang dari 3 m dari rintangan, atau di tepi kanan.
- **Incar dan sambar** (level 2 ke atas): bila layanganmu ada di sisi kiri-atas benang lawan (0,12 sampai 1,5 rad
  berlawanan arah jarum jam), tidak lebih dari 34 m dari jangkarnya, dan tidak di dekat genteng, lawan mengulur
  benangnya sampai 3,5 m lebih panjang dari jarak ke layanganmu, mendekat ke sudut 0,4 rad sebelum layanganmu, lalu
  menyambar ke 0,55 rad sesudahnya sambil menarik (paling lama 3,2 detik). Benang lawan yang menyambar sudah melaju,
  jadi kamu harus menarik lebih dulu. Hanya satu pemburu dalam satu waktu; jeda antar sambaran per level.
- **Saat terkait**: lawan yang menyambar terus menarik. Lawan yang sedang berjaga memutuskan sekali: membalas dengan
  peluang `melawan` setelah `reaksi` detik, atau diam dan mengulur.

### Level

| No | Nama | Lawan (target) | Waktu | Angin `w0` / `h` / `f` | Melawan, reaksi | Jeda sambar | Laju, gelas | Rintangan |
|---|---|---|---|---|---|---|---|---|
| 1 | Sore pertama | merah (1 dari 1) | 80 s | 3,0 / 0,15 / 0,16 | tidak pernah | tidak menyambar | 0,8 / 0,8 | pohon 0,30; antena 0,93 |
| 2 | Tetangga sebelah | kuning, merah (2 dari 2) | 90 s | 3,4 / 0,28 / 0,22 | 35%, 0,9 s | 16 s | 0,85 / 0,9 | pohon 0,28; antena 0,55 dan 0,85 |
| 3 | Angin bandel | hijau, kuning (2 dari 2) | 90 s | 3,8 / 0,45 / 0,30 | 60%, 0,6 s | 10 s | 0,9 / 1 | pohon 0,25 dan 0,62; antena 0,48 |
| 4 | Gang ramai | merah, hijau, kuning (2 dari 3) | 100 s | 4,0 / 0,55 / 0,36 | 80%, 0,45 s | 7 s | 0,95 / 1,05 | pohon 0,26 dan 0,90; antena 0,45 dan 0,67 |
| 5 | Raja langit sore | kuning, merah, hijau (3 dari 3) | 110 s | 4,4 / 0,70 / 0,44 | 85%, 0,36 s | 5 s | 1 / 1,1 | pohon 0,22 dan 0,66; antena 0,42 dan 0,88 |

Pohon setinggi 12,5 sampai 13 m dengan tajuk berjari-jari 3,2 sampai 3,6 m; antena di bubungan, puncaknya 11,5
sampai 13,5 m, dengan tiga palang. Antena yang jatuh di gang digeser ke genteng terdekat; tiap pelayang punya atapnya
sendiri.

### Sebab kegagalan

| Sebab | Kapan | Saran |
|---|---|---|
| Benangmu putus (mengulur) | benangmu habis saat kamu tidak menarik; teks membedakan "lawan menarik" dan "sama-sama mengulur" | begitu benang bersilangan, langsung tahan Tarik sampai salah satu putus |
| Kalah cepat menarik | dua-duanya menarik, laju benang lawan lebih tinggi | mulai tarik sebelum benang bersentuhan |
| Benangmu aus | dua-duanya menarik sama cepat, benangmu sudah tipis dari gesekan sebelumnya (persen saat bersilangan disebut) | jauhi layangan yang menarik bila meteran tinggal sedikit, serang yang diam |
| Menyangkut di pohon mangga / antena TV (hanyut) | menabrak saat diulur atau kurang dari 0,35 detik setelah melepas Tarik | jangan mengulur lama di dekatnya, tarik sebentar supaya naik |
| Menyangkut di pohon mangga / antena TV (ditarik) | menabrak saat ditarik | lihat arah hidung sebelum menarik |
| Jatuh ke genteng (atau gang) | layangan turun sampai atap | tahan Tarik dengan hidung tegak saat mulai rendah |
| Waktu habis | belum pernah bergesek / sudah bergesek N kali | ulur ke kanan bawah benang lawan lalu tarik / tahan Tarik lebih lama dengan hidung miring ke kanan |

### Hasil kalibrasi (puppeteer, simulasi dimajukan lewat kait)

Bot uji ("ulur ke titik 4 m di kanan bawah benang lawan, tarik bila rendah atau dekat rintangan, tahan Tarik dan Kanan
saat terkait"), dengan waktu reaksi 0 / 0,4 / 0,7 detik saat benang bersilangan:

| Level | 1280x670 (54,4 m) | 375x690 (29,2 m) |
|---|---|---|
| 1 | menang 13,9 / 14,4 / 14,7 s | menang 7,2 / 7,6 / 7,9 s |
| 2 | menang 15,8 / 15,9 / 16,1 s (benang tersisa 82 / 48 / 22%) | menang 9,0 / 9,5 / 9,8 s |
| 3 | menang 19,7 / 19,2 / 19,0 s (benang 66 / 29 / 1%) | menang 8,3 / 16,1 / 11,6 s |
| 4 | menang 13,9 s / kalah cepat / putus mengulur | menang 10,5 / 7,4 / 7,6 s |
| 5 | menang 33,0 s / aus / putus mengulur | menang 17,3 / 20,6 s / aus |

Pemain pasif (hanya menjaga ketinggian 18 m, tidak pernah menarik saat terkait) kalah karena mengulur di level 3
sampai 5 dalam 4 sampai 27 detik; di level 2 kadang menang karena tarikannya untuk menjaga ketinggian kebetulan jatuh
saat terkait. Batas waktu 80 sampai 110 detik sengaja longgar dibanding bot, karena pemain manusia butuh waktu membaca
angin dan menempatkan layangan. Langit HP lebih sempit, jadi benang lebih cepat bertemu; di laptop lebih banyak
manuver dan level 4 sampai 5 lebih berat.

## Kait uji

`window.__layanganPutus`:

- `keadaan()`: status (`siap`, `main`, `menang`, `gagal`), level, namaLevel, waktu, sisaWaktu, target, putus, gesek,
  lebarLangit, skalaPxPerM, angin, masukan, pemain (posisi, laju, hadap derajat, tarik, kuat, putus, nyangkut, atap),
  jangkar, lawan (warna, posisi, jangkar, tarik, kuat, putus, mode AI, kait: titik, peran, laju benang dua pihak),
  rintangan, penyebab (jenis, judul, sebab, saran), hasilTampil, judulHasil, kemajuan, gerakHias, petunjuk, fokus.
- `masukan({ tarik, kiri, kanan })` (sama dengan menahan tombol), `maju(detik)`, `jalankan([{ lama, tarik, kiri,
  kanan }])` (urutan terskrip, langkah tetap), `mulai()`, `mulaiLevel(n)` (mengabaikan kunci), `bukaSemua()`,
  `hapusKemajuan()`, `taruh(x, y, hadap)`, `taruhLawan(i, x, y, hadap)`, `kendaliLawan(i, { tarik, arah } | null)`,
  `layar(x, y)` (meter ke piksel), `bekukan(bool)`, `modeKartu(bool)`, `contohKartu()`.
- Gambar kartu 480x480: buka di viewport 480x480 dengan tema terang, panggil `window.__layanganPutus.contohKartu()`,
  tunggu satu bingkai, lalu tangkap layar. Hasilnya layanganmu (biru) dan layangan kuning tinggi di langit sore,
  benangnya bersilang membentuk X dengan percikan dan cincin di titik gesek, meteran kuning yang tinggal 44%,
  layangan merah di kanan, matahari rendah, dan deret genteng dengan pelayangnya di bawah.

Skrip uji: `alat/uji-layangan-putus.mjs` di scratchpad sesi (mode `asap`, `eval`, `lengkap`), dengan bot di
`alat/bot-layangan.js` dan tangkapan adegan di `alat/lihat-layangan.mjs`.
