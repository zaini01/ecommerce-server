const {User} = require('../../models/index')

function seeder(done) {
    const body = {
        firstname:'some',
        lastname:'one',
        email: 'a@gmail.com',
        password: '123456',
        role: 'admin'
    }

    
    if (process.env.NODE_ENV == 'test') {
        return User.create(body)
    }
}

module.exports = seeder