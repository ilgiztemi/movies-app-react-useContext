import { useState } from "react";
import { useMovie } from "../context/MovieContext";

const images = "https://image.tmdb.org/t/p/w1280";
export default function MovieCard() {
  const { moviesData } = useMovie();
  const [id, setId] = useState("");
  console.log(moviesData);

  const handleMouseOut = () => {
    setId("");
  };

  const handleMouseOver = (movieId) => {
    setId(movieId);
  };
  return (
    <div className="container">
      <div className="row">
        {moviesData.map((movie) => (
          <div
            onMouseOut={() => handleMouseOut(movie.id)}
            onMouseOver={() => handleMouseOver(movie.id)}
            key={movie.id}
            className="col col-sm-3 col-1 box mb-4"
          >
            {id === movie.id ? (
              <p>{movie.overview}</p>
            ) : (
              <>
                <img src={images + movie.poster_path} alt={movie.title} />
                <div>{movie.title}</div>
                <h4>{movie.vote_average}</h4>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
