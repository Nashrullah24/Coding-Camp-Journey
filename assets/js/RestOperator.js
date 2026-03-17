//soal 1
const totalBelanja = (...belanja) =>
  belanja.reduce((total, nilai) => total + nilai, 0);

console.log(totalBelanja(10000, 25000, 5000)); // 40000
console.log(totalBelanja(50000, 75000, 30000, 20000)); // 175000

//soal 2
const cetakNilai = (nama, ...rerata) => {
  nilaiRata = rerata.reduce((acc, now) => acc + now, 0) / rerata.length;
  console.log(`${nama} mendapat rata-rata: ${nilaiRata}`);
};
cetakNilai("Budi", 80, 90, 70);
cetakNilai("Sari", 100, 90, 80, 70);

//soal 3
const pelanggan = {
  nama: "Andi",
  email: "andi@gmail.com",
  umur: 25,
  kota: "Surabaya",
  membership: "Gold",
};

const { nama, email, ...infoTambahan } = pelanggan;

console.log(nama);
console.log(email);
console.log(infoTambahan);

// soal 4 -tantangan
const podium = (juara1, juara2, juara3, ...yglain) => {
  console.log(`Juara 1: ${juara1}`);
  console.log(`Juara 2: ${juara2}`);
  console.log(`Juara 3: ${juara3}`);
  console.log(`Peserta Lain: ${yglain.join(", ")}`);
};

podium("Budi", "Sari", "Andi", "Rina", "Dodi");
