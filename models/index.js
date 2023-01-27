// import models
const User = require("./User");
const Login = require("./Login");
const WorkoutPref = require("./WorkoutPref");
const Difficulty = require('./Difficulty');

// User belongsTo WorkoutPref
User.belongsTo(WorkoutPref)

// User belongsTo Login
User.belongsTo(Login)

// WorkoutPref belongsTo Difficulty
WorkoutPref.belongsTo(Difficulty)

module.exports = {
    WorkoutPref, 
    Difficulty, 
    Login, 
    User
}