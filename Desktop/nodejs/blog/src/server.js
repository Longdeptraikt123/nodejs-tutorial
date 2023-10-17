// import express from 'express'
const express = require('express')
require('dotenv').config()

const app = express() // app express
const port = process.env.PORT || 8888  // port
const hostname = process.env.HOST_NAME
const configViewEngine = require('./config/viewEngine')
const webRouter = require('./routes/web')
const mysql = require('mysql2');

// config template engine
configViewEngine(app)

// khai bao' route
app.use('/', webRouter) //neu them link '/xxx' vao thi tat ca cai route khai bao se dung sau duong link nay


// test connection
// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '123456',
    database: 'Teo151104'
});

// simple query
connection.query(
    'SELECT * FROM Users u',
    function (err, results, fields) {
        console.log("results: ", results); // results contains rows returned by server
        console.log("fields: ", fields); // fields contains extra meta data about results, if available
    }
);


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})