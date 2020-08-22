import React, { useState, useContext } from "react";
import "./SlidersMovies.scss";
import Movi from "../Movi/Movi";
import { Link } from "react-router-dom";
import ConfigContext from '../../Context/ConfigContext'

const SlidersMovies = (props) => {
  const context = useContext(ConfigContext)
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
      {result.results
        .filter((movie,index) => context.indice == index)
        .map((movie, index) => (
          <div className="sliderMain_section" key={index}>
            <Movi key={movie.id} movie={movie} index={index} />
          </div>
      ))}
    </div>
  );
};

export default SlidersMovies;
