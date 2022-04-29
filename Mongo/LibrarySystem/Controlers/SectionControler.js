const express = require("express")
const Section = require("../Models/Section.model")
const router = express.Router()



router.post("/", async (req, res) => {
    try {
        const createSection = await Section.create(req.body)
        res.status(201).json(createSection)
    }
    catch (err) {
        console.log(err)
    }

})

router.get("/", async (req, res) => {
    try {
        const allSections = await Section.find().populate("book")
        res.status(200).json(allSections)
    }
    catch (err) {
        console.log(err)
    }
})
router.get("/:id", async (req, res) => {
    const id = req.params.id
    const section = await Section.findById(id)
    res.status(200).json(section)

})
router.get("/book/:id", async (req, res) => {
    const id = req.params.id
    console.log(id)
    const book = await Section.find({ book: id }).populate("book")
    res.status(200).json(book)

})
router.get("/book/:isChecked", async (req, res) => {
    const isChecked = req.params.isChecked
    console.log(isChecked)
    res.send(isChecked)
    // const book = await Section.find({ isChecked: isChecked  }).populate("book")
    // res.status(200).json(book)

})

router.patch("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const updateSection = req.body
        console.log(updateSection)
        const response = await Section.findByIdAndUpdate(id, updateSection, { new: true })
        res.status(201).json(response)

    }
    catch (err) {
        console.log(err)
    }

})
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const deletedSection = await Section.findByIdAndDelete(id)
        res.status(200).json(deletedSection)

    }
    catch (err) {
        console.log(err)
    }
})

module.exports = router