import React from "react";

function Section(props) {
  const renderHeading = () => {
    if (props.heading) return <h2>{props.heading}</h2>;
  };

  return (
    <section id={props.id} className={props.className}>
      <div className="row">
        <div className="col">{renderHeading()}</div>
      </div>
      {props.children}
    </section>
  );
}

export default Section;
