import "./HomePageAddList.styles.scss";
import { MovieApiContext } from "../../context/MovieApi";
import HomePageAddListWindow from "../HomePageAddListWindow/HomePageAddListWindow";
import {
  setPickMovie,
  setCloseCart,
} from "../../store/movieApi/movieApi.action";
import HomePageMovieAbout from "../HomePageMovieAbout/HomePageMovieAbout";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCloseCart,
  selectİmbdData,
} from "../../store/movieApi/movieApi.selector";

const HomePageAddList = ({ setAddListMovie, rating, setRating }) => {
  const dispatch = useDispatch();
  const closeCart = useSelector(selectCloseCart);
  const imbdData = useSelector(selectİmbdData);

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className={`${closeCart ? "movie-addlist" : "close-addlist"}`}>
      <button
        className="close-btn"
        onClick={() => {
          dispatch(setPickMovie({}));
          dispatch(setCloseCart(!closeCart));
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
