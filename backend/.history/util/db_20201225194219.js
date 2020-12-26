const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: process.env.DB_USER, // insert your user name of mysql  
    password: process.env.DB_PASS, //insert your password name of mysql  
    database : 'products'
});

module.exports = pool.promise();