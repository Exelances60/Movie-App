import React from "react";
import "./NavigationBar.styles.scss";
import { setQuery } from "../../store/movieApi/movieApi.action";
import { useDispatch } from "react-redux";

const NavigationBar = () => {
  const dispatch = useDispatch();

  return (
    <div className="navbar">
      <div className="logo">
        <span>Movie Search</span>
      </div>
      <input
        className="search-input"
        placeholder="Search Movie"
        onChange={(event) => {
          dispatch(setQuery(event.target.value));
        }}
      ></input>
      <ul className="list">
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
      </ul>
    </div>
  );
};

export default NavigationBar;
