const { WorkoutPref } = require('../models');

const workoutPrefData = [
    {
        difficultyId: 100,
        workoutType: "strength"
    }
]

const seedWorkoutPref = () => WorkoutPref.bulkCreate(workoutPrefData);

module.exports = seedWorkoutPref;