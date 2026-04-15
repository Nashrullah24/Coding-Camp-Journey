class kendaraan {
  constructor(merk, kecepatan) {
    this.merk = merk;
    this.keceptana = kecepatan;
  }
  jalan() {
    console.log(`${this.merk} sedang berjalan`);
  }
  berhenti() {
    console.log(`${this.merk} berhenti`);
  }
}

class Motor extends kendaraan {
  constructor(merk, kecepatan, jenisMoto) {
    super(merk, kecepatan);
    this.jenisMoto = jenisMoto;
  }

  wheelie() {
    console.log(`${this.merk} melakukan whieelie`);
  }
}

class Mobil extends kendaraan {
  constructor(merk, kecepatan, jumlahPintu) {
    super(merk, kecepatan);
    this.jumlahPintu;
  }

  klakson() {
    console.log(`${this.merk}: Beep beep!`);
  }
}

const motor = new Motor("Yamaha", 120, "Sport");
const mobil = new Mobil("Toyota", 180, 4);

motor.jalan();
motor.wheelie();
mobil.berhenti();
mobil.klakson();

// soal 2
class Pegawai {
  constructor(nama, gaji) {
    this.nama = nama;
    this.gaji = gaji;
  }

  info() {
    return `Nama: ${this.nama} | Gaji: ${this.gaji}`;
  }
}

class Manager extends Pegawai {
  constructor(nama, gaji, divisi) {
    super(nama, gaji);
    this.divisi = divisi;
  }
  info() {
    console.log(`${super.info()} | Divisi: ${this.divisi}`);
  }
}

class Intern extends Pegawai {
  constructor(nama, gaji, durasi) {
    super(nama, gaji);
    this.durasi = durasi;
  }

  info() {
    console.log(`${super.info()} | Durasi Magang: ${this.durasi}`);
  }
}

const manager = new Manager("yadi", 5000000, "IT");
const intern = new Intern("Sari", 2000000, "3 Bulan");

manager.info();
intern.info();
pegawai.info();
