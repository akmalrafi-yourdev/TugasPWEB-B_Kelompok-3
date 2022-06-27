const Sequelize = require("sequelize");
const db = require("../config/database");

const rps = require("../models/RPS");
const detailRPS = require("../models/DetailRPS");
const mataKuliah = require("../models/MataKuliah");

// import rps from "../models/RPS.js";
// import detailRPS from "../models/DetailRPS.js";
// import MataKuliah from "../models/MataKuliah.js";

rps.hasMany(detailRPS, { foreignKey: "course_plan_id" });

rps.belongsTo(mataKuliah, { foreignKey: "id" });
detailRPS.belongsTo(rps, { foreignKey: "id" });

module.exports = { rps, detailRPS };
