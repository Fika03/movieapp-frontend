import { fetchMovies } from "@/utils/fetchMovies";
import React from "react";
import MovieCard from "./MovieCard";
import { IMovie } from "@/models/IMovie";

const MoviePresentation = async () => {
  const movies = await fetchMovies();

  return (
    <section className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
      {movies.map((movie: IMovie) => (
        <MovieCard movie={movie} key={movie.imdbID} />
      ))}
    </section>
  );
};

export default MoviePresentation;
