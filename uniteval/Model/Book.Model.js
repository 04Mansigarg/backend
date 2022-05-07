const mongoose = require("mongoose")


const bookSchema =new mongoose.Schema({
    content: { type: String, required: true },
    likes: { type: Number, required: true,default:0 },
    coverimage:{type:String,required:true},
    user: { type: mongoose.Schema.Types.ObjectId, ref:"users", required:true },

},
    {
        versionKey: false,
        timestamps:true
    }
)
module.exports = mongoose.model("books", bookSchema)