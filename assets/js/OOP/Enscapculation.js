// soal 1
class Produk {
  // private field di sini
  #nama;
  #harga;

  constructor(nama, harga) {
    this.#nama = nama;
    this.#harga = harga;
  }

  // getter harga
  get harga() {
    return this.#harga;
  }
  // setter harga — validasi tidak boleh negatif
  set harga(nilai) {
    if (nilai < 0) {
      console.log("Harga tidak boleh negatif");
      return;
    }
    return (this.#harga = nilai);
  }

  get nama() {
    return this.#nama;
  }

  set nama(namaproduk) {
    console.log(`Nama ${namaproduk} tidak bisa diubah`);
  }

  // method tampilkanInfo()
  tampilkanInfo() {
    console.log(`Produk: ${this.#nama} | Harga: Rp${this.#harga}`);
  }
}

const p = new Produk("Laptop", 8000000);
console.log(p.harga); // 8000000
p.harga = 9000000; // ✅ valid
p.harga = -1000; // ❌ "Harga tidak boleh negatif!"
console.log(p.harga); // 9000000
p.tampilkanInfo(); // "Produk: Laptop | Harga: Rp9000000"

// soal 2
class Suhu {
  #celsius;

  constructor(celsius) {
    this.#celsius = celsius;
  }

  // getter celsius
  get celsius() {
    return this.#celsius;
  }

  // setter celsius — validasi tidak boleh di bawah -273 (absolute zero)
  set celsius(derajat) {
    if (derajat < -273) {
      console.log("Suhu tidak boleh di bawah absolute zero!");
      return;
    }
    this.#celsius = derajat;
  }

  // getter fahrenheit — konversi otomatis (C × 9/5 + 32)
  get fahrenheit() {
    const f = this.#celsius * (9 / 5) + 32;
    return f;
  }
}

const s = new Suhu(100);
console.log(s.celsius); // 100
console.log(s.fahrenheit); // 212
s.celsius = 0;
console.log(s.fahrenheit); // 32
s.celsius = -300; // ❌ "Suhu tidak boleh di bawah absolute zero!"
console.log(s.celsius); // 0 (tidak berubah)

// soal tantangan
class RekeningTabungan {
  #saldo;
  #riwayat; // array untuk menyimpan riwayat transaksi
  #pemilik;

  constructor(pemilik, saldoAwal) {
    this.#pemilik = pemilik;
    this.#saldo = saldoAwal;
    this.#riwayat = [
      {
        jenis: "Saldo Awal",
        jumlah: 500000,
        saldo: "500000",
      },
    ];
  }

  // getter saldo
  get saldo() {
    return this.#saldo;
  }
  // getter pemilik
  get pemilik() {
    return this.#pemilik;
  }
  // method deposit(jumlah) — validasi jumlah > 0
  deposit(jumlah) {
    if (jumlah > 0) {
      this.#saldo += jumlah;
      this.#riwayat.push({
        jenis: "Deposit",
        jumlah: jumlah,
        saldo: this.#saldo,
      });
      return;
    } else {
      console.log("Jumlah deposit tidak valid!");
    }
  }

  // method tarik(jumlah) — validasi saldo cukup & jumlah > 0
  tarik(jumlah) {
    if (jumlah > 0 && jumlah <= this.#saldo) {
      this.#saldo -= jumlah;
      this.#riwayat.push({
        jenis: "Tarik",
        jumlah: jumlah,
        saldo: this.saldo,
      });
    } else {
      console.log("Saldo tidak cukup!");
    }
  }
  // method cetakRiwayat() — tampilkan semua riwayat transaksi
  cetakRiwayat() {
    console.log(`=== Riwayat Transaksi - ${this.#pemilik}`);
    this.#riwayat.forEach((transaksi, index) => {
      if (transaksi.jenis === "Saldo Awal") {
        console.log(`${index + 1}. ${transaksi.jenis}: Rp${transaksi.saldo}`);
      } else if (transaksi.jenis === "Deposit") {
        console.log(
          `${index + 1}. ${transaksi.jenis}: +Rp${transaksi.jumlah} | Saldo Rp${transaksi.saldo}`,
        );
      } else if (transaksi.jenis === "Tarik") {
        console.log(
          `${index + 1}. ${transaksi.jenis}: -Rp${transaksi.jumlah} | Saldo Rp${transaksi.saldo}`,
        );
      } else {
        console.log("tidak pantast");
      }
    });
  }
}

const rek = new RekeningTabungan("Budi", 500000);
rek.deposit(200000);
rek.deposit(-50000); // ❌ "Jumlah deposit tidak valid!"
rek.tarik(100000);
rek.tarik(900000); // ❌ "Saldo tidak cukup!"

console.log(rek.saldo); // 600000
rek.cetakRiwayat();
// Output:
// === Riwayat Transaksi - Budi ===
// 1. Saldo awal: Rp500000
// 2. Deposit: +Rp200000 | Saldo: Rp700000
// 3. Tarik: -Rp100000 | Saldo: Rp600000
