import React, { useContext, useState } from "react";
import "./HomeContainer.styles.scss";
import { MovieApiContext } from "../../context/MovieApi";
import HomePageMoviesCart from "../HomePageMoviesCart/HomePageMoviesCart";
import HomePageAddList from "../HomePageAddList/HomePageAddList";
import HomePageWatched from "../HomePageWatched/HomePageWatched";

const HomeContainer = () => {
  const { movie, closeCart } = useContext(MovieApiContext);
  const [addListMovie, setAddListMovie] = useState([]);
  const [rating, setRating] = useState(0);
  const handleRemoveMovie = (val) => {
    setAddListMovie((prevMovies) =>
      prevMovies.filter((movie) => movie !== val)
    );
  };

  return (
    <div className="home-container">
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
