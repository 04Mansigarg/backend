const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const bookcontroller = require("./Controlers/BookControler")
const authorcontroller = require("./Controlers/AuthorControler")
const sectioncontroller = require("./Controlers/SectionControler")
const app = express()
const PORT = 8000
app.use(cors())
app.use(express.json())

app.use("/books",bookcontroller)
app.use("/authors",authorcontroller)
app.use("/sections",sectioncontroller)

mongoose.connect('mongodb://localhost:27017/librarysystem')
mongoose.connection.once("open", function (ref) {
    console.log("Connected to mongo server.");
});

mongoose.connection.on("error", function (err) {
    console.log("Could not connect to mongo server!");
});


app.listen((PORT), () => {
    console.log(`Listening at port No ${PORT}`)
})