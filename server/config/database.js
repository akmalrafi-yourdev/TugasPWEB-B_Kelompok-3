import { Sequelize } from "sequelize";

const db = new Sequelize('loki', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db;
