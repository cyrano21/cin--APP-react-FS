import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GenreContext } from "./GenreContext";
// Utilisation directe de la clé API au lieu de la variable d'environnement
const key = "6138da7bfb774afb2ed1bef02f05ff66";

export const useMovieData = () => {
  const { genres } = useContext(GenreContext);
  const [search, setSearch] = useState("");
  const [sortedMovies, setSortedMovies] = useState([]);

  // Chargement des films populaires
  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=fr-FR`
        );
        setSortedMovies(response.data.results);
      } catch (error) {
        console.error("Erreur lors du chargement des films populaires:", error);
      }
    };
    if (!sortedMovies.length) {
      fetchPopularMovies();
    }
  }, [sortedMovies.length]);

  // Recherche de films
  useEffect(() => {
    const dataMovies = async () => {
      if (search) {
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${search}&language=fr-FR`
          );
          if (response.data && response.data.results) {
            setSortedMovies(response.data.results);
          }
        } catch (error) {
          console.error(error);
        }
      }
    };
    dataMovies();
  }, [search]);

  // Fonctions pour trier les films
  const SortAscending = () => {
    const sorted = [...sortedMovies].sort(
      (a, b) => a.vote_average - b.vote_average
    );
    setSortedMovies(sorted);
  };

  const SortDescending = () => {
    const sorted = [...sortedMovies].sort(
      (a, b) => b.vote_average - a.vote_average
    );
    setSortedMovies(sorted);
  };

  return { sortedMovies, genres, setSearch, SortAscending, SortDescending };
};
