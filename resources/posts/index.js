const router = require("express").Router();

router.route("/")
  .get(require("./controllers/index"))
  .post(require("./controllers/create"));

router.route("/:id")
  .get(require("./controllers/show"))
  .put(require("./controllers/update"))
  .delete(require("./controllers/destroy"));

module.exports = router;
