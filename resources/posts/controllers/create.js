const Post = require("../../../models/post");

module.exports = (req, res) => {
  const newPost = new Post(req.body.post);

  newPost.save((err, postRecord) => {
    if (err) {
      return res
      .status(400)
      .json(err);
    }

    res.status(201).json(postRecord);
  });
}
