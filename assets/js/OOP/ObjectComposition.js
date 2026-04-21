class Processor {
  constructor(merk, kecepatan) {
    this.merk = merk;
    this.kecepatan = kecepatan;
  }

  proses() {
    console.log(`${this.merk} memproses data...`);
  }
}

class RAM {
  constructor(kapasitas) {
    this.kapasitas = kapasitas;
  }

  muatData() {
    console.log(`RAM ${this.kapasitas} memuat data...`);
  }
}

class Storage {
  constructor(kapasitas, jenis) {
    this.kapasitas = kapasitas;
    this.jenis = jenis;
  }

  simpan() {
    console.log(`Menyimpan ke ${this.jenis} ${this.kapasitas}GB`);
  }
}

class Komputer {
  constructor(merk, processor, ram, storage) {
    this.merk = merk;
    this.processor = new Processor("intel", 3000000);
    this.ram = new RAM(32);
    this.storage = new Storage(512, "SSD");
  }

  nyalakan() {
    this.processor.proses();
    this.ram.muatData();
    this.storage.simpan();
  }
}

const komputerBaruNabil = new Komputer("Lenovo");
komputerBaruNabil.nyalakan();
