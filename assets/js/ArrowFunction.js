// Soal 1
// Function Expression
const luasSegitiga = function (alas, tinggi) {
  return (alas * tinggi) / 2;
};

console.log(luasSegitiga(10, 5)); // 25

// Arrow Function
const luasSegi3 = (alas, tinggi) => (alas * tinggi) / 2;
console.log(luasSegi3(10, 15));

// Soal 2
const nilai = [45, 78, 90, 55, 88, 62];
const lulus = nilai.filter((n) => n >= 70);
const double = nilai.map((b) => b * 2);

console.log(lulus);
console.log(double);

// soal 3
const hitungDiskon = (diskon) => (harga) => harga * ((100 - diskon) / 100);

const diskon10 = hitungDiskon(10);
const diskon25 = hitungDiskon(25);
const diskon50 = hitungDiskon(50);

console.log(diskon10(100000)); // 90000
console.log(diskon25(200000)); // 150000
console.log(diskon50(100000)); //50000
