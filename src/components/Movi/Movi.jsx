import React, { useState, useEffect } from "react";
import "./Movi.scss";

const Movi = (props) => {
  const {
    movie: { id, backdrop_path, title, overview },
    index,
  } = props;
  const [url, setUrl] = useState(backdrop_path);
  const backdropPath = `https://image.tmdb.org/t/p/original${url}`;

  const open = (e) => {
    setUrl(backdrop_path);
    console.log(backdrop_path);
  };
  console.log(backdropPath);
  return (
    <div className="moviMain">
      <div
        className="moviMain_img"
        style={{ backgroundImage: `url("${backdropPath}")` }}
      >
        <button onClick={() => open(backdrop_path)} />
      </div>
    </div>
  );
};

export default Movi;
