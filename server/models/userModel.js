const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email:
    {type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

//create user collection 
const User = mongoose.model("user", userSchema);

module.exports = User;