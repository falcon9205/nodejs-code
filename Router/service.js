const {Router}  = require("express")
const controller = require('../Middleware/service')
const { Validator } = require("../Validator/ServiceValidation")
const router = Router()

router.post("/save",Validator.serviceValidator,controller.save)
router.get("/list",controller.list)
router.delete("/delete",controller.delete)
router.post("/update",controller.update)

module.exports = router