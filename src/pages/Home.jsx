import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Cards from "../components/Cards";
import Form from "../components/Form";
import { useMovieData } from "../components/useMovieData";
import { getPopularMovies } from "../services/api";
import PopularMovieCard from "../components/PopularMovieCard";
import "../styles/components/_popularMovies.scss";

const Home = () => {
  const { sortedMovies, genres, setSearch, SortAscending, SortDescending } =
    useMovieData();
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const movies = await getPopularMovies();
      setPopularMovies(movies);
    };

    fetchPopularMovies();
  }, []);

  const handleSearch = (newSearch) => {
    setSearch(newSearch);
  };

  return (
    <div className="home-page">
      <Header />
      <Form
        onSearch={handleSearch}
        SortAscending={SortAscending}
        SortDescending={SortDescending}
      />
      <div className="popular-movies-container">
        <h2>Films Populaires</h2>
        <div className="popular-movies-grid">
          {popularMovies.map((movie) => (
            <PopularMovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
      <Cards sortedMovies={sortedMovies} genres={genres} />
    </div>
  );
};

export default Home;
