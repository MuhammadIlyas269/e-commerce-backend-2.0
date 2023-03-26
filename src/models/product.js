const { DataTypes } = require("sequelize");
const sequelize = require("../utils/database");
const User = require("./user");

const Product = sequelize.define("Product", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
  },
  images: { type: DataTypes.JSON, defaultValue: {} },
  stock: {
    type: DataTypes.INTEGER,
    validate: {
      min: 0,
    },
  },
  //
});

User.hasMany(Product, { foreignKey: "seller" });

module.exports = Product;
