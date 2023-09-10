import { MOVIE_ACTION_TYPES, MovieType, PickMovieType } from "./movieApi.types";
import {
  Action,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer.utils";
import { Dispatch } from "redux";

export const key = "e5f56591";

/* export const setMovie = (movie) => {
  return { type: MOVIE_ACTION_TYPES.SET_MOVIE, payload: movie };
}; */

export type error = Error & { message: string };

export type SetSelectMovieType = ActionWithPayload<
  MOVIE_ACTION_TYPES.SET_SELECT_MOVIE,
  MovieType[]
>;

export type setQueryType = ActionWithPayload<
  MOVIE_ACTION_TYPES.SET_QUERY,
  string
>;

export type SetPickMovieType = ActionWithPayload<
  MOVIE_ACTION_TYPES.SET_PİCKMOVİE,
  PickMovieType[]
>;

export type SetİmbdDataType = ActionWithPayload<
  MOVIE_ACTION_TYPES.SET_IMDBDATA,
  PickMovieType[]
>;
export type SetCloseCartType = ActionWithPayload<
  MOVIE_ACTION_TYPES.SET_CLOSERCART,
  boolean
>;
export type FetchMovieStartType = Action<MOVIE_ACTION_TYPES.FETCH_MOVIE_START>;

export type FetchMovieSuccessType = ActionWithPayload<
  MOVIE_ACTION_TYPES.FETCH_MOVIE_SUCCESS,
  MovieType[]
>;

export type FetchMovieFailedType = ActionWithPayload<
  MOVIE_ACTION_TYPES.FETCH_MOVIE_FAILED,
  Error
>;

export const setSelectMovie = withMatcher(
  (selectmovie: MovieType[]): SetSelectMovieType => {
    return {
      type: MOVIE_ACTION_TYPES.SET_SELECT_MOVIE,
      payload: selectmovie,
    };
  }
);

export const setQuery = withMatcher((query: string): setQueryType => {
  return {
    type: MOVIE_ACTION_TYPES.SET_QUERY,
    payload: query,
  };
});
export const setPickMovie = withMatcher(
  (pickMovie: PickMovieType[]): SetPickMovieType => {
    return {
      type: MOVIE_ACTION_TYPES.SET_PİCKMOVİE,
      payload: pickMovie,
    };
  }
);
export const setİmbdData = withMatcher(
  (imbdData: PickMovieType[]): SetİmbdDataType => {
    return {
      type: MOVIE_ACTION_TYPES.SET_IMDBDATA,
      payload: imbdData,
    };
  }
);
export const setCloseCart = withMatcher(
  (closeCart: boolean): SetCloseCartType => {
    return {
      type: MOVIE_ACTION_TYPES.SET_CLOSERCART,
      payload: closeCart,
    };
  }
);

export const fetchMovieStart = withMatcher((): FetchMovieStartType => {
  return {
    type: MOVIE_ACTION_TYPES.FETCH_MOVIE_START,
  };
});
export const fetchMovieSuccess = withMatcher(
  (moveiArray: MovieType[]): FetchMovieSuccessType => {
    return {
      type: MOVIE_ACTION_TYPES.FETCH_MOVIE_SUCCESS,
      payload: moveiArray,
    };
  }
);
export const fetchMovieFailed = withMatcher(
  (error: Error): FetchMovieFailedType => {
    return {
      type: MOVIE_ACTION_TYPES.FETCH_MOVIE_FAILED,
      payload: error,
    };
  }
);

export const fetchMovieAsycn =
  (query: string) => async (dispatch: Dispatch) => {
    dispatch(fetchMovieStart());

    try {
      const data = await fetch(
        `http://www.omdbapi.com/?apikey=${key}&s=${query}`
      );
      const response = await data.json();
      dispatch(fetchMovieSuccess(response.Search));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(fetchMovieFailed(error));
      }
    }
  };
