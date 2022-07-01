// Import model Product
//const User = require('../models/User');
const cpmk = require("../models/cpmk.js");
const referensi = require("../models/DaftarReferensi.js");
const penilaian = require("../models/Kp-rps.js");
const rps = require("../models/rps.js");
const mingguan = require("../models/PertemuanMingguanRPS.js");
const detailRPS = require("../models/DetailRPS.js");
const IndexRPS = require("../models/IndexRPS.js");

// Get RPS
const getRPS = async (req, res) => {
  try {
    const dataRPS = await IndexRPS.rps.findAll({
      include: [
        {
          model: IndexRPS.DosenPengampu,
        },
      ],
    });
    res.send(dataRPS);
  } catch (err) {
    console.log(err);
  }
};
// Get detail RPS
const getDetailRPS = async (req, res) => {
  try {
    const dataDetailRPS = await detailRPS.findAll();
    res.send(dataDetailRPS);
  } catch (err) {
    console.log(err);
  }
};
// Create RPS baru
const createRPS = async (req, res) => {
  try {
    await rps.create(req.body);
    res.json({
      message: "RPS Created",
    });
  } catch (err) {
    console.log(err);
  }
};
// Update RPS
const updateRPS = async (req, res) => {
  try {
    await rps.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "RPS Updated",
    });
  } catch (err) {
    console.log(err);
  }
};

// Get List  CPMK
const getCPMK = async (req, res) => {
  try {
    const listCPMK = await cpmk.findAll({
      where: {
        course_plan_id: req.params.id,
      },
    });
    res.send(listCPMK);
  } catch (err) {
    console.log(err);
  }
};

// Create List CPMK
const createCPMK = async (req, res) => {
  try {
    await cpmk.create(req.body);
    res.json({
      message: "CPMK Created",
    });
  } catch (err) {
    console.log(err);
  }
};

// Update List CPMK
const updateCPMK = async (req, res) => {
  try {
    await cpmk.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "CPMK Updated",
    });
  } catch (err) {
    console.log(err);
  }
};

// Delete CPMK berdasarkan id
const deleteCPMK = async (req, res) => {
  try {
    await cpmk.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "CPMK Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
// Get List  referensi
const getReferensi = async (req, res) => {
  try {
    const listReferensi = await referensi.findAll();
    res.send(listReferensi);
  } catch (err) {
    console.log(err);
  }
};

// Create List referensi
const createReferensi = async (req, res) => {
  try {
    await referensi.create(req.body);
    res.json({
      message: "Referensi Created",
    });
  } catch (err) {
    console.log(err);
  }
};

// Update List referensi
const updateReferensi = async (req, res) => {
  try {
    await referensi.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Referensi Updated",
    });
  } catch (err) {
    console.log(err);
  }
};

// Delete list referensi berdasarkan id
const deleteReferensi = async (req, res) => {
  try {
    await referensi.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Referensi Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
// Get komponen penilaian
const getKomponen = async (req, res) => {
  try {
    const komponen = await penilaian.findAll();
    res.send(komponen);
  } catch (err) {
    console.log(err);
  }
};

// Create komponen penilaian
const createKomponen = async (req, res) => {
  try {
    await penilaian.create(req.body);
    res.json({
      message: "Komponen Penilaian Created",
    });
  } catch (err) {
    console.log(err);
  }
};

// Update komponen penilaian
const updateKomponen = async (req, res) => {
  try {
    await penilaian.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Komponen Penilaian Updated",
    });
  } catch (err) {
    console.log(err);
  }
};

// Delete komponen penilaian berdasarkan id
const deleteKomponen = async (req, res) => {
  try {
    await penilaian.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Komponen Penilaian Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
// Get Pertemuan Mingguan RPS
const getPertemuan = async (req, res) => {
  try {
    const pertemuan = await mingguan.findAll();
    res.send(pertemuan);
  } catch (err) {
    console.log(err);
  }
};

// Create Pertemuan Mingguan RPS
const createPertemuan = async (req, res) => {
  try {
    await mingguan.create(req.body);
    res.json({
      message: "Pertemuan Created",
    });
  } catch (err) {
    console.log(err);
  }
};

// Update Pertemuan Mingguan RPS
const updatePertemuan = async (req, res) => {
  try {
    await mingguan.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Pertemuan Updated",
    });
  } catch (err) {
    console.log(err);
  }
};

// Delete Pertemuan Mingguan RPS berdasarkan id
const deletePertemuan = async (req, res) => {
  try {
    await mingguan.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Pertemuan Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getRPS,
  getDetailRPS,
  createRPS,
  updateRPS,
  getCPMK,
  createCPMK,
  updateCPMK,
  deleteCPMK,
  getReferensi,
  createReferensi,
  updateReferensi,
  deleteReferensi,
  getKomponen,
  createKomponen,
  updateKomponen,
  deleteKomponen,
  getPertemuan,
  createPertemuan,
  updatePertemuan,
  deletePertemuan,
};

// // Get  berdasarkan id
// const getProductById = async (req, res) => {
//     try {
//         const product = await Product.findAll({
//             where: {
//                 id: req.params.id
//             }
//         });
//         res.send(product[0]);
//     } catch (err) {
//         console.log(err);
//     }
// }

// // Create product baru
// const createProduct = async (req, res) => {
//     try {
//         await Product.create(req.body);
//         res.json({
//             "message": "Product Created"
//         });
//     } catch (err) {
//         console.log(err);
//     }
// }

// // Update product berdasarkan id
// const updateProduct = async (req, res) => {
//     try {
//         await Product.update(req.body, {
//             where: {
//                 id: req.params.id
//             }
//         });
//         res.json({
//             "message": "Product Updated"
//         });
//     } catch (err) {
//         console.log(err);
//     }
// }

// // Delete product berdasarkan id
// const deleteProduct = async (req, res) => {
//     try {
//         await Product.destroy({
//             where: {
//                 id: req.params.id
//             }
//         });
//         res.json({
//             "message": "Product Deleted"
//         });
//     } catch (err) {
//         console.log(err);
//     }
// }
