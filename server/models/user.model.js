const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema({
    userName: {
        type:  String,
        required: [true, 'Username is mandatory']
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val), 
            message: "Invalid email"
        }
    }
});

const User = mongoose.model('User', UserScheme);

module.exports = User;