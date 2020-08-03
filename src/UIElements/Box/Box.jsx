import React from "react";
import PropTypes from "prop-types";

import "./Box.scss";

export const blockName = "box-wrapper";

const Box = ({ children, className }) => (
  <div className={`${blockName} ${className}`}>{children}</div>
);

Box.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Box.defaultProps = {
  className: "",
};

export default Box;
