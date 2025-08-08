const express = require("express")
const app = express()
const cors = require("cors")
const Loader = require("./Loader/Loader")
const PORT = 3500

//cors middleware allow from everywhere for now
app.use(cors({origin:"*"}))
app.use(express.json());
 app.listen(PORT,(err)=>{
    if(err)
    {
        console.log("Server stuck");
        process.exit(1)
        return
    }
    console.log("Server Connected running ",PORT);
     Loader({expressApp:app})
})

