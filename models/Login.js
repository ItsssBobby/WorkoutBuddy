// import important parts of sequelize library
const { DECIMAL } = require("sequelize");
const { INTEGER } = require("sequelize");
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Login extends Model {}

// set up fields and rules for Product model
Login.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: 'user',
        key: 'id'
    }
  },
  username: {
    type: DataTypes.STRING,
    allowNull:false,
    validate: {
        isLowercase: true,
        notNull:true,
        len: [6,13],
        not: ["^[a-z]+$",'i']
    }
  },
  pwd: {
    type:DataTypes.STRING,
    allowNull: false
  }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'login'
  }
);

module.exports = Login;