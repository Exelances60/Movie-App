import { createContext, useEffect, useState } from "react";

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

export const MovieApiProvider = ({ children }) => {
  const [movie, setMovie] = useState([{}]);
  const [query, setQuery] = useState("batman");
  const [selectMovie, setSelectMovie] = useState([{}]);
  const [pickMovie, setPickMovie] = useState({});
  const [closeCart, setCloseCart] = useState(false);
  const [imbdData, setİmbdData] = useState({});
  const key = "e5f56591";
  useEffect(() => {
    const getApi = async () => {
      const data = await fetch(
        ` http://www.omdbapi.com/?apikey=${key}&s=${query}
`
      );
      const response = await data.json();
      setMovie(response.Search);
    };
    getApi();
  }, [query]);

  const { imdbID } = pickMovie;

  useEffect(() => {
    const getApi = async () => {
      if (imdbID) {
        const data = await fetch(
          `http://www.omdbapi.com/?apikey=${key}&i=${imdbID}`
        );
        const response = await data.json();
        setİmbdData(response);
      }
    };
    getApi();
  }, [pickMovie, imdbID]);

  const value = {
    movie,
    setMovie,
    setQuery,
    setSelectMovie,
    selectMovie,
    pickMovie,
    setPickMovie,
    closeCart,
    setCloseCart,
    imbdData,
  };
  return (
    <MovieApiContext.Provider value={value}>
      {children}
    </MovieApiContext.Provider>
  );
};
