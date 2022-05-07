const express = require("express")
const router = express.Router()
const BookModel = require("../Model/Book.Model")

const crudController = require("./Crud.Controller")

const bookController = crudController(BookModel)


router.post("/", bookController.createData)
router.get("/", async (req, res) => {
    try {
        let items = await BookModel.find({}).limit(10).populate("user")
        res.status(200).json(items);
    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message })
    }

})

router.patch("/user/:user_id", async (req, res) => {
    try {
        const user_id = req.params.user_id
        if (user_id) {
            let updatedItem = await BookModel.updateOne({ user: user_id }, { $set: { likes: 0 } }, { new: true })
            res.status(200).json(updatedItem);
        }


    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message })
    }
})

module.exports = router