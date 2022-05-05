const express = require("express")
const authCheck = require("../Middleware/authMiddleware")
const router = express.Router()
const PostModel = require("../Model/Post.Schema")

router.post("/",authCheck, async (req, res, next) => {
    try {
     const createPost = await PostModel.create(req.body)
     console.log(createPost)
     return res.status(201).json({data:createPost})
    }
    catch (e) {
        return res.status(500).json({status:"failed",message:"something went wrong"})
    }
})

router.get("/", async (req, res, next) => {
    try {
     const posts = await PostModel.find({}).select("-password")
     return res.status(201).json({data:posts})
    }
    catch (e) {
        return res.status(500).json({status:"failed",message:e.message})
    }
})

router.get("/:id", async (req, res, next) => {
    try {
     const Posts = await PostModel.findById({}).select("-password")
     return res.status(201).json({data:Posts})
    }
    catch (e) {
        return res.status(500).json({status:"failed",message:e.message})
    }
})
module.exports=router