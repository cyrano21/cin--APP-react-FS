import axios from "axios";

const API_KEY = "VOTRE_CLE_API";
const API_BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/movie/popular?api_key=${API_KEY}&language=fr-FR`
    );
    return response.data.results;
  } catch (error) {
    console.error("Erreur lors de la récupération des films populaires:", error);
    return [];
  }
};

export const getImageUrl = (posterPath) => {
  return `https://image.tmdb.org/t/p/w500${posterPath}`;
};
