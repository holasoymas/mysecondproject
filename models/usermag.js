const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = mongoose.Schema({
    name: {
        required: true,
        type: String,
        minLength: [3, "your name is too short"]
    },
    email: {
        required: true,
        unique: true,
        type: String,
        validate(value)
         {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid Email adress')
            }
        } 
    },
    phone: {
        required: true,
        unique: true,
        type: String,
        min:10
    },
    message: {
        type: String
    }
});

const User = new mongoose.model("User", userSchema);

module.exports = User;