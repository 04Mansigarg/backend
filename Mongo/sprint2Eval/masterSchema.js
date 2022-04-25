const mongoose = require("mongoose")
const masterDetail = new mongoose.Schema({
    balance: { type: Number, required: true },
    createdAt: { type: Date, required: true, default: Date.now },
    updatedAt: { type: Date, required: true, default: Date.now },
    savingAccount: [{ type: mongoose.Schema.Types.ObjectId, ref: "Saving" }],
    fixedAccount: [{ type: mongoose.Schema.Types.ObjectId, ref: "Fixed" }],
    branchDetail: [{ type: mongoose.Schema.Types.ObjectId, ref: "Fixed" }]
})

module.exports = mongoose.model("Master", masterDetail)