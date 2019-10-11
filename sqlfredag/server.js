// ln -s /usr/local/lib/node_modules node_modules
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "katt",
  password: "kattabase"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
