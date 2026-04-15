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
