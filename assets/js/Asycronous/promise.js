// Lengkapi kode ini:
function buatAngka() {
  return new Promise((resolve, reject) => {
    const angka = Math.random();
    console.log(angka);
    // TODO: tulis kondisi resolve dan reject di sini
    if (angka > 0.5) {
      resolve("Berhasil!!");
    } else {
      reject("Gagal!");
    }
  });
}

const jadi = (x) => console.log(x);
const kagak = (y) => console.log(y);
buatAngka().then(jadi).catch(kagak);
