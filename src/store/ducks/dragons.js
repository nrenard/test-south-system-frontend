export const Types = {
  GET_DRAGONS: '@dragons/GET_DRAGONS',
  SET_DRAGONS_SUCCESS: '@dragons/SET_DRAGONS_SUCCESS',

  ADD_DRAGON: '@dragons/ADD_DRAGON',
  ADD_DRAGON_SUCCESS: '@dragons/ADD_DRAGON_SUCCESS',

  DELETE_DRAGON: '@dragons/DELETE_DRAGON',
  DELETE_DRAGON_SUCCESS: '@dragons/DELETE_DRAGON_SUCCESS',

  UPDATE_DRAGON: '@dragons/UPDATE_DRAGON',
  UPDATE_DRAGON_SUCCESS: '@dragons/UPDATE_DRAGON_SUCCESS',

  DRAGONS_ERROR: '@dragons/DRAGONS_ERROR',
};

export const INITIAL_STATE = {
  list: [],
  loading: false,
};

export const Creators = {
  getDragons: () => ({
    type: Types.GET_DRAGONS,
  }),
  setDragonsSuccess: payload => ({
    type: Types.SET_DRAGONS_SUCCESS,
    payload,
  }),

  addDragon: payload => ({
    type: Types.ADD_DRAGON,
    payload,
  }),
  addDragonSuccess: payload => ({
    type: Types.ADD_DRAGON_SUCCESS,
    payload,
  }),

  deleteDragon: payload => ({
    type: Types.DELETE_DRAGON,
    payload,
  }),
  deleteDragonSuccess: payload => ({
    type: Types.DELETE_DRAGON_SUCCESS,
    payload,
  }),

  updateDragon: payload => ({
    type: Types.UPDATE_DRAGON,
    payload,
  }),
  updateDragonSuccess: payload => ({
    type: Types.UPDATE_DRAGON_SUCCESS,
    payload,
  }),

  dragonsError: () => ({
    type: Types.DRAGONS_ERROR,
  }),
};

export default function dragons(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case Types.GET_DRAGONS:
      return { ...state, loading: true };

    case Types.SET_DRAGONS_SUCCESS:
      return {
        ...state,
        loading: false,
        list: payload,
      };

    case Types.ADD_DRAGON:
      return {
        ...state,
        loading: true,
      };

    case Types.ADD_DRAGON_SUCCESS:
      return {
        ...state,
        loading: false,
        list: [...state.list, payload],
      };

    case Types.DELETE_DRAGON:
      return { ...state, loading: true };

    case Types.DELETE_DRAGON_SUCCESS:
      return {
        ...state,
        loading: false,
        list: state.list.filter(dragon => dragon.id !== payload.id),
      };

    case Types.UPDATE_DRAGON:
      return { ...state, loading: true };

    case Types.UPDATE_DRAGON_SUCCESS:
      return {
        ...state,
        loading: false,
        list: state.list.map((dragon) => {
          if (dragon.id === payload.id) {
            return {
              ...dragon,
              ...payload,
            };
          }

          return dragon;
        }),
      };

    case Types.DRAGONS_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
