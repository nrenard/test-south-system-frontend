import styled from "styled-components";

import { simpleFlex } from "../../styles/mixins";

export const Container = styled.div``;

export const List = styled.ul`
  ${simpleFlex};
  flex-wrap: wrap;
  list-style: none;
`;

export const Dragon = styled.li`
  ${simpleFlex};
  width: 100%;
  padding: 0 20px;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 40px;

  strong {
    color: ${({ theme }) => theme.lightGray};
    display: block;
    margin-bottom: ${({ theme }) => `${theme.baseMargin}px`};
  }

  span {
    font-size: 12px;
    color: #fff;
  }

  @media (min-width: 768px) {
    margin-bottom: 40px;
    width: 25%;
  }
`;

export const DragonImgWrapper = styled.div`
  ${simpleFlex};
  justify-content: center;
  background-color: ${({ theme }) => theme.lightGray};
  width: 110px;
  height: 100px;
  border-radius: ${({ theme }) => `${theme.baseRadius}px`};
  margin-bottom: ${({ theme }) => `${theme.baseMargin * 2}px`};
`;

export const DragonImg = styled.img`
  width: 80px;
`;
