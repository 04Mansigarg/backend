const express = require("express")
const router = express.Router()
const UserModel = require("../Model/User.Schema")

const jwt = require('jsonwebtoken');

const newToken = (user)=>{
   return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
}
 


router.post("/register", async (req, res, next) => {
    try {
        let user = await UserModel.findOne({ email: req.body.email })

        if (user) {
            return res.status(401).json("User already exist try with different Email")
        }

        user = await UserModel.create(req.body)
        let token = newToken(user)
        console.log(token)
        res.status(201).json({ token })

    }
    catch (e) {
     return res.status(500).json({status:"failed",message:e.message})
    }
})
router.post("/login",async(req,res)=>{
    try {
        let user = await UserModel.findOne({ email: req.body.email })

        if (!user) {
            return res.status(401).json("email and password is incorrect")
        }

        const matching = await user.checkPassword(req.body.password)
        if (!matching) {
            return res.status(401).json("email and password is incorrect")
        }
        let token = newToken(user)
        res.status(201).json({ token })

    }
    catch (e) {
     return res.status(500).json({status:"failed",message:e.message})
    }
})
module.exports=router