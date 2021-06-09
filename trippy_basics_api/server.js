const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const Hotel = require("Hotel")
const Restaurant = require("Restaurant")


const app = express()
const port = 8999


const debug = (req, res, next) => {
    console.log("I received a request!");
    next()
}
app.use(express.json())
app.use(cors())
app.use(debug)



mongoose.connect("mongodb://localhost:27017/trippy_basics", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected ")
    }
})



app.get("/hotels", async (req, res) => {
    try {
        const hotels = await Hotel.find()
        res.json(hotels)
    } catch (err) {
        console.error(err)
        res.json({ errorMessage: "We have a problem" }, 500)
    }

})



app.get("/restaurants", async (req, res) => {
    try {
        const restaurants = await Restaurant.find()
        res.json(restaurants)
    } catch (err) {
        console.error(err)
        res.json({ errorMessage: "We have a problem" }, 500)
    }
})


app.listen(port, () => {
    console.log("Server is listening at port ", port);
})