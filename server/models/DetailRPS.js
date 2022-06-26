// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/database.js";
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const detailRPS = db.define('course_plan_details', {
  // Define attributes
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  course_plan_id: {
    type: DataTypes.BIGINT
  },
  week: {
    type: DataTypes.INTEGER
  },
  material: {
    type: DataTypes.TEXT
  },
  method: {
    type: DataTypes.TEXT
  },
  student_experience: {
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
export default detailRPS;