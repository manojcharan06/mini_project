const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session")
const phone = require("./db"); // Assuming this is your phone model

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(
    session({
        secret: "B8_key", // Replace with a secure key
        resave: false,
        saveUninitialized: true,
    })
);

// Routes
// Homepage - Display Contacts
app.get("/", async (req, res) => {
    const dets = await phone.find();
    res.render("index", { dets });
});

// Add Contact Page
app.get("/add", (req, res) => {
    res.render("contact");
});

// Add Contact (POST)
app.post("/add_contact", async (req, res) => {
    const contact = new phone({
        name: req.body.name,
        phone: req.body.Phone,
    });
    await contact.save();
    res.redirect("/");
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
