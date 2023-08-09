import "./HomePageMoviesCart.style.scss";
import { MovieApiContext } from "../../context/MovieApi";
import { setPickMovie } from "../../store/movieApi/movieApi.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCloseCart } from "../../store/movieApi/movieApi.selector";
import { setCloseCart } from "../../store/movieApi/movieApi.action";

const HomePageMoviesCart = ({ val }) => {
  const dispatch = useDispatch();
  const closeCart = useSelector(selectCloseCart);

  return (
    <>
      <div
        className="movies"
        key={val.id}
        onClick={() => {
          dispatch(setPickMovie(val));
          dispatch(setCloseCart(!closeCart));
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
