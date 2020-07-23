const Post = require('../models/Post.js');

// Create and Save a new Note
exports.create = async (req, res) => {
    var post = await Post.create({ 
        title : "Bài viết số 1",
        content : "Nội dung của bài viết số 1"
    });
    if(post){
        return res.status(201).json({
            message : "successfully",
            data:post
        }); 
    }
    else{
        return res.status(500).json({
            message : "fails"
        });
    }
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {

};

// Find a single note with a noteId
exports.findOne = async (req, res) => {
    var id = req.params.id;

    let post = await Post.findOne({_id : id});
    if(post){
        return res.status(201).json({
            message : "successfully",
            data:post
        }); 
    }else{
        return res.status(500).json({
            message : "fails"
        }); 
    }
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

};