// Buat pure function:
// 1. hitungPajak(gaji, persenPajak) → kembalikan nilai pajak
// 2. hitungTunjangan(gaji, persenTunjangan) → kembalikan nilai tunjangan
// 3. hitungGajiBersih(gaji, pajak, tunjangan) → kembalikan gaji bersih

const hitungPajak = (gaji, persenPajak) => gaji * persenPajak;
const hitungTunjangan = (gaji, persenTunjangan) => gaji * persenTunjangan;
const hitungGajiBersih = (gaji, pajak, tunjangan) => gaji + tunjangan - pajak;

const gaji = 5000000;
const pajak = hitungPajak(gaji, 0.1); // 500000
const tunjangan = hitungTunjangan(gaji, 0.2); // 1000000
const gajiBersih = hitungGajiBersih(gaji, pajak, tunjangan); // 5500000

console.log(`Pajak: Rp${pajak}`); // Pajak: Rp500000
console.log(`Tunjangan: Rp${tunjangan}`); // Tunjangan: Rp1000000
console.log(`Gaji Bersih: Rp${gajiBersih}`); // Gaji Bersih: Rp5500000
console.log(`Gaji asli:${gaji}`);
