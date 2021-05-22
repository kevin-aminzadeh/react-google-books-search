import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Search from "./components/pages/search/Search";
import SavedBooks from "./components/pages/savedBooks/SavedBooks";
import Navbar from "./components/navbar/Navbar";
import API from "./utils/API";

import SavedBooksContext from "./utils/SavedBooksContext";
import Hero from "./components/hero/Hero";
import Container from "./components/container/Container";

function App() {
  const [savedBooksState, setSavedBooksState] = useState({
    books: [],
    totalItems: 0,
  });

  useEffect(() => {
    API.getSavedBooks()
      .then((res) => {
        if (Object.keys(res).length) {
          console.log(res);
          setSavedBooksState(res);
        }
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <div className="App ">
      <Router>
        <Navbar />
        <Container>
          <Hero />
        </Container>
        <Switch>
          <SavedBooksContext.Provider value={{ ...savedBooksState }}>
            <Route exact path={["/", "/search"]}>
              <Search />
            </Route>
            <Route path={"/saved"}>
              <SavedBooks />
            </Route>
          </SavedBooksContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
