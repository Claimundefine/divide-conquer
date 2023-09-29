import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SocketContext, socket } from './context/socketContext';
import Home from "./pages/Home/Home";
import Coding from "./pages/Coding/Coding";

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <div className="App">
      <Router>
            {/* <Navbar /> */}
            <Routes>
            <Route path="/coding/*" element={<Coding />} />
            <Route path="/" element={<Home />} />
             
          </Routes>
        </Router>
      </div>
    </SocketContext.Provider>
  );
}
export default App;
