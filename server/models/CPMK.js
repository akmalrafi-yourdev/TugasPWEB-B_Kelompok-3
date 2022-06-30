// import sequelize 
const Sequelize = require('sequelize');
// import connection 
const db = require('../config/database.js');
const rps = require('./RPS'); 

// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const cpmk = db.define(
  'course_los', {
  // Define attributes
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  course_plan_id: {
    type: DataTypes.BIGINT
  },
  type: {
    type: DataTypes.INTEGER
  },
  code: {
    type: DataTypes.STRING
  },
  name: {
    type: DataTypes.TEXT
  },
  parent_id: {
    type: DataTypes.BIGINT
  },
  created_at: {
    type: DataTypes.DATE,
  },
  updated_at: {
    type: DataTypes.DATE,
  },
  

}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    freezeTableName: true,
  });
 
// Export model Product
module.exports = cpmk;