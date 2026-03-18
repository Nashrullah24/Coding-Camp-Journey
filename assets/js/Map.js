// Soal 1
const biodata = new Map([
  ["nama", "budi"],
  ["umur", 20],
  ["kota", "jakarta"],
  [true, "status aktif"],
  [1, "nomor satu"],
]);

biodata.forEach((property, value) => {
  console.log(`${value}: ${property}`);
});

// Soal 2
const buah = [
  "apel",
  "jeruk",
  "apel",
  "mangga",
  "jeruk",
  "apel",
  "mangga",
  "mangga",
];

const frekuensi = new Map();
buah.forEach((nama) => {
  const current = frekuensi.get(nama) || 0;
  frekuensi.set(nama, current + 1);
});

console.log(frekuensi.get("apel")); // 3
console.log(frekuensi.get("jeruk")); // 2
console.log(frekuensi.get("mangga")); // 3

// soal tantangan
const stokToko = new Map();

// Implementasi function di sini
const tambahStok = (barang, jumlah) => stokToko.set(barang, jumlah);
const kurangiStok = (barang, jumlah) => {
  const kurang = stokToko.get(barang);
  // kurang >= jumlah ? kurang - jumlah : console.log("Jangan Ubah stok");
  if (kurang >= jumlah) {
    stokToko.set(barang, kurang - jumlah);
  } else {
    console.log("jangan Ubah stok brow");
  }
};
const cekStok = (barang) => {
  const cek = stokToko.get(barang);
  console.log(`stok ${barang}: ${cek}`);
};

tambahStok("Beras", 100);
tambahStok("Minyak", 50);
kurangiStok("Beras", 30);
kurangiStok("Minyak", 60); // ⚠️ stok tidak cukup!

cekStok("Beras"); // "Stok Beras: 70"
cekStok("Minyak"); // "Stok Minyak: 50" (tidak berubah karena stok tidak cukup)
