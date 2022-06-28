const Sequelize = require('sequelize');

const db = new Sequelize('belajar_mysql', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = db

// export {db};
