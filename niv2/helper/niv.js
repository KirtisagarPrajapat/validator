const niv = require("node-input-validator")
const constants = require("../config/constants")

niv.extend("passwordRegex",({value})=>{
    return new RegExp(constants.const.passwordRegex).test(value)
})

niv.extendMessages(
    {
        passwordRegex : "Password pattern is invalid.",
    }
)

module.exports = niv    