import { useContext } from "react";
import { useFavorites } from "../components/FavoritesContexts";
import Header from "../components/Header";
import { GenreContext } from "../components/GenreContext";
import MoviesCard from "../components/MoviesCard";

const UserList = () => {
  const { genres } = useContext(GenreContext);
  const { favorites, setFavorites } = useFavorites([]);

  const removeToFavorites = (movieId) => {
    const updatedFavorites = favorites.filter((movie) => movie.id !== movieId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="user-list-page">
      <Header />
      <h2>
        Coups de coeur <span>💖</span>
      </h2>
      <div className="card-container">
        {favorites && favorites.length > 0 ? (
          favorites.map((movie) => (
            <MoviesCard
              key={movie.id}
              movie={movie}
              genres={genres}
              onFavoriteToggle={() => removeToFavorites(movie.id)}
              isFavorite={true}
            />
          ))
        ) : (
          <h2>Aucun coup de coeur pour le moment</h2>
        )}
      </div>
    </div>
  );
};

export default UserList;
