import React from "react";


function Movie({ title, director, year, studio, poster }) {
  return (
    <div className="movie">
      <h1>{title}</h1>
      <p><strong>Режисер:</strong> {director}</p>
      <p><strong>Рік випуску:</strong> {year}</p>
      <p><strong>Кіностудія:</strong> {studio}</p>
      <img src={poster} alt={title} />
    </div>
  );
}

export default Movie;
