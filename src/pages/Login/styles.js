import styled from "styled-components";

import { container } from "../../styles/mixins";

export const Container = styled.div`
  ${container};
  margin-top: ${({ theme }) => `${theme.baseMargin}px`};
`;
