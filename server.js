const express = require("express");
const moongose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// Import Routes
const routes = require("./routes");

// Define express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Configure Routes
app.use(routes);

// Connect to DB
moongose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

// Configure Socket.io Events
io.on("connection", (socket) => {
  // On "bookSaved" Event,
  socket.on("bookSaved", (bookTitle) => {
    // Emit a "booksUpdated" Event on All Sockets With Relevant Data
    io.sockets.emit("booksUpdated", { type: "add", item: bookTitle });
  });

  // On "bookDeleted" Event,
  socket.on("bookDeleted", (bookTitle) => {
    // Emit a "booksUpdated" Event on All Sockets With Relevant Data
    io.sockets.emit("booksUpdated", { type: "delete", item: bookTitle });
  });
});

// Start Server
server.listen(PORT, () => {
  console.log(`🌎 ==> API server now listening on port ${PORT}!`);
});
