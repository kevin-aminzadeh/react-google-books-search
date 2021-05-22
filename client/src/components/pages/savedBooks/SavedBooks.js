import React, { useContext, useEffect, useState } from "react";
import Container from "../../container/Container";
import Section from "../../section/Section";
import Hero from "../../hero/Hero";
import ListContainer from "../../listContainer/ListContainer";
import API from "../../../utils/API";
import SavedBooksContext from "../../../utils/SavedBooksContext";

function SavedBooks() {
  // Initialize Search Results State
  const { books, totalItems } = useContext(SavedBooksContext);

  const renderSavedBooks = () => {
    if (books) {
      return (
        <Section id="results" className="mt-5" heading={`Saved Books`}>
          <div className="row">
            <div className="col text-end">
              <p className="lead mb-0 fw-light">
                Found
                <span className="fw-bold"> {totalItems} </span>
                Matching Books.
              </p>
            </div>
          </div>
          <ListContainer data={books} />
        </Section>
      );
    }
  };

  return (
    <Container>
      <Hero />
      {renderSavedBooks()}
    </Container>
  );
}

export default SavedBooks;
