const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  company: String,
  jobTitle: String,
});

module.exports = mongoose.model("Contact", ContactSchema);
