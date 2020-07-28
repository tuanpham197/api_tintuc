const Post = require('../models/Post.js');

// Create and Save a new Note
exports.create = async (req, res) => {
    var {title,content,idUser,idCategory} = req.body;
    var post = await Post.create({ 
        title,
        content,
        view : 0,
        idUser,
        idCategory,
        thumb : "newpost.png"
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
exports.findAll = async (req, res) => {
    var listPost = await Post.find();

    if(listPost){
        return res.status(201).json({
            message : "successfully",
            data:listPost
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
// find top 5 post popular
exports.findPostPopular = async (req, res) => {

}

// find all post and category
exports.findAllPostCategory = async (req, res) => {
    var list =await Post.aggregate()
                        .group({ _id: "$idCategory" , posts: { $push: "$$ROOT" } } )
                        .sort({scores : -1})
                        .project({items : {"$slice" : ["$posts",3]}})
                        
    return res.status(200).json({
        message : "successfully",
        data : list
    })
}