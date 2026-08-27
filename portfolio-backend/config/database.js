// =========================================================
// DATABASE CONNECTION
// =========================================================

const mysql = require("mysql2/promise");

// Load environment variables
require("dotenv").config();

// Create MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Test database connection
const testDatabaseConnection = async () => {
  try {
    const connection = await pool.getConnection();

    console.log("MySQL database connected successfully.");

    connection.release();
  } catch (error) {
    console.error("MySQL connection failed:", error.message);
  }
};

testDatabaseConnection();

module.exports = pool;