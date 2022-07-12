const express = require('express');
const mysql = require('mysql2');

const port = 3000;
const app = express();

const mysqlConfig = require('./mysql-config');

const mysqlDB = mysql.createConnection ({
  host: mysqlConfig.host,
  user: mysqlConfig.user,
  password: mysqlConfig.password,
  database: mysqlConfig.database
});

mysqlDB.connect ((err) => {
  err ? console.log(err) : console.log('mysql connection')
});

app.listen(port, () => {
  console.log(`mysql listening to port ${port}`)
})

