const express = require("express")
const router = express.Router()
const PublicationModel = require("../Model/PublicationModel")

const crudController= require("./Crud.Controller")

const PublicationController = crudController(PublicationModel)

router.get("/",PublicationController.getallData)
router.post("/",PublicationController.createData)

module.exports=router