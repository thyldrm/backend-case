const { Model, DataTypes } = require("sequelize")
const sequelize = require("../loaders/db")
const User = require("./Users")
const Product = require("./Products")

class Order extends Model { }

Order.init({
	userId: {
		type: DataTypes.INTEGER,
		allowNull: false,
		references: {
			model: "users",
			key: "id"
		}
	},
	productId: {
		type: DataTypes.INTEGER,
		allowNull: false,
		references: {
			model: "products",
			key: "id"
		}
	},
	quantity: {
		type: DataTypes.INTEGER
	}
}, {
	sequelize,
	modelName: "order"
})

Order.belongsTo(User, { foreignKey: "userId" })
Order.belongsTo(Product, { foreignKey: "productId" })

module.exports = Order
