const express = require('express')
const mysql = require('mysql')

const port = 3306
const app = express()

const mysqlConfig = require('./mysql-config')

const mysqlDB = mysql.createConnection ({
    host: mysqlConfig.host,
    user: mysqlConfig.user,
    password: mysqlConfig.password,
    database: mysqlConfig.database
})

mysqlDB.connect((err) => {
err ? console.log(err) : console.log('mysql connection')
})

app.listen(port, () => {
   console.log(`mysql listening to port ${port}`)
})

// app.get("/", (req, res) => {
//     res.send("good!")
// })

app.post("/create-table", (req, res) => {
    myQuery = "create table test222 (col init);"

    mysqlDB.query(myQuery, (err, result) => {
        if (err) console.log(err) 
        else res.send(result)
    })
})

