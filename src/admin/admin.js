const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

//Poin 4
app.get("/admin/rps/lihat", (req, res) => {
    res.send("Halaman Admin Melihat Laporan RPS - poin 4");
});

//Poin 5
app.get("/admin/rps/mencetak", (req, res) => {
    res.send("Halaman Admin Mencetak Laporan RPS - poin 5");
});
  
// Test listening to port
app.listen(port, () => {
    console.log(`Example app listening on port hello guys! Portnya teh aya ti: ${port}`);
});
  