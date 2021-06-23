const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb://localhost:27017/login", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})