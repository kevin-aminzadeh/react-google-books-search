import React, { useState } from "react";
import Container from "../../container/Container";
import Hero from "../../hero/Hero";
import ResultsContainer from "../../resultsContainer/ResultsContainer";
import SearchBar from "../../searchbar/SearchBar";
import API from "../../../utils/API";

function Search() {
  // Initialize Search Results State
  const [searchResults, setSearchResults] = useState({});

  const handleSearch = async (searchQuery) => {
    // Fetch Search Results from Google Books API
    const results = await API.searchGoogleBooks(searchQuery);

    // Update Search Results State Object with Retrieved Data
    setSearchResults(results);
  };

  // Render Search Results Component If searchResults State Object Contains Data
  const renderResults = () => {
    if (Object.keys(searchResults).length) {
      return <ResultsContainer data={searchResults} />;
    }
  };

  return (
    <Container>
      <Hero />
      <SearchBar handleSearch={handleSearch} />
      {renderResults()}
    </Container>
  );
}

export default Search;
