import { useCart } from "@/context/cart/CartContext";
import { CartCardProduct } from "./CartCardProduct";

export const CartProducts = () => {
  const { state } = useCart();

  return (
    <section className="flex flex-col justify-center items-center">
      <section className="flex flex-col items-start">
        <div className="flex flex-col justify-center items-start">
          {state.items?.map((product) => (
            <CartCardProduct key={product.imdbID} movie={product} />
          ))}
        </div>
      </section>
      <span className="bg-white text-black rounded p-1 mb-4 font-medium">
        Total Price: {state.totalAmount}
      </span>
    </section>
  );
};
