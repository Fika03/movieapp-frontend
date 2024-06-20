import { IMovie } from "@/models/IMovie";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./movieCard.module.css";

interface Props {
  movie: IMovie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Link
      href={`/movies/${movie.imdbID}`}
      className={
        style.movieCard +
        " flex flex-row-reverse justify-start items-center max-w-[482px] bg-white shadow-sm w-[100%] h-[200px] md:w-[45%] "
      }
    >
      <article className="w-[100%] m-2">
        <h2 className="text-black font-bold mb-2">{movie.Title}</h2>
        <span className="text-black">Price: {movie.price} kr</span>
      </article>

      <div
        key={movie?.imdbID}
        className="relative w-11/12 h-[180px] max-w-[130px] m-1"
      >
        <Image
          src={movie?.Poster}
          alt={movie?.Title}
          fill
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain"
        />
      </div>
    </Link>
  );
};

export default MovieCard;
