# Potong Martabak: arah desain

> Arah dari agen utama Bermudaku Games (4 November 2026): game orisinal untuk portal games.bmdku.com.
> Martabak manis bundar terbuka (gaya terang bulan) di atas piring, dilihat dari atas. Tamu datang,
> martabak harus dibagi serata mungkin dengan potongan lurus. Tidak meniru game mana pun; semua gambar
> dilukis dengan Canvas 2D.

## Identitas

Game singkat satu layar tentang keadilan kecil sehari-hari: membagi martabak untuk tamu.
Dunianya gerobak martabak dan meja ruang tamu: piring keramik, pisau dapur, martabak terang bulan
yang permukaannya penuh pori sarang, dengan topping yang diacak tiap babak (cokelat meses, keju parut,
kacang tanah, atau campur). Topping hanya hiasan, tidak memengaruhi hitungan.

Motif identitas: **martabak yang dibelah**. Muncul di ikon pilihan tamu (lingkaran dengan 2, 3, atau 4
garis lewat pusat, persis jumlah potongan yang tersedia), di garis pisau, dan di label persen yang
menempel di tiap potongan. Ikon pilihan tamu sekaligus memberi tahu bentuk potongan yang ideal.

## Kepribadian

Hangat dan sedikit jahil, seperti tuan rumah yang diperhatikan tamunya. Hasil tidak pernah sekadar angka:
judulnya membaca suasana meja ("Ada yang melirik piring sebelah"), komentarnya menyebut berapa tamu yang
dirugikan, dan selalu ada satu saran yang bisa langsung dicoba.

## Palet

| Peran | Terang | Gelap |
|---|---|---|
| Latar | `#F7EFE1` kertas alas kotak martabak | `#1C1410` gerobak malam |
| Tinta | `#2D1C12` cokelat meses | `#F6EADB` krem |
| Tinta pendamping | `#69513F` | `#CDB8A3` |
| Garis kontrol | `#8B6F59` | `#A08670` |
| Lembar hasil | `#FFF9F0` | `#2A1F19` |
| Aksen tunggal | `#B3261E` merah cat gerobak | `#F2836F` merah muda (teks di atasnya `#2A0D08`) |

Dua warna inti (krem dan cokelat meses) diambil dari martabak itu sendiri dan kertas alas kotaknya,
supaya antarmuka terasa satu dunia dengan makanannya. Aksen merah meniru cat tulisan di kaca gerobak
martabak, dan hanya muncul di tiga tempat: garis pisau saat bermain, label potongan terkecil (bagian
yang membuat tamu protes), dan tombol "Potong lagi". Dua tema karena martabak manis paling sering dibeli
malam hari; portal mengisi `data-theme` dan game mengikutinya, selain `prefers-color-scheme`.

Warna dunia (martabak, piring, pisau, label di kanvas) sengaja sama di kedua tema, karena itu benda
nyata di atas meja. Piring sedikit diredupkan di tema gelap (`#E9E2D7` alih-alih `#FBF8F3`) supaya
tidak menyilaukan.

### Kontras (dihitung dengan rumus WCAG lewat Node)

| Pasangan | Rasio | Syarat |
|---|---|---|
| Tinta di latar, terang | 14,29 | 4,5 |
| Tinta di lembar, terang | 15,59 | 4,5 |
| Tinta pendamping di latar / lembar, terang | 6,45 / 7,04 | 4,5 |
| Garis kontrol di latar / lembar, terang | 4,07 / 4,44 | 3 |
| Putih di tombol aksen, terang | 6,54 | 4,5 |
| Aksen di latar, terang (batas tombol) | 5,72 | 3 |
| Tinta di latar / lembar, gelap | 15,31 / 13,54 | 4,5 |
| Tinta pendamping di latar / lembar, gelap | 9,49 / 8,39 | 4,5 |
| Garis kontrol di latar / lembar, gelap | 5,31 / 4,69 | 3 |
| Teks `#2A0D08` di tombol aksen, gelap | 7,12 | 4,5 |
| Aksen di latar / lembar, gelap | 7,13 / 6,31 | 3 |
| Label kanvas biasa: `#2D1C12` di `#FFF9F0` | 15,59 | 4,5 |
| Label terbesar: `#FFF9F0` di `#2D1C12` | 15,59 | 4,5 |
| Label terkecil: `#FFFFFF` di `#B3261E` | 6,54 | 4,5 |
| Garis pisau `#B3261E` di halo `#FFF9F0` | 6,24 | 3 |
| Garis seretan terlalu pendek `#6E5A4A` di halo | 6,22 | 3 |
| Garis penunjuk label `#2D1C12` di piring terang / gelap | 15,41 / 12,57 | 3 |

Garis pisau merah di atas martabak keemasan hanya 2,23:1, karena itu garis pisau selalu digambar di atas
halo krem selebar 4 px. Label persen selalu punya latar padat sendiri, jadi kontrasnya tidak bergantung
pada topping di bawahnya.

## Tipografi

- Judul, angka kerataan, tombol utama: **Alfa Slab One**. Huruf slab tebal ini mirip tulisan tangan
  bercat di kaca gerobak martabak, dan angkanya lebar sehingga skor terbaca sekilas.
