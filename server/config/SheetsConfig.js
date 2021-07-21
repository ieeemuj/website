const { GoogleSpreadsheet } = require("google-spreadsheet");
const dotenv = require("dotenv");

dotenv.config({});

const doc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID);

doc.useServiceAccountAuth({
    client_email: process.env.SPREADSHEET_ACCOUNT_EMAIL,
    private_key: process.env.SPREADSHEET_PRIVATE_KEY.replace(/\\n/g, "\n"),
})
    .then(() => {
        console.log("connected");
    })
    .catch((e) => {
        console.log(e,"error");
    });

module.exports = doc;