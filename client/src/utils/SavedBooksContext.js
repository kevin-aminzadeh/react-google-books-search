import React from "react";

const SavedBooksContext = React.createContext({
  books: [],
  totalItems: 0,
});

export default SavedBooksContext;
