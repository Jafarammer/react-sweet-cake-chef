import React from "react";

const NavLink = (props) => {
  const {
    className: inputClassName,
    href: inputHref,
    labelLink: inputLabelLink,
  } = props;
  return (
    <>
      <a className={inputClassName} href={inputHref}>
        {inputLabelLink}
      </a>
    </>
  );
};

export default NavLink;
