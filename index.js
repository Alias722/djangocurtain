require('dotenv').config()

const express = require('express')
const functions = require('firebase-functions')
const app = express()

const query = require('./routes/query.js')
const add = require('./routes/add.js')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/q',query);
app.use('/add',add);

exports.redirect = functions.https.onRequest(app)