import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Game from "../src/pages/Game";
import Splash from "../src/pages/Splash";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Splash />}></Route>
          <Route path="/game" element={<Game />}></Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
