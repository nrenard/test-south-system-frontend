import styled from "styled-components";

import { Container as ContainerInput } from "../Input/styles";
import { Container as ContainerButton } from "../Button/styles";

export const FormStyles = styled.form`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin: auto;
  width: 100%;
  max-width: 500px;

  ${ContainerInput} {
    margin-bottom: ${({ theme }) => `${theme.baseMargin * 2}px`};
  }

  ${ContainerButton} {
    margin-top: ${({ theme }) => `${theme.baseMargin * 2}px`};
  }
`;
