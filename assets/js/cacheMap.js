const cache = new Map();

const hitungFaktorial = (n) => {
  // Kalau sudah pernah dihitung, ambil dari cache
  if (cache.has(n)) {
    console.log(`Ambil dari cache: ${n}`);
    return cache.get(n);
  }

  // Kalau belum, hitung dan simpan
  const hasil = n <= 1 ? 1 : n * hitungFaktorial(n - 1);
  cache.set(n, hasil);
  return hasil;
};

console.log(hitungFaktorial(15)); // 120 (dihitung)
console.log(hitungFaktorial(15)); // 120 (dihitung)
