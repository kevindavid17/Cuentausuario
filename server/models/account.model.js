const mongoose = require('mongoose');

const AccountScheme = new mongoose.Schema({

    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val), 
            message: "Invalid email"
        }
    },

    password: {
        type: String,
        required: [true, "Password is required"]
    }
});

AccountScheme.virtual('confirmPassword')
    .get(() => this.confirmPassword)
    .set( value => this.confirmPassword = value)

AccountScheme.pre('validate',function(next){
    if(this.password != this.confirmPassword){
        this.invalidate('confirmPassword','Password must match!');
    }
    next();
});

const Account = mongoose.model('Account', AccountScheme);

module.exports = Account;