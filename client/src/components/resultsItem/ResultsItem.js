import React from "react";

function ResultsItem({ book }) {
  return (
    <div className="li w-100 mt-4 py-4 bg-white shadow-sm px-5">
      <div className="row">
        <div className="col">
          <h3 className="text-capitalize">{book.title}</h3>
        </div>
        <div className="col-3 text-end">
          <a
            href={book.link}
            target="_blank"
            className="btn btn-outline-dark px-4"
          >
            View
          </a>
          <button className="btn btn-outline-primary px-4 ms-2">Save</button>
        </div>
      </div>
      <div className="row">
        <div className="col-9">
          <h4 className="lead text-capitalize">{book.subtitle}</h4>
          <h5 className="h6 text-capitalize">
            Written By
            {book.authors.map((author, index, authorsArr) => {
              console.log(authorsArr);
              if (index === authorsArr.length - 1) {
                return ` ${author}`;
              }

              return ` ${author},`;
            })}
          </h5>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <img
            src={book.image}
            alt={`${book.title} Front Cover`}
            className="img-thumbnail"
          />
        </div>
        <div className="col-10">
          <p>{book.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ResultsItem;
