const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Handle "/api/books" Route Logic
router
  .route("/books")
  .get(booksController.findAll)
  .post(booksController.create);

// Handle "/api/books/:id" Route Logic
router.route("/books/:id").delete(booksController.remove);

module.exports = router;
