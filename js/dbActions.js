var mysql = require('mysql');

var con = mysql.createConnection({
  host: "35.237.246.137",
  user: "root",
  password: ""
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

function addUser(user){
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    var sql = "INSERT INTO users (UserID, FirsteName, MiddleName, LastName, Email, BirthDate, UserPassword, Height, Weight) VALUES ?";
    con.query(sql, [user], function (err, result) {
      if (err) throw err;
      console.log("1 record inserted: ", sql);
    });
  });
}

let per = ['9999','Mat', 'f', 'Davidson', 'bloosh', '1988-09-08', 'poopsicle','76','245'];
addUser(per);
//export {addUser};