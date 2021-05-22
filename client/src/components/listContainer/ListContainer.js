import React, { useContext } from "react";
import ListItem from "../listItem/ListItem";
import SavedBooksContext from "../../utils/SavedBooksContext";

function ListContainer(props) {
  // Initialize Saved Books useContext Object
  const { books, totalItems } = useContext(SavedBooksContext);
  console.log(books);
  console.log(props.data);
  return (
    <ul className="px-0 row justify-content-center">
      {props.data.map((item) => (
        <ListItem
          data={item}
          key={item._id}
          handleSave={props.handleSave}
          saved={books.some((book) => book._id === item._id) ? true : false}
        />
      ))}
    </ul>
  );
}

export default ListContainer;
