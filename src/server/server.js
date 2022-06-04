const express = require("express");
const app = express();
const port = 3000;

const mysql = require('mysql2')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'loki'
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()

app.get("/", (req, res) => {
  res.send(`Hello World! Port is ${port}`);
});

// Poin 1
app.get("/login", (req, res) => {
  let pesan = {
    message: "Silahkan login terlebih dahuluuussu",
    login: {
      username: "",
      password: "",
    },
  };
  res.json(pesan);
  console.log("berhasil login");
});

// Poin 2
app.get("/logout", (req, res) => {
  res.send("Berhasil Log out");
});

// Poin 3
app.post("/admin/rps/tambah", (req, res) => {
  let pesan = {
    message: "Tambahkan Dosen :",
    Dosen: {
      "Nama Dosen": "Husnil Kamil, MT.",
      NIP: "198201182008121002",
      "Status Dosen": "Dosen Sistem Informasi",
      "Mata Kuliah": ["Pemprograman Web", "Struktur Data"],
    },
  };

  res.json(pesan);
  console.log("Berhasil Menambahkan Dosen ");
});

//Poin 4
app.get("/admin/rps/lihat", (req, res) => {
  let pesan = {
    message: "Berikut Laporan Dari RPS :",
    "Program Studi": "Sistem Informasi",
    Fakultas: "Teknologi Informasi",
    "RPS yang menggunakan project based": {
      Pertemuan: ["P3", "P4", "P5", "P6", "P7"],
    },
    "Mata Kuliah": {
      "Mata Kuliah": "Pemrograman Web",
      Bobot: "3 SKS",
      semester: "4",
    },
  };
  res.json(pesan);
  console.log("Berhasil Menampilkan ");
});

//Poin 5
app.get("/admin/rps/cetak", (req, res) => {
  let pesan = {
    message: "Berikut Laporan Dari RPS Yang Akan Dicetak:",
    "Program Studi": "Sistem Informasi",
    Fakultas: "Teknologi Informasi",
    "RPS yang menggunakan project based": {
      Pertemuan: ["P3", "P4", "P5", "P6", "P7"],
    },
    "Mata Kuliah": {
      "Mata Kuliah": "Pemograman Web",
      Bobot: "3 SKS",
      semester: "4",
    },
  };
  res.json(pesan);
  console.log("Berhasil Mencetak RPS");
});

//Poin 6
app.get("/dosen/rps/tambah1", (req, res) => {
  let pesan = {
    message: "Tambahkan RPS Untuk Mata Kuliah:",
    "Program Studi": "Sistem Informasi",
    Fakultas: "Teknologi Informasi",
    "RPS yang menggunakan project based": {
      Pertemuan: [],
    },
    "Mata Kuliah": {
      "Mata Kuliah": " ",
      Bobot: " ",
      semester: " ",
    },
  };
  res.json(pesan);
  console.log("Berhasil Menambahkan RPS ");
});

//Poin 7
app.get("/dosen/rps/ubah", (req, res) => {
  let pesan = {
    message1: "Berikut Laporan Dari RPS :",
    "Program Studi": "Sistem Informasi",
    Fakultas: "Teknologi Informasi",
    "RPS yang menggunakan project based": {
      Pertemuan: ["P3", "P4", "P5", "P6", "P7"],
    },
    "Mata Kuliah": {
      "Mata Kuliah": "Pemograman Web",
      Bobot: "3 SKS",
      semester: "4",
    },
    message2: "Pilih Bagian RPS yang akan diubah",
  };

  res.json(pesan);
  console.log("Berhasil Mengubah RPS ");
});

//Poin 8
app.get("/dosen/rps/revisi", (req, res) => {
  let pesan = {
    message1: "Berikut Laporan Dari RPS :",
    "Program Studi": "Sistem Informasi",
    Fakultas: "Teknologi Informasi",
    "RPS yang menggunakan project based": {
      Pertemuan: ["P3", "P4", "P5", "P6", "P7"],
    },
    "Mata Kuliah": {
      "Mata Kuliah": "Pemograman Web",
      Bobot: "3 SKS",
      semester: "4",
    },
    message2: "Pilih Bagian RPS yang akan direvisi",
  };

  res.json(pesan);
  console.log("Berhasil Merevisi RPS ");
});

