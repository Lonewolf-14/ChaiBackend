require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World !!");
});

app.get("/twitter", (req, res) => {
    res.send("Hello Developer !!");
});

app.get("/login", (req, res) => {
    res.send("<h1>Please Login at Chai aur Code</h1>");
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
