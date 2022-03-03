const httpStatus = require("http-status")
const { createUser, getAllOrders } = require("../services/Users")

const create = async (req, res) => {
	createUser(req.body)
		.then((response) => {
			res.status(httpStatus.CREATED).send(response)
		})
		.catch((err) => {
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
		})
}

const getOrders = async (req, res) => {
	getAllOrders(req.params.id)
		.then((response) => {
			res.status(httpStatus.CREATED).send(response)
		})
		.catch((err) => {
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
		})
}


module.exports = { create, getOrders }