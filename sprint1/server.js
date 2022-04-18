const express = require("express")
const app = express()
const path = require("path")
const books = require("./books.json")
const library = require("./libraries.json")
const author = require("./author.json")

const logger = (req, res, next) => {
    console.log(`${__dirname}${__filename}`)
    console.log(req.url)
    next()

}
const checkPermission = (word) => {
    return (req, res, next) => {
        if (word === "librarians" || word === "author") {
            console.log(req.url + " " + word)
            next()
        }
    }

}

const PORT = 8000
app.get("/books", logger,
    (req, res, next) => {
        res.json(books)
    })
app.get("/libraries", [logger, checkPermission("librarians")], (req, res, next) => {
    if (req.url) {
        res.json(library)
    }

})
app.get("/author", [logger, checkPermission("author")], (req, res, next) => {
    if (req.url) {
        res.json(author)
    }

})

app.listen(PORT, () => {
    console.log(`LISTENING THE PORT ${PORT}`)
})