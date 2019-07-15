import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title } from './styles';

function TitlePages({ title, children }) {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
}

TitlePages.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default TitlePages;
