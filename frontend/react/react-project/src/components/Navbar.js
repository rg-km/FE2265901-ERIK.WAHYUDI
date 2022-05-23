import React, { useState } from "react"
import { getSession, auth } from "../api/auth"
// import { SessionContext } from "../context/SessionContext"

export default function Navbar() {
  // TODO: answer here

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const checkUser = async () => {
    const session = await getSession();
    if (session) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };    

  React.useEffect(() => {
    checkUser();
  }, []);

  return (
    <div className="navbar-component" aria-label="Navbar">
      <div className="navbar-wrapper">
        <div className="navbar-brand" aria-label="App Logo">
          <h1>Instagram</h1>
        </div>
        <div className="navbar-menu">
          <ul className="navbar-list">
            <li className="navbar-item">
              <a className="navbar-link" aria-label="App Title" href="/">Icon</a>
            </li>
            <li className="navbar-item">
              {
                isLoggedIn ?
                  <a className="navbar-link" aria-label="Profile" href="/profile">Profile John Doe</a>
                  :
                  <button className="navbar-link" aria-label="Login" onClick={
                    () => {
                      auth();
                    }
                  }>Login</button>

              }
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}