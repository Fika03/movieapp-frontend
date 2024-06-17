import { useCart } from "@/context/cart/CartContext";
import { CartCardProduct } from "./CartCardProduct";

export const CartProducts = () => {
  const { state } = useCart();

  return (
    <section className="flex flex-col items-start ">
      <div className="flex flex-col justify-center items-start overflow-y-auto">
        {state.items?.map((product) => (
          <CartCardProduct key={product.imdbID} movie={product} />
        ))}
        <span>Total Price: {state.totalAmount}</span>
      </div>
    </section>
  );
};
