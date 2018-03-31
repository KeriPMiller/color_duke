const Sequelize = require("sequelize");

const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost:5432/color_duke",
  {
    logging: false,
    operatorsAliases: false
  }
);

module.exports = db;
