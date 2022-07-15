import React from "react";
import { Nav } from "react-bootstrap";
// css

const NavLink = (props) => {
  const { href: inputHref, labelLink: inputLabelLink } = props;
  return (
    <>
      <Nav.Link href={inputHref} className="mx-5">
        {inputLabelLink}
      </Nav.Link>
    </>
  );
};

export default NavLink;
