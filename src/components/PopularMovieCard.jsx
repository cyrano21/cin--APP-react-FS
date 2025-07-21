import React from "react";
import { getImageUrl } from "../services/tmdb";

const PopularMovieCard = ({ movie }) => {
  return (
    <div className="popular-movie-card">
      <img src={getImageUrl(movie.poster_path)} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>Date de sortie: {movie.release_date}</p>
    </div>
  );
};

export default PopularMovieCard;
