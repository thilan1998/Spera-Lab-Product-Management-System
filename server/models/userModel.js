const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  passwordHash: { type: String, required: true },
  firstName : {type: String, required : true},
  lastName : {type: String, required : true},
  phone : {type: String, required : true},
  address : {type: String, required : true}

});

const User = mongoose.model("user", userSchema);

module.exports = User;