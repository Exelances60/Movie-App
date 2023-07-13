import React, { useContext } from "react";
import "./HomePageMoviesCart.style.scss";
import { MovieApiContext } from "../../context/MovieApi";

const HomePageMoviesCart = ({ val }) => {
  const { setPickMovie, setCloseCart, closeCart } = useContext(MovieApiContext);
  return (
    <>
      <div
        className="movies"
        key={val.id}
        onClick={() => {
          setPickMovie(val);
          setCloseCart(!closeCart);
        }}
      >
        <div className="movie-img">
          <img src={val.Poster} alt={val.Title}></img>
        </div>
        <div className="title" key={val.id}>
          <h4>{val.Title}</h4>
          <span>📅 {val.Year}</span>
        </div>
      </div>
    </>
  );
};

export default HomePageMoviesCart;
