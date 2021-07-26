import React from "react";
import './styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
// Function returns a footer element
// Links to:
// GitHub
// LinkedIn
// StackOverflow (maybe?)

function Footer() {
  const email = "ritz.gl.developer@outlook.com";
  const linkedIn =
    "https://www.linkedin.com/in/mauricio-garzon-lara-927454206/";
  const github = "https://github.com/RitzGL";
  return (
    <section>
      <ul>
        <li>
          <a href={'mailto:' + email}>
            <FontAwesomeIcon icon={faEnvelopeSquare} size='3x'/>
          </a>
        </li>
        <li>
          <a href={linkedIn}>
            <FontAwesomeIcon icon={faBriefcase} size='3x'/>
          </a>
        </li>
        <li>
          <a href={github}>
            <FontAwesomeIcon icon={faCode} size='3x'/>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Footer;
