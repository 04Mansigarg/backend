const mongoose = require("mongoose")
const userDetail = new mongoose.Schema({
    firstName: { type: String, required: true },
    middleName: { type: String, required: false },
    lastName: { type: String, required: true },
    Age: { type: Number, required: true, default: 21 },
    email: { type: String, required: true },
    gender: { type: String, required: false, default: "Female" },
    address: { type: String, required: true },
    type: { type: String, required: false, default: "Customer" },
    createdAt: { type: Date, required: true, default: Date.now },
    updatedAt: { type: Date, required: true, default: Date.now }

})

module.exports = mongoose.model("User", userDetail)