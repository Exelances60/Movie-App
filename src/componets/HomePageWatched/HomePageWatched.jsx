import React from "react";
import "./HomePageWatched.scss";

const HomePageWatched = ({
  closeCart,
  addListMovie,
  handleRemoveMovie,
  rating,
}) => {
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
