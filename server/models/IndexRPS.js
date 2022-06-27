// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../config/database.js";

import rps from "../models/RPS.js";
import detailRPS from "../models/DetailRPS.js";
import MataKuliah from "../models/MataKuliah.js";

rps.hasMany(detailRPS, { foreignKey: "course_plan_id" });

rps.belongsTo(MataKuliah, { foreignKey: "id" });
detailRPS.belongsTo(rps, { foreignKey: "id" });

export { rps, detailRPS };
