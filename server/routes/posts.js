import express from "express";
import { getFeedPosts, getCategoryPosts, getPost } from "../controllers/posts.js";

const router = express.Router();

// READ
router.get("/", getFeedPosts);
router.get('/:_id', getPost);
router.get('/post/:category', getCategoryPosts);

export default router;
