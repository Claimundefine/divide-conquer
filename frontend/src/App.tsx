import React from 'react';
import logo from './logo.svg';
import './App.css';
import { socket, SocketContext } from './context/socket';

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Added Socket LMAO
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </SocketContext.Provider>
  );
}

export default App;
