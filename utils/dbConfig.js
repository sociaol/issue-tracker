const mysql = require('mysql2');

const dbConfig = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'sqlserver21!',
    database: 'nodejs_login'
}); 

module.exports = dbConfig.promise(); 


  