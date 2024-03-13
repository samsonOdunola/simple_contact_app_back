const express = require("express");
const router = express.Router();
const { getContacts } = require("../controller/contact.controller");

router.get("/", getContacts);

module.exports = router;
