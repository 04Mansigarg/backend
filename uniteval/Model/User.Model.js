const mongoose = require("mongoose")


const userSchema =new mongoose.Schema({
    firstname: { type: String, required: true , minlength:3,maxlength:30},
    lastname: { type: String, minlength:3,maxlength:30 },
    age: { type: Number, minlength:1,maxlength:150,required: true },
    email: { type: String, required: true,unique:true },
    image:[{type:String,required:true}]

},
    {
        versionKey: false,
        timestamps:true
    }
)
module.exports = mongoose.model("users", userSchema)