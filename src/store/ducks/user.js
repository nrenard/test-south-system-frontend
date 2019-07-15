export const Types = {
  LOGIN_REQUEST: '@user/LOGIN_REQUEST',
  LOGIN_REQUEST_SUCCESS: '@user/LOGIN_REQUEST_SUCCESS',
  LOGIN_REQUEST_ERROR: '@user/LOGIN_REQUEST_ERROR',

  LOGOUT_REQUEST: '@user/LOGOUT_REQUEST',
};

export const INITIAL_STATE = {
  detail: null,
  loading: false,
};

export const Creators = {
  loginRequest: payload => ({
    type: Types.LOGIN_REQUEST,
    payload,
  }),
  loginRequestSuccess: payload => ({
    type: Types.LOGIN_REQUEST_SUCCESS,
    payload,
  }),

  loginRequestError: () => ({
    type: Types.LOGIN_REQUEST_ERROR,
  }),

  logoutRequest: () => ({ type: Types.LOGOUT_REQUEST }),
};

export default function user(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case Types.LOGIN_REQUEST:
      return { ...state, loading: true };

    case Types.LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        detail: payload,
      };

    case Types.LOGIN_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
      };

    case Types.LOGOUT_REQUEST:
      return INITIAL_STATE;

    default:
      return state;
  }
}
