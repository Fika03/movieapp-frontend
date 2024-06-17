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
        " flex flex-col justify-center items-center bg-gray-200 shadow-sm "
      }
    >
      <h2 className="text-black">{movie.Title}</h2>
      <div
        key={movie?.imdbID}
        className="relative w-11/12 h-[100px] md:h-[200px] lg:h-[500px] "
      >
        <Image
          src={movie?.Poster}
          alt={movie?.Title}
          layout="fill"
          priority={true}
          className="object-cover"
        />
      </div>
    </Link>
  );
};

export default MovieCard;
