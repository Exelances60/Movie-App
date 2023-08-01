import { MOVIE_ACTION_TYPES } from "./movieApi.types";

const INITIAL_STATE = {
  selectMovie: [], // Boş dizi olarak güncellendi
  movie: [], // Boş dizi olarak güncellendi
  query: "batman",
  pickMovie: {},
  imbdData: {},
  closeCart: false,
  isLoading: false,
  error: null,
};

export const movieReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case MOVIE_ACTION_TYPES.SET_SELECT_MOVIE:
      return { ...state, selectMovie: payload };
    case MOVIE_ACTION_TYPES.FETCH_MOVIE_START:
      return { ...state, isLoading: true };
    case MOVIE_ACTION_TYPES.FETCH_MOVIE_SUCCESS: // 'SUCCES' -> 'SUCCESS' olarak düzeltildi
      return { ...state, movie: payload, isLoading: false };
    case MOVIE_ACTION_TYPES.FETCH_MOVIE_FAILED:
      return { ...state, error: payload, isLoading: false };
    case MOVIE_ACTION_TYPES.SET_QUERY:
      return { ...state, query: payload };
    case MOVIE_ACTION_TYPES.SET_PİCKMOVİE:
      return { ...state, pickMovie: payload };
    case MOVIE_ACTION_TYPES.SET_IMDBDATA:
      return { ...state, imbdData: payload };
    case MOVIE_ACTION_TYPES.SET_CLOSERCART:
      return { ...state, closeCart: payload };
    default:
      return state;
  }
};
