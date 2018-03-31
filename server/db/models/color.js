const { STRING, INTEGER, VIRTUAL } = require("sequelize");
const db = require("../db");

const Color = db.define(
  "color",
  {
    name: {
      type: STRING,
      unique: true,
      allowNull: false
    },
    hex: {
      type: STRING,
      unique: true
    },
    red: {
      type: STRING,
      allowNull: false
    },
    green: {
      type: STRING,
      allowNull: false
    },
    blue: {
      type: STRING,
      allowNull: false
    },
    rgb: {
      type: VIRTUAL,
      get: function() {
        return `rgb(${+this.red}, ${+this.green}, ${+this.blue})`;
      }
    },
    price: {
      type: INTEGER,
      allowNull: false
    },
    priceInDollars: {
      type: VIRTUAL,
      get: function() {
        const price = (+this.price / 100).toFixed(2);
        return `\$${price}`;
      }
    }
  },
  {
    hooks: {
      beforeCreate: (color, options) => {
        if (color.hex) {
          if (color.hex.charAt(0) !== "#") {
            let value = color.hex;
            color.hex = `#${value}`;
          }
        }
      }
    }
  }
);

module.exports = Color;
