const Post = require("../../../models/post");

module.exports = (req, res) => {
  Post.findOne({_id: req.params.id}, (err, post) => {
    if (err) {
      return res
      .status(400)
      .json(err);
    }

    res
    .status(200)
    .json(post);
  });
}
