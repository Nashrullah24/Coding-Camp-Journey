const produk = [
  { nama: "Laptop", harga: 8000000, kategori: "elektronik", stok: 5 },
  { nama: "Baju", harga: 150000, kategori: "fashion", stok: 0 },
  { nama: "HP", harga: 3000000, kategori: "elektronik", stok: 3 },
  { nama: "Sepatu", harga: 500000, kategori: "fashion", stok: 8 },
  { nama: "Tablet", harga: 4000000, kategori: "elektronik", stok: 0 },
  { nama: "Tas", harga: 350000, kategori: "fashion", stok: 12 },
];

// Pipeline:
// 1. Filter produk yang stok > 0
// 2. Beri diskon 15% untuk kategori elektronik
// 3. Hitung total nilai inventori (harga × stok) semua produk tersisa
// 4. Tampilkan nama & harga produk tersisa

const produkTersedia = produk.filter((p) => p.stok > 0);
const produkDiskon = produkTersedia.map((p) =>
  p.kategori === "elektronik" ? { ...p, harga: p.harga * 0.85 } : p,
);
const totalInventori = produkDiskon.reduce(
  (acc, proter) => acc + proter.harga * proter.stok,
  0,
);
const daftarProduk = produkDiskon.map((p) => ({
  nama: p.nama,
  harga: p.harga,
}));

console.log(produkTersedia); // tanpa Baju & Tablet
console.log(produkDiskon); // elektronik sudah didiskon
console.log(`Total Inventori: Rp${totalInventori}`); // Rp?
console.log(daftarProduk);
// [
//   { nama: "Laptop", harga: 6800000 },
//   { nama: "HP", harga: 2550000 },
//   { nama: "Sepatu", harga: 500000 },
//   { nama: "Tas", harga: 350000 },
// ]
