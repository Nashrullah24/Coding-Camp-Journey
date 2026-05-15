// Kemampuan-kemampuan (plain object)
const bisaBerjalan = {
  berjalan() {
    console.log(`${this.nama} sedang berjalan`);
  },
};
const bisaBerlari = {
  berlari() {
    console.log(`${this.nama} sedang berlari`);
  },
};
const bisaMenyelam = {
  menyelam() {
    console.log(`${this.nama} sedang menyelam`);
  },
};
const bisaMendaki = {
  mendaki() {
    console.log(`${this.nama} sedang mendaki`);
  },
};
const bisaMenyerang = {
  menyerang() {
    console.log(`${this.nama} sedang menyerang`);
  },
};

// Rakit karakter sesuai kemampuan yang dibutuhkan
const penjelajah = Object.assign(
  { nama: "Andi", hp: 100 },
  bisaBerjalan,
  bisaBerlari,
  bisaMendaki,
);

const penyelam = Object.assign(
  { nama: "Sari", hp: 80 },
  bisaBerjalan,
  bisaMenyelam,
);

const tentara = Object.assign(
  { nama: "Rudi", hp: 120 },
  bisaBerjalan,
  bisaBerlari,
  bisaMenyerang,
);

penjelajah.berjalan(); // "Andi sedang berjalan"
penjelajah.berlari(); // "Andi sedang berlari"
penjelajah.mendaki(); // "Andi sedang mendaki"

penyelam.menyelam(); // "Sari sedang menyelam"
// penyelam.berlari(); // ❌ TypeError — penyelam tidak bisa berlari!

tentara.menyerang(); // "Rudi sedang menyerang!"
