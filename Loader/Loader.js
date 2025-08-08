const LoginRouter = require('../Router/Login')
const categoryRouter = require('../Router/category')
const serviceRouter = require("../Router/service")
const mongoose = require("../Db/dbconnect");
const { authenticateToken } = require('../Middleware/validateToken');
const Loader =({expressApp})=>{
     mongoose()
     console.info('✌️ DB loaded and connected!');
     
    expressApp.use("/admin",LoginRouter)
    expressApp.use("/category",authenticateToken,categoryRouter)
    expressApp.use("/service",authenticateToken,serviceRouter )
}


module.exports = Loader