import "./styles.css";
import { MovieProvider } from "./context/MovieContext";
import Search from "./components/Search";
import MovieCard from "./components/MovieCard";

export default function App() {
  return (
    <div className="App">
      <MovieProvider>
        <Search />
        <MovieCard />
      </MovieProvider>
    </div>
  );
}
