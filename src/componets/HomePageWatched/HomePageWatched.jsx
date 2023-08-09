import React from "react";
import "./HomePageWatched.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTrailer,
  selectWatchOpen,
} from "../../store/movietrailerApi/trailer.selector";
import { useEffect } from "react";
import {
  fetchTrailerData,
  setWatch,
} from "../../store/movietrailerApi/trailer.action";
import { setPickMovie } from "../../store/movieApi/movieApi.action";

import { selectPickMovie } from "../../store/movieApi/movieApi.selector";
const HomePageWatched = ({
  closeCart,
  addListMovie,
  handleRemoveMovie,
  rating,
}) => {
  const dispatch = useDispatch();
  const pickMovie = useSelector(selectPickMovie);
  const watchOpen = useSelector(selectWatchOpen);

  useEffect(() => {
    dispatch(
      fetchTrailerData(
        `${pickMovie.Title}${pickMovie.Year}`.replace(/\s+/g, "")
      )
    );
  }, [pickMovie]);

  return (
    <>
      {!closeCart ? (
        <div className="watched-movie">
          <div className="total-movies">
            <h3>MOVİES YOU WATCHED</h3>
          </div>
          {addListMovie.map((val, i) => {
            return (
              <div className="views-movie">
                <div className="views-img">
                  <img src={val.Poster} alt=""></img>
                </div>
                <div className="views-title">
                  <p>{val.Title}</p>
                  <p>{`⭐ ${val.imdbRating} 🌟${rating} ⌛${val.Runtime}`}</p>
                </div>
                <div
                  onClick={() => {
                    dispatch(setPickMovie(val));
                    dispatch(setWatch(!watchOpen));
                  }}
                >
                  Watch
                </div>
                <button
                  className="remove-movie"
                  onClick={() => {
                    handleRemoveMovie(val);
                  }}
                >
                  X
                </button>
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
};

export default HomePageWatched;
