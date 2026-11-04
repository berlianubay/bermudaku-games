# Es Teh Plastik: arah desain

> Arah dari agen utama Bermudaku Games (4 November 2026): game orisinal untuk portal games.bmdku.com.
> Meja warung tampak samping. Kantong plastik bening berisi es batu dipegang terbuka di dalam gelas penyangga,
> teko di atasnya. Pemain menuang sampai pas di garis sasaran, lalu mengikat kantong dengan karet.
> Tidak meniru game mana pun; semua gambar dilukis dengan Canvas 2D, tanpa berkas gambar.

## Identitas

Game singkat satu layar tentang keterampilan kecil penjual minuman pinggir jalan: menuang es teh ke kantong
plastik tanpa kurang dan tanpa tumpah, lalu mengikatnya rapat. Dunianya meja kayu warung, gelas plastik
penyangga, kantong bening yang bibirnya berkerut, **teko blirik** (email hijau berbintik putih, bibir dan
gagang gelap) yang akrab di warung Jawa, dan karet gelang merah.

Motif identitas: **merah karet gelang**. Merah yang sama dipakai untuk garis sasaran di kantong, busur
"ikat di sini" pada penanda putaran karet, karet yang melilit leher kantong, dan tombol aksi besar.
Keempatnya satu cerita: garis yang dibidik, karet yang mengikat, tombol yang ditekan. Di tempat lain merah
tidak dipakai, termasuk untuk tanda gagal (gagal ditulis dengan kata, latar tinta).

## Kepribadian

