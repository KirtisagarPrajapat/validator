const constants = require("../config/constants")
const helper = require("./../helper/common")

module.exports = (app)=>{
    app.use((err,req,res,next)=>{
        var msg = err.message?err.message:constants.msgs.serverErr
        var status = err.errStatus?err.errStatus:500
        var data = err.errData?err.errData:{}
        var isErr = true
        res.status(status).json(helper.resObj(msg,data,status,isErr))
    })
}