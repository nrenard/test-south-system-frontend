import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import withUser from '../../containers/user';

import {
  HeaderStyles, Container, Logo, UserWrapper, UserImage, UserInfo, Logout,
} from './styles';

import logo from '../../images/logo.svg';
import userImage from '../../images/user.svg';

function Header({ user: { detail }, logoutRequest }) {
  const handleLogout = useCallback(() => {
    logoutRequest();
  }, [logoutRequest]);

  return (
    <HeaderStyles>
      <Container hasUser={detail}>
        <Link to="/">
          <Logo src={logo} alt="Dragons" />
        </Link>

        {detail && (
          <UserWrapper>
            <UserImage>
              <Logout onClick={handleLogout}>sair</Logout>

              <img src={userImage} alt="Usuário" />
            </UserImage>

            <UserInfo>
              <strong>{detail.nickname}</strong>
            </UserInfo>
          </UserWrapper>
        )}
      </Container>
    </HeaderStyles>
  );
}

Header.propTypes = {
  logoutRequest: PropTypes.func.isRequired,
  user: PropTypes.shape({
    detail: PropTypes.shape({ nickname: PropTypes.string }),
  }).isRequired,
};

export default withUser(Header);
