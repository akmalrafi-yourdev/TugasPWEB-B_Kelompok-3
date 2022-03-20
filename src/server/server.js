const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Poin 9
app.get("/dosen/cpmk/tambah", (req, res) => {
  res.send("Halaman dosen menambah CPMK mata kuliah - poin 9");
});

// Poin 10
app.get("/dosen/cpmk/ubah", (req, res) => {
  res.send("Halaman dosen mengubah CPMK mata kuliah - poin 10");
});

// Poin 11
app.get("/dosen/cpmk/hapus", (req, res) => {
  res.send("Halaman dosen menghapus CPMK mata kuliah - poin 11");
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

//Poin 22
app.get("/mahasiswa/rps/lihat", (req, res) => {
  res.send("Halaman Mahasiswa melihat detail RPS - poin 22");
});

//Poin 23
app.get("/mahasiswa/rps/export", (req, res) => {
  res.send("Halaman Mahasiswa mengekspor RPS menjadi PDF - poin 23");
});

// Test listening to port
app.listen(port, () => {
  console.log(`Example app listening on port hello guys! Portnya teh aya ti: ${port}`);
});
