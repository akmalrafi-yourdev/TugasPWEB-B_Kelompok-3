const Sequelize = require('sequelize');
const db = require('../config/database');
// import rps from "../models/RPS.js";

const { DataTypes } = Sequelize;

const Dosen = db.define(
  "lecturers",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    reg_id: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    status: {
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

module.exports = Dosen;