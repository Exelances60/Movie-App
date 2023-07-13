import React from "react";
import "./HomePage.styles.scss";
import HomeContainer from "../HomePage-Container/HomeContainer";

const HomePage = () => {
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
