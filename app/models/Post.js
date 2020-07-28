const mongoose = require('mongoose');

const posts = mongoose.Schema({
    title: String,
    content: String, 
    view : Number,
    thumb : String,
    idUser : { 
        type: mongoose.Schema.Types.ObjectId, 
        ref : 'user'
    },
    idCategory : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'category'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('post', posts);