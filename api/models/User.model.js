const mongoose = require('mongoose');

const EMAIL_PATTERN =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASS_PATTERN = /^.{8,}$/;

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'User name is required']
    },
    email: {
      type: String,
      required: [true, 'E-mail is required'],
      match: [EMAIL_PATTERN, 'E-mail format is not valid'],
      trim: true,
      lowercase: true,
      unique: true
    },
    password: {
      type: String,
      required: "Password is required",
      match: [PASS_PATTERN, "Password needs at least 8 chars"],
    },
  }
)

const User = mongoose.model('User', UserSchema);
module.exports = User;