import Comment from "../models/Comment.js";
import Blog from "../models/Blog.js";
const addComment = async (req, res) => {
  try {
    const { text, blogId } = req.body;
    const comment = await Comment.create({
      text: text,
      blog: blogId,
      user: req.user._id,
    });
    res.status(201).json({ message: "Comment created successfully.", comment });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

const getCommentsByBlog = async (req, res) => {
  try {
    const { blogId } = req.params;
    const blog = await Blog.findById(blogId);
    if (!blog) return res.status(404).json({ error: "Blog not found" });
    const comments = await Comment.find({ blog: blogId })
      .populate("user", "name")
      .populate("blog", "title");
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: "Server error", error });
  }
};

const find_blog = async (req , res ,next) => {
  const {blogId} = req.params;
  next();
 
}


const deleteComment = async (req, res) => {
  console.log(req.params);
  
  // try {
  //   const { blog_id , comment_id  } = req.params;

  //   const comment = await Comment.findById(comment_id);
  //   if (!comment) return res.status(404).json({ error: "Comment Not Found" });
  //   if (comment.user.toString() != req.user._id)
  //     return res.status(403).json({ error: "Not Authorized" });
  //   // const isDeleted = await comment.deleteOne();
  //   // console.log(comment);
  //   res.status(200).json({ message: "Comment Deleted" });
  // } catch (error) {}
};
export { getCommentsByBlog, addComment, deleteComment , find_blog };
