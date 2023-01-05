const mySQL = require("mysql");

const db = mySQL.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "resto_api",
});

module.exports = db;
