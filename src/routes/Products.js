const express=require("express")
const router = express.Router()
const {create,update,remove,all,detail} = require("../controllers/Products")
const validate = require("../middlewares/validate")
const schemas = require("../validations/Products")

router.route("/").post(validate(schemas.createValidation),create)
router.route("/:id").patch(validate(schemas.updateValidation),update)
router.route("/:id").delete(remove)
router.route("/").get(all)
router.route("/:id").get(detail)

module.exports=router