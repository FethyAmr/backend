const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/validateur");

const citySchema = mongoose.Schema({
    name: String,
})