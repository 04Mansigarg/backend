const express = require("express")
const Author = require("../Models/Author.model")

const router = express.Router()

router.post("/", async (req, res) => {
    try {
        const createAuthor = await Author.create(req.body)
        res.status(201).json(createAuthor)
    }
    catch (err) {
        console.log(err)
    }

})

router.get("/", async (req, res) => {
    try {
        const allAuthors = await Author.find()
        res.status(200).json(allAuthors)
    }
    catch (err) {
        console.log(err)
    }
})
router.get("/:id", async (req, res) => {
    const id = req.params.id
    const author = await Author.findById(id)
    res.status(200).json(author)

})

router.patch("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const updateauthor = req.body
        console.log(updateauthor)
        const response = await Author.findByIdAndUpdate(id,updateauthor,{new:true})
        res.status(201).json(response)

    }
    catch (err) {
        console.log(err)
    }

})
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const deletedAuthor = await Author.findByIdAndDelete(id)
        res.status(200).json(deletedAuthor)

    }
    catch (err) {
        console.log(err)
    }
})



module.exports = router