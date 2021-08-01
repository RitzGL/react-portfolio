import React from "react";
import "./styles.css"

// This function will return a navbar-like element
// Title/logo
// About Me
// Portfolio
// Contact
// Resume
// This component will be the child of the header

function Navigation() {
  return (
    <aside>
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
              href="ritz-developer-resume.pdf"
              download
            >
              Resume
            </a>
          </li>
        </ul>
    </aside>
  );
}

export default Navigation;
