import React from "react";

function Container(props) {
  return <div className={`container mt-5 py-4`}>{props.children}</div>;
}

export default Container;
