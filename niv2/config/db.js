const mongoose = require("mongoose")
const fs = require("fs")
const constants = require("./constants")

mongoose.connect(process.env.mongoUrl,(err)=>{
    if(err){
        console.log("error in db connection.")
    }else{
        console.log("db connected successfully.")
        fs.readdirSync(constants.path.model).forEach((e,i)=>{
            require(constants.path.model+e)
        })
    }
})