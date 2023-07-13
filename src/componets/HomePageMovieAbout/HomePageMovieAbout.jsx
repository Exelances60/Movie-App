import React, { useContext } from "react";
import "./HomePageMovieAbout.scss";
import ReactStars from "react-stars";
import { MovieApiContext } from "../../context/MovieApi";

const HomePageMovieAbout = ({
  imbdData,
  ratingChanged,
  rating,
  setAddListMovie,
}) => {
  const { closeCart, setCloseCart } = useContext(MovieApiContext);
  return (
    <>
      <div className="movie-about">
        <div className="add-list-btn">
          <div className="rating-div">
            <ReactStars
              className="rating"
              count={10}
              onChange={ratingChanged}
              size={24}
              color2={"#ffd700"}
            />
            <span> {rating}</span>
          </div>
          <button
            className="addList-btn"
            onClick={() => {
              setCloseCart(!closeCart);
              setAddListMovie((prevMovie) => [...prevMovie, imbdData]);
            }}
          >
            + Add to list
          </button>
        </div>
        <div className="about-decps">
          <span>{imbdData.Plot}</span>
          <p>{imbdData.Actors}</p>
          <p>Directed by : {imbdData.Director}</p>
          <p>Language : {imbdData.Language}</p>
          <p>Writer : {imbdData.Writer}</p>
        </div>
      </div>
    </>
  );
};

export default HomePageMovieAbout;
