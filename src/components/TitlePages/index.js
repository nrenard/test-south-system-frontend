import React from "react";

import { Container, Title } from "./styles";

const TitlePages = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    {children}
  </Container>
);

export default TitlePages;
