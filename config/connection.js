"use strict";
const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: "process.env.PORT",
    user: "root",
    password: "otis1978",
    database: "burgersDB"
  });
}

connection.connect(err => {
  if (err) throw err;
});

module.exports = connection;
