class Dapur {
  constructor(chefNama) {
    this.chefNama = chefNama;
  }

  masak(menu) {
    console.log(`Chef ${this.chefNama} memasak ${menu}...`);
  }

  selesai(menu) {
    console.log(`${menu} siap disajikan!`);
  }
}

class Kasir {
  #totalPendapatan;
  constructor(nama) {
    this.nama = nama;
    this.#totalPendapatan = 0;
  }

  get pendapatan() {
    return this.#totalPendapatan;
  }

  prosesPembayaran(menu, harga) {
    this.#totalPendapatan += harga;
    console.log(`${this.nama} memperoses pembayaran ${menu}:Rp${harga} `);
  }

  laporanPendapatan() {
    console.log(`Total Pendapatan: Rp${this.#totalPendapatan}`);
  }
}

class Pelayan {
  constructor(nama) {
    this.nama = nama;
  }

  antarMenu(menu, mejaNomor) {
    console.log(`${this.nama} mengantarkan ${menu} ke meja ${mejaNomor}`);
  }

  sambut() {
    console.log(`${this.nama} menyambut kedatangan anda..`);
  }
}

class Restoran {
  constructor(nama, dapur, kasir, pelayan) {
    this.nama = nama;
    this.dapur = dapur;
    this.kasir = kasir;
    this.pelayan = pelayan;
  }

  layaniPelanggan(menu, harga, mejaNomor) {
    // 1. Pelayan menyambut
    this.pelayan.sambut();
    // 2. Dapur masak
    this.dapur.masak(menu);
    // 3. Dapur selesai
    this.dapur.selesai(menu);
    // 4. Pelayan antar menu
    this.pelayan.antarMenu(menu, mejaNomor);
    // 5. Kasir proses pembayaran
    this.kasir.prosesPembayaran(menu, harga);
  }

  tutupHari() {
    this.kasir.laporanPendapatan();
  }
}

const restoran = new Restoran(
  "Warung Soto Ayam Pak Yusuf",
  new Dapur("Juna"),
  new Kasir("Yanti"),
  new Pelayan("Yanto"),
);

restoran.layaniPelanggan("Soto Betawi", 35000, 14);
restoran.layaniPelanggan("Soto Ayama", 20000, 12);
restoran.tutupHari();
