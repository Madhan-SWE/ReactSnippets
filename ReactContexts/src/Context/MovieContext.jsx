import React, { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieContextProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      name: "Venom",
      rating: "5.6"
    },
    {
      id: 2,
      name: "Spiderman",
      rating: "6.6"
    },
    {
      id: 3,
      name: "Anaconda",
      rating: "9"
    }
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
