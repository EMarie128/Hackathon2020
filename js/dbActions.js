//var mysql = require('mysql');

var con = mysql.createConnection({
  host: "35.237.246.137",
  user: "root",
  password: "",
  database: "hackathon"
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

function addUser(user){
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    
    var sql = "INSERT INTO users (UserID, FirstName, MiddleName, LastName, Email, BirthDate, UserPassword, Height, Weight) VALUES (?)";
    con.query(sql, [user], function (err, result) {
      if (err) throw err;
      console.log("1 record inserted: ", sql);
    });
  });
}

function addDaily(day){
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    
    var sql = "INSERT INTO dailyStats (UserID, CurrentDate, StepsWalked, CaloriesIn, HoursSlept) VALUES (?)";
    con.query(sql, [day], function (err, result) {
      if (err) throw err;
      console.log("1 record inserted: ", sql);
    });
  });
}

// let per = [9999, '2020-09-08', 15600 ,5000,23];
// addDaily(per);

export {addUser};