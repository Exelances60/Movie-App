import "./HomePageAddListWindow.scss";

import { Fade } from "react-reveal";
import { useSelector } from "react-redux";
import {
  selectPickMovie,
  selectİmbdData,
} from "../../store/movieApi/movieApi.selector";

const HomePageAddListWindow = () => {
  const pickMovie = useSelector(selectPickMovie);
  const imbdData = useSelector(selectİmbdData);

  return (
    <>
      <div className="movie-cart">
        <div className="movie-cart-details">
          <div className="movie-cart-img">
            <img src={pickMovie.Poster} alt=""></img>
          </div>
          <div className="movie-cart-decps">
            <Fade right duration={1500} distance="20%">
              <h3>{pickMovie.Title}</h3>
              <span>{`${imbdData.Released} - ${imbdData.Runtime}`}</span>
              <span>{`${imbdData.Genre} `}</span>
              <span>{`🎬 ${imbdData.imdbRating} IMDb rating `}</span>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageAddListWindow;
