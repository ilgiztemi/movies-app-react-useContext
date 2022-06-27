const { createContext, useContext, useState, useEffect } = require("react");

const MovieContext = createContext();
export const MovieProvider = ({ children }) => {
  const [moviesData, setMoviesData] = useState([]);
  const [search, setSearch] = useState("");
  const searchUrl = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${search}`;
  const api =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
  const fetchMovies = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMoviesData(data.results);
      });
  };

  useEffect(() => {
    if (!search) fetchMovies(api);
    else fetchMovies(searchUrl);
  }, [search]);

  return (
    <MovieContext.Provider
      value={{
        moviesData,
        setMoviesData,
        search,
        setSearch
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovie = () => useContext(MovieContext);
