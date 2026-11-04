// Daftar game. Menambah game: taruh berkasnya di games/<id>/ (lihat scripts/bungkus-game.mjs),
// buat games/<id>/thumb.png, lalu tambahkan satu entri di sini.
// `rilis` dipakai untuk urutan "Terbaru"; `kategori` harus salah satu kunci KATEGORI di app.js.
window.GAMES = [
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
