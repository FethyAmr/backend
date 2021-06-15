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

app.get('/hotels/:id', async (req, res) => {

    try {
        const id = req.params.id

        const hotelsId = await Hotel.findById(id)

        // console.log("hotesId :", hotesId);

        res.json(hotelsId)

    } catch (err) {

        res.json("error 500")

        console.error(err);

    }

})

app.post('/hotels', async (req, res) => {

    try {
        const addHotel = req.body

        const hotelName = req.body.name

        const findHotel = await Hotel.find({ name: hotelName })

        console.log("findHotel post :", findHotel);

        if (findHotel[0] == null) {
            await Hotel.insertMany(addHotel)
            console.log(findHotel);
            res.json(`hotel ${hotelName} added`)
        } else {
            res.json(`hotel ${hotelName} deja present`)
        }

    } catch (err) {

        res.json("error 500")

        console.error(err);

    }


})

app.put('/hotels/:id', async (req, res) => {

    try {
        const id = req.params.id
        const query = req.query.name

        //    const checkId = {_id: id}

        const idFinded = await Hotel.findById(id)
        //   const idFinded = await Hotel.exists(checkId)
        const updateHotel = await Hotel.updateOne({ _id: id }, { name: query })

        console.log("id app.put :", id);
        console.log("query app.put :", query);
        console.log("idFinded app.put :", idFinded);

        res.json("ok")

    } catch (err) {

        res.json("error 500")

        // console.error(err);

    }


})

app.delete('/hotels/:id', async (req, res) => {

    try {
        const id = req.params.id

        await Hotel.deleteOne({ _id: id })

        res.json("hotel deleted")

    } catch (err) {

        res.json("error 500")

        // console.error(err);
    }

})

app.put("/restaurants/:id", async (req, res) => {
    try {
        let idReceived = req.params.id
        let newName = req.query.name

        await Restaurant.findByIdAndUpdate(idReceived, { name: newName })
        res.json({ message: 'Name changed !!!' })
    } catch (error) {
        console.error('Error PUT / restaurants / :id !!!', error);
        res.json({ message: "Error PUT / restaurants / :id sorry !!!" })
    }

})

app.delete("/restaurants/:id", async (req, res) => {
    try {
        let idReceived = req.params.id

        await Restaurant.findByIdAndDelete(idReceived)
        res.json({ message: 'Restaurant deleted' })
    } catch (error) {
        console.error('Error DELETE / restaurants / :id !!!', error);
        res.json({ message: "Error DELETE / restaurants / :id sorry !!!" })
    }
})