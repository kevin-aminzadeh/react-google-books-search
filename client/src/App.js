import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Search from "./components/pages/search/Search";
import SavedBooks from "./components/pages/savedBooks/SavedBooks";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App ">
      <Router>
        <Navbar />
        <Route exact path={["/", "/search"]}>
          <Search />
        </Route>
        <Route exact path={"/saved"}>
          <SavedBooks />
        </Route>
      </Router>
    </div>
  );
}

export default App;
