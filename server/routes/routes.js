const express = require("express");
const AdminController = require("../controllers/AdminController.js");
const UserController = require("../controllers/UserController.js");
// import { createCPMK, createKomponen, createPertemuan, createReferensi, createRPS, deleteCPMK, deleteKomponen, deletePertemuan, deleteReferensi, getCPMK, getDetailRPS, getKomponen, getPertemuan, getReferensi, getRPS, updateCPMK, updateKomponen, updatePertemuan, updateReferensi, updateRPS } from "../controllers/DosenController.js";
// import detailRPS from "../models/DetailRPS.js";

const router = express.Router();

// Admin Routing
router.post("/admin/inputDosen/", AdminController.inputCoursePlanLecturers);

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
router.get("/user/matakuliah", UserController.getMatkul);
router.get("/user/matakuliah/:search", UserController.searchMatkul);
router.get("/user/matakuliah/rps/:id", UserController.matkulDetail);

module.exports = router;
