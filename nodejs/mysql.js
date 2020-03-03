const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  port: 13306,
  user: 'root',
  password: 'nodejs',
  database: 'opentutorials'
});

connection.connect();

connection.query('SELECT * FROM topic', function(error, results, fields) {
  if (error) console.log(error);
  console.log(results);
});

connection.end();
