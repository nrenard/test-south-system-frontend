import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
`;

export const InputStyle = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.basePadding};
  height: 50px;
  border-radius: ${({ theme }) => theme.baseRadius};
  background-color: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.5);
  font-size: 14px;

  &::placeholder {
    color: #fff;
  }
`;
