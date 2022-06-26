// Import model Product
import cpmk from '../models/cpmk.js';
import referensi from '../models/DaftarReferensi.js';
import penilaian from '../models/Kp-rps.js';
import rps from '../models/rps.js';
import mingguan from '../models/PertemuanMingguanRPS.js';
import detailRPS from '../models/DetailRPS.js';
// Get RPS
export const getRPS = async (req, res) => {
    try {
        const dataRPS = await rps.findAll();
        res.send(dataRPS);
    } catch (err) {
        console.log(err);
    }
}
// Get detail RPS
export const getDetailRPS = async (req, res) => {
    try {
        const dataDetailRPS = await DetailRPS.findAll();
        res.send(dataDetailRPS);
    } catch (err) {
        console.log(err);
    }
}
// Create RPS baru
export const createRPS = async (req, res) => {
    try {
        await rps.create(req.body);
        res.json({
            "message": "RPS Created"
        });
    } catch (err) {
        console.log(err);
    }
}
// Update RPS
export const updateRPS = async (req, res) => {
    try {
        await rps.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "RPS Updated"
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Get List  CPMK
export const getCPMK = async (req, res) => {
    try {
        const listCPMK = await cpmk.findAll();
        res.send(listCPMK);
    } catch (err) {
        console.log(err);
    }
}

// Create List CPMK
export const createCPMK = async (req, res) => {
    try {
        await cpmk.create(req.body);
        res.json({
            "message": "CPMK Created"
        });
    } catch (err) {
        console.log(err);
    }
}

// Update List CPMK
export const updateCPMK = async (req, res) => {
    try {
        await cpmk.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "CPMK Updated"
        });
    } catch (err) {
        console.log(err);
    }
}

// Delete CPMK berdasarkan id
export const deleteCPMK = async (req, res) => {
    try {
        await cpmk.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "CPMK Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}
// Get List  referensi
export const getReferensi = async (req, res) => {
    try {
        const listReferensi = await DaftarReferensi.findAll();
        res.send(listReferensi);
    } catch (err) {
        console.log(err);
    }
}

// Create List referensi
export const createReferensi = async (req, res) => {
    try {
        await DaftarReferensi.create(req.body);
        res.json({
            "message": "Referensi Created"
        });
    } catch (err) {
        console.log(err);
    }
}

// Update List referensi
export const updateReferensi = async (req, res) => {
    try {
        await DaftarReferensi.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Referensi Updated"
        });
    } catch (err) {
        console.log(err);
    }
}

// Delete list referensi berdasarkan id
export const deleteReferensi = async (req, res) => {
    try {
        await DaftarReferensi.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Referensi Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}
// Get komponen penilaian
export const getKomponen = async (req, res) => {
    try {
        const komponen = await Kp-rps.findAll();
        res.send(komponen);
    } catch (err) {
        console.log(err);
    }
}

// Create komponen penilaian
export const createKomponen = async (req, res) => {
    try {
        await Kp-rps.create(req.body);
        res.json({
            "message": "Komponen Penilaian Created"
        });
    } catch (err) {
        console.log(err);
    }
}

// Update komponen penilaian
export const updateKomponen = async (req, res) => {
    try {
        await Kp-rps.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Komponen Penilaian Updated"
        });
    } catch (err) {
        console.log(err);
    }
}

// Delete komponen penilaian berdasarkan id
export const deleteKomponen = async (req, res) => {
    try {
        await Kp-rps.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Komponen Penilaian Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}
// Get Pertemuan Mingguan RPS
export const getPertemuan = async (req, res) => {
    try {
        const pertemuan = await PertemuanMingguanRPS.findAll();
        res.send(pertemuan);
    } catch (err) {
        console.log(err);
    }
}

// Create Pertemuan Mingguan RPS
export const createPertemuan = async (req, res) => {
    try {
        await PertemuanMingguanRPS.create(req.body);
        res.json({
            "message": "Pertemuan Created"
        });
    } catch (err) {
        console.log(err);
    }
}

// Update Pertemuan Mingguan RPS
export const updatePertemuan = async (req, res) => {
    try {
        await PertemuanMingguanRPS.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Pertemuan Updated"
        });
    } catch (err) {
        console.log(err);
    }
}

// Delete Pertemuan Mingguan RPS berdasarkan id
export const deletePertemuan = async (req, res) => {
    try {
        await PertemuanMingguanRPS.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Pertemuan Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}






// // Get  berdasarkan id
// export const getProductById = async (req, res) => {
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
// export const createProduct = async (req, res) => {
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
// export const updateProduct = async (req, res) => {
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
// export const deleteProduct = async (req, res) => {
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