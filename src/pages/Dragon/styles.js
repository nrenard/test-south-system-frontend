import styled from "styled-components";

import { simpleFlex, container } from "../../styles/mixins";

export const Container = styled.div`
  ${container};
  padding-bottom: ${({ theme }) => `${theme.basePadding * 2}px`};
`;

export const WrapperButtons = styled.div`
  ${simpleFlex};
  justify-content: space-between;
  width: 100%;
`;
