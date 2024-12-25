const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/phonebook");

const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
})

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
