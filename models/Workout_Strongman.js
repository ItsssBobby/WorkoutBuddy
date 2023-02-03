const { DECIMAL } = require("sequelize");
const { INTEGER } = require("sequelize");
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class WorkoutStrongman extends Model {}

// set up fields and rules for Product model
WorkoutStrongman.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    workoutType: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "workoutPref",
        key: "workoutType",
      },
      validate: {
        is: ["strongman"],
        notContains: " ",
        isAlpha: true,
      },
    },
    difficulty: {
      type: DataTypes.STRING,
      values: ["beginner", "intermediate", "expert"],
      references: {
        model: "workoutPref",
        key: "difficulty",
      },
    },
    workoutDesc: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "workoutStrongman",
  }
);

module.exports = WorkoutStrongman;