// Poin 9
app.get("/dosen/cpmk/tambah", (req, res) => {
  let pesan = {
    message: " Anda Berhasil Menambah CPMK",
    status: 0,
  };
  res.json(pesan);
  console.log("Berhasil Menambah CPMK ");
});

// Poin 10
app.get("/dosen/cpmk/ubah", (req, res) => {
  let pesan = {
    message: " Anda Berhasil Mengubah CPMK",
    status: 0,
  };
  res.json(pesan);
  console.log("Berhasil Mengubah CPMK ");
});

// Poin 11
app.get("/dosen/cpmk/hapus", (req, res) => {
  let pesan = {
    message: " Anda Berhasil Menghapus CPMK",
    status: 0,
  };
  res.json(pesan);
  console.log("Berhasil Menghapus CPMK ");
});

// Poin 12
app.get("/dosen/referensi/tambah", (req, res) => {
  let h = {
    message: "Tambahkan referensi materi :",
    "Kode referensi": "R0001",
    Nama: "You Dont Know JS",
    Pengarang: "Kyle Simpson",
    link: ["https://github.com/getify/You-Dont-Know-JS"],
  };
  req.json(h);
  console.log("Materi Referensi berhasil ditambah");
});

// Poin 13
app.get("/dosen/referensi/edit", (req, res) => {
  let h = {
    message: "Update referensi materi :",
    "Kode referensi": "R0001",
    Nama: "You Dont Know JS",
    Pengarang: "Kyle Simpson",
    link: [
      "https://github.com/getify/You-Dont-Know-JS",
      "https://eloquentjavascript.net/",
    ],
  };
  req.json(h);
  console.log("Materi Referensi berhasil diupdate");
});

// Poin 14
app.get("/dosen/referensi/hapus", (req, res) => {
  let h = {
    message: "Hapus referensi materi :",
    "Kode referensi": "R0001",
    Nama: "You Dont Know JS",
    Pengarang: "Kyle Simpson",
    link: [
      "https://github.com/getify/You-Dont-Know-JS",
      "https://eloquentjavascript.net/",
    ],
  };
  req.json(h);
  console.log("Materi Referensi berhasil dihapus");
});

// Poin 15
app.post("/dosen/nilai/tambah", (req, res) => {
  let pesan = {
    message: "Tambahkan Komponen Penilaian :",
    Kode: "JSI62125",
    Nama: "Pemrograman Web",
    Komponen: [
      "1. Tugas =  15%",
      "2. Kehadiran = 5%",
      "3. UTS = 35%",
      "4. UAS = 45%",
    ],
  };
  res.json(pesan);
  console.log("Komponen penilaian berhasil ditambahkan");
});

// Poin 16
app.put("/dosen/nilai/edit", (req, res) => {
  let pesan = {
    message: "Ubah Komponen Penilaian :",
    Kode: "JSI62125",
    Nama: "Pemrograman Web",
    Komponen: [
      "1. Tugas =  15%",
      "2. Kehadiran = 5%",
      "3. Keaktifan = 5%",
      "3. UTS = 35%",
      "4. UAS = 40%",
    ],
  };
  res.json(pesan);
  console.log("Komponen penilaian berhasil diubah");
});

// Poin 17
app.delete("/dosen/nilai/hapus", (req, res) => {
  let pesan = {
    message: "Ubah Komponen Penilaian :",
    Kode: "JSI62125",
    Nama: "Pemrograman Web",
    Komponen: [
      "1. Tugas =  15%",
      "3. Keaktifan = 10%",
      "3. UTS = 35%",
      "4. UAS = 40%",
    ],
  };
  res.json(pesan);
  console.log("Komponen penilaian berhasil dihapus");
});

// Poin 18
app.get("/dosen/rps/tambah", (req, res) => {
  // res.send("Halaman Dosen menambah pertemuan minggu di RPS - poin 18");

  let msg = {
    message: 200,
    class_code: "JSI62125",
    name: "Pemrograman Web",
    data: "3/22/2022",
  };
  res.json(msg);
});

//Poin 19
app.get("/dosen/rps/edit", (req, res) => {
  // res.send("Halaman Dosen mengubah pertemuan minggu di RPS - poin 19");

  let msg = {
    message: 200,
    class_code: "JSI62125",
    name: "Pemrograman Web",
    data: "5/22/2022",
  };
  res.json(msg);
});

