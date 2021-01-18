const express = require('express')
const app = express()
const rout = require('./rout/index')
const errorHandler = require('./midleware/errHandler')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(rout)
app.use(errorHandler)

module.exports = app