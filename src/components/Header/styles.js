import styled from 'styled-components';

import { container, simpleFlex } from '../../styles/mixins';

export const HeaderStyles = styled.header`
  padding: ${({ theme }) => `${theme.basePadding * 2}px 0`};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: ${({ theme }) => `${theme.baseMargin * 5}px`};
`;

export const Container = styled.div`
  ${container};
  ${simpleFlex};
  justify-content: ${({ hasUser }) => (hasUser ? 'space-between' : 'center')};
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Logo = styled.img`
  width: 100px;
`;

export const Logout = styled.div`
  ${simpleFlex};
  cursor: pointer;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  text-transform: uppercase;
  opacity: 0;
  transition: opacity 0.2s ease;
`;

export const UserWrapper = styled.div`
  ${simpleFlex};
  margin-top: ${({ theme }) => `${theme.baseMargin * 3}px`};
  padding: ${({ theme }) => `${theme.basePadding - 5}px`};
  border-radius: ${({ theme }) => `${theme.baseRadius * 2}px`};
  background-color: ${({ theme }) => theme.lightGray};

  &:hover {
    ${Logout} {
      opacity: 1;
    }
  }

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${({ theme }) => `${theme.baseMargin}px`};
  font-size: 16px;
  color: #fff;
`;

export const UserImage = styled.div`
  ${simpleFlex};
  justify-content: center;
  position: relative;
  border-radius: ${({ theme }) => `${theme.baseRadius * 2}px`};
  background-color: ${({ theme }) => theme.lightGray};
  width: 80px;
  height: 80px;
  margin-left: 0;
  overflow: hidden;

  img {
    width: 60%;
  }
`;
