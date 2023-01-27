const { Login } = require('../models');

const loginData = [
    {
        id: 2,
        username: "nosbeto",
    }
]

const seedLogin = () => Login.bulkCreate(loginData)

module.exports = seedLogin;