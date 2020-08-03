import React from "react";
import PropTypes from "prop-types";

import { Loader } from "rsuite";

import "./PageLoader.scss";

export const blockName = "page-loader-wrapper";

const PageLoader = ({ message }) => {
  return (
    <div className={blockName}>
      <Loader content={message} vertical center size="lg" />
    </div>
  );
};

PageLoader.propTypes = {
  message: PropTypes.string,
};

PageLoader.defaultProps = {
  message: "",
};

export default PageLoader;
