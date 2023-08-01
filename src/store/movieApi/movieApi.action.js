import { useSelector } from "react-redux";
import { MOVIE_ACTION_TYPES } from "./movieApi.types";

export const key = "e5f56591";

export const setMovie = (movie) => {
  return { type: MOVIE_ACTION_TYPES.SET_MOVIE, payload: movie };
};

export const setSelectMovie = (selectmovie) => {
  return {
    type: MOVIE_ACTION_TYPES.SET_SELECT_MOVİE,
    payload: selectmovie,
  };
};

export const setQuery = (query) => {
  return {
    type: MOVIE_ACTION_TYPES.SET_QUERY,
    payload: query,
  };
};
export const setPickMovie = (pickMovie) => {
  return {
    type: MOVIE_ACTION_TYPES.SET_PİCKMOVİE,
    payload: pickMovie,
  };
};
export const setİmbdData = (imbdData) => {
  return {
    type: MOVIE_ACTION_TYPES.SET_IMDBDATA,
    payload: imbdData,
  };
};
export const setCloseCart = (closeCart) => {
  return {
    type: MOVIE_ACTION_TYPES.SET_CLOSERCART,
    payload: closeCart,
  };
};

export const fetchMovieStart = () => {
  return {
    type: MOVIE_ACTION_TYPES.FETCH_MOVIE_START,
  };
};
export const fetchMovieSuccess = (moveiArray) => {
  return {
    type: MOVIE_ACTION_TYPES.FETCH_MOVIE_SUCCESS,
    payload: moveiArray,
  };
};
export const fetchMovieFailed = (error) => {
  return {
    type: MOVIE_ACTION_TYPES.FETCH_MOVIE_FAILED,
    payload: error,
  };
};

export const fetchMovieAsycn = (query) => async (dispatch) => {
  dispatch(fetchMovieStart()); // fetchMovieStart action'ını dispatch edelim.

  try {
    const data = await fetch(
      `http://www.omdbapi.com/?apikey=${key}&s=${query}`
    );
    const response = await data.json();
    dispatch(fetchMovieSuccess(response.Search));
  } catch (error) {
    dispatch(fetchMovieFailed(error));
  }
};
