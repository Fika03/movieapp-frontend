import { IMoviePagination } from "@/models/IMoviePagination";
import { fetchXMovies } from "@/utils/fetchXMovies";
import { useEffect, useState } from "react";
import MovieCard from "../MovieCard";

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
    <>
      <section className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {data &&
          data.movies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
      </section>
      <section>
        {data &&
          Array.from(Array(data.totalPages - 1), (e, i) => {
            return (
              <div>
                <button onClick={() => setPage(i + 1)}>{i + 1}</button>
              </div>
            );
          })}
      </section>
    </>
  );
};
