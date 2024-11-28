import express from "express";

import {
  addComment,
  deleteComment,
  getCommentsByBlog,
  find_blog,
} from "../controllers/commentController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();



router.post("/", authMiddleware, addComment);
router.get("/:blogId", getCommentsByBlog);
router.delete("/:blogId", find_blog , deleteComment);



export default router;
