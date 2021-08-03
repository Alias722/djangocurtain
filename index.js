require('dotenv').config()

const express = require('express')
const app = express()

const query = require('./routes/query.js')
const add = require('./routes/add.js')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/q',query);
app.use('/add',add);

module.exports = {app}