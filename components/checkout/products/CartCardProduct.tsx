import { IMovie } from "@/models/IMovie";
import Image from "next/image";
interface IPropCartCardProduct {
  movie: IMovie;
}

export const CartCardProduct = ({ movie }: IPropCartCardProduct) => {
  return (
    <section className="p-4">
      <article className="flex justify-start items-center">
        <Image src={movie.Poster} width={50} height={50} alt={movie.Title} />
        <h2>{movie.Title}</h2>
      </article>
      <article>
        <span>{movie.price} kr</span>
      </article>
    </section>
  );
};
