var express = require("express")
var app = express()
var http = require("http").Server(app)

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api", require("./router"))

app.all('*',function (req, res) {
    res.send("Incorrect route.");
});

require("./controller/errControl")(app)

http.listen(3000,()=>{
    console.log("server running on 3000")
})