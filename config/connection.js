"use strict";
const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "otmaa16c1i9nwrek.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: "3306",
    user: "lzt16frm99or9kda",
    password: "uqoyccuiew09jla7",
    database: "pvocv05e3x6w1nxc"
  });
}

connection.connect(err => {
  if (err) throw err;
});

module.exports = connection;
