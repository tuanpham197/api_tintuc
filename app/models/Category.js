const mongoose = require('mongoose');

const Category = mongoose.Schema({
    title: String,
    slug: String, 
}, {
    timestamps: true
});

module.exports = mongoose.model('category', Category);