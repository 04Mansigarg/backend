const mongoose = require('mongoose')

const authorModel = new mongoose.Schema({
    firstname: { type: String, required: true, },
    lastname: { type: String, required: true, },
    book: [{ type: mongoose.Schema.Types.ObjectId, ref: "book" }],

})

module.exports = mongoose.model("author", authorModel)