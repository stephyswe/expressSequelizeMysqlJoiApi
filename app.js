const express = require('express')
const app = express()
const bodyParser = require('body-parser'); 


app.use(express.json())
app.use(bodyParser.json());

//import all 
const link = require('./router/routers')

app.use('/api/v1', link)


module.exports = app
