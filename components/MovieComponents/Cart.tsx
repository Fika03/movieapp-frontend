import { useCart } from "@/context/cart/CartContext";
import Link from "next/link";

export default function Cart() {
  const { state } = useCart();

  return (
    <section>
      <Link href="./checkout"> Checkout</Link>{" "}
      <span>{state.totalAmount} kr</span>
    </section>
  );
}
