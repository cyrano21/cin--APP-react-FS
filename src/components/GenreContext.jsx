/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const GenreContext = createContext();

export const GenreProvider = ({ children }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genreResponse = await axios.get(
          "https://api.themoviedb.org/3/genre/movie/list?api_key=6138da7bfb774afb2ed1bef02f05ff66&language=fr-FR"
        );

        setGenres(genreResponse.data.genres);
      } catch (error) {
        console.error("Erreur lors du chargement du genre des films:", error);
      }
    };
    fetchGenres();
  }, []);

  return (
    <GenreContext.Provider value={{ genres, setGenres }}>
      {children}
    </GenreContext.Provider>
  );
};
