import React from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Container from "./components/container/Container";
import Hero from "./components/hero/Hero";
import SearchBar from "./components/searchbar/SearchBar";
import ResultsContainer from "./components/resultsContainer/ResultsContainer";

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Container>
        <Hero />
        <SearchBar />
        <ResultsContainer />
      </Container>
    </div>
  );
}

export default App;
