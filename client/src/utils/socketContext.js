import React from "react";
import io from "socket.io-client";

// Open Up a New Socket Connection
const socket = io.connect();

// Set Default Socket Context Value to "socket"
const SocketContext = React.createContext(socket);

export default SocketContext;
