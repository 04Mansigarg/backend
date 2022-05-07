const express = require("express")
const router = express.Router()
const CommentModel = require("../Model/Comment.Model")

const crudController= require("./Crud.Controller")

const CommentController = crudController(CommentModel)

router.get("/", async (req, res) => {
    try {
        let items = await CommentModel.find({}).limit(10).populate("user").populate("book")
        res.status(200).json(items);
    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message })
    }

})
router.post("/",CommentController.createData)

module.exports=router