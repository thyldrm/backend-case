const Joi = require("Joi")

const createValidation = Joi.object({
	username: Joi.string().required().min(2),
	email: Joi.string().required().email(),
	password: Joi.string().required().min(8),
})

module.exports={
	createValidation,
}