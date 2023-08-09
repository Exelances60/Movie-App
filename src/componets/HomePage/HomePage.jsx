import React, { useEffect } from "react";
import "./HomePage.styles.scss";
import HomeContainer from "../HomePage-Container/HomeContainer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  fetchMovieAsycn,
  setMovie,
} from "../../store/movieApi/movieApi.action";
import { selectQuery } from "../../store/movieApi/movieApi.selector";

const HomePage = () => {
  const dispatch = useDispatch();
  const query = useSelector(selectQuery);

  useEffect(() => {
    dispatch(fetchMovieAsycn(query));
  }, [query]);
  return (
    <div className="home">
      <HomeContainer></HomeContainer>
      {/*      {movie === undefined
        ? ""
        : movie.map((val) => {
            return <h1>{val.Title}</h1>;
          })} */}
    </div>
  );
};

export default HomePage;