- Teks dan label persen di kanvas: **Plus Jakarta Sans** (400, 600, 700). Dirancang untuk bahasa Indonesia,
  sama dengan keluarga app lain di D:\Claude, dan angka tebalnya tetap jelas di ukuran 11 px.

## Tata letak

Satu layar tanpa gulir, satu fokus: piring.

- Potret (HP): kepala (judul, Cara main), pilihan tamu, piring, lalu petunjuk di bawah jempol. Saat hasil
  tampil, pilihan tamu disembunyikan dan lembar hasil menggantikan petunjuk, supaya piring berlabel tetap
  sekitar 300 px. "Potong lagi" mengembalikan pilihan tamu.
- Lanskap atau laptop: piring di kiri mengisi tinggi layar, kolom kanan berisi kepala, pilihan tamu,
  dan petunjuk atau hasil. Di HP mendatar (tinggi di bawah 520 px) kolom kanan dirapatkan.
- Piring selalu bulat di tengah kanvas: jari-jari martabak 35,5% sisi terpendek, piring 47,5%. Cincin di
  antaranya menjadi tempat label untuk potongan yang terlalu kecil.

Dial: ENERGY 2 / RHYTHM 1 / MOTION 2

RHYTHM 1 karena hanya ada satu layar. MOTION 2 karena gerak terikat aksi pemain (lihat Gerak).

## Gerak

- Saat memotong, pisau dapur (bilah baja, gagang kayu) meluncur sepanjang tali busur selama 0,3 detik dan
  meninggalkan bekas potongan. Setelah itu potongan bergeser sedikit menjauh dari pusat (celah 1,2% jari-jari)
  supaya bekas potongan terbaca.
- Setelah potongan terakhir, potongan merenggang ke 4% jari-jari dalam 0,32 detik, lalu label persen dan
  lembar hasil muncul.
- `prefers-reduced-motion`: pisau tidak meluncur dan potongan langsung pada posisi akhir. Potongannya
  sendiri (gerak inti) tetap terjadi.
- Tidak ada gerak berulang atau gerak saat diam.

## Aturan permainan

- Jumlah tamu 4, 6, atau 8 (bawaan 8, pilihan terakhir diingat). Jumlah potongan = tamu / 2.
- Satu potongan = garis lurus tak berujung. Tetikus atau sentuh: seret garis; pratinjau garis pisau tampil
  selama menyeret (abu-cokelat bila masih terlalu pendek, merah bila sudah cukup).
- Ditolak dengan petunjuk: seretan lebih pendek dari 30% diameter; garis yang tidak mengenai martabak
  (jarak dari pusat 98,5% jari-jari atau lebih, atau hanya menyerempet tanpa memotong); garis yang tepat
  menimpa potongan sebelumnya. Escape membatalkan seretan.
- Papan ketik: saat martabak difokus lewat papan ketik, garis pemandu tampil. Panah kiri/kanan memutar
  3 derajat (Shift: 0,5 derajat), panah atas/bawah menggeser garis 2% jari-jari (Shift: 0,5%) sampai
  maksimal 95%, Enter atau Spasi memotong. Petunjuk menuliskan sudut dan geseran garis pemandu.
  Sudut awal pemandu acak (kelipatan 3 derajat), geseran awal 0.
- Tidak ada undo. "Potong lagi" memberi martabak baru dengan topping acak (tidak sama dengan sebelumnya).

### Geometri

Martabak didekati poligon cembung 128 sudut berjari-jari 1. Garis disimpan sebagai sudut θ (0 sampai 180
derajat) dan geseran d, yaitu jarak bertanda dari pusat sepanjang normal n = (−sin θ, cos θ). Tiap garis
membelah setiap poligon yang dilaluinya (Sutherland-Hodgman untuk satu bidang), jadi semua potongan tetap
cembung. Luas dengan rumus shoelace, titik berat dengan rumus titik berat poligon. Belahan yang lebih kecil
dari 0,002% luas dianggap sisa pembulatan dan tidak dihitung sebagai potongan.

### Kerataan

```
ideal_i  = luas total / jumlah tamu    untuk i = 1 .. tamu
ideal_i  = 0                           untuk potongan lebih (i > tamu)
luas_i   = 0                           untuk tamu yang tidak kebagian (potongan < tamu)
Kerataan = 100 x (1 − Σ |luas_i − ideal_i| / (2 x luas total))
```

Potongan diurutkan dari yang terbesar dan dibagikan ke tamu lebih dulu (pembagian ini meminimalkan selisih).
Potongan lebih punya ideal 0, jadi remah di tengah ikut mengurangi kerataan; tamu tanpa potongan dihitung
mendapat 0. Nilainya antara 0 dan 100; 100 berarti tiap tamu mendapat tepat 1/tamu bagian dan tidak ada sisa.
Contoh: 4 tamu dengan 5 potongan masing-masing 20% memberi 80.

