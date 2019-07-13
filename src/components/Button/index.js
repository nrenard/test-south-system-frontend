import React from "react";
import PropTypes from "prop-types";

import { Container, ButtonStyles } from "./styles";

const Button = ({ type, children, width }) => (
  <Container>
    <ButtonStyles type={type} width={width}>
      {children}
    </ButtonStyles>
  </Container>
);

Button.propTypes = {
  type: PropTypes.string,
  width: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired
};

Button.defaultProps = {
  type: "submit"
};

export default Button;
