import { AnyAction } from "redux";
import { MOVIE_ACTION_TYPES, MovieType, PickMovieType } from "./movieApi.types";
import {
  fetchMovieFailed,
  fetchMovieStart,
  fetchMovieSuccess,
  setCloseCart,
  setPickMovie,
  setQuery,
  setSelectMovie,
  setİmbdData,
} from "./movieApi.action";

export type MovieState = {
  closeCart: boolean;
  query: string;
  pickMovie: PickMovieType[];
  movie: MovieType[];
  error: Error | null;
  imdbData: PickMovieType[];
  isLoading: boolean;
  selectMovie: MovieType[];
};

const INITIAL_STATE: MovieState = {
  selectMovie: [],
  movie: [],
  query: "batman",
  pickMovie: [],
  imdbData: [],
  closeCart: false,
  isLoading: false,
  error: null,
};

export const movieReducer = (
  state = INITIAL_STATE,
  action = {} as AnyAction
) => {
  /*   const { type, payload } = action; */

  if (setSelectMovie.match(action)) {
    return { ...state, selectMovie: action.payload };
  }
  if (setQuery.match(action)) {
    return { ...state, query: action.payload };
  }
  if (setPickMovie.match(action)) {
    return { ...state, pickMovie: action.payload };
  }
  if (setİmbdData.match(action)) {
    return { ...state, imdbData: action.payload };
  }
  if (setCloseCart.match(action)) {
    return { ...state, closeCart: action.payload };
  }
  if (fetchMovieStart.match(action)) {
    return { ...state, isLoading: true };
  }
  if (fetchMovieSuccess.match(action)) {
    return { ...state, movie: action.payload, isLoading: false };
  }
  if (fetchMovieFailed.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  }
  return state;

  /*   switch (type) {
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
  } */
};
