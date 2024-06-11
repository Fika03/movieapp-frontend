import { IMovie } from "@/app/Models/IMovie";
import { fetchMovie } from "@/utils/fetchMovie";
import React from "react";

interface Props {
  params: { id: string };
}

const MoviePage = async ({ params }: Props) => {
  const movie: IMovie = await fetchMovie(params.id);

  return <div>{movie.Title}</div>;
};

export default MoviePage;
