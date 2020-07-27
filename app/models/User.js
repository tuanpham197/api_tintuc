const mongoose = require('mongoose');

const User = mongoose.Schema({
    username: String,
    password: String, 
    email : String,
    level : String,
}, {
    timestamps: true
});

module.exports = mongoose.model('user', User);