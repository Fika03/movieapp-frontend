"use client";

import React, { useEffect, useState } from "react";
import { fetchMovie } from "@/utils/fetchMovie";
import { useCart } from "@/context/cart/CartContext";
import { IMovie } from "@/app/Models/IMovie";

interface Props {
  params: { id: string };
}

const MoviePage: React.FC<Props> = ({ params }) => {
  const [movie, setMovie] = useState<IMovie | null>(null);
  const { addItemToCart } = useCart();

  useEffect(() => {
    const getMovie = async () => {
      const fetchedMovie = await fetchMovie(params.id);
      setMovie(fetchedMovie);
    };

    getMovie();
  }, [params.id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    addItemToCart(movie);
  };

  return (
    <div>
      <h1>{movie.Title}</h1>
      <p>Year: {movie.Year}</p>
      <p>Type: {movie.Type}</p>
      <p>Description: {movie.Description}</p>
      <p>Price: {movie.price}</p>
      <img src={movie.Poster} alt={movie.Title} />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default MoviePage;
