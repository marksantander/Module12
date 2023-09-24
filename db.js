const mysql2 = require('mysql2');

const connection = mysql2.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'db1',
});

//module.exports = connection;

const createTableQuery = `CREATE TABLE employees (
  id INT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT
  PRIMARY KEY (id)
)`;

const createTableQuery = `CREATE TABLE department (
  id INT PRIMARY KEY,
  name VARCHAR (30) NOT NULL,
)`;

const createTableQuery = `CREATE TABLE role (
  id INT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT,
)`;

connection.query(createTableQuery, (err, results) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Table created!');
});

connection.end();