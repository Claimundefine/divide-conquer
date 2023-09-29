import { createContext } from 'react';
import { io, Socket } from 'socket.io-client';

let url: string = process.env.REACT_APP_BACKEND_LOCALHOST || 'http://localhost:3000';

if (process.env.NODE_ENV === "production") {
  url = process.env.REACT_APP_PRODUCTION_URL || 'http://your-production-url';
}

export const socket: Socket = io(url);
export const SocketContext = createContext<Socket | null>(null);