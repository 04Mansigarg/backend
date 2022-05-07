require("dotenv").config()
const express = require("express")
const cors = require('cors')
const app = express()

app.use(cors())
const mongoose = require("mongoose")
const PORT = 8000
app.use(express.json())

mongoose.connect('mongodb+srv://mansigarg:1234554321@cluster0.0sg5t.mongodb.net/bookSystem?retryWrites=true&w=majority')
mongoose.connection.once("open", function (ref) {
    console.log("Connected to mongo server.");
});

mongoose.connection.on("error", function (err) {
    console.log("Could not connect to mongo server!");
});
const userController = require("./Controller/User.Controller")
const bookController = require("./Controller/Book.Controller")
const publicationController = require("./Controller/Publication.Controller")
const commentController = require("./Controller/Comment.Controller")
app.use("/users", userController)
app.use("/books", bookController)
app.use("/publications", publicationController)
app.use("/comments", commentController)

app.listen(PORT, () =>
    console.log(`LISTEN AT PORT NO ${PORT}`)
)