const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

//Poin 6
app.get("/dosen/rps/tambah", (req, res) => {
    res.send("Halaman Dosen Menambahkan RPS baru - poin 6");
});

//Poin 7
app.get("/dosen/rps/ubah", (req, res) => {
    res.send("Halaman Dosen Mengubah RPS - poin 7");
});

//Poin 8
app.get("/dosen/rps/revisi", (req, res) => {
    res.send("Halaman Dosen Merevisi RPS lama - poin 8");
});

// Test listening to port
app.listen(port, () => {
    console.log(`Example app listening on port hello guys! Portnya teh aya ti: ${port}`);
});