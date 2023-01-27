// import models
const User = require("./User");
const Login = require("./Login");
const WorkoutPref = require("./WorkoutPref");

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


module.exports = {
    User,
    WorkoutPref, 
    Login, 
}