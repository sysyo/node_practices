// connection
const mysql = require('mysql2');

module.exports = {
    findAll: function() {
        const conn = mysql.createConnection({
            // connection 정보 - 나중에 properties 비슷하게 밖으로 뺄 것
            host: '127.0.0.1',
            port: 3306,
            user: 'webdb',
            password: 'webdb',
            databse: 'webdb'
        });
    }
}