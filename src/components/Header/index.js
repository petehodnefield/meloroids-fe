import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoFull from "../../assets/logo/meloroids.png";
import logoSmall from "../../assets/logo/logo-small.png";
import "./Header.css";
import NavLinks from "./components/NavLinks";
import Hamburger from "./components/Hamburger";
import HamburgerLinks from "./components/HamburgerLinks";
const Header = ({ navSelected, setNavSelected }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      {" "}
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen}></Hamburger>
      {isOpen ? (
        <HamburgerLinks
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          navSelected={navSelected}
          setNavSelected={setNavSelected}
        ></HamburgerLinks>
      ) : (
        ""
      )}
      <div className="nav">
        <div className="logo-wrapper">
          <Link className="home-link" to={`/`}>
            <img
              onClick={() => setNavSelected("Home")}
              className="logo-small"
              src={require("../../assets/logo/logo-small.png")}
            />
          </Link>
        </div>
        <NavLinks
          navSelected={navSelected}
          setNavSelected={setNavSelected}
        ></NavLinks>
      </div>
    </div>
  );
};
export default Header;
