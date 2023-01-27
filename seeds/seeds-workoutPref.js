const { WorkoutPref } = require('../models');

const workoutPrefData = [
    {
        userId: 1,
        workoutType: "strength",
        difficulty: "intermediate",
    }
]

const seedWorkoutPref = () => WorkoutPref.bulkCreate(workoutPrefData);

module.exports = seedWorkoutPref;