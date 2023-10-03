const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'employee_tracker',
});

async function runSeeds() {
  const connection = await pool.getConnection();
  await connection.query('SOURCE seeds.sql');
  await connection.release();
}

runSeeds();
