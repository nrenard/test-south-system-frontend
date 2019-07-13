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
  justify-content: center;
  flex-direction: column;
  margin-bottom: 40px;
  text-align: center;
  padding: ${({ theme }) => `0 ${theme.basePadding}px`};

  a {
    width: 100%;
    background-color: ${({ theme }) => theme.secondaryColor};
    border-radius: ${({ theme }) => `${theme.baseRadius * 2}px`};
    padding: ${({ theme }) => `${theme.basePadding}px`};
    transition: 0.2s box-shadow ease;

    &:hover {
      box-shadow: ${({ theme }) => `${theme.lightGray} 0px 0px 30px`};
    }
  }

  strong {
    color: ${({ theme }) => theme.lightGray};
    display: block;
    margin-bottom: ${({ theme }) => `${theme.baseMargin}px`};
  }

  span {
    font-size: 14px;
    color: #fff;
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    margin-bottom: 40px;
    width: 25%;
  }
`;

export const DragonImgWrapper = styled.div`
  ${simpleFlex};
  margin: auto;
  justify-content: center;
  width: 110px;
  height: 100px;
  border-radius: ${({ theme }) => `${theme.baseRadius}px`};
  margin-bottom: ${({ theme }) => `${theme.baseMargin * 2}px`};
`;

export const DragonImg = styled.img`
  width: 80px;
`;
