const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    tag: [{ type: mongoose.Schema.Types.ObjectId, ref: "tag" }]


})

module.exports = mongoose.model("post", postSchema)