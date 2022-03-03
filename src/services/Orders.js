const Order = require("../models/Orders")
const User = require("../models/Users")
const Product = require("../models/Products")

const createOrder = (data) => {
	return Order.create(data)
}

const allOrders = (userId) => {
	return Order.findAll({ where: { userId }, include: { model: Product } })
}

const detailOrder = (id) => {
	return Order.findOne({ where: { id }, include: [{ model: User, attributes: ["id", "username", "email"] }, { model: Product }] })
}

module.exports = { createOrder, allOrders, detailOrder }