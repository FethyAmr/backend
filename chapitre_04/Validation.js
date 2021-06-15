const express = require('express');
const expressValidator = require("express-validator");
const passwordValidator = require('password-validator');

const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/validator");


app.get("/", (req, res) => {

    res.send()

})



app.post("/users/add", (req, res) => {

    res.send()

})


app.get("/users/:username", (req,res) => {

    res.send()

})


app.get("/users/:email", (req, res) => {

    res.send()

})


app.use(express.static('public'));

app.use(cors())