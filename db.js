const mysql2 = require('mysql2');

const connection = mysql2.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'db1',
});

//module.exports = connection;

const createEmployeesTableQuery = `CREATE TABLE employees (
  id INT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT
  );`;

const createDepartmentsTableQuery = `CREATE TABLE departments (
  id INT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);`;

const createRolesTableQuery = `CREATE TABLE roles (
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT
);`;

connection.query(createEmployeesTableQuery, (err, results) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Employess table created!');
});

connection.query(createDepartmentsTableQuery, (err, results) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Departments table created!');
});

connection.query(createRolesTableQuery, (err, results) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Roles table created!');
});

connection.end();