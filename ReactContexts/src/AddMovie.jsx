import React, { useContext, useState } from "react";
import { MovieContext } from "./Context/MovieContext";

export const AddMovie = () => {
  const [movies, setMovies] = useContext(MovieContext);
  const [name, setName] = useState("");
  const [rating, setRating] = useState();

  function setMovieName(e) {
    setName(e.target.value);
  }

  function setMovierating(e) {
    setRating(e.target.value);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    setMovies([
      ...movies,
      {
        id: movies.length + 1,
        name: name,
        rating: rating
      }
    ]);
    setName("");
    setRating("");
  }
  return (
    <form onSubmit={handleOnSubmit}>
      name:
      <input type="text" value={name} onChange={setMovieName} />
      Rating:
      <input type="text" value={rating} onChange={setMovierating} />
      <input type="submit" />
    </form>
  );
};
