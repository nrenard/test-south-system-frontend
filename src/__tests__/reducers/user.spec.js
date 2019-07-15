import userReducer, { Creators as UsersActions, INITIAL_STATE } from '../../store/ducks/user';

const mockUser = { username: 'dragon' };

describe('Reducer user', () => {
  it('should be able to request login', () => {
    const store = userReducer(INITIAL_STATE, UsersActions.loginRequest());
    expect(store.loading).toBe(true);
  });

  it('should be able to request login success', () => {
    const store = userReducer(INITIAL_STATE, UsersActions.loginRequestSuccess(mockUser));

    expect(store.loading).toBe(false);
    expect(store.detail).toBe(mockUser);
  });

  it('should be able to login error', () => {
    const store = userReducer(
      { loading: true, ...INITIAL_STATE },
      UsersActions.loginRequestError(),
    );

    expect(store.loading).toBe(false);
  });

  it('should be able to request logout', () => {
    const store = userReducer({ detail: mockUser }, UsersActions.logoutRequest());

    expect(store.detail).toBe(null);
  });
});
