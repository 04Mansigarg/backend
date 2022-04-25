
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const port = 8000
app.use(express.json())
const userModel = require("./UserSchema")
const branchModel = require("./BranchSchema")
const savingModel = require("./SavingSchema")
const fixedModel = require("./FixedSchema")
const masterModel = require("./masterSchema")

mongoose.connect('mongodb://localhost:27017/bankServer')
mongoose.connection.once("open", function (ref) {
    console.log("Connected to mongo server.");
});

mongoose.connection.on("error", function (err) {
    console.log("Could not connect to mongo server!");
});

app.post("/users", async (req, res) => {
    try {
        const userDetail = req.body
        console.log(userDetail)
        const response = await userModel.insertMany([userDetail])
        res.status(201).json(response)
    }
    catch (err) {
        res.json(err)
    }

})
app.post("/savings", async (req, res) => {
    try {
        const savingDetail = req.body
        const response = await savingModel.insertMany([savingDetail])
        res.status(201).json(response)
    }
    catch (err) {
        res.json(err)
    }

})
app.post("/fixeds", async (req, res) => {
    try {
        const fixedDetail = req.body
        const response = await fixedModel.insertMany([fixedDetail])
        res.status(201).json(response)
    }
    catch (err) {
        res.json(err)
    }

})
app.post("/branches", async (req, res) => {
    try {
        const branchDetail = req.body
        const response = await branchModel.insertMany([branchDetail])
        res.status(201).json(response)
    }
    catch (err) {
        res.json(err)
    }

})
app.post("/masters", async (req, res) => {
    try {
        const masterDetail = req.body
        const response = await masterModel.insertMany([masters])
        res.status(201).json(response)
    }
    catch (err) {
        res.json(err)
    }

})

app.get("/masters", async (req, res) => {
    const masterAccount = await masterModel.find({}).populate("Saving Fixed Branch")
    res.status(200).json(masterAccount);

})
app.get("/savings", async (req, res) => {
    const Saving = await savingModel.find({}).populate("User")
    res.status(200).json(Saving);

})
app.get("/masters/:userId", async (req, res) => {
    const userId = req.params.userId
    const masterAccount = await masterModel.find({ _id: userId },{savingAccount:{account_number:1},balance:1}).populate("Saving Fixed Branch")
    res.status(200).json(masterAccount);

})

app.listen(port, () =>
    console.log(`LISTEN AT PORT NO ${port}`)
)