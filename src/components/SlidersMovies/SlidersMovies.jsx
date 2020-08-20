import React, { useState } from "react";
import "./SlidersMovies.scss";
import Movi from "../Movi/Movi";
import { Link } from "react-router-dom";

const SlidersMovies = (props) => {
  const [op, setOp] = useState(1);
  const {
    movies: { loading, result },
  } = props;

  if (loading || !result) {
    return "Loading....";
  }
  console.log(result);
  return (
    <div>
      {result.results.map((movie, index) => (
        <div className="sliderMain_section" key={index}>
          <Movi key={movie.id} movie={movie} index={index} />
        </div>
      ))}
    </div>
  );
};

export default SlidersMovies;
