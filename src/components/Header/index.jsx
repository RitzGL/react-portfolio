import React from "react";
import "./styles.css";
// This function will return a header
// Appears on multiple pages
// contains links to the other pages

function Header() {
  return (
    <header>
      <nav className='navigation'>
        <div className='heading'>
          <h1>RitzGL</h1>
          <h3>Web Developer</h3>
        </div>
        <ul>
          <li>
            <a href="/About"> About </a>
          </li>
          <li>
            <a href="/projects"> Projects </a>
          </li>
          <li>
            <a href="/contact"> Contact </a>
          </li>
          <li>
            <a
              href="../../../public/assets/Developer Resume.pdf"
              download="Resume"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
