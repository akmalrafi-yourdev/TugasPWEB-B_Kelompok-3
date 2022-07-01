// Imports
const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;
const mysql = require("mysql2");

// Data Base
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "loki",
});

// Get all beers
app.get("/dashboardAdmin", (req, res) => {
  var url = "http://localhost:5500/user/matakuliah";

  axios
    .get(url)
    .then(function (response) {
      res.render(__dirname + "/views/admin/dashboardAdmin.ejs", {
        link: "kelolaDosenAdmin",
        link1: "petaCpmkAdmin",
        link2: "persentaseMatkulAdmin",
        link3: "dashboardAdmin",
        rows: response.data,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get("/dosenRpsAdmin", (req, res) => {
  var url = "http://localhost:5500/admin/listdosen";

  axios
    .get(url)
    .then(function (response) {
      res.render(__dirname + "/views/admin/dosenRpsAdmin.ejs", {
        link: "dashboardAdmin",
        link2: "kelolaDosenAdmin",
        rows: response.data,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get("/kelolaDosenAdmin", (req, res) => {
  var url = "http://localhost:5500/admin/listdosen";

  axios
    .get(url)
    .then(function (response) {
      res.render(__dirname + "/views/admin/kelolaDosenAdmin.ejs", {
        link: "dashboardAdmin",
        rows: response.data,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});



app.get("/awalDosen", (req, res) => {
  var url = "http://localhost:5500/user/matakuliah";

  axios
    .get(url)
    .then(function (response) {
      res.render(__dirname + "/views/awalDosen.ejs", {
        link: "logindosen",
        rows: response.data,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get("/awalAdmin", (req, res) => {
  var url = "http://localhost:5500/user/matakuliah";

  axios
    .get(url)
    .then(function (response) {
      res.render(__dirname + "/views/awalAdmin.ejs", {
        link: "loginadmin",
        rows: response.data,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get("/persentaseMatkulAdmin", (req, res) => {
  var url = "http://localhost:5500/user/matakuliah";

  axios
    .get(url)
    .then(function (response) {
      res.render(__dirname + "/views/admin/persentaseMatkulAdmin.ejs", {
        link: "dashboardAdmin",
        rows: response.data,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get("/petaCpmkAdmin", (req, res) => {
  var url = "http://localhost:5500/user/matakuliah";

  axios
    .get(url)
    .then(function (response) {
      res.render(__dirname + "/views/admin/petaCpmkAdmin.ejs", {
        link: "dashboardAdmin",
        rows: response.data,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});


app.get("/tambahrps", (req, res) => {
  var url = "http://localhost:5500/user/matakuliah";

  axios
    .get(url)
    .then(function (response) {
      res.render(__dirname + "/views/dosen/tambahrps.ejs", {
        link: "dashboarddosen",
        link2: "pengelolaan-rps-dosen",
        rows: response.data,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get("/dashboarddosen", (req, res) => {
  var url = "http://localhost:5500/user/matakuliah";

  axios
    .get(url)
    .then(function (response) {
      res.render(__dirname + "/views/dosen/dashboarddosen.ejs", {
        link: "dashboarddosen",
        link2: "pengelolaan-rps-dosen",
        rows: response.data,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get("/logindosen", (req, res) => {
  var url = "http://localhost:5500/user/matakuliah";

  axios
    .get(url)
    .then(function (response) {
      res.render(__dirname + "/views/loginmahasiswa.ejs", {
        link3: "dashboarddosen",
        rows: response.data,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get("/loginadmin", (req, res) => {
  var url = "http://localhost:5500/user/matakuliah";

  axios
    .get(url)
    .then(function (response) {
      res.render(__dirname + "/views/login-new.ejs", {
        link3: "dashboardAdmin",
        rows: response.data,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get("/pengelolaan-rps-dosen", (req, res) => {
  var url = "http://localhost:5500/admin/rps";

  axios
    .get(url)
    .then(function (response) {
      res.render(__dirname + "/views/dosen/pengelolaan-rps-dosen.ejs", {
        link: "dashboarddosen",
        link1: "pengelolaan-rps-dosen",
        link2: "pengelolaan-rps-dosen",
        link3: "tambahrps",
        link4: "ubahrps",
        link5: "lihat-rps-dosen",
        rows: response.data,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get("/lihat-rps-dosen", (req, res) => {
  var url = "http://localhost:5500/user/matakuliah";

  axios
    .get(url)
    .then(function (response) {
      res.render(__dirname + "/views/dosen/lihat-rps-dosen.ejs", {
        link: "dashboarddosen",
        link2: "pengelolaan-rps-dosen",
        link3: "tambahrps",
        link4: "detail-dosen",
        link5: "lihat-rps-dosen",
        rows: response.data,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get("/detail-dosen", (req, res) => {
  var url = "http://localhost:5500/admin/rps";

  axios
    .get(url)
    .then(function (response) {
      res.render(__dirname + "/views/dosen/detail-dosen.ejs", {
        link: "dashboarddosen",
        link2: "pengelolaan-rps-dosen",
        link3: "tambah-cpmk-dosen",
        link4: "detail-dosen",
        link5: "tambah-komponen-dosen",
        link6: "tambah-pertemuan-dosen",
        link7: "tambah-referensi-dosen",
        link8: "edit-cpmk-dosen",
        link9: "edit-komponen-dosen",
        link10: "edit-pertemuan-dosen",
        link11: "edit-referensi-dosen",
        rows: response.data,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get("/edit-cpmk-dosen", (req, res) => {
  var url = "http://localhost:5500/user/matakuliah";

  axios
    .get(url)
    .then(function (response) {
      res.render(__dirname + "/views/dosen/edit-cpmk-dosen.ejs", {
        link: "dashboarddosen",
        link2: "pengelolaan-rps-dosen",
        link3: "tambah-cpmk-dosen",
        link4: "detail-dosen",
        link5: "lihat-rps-dosen",
        rows: response.data,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get("/edit-komponen-dosen", (req, res) => {
  var url = "http://localhost:5500/user/matakuliah";

  axios
    .get(url)
    .then(function (response) {
      res.render(__dirname + "/views/dosen/edit-komponen-dosen.ejs", {
        link: "dashboarddosen",
        link2: "pengelolaan-rps-dosen",
        link3: "tambah-cpmk-dosen",
        link4: "detail-dosen",
        link5: "lihat-rps-dosen",
        rows: response.data,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get("/edit-pertemuan-dosen", (req, res) => {
  var url = "http://localhost:5500/user/matakuliah";

  axios
    .get(url)
    .then(function (response) {
      res.render(__dirname + "/views/dosen/edit-pertemuan-dosen.ejs", {
        link: "dashboarddosen",
        link2: "pengelolaan-rps-dosen",
        link3: "tambah-cpmk-dosen",
        link4: "detail-dosen",
        link5: "lihat-rps-dosen",
        rows: response.data,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get("/edit-referensi-dosen", (req, res) => {
  var url = "http://localhost:5500/user/matakuliah";

  axios
    .get(url)
    .then(function (response) {
      res.render(__dirname + "/views/dosen/edit-referensi-dosen.ejs", {
        link: "dashboarddosen",
        link2: "pengelolaan-rps-dosen",
        link3: "tambah-cpmk-dosen",
        link4: "detail-dosen",
        link5: "lihat-rps-dosen",
        rows: response.data,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get("/tambah-cpmk-dosen", (req, res) => {
  var url = "http://localhost:5500/user/matakuliah";

  axios
    .get(url)
    .then(function (response) {
      res.render(__dirname + "/views/dosen/tambah-cpmk-dosen.ejs", {
        link: "dashboarddosen",
        link2: "pengelolaan-rps-dosen",
        link3: "tambah-cpmk-dosen",
        link4: "detail-dosen",
        link5: "lihat-rps-dosen",
        rows: response.data,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get("/tambah-referensi-dosen", (req, res) => {
  var url = "http://localhost:5500/user/matakuliah";

  axios
    .get(url)
    .then(function (response) {
      res.render(__dirname + "/views/dosen/tambah-referensi-dosen.ejs", {
        link: "dashboarddosen",
        link2: "pengelolaan-rps-dosen",
        link3: "tambah-cpmk-dosen",
        link4: "detail-dosen",
        link5: "lihat-rps-dosen",
        rows: response.data,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get("/tambah-komponen-dosen", (req, res) => {
  var url = "http://localhost:5500/user/matakuliah";

  axios
    .get(url)
    .then(function (response) {
      res.render(__dirname + "/views/dosen/tambah-komponen-dosen.ejs", {
        link: "dashboarddosen",
        link2: "pengelolaan-rps-dosen",
        link3: "tambah-komponen-dosen",
        link4: "detail-dosen",
        link5: "lihat-rps-dosen",
        rows: response.data,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get("/tambah-pertemuan-dosen", (req, res) => {
  var url = "http://localhost:5500/user/matakuliah";

  axios
    .get(url)
    .then(function (response) {
      res.render(__dirname + "/views/dosen/tambah-pertemuan-dosen.ejs", {
        link: "dashboarddosen",
        link2: "pengelolaan-rps-dosen",
        link3: "tambah-pertemuan-dosen",
        link4: "detail-dosen",
        link5: "lihat-rps-dosen",
        rows: response.data,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get("/ubahrps", (req, res) => {
  var url = "http://localhost:5500/user/matakuliah";

  axios
    .get(url)
    .then(function (response) {
      res.render(__dirname + "/views/dosen/ubahrps.ejs", {
        link: "dashboarddosen",
        link2: "pengelolaan-rps-dosen",
        link4: "ubahrps",
        rows: response.data,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

//   pool.getConnection((err, connection) => {
//     if (err) throw err;
//     console.log("connected as id " + connection.threadId);
//     connection.query("SELECT * from courses ", (err, rows) => {
//       connection.release(); // return the connection to pool

//       if (!err) {
//         console.log(rows);
//         res.render(__dirname + "/views/admin/dashboardAdmin.ejs", {
//           link: "kelolaDosenAdmin",
//           link1: "petaCpmkAdmin",
//           link2: "persentaseMatkulAdmin",
//           rows,
//         });
//         // res.render(__dirname + '/views/admin/dashboardAdmin.ejs', { link1: "petaCpmkAdmin",rows })
//         // res.render(__dirname + '/views/admin/dashboardAdmin.ejs', { link2: "persentaseMatkulAdmin",rows })
//         // res.send(rows)
//         console.log(rows.length);
//       } else {
//         console.log(err);
//       }
//     });
//   });


// Static Files
app.use(express.static("style"));
app.use(express.static("vendors"));
// app.use(express.static('css'));
app.use(express.static("js"));
app.use(express.static("assets"));
// Specific folder example

app.use("", express.static(__dirname + ""));
app.use("/js", express.static(__dirname + "vendors/js"));
app.use("/ti-icons", express.static(__dirname + "vendors/ti-icons"));

// Parsing middleware
// Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false })); // Remove
app.use(express.urlencoded({ extended: true })); // New
// Parse application/json
// app.use(bodyParser.json()); // Remove
app.use(express.json()); // New

// Set View's
app.set("views", "./views");
app.set("view engine", "ejs");

// Navigation
// app.get('', (req, res) => {
//     res.render('index', { text: 'Hey' })
// })

// app.get("/testingmang", (req, res) => {
//   var url = "http://localhost:5500/user/matakuliah";

//   axios
//     .get(url)
//     .then(function (response) {
//       res.render(__dirname + "/views/admin/dashboardAdmin.ejs", {
//          rows: response.data,
//        });
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// });

app.get("/kelolaDosenAdmin", (req, res) => {
  res.render(__dirname + "/views/admin/kelolaDosenAdmin.ejs");
});
app.get("/persentaseMatkulAdmin", (req, res) => {
  res.render(__dirname + "/views/admin/persentaseMatkulAdmin.ejs");
});
app.get("/petaCpmkAdmin", (req, res) => {
  res.render(__dirname + "/views/admin/petaCpmkAdmin.ejs");
});

app.listen(port, () => console.info(`App listening on port ${port}`));
