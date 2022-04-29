const mongoose = require('mongoose')

const bookModel = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    body: { type: String, required: true, unique: true },
    isChecked: { type: Boolean, required: true, default: false },
    authors: [{ type: mongoose.Schema.Types.ObjectId, ref: "author" }],
    section: { type: mongoose.Schema.Types.ObjectId, ref: "section" },

})

module.exports = mongoose.model("book", bookModel)
