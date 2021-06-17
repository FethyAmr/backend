router.get("/add",
    expressValidator.body("username").isLength({ min: 4 }),
    expressValidator.body("email").isEmail(),
    expressValidator.body("age").isInt().isLength(({ min: 2, max: 2 })),
    expressValidator.body("city").equals("Paris" || "Tokyo" || "Los Angeles")
)
app.listen(8000, () => {
    console.log('Server started');
});

