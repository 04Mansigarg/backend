const e = require("express")
const express = require("express")
const books = require("./books.json")
const app = express()
app.use(express.json())
let PORT = 8001
app.use(express.json())
app.get("/", (req, res, next) => {
    console.log("Hello I am Mansi Garg")
    res.send("Home Page Get Request")
})

app.get("/books",
    (req, res, next) => {

        console.log("FETCHING ALL BOOKS")
        next()
    },
    (req, res, next) => {
        const { name } = req.query
        if (name) {
            const bookName = books.find((book) => book.name === name)
            res.json(bookName)
        }
        else {
            res.json(books)

        }

    }
)

app.get("/books/:name",
    (req, res, next) => {

        console.log("FETCHING Single Book")
        next()
    },
    (req, res, next) => {
        var { name } = req.params
        console.log({ name })
        const bookName = books.filter((book) => book.name === name)
        console.log(bookName)
        res.json(bookName)
    }
)

app.post("/books", (req, res, next) => {
    console.log("POST DATA ON USET", req.body)
    books.push(req.body);
    res.json(req.body)


})

app.listen(PORT, () => {
    console.log(`Listen PORT : ${PORT}`)
})