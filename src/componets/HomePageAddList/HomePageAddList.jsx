import React, { useContext } from "react";
import "./HomePageAddList.styles.scss";
import { MovieApiContext } from "../../context/MovieApi";
import HomePageAddListWindow from "../HomePageAddListWindow/HomePageAddListWindow";

import HomePageMovieAbout from "../HomePageMovieAbout/HomePageMovieAbout";

const HomePageAddList = ({ setAddListMovie, rating, setRating }) => {
  const { setPickMovie, closeCart, setCloseCart, imbdData } =
    useContext(MovieApiContext);

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className={`${closeCart ? "movie-addlist" : "close-addlist"}`}>
      <button
        className="close-btn"
        onClick={() => {
          setPickMovie({});
          setCloseCart(!closeCart);
        }}
      >
        x
      </button>
      <HomePageAddListWindow></HomePageAddListWindow>
      <HomePageMovieAbout
        imbdData={imbdData}
        ratingChanged={ratingChanged}
        rating={rating}
        setAddListMovie={setAddListMovie}
      ></HomePageMovieAbout>
    </div>
  );
};

export default HomePageAddList;
