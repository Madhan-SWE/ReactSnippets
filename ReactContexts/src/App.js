import React from "react";
import "./styles.css";
import { MovieContextProvider } from "./Context/MovieContext";
import MovieList from "./MovieList";
import { Nav } from "./Nav";

export default function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <Nav />
        <MovieList />
      </MovieContextProvider>
    </div>
  );
}
