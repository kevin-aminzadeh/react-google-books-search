import React from "react";
import Section from "../section/Section";
import ResultsItem from "../resultsItem/ResultsItem";

function ResultsContainer(props) {
  console.log(props.data);
  return (
    <Section id="results" className="mt-5">
      <div className="row">
        <div className="col">
          <h2>Showing Results for "{props.data.query}"</h2>
        </div>
      </div>
      <div className="row">
        <div className="col text-end">
          <p className="lead mb-0 fw-light">
            Found
            <span className="fw-bold"> {props.data.totalItems} </span>
            Matching Books.
          </p>
        </div>
      </div>
      <ul className="px-0 row justify-content-center">
        {props.data.books.map((book, index) => (
          <ResultsItem book={book} key={index} />
        ))}
      </ul>
    </Section>
  );
}

export default ResultsContainer;
