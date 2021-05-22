import React from "react";

function ListItem({ data, handleSave, handleDelete, saved }) {
  return (
    <div className="li w-100 mt-4 py-4 bg-white shadow-sm px-5">
      <div className="row">
        <div className="col">
          <h3 className="text-capitalize">{data.title}</h3>
        </div>
        <div className="col-3 text-end">
          <a
            href={data.link}
            target="_blank"
            className="btn btn-outline-dark px-4"
          >
            View
          </a>
          {saved ? (
            <button
              className="btn btn-outline-danger px-4 ms-2"
              onClick={() => {
                handleDelete(data._id);
              }}
            >
              Delete
            </button>
          ) : (
            <button
              className="btn btn-outline-primary px-4 ms-2"
              onClick={() => {
                handleSave(data);
              }}
              disabled={saved}
            >
              Save
            </button>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-9">
          <h4 className="lead text-capitalize">{data.subtitle}</h4>
          <h5 className="h6 text-capitalize">
            Written By
            {data.authors
              ? data.authors.map((author, index, authorsArr) => {
                  if (index === authorsArr.length - 1) {
                    return ` ${author}`;
                  }

                  return ` ${author},`;
                })
              : " Unknown"}
          </h5>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <img
            src={data.image}
            alt={`${data.title} Front Cover`}
            className="img-thumbnail"
          />
        </div>
        <div className="col-10">
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
