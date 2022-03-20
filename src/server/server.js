const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Poin 18
app.get("/dosen/rps/tambah", (req, res) => {
  res.send("Halaman Dosen menambah pertemuan minggu di RPS - poin 18");
});

//Poin 19
app.get("/dosen/rps/edit", (req, res) => {
  res.send("Halaman Dosen mengubah pertemuan minggu di RPS - poin 19");
});

//Poin 20
app.get("/dosen/rps/delete", (req, res) => {
  res.send("Halaman/Fungsi Dosen menghapus pertemuan minggu di RPS - poin 20");
});

//Poin 21
app.get("/mahasiswa/rps/cari", (req, res) => {
  res.send("Halaman Mahasiswa mencari nama mata kuliah atau kode mata kuliah di RPS - poin 21");
});

//Poin 23
app.get("/mahasiswa/rps/export", (req, res) => {
  res.send("Halaman Mahasiswa mengekspor RPS menjadi PDF - poin 23");
});

// Test listening to port
app.listen(port, () => {
  console.log(`Example app listening on port hello guys! Portnya teh aya ti: ${port}`);
});
