const express = require("express")
const router = express.Router()
const { create, detail } = require("../controllers/Orders")
const validate = require("../middlewares/validate")
const schemas = require("../validations/Orders")

router.route("/").post(validate(schemas.createValidation), create)
router.route("/:id").get(detail)

module.exports = router