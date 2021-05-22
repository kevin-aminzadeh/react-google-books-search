import React from "react";
import ListItem from "../listItem/ListItem";

function ListContainer(props) {
  return (
    <ul className="px-0 row justify-content-center">
      {props.data.map((item) => (
        <ListItem data={item} key={item._id} handleSave={props.handleSave} />
      ))}
    </ul>
  );
}

export default ListContainer;
