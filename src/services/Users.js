const User = require("../models/Users")
const OrderService = require("../services/Orders")

const createUser = (data) => {
	return User.create(data)
}

const getAllOrders = (userId) => {
	return OrderService.allOrders(userId)
}

module.exports = { createUser, getAllOrders }