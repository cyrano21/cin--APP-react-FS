import axios from "axios";

const API_KEY = "1d27a511";
const API_BASE_URL = "https://www.omdbapi.com/";

export const getPopularMovies = async () => {
  try {
    // OMDb doesn't have a "popular" endpoint, so we'll search for a generic term.
    // The free API returns a list of 10 movies at a time.
    const response = await axios.get(
      `${API_BASE_URL}?s=movie&apikey=${API_KEY}`
    );
    if (response.data.Search) {
      return response.data.Search;
    }
    return [];
  } catch (error) {
    console.error("Erreur lors de la récupération des films:", error);
    return [];
  }
};
