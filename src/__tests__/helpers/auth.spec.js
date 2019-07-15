import {
  isAuthenticated, getUser, setUserSession, removeUser,
} from '../../helpers/auth';

const mockUser = { nickname: 'dragon' };

describe('Helper auth', () => {
  it('should be able getUser', () => {
    const getItemMock = jest.fn().mockReturnValue(JSON.stringify(mockUser));

    global.localStorage.__proto__.getItem = getItemMock;

    const user = getUser('user');

    expect(user.nickname).toBe(mockUser.nickname);
    expect(getItemMock).toHaveBeenLastCalledWith('user');
  });

  it('shold be able to verify authenticated', () => {
    const getItemMock = jest.fn().mockReturnValue(JSON.stringify('123456'));

    global.localStorage.__proto__.getItem = getItemMock;

    const authenticated = isAuthenticated();

    expect(authenticated).toBe('123456');
  });

  it('shold be able to verify not authenticated', () => {
    const getItemMock = jest.fn().mockReturnValue(JSON.stringify('1'));

    global.localStorage.__proto__.getItem = getItemMock;

    const authenticated = isAuthenticated();

    expect(authenticated).toBe(null);
  });

  it('should be able to remove user', () => {
    const removeItemMock = jest.fn();

    global.localStorage.__proto__.removeItem = removeItemMock;

    removeUser();

    expect(removeItemMock.mock.calls.length).toBe(2);
    expect(removeItemMock).toHaveBeenCalledWith('user');
    expect(removeItemMock).toHaveBeenCalledWith('token');
  });

  it('should be able to set user session', () => {
    const setItemMock = jest.fn();

    global.localStorage.__proto__.setItem = setItemMock;

    setUserSession('123456', 'dragon');

    expect(setItemMock.mock.calls.length).toBe(2);
    expect(setItemMock).toHaveBeenCalledWith('token', JSON.stringify('123456'));
    expect(setItemMock).toHaveBeenCalledWith('user', JSON.stringify('dragon'));
  });
});
