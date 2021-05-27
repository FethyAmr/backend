const express = require("express")
const app = express()
app.use(express.json())

const cors = require("cors")
app.use(cors())

const port = 3499

app.get("/students", (req, res) => {

    const students = ["Maria", "Rayhan", "Osman"]

    res.send(students)
})

app.post("/students", (req, res) => {

    const addStudent = req.body

    students.push(addStudent)

    res.json({
        message: "added a new student !"
    })
})

app.listen(port, () => {
    console.log(`Server à l'écoute dans le port ${port}`);
})