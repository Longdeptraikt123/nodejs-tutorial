// import express from 'express'
const express = require('express')
require('dotenv').config()

const app = express() // app express
const port = process.env.PORT || 8888  // port
const hostname = process.env.HOST_NAME
const configViewEngine = require('./config/viewEngine')
const webRouter = require('./routes/web')
const connection = require('./config/database')

// config template engine
configViewEngine(app)

// khai bao' route
app.use('/', webRouter) //neu them link '/xxx' vao thi tat ca cai route khai bao se dung sau duong link nay


// simple query
connection.query(
    'SELECT * FROM Users u',
    function (err, results, fields) {
        console.log("results: ", results); // results contains rows returned by server
    }
);


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})