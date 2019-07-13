import { all, takeLatest, put } from "redux-saga/effects";
import * as notifier from "../../../helpers/notifier";

import history from "../../../services/history";

import { setUserSession, removeUser } from "../../../services/auth";

import { Types, Creators as UserActions } from "../../ducks/user";

const userNickname = "dragon";
const userPassword = "123456";

export function* loginRequest({ payload }) {
  const { nickname, password } = payload;

  if (nickname === userNickname && userPassword === password) {
    delete payload.password;

    setUserSession("123456", payload);

    yield put(UserActions.loginRequestSuccess(payload));
    history.push("/");

    notifier.success("Sucesso ao fazer login!");
  } else {
    yield put(UserActions.loginRequestError());
    notifier.error("Apelido ou senha incorretos!");
  }
}

export function logoutRequest() {
  removeUser();
  history.push("/login");
}

export default function* userSaga() {
  yield all([
    takeLatest(Types.LOGIN_REQUEST, loginRequest),
    takeLatest(Types.LOGOUT_REQUEST, logoutRequest)
  ]);
}
