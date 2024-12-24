const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/add", (req, res) => {
    res.render("contact");
})

app.listen(3000)