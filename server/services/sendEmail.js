const nodemailer = require("nodemailer");
require("dotenv").config();

const {emailMain,password} = process.env;

module.exports.sendMail = (mailOptions) => {
    var transport = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: emailMain,
            pass:password,
        },
    });

    transport.sendMail(mailOptions, (err, response) => {
        if (err) {
            console.log(err,"error");
        } else {
            console.log("Message Sent");
        }
    });
};
