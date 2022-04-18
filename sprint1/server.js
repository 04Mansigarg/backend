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
const response = {}
const checkPermission = (word) => {
    return (req, res, next) => {
        if (word === "librarians" || word === "author") {
            console.log(req.url + " " + word)
            response["route"] = req.url;
            response["permission"] = true;
            console.log(response)
            next()
        }
    }

}

const PORT = 8000
app.get("/books", logger,
    (req, res, next) => {
        res.json(books)
        res.send()
    })
app.get("/libraries", [logger, checkPermission("librarians")], (req, res, next) => {
    if (req.url) {
        res.send(response)
    }

})
app.get("/author", [logger, checkPermission("author")], (req, res, next) => {
    if (req.url) {
        res.send(response)


    }

})

app.listen(PORT, () => {
    console.log(`LISTENING THE PORT ${PORT}`)
})