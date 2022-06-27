const express = require("express");
const Admin = require("../controllers/AdminController.js");
const UserController = require("../controllers/UserController.js");
// import { createCPMK, createKomponen, createPertemuan, createReferensi, createRPS, deleteCPMK, deleteKomponen, deletePertemuan, deleteReferensi, getCPMK, getDetailRPS, getKomponen, getPertemuan, getReferensi, getRPS, updateCPMK, updateKomponen, updatePertemuan, updateReferensi, updateRPS } from "../controllers/DosenController.js";
const User = require("../controllers/UserController.js");
// import detailRPS from "../models/DetailRPS.js";

const router = express.Router();

// Admin Routing
// router.post("/admin/inputDosen", function (req, res) {
// Admin.
//   });

//Dosen/Lecturer Routing

// router.get('/rps', getRPS)
// router.get('/detail-rps', getDetailRPS)
// router.post('/rps', createRPS)
// router.put('/rps/:id', updateRPS)
// router.get('/cpmk', getCPMK)
// router.post('/cpmk', createCPMK)
// router.put('/cpmk', updateCPMK)
// router.delete('/cpmk', deleteCPMK)
// router.get('/referensi', getReferensi)
// router.post('/referensi', createReferensi)
// router.put('/referensi', updateReferensi)
// router.delete('/referensi', deleteReferensi)
// router.get('/komponen', getKomponen)
// router.post('/komponen', createKomponen)
// router.put('/komponen', updateKomponen)
// router.delete('/komponen', deleteKomponen)
// router.get('/pertemuan', getPertemuan)
// router.post('/pertemuan', createPertemuan)
// router.put('/pertemuan', updatePertemuan)
// router.delete('/pertemuan', deletePertemuan)

// USER/MAHASISWA ROUTES
router.get('/user/matakuliah', User.getMatkul)
router.get('/user/matakuliah/:search', User.searchMatkul)
router.get('/user/matakuliah/rps/:id', User.matkulDetail)
// router.get("/user/matakuliah", function (req, res) {
//   try {
//     User.getMatkul;
//     console.log('User.g :>> ', User.getMatkul);
//     console.log("jalan")
//   } catch (error) {
//     console.log(error);
//   }
// });
// router.get("/user/matakuliah/:search", function (req, res) {
//   User.searchMatkul;
// });
// router.get("/user/matakuliah/rps/:id", function (req, res) {
//   User.matkulDetail;
// });

module.exports = router;
