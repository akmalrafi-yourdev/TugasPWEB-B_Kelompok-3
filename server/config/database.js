import { Sequelize } from "sequelize";

const db = new Sequelize('belajar_mysql', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db;
