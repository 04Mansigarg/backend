const http = require("http")
let PORT = 8000

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, {
            "Content-Type": "text/plain",
        })
        res.write("Hello Mansi")
        res.end()
    }
    else if (req.url === "/books") {
        res.writeHead(200, {
            "Content-Type": "application/json",
        })
        const book = [
            {
                "name": "Why Not Me",
                "author": "Anubhav Aggarwal"
            },
            {
                "name": "Atomic habbit",
                "author": "James Clear"
            },
            {
                "name": "Invisible Man",
                "author": "Ralph Ellison"
            },
            {
                "name": "Animal Farm",
                "author": "George Orwell"
            }
        ]
        res.write(JSON.stringify(book))
        res.end()

    }
})

server.listen(PORT, () => {
    console.log(`LISTEN THE PORT : ${PORT}`)
})