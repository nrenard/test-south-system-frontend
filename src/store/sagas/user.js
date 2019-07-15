import { all, takeLatest, put } from 'redux-saga/effects';

import history from '../../services/history';
import * as notifier from '../../services/notifier';

import { setUserSession, removeUser } from '../../helpers/auth';

import { Types, Creators as UserActions } from '../ducks/user';

const userNickname = 'dragon';
const userPassword = '123456';

export function* loginRequest({ payload }) {
  const { nickname, password } = payload;

  if (nickname === userNickname && userPassword === password) {
    setUserSession('123456', { nickname });

    yield put(UserActions.loginRequestSuccess({ nickname }));
    history.push('/');

    notifier.success('Sucesso ao fazer login!');
  } else {
    yield put(UserActions.loginRequestError());
    notifier.error('Apelido ou senha incorretos!');
  }
}

export function logoutRequest() {
  removeUser();
  history.push('/login');
}

export default function* userSaga() {
  yield all([
    takeLatest(Types.LOGIN_REQUEST, loginRequest),
    takeLatest(Types.LOGOUT_REQUEST, logoutRequest),
  ]);
}
