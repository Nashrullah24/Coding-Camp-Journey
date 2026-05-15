const karyawan = [
  { nama: "Budi", gaji: 5000000, divisi: "IT" },
  { nama: "Sari", gaji: 4000000, divisi: "HR" },
  { nama: "Andi", gaji: 6000000, divisi: "IT" },
  { nama: "Rina", gaji: 3500000, divisi: "HR" },
  { nama: "Dodi", gaji: 7000000, divisi: "IT" },
];

// 1. Tambah bonus 10% ke semua karyawan IT (data asli tidak berubah!)
const karyawanIT = karyawan
  .filter((k) => k.divisi === "IT")
  .map((k) => ({ ...k, gaji: k.gaji * 1.1 }));

// 2. Ambil hanya karyawan dengan gaji di atas 4000000
const gajiTinggi = karyawan.filter((k) => k.gaji > 4000000);

// 3. Hitung total gaji semua karyawan
const totalGaji = karyawan.reduce((acc, gaji) => acc + gaji.gaji, 0); // jawaban kamu // data asli tidak berubah!
console.log(karyawanIT); // karyawan IT dengan bonus
console.log(gajiTinggi); // karyawan gaji > 4000000
console.log(totalGaji); // 25500000
