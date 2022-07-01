const Sequelize = require("sequelize");
const db = require("../config/database");

const rps = require("../models/RPS");
const detailRPS = require("../models/DetailRPS");
const cpmk = require("./cpmk");
const mataKuliah = require("../models/MataKuliah");
const References = require("./Referensi");
const DosenPengampu = require("./DosenPengampu");

rps.hasMany(detailRPS, { foreignKey: "course_plan_id" });
detailRPS.belongsTo(rps, { foreignKey: "id" });

rps.hasMany(References, { foreignKey: "course_plan_id" });
References.belongsTo(rps, { foreignKey: "id" });

rps.hasMany(DosenPengampu, { foreignKey: "course_plan_id" });
DosenPengampu.belongsTo(rps, { foreignKey: "id" });

// rps.hasMany(cpmk, { foreignKey: "course_plan_id" });
// cpmk.belongsTo(rps, { foreignKey: "id"});

module.exports = { rps, detailRPS, mataKuliah, cpmk, References, DosenPengampu };
