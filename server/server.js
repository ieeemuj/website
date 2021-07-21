const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

//Requiring routes
const registration = require("./routes/registration");

app.use(
    express.urlencoded({
        extended: false,
    })
);

app.use(bodyParser.json());

app.use(cors());

app.use("/registration",registration);

const PORT = process.env.PORT || 5000;

var server = app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
