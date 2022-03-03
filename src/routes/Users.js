const express = require("express")
const router = express.Router()
const { create, getOrders } = require("../controllers/Users")
const validate = require("../middlewares/validate")
const schemas = require("../validations/Users")

router.route("/").post(validate(schemas.createValidation), create)
router.route("/:id/orders").get(getOrders)

module.exports = router