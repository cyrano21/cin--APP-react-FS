import React from "react";

const PopularMovieCard = ({ movie }) => {
  // OMDb uses "Poster", "Title", and "Year"
  return (
    <div className="popular-movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>Année de sortie: {movie.Year}</p>
    </div>
  );
};

export default PopularMovieCard;