Ditampilkan dengan satu desimal. Rekor disimpan per jumlah tamu di `localStorage` dengan kunci
`potong-martabak:rekor` (objek `{ "4": 98.7, "8": 96.1 }`), pilihan tamu di `potong-martabak:tamu`.
Keduanya dibungkus try/catch; kalau penyimpanan gagal, hasil menyebutnya dan permainan tetap jalan.

### Judul, komentar, saran

| Kerataan (dibulatkan 1 desimal) | Judul |
|---|---|
| 99 ke atas | Rata seperti ditimbang |
| 97 ke atas | Hampir rata |
| 93 ke atas | Lumayan rata |
| 85 ke atas | Ada yang melirik piring sebelah |
| di bawahnya | Tamu mulai protes |

Kalau separuh tamu atau lebih tidak kebagian atau mendapat potongan terlalu kecil, judulnya
"Tamu mulai protes" berapa pun angkanya (tiga garis sejajar ditambah satu garis tegak memberi 89,1,
padahal 4 dari 8 tamu dirugikan).

Komentar menyebut fakta dari potongan: berapa tamu tidak kebagian, berapa tamu mendapat potongan
**terlalu kecil** (di bawah 4/5 bagian adil, misalnya di bawah 10,0% untuk 8 tamu), dan berapa potongan
lebih yang tersisa. Saran dipilih satu, berurutan:

1. Ada tamu tidak kebagian: buat semua garis bersilangan di satu titik di tengah.
2. Garis paling meleset 4% jari-jari atau lebih dari pusat: sebutkan angkanya, arahkan lewat titik tengah.
3. Selisih jarak sudut antargaris 2 derajat atau lebih dari ideal (180 / jumlah potongan): sebutkan ideal
   dan selisihnya.
4. Di bawah 99: tinggal sedikit lagi, sebut sudut idealnya.
5. 99 ke atas: dengan 4 atau 6 tamu, ajak mencoba tamu lebih banyak; dengan 8 tamu, pertahankan cara.

Label persen: terbesar diberi latar cokelat tua dan segitiga ke atas, terkecil latar merah dan segitiga ke
bawah (bentuk dan teks, bukan warna saja; lembar hasil mengulang keduanya dengan kata "Terbesar" dan
"Terkecil"). Kalau selisih terbesar dan terkecil di bawah 0,1 poin, tidak ada penanda dan hasil menulis
"Semua potongan 12,5%". Label diletakkan di titik berat potongan; kalau tidak muat atau menabrak label lain,
dicoba titik di sekitarnya (0,15 jari-jari ke dalam sampai 0,3 ke luar, dan 0,1 menyamping), lalu bila tetap tidak muat
dipindah ke bibir piring dengan garis penunjuk dan direnggangkan supaya tidak bertumpuk.

### Angka kalibrasi

Simulasi 400 babak 8 tamu, sudut dan geseran tiap garis diberi galat acak normal (bukan data pemain):

| Tangan | Galat sudut / geseran (simpangan baku) | Kerataan p10 / median / p90 |
|---|---|---|
| Rapi | 1,5 derajat / 1,5% | 95,9 / 97,2 / 98,3 |
| Sedang | 4 derajat / 4% | 89,5 / 92,8 / 95,2 |
| Kasar | 8 derajat / 10% | 76,7 / 83,8 / 89,5 |

Batas judul dipilih supaya tangan rapi umumnya mendapat "Hampir rata", tangan sedang "Lumayan rata"
atau "Ada yang melirik", dan 99 ke atas butuh garis yang benar-benar lewat pusat. Kasus uji tetap:
potongan sempurna 4, 6, dan 8 tamu memberi 100,0 (6 tamu 99,9999 karena 128 tidak habis dibagi 6);
satu garis bergeser 5% memberi 96,8, bergeser 15% memberi 90,5; satu sudut meleset 3 derajat memberi 98,3.

## Pengait uji

`window.__potongMartabak`:

- `keadaan()`: fase (`main` atau `hasil`), tamu, topping, benih, jumlah potongan, persen tiap potongan,
  garis yang sudah dibuat, garis pemandu, hasil (kerataan, judul, komentar, saran), teks petunjuk.
- `baru({ tamu, topping, benih })`: martabak baru; topping `meses`, `keju`, `kacang`, atau `campur`.
- `potong(sudutDerajat, geser)`: potong seperti papan ketik (geser dalam satuan jari-jari, tanda mengikuti
  normal (−sin θ, cos θ), sumbu y ke bawah).
- `seret(x1, y1, x2, y2)`: potong seperti seretan, dalam satuan jari-jari dari pusat (termasuk cek panjang).
- `pemandu(sudut, geser)`: atur garis pemandu papan ketik.
- `hitung([[sudut, geser], ...], tamu)`: hitungan murni tanpa mengubah layar.
- `kerataan(daftarLuas, tamu)`: rumus kerataan saja.
- `instan(true)`: matikan animasi untuk uji.
- `tataLetak()`: pusat dan jari-jari martabak dalam piksel halaman, untuk menggerakkan tetikus atau sentuhan.
- `label()`: kotak label yang terakhir digambar (untuk cek tumpang tindih).
- `gambarPersegi(sisi)`: PNG persegi berisi piring saat ini dengan warna latar tema aktif.
