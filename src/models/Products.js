const { Model, DataTypes } = require("sequelize")
const sequelize = require("../loaders/db")

class Product extends Model { }

Product.init({
	name: {
		type: DataTypes.STRING
	},
	category: {
		type: DataTypes.STRING
	},
	stock: {
		type: DataTypes.INTEGER
	}
}, {
	sequelize,
	modelName: "product"
})

module.exports = Product
