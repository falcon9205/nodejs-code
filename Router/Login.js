const {Router}  = require("express")
const controller = require('../Middleware/Login')
const { Validator } = require("../Validator/LoginValidation")
const router = Router()

router.post("/login",Validator.registerValidator,controller.Login
   
)

module.exports = router