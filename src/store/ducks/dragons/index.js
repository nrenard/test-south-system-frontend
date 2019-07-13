export const Types = {
  GET_DRAGONS: "@dragons/GET_DRAGONS",
  GET_DRAGONS_SUCCESS: "@dragons/GET_DRAGONS_SUCCESS",
  GET_DRAGONS_ERROR: "@dragons/GET_DRAGONS_ERROR",

  ADD_DRAGON: "@dragons/ADD_DRAGON",
  ADD_DRAGON_SUCCESS: "@dragons/ADD_DRAGON_SUCCESS"
};

export const INITIAL_STATE = {
  list: null,
  loading: false
};

export const Creators = {
  getDragons: () => ({
    type: Types.GET_DRAGONS
  }),
  getDragonsSuccess: payload => ({
    type: Types.GET_DRAGONS_SUCCESS,
    payload
  })
};

export default function dragons(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case Types.GET_DRAGONS:
      return { ...state, loading: true };

    case Types.GET_DRAGONS_SUCCESS:
      return {
        ...state,
        loading: false,
        list: payload
      };

    case Types.GET_DRAGONS_ERROR:
      return {
        ...state,
        loading: false
      };

    case Types.ADD_DRAGON:
      return {
        ...state,
        loading: true
      };

    case Types.ADD_DRAGON_SUCCESS:
      return {
        ...state,
        loading: false,
        list: [payload, ...state.list]
      };

    default:
      return state;
  }
}
