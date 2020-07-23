const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    title: String,
    content: String, 
    view : Number,
    thumb : String,
    idUser : { 
        type: mongoose.Schema.Types.ObjectId, 
        ref : 'users'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('product', ProductSchema);