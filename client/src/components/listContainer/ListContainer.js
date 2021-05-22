import React, { useContext } from "react";
import ListItem from "../listItem/ListItem";
import SavedBooksContext from "../../utils/SavedBooksContext";
import SocketContext from "../../utils/socketContext";
import API from "../../utils/API";
// import socket from "../../utils/socketConnection";

function ListContainer(props) {
  // Initialize Saved Books useContext Object
  const { books, totalItems } = useContext(SavedBooksContext);

  // Initialize Socket Context Object
  const socket = useContext(SocketContext);

  // Save Book To DB
  const handleSave = async (bookData) => {
    API.saveBook(bookData).then(() => socket.emit("bookSaved", bookData.title));
  };

  // Remove Saved Book From DB
  const handleDelete = async (bookData) => {
    API.deleteSavedBook(bookData._id).then(() =>
      socket.emit("bookDeleted", bookData.title)
    );
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
