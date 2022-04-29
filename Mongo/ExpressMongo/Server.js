const { json } = require("express")
const express = require("express")
var cors = require('cors')
var app = express()

app.use(cors())
const mongoose = require("mongoose")
const port = 8000
app.use(express.json())
const userModel = require("./UserScheme")

mongoose.connect('mongodb://localhost:27017/masai')
mongoose.connection.once("open", function (ref) {
    console.log("Connected to mongo server.");
});

mongoose.connection.on("error", function (err) {
    console.log("Could not connect to mongo server!");
});
app.post("/user", async (req, res) => {
    try {
        const userDetail = req.body
        const response = await userModel.insertMany([userDetail])
        res.status(201).json(response)
    }
    catch (err) {
        res.json(err)
    }
})
app.get("/user", async (req, res) => {
    try {
        const allUsersDetail = req.body
        console.log(req.body)
        const response = await userModel.find({})
        res.status(200).json(response)
        console.log(allUsersDetail)
    }
    catch (err) {
        res.json(err)
    }
})
app.get("/user/:userId", async (req, res) => {
    try {
        const userId = req.params.userId
        const allUsersDetail = req.body
        const response = await userModel.find({ _id: userId })
        res.status(200).json(response)
    }
    catch (err) {
        res.json(err)
    }
})
app.put("/user/:userId", async (req, res) => {
    const userId = req.params.userId
    const updatedDetail = req.body
    const response = await userModel.updateOne({ _id: userId }, { $set: updatedDetail })
    res.json(response)
})

app.delete("/user/:userId", async (req, res) => {
    const userId = req.params.userId
    const response = await userModel.deleteOne({ _id: userId })
    res.json(response)
})
app.listen(port, () =>
    console.log(`LISTEN AT PORT NO ${port}`)
)