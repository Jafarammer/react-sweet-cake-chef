import React from "react";
import PropTypes from "prop-types";

const TextHeader = (props) => {
  const { title, desc } = props;
  return (
    <>
      <h2 className="text-center mt-5 text-warning">{title}</h2>
      <p className="text-center mt-4 mb-5 text-secondary">{desc}</p>
    </>
  );
};

TextHeader.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

TextHeader.defaultProps = {
  title: "Unknown title",
  desc: "Unknown description",
};

export default TextHeader;
