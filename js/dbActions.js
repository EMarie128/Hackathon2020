var mysql = require('mysql');

var con = mysql.createConnection({
  host: "35.237.246.137",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});