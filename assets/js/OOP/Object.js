class mahasiswa {
  constructor(nama, prodi, fakultas) {
    this.nama = nama;
    this.prodi = prodi;
    this.fakultas = fakultas;
  }

  matkul() {
    console.log(`${this.nama} mengampuh 10 matkul`);
  }

  dekskripsi() {
    console.log(
      `mahasiswa dengan nama ${this.nama} mengampuh jurusan ${this.prodi} di ${this.fakultas}`,
    );
  }
}

// inheritance
class skill extends mahasiswa {
  academic() {
    console.log(`${this.nama} memiliki skill akademik`);
  }
}

const yadi = new mahasiswa("Yadi", "Teknik Matematika", "Sains dan Teknologi");
const mahasiskill = new skill("Yuni", "Teknik Perikanan", "Peternakan");

yadi.matkul();
yadi.dekskripsi();
mahasiskill.academic();
