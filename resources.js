const router = require("express").Router();

router.use("/posts", require("./resources/posts"));

module.exports = router;
