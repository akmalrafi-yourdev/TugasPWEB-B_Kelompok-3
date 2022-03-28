const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Poin 1
app.get("/login", (req, res) => {
  res.send("Halaman yang manampilkan Login untuk mahasiswa dan dosen - poin 1 ");
});

// Poin 2
app.get("/logout", (req, res) => {
  res.send("Berhasil Log out");
});

// Poin 3
app.post("/admin/rps/tambah", (req, res) => {

  let pesan = {
    message : "Tambahkan Dosen :",
    "Dosen" : {
    "Nama Dosen"  : "Husnil Kamil, MT.",
    "NIP"         : "198201182008121002",
    "Status Dosen": "Dosen Sistem Informasi",
    "Mata Kuliah" : ["Pemprograman Web", "Struktur Data"],
    },
    };

  res.json(pesan)
  console.log("Berhasil Menambahkan Dosen ")
});

//Poin 4
app.get("/admin/rps/lihat", (req, res) => {

  let pesan = {
    message : "Berikut Laporan Dari RPS :",
    "Program Studi" : "Sistem Informasi",
    "Fakultas" : "Teknologi Informasi",
    "RPS yang menggunakan project based": {
      "Pertemuan" : ['P3','P4','P5','P6','P7'],
    },
    "Mata Kuliah": {
      "Mata Kuliah": "Pemrograman Web",
      "Bobot": "3 SKS",
      "semester": "4",
    },
  };
  res.json(pesan)
  console.log("Berhasil Menampilkan ")
});

//Poin 5
app.get("/admin/rps/cetak", (req, res) => {
  let pesan = {
    message : "Berikut Laporan Dari RPS Yang Akan Dicetak:",
    "Program Studi" : "Sistem Informasi",
    "Fakultas" : "Teknologi Informasi",
    "RPS yang menggunakan project based": {
      "Pertemuan" : ['P3','P4','P5','P6','P7'],
    },
    "Mata Kuliah": {
      "Mata Kuliah": "Pemograman Web",
      "Bobot": "3 SKS",
      "semester": "4",
    },
  };
  res.json(pesan)
  console.log("Berhasil Mencetak RPS")
});

//Poin 6
app.get("/dosen/rps/tambah1", (req, res) => {
  let pesan = {
    message : "Tambahkan RPS Untuk Mata Kuliah:",
    "Program Studi" : "Sistem Informasi",
    "Fakultas" : "Teknologi Informasi",
    "RPS yang menggunakan project based": {
      "Pertemuan" : [],
    },
    "Mata Kuliah": {
      "Mata Kuliah": " ",
      "Bobot": " ",
      "semester": " ",
    },
  };
  res.json(pesan)
  console.log("Berhasil Menambahkan RPS ")
});

//Poin 7
app.get("/dosen/rps/ubah", (req, res) => {
  let pesan = {
    message1 : "Berikut Laporan Dari RPS :",
    "Program Studi" : "Sistem Informasi",
    "Fakultas" : "Teknologi Informasi",
    "RPS yang menggunakan project based": {
      "Pertemuan" : ['P3','P4','P5','P6','P7'],
    },
    "Mata Kuliah": {
      "Mata Kuliah": "Pemograman Web",
      "Bobot": "3 SKS",
      "semester": "4",
    },
    message2 : "Pilih Bagian RPS yang akan diubah"
  };

  res.json(pesan)
  console.log("Berhasil Mengubah RPS ")
});

//Poin 8
app.get("/dosen/rps/revisi", (req, res) => {
  let pesan = {
    message1 : "Berikut Laporan Dari RPS :",
    "Program Studi" : "Sistem Informasi",
    "Fakultas" : "Teknologi Informasi",
    "RPS yang menggunakan project based": {
      "Pertemuan" : ['P3','P4','P5','P6','P7'],
    },
    "Mata Kuliah": {
      "Mata Kuliah": "Pemograman Web",
      "Bobot": "3 SKS",
      "semester": "4",
    },
    message2 : "Pilih Bagian RPS yang akan direvisi"
  };


  res.json(pesan)
  console.log("Berhasil Merevisi RPS ")

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

// Poin 12
app.get("/dosen/referensi/tambah", (req, res) => {
  res.send("Halaman dosen menambah referensi dari dosen - poin 12");
});

// Poin 13
app.get("/dosen/referensi/edit", (req, res) => {
  res.send("Halaman dosen mengubah referensi dari dosen - poin 13");
});

// Poin 14
app.get("/dosen/referensi/hapus", (req, res) => {
  res.send("Halaman dosen menghapus referensi dari dosen - poin 14");
});

// Poin 15
app.post("/dosen/nilai/tambah", (req, res) => {
  let pesan = {
    message :"Tambahkan Komponen Penilaian :",
    "Kode": "JSI62125",
    "Nama":"Pemrograman Web",
    "Komponen":[
                  "1. Tugas =  15%",
                  "2. Kehadiran = 5%",
                  "3. UTS = 35%",
                  "4. UAS = 45%", ]
}
res.json(pesan);
console.log("Komponen penilaian berhasil ditambahkan");
});

// Poin 16
app.put("/dosen/nilai/edit", (req, res) => {
  let pesan = {
    message :"Ubah Komponen Penilaian :",
    "Kode": "JSI62125",
    "Nama":"Pemrograman Web",
    "Komponen":[
                  "1. Tugas =  15%",
                  "2. Kehadiran = 5%",
                  "3. Keaktifan = 5%",
                  "3. UTS = 35%",
                  "4. UAS = 40%", ]
}
res.json(pesan);
console.log("Komponen penilaian berhasil diubah");
});

// Poin 17
app.delete("/dosen/nilai/hapus", (req, res) => {
  let pesan = {
    message :"Ubah Komponen Penilaian :",
    "Kode": "JSI62125",
    "Nama":"Pemrograman Web",
    "Komponen":[
                  "1. Tugas =  15%",
                  "3. Keaktifan = 10%",
                  "3. UTS = 35%",
                  "4. UAS = 40%", ]
}
res.json(pesan);
console.log("Komponen penilaian berhasil dihapus");
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
