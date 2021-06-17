const expressValidator = require("express-validator");
const User = require("../model/user");
const City = require('../model/city')

const addUser = async (req, res) => {
    try {
        const errors = expressValidator.validationResult(req);
        const profilUser = req.body

        if (!errors.isEmpty()) {
            res.status(400).json({message : "There is a problem with your form please correct this"});
        } else {
            
            const cityFound = await City.findOne({name : profilUser.city})
            profilUser.city = cityFound

            await User.create(profilUser)
            res.json({message : 'User added'})
        }
    } catch (error) {
        res.status(500).json({ errorMessage: "There is a problem !!!" })
    }
}

const sendUserByUsername = async (req, res) => {
    try {
        const usernameReceived = req.params.username;

        const userFound = await User.findOne({username : usernameReceived }).populate('city', 'name -_id')

        res.json(userFound)

    } catch (error) {
        res.status(500).json({ errorMessage: "There is a problem !!!" })
    }
}

const sendUserByEmail = async (req, res) => {
    try {
        res.json({message : 'yes !!'})
    } catch (error) {
        res.status(500).json({ errorMessage: "There is a problem !!!" })
    }

}



module.exports = { addUser, sendUserByUsername, sendUserByEmail}