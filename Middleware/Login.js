const {AdminEmail,AdminPassword,JWT_Key} = require('../config')
const jwt = require("jsonwebtoken")

class LoginService {
      static async Login(req,res){
      const {email,password} = req.body;
      console.log(email,AdminEmail)
      console.log(password,AdminPassword)

      if(email!==AdminEmail || password!==AdminPassword)
        return res.status(401).json({msg:"Invalid credential"})
 
        const token = jwt.sign({email}, JWT_Key, {expiresIn:'1d'});
        console.log('use this token ',token);
        
        return res.status(200).json({token:token})
    }
}

module.exports = LoginService