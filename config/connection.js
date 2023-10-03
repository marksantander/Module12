const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'employee_tracker',
});

const query = async (sql, args) => {
  const connection = await pool.getConnection();
  const results = await connection.query(sql, args);
  await connection.release();
  return results;
};

module.exports = query;
