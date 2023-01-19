import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// read content
//getting the all the posts - home page
router.get("/", verifyToken, getFeedPosts);
//getting the posts from a single user
router.get("/:userId/posts", verifyToken, getUserPosts);

// update content
router.patch("/:id/like", verifyToken, likePost);

export default router;
