const {Sequelize} = require('sequelize');

const db = new Sequelize(
    database = "proyecto_oviadso",
    username = "root",
    password ="1192750341nata",
    {
    dialect: "mysql",
    host: "localhost",
    port: 3306
    }
);

module.exports = db;