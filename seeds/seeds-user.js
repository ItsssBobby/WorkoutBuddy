const { User } = require('../models');

const userData = [
    {
        id: 1,
        workoutPrefId: 1,
        loginId:1,
        firstName: "Beto",
        lastName: "De Armas",
        email: "betoEmail@gmail.com"
    }
]

const seedUser = () => User.bulkCreate(userData)

module.exports = seedUser;