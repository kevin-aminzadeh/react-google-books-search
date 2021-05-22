import React, { useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.scss";
import API from "./utils/API";
import SocketContext from "./utils/socketContext";
import SavedBooksContext from "./utils/SavedBooksContext";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Container from "./components/container/Container";
import Search from "./components/pages/search/Search";
import SavedBooks from "./components/pages/savedBooks/SavedBooks";
import Alert from "./components/alert/Alert";

function App() {
  // Initialize Saved Books State Object
  const [savedBooksState, setSavedBooksState] = useState({
    books: [],
    totalItems: 0,
  });

  // Initialize Notification State Object
  const [notification, setNotification] = useState({});

  // Initialize Socket Context Object
  const socket = useContext(SocketContext);

  // Fetch Saved Books From API and Update savedBooksSate with Resulting Data
  const fetchSavedBooks = () => {
    API.getSavedBooks()
      .then((res) => {
        if (Object.keys(res).length) {
          setSavedBooksState(res);
        }
      })
      .catch((err) => {
        throw err;
      });
  };

  useEffect(() => {
    // Get Saved Books on Component Mount
    fetchSavedBooks();

    // Register Socket.io "booksUpdated" Event Listener on Component Mount
    socket.on("booksUpdated", (event) => {
      // If a "booksUpdated" Event is Received,
      // Fetch Saved Books Again (Since DB Data Has Changed)
      fetchSavedBooks();

      // Set The Notification State Depending on The Event Type (i.e add or delete)
      event.type === "add"
        ? setNotification({
            type: event.type,
            text: `${event.item} has been added to saved books.`,
          })
        : setNotification({
            type: event.type,
            text: `${event.item} has been removed from saved books.`,
          });

      // Clear Notification State After 4 Seconds (This results in the alert component being removed after 4 seconds)
      setTimeout(() => {
        setNotification({});
      }, 3000);
    });

    // Close Socket on Component Unmount
    return () => {
      socket.off("connection");
    };
  }, []);

  // Render Alert Component if a Notification Exists
  const renderNotification = () => {
    if (notification.text) {
      return (
        <Alert
          text={notification.text}
          colorClass={notification.type === "add" ? "success" : "danger"}
        />
      );
    }
  };

  return (
    <SocketContext.Provider value={socket}>
      <div className="App ">
        <Router>
          <Navbar />
          {renderNotification()}
          <Container>
            <Hero />
          </Container>
          <Switch>
            <SavedBooksContext.Provider value={{ ...savedBooksState }}>
              <Route exact path={["/"]}>
                <Search />
              </Route>
              <Route exact path={"/saved"}>
                <SavedBooks />
              </Route>
              <Route path="" render={() => <Redirect to="/" />} />
            </SavedBooksContext.Provider>
          </Switch>
        </Router>
      </div>
    </SocketContext.Provider>
  );
}

export default App;
