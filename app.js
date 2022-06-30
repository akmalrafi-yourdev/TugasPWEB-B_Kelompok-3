// Imports
const express = require("express");
const axios = require('axios')
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
         rows: response.data,
        });
     })
     .catch(function (error) {
       console.log(error);
     });
   });

   app.get("/dashboardAdmin", (req, res) => {

      // var url = "http://localhost:5500/";
   
      axios
        .get(url)
        .then(function (response) {
          res.render(__dirname + "/views/admin/dashboardAdmin.ejs", {
            link: "kelolaDosenAdmin",
            link1: "petaCpmkAdmin",
            link2: "persentaseMatkulAdmin",
            rows: response.data,
           });
        })
        .catch(function (error) {
          console.log(error);
        });
      });

      app.get("/kelolaDosenAdmin", (req, res) => {

        var url = "http://localhost:5500/";
     
        axios
          .get(url)
          .then(function (response) {
            res.render(__dirname + "/views/admin/kelolaDosenAdmin.ejs", {
              // link: "kelolaDosenAdmin",
              // link1: "petaCpmkAdmin",
              // link2: "persentaseMatkulAdmin",
              rows: response.data,
             });
          })
          .catch(function (error) {
            console.log(error);
          });
        });


app.get('/', (req, res) => {
   pool.getConnection((err, connection) => {
       if(err) throw err
       console.log('connected as id ' + connection.threadId)
       connection.query('SELECT * from courses ', (err, rows) => {
           connection.release() // return the connection to pool

           if (!err) {
            console.log(rows)
            res.render(__dirname + '/views/admin/index.ejs')
            // res.render(__dirname + '/views/admin/dashboardAdmin.ejs', { link1: "petaCpmkAdmin",rows })
            // res.render(__dirname + '/views/admin/dashboardAdmin.ejs', { link2: "persentaseMatkulAdmin",rows })
            // res.send(rows)
               console.log(rows.length)
           } else {
               console.log(err)
           }
           
       })
   })
})


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

app.get("/dashboardAdmin", (req, res) => {
  res.render(__dirname + "/views/admin/dashboardAdmin.ejs");
});
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
