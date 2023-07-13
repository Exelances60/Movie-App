import React, { useContext } from "react";
import "./HomePageAddListWindow.scss";
import { MovieApiContext } from "../../context/MovieApi";

const HomePageAddListWindow = () => {
  const { pickMovie, imbdData } = useContext(MovieApiContext);
  return (
    <>
      <div className="movie-cart">
        <div className="movie-cart-details">
          <div className="movie-cart-img">
            <img src={pickMovie.Poster} alt=""></img>
          </div>
          <div className="movie-cart-decps">
            <h3>{pickMovie.Title}</h3>
            <span>{`${imbdData.Released} - ${imbdData.Runtime}`}</span>
            <span>{`${imbdData.Genre} `}</span>
            <span>{`🎬 ${imbdData.imdbRating} IMDb rating `}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageAddListWindow;
