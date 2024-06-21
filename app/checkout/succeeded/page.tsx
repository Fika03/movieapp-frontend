"use client";

import { useSearchParams } from "next/navigation";

export default function () {
  const searchParams = useSearchParams();

  const paymentDescription = searchParams.get("payment_intent") || " ";

  return (
    <section>
      <h1>succeeded</h1>
      <span>Your payment Id is: {paymentDescription} </span>
    </section>
  );
}
