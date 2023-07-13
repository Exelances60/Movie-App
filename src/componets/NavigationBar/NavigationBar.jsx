import React from "react";
import "./NavigationBar.styles.scss";

const NavigationBar = ({ setQuery }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <span>Movie Search</span>
      </div>
      <input
        className="search-input"
        placeholder="Search Movie"
        onChange={(event) => {
          setQuery(event.target.value);
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
