
const constants = require("../config/constants")
const helper = require("./../helper/common")

exports.default = (req,res,next)=>{
    next(helper.errObj(constants.msgs.noPage,404))
}

exports.postUserData = async(req,res,next)=>{
   var valid = await helper.validateInp(req.body,{
       name : "required|minLength:2",
       email : "required|email",
       password : "required|passwordRegex",
       skills : "required|array",
       'skills.*' : "required",
       date_of_birth : "required|date|dateBeforeToday:years,18"
   },next)
   if(!valid) return false
   res.json(helper.resObj(constants.msgs.resSucc,req.body))
}

