const { STRING, INTEGER } = require("sequelize");
const db = require("../db");

const Color = db.define("color", {
  name: {
    type: STRING,
    unique: true,
    allowNull: false
  },
  hex: {
    type: STRING,
    unique: true
  }
});

module.exports = Color;
