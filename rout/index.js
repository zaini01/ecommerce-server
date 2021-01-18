const rout = require('express').Router()
const user = require('./user')

rout.get('/',(req,res)=>{
    res.send({message:'WELCOME'})
})
rout.use(user)
module.exports = rout