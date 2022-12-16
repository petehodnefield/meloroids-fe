import React from "react";
import { Link } from "react-router-dom";

const HamburgerLinks = ({ isOpen, setIsOpen, navSelected, setNavSelected }) => {
  return (
    <div className="hamburger-links-wrapper">
      <ul className="hamNav__list">
        <li className="hamNav__li">
          <Link
            to="/"
            onClick={() => setNavSelected("Home")}
            className=" hamNav__a"
          >
            Home
          </Link>
        </li>
        <li className="hamNav__li">
          <Link
            to="/train"
            onClick={() => setNavSelected("Train")}
            className=" hamNav__a"
          >
            Train
          </Link>
        </li>
        {/* <li className="hamNav__li">
          <a
            href="/learn"
            onClick={() => setNavSelected("Learn")}
            className=" hamNav__a"
          >
            Learn
          </a>
        </li>
        <li className="hamNav__li">
          <a
            href="/stats"
            onClick={() => setNavSelected("Stats")}
            className=" hamNav__a"
          >
            Stats
          </a>
        </li> */}
      </ul>
      <ul className="hamNav__list2 ">
        {/* <li className="hamNav__li">
          <a className=" hamNav__a">My Account</a>
        </li> */}
        <li className="hamNav__li">
          <a href="/login" className=" hamNav__a">
            Login (Coming Soon)
          </a>
        </li>
      </ul>
    </div>
  );
};
export default HamburgerLinks;
