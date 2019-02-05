const router = require("express").Router();
const searchController = require("../../controllers/searchController");

// Matches with "/api/books"
router.route("/")
  .get(searchController.findAll)
  .post(searchController.create);

// Matches with "/api/points/:id"
router
  .route("/:id")
  .get(searchController.findById)
  .put(searchController.update)
  .delete(searchController.remove);

module.exports = router;
