import Post from "../models/Post.js";

// CREATE
export const createPost = async (req, res) => {
    try {
        const { title, content, category, picturePath, categoryName } = req.body;
        // const user = await User.findById(userId);
        const newPost = new Post({
            title,
            content,
            category,
            picturePath,
            categoryName
        });
        await newPost.save();

        const post = await Post.find();
    } catch (err){
        res.status(409).json({msg: err.message})
    }
}

// READ
export const getFeedPosts = async (req, res) => {
    try{
        const post = await Post.find().sort({"createdAt": -1});
        res.status(200).json(post);
    }catch (err){
        res.status(404).json({msg: err.message})
    }
}

export const getPost = async (req, res) => {
    try{
        const { _id } = req.params;
        const post = await Post.findById({ _id });
        res.status(200).json(post);
    }catch (err){
        res.status(404).json({msg: err.message})
    }
}

export const getCategoryPosts = async (req, res) => {
    try{
        const { category } = req.params;
        const post = await Post.find({ category }).sort({"createdAt": -1});
        res.status(200).json(post);
    }catch (err){
        res.status(404).json({msg: err.message})
    }
}