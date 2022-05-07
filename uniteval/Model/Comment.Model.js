const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
    body: { type: String, required: true },
    book: { type: mongoose.Schema.Types.ObjectId, ref: "books", required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },


},
    {
        versionKey: false,
        timestamps: true
    }
)
module.exports = mongoose.model("comments", commentSchema)