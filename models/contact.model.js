const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const contactModel = mongoose.model("contacts", contactSchema);

module.exports = contactModel;
