// Daftar game. Menambah game: taruh berkasnya di games/<id>/ (lihat scripts/bungkus-game.mjs),
// buat games/<id>/thumb.png, lalu tambahkan satu entri di sini.
// `rilis` dipakai untuk urutan "Terbaru"; `kategori` harus salah satu kunci KATEGORI di app.js.
window.GAMES = [
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
