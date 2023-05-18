const jwt = require("jsonwebtoken");

const generateToken = async (payload) => {
  const token = await jwt.sign(payload, "kaif", {
    expiresIn: "1d",
  });
  return token;
};

function verifyToken(req, res, next) {
  const data = req.headers["authorization"];
  const bearer = data.split(" ");
  const token = bearer[1];

  req.token = token;

  if (!token) {
    return res.json({
      message: "Please provide valid token",
    });
  }

  jwt.verify(req.token, "kaif", (err, authData) => {
    if (err) {
      return res.json({ msg: "invalid token" });
    } else {
      next();
    }
  });
}

module.exports = {
  generateToken,
  verifyToken,
};
