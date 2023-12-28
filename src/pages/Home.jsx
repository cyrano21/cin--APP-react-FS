import Header from "../components/Header";
import Cards from "../components/Cards";
import Form from "../components/Form";
import { useMovieData } from "../components/UseMovieData";

const Home = () => {
  const { sortedMovies, genres, setSearch, SortAscending, SortDescending } =
    useMovieData();

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
      <Cards sortedMovies={sortedMovies} genres={genres} />
    </div>
  );
};

export default Home;
