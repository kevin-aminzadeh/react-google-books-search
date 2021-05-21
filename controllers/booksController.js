const bookModel = require("../models/book");

module.exports = {
  // Get All Saved Books
  findAll: (req, res) => {
    bookModel
      .find()
      .sort({ dateAdded: -1 })
      .then((bookData) => res.json(bookData))
      .catch((err) => res.status(422).json(err));
  },
  // Create New Book Document
  create: (req, res) => {
    bookModel
      .create(req.body)
      .then((bookData) => res.json(bookData))
      .catch((err) => res.status(422).json(err));
  },
  // Remove Book
  remove: (req, res) => {
    bookModel
      .deleteOne({ _id: req.params.id })
      .then((bookData) => res.json(bookData))
      .catch((err) => res.status(422).json(err));
  },
};
