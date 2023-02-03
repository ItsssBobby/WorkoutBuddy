// import models
const User = require("./User");
const Login = require("./Login");
const WorkoutPref = require("./WorkoutPref");
const Post = require("./Post");
const Workout_Cardio = require("./Workout_Cardio")
const Workout_Strongman = require('./Workout_Strongman')
const Workout_Strength = require('./Workout_Strength')

User.hasOne(WorkoutPref)

WorkoutPref.belongsTo(User, {
    foreignKey: "userId",
    onDelete: 'CASCADE',
})


// User belongsTo Login
User.hasOne(Login)

Login.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
})


User.hasMany(Post)

Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
})

WorkoutPref.hasOne(Workout_Strength)
Workout_Strength.belongsTo(WorkoutPref,{
    foreignKey: 'workoutType',
    onDelete:'CASCADE'
})


WorkoutPref.hasOne(Workout_Strongman)
Workout_Strongman.belongsTo(WorkoutPref,{
    foreignKey: 'workoutType',
    onDelete:'CASCADE'
})

WorkoutPref.hasOne(Workout_Cardio)
Workout_Cardio.belongsTo(WorkoutPref,{
    foreignKey: 'workoutType',
    onDelete:'CASCADE'
})

module.exports = {
    User,
    WorkoutPref, 
    Login, 
    Post,
    Workout_Cardio,
    Workout_Strength,
    Workout_Strongman
}