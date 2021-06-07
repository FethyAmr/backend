const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/garage", (err) => {
    if (err) {
        console.error("Error !", err)
    } else {
        console.log("I'm connected to the database");
    }
})

const carsSchema = mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    create: { type: Date, default: Date.now }
})

const Car = mongoose.model("Car", carsSchema)


async function firstCarFunc() {

    try {
        const theCar = new Car({
            brand: "Renault",
            model: "Espace",
            year: 1999
        })

        const carSaved = await theCar.save()

        console.log("Car added !");

    } catch (error) {
        console.error("Error !!!", error)
    }
}

async function secondCarFunc() {

    try {
        const theCar = new Car({
            brand: "Renault",
            model: "Scenic",
            year: 2004
        })

        const carSaved = await theCar.save()

        console.log("Car added !");

    } catch (error) {
        console.error("Error !!!", error)
    }
}

async function thirdCarFunc() {

    try {
        const theCar = new Car({
            brand: "Peugeot",
            model: "308",
            year: 2017
        })

        const carSaved = await theCar.save()

        console.log("Car added !");

    } catch (error) {
        console.error("Error !!!", error)
    }
}


}