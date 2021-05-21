import React from "react";
import Section from "../section/Section";

function Hero() {
  return (
    <Section id="hero">
      <div className="row text-center mb-5">
        <div className="col">
          <h1>(React) Google Books Search</h1>
          <p className="lead">Search for and Save Books of Interest</p>
        </div>
      </div>
    </Section>
  );
}

export default Hero;
