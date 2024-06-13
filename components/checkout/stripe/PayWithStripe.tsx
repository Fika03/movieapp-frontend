import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { CheckoutForm } from "./CheckoutForm";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

export const PayWithStripe = () => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const payWithStripe = async () => {
    fetch("https://movie-app-api-server.vercel.app/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: [
          {
            id: 1,
            name: "Laptop",
            imageUrl: "",
            Price: 999,
            Amount: 1,
          },
          {
            id: 2,
            name: "Laptop",
            imageUrl: "",
            Price: 1999,
            Amount: 5,
          },
        ],
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
      {/* {!clientSecret && ( */}
      <button onClick={payWithStripe}>Pay with Stripe</button>
      {/* )} */}
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
};
