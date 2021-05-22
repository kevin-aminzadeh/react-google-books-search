import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand navbar-dark bg-dark py-3">
        <div className="container-fluid">
          <span className="navbar-brand" href="#">
            Google Books
          </span>

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
