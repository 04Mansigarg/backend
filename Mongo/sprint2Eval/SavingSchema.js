const mongoose = require("mongoose")
const savingDetail = new mongoose.Schema({
    account_number: { type: Number, required: true },
    balance: { type: Number, required: true },
    intrestRate: { type: Number, reequired: true },
    createdAt: { type: Date, required: true, default: Date.now },
    updatedAt: { type: Date, required: true, default: Date.now },
    users: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
})

module.exports = mongoose.model("Saving", savingDetail)