import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Creators as UserActions } from '../../store/ducks/user';

import TitlePages from '../../components/TitlePages';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Loader from '../../components/Loader';

import { Container } from './styles';

function Login() {
  const [nickname, setNickName] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.user.loading);
  const dispatch = useDispatch();

  const sendForm = (event) => {
    if (event) event.preventDefault();
    if (loading) return;

    dispatch(UserActions.loginRequest({ nickname, password }));
  };

  return (
    <Container>
      <TitlePages title="Login" />

      <Form onSubmit={sendForm}>
        <Input
          placeholder="Seu apelido"
          name="nickname"
          onChange={event => setNickName(event.target.value)}
          value={nickname}
          required
          autoFocus
        />

        <Input
          placeholder="Sua senha"
          name="password"
          type="password"
          onChange={event => setPassword(event.target.value)}
          value={password}
          required
        />

        <Button width="80px">{!loading ? 'Entrar' : <Loader />}</Button>
      </Form>
    </Container>
  );
}

export default Login;
