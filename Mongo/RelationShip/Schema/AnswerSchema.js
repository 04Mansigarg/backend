const mongoose = require("mongoose")

const answerSchema = new mongoose.Schema({
    msg: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now() },
    posts: { type: mongoose.Schema.Types.ObjectId, ref: "post" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },



})

module.exports = mongoose.model("answer", answerSchema)