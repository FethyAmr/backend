const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

mongoose.connect("mongodb://localhost:27017/login", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

try {

    res.json("Test okay bro!")
} catch (err) {
    console.error(err)
}

const port = 8000;

const app = express()

app.use(cors())
app.use(express.json())



app.listen(port, () => {
    console.log(`Server on localhost : ${port}`);
})