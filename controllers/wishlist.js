const {WishList} = require('../models/index')

class WishListCon {

    static add (req, res) {
        let wishlist = {
            UserId: req.loginUser.id,
            ProductId: req.params.id,
        }
        WishList.create(wishlist)
        .then(data => {
            res.status(200).json({message: 'Success create new wish list.'})
        })
        .catch(err => {
            next(err)
        })
    }

    static delete (req, res) {
        let id = params.idwishlist
        WishList.destroy({where: {id}})
        .then(data => {
            res.status(200).json({message: 'Deleted.'})
        })
        .catch(err => {
            next(err)
        })
    }

}

module.exports = WishListCon