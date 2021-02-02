import React, { useContext } from "react";
import { MovieContext } from "./Context/MovieContext";

export const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <>
      <h1>Movies List</h1>
      <p>No of Movies {movies.length} </p>
      <hr />
    </>
  );
};
