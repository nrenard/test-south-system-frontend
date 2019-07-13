export const Types = {
  GET_DRAGONS: "@dragons/GET_DRAGONS",
  GET_DRAGONS_SUCCESS: "@dragons/GET_DRAGONS"
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
        list: state.list
      };

    default:
      return state;
  }
}
