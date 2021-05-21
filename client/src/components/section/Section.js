import React from "react";

function Section(props) {
  return (
    <section id={props.id} className={props.className}>
      {props.children}
    </section>
  );
}

export default Section;
