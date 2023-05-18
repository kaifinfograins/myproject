const express = require("express");
const { insertUser, userDetails } = require("../controllers/userController");
const routes = express.Router()
const {upload} = require("../middleware/multer")
const {verifyToken} = require("../middleware/token")

routes.post("/addUser",upload, insertUser);
routes.get("/userDetails",verifyToken, userDetails)



module.exports =routes;