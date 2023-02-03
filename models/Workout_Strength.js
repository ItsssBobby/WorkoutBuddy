const { DECIMAL } = require("sequelize");
const { INTEGER } = require("sequelize");
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class WorkoutStrength extends Model {}

// set up fields and rules for Product model
WorkoutStrength.init(
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
      validate: {
        is: ["strength"],
        notContains: " ",
        isAlpha: true,
      },
    },
    difficulty: {
      type: DataTypes.STRING,
      values: ["beginner", "intermediate", "expert"],
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
    modelName: "workoutStrength",
  }
);

module.exports = WorkoutStrength;
