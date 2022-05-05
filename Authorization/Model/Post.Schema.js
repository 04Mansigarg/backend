const mongoose = require("mongoose")


const postSchema =new mongoose.Schema({
    title:{type:String,required:true},
    body:{type:String,required:true},
    users:{type: mongoose.Schema.Types.ObjectId,ref:"users",required:true}

},
{
    versionKey:false
})

module.exports=mongoose.model("posts",postSchema)