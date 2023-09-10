<<<<<<< HEAD
import { createContext, useReducer, useState } from "react";
import { setQuery, setCloseCart } from "../store/movieApi/movieApi.action";

export const MovieApiContext = createContext({
  movie: [{}],
  setMovie: () => {},
  setQuery: () => {},
  selectMovie: [{}],
  setSelectMovie: () => {},
  pickMovie: {},
  setPickMovie: () => {},
  closeCart: false,
  setCloseCart: () => {},
  imbdData: {},
});

export const MOVIE_ACTION_TYPES = {
  SET_SELECT_MOVİE: "SET_SELECT_MOVİE",
  SET_MOVIE: "SET_MOVIE",
};

const INITIAL_STATE = {
  selectMovie: [{}],
  movie: [{}],
};
const movieReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case MOVIE_ACTION_TYPES.SET_SELECT_MOVIE:
      return { ...state, selectMovie: payload };
    case MOVIE_ACTION_TYPES.SET_MOVIE:
      return { ...state, movie: payload };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

export const MovieApiProvider = ({ children }) => {
  // const [movie, setMovie] = useState([{}]);
  // const [query, setQuery] = useState("batman");
  // const [selectMovie, setSelectMovie] = useState([{}]);
  //const [pickMovie, setPickMovie] = useState({});
  // const [closeCart, setCloseCart] = useState(false);
  // const [imbdData, setİmbdData] = useState({});
  const key = "e5f56591";

  const [{ selectMovie, movie }, dispatch] = useReducer(
    movieReducer,
    INITIAL_STATE
  );
  const setMovie = (movie) => {
    dispatch({ type: MOVIE_ACTION_TYPES.SET_MOVIE, payload: movie });
  };

  const setSelectMovie = (selectmovie) => {
    dispatch({
      type: MOVIE_ACTION_TYPES.SET_SELECT_MOVİE,
      payload: selectmovie,
    });
  };

  const value = {
    movie,
    setMovie,
    setQuery,
    setSelectMovie,
    selectMovie,

    /* closeCart */
    setCloseCart,
  };
  return (
    <MovieApiContext.Provider value={value}>
      {children}
    </MovieApiContext.Provider>
  );
};
=======
import { createContext, useReducer, useState } from "react";
import { setQuery, setCloseCart } from "../store/movieApi/movieApi.reducer";

export const MovieApiContext = createContext({
  movie: [{}],
  setMovie: () => {},
  setQuery: () => {},
  selectMovie: [{}],
  setSelectMovie: () => {},
  pickMovie: {},
  setPickMovie: () => {},
  closeCart: false,
  setCloseCart: () => {},
  imbdData: {},
});

export const MOVIE_ACTION_TYPES = {
  SET_SELECT_MOVİE: "SET_SELECT_MOVİE",
  SET_MOVIE: "SET_MOVIE",
};

const INITIAL_STATE = {
  selectMovie: [{}],
  movie: [{}],
};
const movieReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case MOVIE_ACTION_TYPES.SET_SELECT_MOVIE:
      return { ...state, selectMovie: payload };
    case MOVIE_ACTION_TYPES.SET_MOVIE:
      return { ...state, movie: payload };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

export const MovieApiProvider = ({ children }) => {
  // const [movie, setMovie] = useState([{}]);
  // const [query, setQuery] = useState("batman");
  // const [selectMovie, setSelectMovie] = useState([{}]);
  //const [pickMovie, setPickMovie] = useState({});
  // const [closeCart, setCloseCart] = useState(false);
  // const [imbdData, setİmbdData] = useState({});
  const key = "e5f56591";

  const [{ selectMovie, movie }, dispatch] = useReducer(
    movieReducer,
    INITIAL_STATE
  );
  const setMovie = (movie) => {
    dispatch({ type: MOVIE_ACTION_TYPES.SET_MOVIE, payload: movie });
  };

  const setSelectMovie = (selectmovie) => {
    dispatch({
      type: MOVIE_ACTION_TYPES.SET_SELECT_MOVİE,
      payload: selectmovie,
    });
  };

  const value = {
    movie,
    setMovie,
    setQuery,
    setSelectMovie,
    selectMovie,

    /* closeCart */
    setCloseCart,
  };
  return (
    <MovieApiContext.Provider value={value}>
      {children}
    </MovieApiContext.Provider>
  );
};
>>>>>>> master
