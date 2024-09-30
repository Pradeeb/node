const dotenv = require('dotenv');
const mysql = require('mysql');
const path = require('path');

// Load environment variables first
dotenv.config({ path: path.join(__dirname,'config.env') });

// Access the environment variables
const db_host = process.env.DB_HOST;
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;

console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);

// Create and export the database connection
const connectDatabase = mysql.createConnection({
    host: db_host,
    user: db_user,
    password: db_password,
    database: 'nodeapi'
});

connectDatabase.connect(function (err) {
    if (err) throw err;
    console.log('MySQL connected successfully');
});

module.exports = connectDatabase;
