const express = require("express");
const {insertUser, userDetails, softDelete}= require("../controllers/userController");
const routes = express.Router();
const { upload } = require("../middleware/multer");
const { verifyToken } = require("../middleware/token");
const { coinCodex } = require("../controllers/coinDcx");

routes.post("/addUser", upload, insertUser);
routes.get("/userDetails", verifyToken, userDetails);

routes.get("/coinDetails", coinCodex);
routes.put("/softDelete/:id", softDelete);

module.exports = routes;
