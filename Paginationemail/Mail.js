const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "117a402c424e8c",
      pass: "a70bc8c5b02b28"
    }
  });

 module.exports=transporter