import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
        <div className="container-fluid">
          <span className="navbar-brand" href="#">
            Google Books
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink exact to="/" className="nav-link">
                  Search
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/saved" className="nav-link">
                  Saved
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
