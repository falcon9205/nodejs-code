const {Router}  = require("express")
const controller = require('../Middleware/category')
const { Validator } = require("../Validator/LoginValidation")
const router = Router()

router.post("/save",controller.save)
router.get("/list",controller.list)
router.post("/update",controller.update)
router.delete("/delete",controller.delete)


module.exports = router