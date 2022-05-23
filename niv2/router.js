const express = require("express")
const userControl = require("./controller/user")
const Router = express.Router()

Router.post("/postUserData", userControl.postUserData)

module.exports = Router

