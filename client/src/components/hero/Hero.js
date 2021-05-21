import React from "react";
import Container from "../container/Container";

function Hero() {
  return (
    <Container>
      <div className="row text-center">
        <div className="col">
          <h1>(React) Google Books Search</h1>
          <p className="lead">Search for and Save Books of Interest</p>
        </div>
      </div>
    </Container>
  );
}

export default Hero;
