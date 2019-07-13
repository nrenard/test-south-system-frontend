import styled from "styled-components";

export const Container = styled.header`
  margin: ${({ theme }) => `${theme.baseMargin}px 0 ${theme.baseMargin * 3}px`};
`;

export const Title = styled.h1`
  text-transform: uppercase;
`;
