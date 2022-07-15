import React from "react";
import { Nav } from "react-bootstrap";
// atom
import NavLink from "../atom/NavLink";

const NavRight = () => {
  return (
    <>
      <Nav className="d-flex justify-content-center">
        {/* login */}
        <NavLink href="/login" labelLink="Login" />
      </Nav>
    </>
  );
};

export default NavRight;
