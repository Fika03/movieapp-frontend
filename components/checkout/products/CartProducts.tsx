import { IMovie } from "@/models/IMovie";
import { CartCardProduct } from "./CartCardProduct";
import { checkoutTotalPrice } from "@/utils/checkoutTotalPrice/checkoutTotalPrice";

const products: IMovie[] = [
  {
    Title: "Star Wars: Episode IV - A New Hope",
    Year: "1977",
    imdbID: "tt0076759",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
    amount: 1,
    price: 159,
  },
  {
    Title: "Star Wars: Episode V - The Empire Strikes Back",
    Year: "1980",
    imdbID: "tt0080684",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    amount: 1,
    price: 179,
  },
  {
    Title: "Star Wars: Episode VI - Return of the Jedi",
    Year: "1983",
    imdbID: "tt0086190",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    amount: 1,
    price: 169,
  },
  {
    Title: "Star Wars: Episode VII - The Force Awakens",
    Year: "2015",
    imdbID: "tt2488496",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
    amount: 1,
    price: 199,
  },
  {
    Title: "Star Wars: Episode I - The Phantom Menace",
    Year: "1999",
    imdbID: "tt0120915",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    amount: 1,
    price: 149,
  },
];

export const CartProducts = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-col justify-center items-start">
        {products.map((product) => (
          <CartCardProduct key={product.imdbID} movie={product} />
        ))}
      </div>
      <span>Total Price: {checkoutTotalPrice(products)}</span>
    </section>
  );
};
