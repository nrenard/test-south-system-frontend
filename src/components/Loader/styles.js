import styled, { keyframes } from "styled-components";

import { simpleFlex } from "../../styles/mixins";

export const Container = styled.div`
  ${simpleFlex};
  justify-content: center;
  margin: 50px 0;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderStyles = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border-top: 1px solid ${({ theme }) => theme.secondaryColor};
  animation: ${rotate} 1s linear infinite;
`;
