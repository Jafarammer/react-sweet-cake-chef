import React from "react";
// atom
import NavLink from "../atom/NavLink";

const NavList = (props) => {
  const {
    className: inputClassName,
    href: inputHref,
    labelLink: inputLabelLink,
  } = props;
  return (
    <>
      {/* Home */}
      <li className={inputClassName}>
        <NavLink
          className={inputClassName}
          href={inputHref}
          labelLink={inputLabelLink}
          //   aria-current="page"
        />
      </li>
    </>
  );
};
export default NavList;
