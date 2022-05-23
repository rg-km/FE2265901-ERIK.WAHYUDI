import "./App.css"
import React from "react";
// TODO: answer here
import Navbar from "./components/Navbar"
import PostCard from "./components/PostCard"
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import Profile from "./components/Profile"
// import UploadForm from "./components/UploadForm"
// import SessionContext from "./context/SessionContext"

function App() {

  // TODO: answer here

  return (
    <div aria-label="App" className="App">
      <h1 aria-label="App Title">IG Clone</h1>
      
    <div className="ImportItem">
        <Navbar />
        <PostCard />
    </div>

    <div className="routes" aria-label="routes">

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Profile" element={<Profile />} />
    </Routes>

    </div>


  </div>
    
  );
}

export default App