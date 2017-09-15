const Post = require("../../../models/post");

module.exports = (req, res) => {
  Post.remove({_id: req.params.id}, (err, deletedPost) => {
    if (err) {
      return res
      .status(400)
      .json(err);
    }

    res.sendStatus(200);
  });
}
