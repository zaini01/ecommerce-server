const rout = require('express').Router()
const user = require('./user')
const product = require('./product')
const {authentication} = require('../midleware/auth')

rout.get('/',(req,res)=>{
    res.send({message:'WELCOME'})
})
rout.use(user)
rout.use(authentication)
rout.use(product)
module.exports = rout