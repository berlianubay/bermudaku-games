# Gebok Sandal: arah desain

> Arah dari pemilik (4 November 2026): game browser orisinal untuk Bermudaku Games. Tampak samping halaman kampung
> sore hari, kaleng bekas berlabel rekaan di atas bangku kayu, pemain melempar sandal jepit dari kiri untuk
> menjatuhkan semua kaleng ke tanah. Tiga sandal per babak, minimal lima level. Nama, gambar, teks, dan kode dibuat
> sendiri; semua gambar digambar dengan Canvas 2D, tanpa berkas gambar.

Design Read: game lempar kasual satu layar untuk pemain portal (laptop dan HP), dengan bahasa visual ilustrasi
kampung sore yang hangat, dial ENERGY 2 / RHYTHM 1 / MOTION 2.

## Identitas

Permainan "gebok kaleng" di halaman rumah: tembok pagar setengah badan yang plesterannya terkelupas, atap genteng
tetangga, pohon jambu, tanah halaman berkerikil, peti kayu tempat sandal, dan bangku kayu berisi kaleng bekas.

Motif identitas: **tali hijau sandal jepit**. Sandal yang dilempar bersol putih dengan lapisan bawah dan tali hijau;
hijau yang sama muncul di ikon sandal tersisa (tampak atas, tali bentuk Y), titik pratinjau bidikan, garis atas lembar
hasil dan dialog, tombol utama, tepi level yang sedang dimainkan, dan tanda "Masih di bangku" / "Kena kucing".
Semuanya momen penting (membidik, hasil, pilihan berikutnya); di tempat lain hijau tidak dipakai.

Detail kecil yang sengaja: karat dan penyok di kaleng, lelehan cat di kaleng cat bekas, petak bata di plesteran
yang terkelupas, bayangan sore memanjang ke kiri, kucing belang oranye-putih yang tidur melingkar.

Label kaleng hanya nama isi yang umum (SARDEN, SUSU, KACANG, dan kaleng cat polos), tanpa merek, logo, atau
tiruan kemasan sungguhan.

## Kepribadian

