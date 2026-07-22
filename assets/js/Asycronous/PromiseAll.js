const mulai = performance.now();
function ambilUser() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("User: Nashrullah"), 1000),
  );
}

function ambilPosts() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Posts: [post1, post2]"), 1500),
  );
}

function ambilNotif() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Notif: 3 pesan baru"), 800),
  );
}

Promise.all([ambilUser(), ambilPosts(), ambilNotif()]).then(
  ([user, post, notip]) => {
    const durasi = (performance.now() - mulai).toFixed(3);
    console.log(`durasinya ${durasi}ms`);
    console.log(user, post, notip);
  },
);
