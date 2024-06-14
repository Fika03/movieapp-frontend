import { useCart } from "@/context/cart/CartContext";
import { IMovie } from "@/models/IMovie";
import Image from "next/image";
interface IPropCartCardProduct {
  movie: IMovie;
}

export const CartCardProduct = ({ movie }: IPropCartCardProduct) => {
  const { removeItemFromCart, addItemToCart } = useCart();
  return (
    <section className="p-4">
      <article className="flex justify-start items-center">
        <Image src={movie.Poster} width={50} height={50} alt={movie.Title} />
        <section>
          <h2>{movie.Title}</h2>
          <article>
            <span>
              amount:
              <button
                onClick={() => {
                  addItemToCart(movie);
                }}
              >
                add
              </button>{" "}
              {movie.amount}
            </span>
            <button
              onClick={() => {
                removeItemFromCart(movie);
              }}
            >
              delete
            </button>
          </article>
        </section>
      </article>
      <article>
        <span>{movie.price} kr</span>
      </article>
    </section>
  );
};
