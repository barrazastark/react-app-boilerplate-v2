import React from "react";
import PropTypes from "prop-types";

import { FormGroup, ControlLabel, FormControl } from "rsuite";

import "./TextField.scss";

export const blockName = "text-field-wrapper";

const TextField = ({
  label,
  name,
  value,
  onChange,
  size,
  placeholder,
  type,
  className,
}) => {
  return (
    <FormGroup className={`${blockName} ${className}`}>
      {label && <ControlLabel>{label}</ControlLabel>}
      <FormControl
        type={type}
        size={size}
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
      />
    </FormGroup>
  );
};

TextField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  size: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

TextField.defaultProps = {
  label: "",
  name: "",
  onChange: () => {},
  size: "lg",
  placeholder: "",
  type: "text",
  className: "",
};

export default TextField;
