/* eslint-disable react/prop-types */

const MoviesCard = ({ movie, genres, onFavoriteToggle, isFavorite }) => {
  const dateFormater = (date) => new Date(date).toLocaleDateString("fr-FR");

  return (
    <div className="card" key={movie.id}>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={"image du film : " + movie.title}
      />
      <h2>{movie.title}</h2>
      <h5>{"Sortie le : " + dateFormater(movie.release_date)}</h5>
      <h4>
        {movie.vote_average.toFixed(1)}/10
        <span>⭐</span>
      </h4>
      <ul>
        {movie.genre_ids.map((genreId, index) => {
          const genre = genres.find((g) => g.id === genreId);
          return <li key={index}>{genre ? genre.name : genreId}</li>;
        })}
      </ul>
      <h3>Synopsis</h3>
      <p>{movie.overview}</p>
      <div className="btn" onClick={() => onFavoriteToggle(movie)}>
        {" "}
        {isFavorite ? "  Supprimer" : "  Ajouter aux coups de Coeur"}
      </div>
    </div>
  );
};

export default MoviesCard;
