const mongoose = require("mongoose")
const FixedDetail = new mongoose.Schema({
    account_number: { type: Number, required: true },
    balance: { type: Number, required: true },
    intrestRate: { type: Number, reequired: true },
    startDate: { type: Date, required: true },
    maturityDate: { type: Date, required: true },
    createdAt: { type: Date, required: true, default: Date.now },
    updatedAt: { type: Date, required: true, default: Date.now },
    users: { type: mongoose.Schema.Types.ObjectId, ref: "Branch" }
})

module.exports = mongoose.model("Fixed", FixedDetail)