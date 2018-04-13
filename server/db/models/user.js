const { STRING, VIRTUAL } = require("sequelize");
const db = require("../db");

const User = db.define("user", {
  firstName: {
    type: STRING,
    allowNull: false
  },
  lastName: {
    type: STRING,
    allowNull: false
  },
  email: {
    type: STRING,
    unique: {
      name: "user_email",
      msg: "A user with this email already exsists."
    },
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: {
        msg: "Must be a valid email."
      }
    }
  },
  fullName: {
    type: VIRTUAL,
    get: function() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
});

module.exports = User;
