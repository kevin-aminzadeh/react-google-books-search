import React from "react";
import Container from "../container/Container";

function SearchBar() {
  return (
    <Container>
      <div className="row">
        <div className="col">
          <h2>Book Search</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <form>
            <div className="mb-3">
              <label htmlFor="searchInput" className="form-label">
                Books
              </label>
              <input
                type="text"
                className="form-control"
                id="searchInput"
                aria-describedby="searchHelp"
              />
              <div id="searchHelp" className="form-text visually-hidden">
                Search for books on Google Books.
              </div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default SearchBar;