//Poin 20
app.get("/dosen/rps/delete", (req, res) => {
  // res.send("Halaman/Fungsi Dosen menghapus pertemuan minggu di RPS - poin 20");

  let msg = {
    message: 200,
    class_code: "JSI62125",
    name: "Pemrograman Web",
    data: "/22/2022",
  };
  res.json(msg);
});

//Poin 21
app.get("/mahasiswa/rps/cari", (req, res) => {
  // res.send(
  //   "Halaman Mahasiswa mencari nama mata kuliah atau kode mata kuliah di RPS - poin 21"
  // );
  
  let msg = {
    message: 200,
    class_code: "JSI62125",
    name: "Pemrograman Web",
    data: "3/22/2022",
  };
  res.json(msg);
});

//Poin 22
app.get("/mahasiswa/rps/lihat", (req, res) => {
  let pesan = {
    nama: " pemrograman web",
    kode: "JSI62125",
    sks: 3,
    semester: 4,
    "dosen pengampu": "Husnil Kamil. . MT",
    cpl: [
      {
        kode: "CP-1",
        capaian:
          "Mengidentifikasi, memformulasikan dan memecahkan permasalahan kebutuhan informasi dari suatu organisasi",
      },
    ],
    cpmk: [
      "Mahasiswa mampu menjelaskan konsep dasar dan komponen aplikasi berbasis web (CP-1, CP-2)",
      "Mahasiswa mampu menggunakan salah satu technology stack untuk membangun aplikasi berbasis web (CP-1, CP-2)",
      "Mahasiswa mampu menggunakan pemograman asynchronous . (CP-2, CP-3)",
      "Mahasiswa mampu menerapkan keamanan untuk situs web . (CP-2, CP-3",
      "Mahasiswa mampu menggunakan dan mendesain format data JSON. (CP-2, CP-3)",
      "Mahasiswa mampu deploy aplikasi web ke internet. (CP-2)",
      "Mahasiswa mampu mendemonstrasikan keterampilan bekerja sama dengan tim (CP-3)",
    ],
    "Deskripsi Singkat":
      "Mata kuliah pemrograman web merupakan mata kuliah yang membahas tentang teknik pengembangan website dari hulu ke hilir, yaitu mulai dari algoritma dalam pemrograman web, pembuatan website (front-end dan back-end), hosting, hingga dokumentasi dan hukum kekayaan intelektual dari program yang dihasilkan nantinya.",
    "Materi Pembelajaran": [
      "Server Side Web Programming",
      "Client Side Web Programming",
    ],
    pustaka: [
      {
        utama: [
          "Matt Doyle, 2009, “Beginning PHP 5.3”, Wrox",
          "Nicholas Zakas, 2012, “Professional Javascript for Web Developer”, John Wiley & Sons",
        ],
        Pendukung: [
          "Mark Pilgrim, 2010, “HTML5 Up and Running”, O’Reilly",
          "Steve Fulton; Jeff Fulton, 2011, “HTML5 Canvas”, O’Reilly",
          "S. Stefanor, 2010, “Javascript Patterns”, O’Reilly",
        ],
      },
    ],
    "Media Pembelajaran": [
      {
        "Perangkat lunak": [
          "Power point Code Editor (VS Code)",
          "Browser",
          "NodeJS",
          "Rest Client (Postman)",
          "Database server (MySQL)",
          "Version Control (Git)",
        ],
        "Perangkat keras": ["Projector", "Laptop"],
      },
    ],
    Assessment: ["Project", "Tugas", "Quiz", "UTS", "UAS"],
    "Matakuliah Syarat": [
      "Struktur Data dan Algoritma",
      "Dasar-Dasar Pemrograman",
      "Pemograman Berorientasi Objek",
    ],
  };
  res.json(pesan);
  console.log("RPS Berhasil Ditampilkan ");
});

//Poin 23
app.get("/mahasiswa/rps/export", (req, res) => {
  res.send("Halaman Mahasiswa mengekspor RPS menjadi PDF - poin 23");
});

// Test listening to port
app.listen(port, () => {
  console.log(
    `Example app listening on port hello guys! Portnya teh aya ti: ${port}`
  );
});
