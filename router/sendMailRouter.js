const express = require("express");
const sendMail = require("../controllers/sendMAil");
const router = express.Router()

router.get("/mail",sendMail)

module.exports =router;