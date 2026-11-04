# Antre Gorengan: arah desain

> Arah dari agen utama Bermudaku Games (4 November 2026): game orisinal untuk portal games.bmdku.com.
> Gerobak gorengan pinggir jalan pada sore hari, tampak depan dari balik gerobak. Pembeli antre satu per satu
> dan menyebut pesanannya di balon kata yang hilang setelah beberapa detik. Pemain mengingat pesanan, mengisi
> kantong kertas minyak dari nampan, lalu menyerahkannya. Tidak meniru game mana pun; semua gambar dilukis
> dengan Canvas 2D, tanpa berkas gambar.

## Identitas

Game memori satu layar tentang kerja kecil penjual gorengan: mendengar pesanan sekali, mengambil bijinya tanpa
salah, dan tidak membuat antrean menunggu. Dunianya gerobak bercat **biru** dengan papan nama bertulisan **cat
merah**, etalase kaca berisi tumpukan gorengan di atas nampan aluminium, wajan berminyak yang mengepul, mangkuk
cabai rawit, botol saus, ruko dan tiang listrik di seberang jalan, dan matahari sore yang turun sampai maghrib.

Motif identitas: **tulisan cat merah gerobak**. Merah yang sama dipakai di papan "GORENGAN" di atap, tombol
**Serahkan** (aksi utama), dan isi meteran saat pembeli mulai **Gelisah**. Ketiganya satu cerita: nama warung,
tindakan menyerahkan, dan tanda bahaya. Merah tidak dipakai di tempat lain; kesalahan pesanan disampaikan dengan
kalimat pembeli, bukan warna.

## Kepribadian

