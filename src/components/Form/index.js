import React from "react";

import { FormStyles } from "./styles";

const Form = ({ children, ...props }) => (
  <FormStyles {...props}>{children}</FormStyles>
);

export default Form;
