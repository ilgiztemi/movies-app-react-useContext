import { useMovie } from "../context/MovieContext";

const Search = () => {
  const { setSearch, moviesData, setMoviesData } = useMovie();

  const searchMovie = (text) => {
    const deepCopy = moviesData.map((copy) => ({ ...copy }));
    setSearch(text);
    setMoviesData(
      deepCopy.filter((movie) =>
        movie.title.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  console.log("moviesData", moviesData);

  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => searchMovie(e.target.value)}
        />
      </form>
    </div>
  );
};
export default Search;
