import styled from 'styled-components';

import { simpleFlex } from '../../styles/mixins';

import { Container as ContainerLoader, LoaderStyles } from '../Loader/styles';

export const Container = styled.div``;

export const ButtonStyles = styled.button`
  ${simpleFlex};
  width: ${({ width }) => width};
  text-transform: uppercase;
  color: #fff;
  background-color: ${({ theme, color }) => color || theme.secondaryColor};
  border-radius: 4px;
  padding: ${({ theme }) => `${theme.basePadding}px`};
  border: 0;
  font-weight: 900;
  transition: 0.2s opacity ease-in, 0.2s transform ease-in;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.98);
  }

  ${ContainerLoader} {
    margin: 0 auto;
  }

  ${LoaderStyles} {
    ${simpleFlex};
    justify-content: center;
    width: 15px;
    height: 15px;
    border-top-color: #fff;
  }
`;
