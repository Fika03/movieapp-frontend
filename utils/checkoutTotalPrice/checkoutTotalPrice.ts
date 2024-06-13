import { IMovie } from "@/models/IMovie";

export const checkoutTotalPrice = (movies: IMovie[]) => {
  let totalPrice = 0;
  movies.forEach((movie) => {
    totalPrice = totalPrice + movie.price * movie.amount;
  });

  return totalPrice;
};
