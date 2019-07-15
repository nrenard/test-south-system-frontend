import React from 'react';
import PropTypes from 'prop-types';

import { Container, InputStyle } from './styles';

function Input(props) {
  return (
    <Container>
      <InputStyle {...props} />
    </Container>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
