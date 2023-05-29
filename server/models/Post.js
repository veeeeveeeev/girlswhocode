import express from "express";
import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    content: String,
    picturePath: String,
    category: String,
    categoryName: String
},
{ timestamps: true });

const Post = mongoose.model("Post", postSchema);

export default Post;