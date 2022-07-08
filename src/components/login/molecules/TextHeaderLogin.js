import React from "react";
import PropTypes from "prop-types";

const TextHeaderLogin = (props) => {
  const { title, desc } = props;
  return (
    <>
      <h2 className="text-warning">{title}</h2>
      <p className="mb-5 text-secondary">{desc}</p>
    </>
  );
};

TextHeaderLogin.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

TextHeaderLogin.defaultProps = {
  title: "Unknown title",
  desc: "Unknown description",
};

export default TextHeaderLogin;
