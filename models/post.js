const mongoose = require("mongoose");

if (process.env.NODE_ENV === "test") {
  mongoose.connect("mongodb://localhost/blog_ly_test");
} else {
  mongoose.connect("mongodb://localhost/blog_ly");
}

const Post = mongoose.model("Post", {
  title: String,
  post_text: String,
  post_image: String
});

module.exports = Post;
