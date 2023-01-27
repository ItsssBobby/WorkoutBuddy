const { Login } = require('../models');

const loginData = [
    {
        id: 100,
        userId: 1,
        username: "nosbeto",
        pwd: 'password'
        
    }
]

const seedLogin = () => Login.bulkCreate(loginData)

module.exports = seedLogin;