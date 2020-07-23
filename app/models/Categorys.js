const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    title: String,
    slug: String, 
}, {
    timestamps: true
});

module.exports = mongoose.model('ProductSchema', ProductSchema);