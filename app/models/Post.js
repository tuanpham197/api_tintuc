const mongoose = require('mongoose');

const Post = mongoose.Schema({
    title: String,
    content: String, 
    view : Number,
    thumb : String,
    idUser : { 
        type: mongoose.Schema.Types.ObjectId, 
        ref : 'users'
    },
    idCategory : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'categorys'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('post', Post);