// Daftar game. Menambah game: taruh berkasnya di games/<id>/ (lihat scripts/bungkus-game.mjs),
// buat games/<id>/thumb.png, lalu tambahkan satu entri di sini.
// `rilis` dipakai untuk urutan "Terbaru"; `kategori` harus salah satu kunci KATEGORI di app.js.
window.GAMES = [
  {
    id: 'layangan-putus',
    judul: 'Layangan Putus',
    rilis: '2026-11-04',
    kategori: 'singkat',
    deskripsi: {
      id: 'Adu layangan dari atap rumah. Saat benang bersilangan, tarik lebih cepat dari lawan untuk memutus benangnya. Lima level, angin makin bandel.',
      en: 'Fight kites from the rooftops. When the strings cross, pull faster than your rival to cut their line. Five levels, each windier than the last.'
    }
  },
  {
    id: 'antre-gorengan',
    judul: 'Antre Gorengan',
    rilis: '2026-11-04',
    kategori: 'singkat',
    deskripsi: {
      id: 'Ingat pesanan pembeli sebelum balon katanya hilang, lalu bungkus bakwan, tahu isi, dan cabainya dengan pas. Satu hari jualan, 90 detik.',
      en: 'Remember each order before the speech bubble fades, then bag the fritters and chillies exactly right. One day at the stall, 90 seconds.'
    }
  },
  {
    id: 'tambal-ban',
    judul: 'Tambal Ban',
    rilis: '2026-11-04',
    kategori: 'singkat',
    deskripsi: {
      id: 'Celup ban dalam ke baskom, cari bocornya dari gelembung, lalu amplas, lem, dan tempel tambalan. Lima pelanggan, ada yang bannya tertancap paku.',
      en: 'Dunk the inner tube in a basin, find the leak by its bubbles, then sand, glue and patch it. Five customers, one with a nail still stuck in.'
    }
  },
  {
    id: 'panjat-pinang',
    judul: 'Panjat Pinang',
    rilis: '2026-11-04',
    kategori: 'singkat',
    deskripsi: {
      id: 'Panjat batang pinang berlumur oli dengan tangan kiri dan kanan bergantian. Jaga iramanya: terlalu cepat tergelincir, terlalu lambat melorot.',
      en: 'Climb a greased pole with alternating left and right hands. Keep the rhythm: too fast and you slip, too slow and you slide down.'
    }
  },
  {
    id: 'es-teh-plastik',
    judul: 'Es Teh Plastik',
    rilis: '2026-11-04',
    kategori: 'singkat',
    deskripsi: {
      id: 'Tuang es teh ke kantong plastik pas sampai garis, lalu ikat dengan karet. Lima pesanan, jangan sampai tumpah.',
      en: 'Pour iced tea into a plastic bag right up to the line, then tie it with a rubber band. Five orders, no spills.'
    }
  },
  {
    id: 'gebok-sandal',
    judul: 'Gebok Sandal',
    rilis: '2026-11-04',
    kategori: 'singkat',
    deskripsi: {
      id: 'Lempar sandal jepit untuk merobohkan susunan kaleng dari bangku. Tiga sandal per level, dan jangan kena kucing yang tidur.',
      en: 'Throw a flip-flop to knock the cans off the bench. Three flip-flops per level, and do not hit the sleeping cat.'
    }
  },
  {
    id: 'potong-martabak',
    judul: 'Potong Martabak',
    rilis: '2026-11-04',
    kategori: 'singkat',
    deskripsi: {
      id: 'Bagi martabak manis untuk 4, 6, atau 8 tamu dengan potongan lurus. Makin rata potongannya, makin tinggi nilai kerataanmu.',
      en: 'Share a sweet martabak among 4, 6 or 8 guests with straight cuts. The more even the slices, the higher your evenness score.'
    }
  },
  {
    id: 'parkir-angkot',
    judul: 'Parkir Angkot',
    rilis: '2026-11-04',
    kategori: 'singkat',
    deskripsi: {
      id: 'Parkir paralel angkot panjang di celah pinggir jalan tanpa menyenggol mobil, motor, atau kerb. Empat level, makin sempit.',
      en: 'Parallel-park a long angkot into a gap by the curb without touching cars, motorbikes or the curb. Four levels, each tighter than the last.'
    }
  },
  {
    id: 'tumpuk-kerupuk',
    judul: 'Tumpuk Kerupuk',
    rilis: '2026-11-04',
    kategori: 'singkat',
    deskripsi: {
      id: 'Jatuhkan kerupuk dari capit dan tumpuk setinggi mungkin di atas piring. Rengginang menggelinding, kerupuk bawang licin.',
      en: 'Drop crackers from the tongs and stack them as high as you can on the plate. Rengginang rolls and kerupuk bawang slides.'
    }
  },
  {
    id: 'es-krim-putar',
    judul: 'Es Krim Putar',
    rilis: '2026-10-22',
    kategori: 'singkat',
    deskripsi: {
      id: 'Tahan, putar mengikuti lingkaran, lalu lepas. Tumpuk es krim lilit setinggi mungkin di atas cone tanpa roboh.',
      en: 'Hold, swirl along the circle, then let go. Stack soft serve as high as you can on the cone without it toppling.'
    }
  },
  {
    id: 'batas-rimba',
    judul: 'Batas Rimba',
    rilis: '2026-10-19',
    kategori: 'simulasi',
    deskripsi: {
      id: 'Simulasi 24 bulan di desa tepi hutan rawa gambut. Main sebagai petani sawit swadaya atau kelompok penjaga hutan desa.',
      en: 'A 24-month simulation in a village on the edge of a peat swamp forest. Play as an independent oil palm farmer or the village forest guards.'
    }
  }
];
