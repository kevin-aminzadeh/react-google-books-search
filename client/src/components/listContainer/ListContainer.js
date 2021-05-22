import React from "react";
import ListItem from "../listItem/ListItem";

function ListContainer(props) {
  return (
    <ul className="px-0 row justify-content-center">
      {props.data.map((item, index) => (
        <ListItem data={item} key={index} handleSave={props.handleSave} />
      ))}
    </ul>
  );
}

export default ListContainer;
