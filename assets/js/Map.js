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
