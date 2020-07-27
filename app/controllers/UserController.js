const User = require('../models/User.js');

// Create and Save a new user
exports.create = async (req, res) => {
    /**
     * username: String,
        password: String, 
        email : String,
        level : String,
     */
    var user = await User.create({ 
        username: "vantuan197",
        password: 123, 
        email : "vantuankrn197@gmail.com",
        level : 3,
    });
    if(user){
        return res.status(201).json({
            message : "successfully",
            data:user
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

// Find a single user with a userID
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

// Update a user identified by the userID in the request
exports.update = (req, res) => {

};

// Delete a user with the specified userID in the request
exports.delete = (req, res) => {

};

exports.login = async (req, res) => {

}
exports.register = async (req, res) => {

}