import React, { useRef } from "react";
import Section from "../section/Section";

function SearchBar({ handleSearch }) {
  const inputRef = useRef();

  return (
    <Section id="search" className="mb-4">
      <div className="row mb-3">
        <div className="col">
          <h2>Book Search</h2>
        </div>
      </div>
      <div className="row">
        <div className="col px-0">
          <form className="w-100">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control border-0 py-3 shadow-sm"
                placeholder="Search For Books"
                aria-label="Book Name"
                aria-describedby="search-btn"
                ref={inputRef}
              />
              <button
                className="btn btn-primary"
                id="search-btn"
                onClick={(e) => {
                  e.preventDefault();
                  handleSearch(inputRef.current.value);
                }}
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}

export default SearchBar;
