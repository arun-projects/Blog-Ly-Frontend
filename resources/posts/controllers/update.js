const Post = require("../../../models/post");

module.exports = (req, res) => {
  Post.update({_id: req.params.id}, req.body.post, (err, updatedPost) => {
    if (err) {
      return res
      .status(400)
      .json(err);
    }

    res.sendStatus(200);
  });
}
