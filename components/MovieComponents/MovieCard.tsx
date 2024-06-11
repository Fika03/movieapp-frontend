import { IMovie } from "@/app/Models/IMovie";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  movie: IMovie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Link
      href={`/movies/${movie.imdbID}`}
      className="flex flex-col justify-center items-center bg-white shadow-sm"
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
