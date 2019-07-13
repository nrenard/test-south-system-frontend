import styled from "styled-components";

import { container } from "../../styles/mixins";

export const Container = styled.main`
  ${container};
  margin-top: ${({ theme }) => `${theme.baseMargin}px`};
`;
