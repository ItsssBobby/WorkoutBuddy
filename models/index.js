// import models
const User = require("./User");
const Login = require("./Login");
const WorkoutPref = require("./WorkoutPref");
const Post = require("./Post");

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

module.exports = {
    User,
    WorkoutPref, 
    Login, 
    Post,
}