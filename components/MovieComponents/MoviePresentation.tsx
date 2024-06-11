import { IMovie } from "@/app/Models/IMovie";
import { fetchMovies } from "@/utils/fetchMovies";
import Image from "next/image";
import React from "react";
import MovieCard from "./MovieCard";

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
