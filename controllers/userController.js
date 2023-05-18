const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const {generateToken} = require("../middleware/token")

async function hashPassword(password) {
  return await bcrypt.hashSync(password, 10);
}

async function validatePassword(plainpassword, hashedpassword) {
  return await bcrypt.compare(plainpassword, hashedpassword);
}

const insertUser = async (req, res) => {
  try {
    let { name, email, password, city, pin, phone } = req.body;
    const files = req.files;
    const image = files.map((file) => process.env.BASE_URL + file.originalname);
    console.log("image----->>>", image);
    const hashedPassword = await hashPassword(password);

    const isMailExist = await User.findOne({ email });

    if (isMailExist) {
      return res.status(402).json({
        message: "Email already exist",
      });
    }

    const addUser = new User({
      name,
      email,
      password: hashedPassword,
      city,
      pin,
      phone,
      image,
    });
    const result = await addUser.save();

    const token = await generateToken({
        id:addUser._id
    })
    // console.log("result,28-->",result)
    return res.json({
      status: 200,
      message: "User insert successfully!",
      data: result,
      token
    });
  } catch (error) {
    console.log(error.message);
  }
};

const userDetails = async (req, res) => {
  try {
    const user = await User.find().sort({ createdAt: -1 });

    return res.json({
      status: 200,
      message: "Data fetched successfully",
      data: user,
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  insertUser,
  userDetails,
};
