# Parkir Angkot: arah desain

> Arah dari agen utama Bermudaku Games (4 November 2026): game orisinal untuk portal games.bmdku.com.
> Angkot dilihat dari atas harus parkir paralel ke celah di pinggir jalan kota, di antara kendaraan
> yang sudah parkir. Tidak meniru game mana pun; semua gambar dilukis dengan Canvas 2D.

## Identitas

Game keterampilan satu layar tentang hal yang dikerjakan sopir angkot puluhan kali sehari: menepi
dengan rapi supaya penumpang bisa turun langsung ke trotoar. Dunianya jalan kota kecil di siang hari:
aspal bertambal dan retak, kerb dicat hitam-putih, pohon peneduh di trotoar, warung kopi bertenda
terpal belang, pasar, sekolah berpagar, deret ruko dan kantor.

Angkotnya rekaan: trayek 07 Pasar Sore - Terminal Lentera (nama tempat karangan). Badan oranye bata
yang tidak meniru warna trayek kota mana pun, list krem di kedua sisi atap, papan trayek biru tua
bertuliskan 07, kabin model kepala datar (kaca depan nyaris di ujung moncong), dan rel pintu geser di
sisi kiri. Pintunya di kiri karena angkot di Indonesia berjalan di lajur kiri dan menurunkan penumpang
ke trotoar.

Motif identitas: **cat kerb hitam-putih**. Muncul di kerb trotoar kedua sisi jalan dan sebagai pita
belang di atas lembar hasil, jadi lembar hasil terasa seperti papan yang menempel di kerb. Suara
tipografinya datang dari cat jalan: tulisan "ANGKOT" kuning di aspal kotak sasaran, digambar
memanjang searah lajur seperti marka jalan sungguhan, dan angka 07 di papan atap.

## Kepribadian

