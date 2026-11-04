(() => {
  'use strict';

  const REPO = 'https://github.com/berlianubay/bermudaku-games';
  const KATEGORI = ['singkat', 'simulasi'];
  const GAMES = Array.isArray(window.GAMES) ? window.GAMES : [];

  const TEKS = {
    id: {
      skip: 'Langsung ke isi',
      menu: 'Buka menu',
      menuNav: 'Menu',
      tutup: 'Tutup menu',
      bahasa: 'Bahasa',
      navGame: 'Game',
      navTentang: 'Tentang',
      tautan: 'Tautan',
      kodeGithub: 'Kode di GitHub',
      tampilan: 'Tampilan',
      otomatis: 'Otomatis',
      terang: 'Terang',
      gelap: 'Gelap',
      tagline: 'Game kecil yang langsung jalan di peramban. Tanpa unduh, tanpa akun.',
      cari: 'Cari game',
      kategori: 'Kategori',
      semua: 'Semua',
      singkat: 'Singkat',
      simulasi: 'Simulasi',
      urutkan: 'Urutkan',
      terbaru: 'Terbaru',
      az: 'Judul A-Z',
      jumlah: (n, total) => n === total ? `${total} game` : `${n} dari ${total} game`,
      kosongCari: q => `Tidak ada game yang cocok dengan “${q}”.`,
      kosongKategori: 'Belum ada game di kategori ini.',
      rakKosong: 'Rak ini belum berisi game.',
      tampilkanSemua: 'Tampilkan semua game',
      catatan: a => `Semua game di sini buatan Bermuda Lentera. Kode situs dan gamenya terbuka di ${a}.`,
      semuaGame: 'Semua game',
      bukaPenuh: 'Buka penuh',
      bahasaGame: '',
      memuat: j => `Memuat ${j}`,
      lambat: 'Masih memuat. Koneksi mungkin sedang lambat.',
      gagal: j => `${j} gagal dimuat. Periksa koneksi, lalu coba lagi.`,
      cobaLagi: 'Coba lagi',
      tidakAdaGame: 'Game ini tidak ada di rak.',
      tidakAdaHalaman: 'Halaman ini tidak ada.',
      tidakAdaIsi: 'Alamatnya mungkin salah ketik, atau gamenya sudah dipindah.',
      lihatSemua: 'Lihat semua game',
      tentang: 'Tentang',
      tentangJudul: 'Tentang Bermudaku Games',
      tentang1: 'Bermudaku Games adalah rak game kecil dari Bermuda Lentera, yang juga membuat aplikasi usaha di bermudaku.com.',
      tentang2: 'Semua game di sini jalan langsung di peramban, di HP maupun laptop. Tidak perlu mengunduh apa pun dan tidak perlu membuat akun.',
      tentang3: 'Kode situs ini dan semua gamenya terbuka di GitHub.',
      lnkBermudaku: 'Aplikasi Bermuda Lentera',
      lnkUbay: 'Ubay, pendiri Bermuda Lentera',
      lnkGithub: 'Kode sumber situs dan game'
    },
    en: {
      skip: 'Skip to content',
      menu: 'Open menu',
      menuNav: 'Menu',
      tutup: 'Close menu',
      bahasa: 'Language',
      navGame: 'Games',
      navTentang: 'About',
      tautan: 'Links',
      kodeGithub: 'Code on GitHub',
      tampilan: 'Appearance',
      otomatis: 'Auto',
      terang: 'Light',
      gelap: 'Dark',
      tagline: 'Small games that run right in your browser. No download, no account.',
      cari: 'Search games',
      kategori: 'Category',
      semua: 'All',
      singkat: 'Quick',
      simulasi: 'Simulation',
      urutkan: 'Sort',
      terbaru: 'Newest',
      az: 'Title A-Z',
      jumlah: (n, total) => n === total ? `${total} ${total === 1 ? 'game' : 'games'}` : `${n} of ${total} games`,
      kosongCari: q => `No game matches “${q}”.`,
      kosongKategori: 'No games in this category yet.',
      rakKosong: 'There are no games here yet.',
      tampilkanSemua: 'Show all games',
      catatan: a => `Every game here is made by Bermuda Lentera. The code for the site and the games is open on ${a}.`,
      semuaGame: 'All games',
      bukaPenuh: 'Full page',
      bahasaGame: 'In Indonesian. ',
      memuat: j => `Loading ${j}`,
      lambat: 'Still loading. Your connection may be slow.',
      gagal: j => `${j} failed to load. Check your connection, then try again.`,
      cobaLagi: 'Try again',
      tidakAdaGame: 'This game is not here.',
      tidakAdaHalaman: 'This page does not exist.',
      tidakAdaIsi: 'The address may have a typo, or the game has moved.',
      lihatSemua: 'See all games',
      tentang: 'About',
      tentangJudul: 'About Bermudaku Games',
      tentang1: 'Bermudaku Games is a shelf of small games from Bermuda Lentera, the team behind the business apps at bermudaku.com.',
      tentang2: 'Every game here runs right in the browser, on a phone or a laptop. Nothing to download and no account to create. The games are in Indonesian for now.',
      tentang3: 'The code for this site and all of its games is open on GitHub.',
      lnkBermudaku: 'Bermuda Lentera apps',
      lnkUbay: 'Ubay, founder of Bermuda Lentera',
      lnkGithub: 'Source code for the site and games'
    }
  };

  const simpan = {
    baca(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    tulis(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* mode privat: pilihan berlaku sampai halaman ditutup */ } }
  };

  const bahasaAwal = () => {
    const tersimpan = simpan.baca('bg-bahasa');
    if (tersimpan === 'id' || tersimpan === 'en') return tersimpan;
    const daftar = navigator.languages || [navigator.language || ''];
    if (daftar.some(l => /^(id|ms)\b/i.test(l))) return 'id';
    return /^en\b/i.test(daftar[0] || '') ? 'en' : 'id';
  };

  let bahasa = bahasaAwal();
  let tema = simpan.baca('bg-tema') || 'auto';
  const filter = { cari: '', kategori: 'semua', urut: 'terbaru' };

  const $ = (s, root = document) => root.querySelector(s);
  const main = $('#main');
  const headMid = $('#head-mid');
  const langSel = $('#lang');
  const menuBtn = $('#menu-btn');
  const side = $('#side');
  const backdrop = $('#side-backdrop');

  const t = (k, ...a) => {
    const v = TEKS[bahasa][k];
    return typeof v === 'function' ? v(...a) : v;
  };
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const lipat = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

  const LOGO = '<img src="assets/logo.svg" alt="" width="34" height="34">';
  const IKON_KISI = '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/></svg>';
  const IKON_PENUH = '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>';
  const IKON_CARI = '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5L20 20"/></svg>';
  // Tanda Bermudaku dengan matahari yang naik-turun: penanda memuat, berhenti bila gerak dikurangi.
  const MATAHARI = '<svg class="sun" viewBox="0 0 100 100" aria-hidden="true"><defs><clipPath id="sun-clip"><rect width="100" height="60"/></clipPath></defs><g clip-path="url(#sun-clip)"><circle class="disc" cx="50" cy="49" r="26" fill="#C2A158"/></g><rect x="6" y="60" width="88" height="6" rx="3" fill="#F2ECDF"/></svg>';

  /* Teks statis, tema, bahasa */

  function terapkanTeks() {
    document.documentElement.lang = bahasa;
    langSel.value = bahasa;
    document.querySelectorAll('[data-t]').forEach(el => { el.textContent = t(el.dataset.t); });
    document.querySelectorAll('[data-t-label]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.tLabel)); });
  }

  function terapkanTema() {
    const akar = document.documentElement;
    if (tema === 'light' || tema === 'dark') akar.dataset.theme = tema;
    else delete akar.dataset.theme;
    document.querySelectorAll('input[name="tema"]').forEach(r => { r.checked = r.value === tema; });
    samakanTemaGame();
  }

  // Es Krim Putar membaca data-theme di <html>; game lain yang satu tema mengabaikannya.
  function samakanTemaGame() {
    const frame = $('.stage iframe');
    if (!frame) return;
    try {
      const akar = frame.contentDocument && frame.contentDocument.documentElement;
      if (!akar) return;
      if (tema === 'light' || tema === 'dark') akar.dataset.theme = tema;
      else delete akar.dataset.theme;
    } catch (e) { /* bingkai belum siap */ }
  }

  langSel.addEventListener('change', () => {
    bahasa = langSel.value === 'en' ? 'en' : 'id';
    simpan.tulis('bg-bahasa', bahasa);
    terapkanTeks();
    tampilkan(false);
  });

  document.querySelectorAll('input[name="tema"]').forEach(r => r.addEventListener('change', () => {
    tema = r.value;
    simpan.tulis('bg-tema', tema);
    terapkanTema();
  }));

  /* Laci menu */

  // Grup radio hanya bisa dicapai lewat pilihan yang aktif, jadi hanya itu yang dihitung.
  const bisaFokus = () => [...side.querySelectorAll('a[href], button, input[name="tema"]:checked')];

  function bukaLaci() {
    side.classList.add('open');
    backdrop.hidden = false;
    menuBtn.setAttribute('aria-expanded', 'true');
    $('#side-close').focus();
  }

  function tutupLaci(kembalikanFokus = true) {
    if (!side.classList.contains('open')) return;
    side.classList.remove('open');
    backdrop.hidden = true;
    menuBtn.setAttribute('aria-expanded', 'false');
    if (kembalikanFokus) menuBtn.focus();
  }

  menuBtn.addEventListener('click', () => (side.classList.contains('open') ? tutupLaci() : bukaLaci()));
  $('#side-close').addEventListener('click', () => tutupLaci());
  backdrop.addEventListener('click', () => tutupLaci());
  side.querySelectorAll('a[href^="#/"]').forEach(a => a.addEventListener('click', () => tutupLaci(false)));

  document.addEventListener('keydown', e => {
    if (!side.classList.contains('open')) return;
    if (e.key === 'Escape') { e.preventDefault(); tutupLaci(); return; }
    if (e.key !== 'Tab') return;
    const daftar = bisaFokus();
    const pertama = daftar[0];
    const terakhir = daftar[daftar.length - 1];
    if (e.shiftKey && document.activeElement === pertama) { e.preventDefault(); terakhir.focus(); }
    else if (!e.shiftKey && document.activeElement === terakhir) { e.preventDefault(); pertama.focus(); }
  });

  /* Rute */

  function bacaRute() {
    const h = location.hash.replace(/^#\/?/, '');
    if (h === '') return { nama: 'beranda' };
    if (h === 'tentang') return { nama: 'tentang' };
    const m = h.match(/^game\/([a-z0-9-]+)\/?$/);
    if (m) return { nama: 'game', id: m[1] };
    return { nama: 'hilang' };
  }

  function pasangLogo() {
    headMid.innerHTML = `<a class="head-logo" href="#/">${LOGO}Bermudaku Games</a>`;
  }

  function tandaiNav(nama) {
    side.querySelectorAll('[data-nav]').forEach(a => {
      if (a.dataset.nav === nama) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
  }

  function tampilkan(pindahFokus) {
    const rute = bacaRute();
    document.body.dataset.rute = rute.nama;
    tandaiNav(rute.nama === 'game' ? '' : rute.nama);
    if (rute.nama === 'beranda') berandaView();
    else if (rute.nama === 'tentang') tentangView();
    else if (rute.nama === 'game') {
      const game = GAMES.find(g => g.id === rute.id);
      if (game) mainView(game, pindahFokus);
      else hilangView(true);
    } else hilangView(false);
    if (pindahFokus && rute.nama !== 'game') {
      window.scrollTo(0, 0);
      main.focus({ preventScroll: true });
    }
  }

  window.addEventListener('hashchange', () => { tutupLaci(false); tampilkan(true); });

  /* Beranda */

  function berandaView() {
    document.title = 'Bermudaku Games';
    pasangLogo();
    main.className = 'wrap';
    const tombolKategori = ['semua', ...KATEGORI].map(k =>
      `<button class="tab" type="button" data-kategori="${k}" aria-pressed="${filter.kategori === k}">${esc(t(k))}</button>`).join('');
    main.innerHTML = `
      <section class="home-hero"><h1 class="tagline">${esc(t('tagline'))}</h1></section>
      <div class="controls">
        <form class="search" role="search">
          ${IKON_CARI}
          <label class="sr-only" for="cari">${esc(t('cari'))}</label>
          <input id="cari" type="search" placeholder="${esc(t('cari'))}" autocomplete="off" value="${esc(filter.cari)}">
        </form>
        <div class="tabs" role="group" aria-label="${esc(t('kategori'))}">${tombolKategori}</div>
        <div class="tally">
          <span class="count" id="count" aria-live="polite"></span>
          <div class="pick sort">
            <select id="urut" aria-label="${esc(t('urutkan'))}">
              <option value="terbaru">${esc(t('terbaru'))}</option>
              <option value="az">${esc(t('az'))}</option>
            </select>
          </div>
        </div>
      </div>
      <ul class="grid" id="grid"></ul>
      <div class="empty" id="empty" hidden></div>
      <p class="grid-note">${t('catatan', `<a href="${REPO}" rel="noopener">GitHub</a>`)}</p>`;

    $('#urut').value = filter.urut;
    $('.search').addEventListener('submit', e => e.preventDefault());
    $('#cari').addEventListener('input', e => { filter.cari = e.target.value; perbaruiKisi(); });
    $('#urut').addEventListener('change', e => { filter.urut = e.target.value; perbaruiKisi(); });
    main.querySelectorAll('.tab').forEach(b => b.addEventListener('click', () => {
      filter.kategori = b.dataset.kategori;
      main.querySelectorAll('.tab').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
      perbaruiKisi();
    }));
    perbaruiKisi();
  }

  function cocok(g) {
    if (filter.kategori !== 'semua' && g.kategori !== filter.kategori) return false;
    const q = lipat(filter.cari.trim());
    if (!q) return true;
    return lipat([g.judul, g.deskripsi[bahasa] || '', t(g.kategori)].join(' ')).includes(q);
  }

  function perbaruiKisi() {
    const daftar = GAMES.filter(cocok).sort((a, b) => filter.urut === 'az'
      ? a.judul.localeCompare(b.judul, bahasa)
      : b.rilis.localeCompare(a.rilis));
    const grid = $('#grid');
    const kosong = $('#empty');
    $('#count').textContent = t('jumlah', daftar.length, GAMES.length);

    grid.innerHTML = daftar.map(g => `
      <li><a class="card-link" href="#/game/${g.id}">
        <div class="card">
          <div class="thumb"><img src="games/${g.id}/thumb.png" alt="" loading="lazy" width="480" height="480"></div>
          <div class="meta">
            <h2 class="title">${esc(g.judul)}</h2>
            <p class="tags">#${esc(t(g.kategori))}</p>
            <p class="year">${g.rilis.slice(0, 4)}</p>
          </div>
        </div>
      </a></li>`).join('');
    grid.querySelectorAll('.thumb img').forEach((img, i) => {
      const ganti = () => { img.outerHTML = `<div class="noimg">${esc(daftar[i].judul)}</div>`; };
      img.addEventListener('error', ganti, { once: true });
      if (img.complete && img.naturalWidth === 0 && img.currentSrc) ganti();
    });

    kosong.hidden = daftar.length > 0;
    if (daftar.length === 0) {
      const q = filter.cari.trim();
      const pesan = GAMES.length === 0 ? t('rakKosong') : q ? t('kosongCari', q) : t('kosongKategori');
      kosong.innerHTML = `<img src="assets/logo.svg" alt="" width="52" height="52"><p>${esc(pesan)}</p>` +
        (GAMES.length ? `<button class="btn" type="button" id="reset">${esc(t('tampilkanSemua'))}</button>` : '');
      const reset = $('#reset');
      if (reset) reset.addEventListener('click', () => {
        filter.cari = '';
        filter.kategori = 'semua';
        berandaView();
        $('#cari').focus();
      });
    }
  }

  /* Halaman main */

  function mainView(game, pindahFokus) {
    document.title = `${game.judul} | Bermudaku Games`;
    headMid.innerHTML = `<h1 class="head-title">${esc(game.judul)}</h1>`;
    main.className = 'play';
    const src = `games/${game.id}/`;
    main.innerHTML = `
      <div class="stage">
        <iframe src="${src}" title="${esc(game.judul)}" allow="fullscreen; autoplay"></iframe>
        <div class="stage-state" id="stage-state" role="status"></div>
      </div>
      <div class="play-bar">
        <a class="btn" href="#/">${IKON_KISI}<span>${esc(t('semuaGame'))}</span></a>
        <p class="play-desc">${esc(t('bahasaGame') + game.deskripsi[bahasa])}</p>
        <a class="btn" href="${src}">${IKON_PENUH}<span>${esc(t('bukaPenuh'))}</span></a>
      </div>`;

    const frame = $('.stage iframe');
    const status = $('#stage-state');
    let jamLambat;

    const memuat = () => {
      status.hidden = false;
      status.innerHTML = `${MATAHARI}<p>${esc(t('memuat', game.judul))}</p>`;
      clearTimeout(jamLambat);
      jamLambat = setTimeout(() => {
        if (!document.body.contains(status) || status.hidden) return;
        status.innerHTML = `${MATAHARI}<p>${esc(t('lambat'))}</p>
          <div class="row"><button class="btn" type="button" id="ulang">${esc(t('cobaLagi'))}</button></div>`;
        $('#ulang').addEventListener('click', muatUlang);
      }, 15000);
    };

    const muatUlang = () => { memuat(); frame.src = src; };

    frame.addEventListener('load', () => {
      clearTimeout(jamLambat);
      let gagal;
      try {
        const doc = frame.contentDocument;
        gagal = !doc || !doc.body || !!doc.querySelector('meta[name="bg-404"]');
      } catch (e) {
        gagal = true; // halaman galat peramban (luring) tidak bisa dibaca dari sini
      }
      if (gagal) {
        status.hidden = false;
        status.innerHTML = `<img src="assets/logo.svg" alt="" width="56" height="56"><p>${esc(t('gagal', game.judul))}</p>
          <div class="row">
            <button class="btn btn-ink" type="button" id="ulang">${esc(t('cobaLagi'))}</button>
            <a class="btn" href="#/">${esc(t('semuaGame'))}</a>
          </div>`;
        $('#ulang').addEventListener('click', muatUlang);
        return;
      }
      status.hidden = true;
      status.innerHTML = '';
      samakanTemaGame();
      if (pindahFokus) frame.focus();
    });

    memuat();
  }

  /* Tentang dan tidak ditemukan */

  function tentangView() {
    document.title = `${t('tentang')} | Bermudaku Games`;
    pasangLogo();
    main.className = '';
    main.innerHTML = `
      <article class="page">
        <img class="mark" src="assets/logo.svg" alt="" width="56" height="56">
        <h1>${esc(t('tentangJudul'))}</h1>
        <p>${esc(t('tentang1'))}</p>
        <p>${esc(t('tentang2'))}</p>
        <p>${esc(t('tentang3'))}</p>
        <ul class="link-list">
          <li><a href="https://bermudaku.com" rel="noopener"><span>${esc(t('lnkBermudaku'))}</span><span class="host">bermudaku.com</span></a></li>
          <li><a href="https://ubaayb.com" rel="noopener"><span>${esc(t('lnkUbay'))}</span><span class="host">ubaayb.com</span></a></li>
          <li><a href="${REPO}" rel="noopener"><span>${esc(t('lnkGithub'))}</span><span class="host">github.com</span></a></li>
        </ul>
      </article>`;
  }

  function hilangView(game) {
    document.title = `${t(game ? 'tidakAdaGame' : 'tidakAdaHalaman')} | Bermudaku Games`;
    pasangLogo();
    main.className = '';
    main.innerHTML = `
      <article class="page">
        <img class="mark" src="assets/logo.svg" alt="" width="56" height="56">
        <h1>${esc(t(game ? 'tidakAdaGame' : 'tidakAdaHalaman'))}</h1>
        <p>${esc(t('tidakAdaIsi'))}</p>
        <p><a class="btn btn-ink" href="#/">${esc(t('lihatSemua'))}</a></p>
      </article>`;
  }

  terapkanTeks();
  terapkanTema();
  tampilkan(false);
})();
