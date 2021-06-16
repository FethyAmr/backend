const mongoose = require("mongoose")

const studentsSchema = mongoose.Schema({
    username: String,
    email: String,
    age: Number,
    city: String,
    
})

const Student = mongoose.model("Student", studentsSchema)

module.exports = Student  