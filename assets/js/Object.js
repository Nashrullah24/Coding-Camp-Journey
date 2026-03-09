// soal 1
const buku = {
  judul: "Laskar Pelangi",
  penulis: "Andrea Hirata",
  tahun: 2005,
  halaman: 529,
};

// Destructuring di sini
const { judul, penulis, tahun, halaman } = buku;

console.log(judul); // "Laskar Pelangi"
console.log(penulis); // "Andrea Hirata"
console.log(tahun); // 2005
console.log(halaman);

// Soal 2
const product = {
  nama: "Laptop",
  harga: 8000000,
  merk: "Asus",
};

const { nama: namaProduk, harga: hargaProduk, stok = 0, merk } = product;

console.log(namaProduk);
console.log(hargaProduk);
console.log(stok);

// soal 3
const user = {
  username: "budi123",
  email: "budi@gmail.com",
  umur: 21,
};

const cetakProfil = ({ username, email, umur }) =>
  console.log(`Username: ${username} | Email: ${email} | Umur: ${umur}`);

cetakProfil(user);

// soal 4
const karyawan = {
  nama: "Sari",
  posisi: "Developer",
  alamat: {
    kota: "Bandung",
    provinsi: "Jawa Barat",
  },
  gaji: 12000000,
};

karyawan.gaji = 20000;
delete karyawan.gaji;

const {
  nama,
  posisi,
  alamat: { kota, provinsi },
  gaji,
} = karyawan;

console.log(nama); // "Sari"
console.log(posisi); // "Developer"
console.log(kota); // "Bandung"
console.log(provinsi); // "Jawa Barat"
console.log(gaji); // "Jawa Barat"
