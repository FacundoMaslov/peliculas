import React, { useState, useContext } from "react";
import "./Movi.scss";
import ConfigContext from '../../Context/ConfigContext'

const Movi = (props) => {
  const {
    movie: { id, backdrop_path, title, overview },
    index,
  } = props;
  
  const context = useContext(ConfigContext)
  
  const handleClickPage = () => {
    context.indice == 19 ? context.setIndice(0) : context.setIndice(context.indice = context.indice + 1)
  }

  React.useEffect(() => console.log(context.indice),[context.indice])

  const backdropPath = `https://image.tmdb.org/t/p/original${backdrop_path}`;

  return (
    <div className="moviMain">
      <div
        className="moviMain_img"
        style={{ backgroundImage: `url("${backdropPath}")` }}
      >
        <button onClick={handleClickPage} />
      </div>
    </div>
  );
};

export default Movi;
