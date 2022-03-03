const Joi = require("Joi")

const createValidation = Joi.object({
	name: Joi.string().required().min(2),
	category: Joi.string().required().min(2),
	stock: Joi.number().required()
})

const updateValidation = Joi.object({
	name: Joi.string().required().min(2),
	category: Joi.string().required().min(2),
	stock: Joi.number().required()
})

module.exports = {
	createValidation,
	updateValidation
}