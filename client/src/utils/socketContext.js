import React from "react";
import io from "socket.io-client";

const socketURL =
  process.env.NODE_ENV === "production"
    ? window.location.hostname
    : "https://localhost:3000";

// Open Up a New Socket Connection
const socket = io();

// Set Default Socket Context Value to "socket"
const SocketContext = React.createContext(socket);

export default SocketContext;
