/* eslint-disable react/prop-types */
import { useFavorites } from "./FavoritesContexts";
import MoviesCard from "./MoviesCard";

const Cards = ({ sortedMovies, genres }) => {
  const { favorites, setFavorites } = useFavorites([]);

  const addToFavorite = (movie) => {
    if (!favorites.some((fav) => fav.id === movie.id)) {
      const newFavorites = [...favorites, movie];
      setFavorites(newFavorites);
    }
  };

  return (
    <div className="card-container">
      {sortedMovies &&
        sortedMovies.map((movie) => (
          <MoviesCard
            key={movie.id}
            movie={movie}
            genres={genres}
            onFavoriteToggle={addToFavorite}
            isFavorite={favorites.some((fav) => fav.id === movie.id)}
          />
        ))}
    </div>
  );
};

export default Cards;
