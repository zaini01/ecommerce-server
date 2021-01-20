const routs = require('express').Router()
const user = require('./user')
const product = require('./product')
const {authentication} = require('../midleware/auth')

routs.get('/',(req,res)=>{
    res.send({message:'WELCOME'})
})
routs.use(user)
routs.use(authentication)
routs.use(product)
module.exports = routs