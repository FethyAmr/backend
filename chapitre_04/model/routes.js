const expressValidator = require("express-validator");

app.post("/user/add",
    expressValidator.body("username").isLength({ min: 4 }),
    expressValidator.body("email").isEmail(),
    expressValidator.body("age").isInt().isLength(({ min: 2, max: 2 })),
    expressValidator.body("city").equals("Paris" || "Tokyo" || "Los Angeles")
) 
