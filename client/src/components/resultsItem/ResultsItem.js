import React from "react";

function ResultsItem() {
  return (
    <div className="li w-100 mt-4 py-4 bg-white shadow-sm px-5">
      <div className="row">
        <div className="col">
          <h3 className="text-capitalize">Book Title</h3>
          <h4 className="lead text-capitalize">
            The Great Books behind the hogworts adventure
          </h4>
          <h5 className="h6 text-capitalize">Written By Author</h5>
        </div>
        <div className="col text-end">
          <a href="" className="btn btn-outline-dark px-4">
            View
          </a>
          <button className="btn btn-outline-primary px-4 ms-2">Save</button>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <img
            src="https://picsum.photos/200/200?random=1"
            alt=""
            className="img-thumbnail"
          />
        </div>
        <div className="col-10">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ad
            veniam corporis incidunt perferendis veritatis voluptatum natus modi
            exercitationem quos vero, ipsam totam nisi excepturi doloribus
            temporibus cupiditate esse voluptas. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Labore ad veniam corporis incidunt
            perferendis veritatis voluptatum natus modi exercitationem quos
            vero, ipsam totam nisi excepturi doloribus temporibus cupiditate
            esse voluptas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResultsItem;
