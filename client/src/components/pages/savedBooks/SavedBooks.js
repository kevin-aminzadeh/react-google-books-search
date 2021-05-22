import React, { useContext, useEffect, useState } from "react";
import Container from "../../container/Container";
import Section from "../../section/Section";
import ListContainer from "../../listContainer/ListContainer";
import SavedBooksContext from "../../../utils/SavedBooksContext";

function SavedBooks() {
  // Initialize Saved Books useContext Object
  const { books, totalItems } = useContext(SavedBooksContext);

  // Update Document Title On Mount
  useEffect(() => {
    document.title = "Saved Books | React Google Books Search";
  }, []);

  // Render Saved Books If There Are Any
  const renderSavedBooksList = () => {
    if (books.length) {
      return <ListContainer data={books} />;
    }
    return (
      <div className="row h-100 py-5">
        <div className="col text-center">
          <p className="lead mb-0 mt-5">Your Saved Books Will Appear Here.</p>
        </div>
      </div>
    );
  };

  return (
    <Container>
      <Section id="results" className="mt-5" heading={`Saved Books`}>
        {renderSavedBooksList()}
      </Section>
    </Container>
  );
}

export default SavedBooks;
