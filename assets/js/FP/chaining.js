const transaksi = [
  { id: 1, jenis: "pemasukan", jumlah: 5000000 },
  { id: 2, jenis: "pengeluaran", jumlah: 1500000 },
  { id: 3, jenis: "pemasukan", jumlah: 3000000 },
  { id: 4, jenis: "pengeluaran", jumlah: 750000 },
  { id: 5, jenis: "pemasukan", jumlah: 2000000 },
  { id: 6, jenis: "pengeluaran", jumlah: 500000 },
];

// Hitung total PEMASUKAN saja menggunakan chaining
const totalPemasukan = transaksi
  .filter((k) => k.jenis === "pemasukan")
  .reduce((acc, transaksi) => acc + transaksi.jumlah, 0);

// Hitung total PENGELUARAN saja
const totalPengeluaran = transaksi
  .filter((k) => k.jenis === "pengeluaran")
  .reduce((acc, transaksi) => acc + transaksi.jumlah, 0);

// Hitung saldo akhir (pemasukan - pengeluaran)
const saldo = totalPemasukan - totalPengeluaran;

console.log(`Total Pemasukan: Rp${totalPemasukan}`); // Rp10000000
console.log(`Total Pengeluaran: Rp${totalPengeluaran}`); // Rp2750000
console.log(`Saldo Akhir: Rp${saldo}`); // Rp7250000
