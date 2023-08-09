import "./HomePageMovieAbout.scss";
import ReactStars from "react-stars";
import { MovieApiContext } from "../../context/MovieApi";
import Fade from "react-reveal/Fade";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCloseCart,
  selectPickMovie,
} from "../../store/movieApi/movieApi.selector";
import {
  setCloseCart,
  setSelectMovie,
} from "../../store/movieApi/movieApi.action";

const HomePageMovieAbout = ({
  imbdData,
  ratingChanged,
  rating,
  setAddListMovie,
}) => {
  const closeCart = useSelector(selectCloseCart);
  const dispatch = useDispatch();

  return (
    <>
      <Fade bottom duration={1500} distance="20%">
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
                dispatch(setCloseCart(!closeCart));

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
      </Fade>
    </>
  );
};

export default HomePageMovieAbout;
