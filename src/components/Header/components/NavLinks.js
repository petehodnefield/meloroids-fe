import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Login } from "../../../pages/Login";

const NavLinks = ({ navSelected, setNavSelected }) => {
  return (
    <div className="nav-links-wrapper">
      <ul className="nav__ul">
        <li>
          <Link
            onClick={() => setNavSelected("Home")}
            className={`p1 ${navSelected === "Home" ? "selected__nav" : ""}`}
            to="/"
          >
            Home
          </Link>
        </li>
        <li onClick={() => setNavSelected("Train")}>
          <Link
            className={`p1 ${navSelected === "Train" ? "selected__nav" : ""}`}
            to="/train"
          >
            Train
          </Link>
        </li>
        {/* <li>
          <a
            onClick={() => setNavSelected("Learn")}
            className={`p1 ${navSelected === "Learn" ? "selected__nav" : ""}`}
            href="/learn"
          >
            Learn
          </a>
        </li>

        <li>
          <a
            onClick={() => setNavSelected("Stats")}
            className={`p1 ${navSelected === "Stats" ? "selected__nav" : ""}`}
            href="/stats"
          >
            Stats
          </a>
        </li>
        <li>
          <a
            href="/login"
            onClick={() => setNavSelected("Login")}
            className="pill btn-tertiary p1"
          >
            Login
          </a>
        </li> */}
      </ul>
    </div>
  );
};

export default NavLinks;
