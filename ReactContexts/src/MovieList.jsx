import React, { useContext } from "react";
import { MovieContext } from "./Context/MovieContext";
import { AddMovie } from "./AddMovie";
const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <>
      <AddMovie />
      <ol>
        {movies.map((movie) => {
          return (
            <li>
              {movie.name} - {movie.rating}
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default MovieList;
