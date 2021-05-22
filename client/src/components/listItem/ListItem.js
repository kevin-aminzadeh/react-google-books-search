import React from "react";

function ListItem({ data, handleSave, handleDelete, saved }) {
  return (
    <div className="li w-100 mt-4 py-4 bg-white shadow-sm px-4 px-sm-5 px-md-5">
      <div className="row">
        <div className="col">
          <h3 className="text-capitalize">{data.title}</h3>
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
        <div className="col-md-5 col-lg-4 col-xl-3 my-4 text-center text-lg-end">
          <a
            href={data.link}
            target="_blank"
            className="btn btn-outline-dark px-4 mb-3 w-100"
          >
            View
          </a>
          {saved ? (
            <button
              className="btn btn-danger px-4 w-100"
              onClick={(e) => {
                e.target.disabled = true;
                handleDelete(data);
              }}
            >
              Delete
            </button>
          ) : (
            <button
              className="btn btn-outline-primary px-4 w-100"
              onClick={(e) => {
                e.target.disabled = true;
                console.log("click");
                handleSave(data);
              }}
              disabled={saved}
            >
              Save
            </button>
          )}
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12 text-center col-md-3 ">
          <img
            src={data.image}
            alt={`${data.title} Front Cover`}
            className="img-thumbnail"
          />
        </div>
        <div className="col mt-4">
          <p className="">{data.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
