const Category = require('../models/Category.js');

// Create and Save a new Note
exports.create = async (req, res) => {
    var {title,slug} = req.body;
    var category = await Category.create({ 
        title : title,
        slug : slug
    });
    if(category){
        return res.status(201).json({
            message : "successfully",
            data:category
        }); 
    }
    else{
        return res.status(500).json({
            message : "fails"
        });
    }
};

// Retrieve and return all notes from the database.
exports.findAll = async (req, res) => {
    let post = await Category.find();
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

// find post by category id
exports.findByCategory = async (req, res)=>{
    let idCat = req.params.id; 
    var listPost = await Post.find({idCategory : idCat}).limit(3);
    if(listPost){
        return res.status(201).json({
            message : "successfully",
            data:listPost
        }); 
    }else{
        return res.status(500).json({
            message : "fails"
        }); 
    }
}

// find all post and category
exports.findAllPostCategory = async (req, res) => {
    var list = await Category.find()
                    .populate('post');
    return res.status(200).json({
        data : list
    })
}