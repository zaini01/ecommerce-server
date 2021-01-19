const rout = require('express').Router()
const product = require('../controllers/product')
const {authorization} = require('../midleware/auth')

rout.use(authorization)
rout.post('/product',product.add)
rout.put('/product/:id',product.put)
rout.delete('/product/:id',product.delete)

module.exports = rout