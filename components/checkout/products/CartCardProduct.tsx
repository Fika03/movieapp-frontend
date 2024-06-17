import { useCart } from "@/context/cart/CartContext";
import { IMovie } from "@/models/IMovie";
import Image from "next/image";
interface IPropCartCardProduct {
  movie: IMovie;
}

export const CartCardProduct = ({ movie }: IPropCartCardProduct) => {
  const { removeItemFromCart, addItemToCart } = useCart();
  return (
    <section className="p-4 w-full">
      <article className="flex justify-start items-center w-full ">
        <Image
          src={movie.Poster}
          width={50}
          height={50}
          alt={movie.Title}
          sizes="100"
          priority={true}
          className="object-cover  w-1/3 xl:w-1/2"
        />
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
