const express = require("express")
const router = express.Router()
const UserModel = require("../Model/User.Schema")

router.post("/", async (req, res, next) => {
    try {
     const createUser = await UserModel.create(req.body)
     return res.status(201).json({data:createUser})
    }
    catch (e) {
        return res.status(500).json({status:"failed",message:"something went wrong"})
    }
 
})

router.get("/", async (req, res, next) => {
    try {
     const users = await UserModel.find({}).select("-password")
     return res.status(201).json({data:users})
    }
    catch (e) {
        return res.status(500).json({status:"failed",message:e.message})
    }
})

router.get("/:id", async (req, res, next) => {
    try {
     const users = await UserModel.findById({}).select("-password")
     return res.status(201).json({data:users})
    }
    catch (e) {
        return res.status(500).json({status:"failed",message:e.message})
    }
})
module.exports=router
