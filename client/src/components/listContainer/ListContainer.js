import React, { useContext } from "react";
import ListItem from "../listItem/ListItem";
import SavedBooksContext from "../../utils/SavedBooksContext";
import API from "../../utils/API";

function ListContainer(props) {
  // Initialize Saved Books useContext Object
  const { books, totalItems } = useContext(SavedBooksContext);

  // Save Book To DB
  const handleSave = async (bookData) => {
    API.saveBook(bookData);
  };

  // Remove Saved Book From DB
  const handleDelete = async (id) => {
    API.deleteSavedBook(id);
  };

  return (
    <ul className="px-0 row justify-content-center">
      {props.data.map((item) => (
        <ListItem
          data={item}
          key={item._id}
          handleSave={handleSave}
          handleDelete={handleDelete}
          saved={books.some((book) => book._id === item._id) ? true : false}
        />
      ))}
    </ul>
  );
}

export default ListContainer;
