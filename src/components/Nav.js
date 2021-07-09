import React, { useState, useEffect } from "react";
import "../css/Nav.css";
import logo from "../logo.png";

function Nav() {
  const [navbarBlack, setNavbarBlack] = useState(false);
  const [navbarLink, setNavbarLink] = useState({
    Home: null,
    TV: null,
    Movie: null,
    New: null,
    List: null,
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setNavbarBlack(true);
      } else setNavbarBlack(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const handleClicked = (e) => {
    switch (
      e.target.value
      // case 'Home': setNavbarLink({navbarBlack });break;
    ) {
    }
  };

  return (
    <nav className={`${navbarBlack && "nav_black"}`}>
      <div className="nav_container">
        <div className="nav_menu">
          <img className="nav_logo" src={logo} alt="netflix_logo" />
          <ul>
            <li>
              <a href="#" onClick={handleClicked}>
                Home
              </a>
            </li>
            <li>
              <a href="#" onClick={handleClicked}>
                TV Shows
              </a>
            </li>
            <li>
              <a href="#" onClick={handleClicked}>
                Movies
              </a>
            </li>
            <li>
              <a href="#" onClick={handleClicked}>
                New & Popular
              </a>
            </li>
            <li>
              <a href="#" onClick={handleClicked}>
                My List
              </a>
            </li>
          </ul>
        </div>

        <img
          className="nav_avatar"
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt="avatar"
        />
      </div>
    </nav>
  );
}

export default Nav;
