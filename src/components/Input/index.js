import React from "react";
import PropTypes from "prop-types";

import { Container, InputStyle } from "./styles";

const Input = props => (
  <Container>
    <InputStyle {...props} />
  </Container>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string
};

Input.defaultProps = {
  type: "text",
  placeholder: ""
};

export default Input;
