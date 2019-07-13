import { setItem, getItem, removeItem } from "./storage";

const token = "token";
const user = "user";

export const isAuthenticated = () => {
  const tokenStorage = getItem(token);

  if (tokenStorage) {
    if (tokenStorage === "123456") {
      return tokenStorage;
    }

    removeUser();
  }

  return null;
};

export const getUser = () => getItem(user);

export const setUserSession = (tokenValue, userValue) => {
  setItem(token, tokenValue);
  setItem(user, userValue);
};

export const removeUser = () => {
  removeItem(token);
  removeItem(user);
};
