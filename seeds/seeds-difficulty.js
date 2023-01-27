const { Difficulty } = require('../models');

const difficultyData = [
    {
        id: 100,
        difficulty:"Hard"
    }
]

const seedDifficulty = () => Difficulty.bulkCreate(difficultyData)

module.exports = seedDifficulty;