import MoviePresentation from "@/components/MovieComponents/MoviePresentation";
import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const MoviePage = async () => {
  return (
    <>
      <MaxWidthWrapper>
        <section className="w-full flex justify-center items-center">
          <MoviePresentation />
        </section>
      </MaxWidthWrapper>
    </>
  );
};

export default MoviePage;
