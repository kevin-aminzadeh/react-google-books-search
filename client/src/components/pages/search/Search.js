import React, { useEffect, useState } from "react";
import Container from "../../container/Container";
import Section from "../../section/Section";
import ListContainer from "../../listContainer/ListContainer";
import SearchBar from "../../searchbar/SearchBar";
import API from "../../../utils/API";

function Search() {
  // Initialize Search Results State
  const [searchResults, setSearchResults] = useState({});

  // Update Document Title On Mount
  useEffect(() => {
    document.title = "Search | React Google Books";
  }, []);

  // Handle Search Event
  const handleSearch = async (searchQuery) => {
    // Fetch Search Results from Google Books API
    const results = await API.searchGoogleBooks(searchQuery);

    // Update Search Results State Object with Retrieved Data
    setSearchResults(results);
  };

  // Render Search Results Component If searchResults State Object Contains Data
  const renderResults = () => {
    if (Object.keys(searchResults).length) {
      return (
        <Section
          id="results"
          className="mt-5"
          heading={`Showing Results For "${searchResults.query}."`}
        >
          <div className="row d-none d-md-flex">
            <div className="col text-end">
              <p className="lead mb-0 fw-light">
                Found
                <span className="fw-bold"> {searchResults.totalItems} </span>
                Matching Books.
              </p>
            </div>
          </div>
          <ListContainer data={searchResults.books} />
        </Section>
      );
    }
  };

  return (
    <Container>
      <SearchBar handleSearch={handleSearch} />
      {renderResults()}
    </Container>
  );
}

export default Search;
