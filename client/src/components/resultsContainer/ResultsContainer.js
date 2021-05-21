import React from "react";
import Section from "../section/Section";
import ResultsItem from "../resultsItem/ResultsItem";

function ResultsContainer() {
  return (
    <Section id="results">
      <h2>Results</h2>
      <ul className="px-0 row justify-content-center">
        <ResultsItem />
        <ResultsItem />
        <ResultsItem />
      </ul>
    </Section>
  );
}

export default ResultsContainer;