Hangat dan apa adanya, seperti obrolan di depan gerobak. Pembeli bicara pendek ("Es jeruk satu, buat di
jalan.") dan bereaksi jujur ("Kok cuma segini?", "Lho, bocor waktu diikat."). Setiap hasil menyebut angka
yang terjadi (isi saat tombol dilepas, berapa mm sisa di cerat menambah) dan satu saran yang bisa langsung
dicoba di pesanan berikutnya.

## Palet

| Peran | Terang | Gelap |
|---|---|---|
| Latar | `#EEF3E7` ubin dinding warung kehijauan | `#0F1C17` warung malam |
| Tinta | `#15362A` hijau tua cat meja warung | `#E8F1EA` |
| Tinta pendamping | `#46604F` | `#A6BEAF` |
| Garis kontrol | `#6A8475` | `#7A9787` |
| Lembar (hasil, dialog) | `#FBFCF7` | `#18291F` |
| Aksen tunggal | `#BE2D3A` merah karet gelang (teks putih) | `#FF8F96` (teks `#2B0A0D`) |

Alasan: dua warna inti (hijau ubin dan hijau tua) diambil dari dinding dan cat warung, sekaligus sekeluarga
dengan teko blirik, jadi antarmuka dan benda di meja memakai bahasa yang sama. Latar hijau pucat juga membuat
warna minuman (cokelat, jingga, krem) paling menonjol, karena minuman adalah fokus satu-satunya. Aksen merah
karet gelang dibatasi pada empat tempat di atas. Dua tema karena es teh dijual siang sampai malam dan portal
mengisi `data-theme`; tema mengikuti `prefers-color-scheme` dan dikalahkan oleh `data-theme="light|dark"`.

Warna dunia sama di kedua tema karena itu benda nyata: kayu meja `#C38F5B`/`#94643A`, teko `#2E5E43` dengan
bintik putih, karet dan garis sasaran `#BE2D3A` di atas halo krem `#FBFCF7`. Yang mengikuti tema hanya garis
kaca dan plastik (tinta dengan alfa), isi kaca, kilap, label "batas ikat", dan penanda karet. Gagang dan
kenop teko diberi tepi tipis warna kaca supaya tetap terbaca di tema gelap.

Warna minuman (isi dunia, bukan warna antarmuka):

| Minuman | Cairan | Busa | Ciri |
|---|---|---|---|
| Es teh manis | `#9E4E17`, alfa 0,86 | `#E8C597`, 1,4 mm | paling pekat |
| Es teh tawar | `#C68A34`, alfa 0,72 | `#F1DDB4`, 1,1 mm | lebih bening, es terlihat |
| Es jeruk | `#EE9420`, alfa 0,88 | `#FBD9A0`, 0,9 mm | bulir jeruk |
| Es kopi susu | `#A8774E`, alfa 0,95 | `#EEDCC3`, 3 mm | hampir tidak tembus, busa tebal |
| Es cincau | `#C4CF93`, alfa 0,9 | `#F2F2DC`, 0,8 mm | santan pandan, kubus cincau `#2B4A25` tenggelam di dasar |

Pembeli digambar dengan bentuk sederhana (kepala bulat, mata titik, mulut garis) dan peran, bukan nama:
anak sekolah (kemeja putih, dasi merah), ibu pulang pasar (kerudung marun), kurir motor (helm), tukang
bangunan (helm proyek kuning, handuk di bahu), mahasiswa (kacamata, hoodie). Ekspresi: menunggu, senang,
kecewa, kaget.

### Kontras (dihitung dengan rumus WCAG lewat Node)

| Pasangan | Terang | Gelap | Syarat |
|---|---|---|---|
| Tinta di latar (judul, ucapan, keterangan) | 11,68 | 15,18 | 4,5 |
| Tinta di lembar (lembar hasil, baris deret aktif, dialog, label batas ikat) | 12,79 | 13,23 | 4,5 |
| Tinta pendamping di latar (urutan, keterangan, deret berikutnya, tombol nonaktif) | 6,11 | 8,85 | 4,5 |
| Tinta pendamping di lembar (saran babak, rincian) | 6,69 | 7,71 | 4,5 |
| Garis kontrol vs latar / lembar | 3,60 / 3,94 | 5,51 / 4,80 | 3 |
| Teks tombol aksen | 5,79 | 8,35 | 4,5 |
| Aksen vs latar (batas tombol, garis di ikon deret) | 5,13 | 8,03 | 3 |
| Cincin fokus dan titik karet (tinta) vs latar | 11,68 | 15,18 | 3 |

| Pasangan kanvas (sama di dua tema) | Rasio | Syarat |
|---|---|---|
| Garis sasaran dan busur karet `#BE2D3A` di halo krem | 5,62 | 3 |
| Label "garis" putih di merah | 5,79 | 4,5 |
| Nilai di bawah kantong: tinta `#15362A` di krem | 12,79 | 4,5 |
| Label "gagal": krem di tinta | 12,79 | 4,5 |
| Halo krem vs es teh manis / es kopi susu | 5,73 / 3,76 | 3 |
| Garis merah vs es cincau (halo tidak dibutuhkan) | 3,50 | 3 |

Garis merah di atas teh manis hanya 1,07:1, karena itu garis sasaran selalu digambar di atas halo krem; untuk
minuman pucat (cincau) merahnya sendiri yang kontras. Garis batas ikat sengaja lebih lemah: titik-titik tipis
warna tinta tema tanpa halo, dengan label berlatar lembar.

## Tipografi

- Judul, angka total, tombol aksi: **Shrikhand**. Huruf tebal miring berekor ini mirip tulisan cat di spanduk
  dan gerobak es teh pinggir jalan, dan berbeda dari huruf judul game lain di portal.
- Teks dan label di kanvas: **Plus Jakarta Sans** (400, 600, 700, 800). Dirancang untuk bahasa Indonesia, sama
  dengan keluarga app lain di D:\Claude, dan angka tebalnya jelas di 11 px.

## Tata letak

Satu layar tanpa gulir, satu fokus: kantong di gelas.

- Potret (375x690): kepala (judul, Cara main), kartu pesanan (wajah 52 px dan ucapan), meja, lalu keterangan
  (dicadangkan 4 baris supaya meja tidak melompat) dan tombol aksi 62 px di bawah jempol. Saat babak selesai,
  kartu pesanan disembunyikan, meja menampilkan jajaran lima kantong, lembar hasil berisi total, judul, saran,
  rincian lima pesanan, rekor, dan "Layani lagi".
- Lanskap atau laptop (lebar minimal 640 px): meja di kiri, kolom kanan `clamp(300px, 31vw, 400px)` berisi
  kepala, kartu pesanan (wajah 76 px), deret lima pesanan (ikon kantong berwarna minuman, nama, nilai), keterangan,
  dan tombol aksi 76 px menempel di dasar kolom. Saat selesai, lembar hasil menggantikan keterangan dan tombol;
  rincian tidak diulang karena deret sudah memuatnya.
- HP diputar mendatar (tinggi di bawah 520 px): kolom kanan `clamp(290px, 50vw, 420px)`, tanpa deret. Saat
  selesai, kartu pesanan disembunyikan dan rincian hanya untuk pembaca layar, karena nilai tiap kantong sudah
  tertulis di bawah kantongnya.
- Kanvas memakai satuan mm dunia. Kotak komposisi x -116 sampai 100 mm, y -14 sampai 284 mm (0 = dasar gelas),
  diskalakan sebesar mungkin dan ditengahkan. Di 375x690 kantong setinggi sekitar 225 px, di 1280x670 sekitar
  360 px. Meja kayu selalu selebar kanvas.

Dial: ENERGY 2 / RHYTHM 1 / MOTION 2

RHYTHM 1 karena satu layar permainan dengan satu fokus. MOTION 2 karena gerak adalah isi permainan.

## Gerak

- Inti (tidak pernah dimatikan): teko miring, aliran teh, isi naik, es ikut naik, tetes dari cerat, teh tumpah
  dan meluber, penanda karet berputar, kantong dikumpulkan dan diikat (0,8 detik; 0,45 detik bila gerak
  dikurangi).
- Hias (dimatikan oleh `prefers-reduced-motion`): gelombang permukaan (pegas 24 titik, riak diam sesekali dan
  dorongan dari aliran dan tetes), goyangan es di gelombang, percikan kecil di titik jatuh aliran, kantong lama
  yang bergeser keluar (0,5 detik) dan kantong baru yang muncul pelan (0,3 detik). Bila gerak dikurangi,
  permukaan datar, es naik lurus mengikuti isi, dan pergantian pesanan langsung.
- Busa: tebal dasar per minuman ditambah sampai 2,4 mm saat aliran deras, lalu surut pelan.

## Aturan permainan

1. Satu babak = 5 pesanan berurutan. Urutan minuman dan pembeli diacak; garis sasaran memakai lima tinggi
   74, 86, 98, 110, 122 mm yang diacak urutannya lalu digeser acak -3 sampai 3 mm, jadi tiap pesanan berbeda.
2. Menuang: tahan tombol **Tuang**, atau tahan tetikus atau jari di atas meja/kantong, atau tahan `Spasi`/`Enter`.
   Teko miring 32 derajat per detik sampai 78 derajat. Teh baru keluar setelah 24 derajat (0,75 detik sejak
   ditekan). Laju kenaikan isi = 34 x u^1,5 mm per detik dengan u = (miring - 24) / 54; teko miring penuh 2,44
   detik sejak ditekan, saat itu isi sudah 23 mm, lalu isi naik tetap 34 mm per detik.
3. Melepas sebelum teh keluar tidak dihitung: teko kembali tegak dan pemain boleh mencoba lagi.
4. Setelah dilepas, **teh tidak langsung berhenti** (angka tetap):
   - aliran surut lurus ke nol selama 0,45 detik, menambah laju saat dilepas x 0,225 detik;
   - lalu cerat menetes 4 kali (0,55; 0,68; 0,81; 0,94 detik setelah dilepas), tiap tetes 0,25 mm, dihitung saat
     tetes menyentuh permukaan (sekitar 0,15 detik kemudian);
   - total jeda sekitar 1,1 detik. Bila dilepas saat teko sudah miring penuh (selalu begitu untuk garis di atas
     23 mm), tambahannya **8,65 mm**. Jadi lepas kira-kira 9 mm sebelum garis.
   Satu pesanan = satu kali tahan; selama tetes berjalan tombol tidak menerima tuang baru.
5. Mengikat: 0,3 detik setelah tetes terakhir, titik karet berputar di lingkaran samping kantong, satu putaran
   1,4 detik, searah jarum jam. Busur merah selebar 64 derajat (0,25 detik) di posisi acak per pesanan; titik mulai
   berseberangan dengan busur. Tekan sekali (**Ikat**, `Spasi`, `Enter`, atau ketuk/klik kantong) saat titik di busur
   = ikatan kencang; di luar busur = ikatan longgar (karet miring dengan ujung terjuntai), nilai dikurangi 10.
6. Batas ikat: kantong butuh plastik kosong untuk dipelintir. Bila saat diikat isi lebih dari **10 mm di atas
   garis** (garis titik-titik "batas ikat"), teh terperas keluar: isi turun ke batas ikat, teh menggenang di meja,
   pesanan **gagal** (0) dengan sebab "meluber", apa pun posisi titik karet.
7. Tumpah: bila isi mencapai bibir kantong (178 mm) saat menuang atau saat tetes, tuang berhenti, teh mengalir di
   sisi luar kantong dan gelas ke meja, pesanan **gagal** (0) dengan sebab "tumpah". Dengan tombol ditahan terus,
   ini terjadi sekitar 7,0 detik sejak ditekan.
8. Nilai pesanan: selisih = isi saat diikat - garis, dibulatkan 0,1 mm. Selisih sampai 1 mm = 100; setelah itu
   100 - 6 x (|selisih| - 1), dibulatkan, paling kecil 0. Contoh: 3 mm = 88, 5 mm = 76, 10 mm = 46. Lalu dikurangi
   10 bila ikatan longgar. Total babak = jumlah lima nilai, paling tinggi 500.
9. Rekor total disimpan di `localStorage` kunci `es-teh-plastik:rekor` (angka), dibungkus `try/catch`. Bila
   penyimpanan diblokir, babak tetap selesai dan lembar hasil menulis "Rekor tidak bisa disimpan di peramban ini."
10. Papan ketik: `Tab` ke tombol aksi (urutan: Cara main, lalu tombol aksi), tahan `Spasi` atau `Enter` untuk
    menuang, tekan untuk mengikat dan untuk memanggil pembeli berikutnya (diabaikan 0,35 detik pertama supaya
    hasil terbaca). Fokus tetap di tombol aksi sepanjang babak dan pindah ke "Layani lagi" saat selesai.
    `Esc` menutup Cara main. Klik tanpa tetikus atau papan ketik (pembaca layar, kontrol suara) pada tombol aksi
    menyalakan lalu mematikan tuang, sebagai ganti menahan.
11. Tombol aksi berganti label sesuai keadaan: Tuang, Menuang, Menetes, Ikat, Mengikat, Pembeli berikutnya. Saat
    menunggu (menetes, mengikat, tumpah, meluber) tombol tetap bisa difokus tetapi `aria-disabled` dan bergaya
    garis.

### Penjelasan hasil

| Keadaan | Judul | Saran |
|---|---|---|
| Tumpah | Tumpah lewat bibir kantong. Nilai 0. | lama tombol ditahan, lalu "lepas saat teh masih sekitar 9 mm di bawah garis merah" |
| Meluber | Meluber saat diikat. Nilai 0. | isi di atas garis dan batas 10 mm, lalu "lepas saat teh masih sekitar 9 mm di bawah garis" |
| Lebih / kurang > 1 mm | Lebih 3,4 mm, ikatan kencang. Nilai 86. | isi saat dilepas terhadap garis dan tambahan dari cerat, "Lepas sedikit lebih awal" atau "Tahan sedikit lebih lama" |
| Pas, ikatan longgar | Pas di garis (selisih 0,6 mm), ikatan longgar, minus 10. Nilai 90. | "karet ditarik terlambat" (titik sudah lewat busur, kurang dari setengah putaran) atau "terlalu cepat" (titik belum sampai) |
| Pas, kencang | Pas di garis (...), ikatan kencang. Nilai 100. | Pertahankan, dengan tambahan dari cerat |

Sebelum pesanan berikutnya, keterangan mengulang "Pesanan tadi: setelah dilepas, sisa di cerat menambah 8,6 mm"
supaya jeda cerat bisa dipelajari. Saran babak dipilih satu: ada yang gagal, rata-rata lebih dari 2 mm, rata-rata
kurang dari 2 mm, dua ikatan longgar atau lebih, atau "pertahankan".

### Angka kalibrasi

Lama tahan supaya isi akhir tepat di garis (dari model yang sama dengan permainan):

| Garis | Lama tahan | Tambahan setelah dilepas |
|---|---|---|
| 70 mm | 3,57 detik | 8,65 mm |
| 90 mm | 4,16 detik | 8,65 mm |
| 110 mm | 4,74 detik | 8,65 mm |
| 130 mm | 5,33 detik | 8,65 mm |

Pada laju penuh 34 mm per detik, meleset 0,1 detik saat melepas = 3,4 mm = 88 poin. Simulasi 400 babak (bukan
data pemain): waktu lepas diberi galat acak normal, waktu ikat diberi galat yang sama, garis 74 sampai 122 mm.

| Tangan | Galat waktu (simpangan baku) | Total p10 / median / p90 |
|---|---|---|
| Rapi, tahu jeda cerat | 0,04 detik | 478 / 490 / 498 |
| Sedang, tahu jeda cerat | 0,08 detik | 426 / 457 / 479 |
| Kasar, tahu jeda cerat | 0,15 detik | 317 / 383 / 434 |
| Pemula, melepas tepat saat teh sampai garis | 0,08 detik | 115 / 218 / 295 |

Judul total dipilih dari sebaran itu:

| Total | Judul |
|---|---|
| 470 ke atas | Semua pas di garis. Pembeli jadi langganan. |
| 400 ke atas | Rapi. Pembeli pulang senang. |
| 300 ke atas | Lumayan, ada yang protes sedikit. |
| 150 ke atas | Pembeli masih maklum. |
| di bawahnya | Mejanya basah. Ayo coba lagi. |

### Bentuk benda (mm)

| Benda | Ukuran |
|---|---|
| Gelas penyangga | tinggi 145, setengah lebar 34,5 di dasar sampai 42 di bibir |
| Kantong | setengah lebar 31 di dasar sampai 38 di bibir gelas, mekar ke 47 di bibir kantong (178) |
| Es batu | 4 kubus 13,5 sampai 16 (3 untuk es cincau, di atas 4 kubus cincau 12,5); mengapung bila permukaan cukup tinggi, 27% ukurannya di atas permukaan |
| Teko blirik | skala 0,88, digambar miring 0,75 x sudut fisika supaya gagang tidak keluar layar; ujung cerat bergerak dari (8, 256) saat tegak ke (-4, 190) saat miring penuh |
| Aliran | parabola dari ujung cerat, kecepatan keluar 60 + 90 x (laju / 34) mm/s, tebal 1 + 4 x (laju / 34) mm, dibatasi dinding kantong |
| Leher ikatan | dikumpulkan dari 3 mm di atas isi ke leher 20 mm di atasnya, ekor plastik 15 mm |

Volume dihitung sebagai tinggi isi (penampang kantong dianggap tetap); integral laju dihitung tepat per langkah,
jadi hasil tidak bergantung pada laju bingkai. Simulasi berjalan per 1/120 detik dan dimajukan ke waktu kejadian
setiap kali tombol ditekan atau dilepas.

## Pengait uji

`window.__esTehPlastik`:

- `keadaan()`: fase (`siap`, `tuang`, `surut`, `tumpah`, `ikat`, `mengikat`, `meluber`, `hasil`, `ganti`, `selesai`),
  nomor pesanan, benih, minuman, pembeli, garis, batas ikat, isi, selisih, sudut teko, laju, tumpahan, sumber yang
  menahan, sudut titik karet dan busur, data tuang (lama tahan, isi saat dilepas, tetes jatuh), hasil tiap pesanan,
  total, rekor, teks keterangan, ringkasan, label tombol, dan apakah gerak dikurangi.
- `baru({ benih })`: babak baru dengan urutan tetap.
- `tahan()`, `lepas()`, `tekan()`: sama dengan menahan, melepas, dan menekan sekali tombol aksi.
- `maju(detik)`: memajukan waktu permainan tanpa menunggu.
- `tuangSampai(mm)`: menahan sampai isi mencapai mm lalu melepas (tetes belum dihitung).
- `ikat(tepat = true)`: memajukan sampai tetes selesai, menunggu titik karet ke tengah busur (atau berseberangan
  bila `false`), lalu mengikat dan menunggu animasinya.
- `lanjut()`: memanggil pembeli berikutnya.
- `simulasi(lamaTahan)`, `nilaiIsi(selisih)`, `lagPenuh`: model murni untuk kalibrasi.
- `tataLetak()`: letak kantong dan tombol aksi dalam piksel halaman, untuk tetikus atau sentuhan sungguhan.
- `label()`: kotak label "garis" dan "batas ikat" yang terakhir digambar.
- `gambarPersegi(sisi)`: PNG persegi dari adegan saat ini dengan latar tema aktif, misalnya untuk kartu 480x480.
