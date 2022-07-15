import React from "react";
import { Nav } from "react-bootstrap";
// atom
import NavLink from "../atom/NavLink";

const NavLeft = () => {
  return (
    <>
      <Nav className={`me-auto px-5 py-3`}>
        {/* home */}
        <NavLink href="#" labelLink="Home" />
        {/* add recipe */}
        <NavLink href="/add" labelLink="Add Recipe" />
        {/* profile */}
        <NavLink href="#" labelLink="Profile" />
      </Nav>
    </>
  );
};

export default NavLeft;
