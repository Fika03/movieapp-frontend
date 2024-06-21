import { useCart } from "@/context/cart/CartContext";
import { IMovie } from "@/models/IMovie";
import Image from "next/image";
interface IPropCartCardProduct {
  movie: IMovie;
}

export const CartCardProduct = ({ movie }: IPropCartCardProduct) => {
  const { removeItemFromCart, addItemToCart, removeOneItemFromCart } =
    useCart();
  return (
    <section className="p-4 w-full">
      <article className="flex justify-start items-center w-full">
        <div className="relative w-11/12 h-[180px] max-w-[130px] m-1">
          <Image
            src={movie.Poster}
            alt={movie.Title}
            fill
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
          />
        </div>
        <section>
          <h2>{movie.Title}</h2>
          <article>
            <span>
              amount:
              <div className="flex justify-center items-center">
                <button
                  className="bg-green-600 rounded m-2"
                  onClick={() => {
                    addItemToCart(movie);
                  }}
                >
                  Add
                </button>{" "}
                {movie.amount}
                <button
                  disabled={movie.amount === 1}
                  className={
                    "bg-orange-600 rounded m-2 " +
                    (movie.amount === 1 ? "opacity-70" : "")
                  }
                  onClick={() => {
                    removeOneItemFromCart(movie);
                  }}
                >
                  Remove
                </button>
              </div>
            </span>
            <button
              className="bg-red-600 rounded m-2"
              onClick={() => {
                removeItemFromCart(movie);
              }}
            >
              Delete
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
