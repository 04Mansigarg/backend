const express = require("express")
var app = express()
const mongoose = require("mongoose")
const port = 8000
app.use(express.json())
const userModel = require("./Schema/UserSchema")
const postModel = require("./Schema/PostSchema")
const tagModel = require("./Schema/TagsSchema")
const answerModel = require("./Schema/answerSchema")

mongoose.connect('mongodb+srv://mansigarg:1234554321@cluster0.0sg5t.mongodb.net/stackoverflow?retryWrites=true&w=majority')
mongoose.connection.once("open", function (ref) {
    console.log("Connected to mongo server.");
});

mongoose.connection.on("error", function (err) {
    console.log("Could not connect to mongo server!");
});

// api for users
app.post("/users", async (req, res) => {
    try {
        const userDetail = req.body
        const response = await userModel.insertMany([userDetail])
        res.status(201).json(response)
    }
    catch (err) {
        res.json(err)
    }
})
app.get("/users", async (req, res) => {
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
app.get("/users/:userId", async (req, res) => {
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
app.put("/users/:userId", async (req, res) => {
    const userId = req.params.userId
    const updatedDetail = req.body
    const response = await userModel.updateOne({ _id: userId }, { $set: updatedDetail })
    res.json(response)
})

app.delete("/users/:userId", async (req, res) => {
    const userId = req.params.userId
    const response = await userModel.deleteOne({ _id: userId })
    res.json(response)
})

// api for post
app.post("/posts", async (req, res) => {
    try {
        const postDetail = req.body
        const response = await postModel.insertMany([postDetail])
        res.status(201).json(response)
    }
    catch (err) {
        res.json(err)
    }
})
app.get("/posts", async (req, res) => {
    try {
        const response = await postModel.find({}).populate("tag").populate("user")
        res.status(200).json(response)
    }
    catch (err) {
        res.json(err)
    }
})
app.get("/posts/:userId", async (req, res) => {
    try {
        const response = await postModel.find({ user: req.params.userId })
        res.status(200).json(response)
    }
    catch (err) {
        res.json(err)
    }
})

// api for answer
app.post("/answers", async (req, res) => {
    try {
        const answerDetail = req.body
        const response = await answerModel.insertMany([answerDetail])
        res.status(201).json(response)
    }
    catch (err) {
        res.json(err)
    }
})
app.get("/answers", async (req, res) => {
    try {
        const response = await answerModel.find({})
        res.status(200).json(response)
    }
    catch (err) {
        res.json(err)
    }
})

// api for tag
app.post("/tags", async (req, res) => {
    try {
        const tagDetail = req.body
        const response = await tagModel.insertMany([tagDetail])
        res.status(201).json(response)
    }
    catch (err) {
        res.json(err)
    }
})
app.get("/tags", async (req, res) => {
    try {
        const response = await tagModel.find({})
        res.status(200).json(response)
    }
    catch (err) {
        res.json(err)
    }
})



app.listen(port, () =>
    console.log(`LISTEN AT PORT NO ${port}`)
)