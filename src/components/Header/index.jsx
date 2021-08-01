import React from "react";
import "./styles.css";
import Navigation from "../Navigation";
// This function will return a header
// Appears on multiple pages
// contains links to the other pages

function Header() {
  return (
    <header className='navigation'>
        <div className='heading'>
          <h1>RitzGL</h1>
          <h4>Web Dev</h4>
        </div>
        <Navigation />
     
    </header>
  );
}

export default Header;
