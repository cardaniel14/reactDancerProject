import { Nav, NavLink, Bars, NavMenu, NavClose } from "./NavbarElements";
import { useState } from "react";
// import "./NavBar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Nav>
        <NavLink to="https://www.instagram.com/paolavas/ " target="_blank">
          <h1>Paola Vasconcelos</h1>
        </NavLink>
        {isOpen ? (
          <NavClose onClick={toggleMenu} />
        ) : (
          <Bars onClick={toggleMenu} />
        )}

        <NavMenu isOpen={isOpen}>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/articles">Articles</NavLink>
          <NavLink to="/contact-me">Contact</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
