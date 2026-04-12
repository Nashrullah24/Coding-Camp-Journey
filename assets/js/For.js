const mobil = {
  merk: "Toyota",
  model: "Avanza",
  tahun: 2022,
  warna: "Putih",
  harga: 250000000,
};

// Gunakan for...in
for (let key in mobil) {
  console.log(`${key} : ${mobil[key]}`);
}

// soal 2
const nilaiUjian = [85, 90, 78, 92, 88];

// Gunakan for...of
let total = 0;
for (let value of nilaiUjian) {
  total += value;
}

rata = total / nilaiUjian.length;
console.log(`Total nilai = ${total}`);
console.log(`Rata-rata = ${rata}`);

// soal 3
const produk = [
  { nama: "Laptop", harga: 8000000, stok: 10 },
  { nama: "Mouse", harga: 150000, stok: 50 },
  { nama: "Keyboard", harga: 300000, stok: 30 },
];

for (let { nama, harga, stok } of produk) {
  //destrukturing pada element
  console.log(`${nama} - Rp${harga} (stok: ${stok})`);
}

// soal tantangan
const pengeluaran = {
  makan: 50000,
  transport: 30000,
  belanja: 150000,
  hiburan: 80000,
  tagihan: 200000,
};

// Gunakan for...in
let totpeng = 0;
for (propeti in pengeluaran) {
  totpeng += pengeluaran[propeti];
}

const rerata = totpeng / Object.keys(pengeluaran).length;
console.log(`Total pengeluaran: Rp${totpeng}
Rata-rata: Rp${rerata}
Di atas rata-rata:`);

for (propeti in pengeluaran) {
  if (pengeluaran[propeti] > rerata) {
    console.log(`- ${propeti}: Rp${pengeluaran[propeti]}`);
  }
}

// console.log(diatra);
// Output:
// Total pengeluaran: Rp510000
// Rata-rata: Rp102000
// Di atas rata-rata:
// - belanja: Rp150000
// - tagihan: Rp200000
