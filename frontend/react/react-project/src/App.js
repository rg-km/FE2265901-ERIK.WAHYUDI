import "./App.css"
import React from "react"
// TODO: answer here
import LikeDislikeButton from "./components/LikeDislikeButton"
import Navbar from "./components/Navbar"
import PostCard from "./components/PostCard"
import Profile from "./components/Profile"
import UploadForm from "./components/UploadForm"


function App() {
  // TODO: answer here
  return (
    <div aria-label="App" className="App">
      <h1 aria-label="App Title">IG Clone</h1>
      <div className="ImportItem">
        <Navbar />
        <PostCard />
      </div>
      <div className="ImportItem">
        <Profile />
      </div>
      <div className="ImportItem">
        <UploadForm />
      </div>
      <div className="ImportItem">
        <LikeDislikeButton />
      </div>
    </div>
  )
}

export default App