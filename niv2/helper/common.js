const constants = require("../config/constants");
const niv = require("./niv")

exports.resObj = (message=constants.msgs.resSucc,data = {}, status = 200, is_error = false)=>{
    return { status, is_error, message, data }
}

exports.errObj = (msg=constants.msgs.serverErr,status=500,data={})=>{
    let err = new Error(msg)
    err.errStatus = status
    err.errData = data
    return err
}

exports.validateInp = (input,rules,next,customMsg={})=>{
    return new Promise(async(rslv,rjct)=>{
        var v = new niv.Validator(input,rules,customMsg)
        var match = await v.check()
        if(!match){
            Object.values(v.errors).forEach((e,i)=>{
                if(i==0){
                    next(this.errObj(e.message,422))
                }
            })
            rslv(false)
        }else{
            rslv(true)
        }
    })
}


