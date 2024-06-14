import { useCart } from "@/context/cart/CartContext";
import { CartCardProduct } from "./CartCardProduct";

export const CartProducts = () => {
  const { state } = useCart();

  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-col justify-center items-start">
        {state.items.map((product) => (
          <CartCardProduct key={product.imdbID} movie={product} />
        ))}
      </div>
      <section>
        <span>Total Price: {state.totalAmount}</span>
      </section>
    </section>
  );
};
