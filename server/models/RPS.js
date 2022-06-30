// import sequelize
const Sequelize = require('sequelize');

const db = require('../config/database.js');
const cpmk = require("./cpmk");

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const rps = db.define(
  "course_plans",
  {
    // Define attributes

    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    course_id: {
      type: DataTypes.INTEGER,
    },
    rev: {
      type: DataTypes.INTEGER,
    },
    code: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.TEXT,
    },
    alias_name: {
      type: DataTypes.TEXT,
    },
    credit: {
      type: DataTypes.INTEGER,
    },
    semester: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.TEXT,
    },
    material: {
      type: DataTypes.TEXT,
    },
    created_by: {
      type: DataTypes.BIGINT,
    },
    validated_by: {
      type: DataTypes.BIGINT,
    },
    validated_at: {
      type: DataTypes.DATE,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    createdAt: "created_at",
    updatedAt: "updated_at",
    freezeTableName: true,
  }
);

// rps.hasMany(detailRPS, { foreignKey: "course_plan_id" });
// rps.hasMany(cpmk, { foreignKey: "course_plan_id" });
// cpmk.belongsTo(rps, { foreignKey: "id"});

// Export model Product
module.exports = rps;
