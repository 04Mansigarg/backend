const express = require("express")
const Book = require("../Models/Book.model")

const router = express.Router()

router.post("/", async (req, res) => {
    try {
        const createBook = await Book.create(req.body)
        res.status(201).json(createBook)
    }
    catch (err) {
        console.log(err)
    }

})

router.get("/", async (req, res) => {
    try {
        const isChecked = req.query.isChecked
        const criteria = {}
        if (isChecked) {
            criteria.isChecked = isChecked
        }

        const allBooks = await Book.find(criteria).populate("section").populate("authors")
        res.status(200).json(allBooks)
    }
    catch (err) {
        console.log(err)
    }
})

// all book by an author
router.get("/authors/:id", async (req, res) => {
    const id = req.params.id
    console.log(id)
    const book = await Book.find({ authors: id }).populate("author")
    res.status(200).json(book)

})


router.patch("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const updateBook = req.body
        console.log(updateBook)
        const response = await Book.findByIdAndUpdate(id, updateBook, { new: true })
        res.status(201).json(response)

    }
    catch (err) {
        console.log(err)
    }

})
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const deletedBook = await Book.findByIdAndDelete(id)
        res.status(200).json(deletedBook)

    }
    catch (err) {
        console.log(err)
    }
})


module.exports = router