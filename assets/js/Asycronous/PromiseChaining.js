function ambilData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("data mentah"), 1000);
  });
}

function prosesData(data) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data + "-> diproses.."), 1000);
  });
}

function simpanData(data) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data + "-> tersimpan"), 1000);
  });
}

ambilData()
  .then(prosesData)
  .then(simpanData)
  .then((hasil) => console.log(hasil))
  .catch((err) => console.error(err));
