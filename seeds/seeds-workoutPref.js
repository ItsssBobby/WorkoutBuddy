const { WorkoutPref } = require('../models');

const workoutPrefData = [
    {
        id:1000,
        userId: 1,
        workoutType: "strength",
        difficulty: "intermediate",
    }
]

const seedWorkoutPref = () => WorkoutPref.bulkCreate(workoutPrefData);

module.exports = seedWorkoutPref;