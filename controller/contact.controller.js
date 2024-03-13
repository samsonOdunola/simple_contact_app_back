const contactModel = require("../models/contact.model.js");

const getContacts = async (req, res) => {
  let contacts = [];
  try {
    contacts = await contactModel.find();
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: "failure",
      error: err.message,
      data: [],
    });
  }
  return res
    .status(200)
    .json({ success: true, message: "Success", data: contacts });
};

module.exports = { getContacts };
