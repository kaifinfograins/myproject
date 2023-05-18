const multer = require("multer")

// Set up Multer storage destination and file naming
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+ file.originalname); // Use originalname instead of filename
    }
  });

const upload = multer({
    storage:storage
}).array("image",10)

module.exports = {upload}