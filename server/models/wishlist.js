const {DataTypes} = require('sequelize')

const { sequelize } = require("../util/database")

module.exports = {
    Wishlist: sequelize.define("wishlist", {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
        },
        name: DataTypes.STRING,
        background_image: DataTypes.TEXT,
        genres: DataTypes.STRING
      }),
}