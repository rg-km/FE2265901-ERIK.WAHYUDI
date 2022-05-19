// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const Home = () => (
  <div>
    <h1>Home</h1>
    <Link to="/about">Go to About page</Link>
  </div>
)

const About = () => (
  <div>
    <h1>About</h1>
    <Link to="/">Go to Home page</Link>
  </div>
)

const App = () => (
  <div className="App">
    <h1>Welcome to React Router!</h1>
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="about" element={<div>About</div>} />
    </Routes>
  </div>
);

export default App;