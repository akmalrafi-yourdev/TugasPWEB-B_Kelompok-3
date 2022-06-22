// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/database.js";
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const rps = db.define('course_plans', {
  // Define attributes
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  course_id: {
    type: DataTypes.BIGINT
  },
  rev: {
    type: DataTypes.INTEGER
  },
  code: {
    type: DataTypes.STRING
  },
  name: {
    type: DataTypes.TEXT
  },
  alias_name: {
    type: DataTypes.TEXT
  },
  credit: {
    type: DataTypes.INTEGER
  },
  semester: {
    type: DataTypes.INTEGER
  },
  description: {
    type: DataTypes.TEXT
  },
  material: {
    type: DataTypes.TEXT
  },
  created_by: {
    type: DataTypes.BIGINT
  },
  validated_by: {
    type: DataTypes.BIGINT
  },
  validated_at: {
    type: DataTypes.DATE
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
export default rps;