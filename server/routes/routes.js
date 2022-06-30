const express = require("express");
const AdminController = require("../controllers/AdminController.js");
const UserController = require("../controllers/UserController.js");
const DosenController = require("../controllers/DosenController.js")
// import { createCPMK, createKomponen, createPertemuan, createReferensi, createRPS, deleteCPMK, deleteKomponen, deletePertemuan, deleteReferensi, getCPMK, getDetailRPS, getKomponen, getPertemuan, getReferensi, getRPS, updateCPMK, updateKomponen, updatePertemuan, updateReferensi, updateRPS } from "../controllers/DosenController.js";
// import detailRPS from "../models/DetailRPS.js";

const router = express.Router();

// Admin Routing
router.post("/admin/inputDosenPengampu/", AdminController.inputCoursePlanLecturers);
router.put("/admin/updateDosenPengampu/:id", AdminController.updateCoursePlanLecturers);
router.post('/admin/matakuliah', AdminController.createMatkul);
router.get('/admin/rps/:id', AdminController.listRPS);

//Dosen/Lecturer Routing
router.get('/dosen/rps', DosenController.getRPS)
router.get('/dosen/detail-rps', DosenController.getDetailRPS)
router.post('/dosen/rps', DosenController.createRPS)
router.put('/dosen/rps/:id', DosenController.updateRPS)
router.get('/dosen/cpmk', DosenController.getCPMK)
router.post('/dosen/cpmk', DosenController.createCPMK)
router.put('/dosen/cpmk', DosenController.updateCPMK)
router.delete('/dosen/cpmk', DosenController.deleteCPMK)
router.get('/dosen/referensi', DosenController.getReferensi)
router.post('/dosen/referensi', DosenController.createReferensi)
router.put('/dosen/referensi', DosenController.updateReferensi)
router.delete('/dosen/referensi', DosenController.deleteReferensi)
router.get('/dosen/komponen', DosenController.getKomponen)
router.post('/dosen/komponen', DosenController.createKomponen)
router.put('/dosen/komponen', DosenController.updateKomponen)
router.delete('/dosen/komponen', DosenController.deleteKomponen)
router.get('/dosen/pertemuan', DosenController.getPertemuan)
router.post('/dosen/pertemuan', DosenController.createPertemuan)
router.put('/dosen/pertemuan', DosenController.updatePertemuan)
router.delete('/dosen/pertemuan', DosenController.deletePertemuan)

// USER/MAHASISWA ROUTES
router.get("/user/matakuliah", UserController.getMatkul);
router.get("/user/matakuliah/:search", UserController.searchMatkul);
router.get("/user/matakuliah/rps/:id", UserController.matkulDetail);

// USER/MAHASISWA ROUTES

module.exports = router;
