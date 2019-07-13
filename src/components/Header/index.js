import React from "react";
import { Link } from "react-router-dom";

import {
  HeaderStyles,
  Container,
  Logo,
  UserWrapper,
  UserImage,
  UserInfo,
  Logout
} from "./styles";

import logo from "../../images/logo.svg";
import user from "../../images/user.svg";

const Header = () => {
  const user = false;

  return (
    <HeaderStyles>
      <Container hasUser={user}>
        <Link to="/">
          <Logo src={logo} alt="Dragons" />
        </Link>

        {user && (
          <UserWrapper>
            <UserImage>
              <Logout>sair</Logout>
              <img src={user} alt="Usuário" />
            </UserImage>

            <UserInfo>
              <strong>nicolasrenard1999@gmail.com</strong>
              <strong>Nicolas Renard</strong>
            </UserInfo>
          </UserWrapper>
        )}
      </Container>
    </HeaderStyles>
  );
};

export default Header;
