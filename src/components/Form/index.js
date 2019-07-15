import React from 'react';
import PropTypes from 'prop-types';

import { FormStyles } from './styles';

function Form({ children, ...props }) {
  return <FormStyles {...props}>{children}</FormStyles>;
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
    .isRequired,
};

export default Form;
