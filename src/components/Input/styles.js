import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const InputStyle = styled.input`
  width: 100%;
  padding: ${({ theme }) => `${theme.basePadding}px`};
  height: 50px;
  border-radius: ${({ theme }) => `${theme.baseRadius}px`};
  background-color: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.5);
  font-size: 14px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;
