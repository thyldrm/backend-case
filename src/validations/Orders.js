const Joi = require("Joi")

const createValidation = Joi.object({
	userId: Joi.number().required(),
	productId : Joi.number().required(),
	quantity : Joi.number().required(),
})

module.exports={
	createValidation,
}