const mysql = require("mysql2");
require("dotenv").config();

// const oMySQLConnection = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
//   host: process.env.HOST,
//   dialect: 'mysql'
// });

const oMySQLConnection = mysql.createPool({
  connectionLimit: 100,
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

module.exports = oMySQLConnection;