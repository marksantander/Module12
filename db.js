const mysql2 = require('mysql2');

const connection = mysql2.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'db1',
  //database: 'employee_database',
});

//module.exports = connection;

connection.connect();

const query = 'SELECT * FROM users';

connection.query(query, (err, results) => {
  if (err) {
    console.log(err);
  } else {
    console.log(results);
  }

  connection.end();
});