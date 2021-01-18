const {User} = require('../../models/index')

function cleanUser(params) {
    if (process.env.NODE_ENV == 'test') {
        return User.destroy({where:{}})
    }
}

module.exports = cleanUser