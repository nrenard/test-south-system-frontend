import { runSaga } from "redux-saga";

import { loginRequest } from "../../store/sagas/user.js";

import { Creators as UserActions } from "../../store/ducks/user";

describe("Saga user", () => {
  it("should be able to login success", async () => {
    const dispatched = [];
    const payload = { nickname: "dragon", password: "123456" };

    await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      loginRequest,
      { payload }
    ).toPromise();

    expect(dispatched).toContainEqual(
      UserActions.loginRequestSuccess({ nickname: payload.nickname })
    );
  });

  it("should be able to login failed", async () => {
    const dispatched = [];
    const payload = { nickname: "1", password: "1" };

    await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      loginRequest,
      { payload }
    ).toPromise();

    expect(dispatched).toContainEqual(UserActions.loginRequestError());
  });
});