Santai dan jujur seperti teman yang ikut menonton. Setiap lemparan dinilai singkat ("Terlalu tinggi: sandal lewat di
atas kaleng."). Kegagalan menyebut sandal ke berapa, apa yang terjadi, berapa kaleng tersisa, dan satu saran yang bisa
langsung dicoba, bukan "Game over".

## Palet

| Peran | Terang (sore) | Gelap (magrib) |
|---|---|---|
| Panel / latar halaman | `#FBEEDB` krem sore | `#1D1714` cokelat malam |
| Lembar (hasil, dialog, petunjuk) | `#FFFAF2` | `#2A211C` |
| Tinta | `#2B1D14` kopi tua | `#F5E9D9` krem |
| Tinta pendamping | `#694C37` | `#CDB59C` |
| Garis kontrol | `#8C6D55` | `#A88B72` |
| Aksen tunggal | `#1E6B45` hijau tali sandal | `#8ED3A6` hijau muda |

Alasan: krem dan cokelat kopi diambil dari tembok kapur dan kayu bangku, jadi panel terasa satu bahan dengan halaman.
Hijau tali sandal jepit adalah satu-satunya aksen karena ia sudah hidup di benda utama (sandal), dan hijau adalah
lawan warna yang paling terbaca di langit jingga sore. Dua tema karena portal mengisi `data-theme` dan game ini juga
dimainkan malam hari di HP; tema mengikuti `prefers-color-scheme` dan dikalahkan oleh `data-theme="light|dark"` pada
`<html>`. Tema gelap bukan sekadar dibalik: langit magrib, bulan menggantikan matahari, jendela tetangga menyala.

Warna dunia adalah isi, bukan warna antarmuka: langit `#F8E6C6` ke `#F3B983`, tembok `#EDD3B0`, tanah `#B98B5C`,
kayu bangku `#9C5D30`, label merah `#C2452D`, krem `#EFE2C4`, kuning `#E2A62B`, kucing `#E49A4B`. Semua benda bergaris
tinta tebal supaya terbaca di dua tema. Pada tema gelap benda (kaleng, sandal, kucing) memakai warna yang sama lalu
diredupkan satu lapis tipis, supaya tetap satu cahaya dengan lingkungannya.

### Kontras (dihitung dengan rumus WCAG lewat Node, bagian A skrip uji)

| Pasangan | Terang | Gelap |
|---|---|---|
| Tinta di panel | 14,24:1 | 14,80:1 |
| Tinta pendamping di panel (label, papan ketik) | 6,82:1 | 9,02:1 |
| Tinta di lembar, dialog, petunjuk | 15,68:1 | 13,16:1 |
| Tinta pendamping di lembar (saran, status level) | 7,51:1 | 8,02:1 |
| Teks tombol utama dan chip tanda di hijau | 6,47:1 | 8,87:1 |
| Garis tombol vs panel / lembar (min 3:1) | 4,14 / 4,56:1 | 5,57 / 4,95:1 |
| Cincin fokus tinta vs panel / lembar | 14,24 / 15,68:1 | 14,80 / 13,16:1 |
| Tali hijau ikon sandal vs panel | 5,66:1 | 10,14:1 |
| Ikon sandal terpakai (garis putus-putus) vs panel | 6,82:1 | 9,02:1 |
| Titik pratinjau hijau vs cincin lembar di sekelilingnya | 6,23:1 | 9,02:1 |
| Garis tarikan dan tanda tepi layar (tinta) vs langit atas / bawah / tembok | 13,29 / 9,37 / 11,29:1 | 15,52 / 11,42 / 10,48:1 |
| Garis putus-putus hijau "Masih di bangku" vs tembok | 4,48:1 | 7,18:1 |

## Tipografi

- Judul, angka skor, tombol utama: **Titan One**. Huruf bulat tebal seperti cap timbul di sol sandal karet dan tulisan
  cat di papan warung; angka "0/6" besar dan langsung terbaca.
- Teks: **Plus Jakarta Sans**, dirancang untuk identitas kota Jakarta dan nyaman untuk bahasa Indonesia; sama dengan
  keluarga game lain di portal ini.

## Tata letak

Satu kanvas memenuhi layar, tanpa gulir. Panel skor menindih kanvas dengan latar padat:

- HP potret (375x690): pita atas berisi judul, tombol Level dan Cara main, nama level, ikon sandal tersisa, kaleng
  jatuh, dan bidikan (sudut, tenaga). Lebar layar yang membatasi skala, jadi sisa tinggi dipakai untuk menurunkan
  halaman ke sepertiga bawah; tanah di bawahnya menampung petunjuk tanpa menutupi peti atau bangku.
- Layar lebar (lanskap, lebar minimal 700 px): kolom kiri `clamp(240px, 23vw, 300px)` berisi panel yang sama plus
  petunjuk papan ketik. Halaman di kanan.
- Kamera membingkai dari peti pelempar (-24 cm) sampai 232 cm dan minimal 180 cm di atas tanah. Lembar hasil muncul di
  bawah pada HP dan di kolom kiri pada layar lebar; kamera memakai sisa area dan melebar ke kanan bila kaleng atau
  sandal terlempar jauh.
- Seluruh panggung adalah area seret, kecuali tombol, dialog, dan lembar hasil. Di HP sandal ada di tepi kiri layar,
  jadi seretan boleh dimulai dari mana saja; yang dihitung adalah arah dan panjang tarikan.

Dial: ENERGY 2 / RHYTHM 1 / MOTION 2

RHYTHM 1 disengaja: satu layar permainan, satu fokus (susunan kaleng). MOTION 2 karena lemparan dan robohnya kaleng
adalah isi permainan.

## Gerak

- Inti (tidak pernah dimatikan): lemparan, putaran dan pantulan sandal, kaleng terguling dan jatuh, kamera bergeser
  saat lembar hasil muncul, kucing terbangun saat kena sandal.
- Hias (dimatikan oleh `prefers-reduced-motion`): tajuk pohon dan rumput bergoyang, daun pot bergoyang, napas kucing
  tidur, kibasan telinga kucing saat tersenggol kaleng, dan kepulan debu saat kaleng menyentuh tanah. Uji G memastikan
  dua tangkapan layar berselang 0,7 detik sama persis saat gerak dikurangi.

## Aturan permainan

1. Kaleng disusun di atas bangku. Babak menang bila semua kaleng menyentuh tanah (atau pusatnya turun lebih dari 8 cm di
   bawah bangku terendah, misalnya tertahan sandal yang tergeletak).
2. Membidik: seret ke belakang seperti ketapel. Arah tarikan (dibalik) adalah sudut lemparan, -10 sampai 80 derajat;
   panjang tarikan dibanding `clamp(30% sisi pendek layar, 100, 190 px)` adalah tenaga 0 sampai 100%. Tarikan ke depan
   dijepit ke batas sudut terdekat. Tarikan di bawah 12% atau klik tanpa seret tidak melempar dan memberi petunjuk.
3. Papan ketik: panah atas/bawah mengubah sudut 1 derajat, kiri/kanan mengubah tenaga 1%, `Shift` membuat langkahnya
   5. `Spasi` atau `Enter` melempar. Bidikan tetap tersimpan antar lemparan.
4. Pratinjau hanya 0,2 detik awal lintasan (7 titik hijau). Sesudah melempar, jejak lintasan lemparan terakhir tetap
   terlihat sebagai titik cokelat, jadi pemain menakar dari lemparan sebelumnya.
5. Lemparan dinilai saat semua benda tenang (laju < 3 cm/s, putaran < 0,5 rad/s), paling cepat 1 detik, paling lambat
   7 detik. Pesan singkat muncul sebagai petunjuk dan diumumkan ke pembaca layar.
6. Nilai: kaleng jatuh `n/total` dan sandal tersisa. Gagal bila sandal habis dan masih ada kaleng di bangku, atau bila
   sandal mengenai kucing (langsung berhenti). Kucing boleh tersenggol kaleng.
7. Kemajuan: `localStorage` kunci `gebok-sandal:kemajuan` berisi `{ terbuka, terbaik: { level: sisaSandal }, terakhir }`,
   dibungkus `try/catch`. Bila penyimpanan diblokir, game tetap jalan dan lembar hasil memberitahu.
8. Dialog Cara main dan Pilih level menjeda fisika; `Escape` atau klik di luar kotak menutupnya. Memilih level yang
   sedang dimainkan mengulangnya.

### Level

| No | Nama | Susunan | Bangku (x cm, tinggi) |
|---|---|---|---|
| 1 | Piramida kaleng | piramida 3-2-1 di ujung kanan | 96-190, 45 |
| 2 | Menara kaleng | 5 kaleng tegak | 96-190, 45 |
| 3 | Dua bangku | piramida 2-1 di dingklik depan dan di bangku tinggi belakang | 78-130, 32 dan 154-212, 56 |
| 4 | Di balik pot | pot tanah liat statis di depan piramida 3-2-1 | 96-196, 45 |
| 5 | Kucing tidur | kucing statis di ujung kiri, piramida 3-2-1 di kanan | 86-200, 45 |
| 6 | Papan titian | papan 54 cm di atas dua kaleng, 3 + 2 kaleng di atas papan | 96-196, 45 |

Susunan selalu dekat ujung kanan bangku seperti rak lempar kaleng: kaleng yang terdorong ke belakang langsung jatuh,
sedangkan bagian kiri bangku yang kosong menjadi tempat mendarat lemparan yang kurang jauh. Versi pertama menaruh
piramida di tengah bangku 110 cm; hasilnya tidak ada satu pun dari 289 lemparan yang menjatuhkan lebih dari 3 kaleng.

### Sebab kegagalan

Dinilai dari lemparan terakhir, memakai sentuhan pertama sandal dan kotak pembatas kaleng sebelum lemparan.

| Sebab | Kapan | Saran |
|---|---|---|
| Lemparan terlalu tinggi | tidak menyentuh kaleng, mendarat di kanan susunan, sudut 50 derajat atau lebih | turunkan sudut; titik hijau hanya awal lintasan |
| Lemparan terlalu kuat | sama, sudut di bawah 50 derajat | kurangi tenaga, biarkan sudut |
| Lemparan kurang jauh | mendarat di tanah atau bangku di kiri susunan | tambah tenaga (atau naikkan sudut bila di bawah 25 derajat) |
| Lemparan terlalu rendah | menabrak sisi atau kaki bangku di kiri susunan | naikkan sudut |
| Tertahan pot bunga | sentuhan pertama pot | naikkan sudut di atas 50 derajat |
| Kenanya kurang keras | kena kaleng tapi tidak ada yang jatuh | tambah tenaga, lempar lebih datar |
| Meleset tipis | mendarat di sela kaleng tanpa menyentuhnya | ubah sudut satu atau dua derajat |
| Kaleng bawah masih berdiri | semua sisa kaleng di baris bawah | incar baris bawah dengan lemparan datar kuat |
| Bangku belakang belum bersih | level 3, semua sisa di bangku tinggi | naikkan sudut dan tenaga |
| Kucingnya kena sandal | sandal menyentuh kucing: terlalu datar, turun tepat di kucing, atau memantul dari kaleng | naikkan sudut / tambah tenaga / lempar lebih kuat ke bawah susunan |

## Fisika dan angka kalibrasi

Pustaka: **planck.js 1.5.1** (port Box2D, lisensi MIT), disalin dari `tumpuk-kerupuk/planck.min.js` beserta header
lisensinya ke `public/games/gebok-sandal/planck.min.js` dan dimuat dengan path relatif. Mengikuti catatan Tumpuk
Kerupuk: planck dipilih karena tumpukan rapi tidak merayap.

| Besaran | Nilai |
|---|---|
| Satuan fisika | 1 satuan planck = 10 cm |
| Langkah fisika | 1/120 detik, iterasi kecepatan 10, posisi 8 |
| Gravitasi | 520 cm/s² (setengah gravitasi bumi supaya lengkung masih terbaca) |
| Laju lempar | 140 cm/s (tenaga 0) sampai 500 cm/s (tenaga 100%) |
| Putaran sandal | 7 sampai 15 rad/s searah jarum jam, naik dengan tenaga |
| Titik lempar | 2 cm di atas peti setinggi 34 cm; sandal mundur sampai 7 cm saat ditarik penuh |
| Pra-simulasi | 2 detik sebelum level tampil, supaya susunan tenang dan tidur |

| Benda | Ukuran (cm) | Bentuk fisika | Massa jenis | Gesek | Pantul |
|---|---|---|---|---|---|
| Kaleng | 13 x 17, sudut dipotong 1,2 | segi delapan | 0,5 | 0,4 | 0,12 |
| Sandal | 26 x 3,4 | segi enam, `bullet` | 5 (sekitar 4 kali massa kaleng) | 0,7 | 0,3 |
| Papan (level 6) | 54 x 3 | kotak dinamis | 0,6 | 0,6 | 0,05 |
| Bangku, dingklik | dudukan 5 / 4 tebal, kaki 5 lebar | kotak statis | | 0,6 | 0,05 |
| Pot | alas 18, bibir 26, tinggi 26 | trapesium statis | | 0,7 | 0,05 |
| Kucing | 37 x 16,5 | poligon statis | | 0,9 | 0 |

Kaleng di tampak samping adalah persegi panjang; sudut yang dipotong membuatnya bisa terguling berkali-kali
(menggelinding ujung ke ujung) saat didorong, tetapi alas dan tutupnya tetap datar sehingga tumpukan stabil. Tali sandal
dan daun pot hanya gambar.

### Skala layar

Skala `s = min(lebar area / lebar bingkai, (tinggi area - pita tanah) / 180)` px per cm, dengan area = layar dikurangi
panel. Terukur: **3,28 px/cm** di 1280x670 (kaleng sekitar 43 x 56 px) dan **1,47 px/cm** di 375x690 (sekitar 19 x 25 px).

### Hasil kalibrasi (puppeteer, waktu dimajukan lewat kait)

- Kestabilan: keenam level didiamkan 30 detik tanpa lemparan, geser maksimum 0,000 cm, tidak ada yang jatuh. Level 2
  (menara) dan 6 (papan) juga didiamkan 31 detik waktu nyata: geser 0 cm.
- Peta satu lemparan (sudut -5 sampai 75 derajat tiap 5, tenaga 20 sampai 100% tiap 5, 289 lemparan per level):
  di level 1, 34 bidikan menjatuhkan 4 kaleng atau lebih dan 2 di antaranya langsung membersihkan bangku; di level 5,
  92 bidikan mengenai kucing.
- Pencarian berkas (lebar 3) menemukan penyelesaian untuk semua level dalam 3 sandal: level 1 `20/85%`, level 2
  `30/90%`, level 3 `15/100%`, level 4 `30/100%, 45/55%, 50/50%`, level 5 `25/85%, 30/70%`, level 6 `20/100%, 15/80%`.
  Level 4 paling sulit: pot memaksa lemparan pertama datar-kuat lalu lemparan tinggi untuk sisanya.

## Kait uji

`window.__gebokSandal`:

- `keadaan()`: status (`bidik`, `terbang`, `menang`, `gagal`), level, namaLevel, sandalSisa, kalengJatuh, kalengTotal,
  sudut, tenaga, siap, lemparan (riwayat: sudut, tenaga, jenis, pesan, jatuh, sentuhan pertama, puncak), penyebab
  (jenis, judul, sebab, saran), hasilTampil, judulHasil, kemajuan, kucingBangun, skalaPxPerCm, gerakHias, tarikMaksPx,
  petunjuk, fokus, daftar kaleng (x, y, sudut, jatuh, geser dari posisi awal), daftar sandal.
- `bidik(sudut, tenaga)`, `lempar(sudut, tenaga)`, `lemparSampaiDiam(sudut, tenaga)`, `maju(detik)`, `selesaikan()`,
  `mulaiLevel(n)` (mengabaikan kunci), `bukaSemua()`, `hapusKemajuan()`, `layarSandal()`, `bekukan(bool)`,
  `modeKartu(bool)`, `contohKartu()`.
- Gambar kartu 480x480: buka di viewport 480x480 dengan tema terang (`prefers-color-scheme: light` atau
  `data-theme="light"`), panggil `window.__gebokSandal.contohKartu()`, tunggu satu bingkai, lalu tangkap layar.
  Hasilnya sandal jepit rata dengan tali hijau di atas, melayang tepat sebelum menghantam piramida level 1, dengan jejak
  lengkung lemparannya di belakang. Fungsi ini mencoba bidikan lengkung sampai pose sandal terbaca (saat ini 50 derajat,
  46%); sandal tidak diputar secara buatan.

Skrip uji: `alat/uji-gebok-sandal.mjs` di scratchpad sesi (mode `lengkap`, `pecahkan`, `kalibrasi`, `lihat`).
