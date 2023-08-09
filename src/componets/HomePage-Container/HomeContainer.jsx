import React, { useEffect, useState } from "react";
import "./HomeContainer.styles.scss";
import { MovieApiContext } from "../../context/MovieApi";
import HomePageMoviesCart from "../HomePageMoviesCart/HomePageMoviesCart";
import HomePageAddList from "../HomePageAddList/HomePageAddList";
import HomePageWatched from "../HomePageWatched/HomePageWatched";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCloseCart,
  selectMovie,
  selectPickMovie,
} from "../../store/movieApi/movieApi.selector";
import { setİmbdData } from "../../store/movieApi/movieApi.action";
import {
  selectTrailer,
  selectWatchOpen,
} from "../../store/movietrailerApi/trailer.selector";
import { setWatch } from "../../store/movietrailerApi/trailer.action";
import ReactPlayer from "react-player";

const HomeContainer = () => {
  const dispatch = useDispatch();
  const closeCart = useSelector(selectCloseCart);
  const movie = useSelector(selectMovie);
  const [addListMovie, setAddListMovie] = useState([]);
  const [rating, setRating] = useState(0);
  const key = "e5f56591";

  const handleRemoveMovie = (val) => {
    setAddListMovie((prevMovies) =>
      prevMovies.filter((movie) => movie !== val)
    );
  };

  const pickMovie = useSelector(selectPickMovie);
  const watchOpen = useSelector(selectWatchOpen);
  const currentTrailer = useSelector(selectTrailer);

  const { imdbID } = pickMovie;

  useEffect(() => {
    const getApi = async () => {
      if (imdbID) {
        const data = await fetch(
          `http://www.omdbapi.com/?apikey=${key}&i=${imdbID}`
        );
        const response = await data.json();
        dispatch(setİmbdData(response));
      }
    };
    getApi();
  }, [pickMovie, imdbID]);

  return (
    <div className="home-container">
      {watchOpen ? (
        <div className="overlay">
          <div className="close-overlay">
            <p
              onClick={() => {
                dispatch(setWatch(!watchOpen));
              }}
            >
              X
            </p>
          </div>
          <div className="trailerMovie">
            {currentTrailer && currentTrailer.length > 0 ? (
              <ReactPlayer controls url={currentTrailer[0].url} />
            ) : (
              <p>No trailer available.</p>
            )}
          </div>
        </div>
      ) : null}
      <div className="left-container">
        {movie === undefined
          ? ""
          : movie.map((val) => {
              return (
                <HomePageMoviesCart key={val.id} val={val}></HomePageMoviesCart>
              );
            })}
      </div>
      <div className="right-container">
        <HomePageAddList
          rating={rating}
          setRating={setRating}
          setAddListMovie={setAddListMovie}
        ></HomePageAddList>
        <HomePageWatched
          closeCart={closeCart}
          addListMovie={addListMovie}
          handleRemoveMovie={handleRemoveMovie}
          rating={rating}
        ></HomePageWatched>
      </div>
    </div>
  );
};

export default HomeContainer;
