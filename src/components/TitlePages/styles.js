import styled from 'styled-components';

import { simpleFlex } from '../../styles/mixins';

export const Container = styled.header`
  ${simpleFlex};
  flex-direction: column;
  justify-content: space-between;
  margin: ${({ theme }) => `${theme.baseMargin * 2}px 0 ${theme.baseMargin * 3}px`};

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Title = styled.h1`
  text-transform: uppercase;
  color: ${({ theme }) => theme.lightGray};
  margin-bottom: ${({ theme }) => `${theme.baseMargin * 2}px`};

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;
