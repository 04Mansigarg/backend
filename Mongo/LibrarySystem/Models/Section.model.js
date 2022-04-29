const mongoose = require('mongoose')

const sectionModel = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    book: [{ type: mongoose.Schema.Types.ObjectId, ref: "book" }],

})

module.exports = mongoose.model("section", sectionModel)