const routs = require('express').Router({ mergeParams: true })
const cart = require('../controllers/cart')

routs.post('/cart',cart.addToCart)
routs.put('/cart/:idcartlist',cart.put)
routs.delete('/cart/:idcartlist',cart.delete)
routs.delete('/cart/:idcart/all',cart.deleteCart)
routs.post('/cart/:idcart',cart.checkout)

module.exports = routs