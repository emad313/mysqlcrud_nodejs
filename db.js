'use strict'

var mysql = require('mysql');

//local mysql database connection

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '123456',
    database : 'mydb'
});

connection.connect(function(err){
    if(err) throw err;
});

module.exports = connection;