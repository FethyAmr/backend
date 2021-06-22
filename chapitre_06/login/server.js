const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const { debug } = require("./middleware/debug")

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


// middlewares
const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb://localhost:27017/login", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})


app.post("/signup", async (req, res) => {

    try {
        const username = req.body.username
        const password = req.body.password

        const signup = await signup.findMany({ username, password })


        res.json("I am logged in !")

    } catch (err) {
        console.error(err)

        res.status(500).json({ errorMessage: "I couldn't connect" })
    }
})


app.post("/login", async (req, res) => {

    try {
        const username = req.body.username

        const login = await login.findOne({ username })


        res.json("I am logged in !")

    } catch (err) {
        console.error(err)

        res.status(500).json({ errorMessage: "I couldn't connect" })
    }
})



const port = 8000

app.listen(port, () => {
    console.log(`Server on localhost : ${port}`);
})