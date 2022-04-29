const mongoose = require("mongoose")

const user = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    age: { type: Number, required: true },
    phoneNo: { type: String, required: true }
})

module.exports = mongoose.model("user", user)