import React from 'react';
import { io, Socket } from 'socket.io-client';

let url: string = process.env.REACT_APP_BACKEND_LOCALHOST!;
if (process.env.NODE_ENV === "production") {
    url = process.env.REACT_APP_PRODUCTION_URL!;
  }
  
  export const socket = io(url);
  export const SocketContext = React.createContext(socket);