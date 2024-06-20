"use client";
import { IMoviePagination } from "@/models/IMoviePagination";
import { fetchXMovies } from "@/utils/fetchXMovies";
import { useEffect, useState } from "react";
import MovieCard from "../MovieCard";
import style from "./selectMoviePage.module.css";

export const SelectMoviePage = () => {
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<IMoviePagination>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const fetchedMovie: IMoviePagination = await fetchXMovies(page);
      if (shouldUpdate) {
        setData(fetchedMovie);
        setLoading(false);
      }
    };

    let shouldUpdate = true;

    getData();

    return () => {
      shouldUpdate = false;
    };
  }, [page]);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center w-[90%]">
      <section className="flex flex-col justify-center items-center md:w-[100%] md:flex-wrap md:flex-row xl:w-[70%]">
        {data &&
          data.movies?.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
      </section>
      <section className="flex items-center justify-center">
        {data &&
          Array.from(Array(data.totalPages - 1), (e, i) => {
            return (
              <div className="m-3" key={i}>
                <button
                  className={page === i + 1 ? style.selectedPage : ""}
                  onClick={() => setPage(i + 1)}
                >
                  {i + 1}
                </button>
              </div>
            );
          })}
      </section>
    </div>
  );
};
