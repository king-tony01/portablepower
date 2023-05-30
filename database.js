const mySql = require("mysql");
let myDb = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  insecureAuth: true,
  database: "portable_power",
});

myDb.connect(function (err) {
  if (err) throw err;
  console.log("Connection Successful!");
});

module.exports = {
  myDb,
};
