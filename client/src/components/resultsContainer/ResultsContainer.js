import React from "react";
import Container from "../container/Container";
import ResultsItem from "../resultsItem/ResultsItem";

function ResultsContainer() {
  return (
    <Container>
      <ul className="row">
        <ResultsItem />
        <ResultsItem />
        <ResultsItem />
      </ul>
    </Container>
  );
}

export default ResultsContainer;
