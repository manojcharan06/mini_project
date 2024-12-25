const express = require('express');
const app = express();
const path = require('path');
const phone = require('./db');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static('public'));

app.get("/", async (req, res) => {
    const dets = await phone.find();
    res.render("index",{dets});
})

app.get("/add", (req, res) => {
    res.render("contact");
})

app.post("/add_contact", async (req, res) => {
    const contact = new phone({
        name: req.body.name,
        phone: req.body.Phone
    })
    contact.save();
    
    res.redirect("/");
})



app.listen(3000)