Ramai tapi ramah, seperti antrean di gerobak menjelang maghrib. Pembeli bicara pendek dan wajar ("Bakwan dua,
tahu isi satu, cabainya tiga ya."), dan bila pesanan salah mereka menyebut salahnya persis ("Saya minta tahu isi
dua, ini cuma satu.") lalu menyebut uang yang mereka bayar. Penjual (pemain) hanya bicara sekali: "Tadi apa saja,
Bu?". Lembar hasil memberi satu saran yang bisa langsung dicoba di hari berikutnya.

## Palet

| Peran | Terang | Gelap |
|---|---|---|
| Latar | `#FAF2E4` krem kertas | `#0F1824` jalan malam |
| Tinta | `#1A3150` biru tua cat gerobak | `#F4EADB` |
| Tinta pendamping | `#4A5A70` | `#B3BFCC` |
| Garis kontrol | `#67778D` | `#7C8CA2` |
| Lembar (nampan, HUD, hasil, dialog) | `#FFFBF3` | `#182433` |
| Alas nampan | `#E4DED2` aluminium | `#202D3E` |
| Kertas kantong | `#EBDCBD`, lipatan `#D3BE94` | `#3A3123`, lipatan `#54472F` |
| Trek meteran | `#DCD5C8` | `#33415A` |
| Aksen tunggal | `#B8321E` merah cat tulisan gerobak (teks putih) | `#FF8B73` (teks `#2A0A04`) |

Alasan: dua warna inti (krem kertas dan biru tua cat gerobak) diambil dari gerobak itu sendiri. Biru adalah
lawan warna emas-cokelat gorengan, jadi gorengan di nampan dan etalase selalu menonjol sebagai fokus. Krem
kertas dan kertas kantong berasal dari bungkus kertas minyak. Aksen merah hanya di tiga tempat di atas. Dua tema
karena gerobak berdagang sampai malam dan portal mengisi `data-theme`; tema mengikuti `prefers-color-scheme` dan
dikalahkan oleh `data-theme="light|dark"`. Tema gelap menampilkan jalan yang sama setelah maghrib: langit malam,
bulan, jendela ruko menyala, lampu gerobak selalu hidup.

Warna dunia di kanvas sama di kedua tema karena itu benda nyata: cat gerobak `#2F6FA8` (gelap `#1F4C7A`, kilap
`#5D95C7`), papan nama krem `#FFF6E6` dengan tulisan `#B8321E`, kaca etalase putih kebiruan transparan, nampan
aluminium `#B8BEC4`, wajan `#26272B` berisi minyak `#D9A13A`, botol saus `#C2412B`. Yang mengikuti tema hanya
langit, ruko, jalan, dan bulan atau matahari. Adegan diredupkan dengan lapisan biru tua tipis: tetap 0,30 di tema
gelap, dan di tema terang naik dari 0 ke 0,26 sepanjang 45% akhir hari (senja). Atap dan lampu digambar di atas
lapisan itu karena paling dekat ke penjual.

Langit (diinterpolasi dari awal ke akhir hari):

| Tema | Atas | Cakrawala |
|---|---|---|
| Terang | `#F7E3B8` ke `#E7A774` | `#F4BC7C` ke `#D6693F` |
| Gelap | `#1C2B42` ke `#0F1828` | `#5E4640` ke `#3A2C2C` |

Satu-satunya cahaya (glow) di layar adalah lampu gerobak yang menyala setelah 62% hari (selalu menyala di tema
gelap). Ia menandai maghrib, bukan hiasan.

### Kontras (dihitung dengan rumus WCAG lewat Node)

| Pasangan | Terang | Gelap | Syarat |
|---|---|---|---|
| Tinta di latar (judul, status, teks pembuka) | 11,81 | 14,99 | 4,5 |
| Tinta di lembar (nampan, HUD, hasil, dialog) | 12,72 | 13,17 | 4,5 |
| Tinta di kertas kantong (jumlah, kantong kosong) | 9,70 | 10,73 | 4,5 |
| Tinta pendamping di latar (label Sisa/Kas, sublabel tombol) | 6,32 | 9,56 | 4,5 |
| Tinta pendamping di lembar (harga, tuts, label Sabar, saran) | 6,81 | 8,40 | 4,5 |
| Tinta pendamping di kertas (judul "Isi kantong") | 5,19 | 6,84 | 4,5 |
| Teks tombol aksen (Serahkan, Buka warung) | 5,98 | 8,04 | 4,5 |
| Garis kontrol vs latar / lembar | 4,11 / 4,42 | 5,21 / 4,58 | 3 |
| Garis sekat nampan vs alas nampan | 3,41 | 4,07 | 3 |
| Tombol aksen vs latar | 5,38 | 7,81 | 3 |
| Isi meteran Sabar (tinta) vs trek | 9,00 | 8,63 | 3 |
| Isi meteran Gelisah (aksen) vs trek | 4,10 | 4,50 | 3 |
| Cincin fokus (tinta) vs latar / alas nampan | 11,81 / 9,80 | 14,99 / 11,71 | 3 |

| Pasangan kanvas (sama di dua tema) | Rasio | Syarat |
|---|---|---|
| Teks balon pembeli `#1A3150` di `#FFFBF3` | 12,72 | 4,5 |
| Teks balon penjual `#FFFBF3` di `#1A3150` | 12,72 | 4,5 |
| Tepi balon vs langit sore paling terang / paling jingga | 10,40 / 3,72 | 3 |
| Isi balon vs langit malam | 13,81 | 3 |
| Tulisan papan GORENGAN di krem | 5,57 | 4,5 |

Meteran tidak hanya berganti warna: label "Sabar" berubah menjadi "Gelisah" (tebal) dan wajah pembeli mengerut
di bawah 35%.

## Tipografi

- Judul, angka Sisa dan Kas, pendapatan, tombol Serahkan, papan nama di atap: **Passion One**. Huruf tebal
  sempit ini mirip tulisan cat tangan di gerobak dan papan harga pinggir jalan, angkanya mudah dibaca dari jauh,
  dan berbeda dari huruf judul game lain di portal (Shrikhand, Titan One, Bungee, Alfa Slab One, Lilita One).
- Teks, nampan, balon kata: **Plus Jakarta Sans** (400, 600, 700, 800). Dirancang untuk bahasa Indonesia, sama
  dengan keluarga game lain di portal, dan tebalnya jelas di 11 sampai 19 px.

## Tata letak

Satu layar tanpa gulir, satu fokus: pembeli dan balon katanya.

- Potret (375x690): kepala (judul, Cara main), baris status (Sisa, Kas), panggung kanvas (sekitar 268 px),
  kantong kertas minyak dengan tombol **Kurangi** di kanannya, nampan 3 x 2 sekat gorengan ditambah sekat cabai
  setinggi dua baris, lalu **Ulangi pesanan** dan **Serahkan** di bawah jempol. Isi kantong tampil sebagai
  gambar kecil dan jumlahnya (`x2`); nama jenis hanya untuk pembaca layar karena gambarnya sama dengan nampan.
  Sebelum buka, tempat kantong diisi satu paragraf cara singkat dan tombol aksi menjadi **Buka warung**. Setelah
  tutup, kantong, nampan, dan tombol diganti lembar hasil; panggung tetap tampil dengan gerobak yang sepi.
- Lanskap atau laptop (lebar minimal 640 px): panggung setinggi layar di kiri, kolom kanan
  `clamp(320px, 31vw, 400px)` berisi kepala, status besar, kantong (daftar dua kolom dengan nama), nampan, dan
  tombol. Lembar hasil di kolom kanan juga memuat rincian sampai lima pesanan yang meleset.
- HP diputar mendatar (tinggi di bawah 520 px): kolom kanan `clamp(300px, 50vw, 430px)`, kantong kembali
  mendatar seperti potret, sekat nampan 64 px.
- Nampan sekaligus papan harga: harga per biji tertulis di tiap sekat. Papan harga terpisah di kanvas terlalu
  kecil untuk dibaca di HP, jadi harga ditaruh di tempat yang selalu dilihat pemain saat mengambil gorengan.
- Kanvas memakai kotak komposisi 400 x 300 satuan yang menempel ke dasar dan ditengahkan; ruang lebih di atas
  diisi langit, di samping diisi ruko dan gerobak yang memanjang. Atap, rumbai, dan tiang gerobak digambar di
  tepi kanvas dalam piksel layar sebagai bingkai. Meteran Sabar adalah elemen HTML (`role="meter"`) di pojok kiri
  atas panggung, di bawah atap. Balon kata dan uang yang diterima digambar di kanvas di atas lapisan senja.

Dial: ENERGY 2 / RHYTHM 1 / MOTION 2

RHYTHM 1 karena satu layar permainan dengan satu fokus. MOTION 2 karena antrean yang bergerak dan balon yang
hilang adalah isi permainan.

## Gerak

- Inti (tidak pernah dimatikan): balon pesanan dan garis waktunya, balon hilang, meteran Sabar, pergantian
  pembeli (0,8 detik), matahari atau bulan yang turun sepanjang hari, lampu menyala, uang yang diterima tampil
  1,5 detik.
- Hias (dimatikan oleh `prefers-reduced-motion`): asap dari wajan, gelembung minyak, pembeli bernapas dan
  berkedip, langkah pembeli saat masuk dan pergi, antrean yang memudar saat waktu habis, uang yang naik, cip
  kantong yang membesar sesaat. Bila gerak dikurangi, pergantian pembeli menjadi lompatan di tengah 0,8 detik
  yang sama, asap dan gelembung tidak digambar, dan uang tampil diam.

## Gorengan

Tiap jenis dibedakan oleh bentuk dan tekstur, bukan hanya warna, dan selalu disertai nama.

| Jenis | Harga | Bentuk | Ciri |
|---|---|---|---|
| Bakwan | Rp1.500 | bulat pipih bergerigi | irisan wortel jingga dan kol hijau, tepi gosong |
| Tahu isi | Rp1.500 | bantal persegi menggembung | celah gelap berisi toge putih dan wortel, kerak di bawah |
| Mendoan | Rp1.500 | lembaran lebar tipis bergelombang | pucat kehijauan, butir tempe, daun bawang |
| Pisang goreng | Rp2.000 | lengkung bulan sabit | guratan adonan melintang, ujung gelap |
| Cireng | Rp1.000 | lonjong pipih halus | paling pucat, gelembung kecil di permukaan |
| Risol | Rp2.500 | gulungan lurus berujung bulat | remah tepung roti bertitik, lipatan di dua ujung |
| Cabai rawit | gratis | mangkuk berisi cabai | cabai hijau dan merah bertangkai, mangkuk bergaris biru |

Harga adalah harga rekaan untuk permainan ini, ditulis begitu di Cara main.

## Pembeli

Digambar dengan bentuk sederhana (kepala bulat, mata titik, alis dan mulut garis), disebut dengan peran, bukan
nama. Ekspresi: biasa, senang (pesanan pas), kesal (sabar di bawah 35%, saat mengulang, atau pergi), kecewa
(pesanan salah tapi tetap membayar).

| Tokoh | Sapaan penjual | Ciri | Gaya bicara |
|---|---|---|---|
| Anak sekolah | Dik | kemeja putih, dasi biru tua, tali tas | "cabainya", "...ya." |
| Pengemudi ojek | Bang | helm setengah dengan kaca terangkat, jaket bergaris pantul | "cabenya", "..., cepat ya." |
| Ibu pulang belanja | Bu | kerudung marun | "cabainya", "...ya." |
| Pegawai kantor | Mbak | rambut bob, blazer, tali tanda pengenal | "cabainya", "..., dibungkus ya." |
| Bapak berpeci | Pak | peci hitam, kumis, batik | "cabenya", "...ya." |
| Mahasiswa | Mas | hoodie hijau zaitun, kacamata bulat | "cabenya", "...ya." |

Tiga orang terdepan di antrean selalu berbeda tokoh.

## Aturan permainan

1. Satu hari dagang = 90 detik. Sebelum buka, pembeli pertama bertanya "Sudah buka?"; tombol **Buka warung**
   atau `Enter` memulai hari. Saat waktu habis, tidak ada pembeli baru, antrean bubar, dan pembeli yang sedang
   dilayani masih ditunggu sampai diserahkan atau pergi.
2. Pesanan dibuat saat pembeli mulai dilayani, makin panjang seiring waktu (u = waktu berjalan / 90):

   | Waktu | Jenis gorengan | Jumlah per jenis | Cabai disebut | Jumlah cabai |
   |---|---|---|---|---|
   | pembeli pertama | 1 | 1 sampai 2 | 60% | 1 sampai 4 |
   | u < 0,25 | 1 (60%) atau 2 | 1 sampai 3 | 60% | 1 sampai 4 |
   | u < 0,5 | 2 | 1 sampai 3 | 70% | 1 sampai 4 |
   | u < 0,75 | 2 atau 3 | 1 sampai 4 | 75% | 1 sampai 6 |
   | sesudahnya | 3 (60%) atau 4 | 1 sampai 4 | 80% | 1 sampai 6 |

   Bila cabai tidak diminta, 40% pembeli menegaskan "nggak pakai cabai" atau "nggak usah cabe". Cabai selalu
   disebut terakhir. Urutan gorengan dalam kalimat diacak, tidak mengikuti urutan nampan.
3. Balon pesanan tampil `1,8 + 0,9 x frasa` detik (frasa = jenis gorengan, ditambah satu bila cabai disebut),
   dengan garis waktu yang memendek, lalu hilang. Pemain boleh mengambil gorengan selagi balon tampil.
4. Kesabaran penuh = `8 + 2 x frasa + 0,4 x unit` detik (unit = jumlah biji gorengan ditambah cabai). Meteran
   berkurang terus selama pembeli dilayani, berhenti saat Cara main terbuka atau tab disembunyikan. Habis =
   pembeli pergi tanpa membayar ("Aduh, kelamaan. Nggak jadi.") dan tercatat "pergi karena menunggu".
5. **Ulangi pesanan** (`U`) hanya bisa setelah balon hilang. Kesabaran langsung terpotong 25% dari penuh,
   penjual bertanya "Tadi apa saja, Bu?" selama 0,7 detik, lalu pembeli mengulang "Duh. <pesanan>" selama waktu
   balon yang sama. Bila potongan itu menghabiskan kesabaran, pembeli langsung pergi ("Ditanya lagi? Kelamaan,
   nggak jadi.").
6. Mengisi kantong: satu ketukan atau tuts = satu biji. **Kurangi** (`Backspace`) membuang isi terakhir. Kantong
   kosong tidak bisa diserahkan (tombol nonaktif, kertas kantong ditandai, petunjuk dibacakan).
7. **Serahkan** (`Enter`) membandingkan isi kantong dengan pesanan:
   - Pas semua (termasuk cabai): dibayar penuh, `jumlah x harga` tiap jenis. Reaksi 1,3 detik.
   - Ada yang salah: pembeli menyebut sampai dua kesalahan, lalu "Yang lain juga salah." bila lebih, lalu
     pembayarannya. Pembeli hanya membayar gorengan yang sesuai pesanan (`min(diminta, diberi) x harga`), dipotong
     Rp500 bila jumlah cabai salah. Reaksi 2,8 detik ditambah 0,5 detik per kesalahan sesudah yang pertama
     (paling banyak tiga dihitung).
   - Bila biji yang benar kurang dari separuh biji gorengan yang dipesan: pembeli pergi tanpa membayar ("Nggak
     jadi deh."), tetap tercatat sebagai pesanan salah.
   - Urutan kesalahan yang disebut: jenis terlupa, jumlah kurang, jenis tak dipesan, jumlah lebih, lalu cabai.
8. Setelah reaksi, pembeli pergi ke kanan sambil membawa kantong (bila membayar) dan antrean maju (0,8 detik).

### Kalimat kesalahan

| Keadaan | Kalimat |
|---|---|
| Jenis terlupa | "Risolnya mana? Saya minta dua." |
| Jumlah kurang | "Saya minta tahu isi dua, ini cuma satu." |
| Jumlah lebih | "Bakwannya kelebihan, saya minta dua, ini tiga." |
| Tidak dipesan | "Saya nggak pesan cireng." |
| Cabai tidak diminta | "Saya nggak minta cabai." atau "Kan nggak pakai cabai." |
| Cabai kurang / lebih / lupa | sama dengan gorengan, memakai kata "cabai" atau "cabe" sesuai tokoh |
| Pembayaran | "Saya bayar Rp4.500 saja." atau "Nggak jadi deh." |

### Lembar hasil

Pendapatan (angka besar), judul, jumlah pesanan benar, salah, dan pembeli yang pergi karena menunggu, satu
saran, rekor, tombol **Buka warung lagi**, dan (di layar lebar) rincian sampai lima pesanan yang meleset.

| Judul | Syarat |
|---|---|
| Belum ada pesanan yang diserahkan | tidak ada pembeli yang selesai dilayani |
| Semua pembeli pulang membawa pesanannya | tidak ada yang salah dan tidak ada yang pergi |
| Hampir semua pesanan pas | benar paling sedikit dua pertiga |
| Banyak pembeli pergi karena menunggu | pergi lebih banyak dari salah |
| Banyak pesanan meleset hari ini | sisanya |

Saran dipilih satu, berurutan: belum ada pesanan; ada yang pergi karena menunggu dan jumlahnya tidak kalah dari
yang salah (dibedakan bila sebabnya minta diulang); kesalahan paling sering (cabai, jenis terlupa, jenis tak
dipesan, atau jumlah); minta diulang dua kali atau lebih; atau "Semua pesanan benar. Serahkan lebih cepat...".

Rekor pendapatan disimpan di `localStorage` kunci `antre-gorengan:rekor` (angka rupiah), dibungkus `try/catch`.
Bila penyimpanan diblokir, hari tetap selesai dan lembar hasil menulis "Rekor tidak bisa disimpan di peramban
ini."

### Papan ketik

`1` sampai `6` nampan (urutan sama dengan nomor di sekat), `C` cabai, `Backspace` kurangi isi terakhir, `Enter`
serahkan, `U` ulangi pesanan. Selama warung buka, `Enter` selalu menyerahkan walau fokus ada di sekat nampan,
supaya pemain yang baru mengklik nampan tidak menambah biji tanpa sengaja; `Spasi` menekan tombol yang sedang
difokus. Sebelum buka, `Enter` membuka warung (kecuali di tombol Cara main). `Esc` menutup Cara main. Urutan Tab:
Cara main, Kurangi, enam sekat gorengan, cabai, Ulangi pesanan, Serahkan. Setelah buka fokus pindah ke Serahkan;
setelah tutup ke Buka warung lagi. Cincin fokus digambar sebagai `::after` 6 px di luar tombol dengan
`z-index` di atas tetangganya, supaya tidak tertutup gambar di dalam sekat atau sekat di sebelahnya.

### Angka kalibrasi

| Contoh pesanan | Frasa | Unit | Balon | Sabar penuh | Potongan ulangi |
|---|---|---|---|---|---|
| Bakwan satu ya. | 1 | 1 | 2,7 s | 10,4 s | 2,6 s |
| Pisang goreng dua, cabainya empat ya. | 2 | 6 | 3,6 s | 14,4 s | 3,6 s |
| Bakwan dua, tahu isi satu, cabainya tiga ya. | 3 | 6 | 4,5 s | 16,4 s | 4,1 s |
| Bakwan tiga, tahu isi dua, pisang goreng empat, risol satu, cabainya enam, dibungkus ya. | 5 | 16 | 6,3 s | 24,4 s | 6,1 s |

Satu pembeli paling cepat memakan 2,1 detik di luar waktu mengambil (reaksi pas 1,3 detik dan pergantian 0,8
detik). Hasil uji otomatis (bukan data pemain): pengait yang mengisi kantong seketika melayani 38 sampai 42
pembeli dalam satu hari; skrip papan ketik yang menekan satu tuts per 25 ms melayani 29 sampai 33 pembeli dengan
pendapatan Rp268.500 sampai Rp304.000, semuanya benar.

## Pengait uji

`window.__antreGorengan`:

- `keadaan()`: fase (`siap`, `buka`, `tutup`), benih, sisa waktu, waktu habis, kas, nomor pembeli, pembeli
  (tokoh, peran, sapaan, keadaan `menunggu`, `datang`, `layani`, `reaksi`), pesanan, teks pesanan, balon tampil
  dan sisanya, balon tanya, teks balon yang sedang tampil, sabar (pecahan, detik, penuh), jumlah ulangan, isi
  kantong dan urutannya, catatan tiap pembeli (pesanan, kantong, benar, pergi, sebab, bayar, kesalahan,
  kalimat), hitungan hari, ringkasan lembar hasil, rekor, tombol yang nonaktif, isi HUD, teks status, teks yang
  terakhir dibacakan, gerak dikurangi, jeda, dan beku.
- `baru({ benih })`: hari baru dengan urutan tetap, kembali ke keadaan sebelum buka.
- `buka()`: membuka warung (sama dengan tombol Buka warung atau Buka warung lagi).
- `ambil(jenis)`, `kurangi()`, `serahkan()`, `ulangi()`: sama dengan tombol dan tuts. `jenis` salah satu dari
  `bakwan`, `tahu`, `mendoan`, `pisang`, `cireng`, `risol`, `cabai`.
- `isiBenar()`: mengisi kantong persis sesuai pesanan. `isiKantong({ bakwan: 2, cabai: 1 })`: mengisi kantong
  dengan isi tertentu.
- `maju(detik)`: memajukan jam permainan tanpa menunggu. `sampaiLayani()`: maju sampai pembeli berikutnya siap
  dilayani.
- `beku(true|false)`: menghentikan jam permainan (hiasan tetap bergerak), untuk potret layar yang pasti.
- `aturPesanan(isi, tokoh)`: mengganti pesanan pembeli yang sedang dilayani dan menampilkan balonnya dari awal,
  misalnya `aturPesanan({ bakwan: 2, tahu: 1, pisang: 3, cabai: 4 }, 'ibu')`. Tokoh yang sama di antrean ditukar.
- `tataLetak()`: titik tengah tiap tombol dalam piksel halaman (untuk tetikus atau sentuhan sungguhan) dan
  kotak balon terakhir.
- `gambarPersegi(sisi)`: PNG persegi dari adegan saat ini dengan tema aktif; kotak dipotong ke x 22 sampai 372
  supaya pembeli dan balon lebih besar.
- `harga`, `nilaiPesanan(pesanan, kantong)`: data dan aturan pembayaran murni.
