import { setItem, getItem, removeItem } from '../../helpers/storage';

describe('Helper storage', () => {
  it('should be able set item in local storage', () => {
    const setItemMock = jest.fn();

    global.localStorage.__proto__.setItem = setItemMock;

    setItem('token', '123456');

    expect(setItemMock).toHaveBeenLastCalledWith('token', JSON.stringify('123456'));
  });

  it('should be able get item in local storage', () => {
    const getItemMock = jest.fn().mockReturnValue('123456');

    global.localStorage.__proto__.getItem = getItemMock;

    getItem('token');

    expect(getItemMock.mock.results[0].value).toBe('123456');
  });

  it('should be able remove item in local storage', () => {
    const removeItemMock = jest.fn();

    global.localStorage.__proto__.removeItem = removeItemMock;

    removeItem('token');

    expect(removeItemMock).toHaveBeenLastCalledWith('token');
    expect(removeItemMock.mock.calls.length).toBe(1);
  });
});
