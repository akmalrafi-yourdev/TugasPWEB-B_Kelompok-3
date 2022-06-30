const Sequelize = require('sequelize');
const db = require('../config/database');
// import rps from "../models/RPS.js";

const { DataTypes } = Sequelize;

const   DosenPengampu = db.define(
  "course_plan_lecturers",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    course_plan_id: {
      type: DataTypes.BIGINT,
    },
    lecturer_id: {
      type: DataTypes.BIGINT,
    },
    creator: {
      type: DataTypes.INTEGER,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updated_at: {
      type: DataTypes.DATE,
      // defaultValue: DataTypes.DATE
    },
  },
  {
    createdAt: "created_at",
    updatedAt: "updated_at",
    freezeTableName: true,
  }
);

module.exports = DosenPengampu;