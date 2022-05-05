require("dotenv").config()
const express = require("express")
const cors = require('cors')
const app = express()

app.use(cors())
const mongoose = require("mongoose")
// const port = 8000
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/authorization')
mongoose.connection.once("open", function (ref) {
    console.log("Connected to mongo server.");
});

mongoose.connection.on("error", function (err) {
    console.log("Could not connect to mongo server!");
});
const userController = require("./Controllers/userController")
const postController = require("./Controllers/postController")
const authController = require("./Controllers/AuthController")
app.use("/users", userController)
app.use("/posts", postController)
app.use("/auth", authController)

app.listen(process.env.PORT, () =>
    console.log(`LISTEN AT PORT NO ${process.env.PORT}`)
)