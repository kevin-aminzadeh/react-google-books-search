import React, { useEffect, useState } from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Container from "./components/container/Container";
import Hero from "./components/hero/Hero";
import SearchBar from "./components/searchbar/SearchBar";
import ResultsContainer from "./components/resultsContainer/ResultsContainer";
import API from "./utils/API";

function App() {
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
    <div className="App ">
      <Navbar />
      <Container>
        <Hero />
        <SearchBar handleSearch={handleSearch} />
        {renderResults()}
      </Container>
    </div>
  );
}

export default App;
