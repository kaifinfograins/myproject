const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  pin: {
    type: Number,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  image: {
    type: Array
  },
  deleted:{
    type:Boolean,
    default:false
  }
},{timestamps:true,strict:false});

const userModel = mongoose.model("user",userSchema)
module.exports = userModel;