import React from "react";

function ResultsItem() {
  return (
    <div className="li">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Book Title</h3>
            <h4 className="lead">Book descrp</h4>
            <h5>Written By Author</h5>
          </div>
          <div className="col">
            <a href="" className="btn btn-outline-dark">
              View
            </a>
            <button className="btn btn-outline-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultsItem;
