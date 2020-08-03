import React, { useRef } from "react";

import { Form as FormSuite } from "rsuite";

import "./Form.scss";

export const blockName = "form-wrapper";

const Form = ({ render, ...rest }) => {
  const formRef = useRef(null);

  return (
    <FormSuite {...rest} fluid ref={formRef}>
      {render(formRef)}
    </FormSuite>
  );
};

export default Form;
