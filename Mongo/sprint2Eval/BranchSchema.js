const mongoose = require("mongoose")
const branchDetail= new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    IFSC: { type: String, required: true },
    MICR:{type:Number, required:true},
    createdAt: { type: Date, required: true, default: Date.now  },
    updatedAt: {type: Date, required: true, default: Date.now }
})

module.exports = mongoose.model("Branch", branchDetail)