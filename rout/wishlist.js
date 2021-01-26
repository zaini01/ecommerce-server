const routs = require('express').Router({ mergeParams: true })
const wishlist = require('../controllers/wishlist')

routs.post('/wishlist', wishlist.add)
routs.delete('/wishlist/idwishlist', wishlist.delete)

module.exports = routs 