// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/database.js";
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const referensi = db.define('course_plan_references', {
  // Define attributes
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  course_plan_id: {
    type: DataTypes.BIGINT
  },
  title: {
    type: DataTypes.STRING
  },
  author: {
    type: DataTypes.STRING
  },
  publisher: {
    type: DataTypes.STRING
  },
  year: {
    type: DataTypes.INTEGER
  },
  description: {
    type: DataTypes.TEXT
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
export default referensi;