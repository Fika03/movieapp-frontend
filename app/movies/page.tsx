import MoviePresentation from "@/components/MovieComponents/MoviePresentation";
import { fetchMovies } from "@/utils/fetchMovies";
import Image from "next/image";
import React from "react";
import { IMovie } from "../Models/IMovie";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const MoviePage = async () => {
  return (
    <MaxWidthWrapper>
      <section className="w-full flex justify-center items-center">
        <MoviePresentation />
      </section>
    </MaxWidthWrapper>
  );
};

export default MoviePage;
