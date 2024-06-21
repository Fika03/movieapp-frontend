import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { CheckoutForm } from "./CheckoutForm";
import { CartState } from "@/models/cartState";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

export const PayWithStripe = () => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const cart: CartState = JSON.parse(localStorage.getItem("cart") || "[]");
  const payWithStripe = async () => {
    fetch("https://movie-app-api-server.vercel.app/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: cart.items,
      }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  };

  const appearance = {
    theme: "stripe",
  };
  const options: any = {
    clientSecret,
    appearance,
  };

  return (
    <>
      {!clientSecret && (
        <button
          className="bg-white rounded border-2 text-black text-red border-solid border-white"
          onClick={payWithStripe}
        >
          Pay with Stripe
        </button>
      )}
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
};
