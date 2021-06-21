const express = require("express")
const router = express.Router()
const expressValidator = require("express-validator");
const { addUser, sendUserByUsername, sendUserByEmail, sendUserById } = require('../controllers/controllersUsers')

router.post("/add",
    expressValidator.body("username").not().isEmpty().isLength({ min: 4 }),
    expressValidator.body("email").not().isEmpty().isEmail(),
    expressValidator.body("age").isInt().isLength(({ min: 2, max: 2 })),
    expressValidator.body("city").custom(value => {
        if (value === "Paris" ||
            value === "Los Angeles" ||
            value === "Tokyo") {
            return true
        }
        return false
    }),
    addUser
)

router.get("/:value",
     sendUserByEmail, 
     sendUserById, 
     sendUserByUsername)


module.exports = { usersRoutes: router };