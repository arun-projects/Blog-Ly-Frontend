const Post = require("../../../models/post");

module.exports = (req, res) => {
  Post.find({}, (err, posts) => {
    res
    .status(200)
    .json(posts);
  });
}
