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
for (let value of nilaiUjian) {
  const total = nilaiUjian.reduce((acc, cur) => acc + cur);
  console.log(`Total nilai: ${value}`);
}
// Output: "Total nilai: 433"
// Output: "Rata-rata: 86.6"
