// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/database.js";
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const penilaian = db.define('course_plan_assessments', {
  // Define attributes
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  course_plan_id: {
    type: DataTypes.BIGINT
  },
  name: {
    type: DataTypes.STRING
  },
  percentage: {
    type: DataTypes.DOUBLE
  },
  flag: {
    type: DataTypes.INTEGER
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
export default penilaian;