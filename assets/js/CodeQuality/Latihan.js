export function tambah(a, b) {
  return a + b;
}

export function isGenap(n) {
  return n % 2 === 0;
}

export function cariMax(arr) {
  if (arr.length === 0) throw new Error("Array kosong");
  return Math.max(...arr);
}

export function buatUser(nama, umur) {
  if (umur < 0) throw new Error("Umur tidak valid");
  return { nama, umur, aktif: true };
}

export async function ambilDataAsync(delay = 50) {
  return new Promise((resolve) => {
    setTimeout(() => resolve("data berhasil diambil"), delay);
  });
}
