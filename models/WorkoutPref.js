// import important parts of sequelize library
const { DECIMAL } = require("sequelize");
const { INTEGER } = require("sequelize");
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class WorkoutPref extends Model {}

// set up fields and rules for Product model
WorkoutPref.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  difficultyId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: 'Difficulty',
        key: 'id'
    }
  },
  workoutType: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        isAlpha: true,
        notContains: " ",
      },
  }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'workoutPref'
  }
);

module.exports = WorkoutPref
