const httpStatus = require("http-status")
const { createOrder, detailOrder } = require("../services/Orders")

const create = (req, res) => {
	createOrder(req.body)
		.then((response) => {
			res.status(httpStatus.CREATED).send(response)
		})
		.catch((err) => {
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
		})
}


const detail = (req, res) => {
	detailOrder(req.params?.id)
		.then(response => {
			if (!response) {
				return res.status(httpStatus.NOT_FOUND).send({
					message: "Böyle bir ID bulunamamaktadır."
				})
			}
			res.status(httpStatus.OK).send(response)
		})
		.catch((err) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err))
}

module.exports = { create, detail }