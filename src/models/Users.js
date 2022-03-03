const { Model, DataTypes } = require("sequelize")
const sequelize = require("../loaders/db")

class User extends Model { }

User.init({
	username: {
		type: DataTypes.STRING
	},
	email: {
		type: DataTypes.STRING
	},
	password: {
		type: DataTypes.STRING
	}
}, {
	sequelize,
	modelName: "user"
})

module.exports = User