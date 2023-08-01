import { ACTION_TRAILER } from "./trailer.types";
const INITIAL_STATE = {
  currentTrailer: [{}],
  watchOpen: false,
};

export const trailerReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TRAILER.SET_ACTION_TRAILER:
      return { ...state, currentTrailer: payload };
    case ACTION_TRAILER.SET_ACTION_WATCHED:
      return { ...state, watchOpen: payload };
    default:
      return state;
  }
};
