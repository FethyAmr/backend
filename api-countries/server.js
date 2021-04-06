var express = require('express')
var app = express()

var port = 8000
app.listen(8000, () => {
    console.log("Serveur à l'écoute")
})

app.get("/countries", function (req, res) {
    var myCountruies = ["Qatar", "Emirats", "Saudia", "Kowet", "Oman"]
    res.send(myCountruies)
})