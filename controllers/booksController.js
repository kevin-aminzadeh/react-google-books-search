const mongoose = require("mongoose");
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
    // Destructure book data object and convert _id property in request to ObjectId type
    const bookData = { ...req.body };

    bookModel
      .create(bookData)
      .then((response) => res.json(response))
      .catch((err) => res.status(422).json(err));
  },
  // Remove Book
  remove: (req, res) => {
    console.log(req.params.id);
    bookModel
      .deleteMany({ _id: req.params.id })
      .then((bookData) => res.json(bookData))
      .catch((err) => res.status(422).json(err));
  },
};
