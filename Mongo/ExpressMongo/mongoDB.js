const mongoose = require("mongoose")

class Mongo {
    constructor() {
        this.createMongoDBConnection()
    }
    createMongoDBConnection() {
        mongoose.connect(`mongodb://localhost:27017/masai`)

        mongoose.connection.once("open", (req, res) => {
            console.log("mongodb is connected")
        })

        mongoose.connection.on("error", (req, res) => {
            console.log("mongodb have some error connection")
        })
    }
}
module.exports = Mongo