Sabar dan membumi seperti tukang parkir yang memberi aba-aba. Kegagalan disebut dengan bahasa jalanan
("Nyenggol bemper depan mobil merah"), lalu bagian angkot yang kena dan arah geraknya ("Yang kena sudut
belakang kiri angkot, saat mundur."), lalu satu saran teknik yang bisa langsung dicoba.

## Palet

| Peran | Terang (siang) | Gelap (malam) |
|---|---|---|
| Latar | `#F2ECE0` krem ubin trotoar | `#161B20` |
| Tinta | `#1F262D` aspal tua | `#EEE8DC` |
| Tinta pendamping | `#4E5862` | `#B0B9C2` |
| Lembar (hasil, dialog, pedal) | `#FFFBF4` | `#222A31` |
| Garis kontrol | `#7A838C` | `#7E8994` |
| Jalur kemudi | `#E4DCCD` | `#2A3239` |
| Aksen tunggal | `#B04A16` oranye angkot (teks putih) | `#F28C4E` (teks `#26120A`) |

Dua warna inti diambil dari dua bidang terluas di dunia game, ubin trotoar dan aspal, supaya panel
terasa satu tempat dengan jalannya. Aksen oranye adalah warna badan angkot: angkot menjadi satu-satunya
fokus visual di adegan, dan di antarmuka oranye hanya dipakai untuk satu tombol utama di lembar hasil
("Lanjut ke level 2" atau "Coba parkir lagi"). Di tema terang tombol memakai oranye yang lebih tua dari
cat angkot (`#EE7D2E`) supaya teks putih lolos AA.

Kuning marka (`#F0C02E`) hanya milik dunia, untuk kotak sasaran. Warna kendaraan lain, bangunan, dan
pohon adalah isi dunia dan sengaja kalem: terpal pasar dan kanopi ruko memakai biru dan hijau, tidak
oranye, supaya tidak bersaing dengan angkot. Aspal siang sengaja cukup gelap (`#474C53`) agar badan
angkot punya kontras 3,1:1 terhadap jalan.

Dua tema karena angkot juga narik malam dan game ini banyak dimainkan di HP. Tema gelap tidak sekadar
membalik panel: adegan berubah jadi malam (aspal `#2C3136`, bangunan dan pohon lebih gelap, kendaraan
parkir diredupkan 30 persen, angkot `#D97230`). Game mengikuti `prefers-color-scheme` dan juga
`data-theme="light|dark"` yang diisi portal (dipantau dengan MutationObserver, adegan digambar ulang).

### Kontras (dihitung dengan Node, rumus WCAG 2.x)

| Pasangan | Terang | Gelap | Syarat |
|---|---|---|---|
| Tinta di latar | 13,00 | 14,20 | 4,5 |
| Tinta di lembar | 14,82 | 11,92 | 4,5 |
| Tinta pendamping di latar | 6,16 | 8,72 | 4,5 |
| Tinta pendamping di lembar | 7,03 | 7,32 | 4,5 |
| Label Kiri/Kanan di jalur kemudi | 5,32 | 6,55 | 4,5 |
| Teks tombol utama di aksen | 5,47 | 7,36 | 4,5 |
| Teks kenop dan pedal ditekan | 13,00 | 14,20 | 4,5 |
| Batas tombol vs latar | 3,27 | 4,86 | 3 |
| Batas tombol vs lembar | 3,73 | 4,08 | 3 |
| Kenop kemudi vs jalur | 11,23 | 10,67 | 3 |
| Cincin fokus vs latar | 13,00 | 14,20 | 3 |
| Angkot vs aspal | 3,14 | 4,00 | 3 |
| Marka putih vs aspal | 7,33 | 8,87 | 3 |
| Marka kuning vs aspal | 5,06 | 6,28 | 3 |

## Tipografi

- **Bungee**: judul, nomor level, predikat (Rapi, Lumayan, Mepet), angka di lembar hasil, angka 07 di
  papan trayek, dan tulisan "ANGKOT" di aspal. Huruf ini dirancang untuk papan petunjuk kota; kapital
  tebalnya mirip cat papan trayek dan marka jalan. Dipakai hemat karena berat.
- **Plus Jakarta Sans**: teks, tombol, dialog. Dirancang untuk bahasa Indonesia dan dipakai juga oleh
  game lain di portal.
- Satuan (detik, cm) di lembar hasil ditulis dengan Plus Jakarta Sans di samping angka Bungee, karena
  Bungee hanya punya huruf kapital dan "CM" bukan penulisan satuan yang benar.

## Tata letak

- **Laptop dan lanskap** (lebar 640 px ke atas dan lanskap): adegan di kiri setinggi layar. Panel kanan
  berisi judul, tombol Level dan Cara main, nomor, nama, dan petunjuk level, waktu dan rekor, tombol
  Ulangi, lalu kemudi dan pedal di bawah dengan ringkasan tombol papan ketik. Lembar hasil menggantikan
  isi panel. Jalan mendatar, angkot maju ke kanan, trotoar di atas.
- **HP potret**: kepala (judul, Level, Cara main), baris status (nomor dan nama level, waktu, Ulangi),
  adegan, lalu kemudi di kiri untuk jempol kiri dan pedal Maju di atas Mundur di kanan untuk jempol kanan.
  Adegan diputar 90 derajat: arah maju ke atas layar, trotoar di kiri. Lembar hasil menggantikan kemudi
  dan adegan mengecil, tapi jalan tetap tegak supaya arah yang sudah dihafal pemain tidak berbalik.
- Skala adegan dihitung dari kotak fokus tiap level (deret parkir, posisi mulai, lajur seberang bila
  ada truk), jadi seluruh area parkir selalu terlihat. Sisa ruang diisi bangunan dan trotoar.
- Lanskap pendek (tinggi di bawah 520 px): petunjuk level, ringkasan papan ketik, dan label Kiri/Kanan
  disembunyikan supaya tetap satu layar.

Dial: ENERGY 2 / RHYTHM 1 / MOTION 2

- ENERGY 2: dunia penuh detail dan warna, tapi antarmuka tenang dengan satu aksen.
- RHYTHM 1: satu layar permainan; yang berganti hanya isi panel (kemudi atau lembar hasil).
- MOTION 2: gerak inti (angkot, roda depan yang berbelok, garis bantu, lampu rem dan lampu mundur),
  plus dua gerak hiasan dengan tujuan: kotak sasaran berkedip putus-putus 3,5 detik pertama supaya mata
  langsung menemukannya, dan lampu hazard berkedip 3 detik setelah parkir sah, seperti kebiasaan sopir
  saat menepi. Dengan `prefers-reduced-motion`: kotak sasaran ditebalkan tanpa gerak dan lampu hazard
  menyala tetap.

## Aturan permainan

- **Sah**: keempat sudut badan angkot, termasuk ban yang menyembul (lebar total 1,84 m), ada di dalam
  kotak kuning; selisih arah ke garis kerb paling banyak 6 derajat; laju di bawah 0,03 m/detik selama
  0,5 detik berturut-turut.
- **Gagal**: badan angkot bertumpuk dengan kendaraan parkir, motor, atau truk di lajur seberang (uji
  sumbu pemisah/SAT antar persegi berorientasi); melewati muka kerb trotoar atau kerb seberang; atau
  salah satu sudut keluar lebih dari 0,6 m dari area pandang (kebablasan). Pesan menyebut bagian
  kendaraan lawan (bemper depan, bemper belakang, atau sisi), bagian angkot yang kena, arah gerak saat
  itu, dan satu saran yang dipilih dari situasi (kerb saat mundur, kerb saat maju, mobil di belakang
  saat badan masih miring atau sudah lurus, mobil di depan saat mundur atau maju, motor, truk seberang,
  kebablasan). Titik senggol ditandai cincin di adegan.
- **Waktu** mulai berjalan saat pedal pertama ditekan dan berhenti saat angkot diam; setengah detik
  tunggu tidak dihitung.
- **Predikat** (jarak diukur dari sudut angkot yang paling dekat ke muka kerb):
  - Rapi: jarak ke kerb paling jauh 30 cm dan selisih sudut paling banyak 2 derajat.
  - Lumayan: paling jauh 50 cm dan paling banyak 4 derajat.
  - Mepet: sah tapi lolos tipis di luar dua ambang itu (jarak terjauh yang masih sah 56 cm, sudut 6 derajat).
- **Level** terbuka satu per satu setelah parkir sah di level sebelumnya. Rekor = waktu tercepat per level
  beserta predikatnya. Semua tersimpan di `localStorage` berawalan `parkir-angkot:` (`terbuka`, `rekor`,
  `level`, `garis-bantu`), dibungkus try/catch. Kalau penyimpanan ditolak, permainan tetap jalan dan
  jendela Level memberi tahu bahwa kemajuan hanya bertahan sampai halaman ditutup.

## Kontrol

- **Papan ketik**: panah atas atau W maju, panah bawah atau S mundur (sekaligus rem kalau masih maju),
  panah kiri/kanan atau A/D belok, Spasi rem, R ulangi level. Setir yang dilepas kembali pelan ke tengah.
  Tab berurutan: Level, Cara main, Ulangi, adegan, kemudi, Maju, Mundur. Pedal yang difokus bisa ditahan
  dengan Spasi atau Enter. Escape menutup dialog.
- **Sentuh**: posisi jari di penggeser kemudi menentukan sudut setir (ada penanda tengah). Jempol kiri di
  kemudi, jempol kanan menahan Maju atau Mundur. Jari yang lepas membuat setir kembali pelan ke tengah.
- **Tetikus**: sama, tapi setir **menahan** sudut terakhir setelah tombol tetikus dilepas. Alasannya:
  tetikus hanya bisa menahan satu kontrol, jadi tanpa ini pemain tetikus tidak bisa membelok sambil
  menahan pedal. Klik penanda tengah untuk meluruskan.
- Lepas semua pedal: angkot melambat sendiri. Menekan pedal yang berlawanan dengan arah gerak: rem.

## Garis bantu saat mundur

Saat angkot mundur (atau pedal Mundur ditahan), dua garis putus-putus menunjukkan jalur kedua sudut
belakang angkot untuk 3 meter ke depan kalau setir ditahan di posisi sekarang.

Alasannya: tampak atas menghilangkan alat yang dipakai sopir sungguhan untuk mundur, yaitu spion,
menoleh, dan rasa jarak dari kursi. Garis ini menggantikan perkiraan lewat spion, mirip garis dinamis
kamera mundur. Tantangannya tetap utuh karena garis hanya menunjukkan akibat posisi setir saat ini,
bukan jalur yang benar: pemain tetap harus memutuskan kapan membanting setir, kapan meluruskan, dan kapan
berhenti. Tidak ada garis saat maju. Garis bisa dimatikan di jendela Level dan pilihannya diingat.

## Angka kalibrasi

Fisika memakai model sepeda kinematik dengan titik acuan tengah sumbu roda belakang, langkah tetap
1/120 detik (hasil sama di layar 60 Hz atau 120 Hz).

| Besaran | Nilai |
|---|---|
| Belok roda depan maksimum | 35 derajat |
| Kecepatan memutar setir (tombol atau penggeser) | 1,4 rad/detik (mentok dalam 0,44 detik) |
| Setir kembali ke tengah saat dilepas | 0,38 rad/detik (sekitar 1,6 detik dari mentok) |
| Laju maksimum maju / mundur | 2,6 / 1,5 m/detik |
| Percepatan maju / mundur | 1,5 / 1,1 m/detik² |
| Rem: pedal berlawanan / Spasi / tanpa pedal | 4,0 / 5,5 / 2,2 m/detik² |

Jalan: muka kerb di y = 0, lajur parkir dan kotak selebar 2,4 m, garis tengah di 5,6 m, kerb seberang
di 8,8 m. Angkot mulai di lajur jalan (tengah badan y 3,85 sampai 3,95 m), sejajar kotak.

| Level | Angkot (panjang / jarak sumbu roda / juntai belakang) | Kotak | Ruang antar rintangan | Yang menyulitkan |
|---|---|---|---|---|
| 1 Depan Warung Kopi | 4,2 / 2,45 / 1,0 m | 8,0 m | 9,0 m (2,1 kali panjang angkot) | celah lega |
| 2 Pasar Pagi | 4,4 / 2,55 / 1,05 m | 6,6 m | 7,3 m (1,66 kali) | pikap bermuatan di depan kotak |
| 3 Gang Sekolah | 4,6 / 2,65 / 1,1 m | 6,3 m | 6,64 m sampai motor (1,44 kali) | motor parkir tegak di ujung depan; truk berhenti di lajur seberang (tepi 6,15 m) |
| 4 Jam Pulang Kantor | 4,8 / 2,75 / 1,15 m | 6,2 m | 6,49 m dari motor ke pikap (1,35 kali) | motor di ujung belakang; truk mepet garis tengah (tepi 5,9 m) |

Di level 4, banting setir mentok dari posisi awal membuat sudut depan kanan angkot berayun sampai
y 6,0 m dan menyerempet truk sekitar 9 cm. Pemain harus merapat dulu ke deretan parkir saat maju, atau
tidak membanting setir sampai mentok. Saran untuk senggolan truk mengatakan persis itu.

Bukti bisa diselesaikan (simulasi tanpa gambar lewat pengait uji, pengemudi "cara klasik" dengan
maju-mundur pendek, 1.440 kombinasi titik belok per level): level 1 berhasil di 52 kombinasi, level 2
di 22, level 3 di 12, level 4 di 7 bila mulai dari lajur awal dan 15 bila merapat dulu ke deretan
parkir. Perencana jalur (hybrid A*) yang memakai pemeriksa tabrakan game juga menemukan jalur untuk
keempat level.

## Pengait uji: `window.__parkirAngkot`

- `keadaan()`: mode (`jalan`, `berhasil`, `gagal`), level, pose tengah badan (x, y, sudut), setir,
  laju, waktu, sebab, hasil, keempat sudut badan.
- `level(n, { paksa })`, `ulangi()`, `buka(n)`, `terbuka()`, `rekor()`, `garisBantu(bool)`, `jeda(bool)`.
- `atur({ x, y, sudut, setir, laju, bantu })`: taruh angkot di pose tertentu (derajat), `bantu` memaksa
  garis bantu tampil.
- `jalankan(urutan)`: jalankan segmen masukan dengan langkah tetap pada permainan yang tampil. Segmen:
  `{ gas: 1 | -1, setir: 'kiri' | 'kanan' | angka derajat sasaran, rem: true, detik }`.
- `simulasi(n, pengendali, maksDetik)`: simulasi tanpa menyentuh permainan; `pengendali(keadaan)`
  mengembalikan masukan.
- `periksa(n, { x, y, sudut })`: cek tabrakan dan sah untuk satu pose.
- `kartu()`: pose gambar kartu (level 3, angkot setengah masuk celah, roda depan dibanting ke kanan,
  garis bantu tampil), permainan dijeda, mengembalikan kotak potong persegi di halaman.

Urutan masukan yang menyelesaikan level 1 (setara tombol papan ketik, hasil "Lumayan", 11,3 detik):

```js
__parkirAngkot.jalankan([
  { gas: 1, detik: 3.1917 },                    // tahan panah atas
  { rem: true, setir: 'kiri', detik: 0.475 },   // Spasi + panah kiri
  { gas: -1, setir: 'kiri', detik: 1.7333 },    // panah bawah + kiri
  { gas: -1, setir: 'kanan', detik: 0.425 },    // panah bawah + kanan (meluruskan)
  { gas: -1, detik: 2.325 },                    // panah bawah saja
  { gas: -1, setir: 'kanan', detik: 1.3333 },   // panah bawah + kanan
  { rem: true, detik: 0.275 },                  // Spasi
  { gas: 1, setir: 'kiri', detik: 0.35 },       // panah atas + kiri
  { gas: 1, detik: 0.8917 },                    // panah atas
  { rem: true, detik: 0.825 },                  // Spasi
]);
```
