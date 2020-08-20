import React from "react";
import "./main.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assest/logos/logo.svg";

const main = () => {
  return (
    <div className="main">
      <div className="main_bar">
        <Logo />
      </div>

      <div className="main_bar">
        <Link className="main_bar_option" to="/home">
          Home
        </Link>
        <Link className="main_bar_option" to="/new-movies">
          New Movies
        </Link>
        <Link className="main_bar_option" to="/popular">
          Popular
        </Link>
        <Link className="main_bar_option" to="/search">
          Search
        </Link>
      </div>
    </div>
  );
};

export default main;
