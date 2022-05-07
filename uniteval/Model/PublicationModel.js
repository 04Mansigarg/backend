const mongoose = require("mongoose")

const publicationSchema =new mongoose.Schema({
    name: { type: String, required: true },
    book: { type: mongoose.Schema.Types.ObjectId, ref: "books" , required:true },

},
    {
        versionKey: false,
        timestamps:true
    }
)
module.exports = mongoose.model("publications", publicationSchema)